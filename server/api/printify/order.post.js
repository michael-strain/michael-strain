//This needs to ONLY RUN after a successful payment has been made
//We need to store our relevant order, shipping, and payment info in the database
//We need users to be able to GET their own orders
//We need admins to be able to GET all orders

//POST order to printify

//Process relevant information returned by the order post

//POST finalOrder info to Firestore DB

//Return a success message with an ID or something?  Maybe redirect users to a success page with their order info?

import { readBody } from 'h3'

export default defineEventHandler(async (event) => {

  const query = getQuery(event)
  if(query){
    console.log(query)
    return query
  }

  const opts = {
    method: 'GET',
    url: `https://api.printify.com/v1/shops/6483145/orders/${query.id}.json`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
    }
  }

  const result = await $fetch(opts.url, {method: 'GET', headers: opts.headers })

  
  return result
})





// POST Order Body
const postOrderBody = {
  "external_id": "<string>", //required - let's use our firebase id here
  "line_items": [
    {
      "product_id": "<string>", //required
      "print_provider_id": "<integer>", //required
      "variant_id": "<integer>", //required
      "quantity": "<integer>" //required

      //You can also have products created as they are ordered if you supply a blueprint ID and print_areas
    },
    {
      "product_id": "<string>",
      "print_provider_id": "<integer>",
      "blueprint_id": "<integer>",
      "variant_id": "<integer>",
      "print_areas": "<object>",
      "quantity": "<integer>"
    }
  ],
  "shipping_method": 1,
  "send_shipping_notification": "<boolean>",
  "address_to": {
    "first_name": "<string>",
    "last_name": "<string>",
    "email": "<string>",
    "phone": "<string>",
    "country": "<string>",
    "region": "<string>",
    "address1": "<string>",
    "address2": "<string>",
    "city": "<string>",
    "zip": "<string>"
  }
}
