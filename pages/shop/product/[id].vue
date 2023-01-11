<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!--{{ $route.params }} -->
    {{ $route.params.id }} 
    {{ productTitle }}
    <!-- {{ store.products }} -->
    <!-- Requires a Product ID -->
    <!-- Requires a Shop ID  -->
    <!-- This is the product specific page based on the name passed in through the url.
    Check out Vuetify slide groups for showcasing art on a variety of printify products.
    https://next.vuetifyjs.com/en/components/slide-groups/ -->
    <a href="/shop">Back to Shop</a>
    
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <div class="flex flex-wrap">
            <v-card class="bg-white w-100 text-wrap rounded-xl border flex m-5 p-2">
              <v-img
                class="sm:w-100 flex w-50 sm:float-left"
                src="/img/bright-red-unusual-flower.jpg"
              />

              <div class="sm:w-100 float-left sm:float-none">
                <v-card-title class="bg-surface">
                  <p
                    :style="{fontFamily: 'Roboto Slab'}"
                    class="text-wrap text-4xl m-3"
                  >
                    {{ productTitle }}
                  </p>
                </v-card-title>

                <v-card-subtitle
                  :style="{fontFamily: 'Roboto Slab'}"
                  class="text-wrap"
                >
                  <p class="text-2xl p-3">
                    Detailed artwork is printed and laminated on sturdy chipboard backing for a glossy finish. Each box includes a reference print to easily put the puzzle together.
                  </p>
                </v-card-subtitle>
                
                <!-- Make button green -->

                <v-card-actions>
                  <v-btn
                    class="text-wrap ml-5"
                    variant="outlined"
                    :style="{fontFamily: 'Roboto Slab'}"
                  >
                    <p class="text-base">
                      Add to Cart
                    </p>
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </div> 
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>








<script setup>
import { ref, computed, reactive } from 'vue'
import { useProductDataStore } from '~~/stores/productData';

// It's possibly (more likely) that we should be fetching our data from the api instead of a product data store... but i want to be efficient! idk what to do :'(

const store = useProductDataStore()
const route = useRoute()

//for items in store.products.data
//if item.id == $route.params.id
//then set product to item


for(let i = 0; i < store.products.data.length; i++){
  if (store.products.data[i].id == route.params.id){
    const product = ref(store.products.data[i])
    const productTitle = ref(product.value.title)
    console.log(productTitle.value)
  } else {continue}
}

// for(let i = 0; i < store.products.data.length; i++){
//   if(store.products.data[i].id == route.params.id){
//     const product = ref(store.products.data[i])
//     console.log(product.value)
//     const productTitle = ref(product.value.title)
//     break
//   }
// }

// Check this out for setting a nuxt api call to make unique id's using a counter
// https://nuxt.com/docs/getting-started/data-fetching#example-2

const productKeys = [
  {'name':'Test-Puzzle','id':'63b73e95f65b2192630ec97a'},
  {'name':'Test-Hand-Towel','id':'63b74271dbffaaf4fc0393ed'},
  {'name':'Test-Color-Morphing-Mug','id':'63b7410a0b5a3e94ee0565ad'}
]

const shopId = '6483145'
const baseUrl = `https://api.printify.com/v1/shops/${shopId}`
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q'
const scopes = ['shops.manage','shops.read','catalog.read','orders.read','orders.write','products.read','products.write','webhooks.read','webhooks.write','uploads.read','uploads.write','print_providers.read']
const getProductsQuery = `/products.json`
// const idQuery = `/shops/${shopId}/products/${productId}.json`
// const orderIdQuery = `/shops/${shopId}/orders/${orderId}.json`
const postOrderQuery = `/orders.json`
// const sendOrderToProduction = `/shops/${shopId}/orders/${orderId}/send_to_production.json`
const postCalcShipping = `/orders/shipping.json`
// const postCancelUnpaidOrder = `/orders/${orderId}/cancel.json`

//
//  Now we are going to specify required inputs for the queries
//

// POST Order Body
const postOrderBody = 
{
    "external_id": "<string>",
    "line_items": [
        {
            "product_id": "<string>",
            "print_provider_id": "<integer>",
            "blueprint_id": "<integer>",
            "variant_id": "<integer>",
            "print_areas": "<object>",
            "quantity": "<integer>"
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


</script>