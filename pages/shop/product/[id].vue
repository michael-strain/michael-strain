<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!--{{ $route.params }} -->
    <!-- {{ $route.params.id }}  -->
    <!-- {{ productTitle }} -->
    <!-- {{ store.products }} -->
    <!-- Requires a Product ID -->
    <!-- Requires a Shop ID  -->
    <!-- This is the product specific page based on the name passed in through the url.
    Check out Vuetify slide groups for showcasing art on a variety of printify products.
    https://next.vuetifyjs.com/en/components/slide-groups/ -->
    
    <ShopHeader />

    <!-- TODO Need to refactor this page to use '/api/query?col=products' if the product ID isn't available in storage for some reason -->
    <!-- TODO Also need to do variant selector and print variant info and add variant to cart and stuff -->

    <v-container class="">
      <v-row dense>
        <v-col cols="12">
          <div class="flex flex-wrap">
            <v-card class="bg-white w-full text-wrap rounded-xl border flex m-5 p-2 shadow-xl">
              <!-- New way -->
              <div v-if="product">
                <v-img
                  class="sm:(w-1/2 h-full) flex sm<:w-full sm:float-left"
                  :src="product.images[0].src"
                />
                <div class="sm<:w-full sm:w-1/2 float-left sm:float-none">
                  <v-card-title class="bg-surface">
                    <p
                      :style="{fontFamily: 'Roboto Slab'}"
                      class="text-wrap text-4xl m-3"
                    >
                      {{ product.title }}
                    </p>
                  </v-card-title>

                  <v-card-subtitle
                    :style="{fontFamily: 'Roboto Slab'}"
                    class="text-wrap text-2xl p-3 pt-5"
                    v-html="product.description"
                  />
                </div>
              
                <!-- Make button green -->

                <v-card-actions class="pb-5">
                  <p
                    class="m-5 text-3xl font-semibold text-green-600"
                    size=""
                  >
                    {{ formatter.format((product.variants[product.variantNum].price)/100) }}
                  </p>

                  <v-btn
                    class="text-wrap !font-semibold !text-green-600 !text-2x3 hover:(!text-green-800)"
                    variant="outlined"
                    :style="{fontFamily: 'Roboto Slab'}"
                    @click="addToCart(product)"
                  >
                    <p class="text-base">
                      Add to Cart
                    </p>
                  </v-btn>
                </v-card-actions>
                <!-- <v-card-text v-if="product.qty>0" class="float-right">{{ product.qty }} Items In Cart</v-card-text> -->
              </div>


              <!-- Old horrible way -->
              <!--<div
                v-for="(item, idx) in store.productData"
                :key="idx"
                class="flex items-center align-center justify-center"
              >
                <div v-if="item.id === $route.params.id">
                  <v-img
                    class="sm:(w-1/2 h-full) flex sm<:w-full sm:float-left"
                    :src="item.images[item.imageNum].src"
                  />
                  <div class="sm<:w-full sm:w-1/2 float-left sm:float-none">
                    <v-card-title class="bg-surface">
                      <p
                        :style="{fontFamily: 'Roboto Slab'}"
                        class="text-wrap text-4xl m-3"
                      >
                        {{ item.title }}
                      </p>
                    </v-card-title>

                    <v-card-subtitle
                      :style="{fontFamily: 'Roboto Slab'}"
                      class="text-wrap text-2xl p-3 pt-5"
                      v-html="item.description"
                    />
                  </div>

                  <v-card-actions class="pb-5">
                    <p
                      class="m-5 text-3xl font-semibold text-green-600"
                      size=""
                    >
                      {{ formatter.format((item.variants[0].price)/100) }}
                    </p>

                    <v-btn
                      class="text-wrap !font-semibold !text-green-600 !text-2x3 hover:(!text-green-800)"
                      variant="outlined"
                      :style="{fontFamily: 'Roboto Slab'}"
                      @click="addToCart(item)"
                    >
                      <p class="text-base">
                        Add to Cart
                      </p>
                    </v-btn>
                  </v-card-actions>
                  <v-card-text v-if="item.qty>0" class="float-right">{{ item.qty }} Items In Cart</v-card-text>
                </div>
              </div> -->
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>




  <!--Product Container-->
  <!-- <v-container class="">
      <v-row dense>
        <v-col cols="12">
          <div class="flex flex-wrap">
            <v-card class="bg-white w-full text-wrap rounded-xl border flex m-5 p-2 shadow-xl">
              <v-img
                class="sm:(w-1/2 h-full) flex sm<:w-full sm:float-left"
                src="https://images-api.printify.com/mockup/63b7410a0b5a3e94ee0565ad/88141/58694/glowing-mushroom-mug.jpg"
              />

              <div class="sm<:w-full sm:w-1/2 float-left sm:float-none">
                <v-card-title class="bg-surface">
                  <p
                    :style="{fontFamily: 'Roboto Slab'}"
                    class="text-wrap text-4xl m-3"
                  >
                    Glowing Mushroom Mug
                  </p>
                </v-card-title>

                <v-card-subtitle
                  :style="{fontFamily: 'Roboto Slab'}"
                  class="text-wrap"
                >
                  <p class="text-2xl p-3 pt-5">
                    This mug gets its magic from a heat-reactive surface. The ceramic cup reveals the design once the mug gets warm. It will go back to its original colors, black outside and white inside, when it cools down. The C-shaped handle helps keep a sturdy grip. This mug holds 11 ounces – plenty for that big morning cup of coffee. Hand washing recommened. 
                  </p>
                </v-card-subtitle>

                <v-card-actions class="pb-5">
                  <p
                    class="m-5 text-3xl font-semibold text-green-600"
                    size=""
                  >
                    $15
                  </p>

                  <v-btn
                    class="text-wrap !font-semibold !text-green-600 !text-2x3 hover:(!text-green-800)"
                    variant="outlined"
                    :style="{fontFamily: 'Roboto Slab'}"
                    @click="addToCart(item)"
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
    </v-container> -->
