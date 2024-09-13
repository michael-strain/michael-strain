<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <p>Logging Out...</p>
</template>

<script setup>
import { doc, setDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useCurrentUser, useFirestore } from 'vuefire';
import { useUserDataStore } from '../stores/userData';

onMounted(()=>{
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
    anon:true
  },
  // wishes:[],
  // orders:[],
  // cart:[],
  theme:useRuntimeConfig().public.DEFAULT_THEME,
  isPartner:false,
}

const signOutUser = () => {
  // if(useCurrentUser().value){
  //   if(useCurrentUser().value.uid){
  //     const docRef = doc(useFirestore(),'users',useCurrentUser().value.uid)
      
  //     setDoc(docRef, {
  //       selectedShippingInfo:useUserDataStore().userData.selectedShippingInfo,
  //       shippingInfo:useUserDataStore().userData.shippingInfo,
  //       wishes:useUserDataStore().userData.wishes,
  //       cart:useUserDataStore().userData.cart
  //     }, {merge:true})
  //   }
  // }

  useUserDataStore().userData = defaultData
  
  const auth = useFirebaseAuth()
  signOut(auth).then(()=>{
    useCookie('session').value = null
    useUserDataStore().userData = defaultData
    useCurrentUser().value = null
    return navigateTo('/login')
  })
}
</script>