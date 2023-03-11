import { queryByCollection, add } from "../../lib/firestore"
import { readBody, getQuery } from "h3"

export default defineEventHandler(async (event) => {
  // Need to post product info to Printify API
  // https://developers.printify.com/#create-product

  console.log("Hello world, I'm the Products PUT API Call and I am alive and working!")

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
  const variants = Array(body.variants)

  const print_provider_id = Number(body.print_provider_id) //should also be passed in by the client when making a post request
  const print_areas = Array(body.print_areas) //should return an ID of an image uploaded to printify by the user in order to make the post request
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
  

  // TODO
  // Validate the data
  

  const opts = {
    url: `https://api.printify.com/v1/shops/6483145/products/${body.id}.json`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q'
    }
  }

  //We still may or may not be struggling here to update our printify product with our calculated price (cost + cost*10% + 100cents)

  const updateProduct = await $fetch(opts.url, {
    method: 'PUT',
    headers: opts.headers,
    body: JSON.stringify(body)
  })

  //Ensure success:
  if (updateProduct.error){
    return { error: updateProduct.error }
  }

  console.log("updateProduct.id")
  console.log(updateProduct.id)


  // Update Firestore
  const newFstore = await $fetch('/api/set?col=products', {method: 'POST', body:updateProduct}) 

  console.log("newFstore")
  console.log(newFstore) //Does this work?


  //Go test this lol



  // TODO This route needs to be auth protected
  // TODO This route needs to be called by a cron job or webhook from printify

  return { status: 200, body: updateProduct }

});