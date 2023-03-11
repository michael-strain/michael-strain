<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-input
    v-model="imagePage"
    text-field
  />
  <v-text-field
    v-model="imagePage"
    label="Page"
    placeholder="Page (Temporary)"
    variant="outlined"
    class=""
    @change="addData"
  />
  <pre>{{ imageData }}</pre>
</template>

<script setup>
const imageData = ref()
const imagePage = ref(1)
const addData = async () => {
  const res = await $fetch(`/api/printify/images?page=${imagePage.value}`, { method: 'GET' })
  imageData.value = res.data[0]
}
addData()
</script>