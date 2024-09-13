<!-- eslint-disable vue/multi-word-component-names -->
 <!-- TODO:
 -->
 <template>
  <ClientOnly>
    <div
      v-if="useCurrentUser().value"
      class="card"
    >
      <div
        v-if="roles.includes('service'||'admin'||'super-admin')"
        class="w-full flex justify-center mb-4"
      >
        <NuxtLink
          to="/admin"
        >
          <button class="btn">
            Admins Rule
          </button>
        </NuxtLink>
      </div>
      <h1>
        Account Information
      </h1>
      <div
        v-if="!(useCurrentUser().value.anon)"
        class="flex flex-col gap-3 justiy-space-around text-left text-wrap"
      >
        <p v-if="useCurrentUser().value.displayName">
          Name: {{ useCurrentUser().value.displayName }}
        </p>
        <p v-if="useCurrentUser().value.phoneNumber">
          Phone Number: {{ useCurrentUser().value.phoneNumber }}
        </p>
        <p>
          Email: {{ useCurrentUser().value.email }}
          <button
            v-if="!useCurrentUser().value.emailVerified"
            @click="sendEmailVerification(useCurrentUser().value)"
          >
            {{ 'Verify Account ( UNVERIFIED )' }} Refresh After Verifying
          </button>
        </p>
                  
        <!-- <div class="flex gap-5">
          <p>
            Address: {{ useUserDataStore().userData.selectedShippingInfo.address1 }} {{ useUserDataStore().userData.selectedShippingInfo.address2 }} {{ useUserDataStore().userData.selectedShippingInfo.city }} {{ useUserDataStore().userData.selectedShippingInfo.region }} {{ useUserDataStore().userData.selectedShippingInfo.zip }} {{ useUserDataStore().userData.selectedShippingInfo.country }}
          </p>
          <button
            class="link link-secondary"
            @click="editaddressPopup =! editaddressPopup"
          >
            EDIT
          </button>
        </div>
        <br>
        <div
          v-if="editaddressPopup"
          class="text-center mx-auto card p-6 my-10"
        >
          <ShippingProfiles>
            <template #title>
              <h1>Shipping Address</h1>
            </template>
          </ShippingProfiles>  
          <br>
          <div class="twocolinputs">
            <button
              class="btn btn-neutral"
              @click="editaddressPopup=false"
            >
              Cancel
            </button>
            <button
              class="btn btn-neutral"
              @click="editaddressPopup=false"
            >
              Use This Address
            </button>
          </div>
        </div> -->
      </div>
      <div v-else>
        You are logged in Anonymously.
        Link your account by E-mail or Google to save your order info.
      </div>


      <div class="flex flex-col gap-5 flex-wrap justify-space-around sm:flex-row">
        <button
          class="btn btn-primary flex-grow"
          @click="passwordReset(), resetpasswordPopup=true"
        >
          Change Password
        </button>
        <PopUp v-if="resetpasswordPopup">
          <template #popuptitle>
            Change Password
          </template>
          <template #exitbtn> 
            <button
              class="w-full h-full"
              @click="resetpasswordPopup=false"
            >
              X
            </button>
          </template>
          <v-text-field 
            id="email"
            v-model="email"
            type="text"
            label="E-mail"
          />
          <button
            class="btn btn-neutral w-full"
          >
            Send Password Reset Email
          </button>
          <!-- <button
              class="btn btn-neutral w-full"
              @click="password=''; confirmPassword=''; linkemailPopup=false"
            >
              Cancel
            </button> -->
        </PopUp>

        <!--Link With Google Account-->
        <button 
          v-if="!(signInProviders.includes('google.com'))"
          class="btn btn-primary flex-grow"
          @click="linkToGoogle()"
        >
          Link My Google Account
        </button>

        <!--Link my Email Button-->
        <button
          v-if="!(signInProviders.includes('password'||'google.com'))" 
          class="btn btn-primary flex-grow"
          @click="linkemailPopup=true"
        >
          Link Email Address
        </button>
        <PopUp v-if="linkemailPopup">
          <template #popuptitle>
            Link My Email
          </template>
          <template #exitbtn> 
            <button
              class="w-full h-full"
              @click="linkemailPopup=false"
            >
              X
            </button>
          </template>
          <v-text-field 
            id="email"
            v-model="email"
            type="text"
            label="E-mail"
          />
          <v-text-field
            v-model="password"
            label="Password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.password]"
            :type="show ? 'text' : 'password'"
            counter
            @click:append="show = !show"
          />
          <v-text-field 
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            label="Confirm Password"
            :rules="[rules.required, rules.min, rules.password, rules.match]"
          />
          <button
            class="btn btn-neutral w-full"
            @click="linkToEmail(); linkemailPopup=false"
          >
            Link
          </button>
          <!-- <button
              class="btn btn-neutral w-full"
              @click="password=''; confirmPassword=''; linkemailPopup=false"
            >
              Cancel
            </button> -->
        </PopUp>

        <!--Sign Out Button-->
        <button
          class="btn btn-primary flex-grow"
          @click="signOutUser()"
        >
          Sign Out
        </button>
      </div>
      <br>
    </div>
    <div v-else>
      Not Logged In - Redirecting...
    </div>
    <template #fallback>
      <!-- this will be rendered on server side -->
      <p>Securely Loading Account Info...</p>
    </template>
  </ClientOnly>
