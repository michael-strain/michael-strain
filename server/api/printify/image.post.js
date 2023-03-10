//First, we upload an image to Cloudflare CDN using their API
//Then we post the image to printify using their API and the URL method

// Upload image to a Printify account's media library
// POST /v1/uploads/images.json
// BODY PARAMETER (UPLOAD IMAGE BY URL)
// {
//     "file_name": "1x1-ff00007f.png",
//     "url": "http://png-pixel.com/1x1-ff00007f.png"
// }
// BODY PARAMETER (UPLOAD IMAGE BY BASE64-ENCODED CONTENTS)
// {
//     "file_name": "image.png",
//     "contents": "base-64-encoded-content"
// }

//WARNING
//We highly recommend using upload via image URL for files larger than 5MB.
//Upload via image URL is the future-proof solution, as we plan to drop support for base64-encoded content uploads larger than 5MB in the future.



//Response example:
// {
//   "id": "5941187eb8e7e37b3f0e62e5",
//   "file_name": "image.png",
//   "height": 200,
//   "width": 400,
//   "size": 1021,
//   "mime_type": "image/png",
//   "preview_url": "https://example.com/image-storage/uuid3",
//   "upload_time": "2020-01-09 07:29:43"
// }




//TEMP EXAMPLE FROM PRODUCTS POST:
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

// import { queryByCollection, add } from "../../lib/firestore"
// import { readBody, getQuery } from "h3"

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

import { getQuery, readBody } from 'h3'

export default defineEventHandler(async (event) => {

  const query = getQuery(event)
  const body = await readBody(event)
  // console.log("body: ")
  // console.log(body)
  const imageName = body.file_name
  // const imageUrl = body.url
  const imageUrl = body.url

  // console.log(body.file_name)

  
  //

  // console.log("imageUrl: " + imageUrl)

  //Get the imageUrl using a Base64 Encoded Binary String passed in as image

  // console.log(res(function(resolve, reject) {
  //   if (res.ok) {
  //     resolve(res.json())
  //   } else {
  //     reject(res.text())
  //   }
  // }))



  //this stuff should be server side
  const opts = {
    method: 'POST',
    url: `https://api.printify.com/v1/uploads/images.json`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q'
    },
    body: JSON.stringify({
      "file_name":imageName,
      "url":imageUrl
      // "contents": image
    })
  }
  const response = await $fetch(opts.url, {
    method: 'POST',
    headers: opts.headers,
    body: opts.body
  })

  if (response.error){
    console.log(response.error)
    return response.error
  }
  // console.log(response)
  // Need to post product info to Printify API
  // https://developers.printify.com/#create-product

  // const body = await readBody(event)

  // // Data validation stuff
  // const requiredFields = ['title', 'description', 'variants', 'blueprint_id', 'print_provider_id', 'print_areas', 'images']
  // const title = String(body.title)
  // const description = String(body.description)
  // const variants = Array(body.variants)
  // // variants: {
  // //   "id" = Number,
  // //   "price" = Number, //as cents
  // //   "is_enabled" = Boolean,
  // // }
  // const blueprint_id = Number(body.blueprint_id) // should be passed in by the client when making a post request
  // const print_provider_id = Number(body.print_provider_id) //should also be passed in by the client when making a post request
  // const print_areas = Array(body.print_areas) //should return an ID of an image uploaded to printify by the user in order to make the post request
  // // print_areas: {
  // //   "variant_ids" = Array, //of numbers
  // //   "print_area_id" = Number,
  // //   "placeholders: [{
  // //     "position" = string, // "front" or "back" or maybe more?
  // //     "images": [{
  // //       "id" = string,
  // //       "x" = Number,
  // //       "y" = Number,
  // //       "scale" = Number,
  // //       "angle" = Number
  // //     }]
  // //   }]
  // // }
  
  

  // const opts = {
  //   url: 'https://api.printify.com/v1/shops/6483145/products.json',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q'
  //   }
  // }


  // const { data: products } = await $fetch(opts.url, {
  //   method: 'POST',
  //   headers: opts.headers,
  //   body: JSON.stringify(body)
  // })

  return response

});