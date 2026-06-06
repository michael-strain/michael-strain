<template>
    Create, read, update, and delete Non-Player Characters used in this campaign.
  <v-card title="Manage NPCs">
    <div ref="tableElement" />
    <v-card-actions>
      <v-btn @click="editNPCs=!editNPCs">{{editNPCs?'View':'Edit'}}</v-btn>
      <!-- <v-btn @click="saveNPCs()">Save</v-btn> -->
      <v-btn>Add New NPC</v-btn>
    </v-card-actions>
  </v-card>
  <!-- <p>Campaign Info: {{ campaignData.characters }}</p> -->
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
    // {title:'',field:'',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    // {title:'',field:''},
  ]

  const tableElement = ref(null)
  const tableInstance = ref(null)
  const editNPCs = ref(false)

  // const saveNPCs = async () => {
  //   let newData = structuredClone(campaignData)
  //   newData.characters = characters
  //   await setDoc(campaignDoc,newData)
  //   // if(!pending){
  //   //   characters.value = structuredClone(campaignData.characters)
  //   // }
  //   editNPCs.value = false
  // }

  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!
  
  onMounted(async()=>{
    if(useCurrentUser().value == null){
      return navigateTo('/trpg/login')
    }

    //Redirect users that are not the host

    if(campaignData){
      tableInstance.value = new Tabulator(tableElement.value,{
        data:campaignData.value.characters,
        columns:headers,
        layout:"fitData"
      })
    }
  })

  // const characters = ref(campaignData.value.characters)

  watchEffect(()=>{
    //Keep our table data updated
    // console.log(campaignData.value)
    tableInstance.value?tableInstance.value.setData(campaignData.value.characters):null
    // skillTableInstance.value?skillTableInstance.value.setData(campaignData.value.skills):null
  
  })

  onBeforeUnmount(()=>{
    tableInstance.value?tableInstance.value.destroy():null
    // skillTableInstance.value?skillTableInstance.value.destroy():null
  })

</script>