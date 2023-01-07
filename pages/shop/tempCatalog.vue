<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="items-center justify-center text-center align-center align middle">
    <!-- <p class="text-3xl">
      {{ pending ? 'Loading' : products.data }}
    </p> -->
    <div v-if="pending">
      Loading . . .
    </div> <!--Animate this of course-->
    <div v-else>
      Fill this with the new cards full of product data :D
      Gonna do a for loop
      Gonna do streams
      Gonna do all kinds of cool shit to make this an infinitely scrollable, searchable, filterable, kickass products page
      <div v-for="(item, index) in products.data" :key="index">
        <v-card>
          <!-- <v-img src="${item.images[0].src}" /> -->
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.description }}</v-card-subtitle>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const shopId = '6483145'
const baseUrl = `https://api.printify.com/v1/shops/${shopId}`
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q'
const scopes = ['shops.manage','shops.read','catalog.read','orders.read','orders.write','products.read','products.write','webhooks.read','webhooks.write','uploads.read','uploads.write','print_providers.read']
const getProductsQuery = `/products.json` //limit and page params available
const params = ref('')
const query = baseUrl+params.value


// const search = useState('search','');
// const page = useState('page',1);
// const search = ref('')
// const page = ref(1)

// const queryString = computed(() => {
//     let values = '?page='+page.value+'&limit=9';
//     values += search.value != '' ? '&search='+search.value:'';
//     return values;
// });

const options = {
    headers: {
        Authorization: `Bearer ${apiKey}`,
    },
};

const { pending, data: products } = useLazyAsyncData('products',()=>$fetch(`${baseUrl}${getProductsQuery}`, options))



watch(products, (newProduct) => {})
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