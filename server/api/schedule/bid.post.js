import { getApp, initializeApp } from 'firebase-admin/app'
import { getFirestore, FieldPath } from 'firebase-admin/firestore'
import * as auth from 'firebase-admin/auth'
import { getHeaders } from 'h3'


export default defineEventHandler(async(event)=>{
  //need to pass in an auction id
  //need to validate authentication of the token passed
  //idk... if charge authorized correctly, append bid to bidHistory, set new bid amt, set current bidder uid, etc?
  //Need to do this as a transaction i think, so we can get current bid and ensure the proposed bid is greater than current + bidIncrement
  return
})