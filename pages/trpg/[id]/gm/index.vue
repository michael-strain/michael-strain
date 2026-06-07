<template>
  <v-card>
    This is where gameplay stuff can go.  Show active party and some stats, show some roll buttons, push a button to establish intiative, drag and drop, add mobs/npcs to active battlefield, etc.
    View/Manage Active Players/Mobs and Adjust Play Data, Roll, Establish initiative, etc.
    <!-- <NuxtLink :to="useRoute().fullPath+'/play'"><v-btn>Play</v-btn></NuxtLink> -->
  </v-card>
<!-- We can use this eventually for a little loader display
  <v-card v-if="!campaignPending" />
<v-progress-circular v-else indeterminate /> -->
</template>
<script setup>
//We are gonna let anyone see this page, cuz there is nothing sensitive and nothing they can do with it...
//TODO create a layout where all these buttons are in a menu that displays on each gm page, each page also needs a back button
// import { useCurrentUser, usePendingPromises, useFirestore, useCollection, useDocument } from 'vuefire';

// const campaignDoc = computed(()=> doc(useFirestore(),'campaigns',useRoute().params.id))
// const {data:campaignData, pending, error, promise} = useDocument(campaignDoc)

// const isHost = ref(campaignData.host==useCurrentUser().uid ? true : false)
definePageMeta({
  layout: 'gm',
})

</script>