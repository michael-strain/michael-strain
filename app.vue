<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { createPinia } from 'pinia'
import { createApp } from 'vue'
const app = createApp()
const pinia = createPinia()
app.use(pinia)
</script>