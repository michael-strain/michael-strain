<template>
    Create, read, update, and delete accessories used in this campaign.
  <v-card title="Manage Accessories">
    <div ref="tableElement" />
    <v-card-actions>
      <v-btn @click="editAccessories=!editAccessories">{{editAccessories?'View':'Edit'}}</v-btn>
      <!-- <v-btn @click="saveAccessories()">Save</v-btn> -->
      <v-btn>Add New Accessory</v-btn>
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
    {title:'Item Slot',field:'itemSlot',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Cost',field:'cost',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Image',field:'image'},
    {title:'Special Feature',field:'specialFeature'}
    // {title:'',field:'',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    // {title:'',field:''},

  ]

  /*

   {
      'name':'Silver Ring',
      'description':'A simple ring made of silver.  One size somehow fits all sizes of fingers.',
      'image':'',
      'itemSlot':{'fingers':1},
      'cost':{'Silver':1}
    },

  */

  const tableElement = ref(null)
  const tableInstance = ref(null)
  const editAccessories = ref(false)

  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!


  onMounted(async()=>{
    if(campaignData){
      tableInstance.value = new Tabulator(tableElement.value,{
        data:campaignData.value.accessories,
        columns:headers,
        layout:"fitData"
      })
    }
  })

  // const saveAccessories = async () => {
  //   let newData = structuredClone(campaignData)
  //   newData.accessories = accessories
  //   await setDoc(campaignDoc,newData)
  //   // if(!pending){
  //   //   accessories.value = structuredClone(campaignData.accessories)
  //   // }
  //   editAccessories.value = false
  // }

  watchEffect(()=>{
    //Keep our table data updated
    // console.log(campaignData.value)
    tableInstance.value?tableInstance.value.setData(campaignData.value.accessories):null
    // skillTableInstance.value?skillTableInstance.value.setData(campaignData.value.skills):null
  
  })

  onBeforeUnmount(()=>{
    tableInstance.value?tableInstance.value.destroy():null
    // skillTableInstance.value?skillTableInstance.value.destroy():null
  })

</script>