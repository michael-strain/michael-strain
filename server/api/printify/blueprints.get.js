// There's a bit of an order of operations here

// First, admin users should pick a product from the blueprint catalog
// https://developers.printify.com/#retrieve-a-list-of-available-blueprints
// List of all blueprints: /api/printify/blueprints.get.ts
// Printify Endpoint: https://api.printify.com/v1/blueprints.json

// Then, the specific blueprint should be retrieved
// https://developers.printify.com/#retrieve-a-specific-blueprint
// Specific blueprint: /api/printify/blueprints/{id}.get.ts
// Printify Endpoint: https://api.printify.com/v1/blueprints/{id}.json

// Then we need to retrieve the list of all print providers that fulfill orders for your chosen blueprint
// https://developers.printify.com/#retrieve-a-list-of-print-providers
// Get specific print providers: /api/printify/blueprints/{id}/printProvider.get.ts
// Printify Endpoint: https://api.printify.com/v1/blueprints/{id}/print_providers.json

// Then we need retrieve a list of variants from the print provider
// https://developers.printify.com/#retrieve-a-list-of-variants
// Get specific print provider variants: /api/printify/blueprints/{id}/printProvider/{printProviderId}/variants.get.ts
// Printify Endpoint: https://api.printify.com/v1/blueprints/{id}/print_providers/{printProviderId}/variants.json

// Last we need to retrieve the shipping information
// https://developers.printify.com/#retrieve-shipping-information
// Get shipping info: /api/printify/blueprints/{id}/printProvider/{printProviderId}/shipping.get.ts
// Printify Endpoint: https://api.printify.com/v1/blueprints/{id}/print_providers/{printProviderId}/shipping.json

export default defineEventHandler(async () => {
  //Get all Blueprints from Printify
  const opts = {
    method: 'GET',
    url: 'https://api.printify.com/v1/catalog/blueprints.json',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
    }
  }

  // Need to ensure that this doesn't create more than 600 requests per minute.
  // We have to get through ~950 blueprints, if we did 1 per minute it would take 16 hrs to build this page
  // Fuck printify for not having this organized my way
  // If we can figure out how many requests we make per blueprint, we can determine a feasible number of blueprints per minute and ratelimit ourselves correctly
  // If we break past the 600 requests per minute rule, we have to wait until midnight the following night to make more requests... :(
  // We could also consider making a timer, and manually ticking up a request counter, creating a 60 second pause when we hit ~400 requests in any given minute

  let requestCounter = 0
  let requestTimer = 0

  const blueprints = await $fetch(opts.url, {
    method: 'GET',
    headers: opts.headers
  })

  let blueprintsFinal = []
  //Old way we just returned blueprints.  Times were simpler then.. :/

  for (let i=0; i<blueprints.length; i++) {
    let printProviderUrl = "https://api.printify.com/v1/catalog/blueprints/" + blueprints[i].id + "/print_providers.json"
    const printProviders = await $fetch(printProviderUrl, {
      method: 'GET',
      headers: opts.headers
    })
    // console.log("Print Providers Fetched, 0ID: " + printProviders[0].id)
    for (let j=0; j<printProviders.length; j++){
      let variantUrl = 'https://api.printify.com/v1/catalog/blueprints/' + blueprints[i].id + '/print_providers/' + printProviders[j].id + '/variants.json'
      // console.log("Fetching: " + variantUrl)
      let variantData = await $fetch(variantUrl, {
        method:'GET',
        headers:opts.headers
      })
      console.log("Variant Data: " + variantData)
      console.log("Variants Fetched, 0ID: " + variantData[0].id)

      let shippingUrl = 'https://api.printify.com/v1/catalog/blueprints/' + blueprints[i].id + '/print_providers/' + printProviders[j].id + '/shipping.json'
      console.log("Fetching: " + shippingUrl)
      let shipping = await $fetch(shippingUrl, {
        method: 'GET',
        headers: opts.headers
      })
      console.log("Shipping Data Fetched, 0 handling time: " + shipping[0].handling_time)

      for (let k=0; k<variantData.variants.length; k++) {
        // blueprints[i].variants = []
        // variantData.shippingProfile = []
        blueprints[i].variants[k] = variantData.variants
        blueprints[i].variants[k].shippingProfile = []
        for (let j=0; j<shipping.profiles.length; j++) {
          if ( shipping.profiles[j].variant_ids.includes(blueprints[i].variants[k].id)) {
            blueprints[i].variants[k].shippingProfile.push(shipping.profiles[j])
            blueprints[i].variants[k].handlingTime = shipping.handling_time.value
            blueprints[i].variants[k].handlingTimeUnit = shipping.handling_time.unit
          }
        }
        blueprintsFinal.push(blueprints[i])
        console.log("Finished adding variant and shipping data to blueprint #" + i)
      }
    }
  }
  // We may still want to consider adding all this data to our own firestore at some point.
  return blueprintsFinal
})

// type Blueprint = [{
//   id: number;
//   title: string;
//   description: string;
//   brand: string;
//   model: string;
//   images: [string]
// }]

// const { data: blueprints } = $fetch(opts.url, {
  //   method: 'GET',
  //   headers: opts.headers
  // }) : Promise<Blueprint[]>



  // console.log(blueprints)

  // console.log("blueprints: ", blueprints.length, " blueprints fetched.")

  //Compare length of blueprints in Printify with length of blueprints in DB
  // Since this is only called when someone manually calls it, it's okay to pull the whole collection here
  // const { result } = $fetch("/api/query?col=blueprints")

  // const docs = queryByCollection("blueprints")
  // // console.log(docs)
  // if ( docs.length < blueprints.length ) {
  //   // If Printify has more blueprints than DB, then update DB
  //   // This will be a PUT request to /api/blueprints
  //   for (let i=0; i<blueprints.length; i++) {
  //     // If product is in results, skip it, otherwise add it
  //     if ( docs.find( (product) => product.id === blueprints[i].id ) ) {
  //       continue
  //     } else {
  //       console.log("Found new product! " + blueprints[i].id)
  //       const body = readBody(blueprints[i]);
  //       const docRef = add("blueprints", body);
  //       console.log(docRef)
  //       // Add product to DB
  //       // const { postResult } = $fetch("/api/add?col=blueprints", {
  //       //   method: 'POST',
  //       //   body: blueprints[i]
  //       // })
  //     }
  //   }
  // }

  //Should we put this in firestore?  Or just try to store it locally somehow?


  //Need to initialize and store blueprint data in it's DataStore
  
  // TODO This route needs to be auth protected
  // TODO This route needs to be called by a cron job or webhook from printify
