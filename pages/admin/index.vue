<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="user && (user.email=='michael.v.strain@gmail.com' || useRuntimeConfig().public.WTFAMI=='DEV')">
    Only thing I can think of for this site right now is:
    Should only be accessible on dev or via michael.v.strain@gmail.com Google Account.
  </div>
  <div v-else>
    Unauthorized User Detected<br>Redirecting...
  </div>
</template>

<script setup>
import { useCurrentUser } from 'vuefire'
const user = useCurrentUser()
onMounted(()=>{
  if(!user.value){
    return navigateTo('/')
  }
})
</script>