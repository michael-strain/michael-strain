// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'
// import { getStorage } from 'firebase/storage'

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  }

  // const app = initializeApp(firebaseConfig)

//   // initUser()
  
//   const auth = getAuth(app)
//   useNuxtApp.provide('auth', auth)
//   const db = getFirestore(app)
//   useNuxtApp.provide('db', db)
//   const storage = getStorage(app)
//   useNuxtApp.provide('storage', storage)

})