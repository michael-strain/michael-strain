<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    v-if="showUserRegistration"
    class="card"
  >
    <h1>
      Create New Account
    </h1>
    <v-form ref="isValid">
      <div class="twocolinputs">
        <!-- <v-text-field 
            v-model="firstName"
            :rules="[rules.required]"
            label="First Name"
          /> 
          <v-text-field 
            v-model="lastName"
            :rules="[rules.required]"
            label="Last Name"
          />  -->
        <v-text-field 
          v-model="displayName"
          :rules="[rules.required, rules.username]"
          label="Display Name"
        /> 
        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="Email"
        />
        <v-text-field
          v-model="password"
          label="Password"
          hint="Must Contain 8 Characters, Lowercase, Uppercase, and A Number"
          :prepend-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min, rules.password]"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          @click:prepend="show = !show"
        />
        <v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          :rules="[rules.required, rules.min, rules.password, rules.match]"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
        />
      </div>
      <div>
        <v-checkbox
          v-model="terms"
          density="compact"
          label="I agree to the terms and conditions of creating this account."
          class="text-left"
          @click="terms=!terms"
        />
      </div>
      <div class="flex gap-4 w-full flex-wrap justify-space-around mb-4 <md:flex-col">
        <button
          v-if="terms"
          class="btn flex-grow"
          @click="registerUser(email, password)"
        >
          Complete Registration
        </button>
        <button
          v-else
          class="btn btn-disabled flex-grow"
        >
          Complete Registration
        </button>
        <button
          class="btn flex-grow"
          @click="showUserRegistration=!showUserRegistration"
        >
          Log In with Existing Account
        </button>
      </div> 
    </v-form>
  </div>
  <!--BEHelp: Make snackbar show then disappear when someone tries to make a new account with an existing email.-->
  <div 
    v-if="existingEmailSnackbar" 
    class="snackbar elevation-10"
  >
    <span>This email is associated with an existing account.</span>
  </div>
  <div 
    v-if="invalidPasswordSnackbar" 
    class="snackbar elevation-10"
  >
    <span>This email is associated with an existing account.</span>
  </div>
  <div
    v-if="!showUserRegistration"
    class="card"
  >
    <FormCard>
      <template #formtitle>
        Log In To Your Account
      </template>
      <template #forminputs>
        <v-text-field
          v-model="loginEmail"
          label="E-mail"
        /> 
        <v-text-field
          v-model="loginPassword"
          label="Password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        />
      </template>
      <template #formpostinputs>
        <div class="mt-n4 justify-space-between flex mb-7 flex-wrap <md:flex-col">
          <p
            class="underlineAnimation"
            @click="showUserRegistration=!showUserRegistration"
          >
            Create New Account
          </p>
          <p
            class="underlineAnimation"
            @click="forgotpasswordPopup=true"
          >
            Forgot Password
          </p>
          <PopUp v-if="forgotpasswordPopup">
            <template #popuptitle>
              Reset Password
            </template>
            <template #exitbtn> 
              <button
                class="w-full h-full"
                @click="forgotpasswordPopup=false"
              >
                X
              </button>
            </template>
            <v-text-field 
              id="email"
              v-model="loginEmail"
              type="text"
              label="E-mail"
            />
            <div class="vbtn flex-grow btn btn-primary text-primary-content">
              <v-btn
                class=""
                variant="text"
                @click="forgotPassword(), forgotpasswordPopup=false"
              >
                Send Password Reset Email
              </v-btn>
            </div>
          </PopUp>
        </div>
        <div v-if="showPasswordReset">
          A password reset link has been sent to your email.
        </div>
      </template>
      <template #formbuttons>
        <div class="vbtn flex-grow btn btn-primary text-primary-content">
          <v-btn
            class=""
            variant="text"
            @click="loginWithGoogle()"
          >
            Sign In With Google
          </v-btn>
        </div>
        <div class="vbtn flex-grow btn btn-primary text-primary-content">
          <v-btn
            class=""
            variant="text"
            @click="signInUser(loginEmail, loginPassword)"
            @keyup.enter="signInUser(loginEmail, loginPassword)"
          >
            Sign In With Email
          </v-btn>
        </div>
      </template>
    </FormCard>
  </div>
</template>

<script setup>

import { useCurrentUser, useFirestore, useFirebaseApp } from 'vuefire'
import { getAuth, updateProfile, createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup, getRedirectResult, sendPasswordResetEmail, signInWithEmailAndPassword, browserPopupRedirectResolver } from 'firebase/auth';
import { useUserDataStore } from '../stores/userData'
import { setDoc, doc, getDoc, runTransaction } from 'firebase/firestore'
// import { isEqual } from 'lodash-es'

