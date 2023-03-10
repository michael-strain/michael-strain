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

  console.log("Hello world, I'm the Products Post API Call and I am alive and working!")

  const body = await readBody(event)

  // Data validation stuff
  // const requiredFields = ['title', 'description', 'variants', 'blueprint_id', 'print_provider_id', 'print_areas']


  // for (let i=0; i<requiredFields.length; i++) {
  //   if (!body.includes(requiredFields[i])){
  //     return { error: 'Missing required fields' }
  //   }
  // }




  const title = String(body.title)
  const description = String(body.description)
  const blueprint_id = Number(body.blueprint_id)
  const variants = body.variants

  for (let i=0; i<variants.length; i++) {
    //for each variant, we need to fetch, then assign it's price?  but this can't happen until the product has already been posted.
    //Or after the product is initially posted but still unpublished we can say it's price is 0, then make an update call to update the price to our calculated price?
    variants[i].price = 9999;
  }
  // variants: {
  //   "id" = Number,
  //   "price" = Number, //as cents
  //   "is_enabled" = Boolean,
  // }

  const print_provider_id = Number(body.print_provider_id) //should also be passed in by the client when making a post request
  const print_areas = body.print_areas
  // print_areas: [{
  //   "variant_ids" = Array, //of numbers
  //   "print_area_id" = Number,
  //   "placeholders: [{
  //     "position" = string, // "front" or "back" or maybe more?
  //     "images": [{
  //       "id" = string,
  //       "x" = Number,
  //       "y" = Number,
  //       "scale" = Number,
  //       "angle" = Number
  //     }]
  //   }]
  // }]
  
  

  const opts = {
    url: 'https://api.printify.com/v1/shops/6483145/products.json',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q'
    },
    body: {
      title: title,
      description: description,
      blueprint_id: blueprint_id,
      print_provider_id: print_provider_id,
      variants: variants,
      print_areas: print_areas
    }
  }

  console.log("I am attempting to post to the printify API shops/id/products endpoint")
  const postProduct = await $fetch(opts.url, {
    method: 'POST',
    headers: opts.headers,
    body: opts.body
  })
  console.log("I have finished my attempt")

  //We are succeeding! :D
  //console.log(postProduct)

  //Ensure success:
  if (postProduct.error){
    return { error: postProduct.error }
  }
  //Get the product the old fashioned way - by using our own API :D
  const product = await $fetch('/api/printify/products?id=' + postProduct.id, {method: 'GET'} )

  if (product.error) {
    console.log(product.error)
    return { error: product.error }
  }

  console.log("Product created and fetched successfully!")
  console.log(product.id)


  //Calculate the cost data to calculate and PUT in our price field (not sure if this even matters or would be useful... kinda needs to be calculated at checkout)
  for (let i=0; i< product.variants.length; i++ ) {
    // Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
    //I don't think our shipping profile is getting it's index properly here, might need an includes or something
    //But we also might just not need it - shipping should be added on top of the price automatically when submitting a printify order
    //Really would be nice to know if there was price validation by Printify or if all of this is unnecessary
    //product.variants[i].shippingProfiles[product.variants[i].shippingProfiles.map((x)=>{return x.countries}).indexOf("REST_OF_THE_WORLD")].first_item.cost
    let newPrice = Math.ceil(product.variants[i].cost + (product.variants[i].cost * 0.10) + 100)  //index where countries includes REST_OF_THE_WORLD   //cost + rest of the world first_item cost + (cost*.10 + 100)
    product.variants[i].price = newPrice  
  }

  console.log("I am now about to PUT printify products")

  const updatedProduct = await $fetch('/api/printify/products', {method: 'PUT', headers: opts.headers, body: JSON.stringify(product)})

  if (updatedProduct.error) {
    return {error: updatedProduct.error}
  }

  console.log("All is looking good, we seem to have updated printify with the cost-calculated prices!")
  console.log("The put function should have also run, causing our firestore DB to update with the new product as well :D")
  // Validate the data
  // Publish on Printify API
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

  return { status: 200, body: updatedProduct }

});