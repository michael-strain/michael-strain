<!-- eslint-disable vue/multi-word-component-names -->
<!-- MAJOR REVISION TIME -->


<!-- NEW VERSION -->
<template>
  <div>
    <div class="w-full p-0 m-0">
      <ShopHeader />
      <div class="flex flex-wrap items-center align-center justify-center">
        <div 
          v-if="loaded"
          class="flex flex-wrap items-center align-center justify-center w-full"
        >
          <div
            v-for="(item, product) in products"
            :key="product"
            class="flex items-center align-center justify-center"
          >
            <v-card class="bg-white w-80 text-wrap rounded-xl border flex m-5 p-2">
              <NuxtLink :to="`/shop/product/${item.id}`">
                <img
                  :src="item.images[item.imageNum].src"                  
                  class="h-64 mx-auto"
                >
              </NuxtLink>
              
              <v-card class="bg-transparent">
                <p
                  :style="{fontFamily: 'Roboto Slab'}"
                  class="text-green-400 pr-4 pb-4 text-3xl float-right"
                >
                  {{ formatter.format((item.variants[0].price)/100) }}
                </p>
              </v-card>

              <v-card-title class="bg-surface text-wrap max-width-full justify-center text-center align-center">
                <p
                  :style="{fontFamily: 'Roboto Slab'}"
                  class="text-wrap text-2xl"
                >
                  {{ item.title }}
                </p>
              </v-card-title>
              
              <div class="bg-surface d-flex items-center justify-center text-center align-center m-0">
                <v-card-actions>
                  <v-btn
                    icon
                    @click="leftArrow(item)"
                  >
                    <v-icon icon="mdi-chevron-left" />
                  </v-btn>

                  <v-btn
                    icon
                    transition="fade-transition"
                    @click="heartClick(item)"
                  >
                    <v-icon :icon="item.inCart ? 'mdi-cards-heart' : 'mdi-cards-heart-outline'" />
                  </v-btn>
                  <v-btn
                    icon
                    @click="rightArrow(item)"
                  >
                    <v-icon icon="mdi-chevron-right" />
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </div> 
        </div> 
      </div>
    </div>
  </div>
</template>


<script setup>
  import { ref, onMounted } from 'vue'
  import { useProductDataStore } from '~/stores/productData';
  import { useCartDataStore } from '~/stores/cartData';
  import { storeToRefs } from 'pinia'

  const products = ref([])
  const loaded = ref(false)

  onMounted(async() => {
    const store = useProductDataStore()
    if(store.productData.length > 0){
      // console.log("Products already loaded")
      products.value = store.productData
      loaded.value = true
      // products.value = storeToRefs(store.productData)
    }
    else {
      // console.log("Fetching products from Firestore")
      const pData = await $fetch('/api/query?col=products', { method: 'GET' })
      // console.log(pData)
      
      for (let i = 0; i < pData.length; i++) {
        // console.log("Adding imageNum to productData: " + pData[i].id)
        pData[i].imageNum = 0
        pData[i].qty = 0
      }
      store.$patch({ productData: pData })
      products.value = store.productData
      loaded.value = true
    }
  })

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  function heartClick(item){ 
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
  }

  function leftArrow(item){
    // get current image number
    let imageId = item.imageNum
    if (imageId>0) {
      imageId--
    } else {
      imageId = item.images.length-1
    }

    //patch the store with the new image number
    const store = useProductDataStore()
    for (let i = 0; i < store.productData.length; i++) {
      if (store.productData[i].id === item.id) {
        store.$patch( store.productData[i].imageNum=imageId )
        products.value = store.productData
        return
      }
    }
  }

  function rightArrow(item){
    let imageId = item.imageNum
    if (imageId==item.images.length-1) {
      imageId = 0
    } else {
      imageId++
    }

    //patch the store with the new image number
    const store = useProductDataStore()
    for (let i = 0; i < store.productData.length; i++) {
      if (store.productData[i].id == item.id) {
        store.$patch( store.productData[i].imageNum = imageId )
        products.value = store.productData
        return
      }
    }
  }
</script>












<!--OLD VERSION BELOW-->





<!-- TODO: Make a loading display when people push left/right arrow on product images -->

