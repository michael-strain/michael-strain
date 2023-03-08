// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadString, getDownloadURL, getMetadata } from "firebase/storage"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence, applyActionCode, checkActionCode, sendEmailVerification } from "firebase/auth";
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


// Auth Functions

export const createUser = async (email, password) => {
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
};

export const signInUser = async (email, password) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  const router = useRouter();
  router.push("/");
  return credentials;
};

export const initUser = async () => {
  const auth = getAuth()
  setPersistence(auth, browserSessionPersistence)
  const firebaseUser = useFirebaseUser()
  // firebaseUser = auth.currentUser

  const userCookie = useCookie("userCookie")

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // https://firebase.google.com/docs/reference/js/auth.userinfo.md#userinfo_interface

      console.log("(uid: " + user.uid + ") is logged in.")
      // Probably need to do something more like this instead:
      // https://firebase.google.com/docs/reference/js/auth.md#example_14
      // if (!user.emailVerified){
      //   const sendValidationEmail = async () => {
      //     const actionCodeSettings = {
      //       url: 'https://www.example.com/?email=user@example.com',
      //       iOS: {
      //          bundleId: 'com.example.ios'
      //       },
      //       android: {
      //         packageName: 'com.example.android',
      //         installApp: true,
      //         minimumVersion: '12'
      //       },
      //       handleCodeInApp: true
      //     };
      //     await sendEmailVerification(user, actionCodeSettings);
      //     // Obtain code from the user.
      //     // await applyActionCode(auth, code);
      //   }
      //   // Really we should push to a page that says "Check your email!"
      //   // router.push("/")
      // }

    } else {
      //if signed out
      const router = useRouter()
      router.push("/")
    }

    // firebaseUser.value = user

    // @ts-ignore
    userCookie.value = user // ignore error because nuxt will serialize to json

    // $fetch("/api/auth", {
    //   method: "POST",
    //   body: { user },
    // });
  });
};

export const applyAuthEmailValidationCode = async (code) => {
  const auth = getAuth()
  const result = await auth.applyActionCode(auth, code)
}

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut();
  const router = useRouter();
  router.push("/")
  return result;
};

//Firebase Storage Functions

export const saveFile = async (fullPath, file) => {
  const storageRef = ref(storage, fullPath)
  const snapshot = await uploadString(storageRef, file, "data_url")
  if(snapshot) {
    const downloadUrl = await getDownloadURL(snapshot.ref)
    const metadata = await getMetadata(storageRef)
    return { snapshot, downloadUrl, metadata }
  }

  // // Theoretically we would be able to use an upload task to monitor progress, pause, resume, etc.
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

// // Copilot made this, it might be useful later
// export const getFiles = async (path) => {
//   const storageRef = ref(storage, path)
//   const listRef = listAll(storageRef)
//   return listRef
// }

// uploadString() returns an UploadTask, which you can use as a promise or use to manage and monitor the status of the upload.
// https://next.vuetifyjs.com/en/components/progress-circular/

// const analytics = getAnalytics(app);