<template>
    Create, read, update, and delete items (excluding weapons and armor) used in this campaign.
  <v-card title="Manage Items">
    <div ref="tableElement" />
    <v-card-actions>
      <v-btn @click="editItems=!editItems">{{editItems?'View':'Edit'}}</v-btn>
      <!-- <v-btn @click="saveItems()">Save</v-btn> -->
      <v-btn>Add New Item</v-btn>
    </v-card-actions>
  </v-card>
  <!-- <p>Campaign Info: {{ campaignData.items }}</p> -->
</template>

<script setup>

  import { useCurrentUser, useFirestore, useDocument } from 'vuefire';
  import { doc, setDoc } from 'firebase/firestore'
  import {TabulatorFull as Tabulator} from 'tabulator-tables'
  import 'tabulator-tables/dist/css/tabulator.min.css';

  definePageMeta({
    layout: 'gm',
  })

  /*
  {
      'name':'Healing Potion',
      'description':'Heals 1d8 damage upon consumption.  Tastes like raspberries.',
      'image':'',
      'consumable':true,
      'cost':{'Gold':1}
    },
  */

  const headers = [
    {title:'Name',field:'name'},
    {title:'Description',field:'description'},
    {title:'Cost',field:'cost',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Consumable',field:'consumable'},
    {title:'Image',field:'image'},
  ]
  const tableElement = ref(null)
  const tableInstance = ref(null)
  const editItems = ref(false)

  // const saveItems = async () => {
  //   let newData = structuredClone(campaignData)
  //   newData.items = items
  //   await setDoc(campaignDoc,newData)
  //   // if(!pending){
  //   //   items.value = structuredClone(campaignData.items)
  //   // }
  //   editItems.value = false
  // }

  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!
  
  onMounted(async()=>{
    if(campaignData){
      tableInstance.value = new Tabulator(tableElement.value,{
        data:campaignData.value.items,
        columns:headers,
        layout:"fitData"
      })
    }
  })

  // const items = ref(campaignData.value.items)

  watchEffect(()=>{
    //Keep our table data updated
    // console.log(campaignData.value)
    tableInstance.value?tableInstance.value.setData(campaignData.value.items):null
    // skillTableInstance.value?skillTableInstance.value.setData(campaignData.value.skills):null
  
  })

  onBeforeUnmount(()=>{
    tableInstance.value?tableInstance.value.destroy():null
    // skillTableInstance.value?skillTableInstance.value.destroy():null
  })

</script>