<template>
  <html :data-theme="selectedTheme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </html>
</template>
<script setup>
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { useUserDataStore } from './stores/userData'

const app = createApp()
const pinia = createPinia()

//Daisy Themes
const selectedTheme = ref(useUserDataStore().userData.theme)
watch(useUserDataStore(),(newStore)=>{
  selectedTheme.value = newStore.userData.theme
})

useHead({
  htmlAttrs: {
    lang: 'en',
    // style: 'font-size: 13px'
  }
})

app.use(pinia)

</script>