const showUserRegistration = ref(false)
const showPasswordReset = ref(false)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const phoneNumber = ref('')
const forgotpasswordPopup = ref(false)
// const firstName = ref('')
// const lastName = ref('')
const displayName = ref('')
const terms = ref(false)

const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const phonePattern = /^^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

const rules = ref({
  email: v=> emailPattern.test(v) || 'Invalid E-mail',
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
  phone: v=>phonePattern.test(v) || 'Invalid Phone Number',
  password: v=> passPattern.test(v) || 'Must Contain 8 Characters, Lowercase, Uppercase, and A Number',
  match: v=> v===password.value || "Passwords Don't Match",
  emailMatch: () => ("The email and password you entered don't match"),
  username: v=>v.length>0 || 'Invalid Username'
})

const show = ref(false)
const isValid=ref()

const loginEmail = ref('')
const loginPassword = ref('')
const existingEmailSnackbar = ref(false)
const invalidPasswordSnackbar = ref(false)



onMounted(() =>{
  getRedirectResult(getAuth(useFirebaseApp())).catch((reason) => {
    console.error('Failed redirect result', reason)
  })
  if(useCurrentUser().value!=null){
    return navigateTo('/account')
  }
})


//shouldn't we use something defined in our firebase composable instead?...or something?
const registerUser = async (email,password) => {
  if((await isValid.value.validate()).valid){
    const newuser = await createUserWithEmailAndPassword(getAuth(useFirebaseApp()), email, password)
    //update displayName and phoneNumber if they were input?
    updateProfile(newuser.user,{displayName:displayName.value,phoneNumber:phoneNumber.value.length>10})

    const newDoc = useUserDataStore().userData //because of this, we should be pulling all the existing billingInfo, shippingInfo, cart and wish data
    newDoc.userInfo.email = email
    newDoc.userInfo.uid = newuser.user.uid
    newDoc.userInfo.displayName = newuser.user.displayName
    newDoc.userInfo.anon = false
    newDoc.userInfo.verified = newuser.user.emailVerified
    // newDoc.userInfo.bId = null
    // newDoc.userInfo.stripeCustomerId = await $fetch('/api/payment/stripe/customer',{method:'POST',headers:{token:(await useCurrentUser().value.getIdToken())}})
    // newDoc.userInfo.idToken = user.user.getIdToken() //Not sure if this is necessary, or even a good idea

    useUserDataStore().userData = newDoc
    await setDoc(doc(useFirestore(),'users',newuser.user.uid),newDoc)

    //I don't know if this is working - but it logs a msg in firebase emulators terminal :D
    await sendEmailVerification(newuser.user) //We should potentially be setting an actionCodeURL here in order to complete the validation process... I think
    await navigateTo('/account')
  } else {
    console.error('Invalid Form Submission')
    return {error: 'Invalid Form Submission'}
  }
}

const signInUser = (email, password) => {
  signInWithEmailAndPassword(getAuth(useFirebaseApp()), email, password).then((userCred)=>{
    getAuth(useFirebaseApp()).currentUser = userCred.user
    const userDocRef = doc(useFirestore(),'users', userCred.user.uid)
    try{
      runTransaction(useFirestore(),async(transaction)=>{
        const userDoc = await transaction.get(userDocRef)
        // let aCart = useUserDataStore().userData.cart
        // let oCart = userDoc.get('cart')

        if(userDoc.exists()){
          //update it with any info, then merge the cart
          useUserDataStore().userData.userInfo = userDoc.get('userInfo')
          useUserDataStore().userData.theme = userDoc.get('theme')
          // useUserDataStore().userData.selectedShippingInfo = userDoc.get('selectedShippingInfo')
          // useUserDataStore().userData.shippingInfo = userDoc.get('shippingInfo')
          // useUserDataStore().userData.wishes = userDoc.get('wishes')
          // useUserDataStore().userData.orders = userDoc.get('orders')
          // if(!isEqual(aCart, oCart)){
          //   // const newCart = union(oCart,aCart)
          //   // Going to use a better custom merge instead
          //   // Should ADD unlogged items to the users stored cart items
          //   // Should UPDATE items already in the users stored cart if updated in local store
          //   useUserDataStore().userData.cart = aCart.filter(aa => !oCart.find(bb => aa["productId"] === bb["productId"] && aa["variantId"] === bb["variantId"])).concat(oCart);
          //   transaction.update(userDocRef,{cart:useUserDataStore().userData.cart})
          // }
        }else{
          // const stripeCustomerId = await $fetch('/api/payment/stripe/customer',{method:'POST',headers:{token:await result.user.getIdToken()}})
          useUserDataStore().userData.userInfo = {
            email: result.user.email,
            phone: result.user.phoneNumber,
            uid: result.user.uid,
            verified: result.user.emailVerified,
            displayName: result.user.displayName==null?result.user.email:result.user.displayName, //could be nice to utilize useUserDataStore().userData.selectedShippingInfo.firstName
            anon: result.user.isAnonymous,
          }
          try{
            transaction.set(userDocRef,useUserDataStore().userData,{merge:true})
          }catch(e){
            console.log(e)
          }
        }
      }).then(async()=>{
          await navigateTo('/account')
      })
    }catch(e){
      //Need to notify the user that there was a problem
      console.error(e)
    }
    return navigateTo('/account')
    //onAuthStateChanged from App.vue should populate our user's cart/wishlist/userInfo/shippingInfo/billingInfo
  })
}


