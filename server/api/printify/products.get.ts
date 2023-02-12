import { queryByCollection, add } from "../../lib/firestore"
import { readBody, getQuery } from "h3"
import { doc } from "firebase/firestore"


//used to be asynchronous
export default defineEventHandler(async (event) => {

  // if(await readBody(event)) {
  //   // console.log("Body: ", readBody(event))
  //   const body = await readBody(event)
  //   console.log("Body: ", body)
  // }

  // if (getQuery(event).id) {
  //   // query firestore using api for product id = event.id
  //   const query = getQuery(event)
  //   // console.log(query)  // Time to get our shipping costs from the print provider

  //   // Time to get our shipping costs from the print provider


  //   // console.log(products)

  //   // console.log("Products: ", products.length, " products fetched.")

  //   //Compare length of products in Printify with length of products in DB
  //   // Since this is only called when someone manually calls it, it's okay to pull the whole collection here
  //   // const { result } = await $fetch("/api/query?col=products")

  //   // console.log(products)
  
  //   // console.log("Products: ", products.length, " products fetched.")
  
  //   //Compare length of products in Printify with length of products in DB
  //   // Since this is only called when someone manually calls it, it's okay to pull the whole collection here
  //   // const { result } = await $fetch("/api/query?col=products")
  
  //   const opts = {
  //     method: 'GET',
  //     url: '/api/query?col=products&id=' + query.id,
  //   }

  //   //used to have await
  //   const result = await $fetch(opts.url, { method: 'GET' })

  //   return { result: result.result }
  // } 

  let requestCounter = 0

  function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
      requestCounter = 0
    });
  }

  //Get all Products from Printify
  const opts = {
    method: 'GET',
    url: 'https://api.printify.com/v1/shops/6483145/products.json',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
    }
  }
  
  if(requestCounter < 400){
    const { data: products } = await $fetch(opts.url, {
      method: 'GET',
      headers: opts.headers
    })
    requestCounter++
  } else {
    await sleep(60000)
  }
  

  //used to have await
  const docs = await queryByCollection("products")
  // console.log(docs)
  if ( docs.length < products.length ) {
    // If Printify has more products than DB, then update DB
    // This will be a PUT request to /api/printify/products

    try{
      for (let i=0; i<products.length; i++) {
        // If product is in results, skip it, otherwise add it
        if ( docs.find( (product) => product.id === products[i].id ) ) {
          continue
        } else {
          console.log("Found new product! " + products[i].id)

          //itemcost + itemShippingcost + desiredProfitMargin = displayed price?

          //for each product, for each variant, look through each shipping profile to find relevant shipping information
          let printProviderUrl = 'https://api.printify.com/v1/catalog/blueprints/' + products[i].blueprint_id + '/print_providers/' + products[i].print_provider_id + '/shipping.json'

          //used to have await
          if (requestCounter < 400) {
            let shipping = await $fetch(printProviderUrl, {
              method: 'GET',
              headers: opts.headers
            })
            requestCounter++
          } else {
            await sleep(60000)
          }

          // console.log(shipping)

          //for each variant in product
          for (let k=0; k<products[i].variants.length; k++) {
            let shippingProfile = 0
            products[i].variants[k].shippingProfile = []
            for (let j=0; j<shipping.profiles.length; j++) {
              // console.log("Searching for ("+products[i].variants[k].id+") in ("+shipping.profiles[j].variant_ids+")")
              if ( shipping.profiles[j].variant_ids.includes(products[i].variants[k].id)) {
                // console.log("Found it! " + products[i].variants[k].id)
                products[i].variants[k].shippingProfile[shippingProfile] = shipping.profiles[j]
                products[i].variants[k].handlingTime = shipping.handling_time.value
                products[i].variants[k].handlingTimeUnit = shipping.handling_time.unit
                shippingProfile++
                // products[i].variants[k].firstItemCost = shipping.profiles[j].first_item.cost
                // products[i].variants[k].additionalItemCost = shipping.profiles[j].additional_items.cost
                // products[i].variants[k].shippingCountries = shipping.profiles[j].countries
                // products[i].variants[k].handlingTime = shipping.handling_time.value
                // products[i].variants[k].handlingTimeUnit = shipping.handling_time.unit
              }
            }
          }

          // const body = await readBody(products[i]);
          // const body = await products[i]
          let docy = products[i]
          // console.log(body.options[0].values + " Seems to work")
          // console.log(body.variants[0].options + " Not sure if this works")
          // console.log(body.variants[0].shippingProfile + " This seems to work")
          // console.log(body.images[0].variant_ids)
          // console.log(body.print_areas[0].variant_ids)
          // console.log(body.print_areas[0].placeholders)
          
          //used to have await
          // console.log("I'm the problem")
          let docRef = await add("products", docy);
          // console.log("I'm not the problem")
          // console.log(docRef)
        }
      }
    } catch (error) {
      console.log(error)
      return { error: error.message }
    }
  }
  // TODO This route needs to be auth protected
  // TODO This route needs to be called by a cron job or webhook from printify

  // TODO When this route is called, we should also call our blueprint and print provider routes to get our shipping info, costs, availability, and anything else we need to update in the products collection and productDataStore

  return { status: 200, body: "Success" }

});

// type Shipping = [{
//     variant_ids: number[],
//     first_item: {
//       cost: number,
//       currency: string

//     },
//     additional_items: {
//       cost: number,
//       currency: string
//     },
//     countries: string[]
//   }]

// type Product = {
//   title: string,
//   description: string,
//   blueprint_id: number,
//   print_provider_id: number,
//   variants: [{
//     id: number,
//     cost:number,
//     price: number,
//     is_enabled: boolean,
//     handlingTime?: number,
//     handlingTimeUnit?: string,
//     shippingProfile?: [{
//       firstItemCost?: number,
//       additionalItemCost?: number,
//       shippingCountries?: string[]
//     }]
//   }]
// }