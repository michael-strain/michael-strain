import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  collectionGroup,
  Timestamp,
} from "firebase/firestore"
import { firestoreDb } from "../lib/firebase"


export const queryByCollection = async (col:string, id?:string) => {

  const results = Array()
  const colRef = collection(firestoreDb, col)
  const docsSnap = await getDocs(colRef)
  docsSnap.forEach(doc => {
    let docData = doc.data()
    results.push(docData)
  })
  // results.shift() // Remove the first element which is always an empty object for some reason
  return results


  // if(id){
  //   // @ts-ignore
  //   const docRef = doc(collection(firestoreDb, col), id)
  //   const docSnap = await getDoc(docRef)
  //   if (docSnap.exists()) {
  //     const docs = Array.from(docSnap.data().docs).map((doc)=> {
  //       return {
  //         ...docSnap.data(),
  //         id: docSnap.id,
  //       }
  //   })
  //  }
  // } else {
  //   // @ts-ignore
  //   const colRef = collection(firestoreDb, col)
  //   const snapshot = await getDocs(colRef)
  //   const docs = Array.from(snapshot.docs).map((doc)=> {
  //     return {
  //       ...doc.data(),
  //       id: doc.id,
  //     }
  //   })
  //   return docs
  // }
}

export const set = async (col:string, document:Object) => {
  await setDoc(doc(collection(firestoreDb, col)),document)
}

export const add = async (col: string, document: Object) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col)
  const docRef = await addDoc(colRef, document)
  return docRef
}

export const del = async (col, id) => {
  const docRef = doc(firestoreDb, col, id)
  return await deleteDoc(docRef)
}

type Product = {
  blueprint_id: number,
  created_at: string,
  description: string,
  id: string,
  images: [
    {
      is_default: boolean,
      is_selected_for_publishing: boolean,
      position: string,
      src: string,
      variant_ids: number[],
    },
  ],
  is_locked: boolean,
  options?: [
    {
      name: string,
      type: string,
      values: [
        {
          id: number,
          title: string,
        }
      ],
    },
  ],
  print_areas: [
    {
      background: string,
      placeholders?: [
        images: [
          {
            angle: number,
            height: number,
            id: string,
            name: string,
            scale: number,
            type: string,
            width: number,
            x: number,
            y: number,
            position: string,
          }
        ],
        position: string,
      ],
      variant_ids: number[],
    },
  ],
  print_details?: [],
  print_provider_id: number,
  sales_channel_properties?: [],
  shop_id: number,
  tags: string[],
  title: string,
  twodaydelivery_enabled?: boolean,
  updated_at: string,
  user_id: number,
  variants?: [
    {
      additionalItemCost?: number,
      cost?: number,
      firstItemCost?: number,
      grams?: number,
      handlingTime?: number,
      handlingTimeUnit?: string,
      id: number,
      is_available: boolean,
      is_default: boolean,
      is_enabled: boolean,
      options?: number[],
      price?: number,
      quantity?: number,
      shippingCountries?: string[],
      sku: string,
      title: string
    },
  ],
  visible: boolean
}