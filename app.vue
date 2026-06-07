<template>
  <html>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </html>
</template>

<script setup>
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { useUserDataStore } from './stores/userData'
import VueKonva from 'vue-konva';

const app = createApp()
const pinia = createPinia()

app.use(pinia)
app.use(VueKonva)

//Daisy Themes
const selectedTheme = ref()
watch(useUserDataStore(),(newStore)=>{
    selectedTheme.value = newStore.userData.theme
})

useHead({
  htmlAttrs: {
    lang: 'en',
    // style: 'font-size: 13px'
  }
})

</script>