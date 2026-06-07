<template>
  <v-card v-if="player" :title="'Welcome ' + player.name + ' :D'">
  </v-card>
  <!--broken rn-->
  <VttCanvas/>
</template>

<script setup>
  import { useCurrentUser, usePendingPromises, useFirestore, useCollection, useDocument } from 'vuefire';
  import { query, collection, orderBy, where, and, limit, limitToLast, startAfter, endBefore, getDocs, addDoc, getDoc, doc, setDoc } from 'firebase/firestore'
  // import { useUserDataStore } from '../../stores/userData'

  definePageMeta({
    layout: 'player',
  })

  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!

  // const campaign = ref([])
  
  // const playerConfig = ref()
  const userProfile = computed(()=>useCurrentUser().value)
  const player = campaignData?.value?.players[userProfile.value.uid]


</script>