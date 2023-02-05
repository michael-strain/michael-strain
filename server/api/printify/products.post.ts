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

import { queryByCollection, add } from "../../lib/firestore"
import { readBody, getQuery } from "h3"

// export default defineEventHandler(async (event)=>{
//   try{
//     const query = getQuery(event);
//     const body = await readBody(event);
//     const docRef = await add(query.col as string, body);
//     return { result: docRef };
//   } catch (error) {
//     console.log(error)
//     return { error: error.message }
//   }
// });

export default defineEventHandler(async (event) => {
  // Need to post product info to Printify API
  // https://developers.printify.com/#create-product

  const body = await readBody(event)

  // Data validation stuff
  const requiredFields = ['title', 'description', 'variants', 'blueprint_id', 'print_provider_id', 'print_areas']
  const title = String(body.title)

  const opts = {
    url: 'https://api.printify.com/v1/shops/6483145/products.json',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q'
    }
  }


  const { data: products } = await $fetch(opts.url, {
    method: 'POST',
    headers: opts.headers,
    body: JSON.stringify(body)
  })



  // Validate the data
  // Post data to Firestore as Pending
  // Post data to Printify API
  // Update Firestore as Published




  //Get all Products from Printify
  // const opts = {
  //   method: 'GET',
  //   url: 'https://api.printify.com/v1/shops/6483145/products.json',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
  //   }
  // }
  
  // const { data: products } = await $fetch(opts.url, {
  //   method: 'GET',
  //   headers: opts.headers
  // })

  // const docs = await queryByCollection("products")
  // // console.log(docs)
  // if ( docs.length < products.length ) {
  //   // If Printify has more products than DB, then update DB
  //   // This will be a PUT request to /api/printify/products
  //   for (let i=0; i<products.length; i++) {
  //     // If product is in results, skip it, otherwise add it
  //     if ( docs.find( (product) => product.id === products[i].id ) ) {
  //       continue
  //     } else {
  //       console.log("Found new product! " + products[i].id)
  //       const body = await readBody(products[i]);
  //       const docRef = await add("products", body);
  //       console.log(docRef)
  //       // Add product to DB
  //       // const { postResult } = await $fetch("/api/add?col=products", {
  //       //   method: 'POST',
  //       //   body: products[i]
  //       // })
  //     }
  //   }
  // }

  // TODO This route needs to be auth protected
  // TODO This route needs to be called by a cron job or webhook from printify

  return { status: 200, body: "Success" }

});