<!-- <template>
  <div>
    <div class="w-full p-0 m-0">
      <ShopHeader />
      <div class="flex flex-wrap items-center align-center justify-center">
        <div v-if="pending">
          Loading . . .
        </div>
        <div
          v-else
          class="flex flex-wrap items-center align-center justify-center w-full"
        >
          <div
            v-for="(item, product) in store.productData"
            :key="product"
            class="flex items-center align-center justify-center"
          >
            <v-card class="bg-white w-80 text-wrap rounded-xl border flex m-5 p-2">
              <NuxtLink :to="`/shop/product/${item.id}`">
                <img
                  :src="`${item.images[item.imageNum].src}`"                  
                  class="h-64 mx-auto"
                  lazy
                >
              </NuxtLink>
              
              <v-card class="bg-transparent">
                <p
                  :style="{fontFamily: 'Roboto Slab'}"
                  class="text-green-400 pr-4 pb-4 text-3xl float-right"
                >
                  {{ formatter.format((item.variants[0].price)/100) }}
                </p>
              </v-card>

              <v-card-title class="bg-surface text-wrap max-width-full justify-center text-center align-center">
                <p
                  :style="{fontFamily: 'Roboto Slab'}"
                  class="text-wrap text-2xl"
                >
                  {{ item.title }}
                </p>
              </v-card-title>
              
              <div class="bg-surface d-flex items-center justify-center text-center align-center m-0">
                <v-card-actions>
                  <v-btn
                    icon
                    @click="leftArrow(item)"
                  >
                    <v-icon icon="mdi-chevron-left" />
                  </v-btn>

                  <v-btn
                    icon
                    transition="fade-transition"
                    @click="heartClick(item)"
                  >
                    <v-icon :icon="item.inCart ? 'mdi-cards-heart' : 'mdi-cards-heart-outline'" />
                  </v-btn>
                  <v-btn
                    icon
                    @click="rightArrow(item)"
                  >
                    <v-icon icon="mdi-chevron-right" />
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template> -->


<!-- <script setup>
// Need a price box on the bottom right of the product
// Need to loop through images with arrow buttons
import { ref } from 'vue'
import { useProductDataStore } from '~/stores/productData';
import { useCartDataStore } from '~/stores/cartData';
import { storeToRefs } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

// import { useCartStore } from '~/stores/cart';

const url = 'https://api.printify.com/v1/shops/6483145/products.json'
const products = ref([])
const productId = ref({})
const pending = ref(true)

const store = useProductDataStore()
const cart = useCartDataStore()
const cartData = ref()








// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});



// TODO

const localstore = useLocalStorage('productData')

// If localstore data is present but store.productData is not
// set patch store with locally-stored data

//  IDK if this does anything worth doing
// onMounted(async () => {
//   if (store.productData != null && store.productData.data.length > 0 ){
//     products.value = storeToRefs(store.productData.data)
//   }
// })

// If store.productData is set but localstore isn't
// store it locally i guess - but i think this should be happening already

//Figure out if i need to use mounted and store locally on client, or if i can store on server (or should store in firestore)

//modify this
onMounted(async() => {
  if ((store.productData != null && store.productData.length > 0 )|| (localstore.value !=null && JSON.parse(localstore.value).length>0)) {
    console.log("Products are in store")
    for (let i = 0; i < store.productData.length; i++) {
      store.$patch( store.productData[i].imageNum = 0 )
      store.$patch( store.productData[i].qty = 0)
      store.$patch( store.productData[i].inCart = false)
    }
    products.value = storeToRefs(store.productData)
    console.log(products)
    pending.value = false
  } else {
    console.log("Products are not in store")
    pending.value = true
    // onMounted(async() => {
    //   const { result } = await $fetch("/api/query?col=products")
    //   todos.value = result
    // })

    // get from firestore with query
    const { result } = await $fetch('/api/query?col=products')
    console.log(result)
    // products.value = result
    store.$patch({productData: result})
    localstore.value = JSON.stringify(store.productData.productData)
    console.log(store.productData.productData)
    for (let i = 0; i < store.productData.length; i++) {
      store.$patch(store.productData[i].imageNum = 0 )
      store.$patch(store.productData[i].qty = 0)
      store.$patch(store.productData[i].inCart = false)
    }
    products.value = storeToRefs(store.productData)
    pending.value = false
    // Old, direct call to printify method
    // const opts = {
    //   method: 'GET',
    //   // mode: 'no-cors',
    //   headers: {
    //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
    //     // 'Access-Control-Allow-Origin': 'https://localhost:3000',
    //     'User-Agent': 'Michael-Strain Nuxt App'
    //   },
    // };
    // const { data:result, pending:penval } = $fetch(url, opts)

    // store.$patch({productData: result})
    
    // products.value = storeToRefs(store.productData.products.data)
  }
})

// Need to make leftArrow and rightArrow functions that rotate each item's images

// definePageMeta({
//   key:'products'
// })

function heartClick(item){ 
  console.log("Item id: " + item.id)

  // add item to cart based on item id
  const cart = useCartDataStore()
  let notfound = true
  // cartData.value = storeToRefs(cart.cartData.data)
  if (cart.cartData.data != null && cart.cartData.data.length > 0) {
    console.log("Products are in cart")
    // if (item in cart.cartData.data) {
      
    for (let i = 0; i < cart.cartData.data.length; i++) {
      if (item.id === cart.cartData.data[i].id) {
        notfound = false
        console.log("Item is in cart:  " + i)
        item.qty +=1
        item.inCart = true
        cart.$patch(cart.cartData.data[i] = item)
        return
      } else {
        console.log("Not this item: " + i)
        let notfound = true
        // item.qty = 1
        // cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
      }
    }
    if (notfound) {
      item.qty = 1
      item.inCart = true
      cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
      for (let x = 0; x < store.productData.length; x++) {
        if (item.id === store.productData[x].id) {
          store.$patch(store.productData[x].inCart = true)
          products.value = storeToRefs(store.productData)
        }
      }
    }
    // cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
  } else {
    console.log("Products are not in cart")
    item.qty = 1
    item.inCart=true
    cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
    for (let x = 0; x < store.productData.length; x++) {
      if (item.id === store.productData[x].id) {
        store.$patch(store.productData[x].inCart = true)
        products.value = storeToRefs(store.productData)
      }
    }
    
    return
  }

}

