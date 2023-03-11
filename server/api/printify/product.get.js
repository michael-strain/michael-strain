import { queryByCollection, add } from "../../lib/firestore"
import { readBody, getQuery } from "h3"
import { doc } from "firebase/firestore"


//THIS WILL ONLY QUERY PRINTIFY - IT DOESN'T CHECK FIREBASE FIRST
//THIS QUERY SHOULD ONLY BE CALLED BY /api/printify/products?id=(!null) WHICH SHOULD CHECK DB THEN USE THIS TO GET PRINTIFY DATA

export default defineEventHandler(async (event) => {

  console.log("Hello!  I'm the Product.Get API Call, I am going to try to get a product from printify by ID, and add it to firestore if I find one :D")

  let requestCounter = 0

  function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
      requestCounter = 0
    });
  }

  // if(await readBody(event)) {
  //   // console.log("Body: ", readBody(event))
  //   const body = await readBody(event)
  //   console.log("Body: ", body)
  // }

  if (getQuery(event).id) {
  //   // query firestore using api for product id = event.id
    const query = getQuery(event)

    const opts = {
      method: 'GET',
      url: `https://api.printify.com/v1/shops/6483145/products/${query.id}.json`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
      }
    }

    var product

    if (requestCounter < 400) {
      product = await $fetch(opts.url, { method: 'GET', headers: opts.headers })
      console.log("Attempted to grab product from printify API")
      requestCounter++
    } else {
      await sleep(60000)
      product = await $fetch(opts.url, { method: 'GET', headers: opts.headers })
      requestCounter=1
    }

    console.log("Got product!")
    console.log(product.id)
    // console.log(product)
    //Error handle bad results


    var shipping
    //Fetch additional info same as the plural product(S).get call
    const printProviderUrl = 'https://api.printify.com/v1/catalog/blueprints/' + product.blueprint_id + '/print_providers/' + product.print_provider_id + '/shipping.json'
    if (requestCounter < 400) {
      shipping = await $fetch(printProviderUrl, {
        method: 'GET',
        headers: opts.headers
      })
      requestCounter++
    } else {
      await sleep(60000)
      shipping = await $fetch(printProviderUrl, {
        method: 'GET',
        headers: opts.headers
      })
      requestCounter=1
    }
    //for each variant in product
    for (let k=0; k<product.variants.length; k++) {
      let shippingProfile = 0
      product.variants[k].shippingProfile = []
      for (let j=0; j<shipping.profiles.length; j++) {
        if ( shipping.profiles[j].variant_ids.includes(product.variants[k].id)) {
          product.variants[k].shippingProfile[shippingProfile] = shipping.profiles[j]
          product.variants[k].handlingTime = shipping.handling_time.value
          product.variants[k].handlingTimeUnit = shipping.handling_time.unit
          shippingProfile++
        }
      }
    }

    //Store the complete info as an object, and pass it to firebase for storage
    let docRef = await add("products", product);

    //Error handle bad passes to Firebase
    

    //Return the complete object to the user
    return product



  } else {
    return { error: "Missing ID parameter!"}
  }
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