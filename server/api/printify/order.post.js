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

  // const query = getQuery(event)
  // if(query){
  //   console.log(query)
  //   return query
  // }

  const body = readBody(event)

  const runtimeConfig = useRuntimeConfig()

  const opts = {
    method: 'POST',
    url: `https://api.printify.com/v1/shops/6483145/orders.json`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': runtimeConfig.PRINTIFY_API_KEY,
    },
    body: body //as a printify order object
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
