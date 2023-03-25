<template>
  <!-- Register New User with Email and Password -->
  <div class="information overlord w-full">
    <div class="formcont">
      <div class="flex-col flex gap-2rem">
        <input
          v-model="first"
          placeholder="First name"
        >
        <input
          v-model="last"
          placeholder="Last name"
        >
        <input
          v-model="email"
          placeholder="Email"
        >
        <input
          v-model="password"
          placeholder="Password"
        >
        <!-- <input
          v-model="password"
          label="Password"
          placeholder="Enter your password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          hint="At least 8 characters"
          counter
          @click:append="show = !show"
        > -->
      </div>
      <div class="">
        <v-checkbox
          v-model="terms"
          label="I agree to the terms and conditions of creating this account."
          class="checkbox"
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
            class=""
          >
            Complete Registration
          </button>
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

</script>

<style>

/* .formheader {
  font-weight: 800;
  font-size: 2.5rem;
  text-align: right;
   background: -webkit-linear-gradient(-86deg, #EEF85B 5%, #7AEC8D 53%, #09E5C3 91%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 6px transparent;  
  color: #ffffff;
  text-shadow: 4px 4px 4px rgb(var(--v-theme-surface-variant));
} */

:root {
  --color-form-bg: #e7e7e7;
  --color-form-input-bg: #f2f2f2;
  --color-form-button: #dadada;
  --color-form-shadow: #5a5a5a;
  --color-form-highlight: #FFF;
  --color-form-button-text: #333232;
}

.overlord {
  div.formcont {
    /* background-color:var(--color-form-bg); */
    /* box-shadow: 14px 14px 20px var(--color-form-shadow); */
    /* box-shadow: -14px -14px 20px white; */
    border-radius: 25px;
    padding: 2rem;
    background: rgba(255,255,255, .3);
    position: relative;
    border-left: 1px solid rgba(255,255,255,.5);
    border-top: 1px solid rgba(255,255,255,.5);
    border-right: 1px solid var(--color-form-shadow);
    border-bottom: 1px solid var(--color-form-shadow);
    
  }
  div.formcont::before {
    content: '';
    /* background-image: linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%); */
    background: var(--background-image-dark);
    top: -10px;
    left: -10px;
    bottom: -10px;
    right: -10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% auto;
    filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index:-1;
}

  input {
    box-shadow:  inset 2px 2px 5px var(--color-form-shadow), inset -5px -5px 10px var(--color-form-highlight);
    /* text-shadow: 1px 1px 0 var(--color-form-highlight); */
    padding: .75rem;
    background-color:var(--color-form-input-bg);
    width: 100%;
    border-radius: 10px;
    /* box-sizing: border-box; */
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;
    border-top: 1px solid var(--color-form-shadow);
    border-left: 1px solid var(--color-form-shadow);
  }
  input:focus {
    outline: none;
    box-shadow:  inset 1px 1px 2px var(--color-form-shadow), inset -1px -1px 2px var(--color-form-highlight);
  }

  button {
    color: var(--color-form-button-text);
    font-weight: bold;
    box-shadow: -4px -4px 10px var(--color-form-highlight),  4px 4px 10px var(--color-form-shadow);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 600;
    border-radius: 10px;
    background-color:var(--color-form-button);
    padding: .75rem;
    border-top: 1px solid var(--color-form-highlight);
    border-left: 1px solid var(--color-form-highlight);
    /* border-left: 3px solid rgba(255,255,255,0.5);
    border-top: 3px solid rgba(255,255,255,0.5); */
  }

  button:hover {
    box-shadow: -2px -2px 5px var(--color-form-highlight), 2px 2px 5px var(--color-form-shadow);
  }

  button:active {
    box-shadow: inset 1px 1px 2px var(--color-form-shadow), inset -1px -1px 2px var(--color-form-highlight);
    border-top: 1px solid var(--color-form-shadow);
    border-left: 1px solid var(--color-form-shadow);
  }
  .checkbox {
    font-weight: 600;
  }
}




.glassform {
  background-color:var(--color-form-bg);
  box-shadow: 14px 14px 20px var(--color-form-shadow), -6px -6px 15px var(--color-form-highlight);
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  border-radius: 20px;
  background: rgba(255,255,255,0.3);
  display: flex;
  border-left: 1px solid rgba(255,255,255,0.5);
  border-top: 1px solid rgba(255,255,255,0.5);
}



</style>