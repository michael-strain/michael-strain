<template>
  <v-card title="Manage Skills">
    <div ref="tableElement" />
    <v-card-actions>
      <v-btn @click="editSkills=!editSkills">{{editSkills?'View':'Edit'}}</v-btn>
      <!-- <v-btn @click="saveSkills()">Save</v-btn> -->
      <v-btn>Add New Skill</v-btn>
    </v-card-actions>
  </v-card>
  <!-- <p>Campaign Info: {{ campaignData.skills }}</p> -->
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
    {title:'Ability Score',field:'abilityScore'},
    {title:'Description',field:'description'}
  ]
  const tableElement = ref(null)
  const tableInstance = ref(null)
  const editSkills = ref(false)

  // const saveSkills = async () => {
  //   let newData = structuredClone(campaignData)
  //   newData.skills = skills
  //   await setDoc(campaignDoc,newData)
  //   // if(!pending){
  //   //   skills.value = structuredClone(campaignData.skills)
  //   // }
  //   editSkills.value = false
  // }

  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!

  onMounted(async()=>{
    if(useCurrentUser().value == null){
      return navigateTo('/trpg/login')
    }

    //Redirect users that are not the host

    if(campaignData){
      tableInstance.value = new Tabulator(tableElement.value,{
        data:campaignData.value.skills,
        columns:headers,
        layout:"fitData"
      })
    }
  })

  // const skills = ref(campaignData.value.skills)

  watchEffect(()=>{
    //Keep our table data updated
    // console.log(campaignData.value)
    tableInstance.value?tableInstance.value.setData(campaignData.value.skills):null
    // skillTableInstance.value?skillTableInstance.value.setData(campaignData.value.skills):null
  
  })

  onBeforeUnmount(()=>{
    tableInstance.value?tableInstance.value.destroy():null
    // skillTableInstance.value?skillTableInstance.value.destroy():null
  })

</script>