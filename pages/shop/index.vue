<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <div class="w-full p-0 m-0">
      <NuxtLink to="/shop">
        <h3
          class="text-black justify-center text-center align-center font-bold text-5xl mb-10"
          :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}"
        >
          SHOP
        </h3>
      </NuxtLink>
      
      <!--Quick Links-->
      <ul
        class="text-green-400 m-5 text-lg flex flex-wrap justify-center text-center align-center text-lg"
        :style="{fontFamily: 'Roboto Slab'}"
      >
        <li class="m-3 hover:text-green-600">
          <NuxtLink to="/shop/products/puzzles">
            PUZZLES
          </NuxtLink>
        </li>
        <li class="m-3 hover:text-green-600">
          <NuxtLink to="/shop/products/towels">
            TOWELS
          </NuxtLink>
        </li>
        <li class="m-3 hover:text-green-600">
          <NuxtLink to="/shop/products/cups">
            CUPS
          </NuxtLink>
        </li>
        <li class="m-3 hover:text-green-600">
          <NuxtLink to="/shop">
            ALL
          </NuxtLink>
        </li>
      </ul>

      <v-btn @click="refreshAll()">
        Refetch All Data
      </v-btn>

      <div class="flex flex-wrap items-center align-center justify-center">
        <!-- New card demo -->
        <div v-if="pending">
          Loading . . .
        </div> <!--Animate this of course-->

        <div
          v-else
          class="flex flex-wrap items-center align-center justify-center w-full"
        >
          <div
            v-for="(item, product) in products.data"
            :key="product"
            class="flex items-center align-center justify-center"
          >
            <v-card class="bg-white w-80 text-wrap rounded-xl border flex m-5 p-2">
              <NuxtLink :to="`/shop/product/${item.id}`">
                <img
                  :src="`${item.images[imageNum].src}`"
                  class="h-64 mx-auto"
                  lazy
                >
              </NuxtLink>
              
              <v-card class="bg-transparent">
                <p
                  :style="{fontFamily: 'Roboto Slab'}"
                  class="text-green-400 pr-4 pb-4 text-3xl float-right"
                >
                  $$$
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

                  <!-- TODO -->
                  <!-- Need to add a function to immediately add this item to the cart -->
                  <v-btn
                    icon
                    @click="show = !show; heartClick()"
                  >
                    <v-icon>{{ show ? 'mdi-cards-heart-outline' : 'mdi-cards-heart' }}</v-icon>
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
        </div> <!-- End of First Row-->
      </div>
    </div>
  </div>
</template>


<script setup>
// Need a price box on the bottom right of the product
// Need to loop through images with arrow buttons
import {ref} from 'vue'
import { useProductDataStore } from '~~/stores/productData';

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q'

const opts = {
  method: 'GET',
  // mode: 'no-cors',
  headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
    'Access-Control-Allow-Origin': 'https://localhost:3000',
    'User-Agent': 'Michael-Strain Nuxt App'
  },
};

// const currentId = ref(1);
const shopId = ref(6483145);
const url = computed(() =>
  `https://api.printify.com/v1/shops/${shopId.value}/products.json`
);

// const url = computed(() =>
//   `https://api.printify.com/v1/shops/6483145/products/${currentId.value}.json`
// );

const { data:products, pending } = useFetch(url, opts, { pick: ["data"], lazy: true })

const store = useProductDataStore()
store.$patch({products: products})
console.log(store.products)


// const { data : products, pending } = await useAsyncData('products',()=>$fetch('https://api.printify.com/v1/shops/6483145/products.json', opts), {watch:true}) // lazy: true, server:true, refresh:true?
// const refreshAll = () => refreshNuxtData('products')
// const refreshing = ref(false)
// const refreshAll = async() => {
//   refreshing.value = true
//   try{
//     await refreshNuxtData()
//   } finally {
//     refreshing.value = false
//   }
// }


// Need to make leftArrow and rightArrow functions that rotate each item's images
var imageNum = ref(0)

definePageMeta({
  key:'products'
})

function heartClick(){
  // console.log("Heart was clicked")
}

function leftArrow(item){
  // console.log("Left arrow clicked")
  imageNum.value = imageNum.value > 0 ? imageNum.value-=1 : imageNum.value=item.images.length;
}

function rightArrow(item){
  // console.log("Right arrow clicked")
  imageNum.value = item.images.length > imageNum.value ? imageNum.value+=1 : imageNum.value=0;
}

const show = ref(true)


// This is where the fun begins
// const shopId = '6483145'
// const baseUrl = `https://api.printify.com/v1/shops/${shopId}/products.json`
// const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q'
// const scopes = ['shops.manage','shops.read','catalog.read','orders.read','orders.write','products.read','products.write','webhooks.read','webhooks.write','uploads.read','uploads.write','print_providers.read']


// const search = useState('search','');
// const page = useState('page',1);
// const search = ref('')
// const page = ref(1)

// const queryString = computed(() => {
//     let values = '?page='+page.value+'&limit=9';
//     values += search.value != '' ? '&search='+search.value:'';
//     return values;
// });

// AI Suggested this one, will try next
// const { pending, data: products, refresh } = useAsyncData('products',()=>$fetch(`${baseUrl}${getProductsQuery}`, options))

//This works...  Sorta
// const { pending, data: products, refresh } = useLazyAsyncData('products',()=>$fetch(`${baseUrl}${getProductsQuery}`, options))
// watch(products, (newProduct) => {})