function leftArrow(item){
  // get current image number
  let imageId = item.imageNum
  if (imageId>0) {
    imageId-=1
  } else {
    imageId = item.images.length
  }
  //patch the store with the new image number
  const store = useProductDataStore()
  for (let i = 0; i < store.productData.length; i++) {
    if (store.productData[i].id == item.id) {
      store.$patch( store.productData[i].imageNum = imageId )
    }
  }
}

function rightArrow(item){
  let imageId = item.imageNum
  if (imageId<item.images.length) {
    imageId+=1
  } else {
    imageId = 0
  }
  const store = useProductDataStore()
  for (let i = 0; i < store.productData.length; i++) {
    if (store.productData[i].id == item.id) {
      store.$patch( store.productData[i].imageNum = imageId )
    }
  }
}

function refreshAll() {refreshNuxtData()}
// function refreshProducts() {refreshNuxtData('result')}
//
//
// const exampleResponse = {
//     "current_page": 1,
//     "data": [
//         {
//             "id": "5d39b159e7c48c000728c89f",
//             "title": "Mug 11oz",
//             "description": `"Perfect for coffee, tea and hot chocolate, this classic shape white, durable 
//             ceramic mug in the most popular size. High quality sublimation printing makes it an 
//             appreciated gift to every true hot beverage lover.Perfect for coffee, tea and hot 
//             chocolate, this classic shape white, durable ceramic mug in the most popular size. 
//             High quality sublimation printing makes it an appreciated gift to every true hot beverage lover. 
//             .: White ceramic
//             .: 11 oz (0.33 l)
//             .: Rounded corners
//             .: C-Handle"`,
//             "tags": [
//                 "Home & Living",
//                 "Mugs",
//                 "11 oz",
//                 "White base",
//                 "Sublimation"
//             ],
//             "options": [
//                 {
//                     "name": "Sizes",
//                     "type": "size",
//                     "values": [
//                         {
//                             "id": 1189,
//                             "title": "11oz"
//                         }
//                     ]
//                 }
//             ],
//             "variants": [
//                 {
//                     "id": 33719,
//                     "sku": "866366009",
//                     "cost": 516,
//                     "price": 860,
//                     "title": "11oz",
//                     "grams": 460,
//                     "is_enabled": true,
//                     "is_default": true,
//                     "is_available": true,
//                     "options": [
//                         1189
//                     ]
//                 }
//             ],
//             "images": [
//                 {
//                     "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/145/mug-11oz.jpg",
//                     "variant_ids": [
//                         33719
//                     ],
//                     "position": "front",
//                     "is_default": false
//                 },
//                 {
//                     "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/146/mug-11oz.jpg",
//                     "variant_ids": [
//                         33719
//                     ],
//                     "position": "other",
//                     "is_default": false
//                 },
//                 {
//                     "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/147/mug-11oz.jpg",
//                     "variant_ids": [
//                         33719
//                     ],
//                     "position": "other",
//                     "is_default": true
//                 }
//             ],
//             "created_at": "2019-07-25 13:40:41+00:00",
//             "updated_at": "2019-07-25 13:40:59+00:00",
//             "visible": true,
//             "is_locked": false,
//             "blueprint_id": 68,
//             "user_id": 1337,
//             "shop_id": 1337,
//             "print_provider_id": 9,
//             "print_areas": [
//                 {
//                     "variant_ids": [
//                         33719
//                     ],
//                     "placeholders": [
//                         {
//                             "position": "front",
//                             "images": [
//                                 {
//                                     "id": "5c7665205342af161e1cb26e",
//                                     "name": "Test.png",
//                                     "type": "image/png",
//                                     "height": 5850,
//                                     "width": 4350,
//                                     "x": 0.5,
//                                     "y": 0.5,
//                                     "scale": 1.01,
//                                     "angle": 0
//                                 }
//                             ]
//                         }
//                     ],
//                     "background": "#ffffff"
//                 }
//             ],
//             "sales_channel_properties": []    
//         }
//     ],
//     "first_page_url": "/?page=1",
//     "from": 1,
//     "last_page": 22,
//     "last_page_url": "/?page=22",
//     "next_page_url": "/?page=2",
//     "path": "/",
//     "per_page": 1,
//     "prev_page_url": null,
//     "to": 1,
//     "total": 22
// }



</script> -->