</template>








<script setup>

// Time to introduce Variants

import { ref, computed, reactive } from 'vue'
import { useProductDataStore } from '~/stores/productData';
import { useCartDataStore } from '~/stores/cartData';
import { storeToRefs } from 'pinia'
// import { useCartStore } from '~/stores/cart';

// const url = 'https://api.printify.com/v1/shops/6483145/products.json'
// const products = ref([])
const route = useRoute()
const productId = ref(route.params.id)
const product = ref()

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

onMounted(async () => {
  const store = useProductDataStore()
  product.value = store.productData.find((item) => item.id == productId.value)
  console.log(product.value)
})

// const product = computed(() => {
//   return getCurrentProduct()
// })

// const product = ref(getCurrentProduct())

function addToCart(item){ 
  const cart = useCartDataStore()

    //if there are items in the cart
    if(cart.cartData.length>0) {
      console.log("Cart length: " + cart.cartData.length)
      
      //loop through the cart.  If the item is already in the cart, increment the qty
      for (let i = 0; i < cart.cartData.length; i++) {
        if (item.id === cart.cartData[i].id) {
          item.qty ++
          item.inCart = true //not sure if this is needed
          cart.$patch(cart.cartData[i] = item)
          return
        }
      }

      //if an item was not in the cart, add it to the cart
      if (!item.inCart) {
        item.qty = 1
        item.inCart = true //not sure if this is needed
        cart.$patch(cart.cartData[cart.cartData.length] = item)
      }
    //If there are no items in the cart
    } else {
      console.log("Adding first item to cart")
      item.qty = 1
      item.inCart=true
      cart.$patch(cart.cartData[0] = item)
      console.log(item)
      console.log(cart.cartData[0])
    }
  
  
  //OLD WAY

//   //might be fun to change icon to mdi-cart-heart, numbers to the icon, or even animation when item added
//   console.log("Item id: " + item.id)

//   // add item to cart based on item id
//   const cart = useCartDataStore()
//   let notfound = true
//   cartData.value = storeToRefs(cart.cartData.data)
//   if (cart.cartData.data != null && cart.cartData.data.length > 0) {
//     console.log("Products are in cart")
//     // if (item in cart.cartData.data) {
      
//     for (let i = 0; i < cart.cartData.data.length; i++) {
//       if (item.id === cart.cartData.data[i].id) {
//         notfound = false
//         console.log("Item is in cart:  " + i)
//         item.qty +=1
//         cart.$patch(cart.cartData.data[i] = item)
//         return
//       } else {
//         console.log("Not this item: " + i)
//         let notfound = true
//         // item.qty = 1
//         // cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
//       }
//     }
//     if (notfound) {
//       item.qty = 1
//       cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
//     }
//     // cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
//   } else {
//     console.log("Products are not in cart")
//     item.qty = 1
//     cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
//     return
//   }
}

// It's possibly (more likely) that we should be fetching our data from the api instead of a product data store... but i want to be efficient! idk what to do :'(


//for items in store.products.data
//if item.id == $route.params.id
//then set product to item


// for(let i = 0; i < store.products.data.length; i++){
//   if (store.products.data[i].id == route.params.id){
//     const product = ref(store.products.data[i])
//     const productTitle = ref(product.value.title)
//     console.log(productTitle.value)
//   } else {continue}
// }

// for(let i = 0; i < store.products.data.length; i++){
//   if(store.products.data[i].id == route.params.id){
//     const product = ref(store.products.data[i])
//     console.log(product.value)
//     const productTitle = ref(product.value.title)
//     break
//   }
// }


// const shopId = '6483145'
// const baseUrl = `https://api.printify.com/v1/shops/${shopId}`
// const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q'
// const scopes = ['shops.manage','shops.read','catalog.read','orders.read','orders.write','products.read','products.write','webhooks.read','webhooks.write','uploads.read','uploads.write','print_providers.read']
// const getProductsQuery = `/products.json`
// // const idQuery = `/shops/${shopId}/products/${productId}.json`
// // const orderIdQuery = `/shops/${shopId}/orders/${orderId}.json`
// const postOrderQuery = `/orders.json`
// // const sendOrderToProduction = `/shops/${shopId}/orders/${orderId}/send_to_production.json`
// const postCalcShipping = `/orders/shipping.json`
// // const postCancelUnpaidOrder = `/orders/${orderId}/cancel.json`

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