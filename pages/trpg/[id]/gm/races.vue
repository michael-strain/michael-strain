<template>
  <v-card title="Manage Races">
    <div ref="tableElement" />
    <v-card-actions>
      <v-btn @click="editRaces=!editRaces">{{editRaces?'View':'Edit'}}</v-btn>
      <!-- <v-btn @click="saveRaces()">Save</v-btn> -->
      <v-btn>Add New Race</v-btn>
    </v-card-actions>
  </v-card>
  <!-- <p>Campaign Info: {{ campaignData.races }}</p> -->
</template>

<script setup>

  import { useCurrentUser, useFirestore, useDocument } from 'vuefire';
  import { doc, setDoc } from 'firebase/firestore'
  import {TabulatorFull as Tabulator} from 'tabulator-tables'
  import 'tabulator-tables/dist/css/tabulator.min.css';

  definePageMeta({
    layout: 'gm',
  })


  const headers = [
    {title:'Name',field:'name'},
    {title:'Description',field:'description'},
    {title:'Ability Score Modifiers (Any)',field:'abilityScoreModifiers.Any'},
    {title:'Ability Score Modifiers (Phys)',field:'abilityScoreModifiers.Physical'},
    {title:'Ability Score Modifiers (Int)',field:'abilityScoreModifiers.Intellectual'},
    {title:'Ability Score Modifiers (Soc)',field:'abilityScoreModifiers.Social'},
    {title:'Age (Min)', field:'age.0'},
    {title:'Age (Max)',field:'age.1'},
    {title:'Height',field:'height'},
    {title:'Weight',field:'weight'},
    {title:'Movement',field:'movement'},
    {title:'Item Slots (Back)',field:'itemSlots.back'},
    {title:'Item Slots (Ears)',field:'itemSlots.ears'},
    {title:'Item Slots (Eyes)',field:'itemSlots.eyes'},
    {title:'Item Slots (Feet)',field:'itemSlots.feet'},
    {title:'Item Slots (Fingers)',field:'itemSlots.fingers'},
    {title:'Item Slots (Hands)',field:'itemSlots.hands'},
    {title:'Item Slots (Head)',field:'itemSlots.head'},
    {title:'Item Slots (Legs)',field:'itemSlots.legs'},
    {title:'Item Slots (Neck)',field:'itemSlots.neck'},
    {title:'Item Slots (Nose)',field:'itemSlots.nose'},
    {title:'Item Slots (Torso)',field:'itemSlots.torso'},
    {title:'Item Slots (Waist)',field:'itemSlots.waist'},
    {title:'Item Slots (Wrists)',field:'itemSlots.wrists'},
    {title:'Size',field:'size'},
    {title:'Bonus Skill Ranks',field:'specialFeatures.Bonus Skill Ranks'},
    {title:'Agility',field:'specialFeatures.Agility'},
    {title:'Create',field:'specialFeatures.Create'}
  ]
  const tableElement = ref(null)
  const tableInstance = ref(null)
  const editRaces = ref(false)

  // const saveRaces = async () => {
  //   let newData = structuredClone(campaignData)
  //   newData.races = races
  //   await setDoc(campaignDoc,newData)
  //   // if(!pending){
  //   //   races.value = structuredClone(campaignData.races)
  //   // }
  //   editRaces.value = false
  // }

  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!

  onMounted(async()=>{
    if(useCurrentUser().value == null){
      return navigateTo('/trpg/login')
    }

    //Redirect users that are not the host

    if(campaignData){
      tableInstance.value = new Tabulator(tableElement.value,{
        data:campaignData.value.races,
        columns:headers,
        layout:"fitData"
      })
    }
  })

  // const races = ref(campaignData.value.races)

  watchEffect(()=>{
    //Keep our table data updated
    // console.log(campaignData.value)
    tableInstance.value?tableInstance.value.setData(campaignData.value.races):null
    // skillTableInstance.value?skillTableInstance.value.setData(campaignData.value.skills):null
  
  })

  onBeforeUnmount(()=>{
    tableInstance.value?tableInstance.value.destroy():null
    // skillTableInstance.value?skillTableInstance.value.destroy():null
  })

</script>