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
WhereFilterOp,
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
}

export const queryCollectionWhere = async (col:string, field:string, operator:WhereFilterOp, value:string) => {
  const results = Array()
  const q = query(collection(firestoreDb, col), where(field, operator, value))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    let docData = doc.data()
    results.push(docData)
  })
  return results
}

export const set = async (col:string, document:Object) => {
  await setDoc(doc(collection(firestoreDb, col)),document)
}

export const add = async (col: string, document: Object) => {
  // @ts-ignore
  const colRef = await collection(firestoreDb, col)
  const docRef = await addDoc(colRef, document)
  return docRef
}

export const del = async (col:string, id:string) => {
  const docRef = doc(firestoreDb, col, id)
  return await deleteDoc(docRef)
}

// export const update = async(col:string, id:string, document:Object)=>{
//   return await firestoreDb.collection(col).doc(id).update(document)
// }