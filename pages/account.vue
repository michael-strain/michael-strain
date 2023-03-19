<!-- eslint-disable vue/multi-word-component-names -->

<!--To Do
Confirmation pop-ups for delete account and sign out.
White card is not floating high enough.

-->

<template>
  <div class="bgImg h-100">
    <div class="bgImgCont">
      <!--Header-->
      <div class="p-3rem">
        <NuxtLink to="/account">
          <p
            class="pageTitle"
          > 
            User Account
          </p>
        </NuxtLink>
      </div>
      <div
        v-if="auth.currentUser || firebaseUser"
        class="shadow plainContainer p-2rem max-w-50rem rounded-25px"
      >
        <!--Profile Pic and Account Info Text-->
        <div class="flex space-x-1.5rem <sm:(flex-wrap space-x-0 space-y-1.5rem)">
          <!--Profile Image with Icon Relative Container-->
          <div class="flex align-center relative bg-green w-max-1/3 <sm:(w-full)">
            <img
              src="/img/MLogo.png"
            >
            <div class="absolute bottom-2 left-2">
              <v-btn
                icon="mdi-account-edit"
                color="white"
              />
            </div>
          </div>
          <!--Account Info Text-->
          <div class="mx-auto text-lg text-center gap-3 flex flex-column justify-center">
            <p class="font-bold text-1.5rem">
              Name Placeholder
            </p>
            <p>mymessage@email.com</p>
            <p>258 First Street, City, State, 25852</p>
            <p>258-8520-8520</p>
            <!-- <p class="plainBtn text-gray-500">
              Edit Profile
            </p> -->
          </div>
        </div>
        <!--Paragraph-->
        <p class="my-1rem">
          I need to add previous orders, password reset, display name, profile picture upload, account delete, and other settings as they become applicable.
        </p>
        <!--Buttons-->
        <!-- Temporary thing sorry for touching your stuff -->
        <div
          class="flex justify-center flex-wrap"
        >
          <div
            class="p-2 text-white elevation-10 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
          >
            <NuxtLink to="/shop/orders?id=IWseAIanYa7S8Qaiflvx">
              <v-btn
                variant="text"
                class="w-full"
              >
                Go to test order
              </v-btn>
            </NuxtLink>
          </div>
        </div>
        <div
          class="flex justify-center flex-wrap"
        >
          <div
            class="p-2 text-white elevation-10 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
          >
            <NuxtLink to="/shop/orders">
              <v-btn
                variant="text"
                class="w-full"
              >
                Go to Orders
              </v-btn>
            </NuxtLink>
          </div>
        </div>
        <!--End of temporary shit, sorry again for touching stuff-->
        
        
        <div class="btnRow">  
          <button
            class="colorBtn"
            @click="dialog = true"
          >
            Edit Account
          </button>
          <v-dialog
            v-model="dialog"
          />
          <button
            class="colorBtn"
            @click="testdialog = true"
          >
            Sign Out
          </button>
          <v-dialog
            v-model="testdialog"
          >
            <div class="dialogContain">
              <div class="containTitle">
                Sign Out
              </div>
              <div class="containText">
                <p>
                  Are you sure you would like to sign out of your account?
                </p>
              </div>
              <div class="btnRow">
                <button @click="testdialog = false" class="plainBtn">
                  No, Stay Logged In. 
                </button>
                <button
                  class="plainBtn"
                  @click="signOutUser"
                >
                  Yes, Log Out. 
                </button>
              </div>
            </div>
          </v-dialog>
        </div>
      </div>
      <!--If Else (Not Logged In)-->
      <div
        v-else
        class="m-auto bg-white p-10 max-w-50rem elevation-5 rounded-25px"
      >
        <!-- Push the login url to the router, then redirect back here after successful login -->
        <div class="pb-5 text-1.25rem text-center">
          <p class="text-gray-600 mt-10">
            You are not currently logged in.
          </p>
        </div>
        <div
          class="flex justify-center flex-wrap"
        >
          <div
            class="p-2 text-white elevation-10 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
          >
            <NuxtLink to="/login">
              <v-btn
                variant="text"
                class="w-full"
              >
                Login
              </v-btn>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div> <AFooter />
  <!-- <TheFooter class="absolute bottom-0 <sm:static" /> -->
</template>






       

<script setup>
import { async } from '@firebase/util';
import { getAuth } from 'firebase/auth'
import { useUserDataStore } from '~/stores/userData';

//TODO
//Setup updateProfile actions

const auth = getAuth();
const firebaseUser = useFirebaseUser()
firebaseUser.value = auth.currentUser;

const loadAdminLink = ref(false)

const userPhotoUrl = ref()

onMounted(async () => {
  if (auth.currentUser) {
    userPhotoUrl.value = auth.currentUser.photoURL
  }
})


if(auth.currentUser!==null){
  const displayName = auth.currentUser.displayName
  const email = auth.currentUser.email
  const emailVerified = auth.currentUser.emailVerified
  const photoURL = auth.currentUser.photoURL
  const isAnonymous = auth.currentUser.isAnonymous
  const uid = auth.currentUser.uid
  const providerData = auth.currentUser.providerData

  if (auth.currentUser.uid=="TkEKGIw1RNT8DfNFyK88eQtJBwl1" || auth.currentUser.uid=="MluMazy3zhVrub2QWoJDy4dJFvn2") {
    loadAdminLink.value = 'true'
  }


}
</script>

<script>
  export default {
    data () {
      return {
        peelog: false,
        testdialog: false,
        dialog: false,
      }
    },
  }
</script>


<!-- <NuxtLink
          v-if="loadAdminLink"
          to="/admin"
        >
          <p
            class="text-center pt-3px bg-red text-white"
          >
            Link for Admins
          </p>
        </NuxtLink> -->
      <!-- <NuxtLink to="/braintree">
        <h6
          class="text-black justify-center text-center align-center font-bold text-xl mb-10"
          :style="{fontFamily: 'Roboto Slab', textShadow: '1px 1px rgba(52, 211, 153)'}"
        >
          Braintree
        </h6>
      </NuxtLink> -->

       <!-- <v-list lines="one">
          <v-list-item
            :key="auth.currentUser.uid"
            :title="auth.currentUser.displayName"
            :subtitle="auth.currentUser.email"
            :prepend-avatar="userPhotoUrl"
            lazy-prepend-avatar="/img/MLogo.png"
          />
        </v-list> -->

        <!-- <v-card-text>{{ auth.currentUser }}</v-card-text> -->
        <!-- <v-btn @click="signOutUser">
            Sign Out
          </v-btn> -->

          <!--Old Button-->
          <!-- @click="isActive.value = false" -->