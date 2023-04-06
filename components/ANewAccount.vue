<template> 
  <!-- Register New User with Email and Password -->
  <div class="">
    <div class="textfields">
      <v-text-field
        label="Test"
        placeholder="Test"
        hide-details
      />
      <v-text-field
        id="firstname"
        v-model="text"
        label="First Name"
        placeholder="First Name"
        hide-details
      />
      <v-text-field
        id="lastname"
        v-model="text"
        label="Last Name"
        placeholder="Last Name"
        hide-details
        class=""
      />
      <v-text-field
        id="email"
        v-model="email"
        label="Email Address"
        placeholder="Email Address"
        hide-details
        class="text-field"
      />
           
      <v-text-field
        id="password"
        v-model="password"
        label="Password"
        placeholder="Password"
        hide-details
        class="text-field"
      />
    </div>
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
    <v-checkbox
      v-model="terms"
      label="I agree to the terms and conditions of creating this account."
      class="btnlink"
      @click="terms=!terms"
    />
    <div class="btnRow">
      <button
        v-if="terms"
        class="underline-animation"
        color="success"
        variant="outlined"
        @click="registerUser(email, password)"
      >
        Complete Registration
      </button>
      <button
        v-else
        disabled
        class="disabled"
      >
        Complete Registration
      </button>
      <button
        @click="showUserRegistration=!showUserRegistration"
      >
        Log In With Existing Account
      </button>
      <!-- @click="signInUser(loginEmail, loginPassword)"
              @keyup.enter="signInUser(loginEmail, loginPassword)" -->
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
 @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

:root {
  --secondary-color: #03e9f4;
  --secondary-color-light: #95faff;
  --disabled-color: #5a5a5a;
  --color-form-bg: #e7e7e7;
  --color-form-input-bg: #f2f2f2;
  --color-form-button: #dadada;
  --color-form-shadow: #5a5a5a;
  --color-form-highlight: #FFF;
  --color-form-button-text: #333232;
}
@keyframes underline {
  to {
    width: 
    50% 100%,
    100% 0%;
  }
}

/* TEXT FIELDS  */
.darkdiv {
  position: relative;
}
.darkdiv::before {
  content: ''; 
  background: black;
  opacity: 90%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% auto;
  z-index: -1;
}
.textfields {
  gap:2rem;
  display: flex;
  flex-direction: column;
  
}
/* .text-field {
  font-weight: bold;
  border: none;
  border-bottom: 1px solid var(--secondary-color);
  outline: none;
  background: gray;
} */
/* .textfields:hover {
  color: var(--secondary-color);
} */

/* LINKS  */
.btnlink {
  color: var(--secondary-color)

}
.btnlink:hover {
  text-decoration: underline;
}

/* BUTTON  */
.btnstyle {
  text-transform: uppercase;
  padding: .75rem;
  display: inline-block;
  color: var(--secondary-color);
  font-weight: bold;
  letter-spacing: 1px;
  transition: .75s;
}
.btnstyle:hover {
  background: var(--secondary-color);
  color: black;
  box-shadow: 0 0 5px var(--secondary-color),
              0 0 25px var(--secondary-color),
              0 0 75px var(--secondary-color);
  -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
}
.btnstyle:focus {
  background: var( --secondary-color-light);
  color: black;
  box-shadow: 0 0 5px var( --secondary-color-light),
              0 0 25px var( --secondary-color-light),
              0 0 75px var( --secondary-color-light);
  -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
}
.disabled, .disabled:hover {
  color:var(--disabled-color);
}
.disabled:hover {
  color:var(--disabled-color);
  background: var(--disabled-color);
  color: black;
  box-shadow: 0 0 5px var(--disabled-color),
              0 0 25px var(--disabled-color),
              0 0 75px var(--disabled-color);
  -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
}

/* ANIMATION  */
.underline-animation:after {
	content: '';
	display: block;
	margin: auto;
	animation: underline 4s infinite;
}

@keyframes underline {
  0% { width: 0%; height: 2px; background-color: var(--secondary-color);}
  100% {width: 100%; height: 2px; background-color: transparent;}
  /* 100% { width: 0%; height: 2px; background-color: var(--secondary-color);} */
}

/* .overlord {
  :root {
  --color-form-bg: #e7e7e7;
  --color-form-input-bg: #f2f2f2;
  --color-form-button: #dadada;
  --color-form-shadow: #5a5a5a;
  --color-form-highlight: #FFF;
  --color-form-button-text: #333232;
} */
/* .formcont {
    border-radius: 25px;
    padding: 2rem;
    background: rgba(0,0,0 .65);
    font-family: 'Raleway', sans-serif;
} */
  /* div.formcont {
    border-radius: 25px;
    padding: 2rem;
    background: rgba(255,255,255, .65);
    position: relative;
    border-left: 1px solid rgba(255,255,255,.5);
    border-top: 1px solid rgba(255,255,255,.5);
    border-right: 1px solid var(--color-form-shadow);
    border-bottom: 1px solid var(--color-form-shadow);
    
  }
  div.formcont::before { 
    content: ''; 
    background-image: linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%);
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
    padding: .75rem;
    background-color:var(--color-form-input-bg);
    width: 100%;
    border-radius: 10px;
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
} */



</style>