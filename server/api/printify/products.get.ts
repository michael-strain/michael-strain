import { queryByCollection, add } from "../../lib/firestore"
import { readBody, getQuery } from "h3"


export default defineEventHandler(async (event) => {

  if (event) {
    // query firestore using api for product id = event.id
    const query = getQuery(event)
    const opts = {
      method: 'GET',
      url: '/api/query?col=products&id=' + query.id,
    }
    const result: Product = await $fetch(opts.url, { method: 'GET' })

    return { result: result.result }
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
  
  const { data: products } = await $fetch(opts.url, {
    method: 'GET',
    headers: opts.headers
  })

  // Time to get our shipping costs from the print provider


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

        //itemcost + itemShippingcost + desiredProfitMargin = displayed price?

        //for each product, for each variant, look through each shipping profile to find relevant shipping information
        let printProviderUrl = 'https://api.printify.com/v1/catalog/blueprints/' + products[i].blueprint_id + '/print_providers/' + products[i].print_provider_id + '/shipping.json'

        const shipping: Shipping = await $fetch(printProviderUrl, {
          method: 'GET',
          headers: opts.headers
        })

        for (let k=0; k<products[i].variants.length; k++) {
          for (let j=0; j<shipping.profiles.length; j++) {
            if ( shipping.profiles[j].variant_ids.includes(products[i].variants[k].id)) {
              products[i].variants[k].firstItemCost = shipping.profiles[j].first_item.cost
              products[i].variants[k].additionalItemCost = shipping.profiles[j].additional_items.cost
              products[i].variants[k].shippingCountries = shipping.profiles[j].countries
              products[i].variants[k].handlingTime = shipping.handling_time.value
              products[i].variants[k].handlingTimeUnit = shipping.handling_time.unit
            } else {
              continue
            }
          }
        }

        // const body = await readBody(products[i]);
        const body = products[i]
        const docRef = await add("products", body);
        // console.log(docRef)
      }
    }
  }
  // TODO This route needs to be auth protected
  // TODO This route needs to be called by a cron job or webhook from printify

  // TODO When this route is called, we should also call our blueprint and print provider routes to get our shipping info, costs, availability, and anything else we need to update in the products collection and productDataStore

  return { status: 200, body: "Success" }

});

type Shipping = {
  handling_time: {
    value: number,
    unit: string
  },
  profiles: [{
    variant_ids: number[],
    first_item: {
      cost: number,
      currency: string

    },
    additional_items: {
      cost: number,
      currency: string
    },
    countries: string[]
  }]
}

type Product = {
  title: string,
  description: string,
  blueprint_id: number,
  print_provider_id: number,
  variants: [{
    id: number,
    price: number,
    is_enabled: boolean,
    firstItemCost?: number,
    additionalItemCost?: number,
    shippingCountries?: string[],
    handlingTime?: number,
    handlingTimeUnit?: string
  }]
}