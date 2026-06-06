<template>
    Create, read, update, and delete monsters used in this campaign.
  <v-card title="Manage Monsters">
    <div ref="tableElement" />
    <v-card-actions>
      <v-btn @click="editMonsters=!editMonsters">{{editMonsters?'View':'Edit'}}</v-btn>
      <!-- <v-btn @click="saveMonsters()">Save</v-btn> -->
      <v-btn>Add New Monster</v-btn>
    </v-card-actions>
  </v-card>
  <!-- <p>Campaign Info: {{ campaignData.bestiary }}</p> -->
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
    {title:'Level (Min)',field:'level.0'},
    {title:'Level (Max)',field:'level.1'},
    {title:'Health',field:'health'},
    {title:'Movement Speed (5ftSq)',field:'movement'},
    {title:'Size',field:'size'},
    {title:'Height',field:'height'},
    {title:'Weight',field:'weight'},
    {title:'Ability Scores',field:'abilityScores',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Inventory',field:'inventory',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Equipment',field:'equipment',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Skills',field:'skills',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Spells',field:'spells',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Money',field:'money',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}}
    
    // {title:'',field:'',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    // {title:'',field:''},

  ]

  const tableElement = ref(null)
  const tableInstance = ref(null)
  const editMonsters = ref(false)

  // const saveMonsters = async () => {
  //   let newData = structuredClone(campaignData)
  //   newData.bestiary = bestiary
  //   await setDoc(campaignDoc,newData)
  //   // if(!pending){
  //   //   bestiary.value = structuredClone(campaignData.bestiary)
  //   // }
  //   editMonsters.value = false
  // }

  
  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!

  onMounted(async()=>{
    if(campaignData){
      tableInstance.value = new Tabulator(tableElement.value,{
        data:campaignData.value.bestiary,
        columns:headers,
        layout:"fitData"
      })
    }
  })

  // const bestiary = ref(campaignData.value.bestiary)

  watchEffect(()=>{
    //Keep our table data updated
    // console.log(campaignData.value)
    tableInstance.value?tableInstance.value.setData(campaignData.value.bestiary):null
    // skillTableInstance.value?skillTableInstance.value.setData(campaignData.value.skills):null
  
  })

  onBeforeUnmount(()=>{
    tableInstance.value?tableInstance.value.destroy():null
    // skillTableInstance.value?skillTableInstance.value.destroy():null
  })

</script>