<template>
  <v-card v-if="player" :title="'Welcome ' + player.name + ' :D'">
  </v-card>
  <!--broken rn-->
  <!-- <vtt-canvas/> -->
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

  const player = campaignData?.value?.players[useCurrentUser().value.uid]


</script>