const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  // Need to determine what Google scopes to add.
  // Calendar, sheets, drive, docs, etc.

  //May need to use firebase/auth getAuth
  signInWithPopup(getAuth(useFirebaseApp()),provider).then(async(result)=>{
    getAuth(useFirebaseApp()).currentUser = result.user
    
    //Transaction
    const userDocRef = doc(useFirestore(),'users', result.user.uid)
    try{
      await runTransaction(useFirestore(),async(transaction)=>{
        const userDoc = await transaction.get(userDocRef)
        // let aCart = useUserDataStore().userData.cart
        // let oCart = userDoc.get('cart')

        if(userDoc.exists()){
          //update it with any info, then merge the cart
          useUserDataStore().userData.userInfo = userDoc.get('userInfo')
          useUserDataStore().userData.theme = userDoc.get('theme')
        }else{
          // const stripeCustomerId = await $fetch('/api/payment/stripe/customer',{method:'POST',headers:{token:await result.user.getIdToken()}})
          useUserDataStore().userData.userInfo = {
            email: result.user.email,
            phone: result.user.phoneNumber,
            uid: result.user.uid,
            verified: result.user.emailVerified,
            displayName: result.user.displayName==null?result.user.email:result.user.displayName, //could be nice to utilize useUserDataStore().userData.selectedShippingInfo.firstName
            anon: result.user.isAnonymous,
            // stripeCustomerId: stripeCustomerId
          }
          try{
            transaction.set(userDocRef,useUserDataStore().userData,{merge:true})
          }catch(e){
            console.log(e)
          }
        }
      }).then(async()=>{
          await navigateTo('/account')
      })
    }catch(e){
      //Need to notify the user that there was a problem
      console.error(e)
    }
  })
}
const forgotPassword = async () => {
  if(loginEmail.value.length>=5){
    sendPasswordResetEmail(getAuth(useFirebaseApp()),loginEmail.value)//may need action link settings adjusted in 3rd arg
    showPasswordReset.value=true
    //Need to pop something up that tells the user to check their e-mail for pass reset link
  }else{
    //display a popup with the email textfield again (same v-model and everything)
    //but then with a button that says 'Send Password Reset Link'
  }
}

useServerSeoMeta({
  title: useRuntimeConfig().public.SHOP_NAME + ' - Login',
  ogTitle: 'Login',
  description: 'Log in so that you can send Michael an employment offer on behalf of your company.',
  ogDescription: 'Michael Strain, the man for the job.',
  twitterCard: 'summary_large_image',
  ogType:'website',
  ogUrl:'https://' + useRuntimeConfig().public.SITE_DOMAIN
})
</script>

<style scoped>
.btnstyle_outlinetofilled{
  transition: .2s ease-in-out 0s;
  color: rgb(var(--v-theme-primary-darken-3));
  border: 3px solid rgb(var(--v-theme-primary-darken-2));
}

.btnstyle_outlinetofilled:hover{
  background-color: rgb(var(--v-theme-primary-darken-3));
  border: 3px solid rgb(var(--v-theme-primary-darken-3));
  color: #fff;
}

.btnstyle_outlinetofilled:disabled{
  background-color: rgb(var(--v-theme-surface-darken-3));
  border: 3px solid rgb(var(--v-theme-surface-darken-3));
  color: #fff;
}

.underlineAnimation {
  display: inline-block;
  position: relative;
  color: gray;
  cursor: pointer;
}

.underlineAnimation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: gray;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  cursor: pointer;
}

.underlineAnimation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>