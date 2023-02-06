<template>
  This will be the product admiministration page.
  <div>
    <h1>Product {{ $route.params.id }}</h1>
    <p>Product name: {{ product.name }}</p>
    <p>Product price: {{ product.price }}</p>
  </div>
</template>

<script setup>


import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const product = ref({})
const getProduct = async () => {
  const response = await fetch(`http://localhost:3000/api/printify/products/${route.params.id}`)
  product.value = await response.json()
}
onMounted(async() => {
  await getProduct()
})

</script>