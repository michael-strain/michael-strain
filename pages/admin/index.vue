<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="user && (user.email=='michael.v.strain@gmail.com' || useRuntimeConfig().public.WTFAMI=='DEV')">
    Only thing I can think of for this site right now is:
    <NuxtLink to="/admin/auctions"><v-btn>Auctions</v-btn></NuxtLink>
    Should only be accessible on dev or via michael.v.strain@gmail.com Google Account.
  </div>
</template>

<script setup>
import { useCurrentUser } from 'vuefire'
const user = useCurrentUser()
</script>