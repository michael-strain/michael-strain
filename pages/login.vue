<!-- eslint-disable vue/multi-word-component-names -->
<template>
  Login Page
  <div>
    <button @click="registerUser">Create User</button>
    <button @click="signin">Sign In</button>
  </div>
</template>

<script setup>

// import { firebase } from '@firebase/app';
import 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { firebaseui } from 'firebaseui';
// import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();

// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     {
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
//     }
//   ],
//   // Other config options...
// });

const creds = reactive({
  email:"test@test.com",
  password:"shittyp@s$1"
})
const nuxtApp = useNuxtApp()
async function registerUser() {
  try {
    const { user } = await createUserWithEmailAndPassword(
      nuxtApp.$auth,
      creds.email,
      creds.password
    )
  } catch (error) {
    if (error instanceof Error) {
      //handle error
    }
  }
}

// const email = "test@test.com"
// const password = "123456"

// const credentials = async function(){await createUser(email, password)}
const signin = async function(){await signInWithEmailAndPassword(email, password)}

// console.log(credentials)
</script>