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

app.use(pinia)

//Daisy Themes
const selectedTheme = ref()
watch(useUserDataStore(),(newStore,oldStore)=>{
  if(newStore.userData.theme){
    selectedTheme.value = newStore.userData.theme
  }
  else{
    if(oldStore.userData.theme){
      selectedTheme.value = oldStore.userData.theme
    }
  }
})

useHead({
  htmlAttrs: {
    lang: 'en',
    // style: 'font-size: 13px'
  }
})

</script>