<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// import devalue from '@nuxt/devalue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
const app = createApp()
const pinia = createPinia()
app.use(pinia)

// devalue(pinia.state.value) //IDK why we are doing this, pinia.vuejs.org/ssr says to do so
</script>