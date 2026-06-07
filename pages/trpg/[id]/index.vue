<template>
  <v-card v-if="player" :title="'Welcome ' + player.name + ' :D'">
  </v-card>
  <VttCanvas @notify-roll="roll(req)"/>
</template>

<script setup>
  import { useCurrentUser } from 'vuefire';

  definePageMeta({
    layout: 'player',
  })

  const emit = defineEmits(['notifyRoll'])
  const roll = (req) => emit('notifyRoll', req)

  const campaignData = inject('campaignData')

  const userProfile = computed(()=>useCurrentUser().value)
  const player = campaignData?.value?.players[userProfile.value.uid]


</script>