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
  if(id){
    // @ts-ignore
    const docRef = doc(collection(firestoreDb, col), id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const docs = Array.from(docSnap.data().docs).map((doc)=> {
        return {
          ...docSnap.data(),
          id: docSnap.id,
        }
    })
   }
  } else {
    // @ts-ignore
    const colRef = collection(firestoreDb, col)
    const snapshot = await getDocs(colRef)
    const docs = Array.from(snapshot.docs).map((doc)=> {
      return {
        ...doc.data(),
        id: doc.id,
      }
    })
    return docs
  }
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