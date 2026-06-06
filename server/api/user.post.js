// import { useServerStripe } from '#stripe/server'
import { getApp, initializeApp } from 'firebase-admin/app'
import * as auth from 'firebase-admin/auth'
import { getFirestore } from "firebase-admin/firestore"
import { getHeaders } from "h3"


export default defineEventHandler(async(event) => {
  try{
    getApp().name
  }catch{
    initializeApp()
  }
  const headers = getHeaders(event)
  const token = headers.token
  const verify = await auth.getAuth().verifyIdToken(token)
  const userDocRef = getFirestore().doc('users/'+verify.uid)
  // const verify = await auth.getAuth().verifyIdToken(token)
  // const userId = verify.uid
  // const args = verify.email ? {email:verify.email,metadata:{uid:userId}} : { metadata:{uid: userId} };
  // const stripe = await useServerStripe(event)
  // const customer = await stripe.customers.create(args)
  try{
    await getFirestore().doc('users/'+verify.uid).set({key:"value"})
  }catch(e){
    //Need to notify the user that there was a problem
    console.error(e)
  }
  return //customer.id
})