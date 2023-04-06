<!-- eslint-disable vue/multi-word-component-names -->

<!--To Do
  m. Cancel Registration button.

-->

<template>
  <!-- Register New User with Email and Password -->
  <NuxtLayout
    :name="layout"
  />
  <div class="flex overflow-auto h-screen justify-center">
    <div class="content">
      <div class="">
        <div class="pagetitle textstroke">
          LSDope
        </div>
      </div>
      <div class="justify-center">
        <div>
          <div
            v-if="showUserRegistration"
          >
            <section class="">
              <h2 class=""> 
                Sign Into Your Account
              </h2>
              <div class="information">
                <div class="">
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
                        class=""
                        @click="showUserRegistration=!showUserRegistration"
                      >
                        I Have An Account
                      </button>
                      <!-- @click="signInUser(loginEmail, loginPassword)"
                @keyup.enter="signInUser(loginEmail, loginPassword)" -->
                      <button
                        v-if="terms"
                        class=""
                        color="success"
                        variant="outlined"
                        @click="registerUser(email, password)"
                      >
                        Complete Registration
                      </button>
                      <button
                        v-else
                        disabled
                        class="opacity-60"
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
            <div class="">
              <section class="">
                <h2 class="">
                  V-Else
                </h2>
                
                <div class="information darkdiv w-full">
                  <div class="textfields">
                    <v-text-field
                      id="email"
                      v-model="email"
                      label="Email Address"
                      placeholder="Email Address"
                      hide-details
                      class=""
                    />
           
                    <v-text-field
                      id="password"
                      v-model="password"
                      label="Password"
                      placeholder="Password"
                      hide-details
                      class=""
                    />
                  </div>
                  <div>
                    <div class="justify-space-between flex btnRow">
                      <button
                        class="text-right"
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
                        class=""
                        @click="loginWithGoogle"
                      >
                        Sign In with Google
                      </button>
                      <button
                        class=""
                        @click="signInUser(loginEmail, loginPassword)"
                        @keyup.enter="signInUser(loginEmail, loginPassword)"
                      >
                        Sign In with Email
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// import { firebase } from '@firebase/app';
import { ref } from 'vue'
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import "@/assets/global.css";
import { useTheme } from 'vuetify'

const route = useRoute()
const fromRoute = route.redirectedFrom
const layout = "lava-layout";
const theme = useTheme()



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
      const router = useRouter();
      if(fromRoute) {
        router.back()
      } else {
        router.push('/account')
      }
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
  sendEmailVerification(auth.currentUser ) //We should potentially be setting an actionCodeURL here in order to complete the validation process... I think

  console.log("User Created:")
  console.log(user)
  const router = useRouter();
  if(fromRoute){
    router.push(fromRoute)
  } else{
    router.push('/account')
  }
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

