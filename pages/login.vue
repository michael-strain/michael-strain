<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
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
    <v-card
      v-else
      class="mx-auto"
      max-width="344"
      title="User Login"
    >
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
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="success"
          variant="outlined"
          @click="signInUser(loginEmail, loginPassword)"
          @keyup.enter="signInUser(loginEmail, loginPassword)"
        >
          Login
          <v-icon
            icon="mdi-chevron-right"
            end
          />
        </v-btn>
        <v-btn @click="showUserRegistration=!showUserRegistration">
          Create User
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>

// import { firebase } from '@firebase/app';
import { ref } from 'vue'
import 'firebase/auth';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

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