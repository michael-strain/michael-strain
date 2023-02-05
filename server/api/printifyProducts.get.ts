import { queryByCollection, add } from "../lib/firestore"
import { readBody } from "h3"


export default defineEventHandler(async () => {
  //Get all Products from Printify
  const opts = {
    method: 'GET',
    url: 'https://api.printify.com/v1/shops/6483145/products.json',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
    }
  }
  
  const { data: products } = await $fetch(opts.url, {
    method: 'GET',
    headers: opts.headers
  })

  // console.log(products)

  // console.log("Products: ", products.length, " products fetched.")

  //Compare length of products in Printify with length of products in DB
  // Since this is only called when someone manually calls it, it's okay to pull the whole collection here
  // const { result } = await $fetch("/api/query?col=products")

  const docs = await queryByCollection("products")
  // console.log(docs)
  if ( docs.length < products.length ) {
    // If Printify has more products than DB, then update DB
    // This will be a PUT request to /api/printify/products
    for (let i=0; i<products.length; i++) {
      // If product is in results, skip it, otherwise add it
      if ( docs.find( (product) => product.id === products[i].id ) ) {
        continue
      } else {
        console.log("Found new product! " + products[i].id)
        const body = await readBody(products[i]);
        const docRef = await add("products", body);
        console.log(docRef)
        // Add product to DB
        // const { postResult } = await $fetch("/api/add?col=products", {
        //   method: 'POST',
        //   body: products[i]
        // })
      }
    }
  }
  // TODO This route needs to be auth protected
  // TODO This route needs to be called by a cron job or webhook from printify

  return { status: 200, body: "Success" }

});