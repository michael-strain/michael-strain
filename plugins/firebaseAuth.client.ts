import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
  // const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: "AIzaSyDv2dJDwn9QNmkNiqB-INMD9EklS-B-Lfk",
    authDomain: "michael-strain.firebaseapp.com",
    projectId: "michael-strain",
    storageBucket: "michael-strain.appspot.com",
    messagingSenderId: "115270127034",
    appId: "1:115270127034:web:f010d12fd090dbe094a183",
    measurementId: "G-LTJZ9LS8MN",
  }

  const app = initializeApp(firebaseConfig)

  // console.log(app)

  initUser()

  // const analytics = getAnalytics(app)
  const auth = getAuth(app)
  const firestore = getFirestore(app)

  nuxtApp.vueApp.provide('auth', auth)
  nuxtApp.provide('auth', auth)

  nuxtApp.vueApp.provide('firestore',firestore)
  nuxtApp.provide('firestore',firestore)
})