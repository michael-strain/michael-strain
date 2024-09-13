<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="user && (user.email=='michael.v.strain@gmail.com' || useRuntimeConfig().public.WTFAMI=='DEV')">
    <NuxtLink to="/admin"><v-btn>Back to Admin</v-btn></NuxtLink>
    Should only be accessible on dev or via michael.v.strain@gmail.com Google Account.
    Should allow bids to be reviewed, approved, or rejected. (And send e-mails)
    Should push approved bids to the auctions/mysoul/bids subcollection, and update the auctions/mysoul currentBid and currentTopBidder fields if applicable.
  </div>
</template>

<script setup>
import { useCurrentUser } from 'vuefire'
const user = useCurrentUser()

</script>