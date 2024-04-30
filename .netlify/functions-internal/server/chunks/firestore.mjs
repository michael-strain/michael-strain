import { getFirestore, collection, getDocs, query, where, setDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDv2dJDwn9QNmkNiqB-INMD9EklS-B-Lfk",
  authDomain: "michael-strain.firebaseapp.com",
  projectId: "michael-strain",
  storageBucket: "michael-strain.appspot.com",
  messagingSenderId: "115270127034",
  appId: "1:115270127034:web:f010d12fd090dbe094a183",
  measurementId: "G-LTJZ9LS8MN"
};
const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);

const queryByCollection = async (col, id) => {
  const results = Array();
  const colRef = collection(firestoreDb, col);
  const docsSnap = await getDocs(colRef);
  docsSnap.forEach((doc2) => {
    let docData = doc2.data();
    results.push(docData);
  });
  return results;
};
const queryCollectionWhere = async (col, field, operator, value) => {
  try {
    const results = Array();
    const q = query(collection(firestoreDb, col), where(field, operator, value));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc2) => {
      let docId = doc2.id ? doc2.id : null;
      let docData = doc2.data();
      docData.id = docId;
      console.log(docData);
      results.push(docData);
    });
    return results;
  } catch (e) {
    console.log("queryCollectionWhere Error: " + e);
    return { e };
  }
};
const queryCollectionWhereIn = async (col, field, value) => {
  try {
    const results = Array();
    const q = query(collection(firestoreDb, col), where(field, "in", [value]));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc2) => {
      let docId = doc2.id;
      let docData = doc2.data();
      docData.id = docId;
      results.push(docData);
    });
    return results;
  } catch (e) {
    console.log("queryCollectionWhere Error: " + e);
    return { e };
  }
};
const set = async (col, docId, updateVal) => {
  await setDoc(doc(collection(firestoreDb, col), docId), updateVal);
  return;
};
const add = async (col, document) => {
  const colRef = collection(firestoreDb, col);
  const docRef = await addDoc(colRef, document);
  return docRef;
};
const del = async (col, id) => {
  const docRef = doc(firestoreDb, col, id);
  return await deleteDoc(docRef);
};

export { queryCollectionWhereIn as a, queryByCollection as b, add as c, del as d, queryCollectionWhere as q, set as s };
//# sourceMappingURL=firestore.mjs.map