//This is new and also works sorta... looks like the current issue
// Is related to CORS
// Apparently the printify api server is having a hard time with the way nuxy refreshes data
// Something about the cross origin policy being set to strict
// Need more research to solve?




//THIS IS THE BEST WORKING VERSION OF THIS SO FAR BUT IT STILL DOESN'T WORK
// set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
// const options = {
//   method: 'GET',
//   mode: 'no-cors',
//   headers: {
//     Authorization: `Bearer ${apiKey}`,
//   },
// };
// const { data : p, pending, refresh, error, execute } = await useLazyAsyncData('p',()=>$fetch('https://api.printify.com/v1/shops/6483145/products.json', options))

// // create reactive variables to store the data
// const products = ref(p)
// const err = ref(error)
// const exec = ref(execute)

function refreshAll() {refreshNuxtData('products')}

// const refreshAll = async() => {
//   try{
//     pending=true
//     await refreshNuxtData('products')
//     // await refreshNuxtData()
//   } finally {
//     //refresh()
//     pending=false
//     console.log("yay?")
//   }
// }

// create an asynchronous function to fetch the data
// const fetchProducts = async () => {
//   // set the pending state to true
//   pending = true
//   // fetch the data
//   const response = await $fetch(`${baseUrl}${getProductsQuery}`, options)
//   // set the data
//   products = response
//   // set the pending state to false
//   pending = false
// }

// watch(products, ()=>{console.log(products)})

//This worked okay but still has major issues
// let refreshing = ref(false)
// let refreshAll = async () => {
//   refreshing.value = true
//   try {
//     await refreshNuxtData('products')
//   } finally {
//     pending = false
//     refreshing.value = false
//   }
// }
// let {data: products, pending } = await useLazyFetch(`${baseUrl}${getProductsQuery}`, options)
// watch(products, () => {
  // const ps = products.data
  // products = products
// })


// const { data, pending, error, refresh } = await useLazyAsyncData(
//     'products',
//     ()=> useFetch(`${baseUrl}${queryString.value}`)
// )

// watch(()=>queryString.value,()=>refresh())


// const { data, pending, error, refresh } = ref(
//   async function getProducts( q ){
//     await useFetch(query), {
//       method: 'GET',
//       // body: params.value,
//       headers:{
//         'Authorization': `Bearer ${apiKey}`,

//       }
//     }
//   }
// )



//
//  Now we are going to specify required inputs for the queries
//
const exampleResponse = {
    "current_page": 1,
    "data": [
        {
            "id": "5d39b159e7c48c000728c89f",
            "title": "Mug 11oz",
            "description": `"Perfect for coffee, tea and hot chocolate, this classic shape white, durable 
            ceramic mug in the most popular size. High quality sublimation printing makes it an 
            appreciated gift to every true hot beverage lover.Perfect for coffee, tea and hot 
            chocolate, this classic shape white, durable ceramic mug in the most popular size. 
            High quality sublimation printing makes it an appreciated gift to every true hot beverage lover. 
            .: White ceramic
            .: 11 oz (0.33 l)
            .: Rounded corners
            .: C-Handle"`,
            "tags": [
                "Home & Living",
                "Mugs",
                "11 oz",
                "White base",
                "Sublimation"
            ],
            "options": [
                {
                    "name": "Sizes",
                    "type": "size",
                    "values": [
                        {
                            "id": 1189,
                            "title": "11oz"
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "id": 33719,
                    "sku": "866366009",
                    "cost": 516,
                    "price": 860,
                    "title": "11oz",
                    "grams": 460,
                    "is_enabled": true,
                    "is_default": true,
                    "is_available": true,
                    "options": [
                        1189
                    ]
                }
            ],
            "images": [
                {
                    "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/145/mug-11oz.jpg",
                    "variant_ids": [
                        33719
                    ],
                    "position": "front",
                    "is_default": false
                },
                {
                    "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/146/mug-11oz.jpg",
                    "variant_ids": [
                        33719
                    ],
                    "position": "other",
                    "is_default": false
                },
                {
                    "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/147/mug-11oz.jpg",
                    "variant_ids": [
                        33719
                    ],
                    "position": "other",
                    "is_default": true
                }
            ],
            "created_at": "2019-07-25 13:40:41+00:00",
            "updated_at": "2019-07-25 13:40:59+00:00",
            "visible": true,
            "is_locked": false,
            "blueprint_id": 68,
            "user_id": 1337,
            "shop_id": 1337,
            "print_provider_id": 9,
            "print_areas": [
                {
                    "variant_ids": [
                        33719
                    ],
                    "placeholders": [
                        {
                            "position": "front",
                            "images": [
                                {
                                    "id": "5c7665205342af161e1cb26e",
                                    "name": "Test.png",
                                    "type": "image/png",
                                    "height": 5850,
                                    "width": 4350,
                                    "x": 0.5,
                                    "y": 0.5,
                                    "scale": 1.01,
                                    "angle": 0
                                }
                            ]
                        }
                    ],
                    "background": "#ffffff"
                }
            ],
            "sales_channel_properties": []    
        }
    ],
    "first_page_url": "/?page=1",
    "from": 1,
    "last_page": 22,
    "last_page_url": "/?page=22",
    "next_page_url": "/?page=2",
    "path": "/",
    "per_page": 1,
    "prev_page_url": null,
    "to": 1,
    "total": 22
}



</script>