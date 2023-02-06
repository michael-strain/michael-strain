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
    url: 'https://api.printify.com/v1/catalog/print_providers.json',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
    }
  };

  const printProvider: PrintProvider = await $fetch(opts.url, {
    method: 'GET',
    headers: opts.headers
  })
  
  // const { data: printProvider } = await $fetch(opts.url, {
  //   method: 'GET',
  //   headers: opts.headers
  // }) : Promise<printProvider[]>



  // console.log(printProvider)

  // console.log("printProvider: ", printProvider.length, " printProvider fetched.")

  //Compare length of printProvider in Printify with length of printProvider in DB
  // Since this is only called when someone manually calls it, it's okay to pull the whole collection here
  // const { result } = await $fetch("/api/query?col=printProvider")

  // const docs = await queryByCollection("printProvider")
  // // console.log(docs)
  // if ( docs.length < printProvider.length ) {
  //   // If Printify has more printProvider than DB, then update DB
  //   // This will be a PUT request to /api/printProvider
  //   for (let i=0; i<printProvider.length; i++) {
  //     // If product is in results, skip it, otherwise add it
  //     if ( docs.find( (product) => product.id === printProvider[i].id ) ) {
  //       continue
  //     } else {
  //       console.log("Found new product! " + printProvider[i].id)
  //       const body = await readBody(printProvider[i]);
  //       const docRef = await add("printProvider", body);
  //       console.log(docRef)
  //       // Add product to DB
  //       // const { postResult } = await $fetch("/api/add?col=printProvider", {
  //       //   method: 'POST',
  //       //   body: printProvider[i]
  //       // })
  //     }
  //   }
  // }
  console.log(printProvider)

  //Should we put this in firestore?  Or just try to store it locally somehow?


  //Need to initialize and store printProvider data in it's DataStore
  
  // TODO This route needs to be auth protected
  // TODO This route needs to be called by a cron job or webhook from printify

  return { status: 200, body: printProvider }

});

type PrintProvider = [{
  id: number;
  title: string;
  location: {
    address1: string;
    address2: string;
    city: string;
    country: string;
    region: string;
    zip: string;
  };
}]