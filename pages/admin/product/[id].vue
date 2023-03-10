<!-- eslint-disable vue/multi-word-component-names -->
<template>
  This will be the product admiministration page.
  <div>
    <h1>Product {{ $route.params.id }}</h1>
    <p>Product name: {{ product.title }}</p>
    <p>Product price: {{ product.variants[0].price }}</p>
    <br>
    <p>Product: {{ product }}</p>
  </div>
</template>

<script setup>



import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const product = ref({})
// const getProducts = async () => {
//   // https://firebase.google.com/docs/firestore/query-data/get-data
//   // https://firebase.google.com/docs/firestore/query-data/listen
//   const result = await $fetch("/api/query?col=products", {method: "GET"})
//   products.value = result
//   return result
// }
const getProduct = async () => {
  const response = await $fetch(`/api/queryItem?col=products&field=id&operator===&value=${route.params.id}`, {method: 'GET'})
  product.value = response[0]
}
onMounted(async() => {
  await getProduct()
})

//THIS IS WHERE WE SHOULD ADD UPDATE AND DELETE FUNCTIONALITY

</script>