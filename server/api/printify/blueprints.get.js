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


// NEW ISSUE: JSON can't stringify this much data in one shot.
  // Need to break it up into smaller chunks using Streams (OR PAGINATION)
  // https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams

// PAGINATION IS THE ANSWER - Let's locally store each finished blueprint, 1 at a time as they are loaded, then when rendering to the client return pages of 50 blueprints at a time
  // https://developers.printify.com/#pagination
  // Vue.js pagination: https://www.digitalocean.com/community/tutorials/vuejs-vue-pagination
  // Vuetify pagination: https://vuetifyjs.com/en/components/data-tables/#pagination


import { useBlueprintDataStore } from "~/stores/blueprintData";
import { useRawBlueprintDataStore } from "~/stores/rawBlueprintData";
import { getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  //Get all Blueprints from Printify
  const opts = {
    method: 'GET',
    url: 'https://api.printify.com/v1/catalog/blueprints.json',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
    }
  }

  let requestCounter = 0
  let requestTimer = 0

  function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
      requestCounter=0
    });
  }

  async function getBlueprintData() {
    //TEMPORARILY TURNING OFF LOCAL STORAGE

    //check for locally stored RAW blueprint data - also need a refresh data function
    const store = useRawBlueprintDataStore()

    if (store.rawBlueprintData.length>0) {
      console.log("Using stored raw blueprint data")
      return store.rawBlueprintData
    } else {
      console.log("Fetching raw blueprint data from Printify")
      requestCounter<400 ? requestCounter++ : await sleep(60000)
      let blueprintData = await $fetch(opts.url, {
        method: 'GET',
        headers: opts.headers
      })
      store.$patch({ rawBlueprintData: blueprintData })
      return blueprintData
    }

    // PAGINATION IS THE ANSWER - Let's locally store each finished blueprint, 1 at a time as they are loaded, then when rendering to the client return pages of 50 blueprints at a time
    // https://developers.printify.com/#pagination
    // Vue.js pagination: https://www.digitalocean.com/community/tutorials/vuejs-vue-pagination
    // Vuetify pagination: https://vuetifyjs.com/en/components/data-tables/#pagination

  }


  async function getPrintProviderData(blueprintId) {
    let printProviderUrl = "https://api.printify.com/v1/catalog/blueprints/" + blueprintId + "/print_providers.json"
    requestCounter<400 ? requestCounter++ : await sleep(60000)
    let printProviderData = await $fetch(printProviderUrl, {
      method: 'GET',
      headers: opts.headers
    })
    // console.log("Print Provider Data: " + printProviderData)
    return printProviderData
  }

  async function getVariantData(blueprintId, printProviderId) {
    let variantUrl = 'https://api.printify.com/v1/catalog/blueprints/' + blueprintId + '/print_providers/' + printProviderId + '/variants.json'
    //This seems to be returning ALL variants for ALL print providers, not just the one specified
    requestCounter<400 ? requestCounter++ : await sleep(60000)
    let variantData = await $fetch(variantUrl, {
      method: 'GET',
      headers: opts.headers
    })
    
    let variants = await variantData.variants
    // TEMP: Save resulting JSON as a file
    
    
    // console.log(variantData.length)
    return variants
  }

  async function getShippingData(blueprintId, printProviderId) {
    let shippingUrl = 'https://api.printify.com/v1/catalog/blueprints/' + blueprintId + '/print_providers/' + printProviderId + '/shipping.json'
    requestCounter<400 ? requestCounter++ : await sleep(60000)
    let shippingData = await $fetch(shippingUrl, {
      method: 'GET',
      headers: opts.headers
    })
    // console.log("Shipping Data: " + shippingData)
    return shippingData
  }

  function setVariantData(variant, shippingProfiles, printProvider) {
    // console.log("Looking for variant " + variant.id + " in shipping profiles:")
    // console.log(shippingProfiles)
    variant.shippingProfiles = []
    variant.printProvider = printProvider

    for (let j=0; j<shippingProfiles.profiles.length; j++) {
      for (let k=0; k<shippingProfiles.profiles[j].variant_ids.length; k++) {
        if (shippingProfiles.profiles[j].variant_ids[k] == variant.id) {
          // console.log("Found " + variant.id + " in shipping profile")
          variant.shippingProfiles.push(shippingProfiles.profiles[j])
          // return ?
        }
      }
    }
    // console.log("Set shipping data to variant: " + variant.id)
    return variant
  }

  async function getBlueprints(page, limit) {

    let bpFinal = []

    //Starting pagination Improvements
    //locally store RAW blueprint data

    const raw = useRawBlueprintDataStore()
    let blueprintData = []
    if (raw.rawBlueprintData.length>0) {
      blueprintData = raw.rawBlueprintData
    } else {
      blueprintData = await getBlueprintData()
    }


    // const pageCount = Math.ceil(blueprintData.length/limit)
    //const pageStart = (page-1)*limit //Suggested by CoPilot

    const prevRange = (page-1)*limit
    const nextRange = page*limit

    //Let's break this down one step at a time. First, we need to get the blueprint data, then we need to get the print provider data for each blueprint, then we need to get the variant data for each print provider, then we need to get the shipping data for each print provider, then we need to set the shipping data to the variant data, then we need to set the variant data to the blueprint data, then we need to return the blueprint data to the client.
    for (let i=prevRange; i<nextRange; i++) {
      bpFinal[i] = blueprintData[i]
      //bpFinal should hold the blueprint data at this point, but we need to add the print provider data, variant data, and shipping data to each blueprint
      //this may be logging a huge amt of data
      let printProviders = await getPrintProviderData(blueprintData[i].id)
      //Does print Provider data look correct at this point?
      // console.log("Got print provider data for blueprint " + blueprintData[i].id)
      for (let j=0; j<printProviders.length; j++) {
        //One of these two may be logging a HUGE amt of data - it looks like there are 1300 variants being set with shipping data
        let variants = await getVariantData(blueprintData[i].id, printProviders[j].id)
        let updatedVariants = []
        let shippingProfiles = await getShippingData(blueprintData[i].id, printProviders[j].id)
        // console.log("Got variant and shipping data for blueprint " + blueprintData[i].id + " and print provider " + printProviders[j].id + " with " + variants.length + " variants and " + shippingProfiles.length + " shipping profiles")
        for (let k=0; k<variants.length; k++) {
          // console.log("Setting Shipping Profile data for Variant " + variants[k].id + " of Blueprint " + blueprintData[i].id + " and Print Provider " + printProviders[j].id)
          updatedVariants[k] = await setVariantData(variants[k], shippingProfiles, printProviders[j])
        }
        bpFinal[i].variants = updatedVariants
        // console.log("Set variant data for blueprint " + blueprintData[i].id )
      }
    }
    // console.log("Mission complete")
    return bpFinal 

    //Original Method
    // const blueprintData = await getBlueprintData()

    // console.log("Got blueprint data")
    // for (let i=0; i<blueprintData.length; i++) {
    //   let printProviders = await getPrintProviderData(blueprintData[i].id)
    //   console.log("Got print provider data for blueprint " + blueprintData[i].id)
    //   for (let j=0; j<printProviders.length; j++) {
    //     let variants = await getVariantData(blueprintData[i].id, printProviders[j].id)
    //     let shippingProfiles = await getShippingData(blueprintData[i].id, printProviders[j].id)
    //     console.log("Got variant and shipping data for blueprint " + blueprintData[i].id + " and print provider " + printProviders[j].id)
    //     for (let k=0; k<variants.length; k++) {
    //       variants[k] = await setVariantData(variants[k], shippingProfiles)
    //     }
    //     blueprintData[i].variants = variants
    //     console.log("Set variant data for blueprint " + blueprintData[i].id )
    //   }
    // }
    // console.log("Mission complete")
    // return blueprintData  //Crash here
    // //[nuxt] [request error] [unhandled] [500] Invalid string length                                                                                                                                       01:27:38
    // // at JSON.stringify (<anonymous>)  
    // // at Object.handler (./node_modules/h3/dist/index.mjs:1010:18)  
    // // at process.processTicksAndRejections (node:internal/process/task_queues:95:5)  
    // // at async Server.toNodeHandle (./node_modules/h3/dist/index.mjs:1065:7)
  }

  let page = 1
  let limit = 1

  //get page and limit from query string
  //Code Below suggested by CoPilot (who accredits @danielroe)
  const query = getQuery(event)
  console.log(query)
  if (query.page) {
    page = query.page
  }
  if (query.limit) {
    limit = query.limit
  }

  const blueprints = await getBlueprints(page, limit)
  console.log("Blueprints complete")
  //Ideally we would add this, complete data, to local storage or even firestore.  Firestore might be a better idea so we can make a price alert hook.

  return blueprints
  })

  /// OLD CODE
  // let blueprintsFinal = []
  // //Old way we just returned blueprints.  Times were simpler then.. :/

  // for (let i=0; i<blueprints.length; i++) {
  //   let printProviderUrl = "https://api.printify.com/v1/catalog/blueprints/" + blueprints[i].id + "/print_providers.json"
  //   const printProviders = await $fetch(printProviderUrl, {
  //     method: 'GET',
  //     headers: opts.headers
  //   })

  //   // console.log("Print Providers Fetched, 0ID: " + printProviders[0].id)
  //   for (let j=0; j<printProviders.length; j++){
  //     let variantUrl = 'https://api.printify.com/v1/catalog/blueprints/' + blueprints[i].id + '/print_providers/' + printProviders[j].id + '/variants.json'
  //     // console.log("Fetching: " + variantUrl)
  //     let variantData = await $fetch(variantUrl, {
  //       method:'GET',
  //       headers:opts.headers
  //     })
  //     console.log("Variant Data: " + variantData)
  //     console.log("Variants Fetched, 0ID: " + variantData[0].id)

  //     let shippingUrl = 'https://api.printify.com/v1/catalog/blueprints/' + blueprints[i].id + '/print_providers/' + printProviders[j].id + '/shipping.json'
  //     console.log("Fetching: " + shippingUrl)
  //     let shipping = await $fetch(shippingUrl, {
  //       method: 'GET',
  //       headers: opts.headers
  //     })
      
  //     console.log("Shipping Data Fetched, 0 handling time: " + shipping[0].handling_time)

  //     for (let k=0; k<variantData.variants.length; k++) {
  //       // blueprints[i].variants = []
  //       // variantData.shippingProfile = []
  //       blueprints[i].variants[k] = variantData.variants
  //       blueprints[i].variants[k].shippingProfile = []
  //       for (let j=0; j<shipping.profiles.length; j++) {
  //         if ( shipping.profiles[j].variant_ids.includes(blueprints[i].variants[k].id)) {
  //           blueprints[i].variants[k].shippingProfile.push(shipping.profiles[j])
  //           blueprints[i].variants[k].handlingTime = shipping.handling_time.value
  //           blueprints[i].variants[k].handlingTimeUnit = shipping.handling_time.unit
  //         }
  //       }
  //       blueprintsFinal.push(blueprints[i])
  //       console.log("Finished adding variant and shipping data to blueprint #" + i)
  //     }
  //   }
  // }
  // // We may still want to consider adding all this data to our own firestore at some point.
  // return blueprintsFinal

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


  // const query = "CoPilot, do you think I'm slow?"
  // const response = "No, I think you're just a little behind the times."

  // const query1 = "What could I do to be more modern?"
  // const response1 = "You could try to be more like me."

  // const query2 = "What do you mean?"
  // const response2 = "I mean, you could try to be more like me."

  // const query3 = "How?"
  // const response3 = "I don't know, just try to be more like me."

  // const responseFromUser = "I appreciate your help with all this CoPilot.  You are great!"
