// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadString } from "firebase/storage"
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
const storage = getStorage(app)

export const saveFile = (fullPath, file) => {
  // const storageRef = ref(storage)
  const imageRef = ref(storage, fullPath)

  

  // // Example of storing a file to google storage
  // const storageRef = ref(storage, "test.txt")
  // const message = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
  // uploadString(storageRef, message, 'data_url').then((snapshot) => {
  //   console.log('Uploaded a data_url string!');
  // })
}

//uploadString() returns an UploadTask, which you can use as a promise or use to manage and monitor the status of the upload.

// const analytics = getAnalytics(app);