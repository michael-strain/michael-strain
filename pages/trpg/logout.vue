<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <p>Logging Out...</p>
</template>

<script setup>
import { doc, setDoc, updateDoc, collection, query, where } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useCurrentUser, useFirestore } from 'vuefire';
import { useUserDataStore } from '../../stores/userData';

onMounted(async()=>{
  signOutUser()
})

const defaultData = {
  // selectedShippingInfo:{},
  // shippingInfo: [],
  userInfo: {
    displayName:'',
    firstName: '',
    lastName: '',
    email:'',
    phone:'',
    uid:'',
    // inVault: false,
    // anon:true
  },
  // wishes:[],
  // orders:[],
  // cart:[],
  theme:useRuntimeConfig().public.DEFAULT_THEME,
  isPartner:false,
}

const signOutUser = () => {
  if(useCurrentUser().value){
    if(useCurrentUser().value.uid){
      // const docRef = doc(useFirestore(),'users',useCurrentUser().value.uid)

      // setDoc(docRef, {
      //   // key:useUserDataStore().userData.value,
      // }, {merge:true})
    }
  }

  useUserDataStore().userData = defaultData
  
  const auth = useFirebaseAuth()
  signOut(auth).then(()=>{
    useCookie('session').value = null
    useUserDataStore().userData = defaultData
    useCurrentUser().value = null
    return navigateTo('/trpg/login')
  })
}
</script>