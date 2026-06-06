<template>
    Create, read, update, and delete armor used in this campaign.
  <v-card title="Manage Armor">
    <div ref="tableElement" />
    <v-card-actions>
      <v-btn @click="editArmor=!editArmor">{{editArmor?'View':'Edit'}}</v-btn>
      <!-- <v-btn @click="saveArmor()">Save</v-btn> -->
      <v-btn>Add New Armor</v-btn>
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
    {title:'Damage Reduction',field:'damageReduction'},
    {title:'Agility Cost',field:'agilityCost'},
    {title:'Item Slot',field:'itemSlot',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Cost',field:'cost',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Image',field:'image'},
    // {title:'',field:'',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    // {title:'',field:''},

  ]

  /*

  {
      'name':'Leather Armor',
      'description':'Thanks cows.  Provides some padding.  Very fashionable.',
      'image':'',
      'damageReduction':1,
      'agilityCost':0,
      'itemSlot':{'torso':1},
      'cost':{'Copper':20}
    },

  */

  const tableElement = ref(null)
  const tableInstance = ref(null)
  const editArmor = ref(false)

  // const saveArmor = async () => {
  //   let newData = structuredClone(campaignData)
  //   newData.armor = armor
  //   await setDoc(campaignDoc,newData)
  //   // if(!pending){
  //   //   armor.value = structuredClone(campaignData.armor)
  //   // }
  //   editArmor.value = false
  // }

  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!
  

  onMounted(async()=>{
    if(campaignData){
      tableInstance.value = new Tabulator(tableElement.value,{
        data:campaignData.value.armor,
        columns:headers,
        layout:"fitData"
      })
    }
  })

  watchEffect(()=>{
    //Keep our table data updated
    // console.log(campaignData.value)
    tableInstance.value?tableInstance.value.setData(campaignData.value.armor):null
    // skillTableInstance.value?skillTableInstance.value.setData(campaignData.value.skills):null
  
  })

  onBeforeUnmount(()=>{
    tableInstance.value?tableInstance.value.destroy():null
    // skillTableInstance.value?skillTableInstance.value.destroy():null
  })

</script>