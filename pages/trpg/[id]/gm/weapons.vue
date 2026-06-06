<template>
    Create, read, update, and delete weapons used in this campaign.
  <v-card title="Manage Weapons">
    <div ref="tableElement" />
    <v-card-actions>
      <v-btn @click="editWeapons=!editWeapons">{{editWeapons?'View':'Edit'}}</v-btn>
      <!-- <v-btn @click="saveWeapons()">Save</v-btn> -->
      <v-btn>Add New Weapon</v-btn>
    </v-card-actions>
  </v-card>
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
    {title:'Damage ',field:'damage'},
    {title:'Type',field:'type'},
    {title:'Range (5sqft)',field:'range'},
    {title:'Item Slot',field:'itemSlot',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Cost',field:'cost',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Image',field:'image'},
    // {title:'',field:'',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    // {title:'',field:''},

  ]

  /*

   {
      'name':'Dagger',
      'description':'Small and pointy',
      'image':'/img/mountain-coffeefarm.jpg',
      'damage':'1d4',
      'type':'Melee',
      'range':1,
      'itemSlot':{'hands':1},
      'cost':{'Copper':5}
    },

  */

  const tableElement = ref(null)
  const tableInstance = ref(null)
  const editWeapons = ref(false)

  // const saveWeapons = async () => {
  //   let newData = structuredClone(campaignData)
  //   newData.weapons = weapons
  //   await setDoc(campaignDoc,newData)
  //   // if(!pending){
  //   //   weapons.value = structuredClone(campaignData.weapons)
  //   // }
  //   editWeapons.value = false
  // }

  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!
  
  onMounted(async()=>{
    if(useCurrentUser().value == null){
      return navigateTo('/trpg/login')
    }

    //Redirect users that are not the host

    if(campaignData){
      tableInstance.value = new Tabulator(tableElement.value,{
        data:campaignData.value.weapons,
        columns:headers,
        layout:"fitData"
      })
    }
  })

  // const weapons = ref(campaignData.value.weapons)

  watchEffect(()=>{
    //Keep our table data updated
    // console.log(campaignData.value)
    tableInstance.value?tableInstance.value.setData(campaignData.value.weapons):null
    // skillTableInstance.value?skillTableInstance.value.setData(campaignData.value.skills):null
  
  })

  onBeforeUnmount(()=>{
    tableInstance.value?tableInstance.value.destroy():null
    // skillTableInstance.value?skillTableInstance.value.destroy():null
  })

</script>