</template>


<script setup>
// import { useUserDataStore } from '~~/stores/userData'
// import { getDocs, query, collection, where } from "firebase/firestore"
import { linkWithPopup, GoogleAuthProvider, EmailAuthProvider, linkWithCredential, sendPasswordResetEmail, sendEmailVerification, getAuth } from "firebase/auth"
import { useCurrentUser, useFirebaseApp, useFirestore } from 'vuefire'

// TODO
// Need a new @name field & batch write operation (or transaction) when CUDing sellers/fulfillers
// Need to let google and email users update their displayName (while making sure it is unique?)
// Need to show Seller/Fulfiller Registration Links if user is not a Seller/Fulfiller yet (otherwise, show the Store/Warehouse Management Links)
// Need a way to connect to existing stores/warehouses (must receive invite from owner/authorized user? request access to store with an access code?)
// Need to use DEV mode to allow/disallow the creation of new sellers/fulfillers based on whether or not we toggle open enrollment

// NEWTODO
// We probably want a way to use vuefire to get realtime syncing of the userDataStore with the user document in firestore

const signInProviders = ref([])
const email = ref()
const password = ref('')
const confirmPassword = ref('')
const show = ref(false)
const linkemailPopup = ref(false)
const resetpasswordPopup = ref(false)
const editaddressPopup = ref(false)

const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const phonePattern = /^^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

const rules = ref({
  email: v=> emailPattern.test(v) || 'Invalid E-mail',
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
  phone: v=>phonePattern.test(v) || 'Invalid Phone Number',
  username: v=>v.length>0 || 'Invalid Display Name',
  password: v=> passPattern.test(v) || 'Invalid Password',
  match: v=> v===password.value || 'Passwords Don\'t Match',
  emailMatch: () => ("The email and password you entered don't match")
})

const roles = ref([])
const token = ref()

const userPhotoUrl = ref()

const loadAdminLink = ref(true)

onMounted(async()=>{
  if(useCurrentUser().value===null){
    await navigateTo('/login')
  } else {
    token.value = await useCurrentUser().value.getIdTokenResult()
    if(token.value.claims && token.value.claims.roles){
      roles.value = token.value.claims.roles
      if(token.value.claims.roles.includes('admin'||'super-admin'||'service'||'editor')){
        loadAdminLink.value = true
      }
    }
    for(let i=0; i<useCurrentUser().value.providerData.length; i++){
      signInProviders.value.push(useCurrentUser().value.providerData[i].providerId)
    }
    email.value = useCurrentUser().value.email
    

    userPhotoUrl.value = useCurrentUser().value.photoURL
  }
})

const signOutUser = async() => {
  await navigateTo('/logout')
}

const linkToGoogle = async () => {
  const provider = new GoogleAuthProvider()
  linkWithPopup(getAuth(useFirebaseApp()).currentUser,provider).then((res)=>{
    //Accounts successfully linked
    // console.log(cred)
    signInProviders.value.push("google.com")
    // useCurrentUser().value = res.user
    getAuth(useFirebaseApp()).currentUser = res.user
    console.log("Successfully linked Google Account")
  })
}

const linkToEmail = async () => {
  if(password.value==confirmPassword.value){
    const credential = EmailAuthProvider.credential(email.value,password.value)
    linkWithCredential(getAuth(useFirebaseApp()).currentUser,credential).then(()=>{
      signInProviders.value.push("password")
      console.log("Successfully linked email account")
      linkemaildialog.value = false
    })
  }
}

const passwordReset = () =>{
  sendPasswordResetEmail(getAuth(useFirebaseApp()),useCurrentUser().value.email)//may need action link settings adjusted in 3rd arg
}

</script>