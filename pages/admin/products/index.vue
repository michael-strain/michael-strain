<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="loadAdminProducts">
    <v-btn @click="refreshPrintifyProducts.$fetchPrintify">ReFetch Printify Products</v-btn>
    <v-btn @click="displayAddProductCard=!displayAddProductCard">Add Product</v-btn>
    <v-card v-if="displayAddProductCard">
      <v-card-title>Add a Product to Printify</v-card-title>
    </v-card>
    <v-list>
      <v-list-item v-for="product in products" :key="product.id">
        <v-list-item-title>{{ product.title }}</v-list-item-title>
        <v-icon @click="displayEditProductCard=!displayEditProductCard">mdi-pencil</v-icon>
        <v-icon @click="deleteProduct(product.id)">mdi-delete</v-icon>
        <!-- get picture, price, and other applicable details, add CRUD buttons -->
        <v-card v-if="displayEditProductCard">
          <v-card-title>Edit Product {{ product.title }}</v-card-title>
        </v-card>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth } from 'firebase/auth'
import { useRouter } from 'vue-router'

const nuxtApp = useNuxtApp()
const auth = getAuth()

const loadAdminProducts = ref(false)
const products = ref()

const displayAddProductCard = ref(false)
const displayEditProductCard = ref(false)

onMounted(async () => {
  if (auth.currentUser.uid!==null){
    if (auth.currentUser.uid=="TkEKGIw1RNT8DfNFyK88eQtJBwl1") {
      getProducts()
      loadAdminProducts.value = 'true'
    } else {
      const router = useRouter()
      router.push('/account')
    }
  }
  else {
    const router = useRouter()
    router.push('/login')
  }
})

const refreshPrintifyProducts = async () => {
  // fetch all products from the printify api for our store
  // https://developers.printify.com/#list-products

  //The ultimate fucking question
  //How the fuck do we get this data into the products collection in firestore?


  // //Old deprecated method
  // const url = 'https://api.printify.com/v1/shops/6483145/products.json'
  // const opts = {
  //   method: 'GET',
  //   // mode: 'no-cors',
  //   headers: {
  //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
  //     // 'Access-Control-Allow-Origin': 'https://localhost:3000',
  //     'User-Agent': 'Michael-Strain Nuxt App'
  //   },
  // };
  // const { data:printifyProducts } = await useFetch(url, opts)
  // for (let i = 0; i < printifyProducts.data.length; i++) {
  //   let product = printifyProducts.data[i]
  //   //store the product as a document in the products firestore collection
  //   // https://firebase.google.com/docs/firestore/manage-data/add-data
    
  //   console.log("Product #"+i+": "+product.title)
    
  //   // // Ensure prior to production that this is uncommented
  //   // const { result } = await $fetch("/api/add?col=products", {
  //   //   method: 'POST',
  //   //   body: JSON.stringify(product)
  //   // })
  // }


  // // store the products in the firestore database
  // // https://firebase.google.com/docs/firestore/manage-data/add-data
  // // https://firebase.google.com/docs/firestore/query-data/get-data

}

//get products from the products firestore collection
const getProducts = async () => {
  // https://firebase.google.com/docs/firestore/query-data/get-data
  // https://firebase.google.com/docs/firestore/query-data/listen
  const { result } = await $fetch("/api/query?col=products")
  products.value = result
  return products.value
}


</script>