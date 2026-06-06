<template>
  This will be a form that allows GMs to edit the base character template (playerConfig).
  <v-card title="Manage Base Player Configuration Template">
  </v-card>
  <p>Info: {{ campaignData.playerConfig }}</p>
</template>

<script setup>

  import { useCurrentUser, useFirestore, useDocument } from 'vuefire';
  import { doc, setDoc } from 'firebase/firestore'

  definePageMeta({
    layout: 'gm',
  })

  /*
  {
    'name':'',
    'level':1,
    'health':0,
    'movement':6, //6 5-ft squares is 30 ft
    'age':0,
    'height':'',
    'weight':'',
    'size':'M', //Or should we make this numerical?
    'abilityScores': {'Physical':0,'Intellectual':0,'Social':0},
    'abilityPoints':3,
    'inventory': [],
    'equipment':{'slot':'finger','slotsUsed':1,'name':'Ring of Lore','description':''},
    // 'skills': defaultSkills,
    'skillRanks':5,
    'race': '',
    'spells':[],
    'money':{
      'Copper':0,
      'Silver':0,
      'Gold':1,
      'Platinum':0
    },
  }
  */

  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!


</script>