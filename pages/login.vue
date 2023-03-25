<!-- eslint-disable vue/multi-word-component-names -->

<!--To Do
  m. Cancel Registration button.

-->

<template>
  <!-- Register New User with Email and Password -->
  
  <div
    v-if="showUserRegistration"
  >
    <section class="">
      <h2 class="sectionTitle">
        Sign Into Your Account
      </h2>
      <div class="information w-full shadow">
        <div class="shadow">
          <div class="m-5 flex-col flex gap-5">
            <v-text-field
              v-model="first"
              color="primary"
              label="First name"
              variant="underlined"
            />
            <v-text-field
              v-model="last"
              color="primary"
              label="Last name"
              variant="underlined"
            />
            <v-text-field
              v-model="email"
              color="primary"
              label="Email"
              variant="underlined"
            />
            <v-text-field
              v-model="password"
              color="primary"
              label="Password"
              placeholder="Enter your password"
              variant="underlined"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              hint="At least 8 characters"
              counter
              @click:append="show = !show"
            />
            <v-checkbox
              v-model="terms"
              class="text-black"
              label="I agree to the terms and conditions of creating this account."
              @click="terms=!terms"
            />
            <div class="btnRow">
              <button
                class="plainBtn"
                @click="showUserRegistration=!showUserRegistration"
              >
                I Have An Account
              </button>
              <!-- @click="signInUser(loginEmail, loginPassword)"
                @keyup.enter="signInUser(loginEmail, loginPassword)" -->
              <button
                v-if="terms"
                class="plainBtn"
                color="success"
                variant="outlined"
                @click="registerUser(email, password)"
              >
                Complete Registration
              </button>
              <button
                v-else
                disabled
                class="plainBtn opacity-60"
              >
                Complete Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Login User with Email and Password -->
  <div
    v-else 
  >
    <div class="content">
      <section class="">
        <h2 class="section-title">
          Sign Into Your Account
        </h2>
        <div class="information w-full shadow">
          <div class="shadow">
            <div class="m-5 flex-col flex gap-5">
              <v-text-field
                id="email"
                v-model="email"
                type="email"
                label="Email Address"
                placeholder="Email Address"
                hide-details
                class="shadow textField"
              />
           
              <v-text-field
                id="password"
                v-model="password"
                type=""
                label="Password"
                placeholder="Password"
                hide-details
                class="shadow textField"
              />
              <div class="justify-space-between flex btnRow">
                <button
                  class="underlineAnimation text-right"
                  @click="showUserRegistration=!showUserRegistration"
                >
                  Create New Account
                </button>
                <button
                  class="underlineAnimation text-right"
                >
                  Forgot Password
                </button>
              </div>
              <div class="btnRow">
                <button
                  class="plainBtn"
                  @click="loginWithGoogle"
                >
                  Sign In with Google
                </button>
                <button
                  class="plainBtn"
                  @click="signInUser(loginEmail, loginPassword)"
                  @keyup.enter="signInUser(loginEmail, loginPassword)"
                >
                  Sign In with Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <TheFooter />
</template>

<script setup>

// import { firebase } from '@firebase/app';
import { ref } from 'vue'
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  // Need to determine more scopes to add.
  // Calendar, sheets, drive, docs, etc.

  const auth = getAuth();
  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // Need to add the user to firebase/auth
      const firebaseUser = useFirebaseUser()
      firebaseUser.value = user
      auth.currentUser = user
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

const showUserRegistration = ref(false)
const email = ref('')
const password = ref('')

const first = ref('')
const last = ref('')
const terms = ref(false)

const rules = ref({
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
  emailMatch: () => ("The email and password you entered don't match")
})
const show = ref(false)

const loginEmail = ref('')
const loginPassword = ref('')

// const creds = reactive({
//   email:email.value,
//   password:password.value,
// })

async function registerUser(email,password) {
  const user = await createUser(email, password)

  const auth = getAuth()
  sendEmailVerification(auth.currentUser)

  console.log("User Created:")
  console.log(user)
  const router = useRouter();
  router.push('/account')
}

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




// const creds = reactive({
//   email:"test@test.com",
//   password:"shittyp@s$1"
// })
// const nuxtApp = useNuxtApp()
// async function registerUser() {
//   try {
//     console.log("Trying to createUserWithEmailAndPassword")
//     const { user } = await createUserWithEmailAndPassword(
//       nuxtApp.$auth,
//       creds.email,
//       creds.password
//     )
//     console.log("Success...?")
//     console.log(user.uid)
//   } catch (error) {
//     if (error instanceof Error) {
//       //handle error
//       console.log(error)
//     }
//   }
// }

// const email = "test@test.com"
// const password = "123456"

// // Not currently working
// const signin = async function(){await signInWithEmailAndPassword(email, password)}

// console.log(credentials)
</script>




<!--Old Code-->
    <!-- <TheHeader /> -->
    <!-- <div
        class="position-relative max-w-700px z-index-2 mx-auto bg-transparent"
      >
        <p class="text-4xl mx-8 text-center elevation-5 m-3 mb-n10 font-bold rounded-25px bg-gradient-to-b from-gray-600 to-gray-500 text-white p-10">
          User Account
        </p>
      </div> -->
    <!-- <v-card class="w-3/4 mx-auto">
      <p class="text-4xl text-center font-bold bg-blue-900 text-white p-11 mb-n16">
        User Account
      </p>
    </v-card> -->
<!-- <div class="p-5 text-lg text-center">
  <p class="text-gray-600 mt-10">
    You are not currently logged in.
  </p>
  <v-container>
    <v-text-field
      v-model="loginEmail"
      color="primary"
      label="E-mail Address"
      variant="underlined"
    />
    <v-text-field
      v-model="loginPassword"
      color="primary"
      label="Password"
      variant="underlined"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show ? 'text' : 'password'"
      name="input-10-1"
      hint="At least 8 characters"
      counter
      @click:append="show = !show"
    />
  </v-container>
  <div
    class="flex justify-content-around flex-wrap px-5"
    justify-center
    align-baseline
  >
    <div
      class="p-2 flex-fill elevation-10 text-white rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
    >
      <v-btn
        variant="text"
        class="w-full"
        @click="loginWithGoogle"
      >
        <v-icon
          icon="mdi-google"
          color="white"
          class="p-4 mr-3"
          size="x-large"
        />
        Login with Google
      </v-btn>
    </div>
    <div
      class="p-2 <md:(mt-6) md:ml-10 text-white flex-fill elevation-10 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
    >
      <v-btn
        variant="text"
        class="w-full"
        @click="signInUser(loginEmail, loginPassword)"
        @keyup.enter="signInUser(loginEmail, loginPassword)"
      >
        <v-icon
          icon="mdi-email-outline"
          color="white"
          class="p-4 mr-3"
          size="x-large" 
        />
        Login with Email
      </v-btn>
    </div>
  </div>
  <v-card-actions class="flex justify-center align-baseline mt-5">
    <v-btn
      class="text-gray-600"
      @click="showUserRegistration=!showUserRegistration"
    >
      Create New User
    </v-btn>
  </v-card-actions>
</div> -->


