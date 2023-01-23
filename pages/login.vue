<!-- eslint-disable vue/multi-word-component-names -->
<template>
  Login Page
  <div id="firebaseui-auth-container">
    <button @click="credentials">Create User</button>
  </div>
</template>

<script setup>
const email = "test@test.com"
const password = "123456"

const credentials = async function(){await createUser(email, password)}

// console.log(credentials)


// import { firebase } from 'firebase/app';
// import 'firebase/auth';
// import { firebaseui } from 'firebaseui';

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
</script>