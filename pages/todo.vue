<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <pre>{{ todos }}</pre>
    <FirebaseUpload />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const todos = ref()

//THIS IS A PRIME EXAMPLE OF DATA FETCHING FROM OUR OWN API

onMounted(async() => {
  const { result } = await $fetch("/api/query?col=todos")
  todos.value = result
})

</script>