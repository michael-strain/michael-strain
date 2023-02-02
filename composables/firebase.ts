// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadString, getDownloadURL, getMetadata } from "firebase/storage"
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

export const saveFile = async (fullPath, file) => {
  // const storageRef = ref(storage)
  const storageRef = ref(storage, fullPath)

  // const uploadTask = uploadString(storageRef,file,"data_url")

  // // // Pause the upload
  // // uploadTask.pause();

  // // // Resume the upload
  // // uploadTask.resume();

  // // // Cancel the upload
  // // uploadTask.cancel();

  // uploadTask.on('state_changed',
  // (snapshot) => {
  //   const progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
  //   console.log("Upload is " + progress + "% done")
  //   switch (snapshot.state) {
  //     case 'paused':
  //       console.log("Upload is paused")
  //       break
  //     case 'running':
  //       console.log("Upload is running")
  //       break
  //   }
  // },
  // (error) => {
  //   //handle unsuccessful uploads
  // },
  // () => {
  //   //Handle successful uploads on complete
  //   const downloadUrl = getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
  //     return downloadUrl
  //   })
  //   const metadata = getMetadata(storageRef)
  //   return { uploadTask.snapshot.ref, downloadUrl, metadata }
  // })

  // //This works perfectly
  const snapshot = await uploadString(storageRef, file, "data_url")
  if(snapshot) {
    const downloadUrl = await getDownloadURL(snapshot.ref)
    const metadata = await getMetadata(storageRef)
    return { snapshot, downloadUrl, metadata }
  }


  // // Example of storing a file to google storage
  // const storageRef = ref(storage, "test.txt")
  // const message = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
  // uploadString(storageRef, message, 'data_url').then((snapshot) => {
  //   console.log('Uploaded a data_url string!');
  // })
}

export const uploadFile = async (file) => {
  return await new Promise(function (resolve, reject) {
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = async (e) => {
      const result = reader.result
      const { snapshot, downloadUrl, metadata } = await saveFile("images/" + file.name, result)
      if(snapshot){
        resolve({ snapshot, downloadUrl, metadata })
      } else {
        reject()
      }
    }
  })
}

//uploadString() returns an UploadTask, which you can use as a promise or use to manage and monitor the status of the upload.

// const analytics = getAnalytics(app);