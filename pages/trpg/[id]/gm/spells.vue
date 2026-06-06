<template>
    Create, read, update, and delete spells used in this campaign.
  <v-card title="Manage Spells">
    <div ref="tableElement" />
    <v-card-actions>
      <v-btn @click="editSpells=!editSpells">{{editSpells?'View':'Edit'}}</v-btn>
      <!-- <v-btn @click="saveSpells()">Save</v-btn> -->
      <v-btn>Add New Monster</v-btn>
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
    {title:'Level',field:'level'},
    {title:'Category',field:'category'},
    {title:'Casting Difficulty',field:'castingDifficulty'},
    {title:'Damage',field:'damage',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    {title:'Range', field:'range'},
    {title:'Duration', field:'duration'},
    {title:'Spellbook Cost',field:'spellbookCost',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}}
    
    // {title:'',field:'',mutator:(value,data,type,params,component)=>{return JSON.stringify(value)}},
    // {title:'',field:''},

  ]

  /*

  {
      'name':'Fireball',
      'description':'Fire wells up in the palm of your hand, and launches toward your target at your command.',
      'level':1,
      'category':'Attack',
      'castingDifficulty':10,
      'damage':{'Normal':'1d4+INT', 'Effective':'1d6+INT', 'Exceptional':'2d4+INT','Masterful':'2d6+INT'},
      'spellbookCost':{'Gold':1}
    },

  */

  const tableElement = ref(null)
  const tableInstance = ref(null)
  const editSpells = ref(false)

  // const saveSpells = async () => {
  //   let newData = structuredClone(campaignData)
  //   newData.spells = spells
  //   await setDoc(campaignDoc,newData)
  //   // if(!pending){
  //   //   spells.value = structuredClone(campaignData.spells)
  //   // }
  //   editSpells.value = false
  // }

  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!

  onMounted(async()=>{
    if(useCurrentUser().value == null){
      return navigateTo('/trpg/login')
    }

    //Redirect users that are not the host

    if(campaignData){
      tableInstance.value = new Tabulator(tableElement.value,{
        data:campaignData.value.masterSpellbook,
        columns:headers,
        layout:"fitData"
      })
    }
  })

  // const spells = ref(campaignData.value.spells)

  watchEffect(()=>{
    //Keep our table data updated
    // console.log(campaignData.value)
    tableInstance.value?tableInstance.value.setData(campaignData.value.masterSpellbook):null
    // skillTableInstance.value?skillTableInstance.value.setData(campaignData.value.skills):null
  
  })

  onBeforeUnmount(()=>{
    tableInstance.value?tableInstance.value.destroy():null
    // skillTableInstance.value?skillTableInstance.value.destroy():null
  })

</script>