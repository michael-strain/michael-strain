<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-repeat h-auto p-20 bg-gradient-to-b from-transparent via-transparent to-gray-600 bg-url('../img/purple-mushroom.jpg')">
    <!-- <TheHeader /> -->
    <!-- <v-card class="w-3/4 mx-auto">
      <p class="text-4xl text-center font-bold bg-blue-900 text-white p-11 mb-n16">
        User Account
      </p>
    </v-card> -->
    
    <div class="">
      <div
        class="position-relative max-w-700px z-index-2 mx-auto bg-transparent"
        variant=""
      >
        <p class="text-4xl mx-8 text-center elevation-5 m-3 mb-n10 font-bold rounded-25px bg-gradient-to-b from-gray-600 to-gray-500 text-white p-10">
          User Account
        </p>
      </div>
      <!-- Register New User with Email and Password -->
      <v-card
        v-if="showUserRegistration"
        class="mx-auto"
        max-width="344"
        title="User Registration"
      >
        <v-container>
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
            color="secondary"
            label="I agree to site terms and conditions"
            @click="terms=!terms"
          />
        </v-container>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            v-if="terms"
            color="success"
            variant="outlined"
            ripple
            @click="registerUser(email, password)"
          >
            Complete Registration
            <v-icon
              icon="mdi-chevron-right"
              end
            />
          </v-btn>
          <v-btn
            v-else
            disabled
          >
            Complete Registration
            <v-icon
              icon="mdi-chevron-right"
              end
            />
          </v-btn>
          <v-btn @click="showUserRegistration=!showUserRegistration">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- Login User with Email and Password -->
      
      <div
        v-else
        class="m-auto px-10 bg-white max-w-700px elevation-5 rounded-25px"
      >
        <!-- <v-card class="w-1/3 float mb-n16">
        <p class="text-4xl text-center font-bold bg-blue-900 text-white p-8">
          User Account
        </p>
      </v-card> -->
        <div class="p-5 text-lg text-center">
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
            class="flex justify-center align-baseline flex-wrap "
            justify-center
            align-baseline
            style="gap: 3rem"
          >
            <div
              class="p-2 elevation-10 text-white rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
            >
              <v-btn
                variant="text"
                @click="loginWithGoogle"
              >
                <v-icon
                  icon="mdi-google"
                  color="white"
                  class="p-4 mr-3"
                  size="x-large" />
                Login with Google
              </v-btn>
            </div>
            <div
              class="p-2 elevation-10 text-white rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
            >
              <v-btn
                variant="text"
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
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="h-100px bg-gradient-to-b from-indigo-400 to-indigo-900" /> -->
  <TheFooter class="bg-black " />
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