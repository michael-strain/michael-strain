// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv2dJDwn9QNmkNiqB-INMD9EklS-B-Lfk",
  authDomain: "michael-strain.firebaseapp.com",
  projectId: "michael-strain",
  storageBucket: "michael-strain.appspot.com",
  messagingSenderId: "115270127034",
  appId: "1:115270127034:web:f010d12fd090dbe094a183",
  measurementId: "G-LTJZ9LS8MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)
// const analytics = getAnalytics(app);