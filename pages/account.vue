<!-- eslint-disable vue/multi-word-component-names -->

<!--To Do
Edit icon on profile image.
Flex pic and list.
Button height.
Edit Profile, Delete Account, Sign Out links on bottom of gray div.
Confirmation pop-ups for delete account and sign out.
Try different images for sizing testing. 
White card is not floating high enough.

-->

<template>
  <div class="p-20 h-full <sm:p-5 bg-gradient-to-b from-transparent via-transparent to-gray-600 bg-url('../img/purple-mushroom.jpg')">
    <div>
      <!--Header-->
      <div class="position-relative max-w-50rem z-index-2 mx-auto bg-transparent">
        <NuxtLink to="/account">
          <!-- <h3
          class="text-4xl mx-8 text-center elevation-5 m-3 mb-n10 font-bold rounded-25px bg-gradient-to-b from-gray-600 to-gray-500 text-white p-10"
          :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}"
        > -->
          <p
            class="text-4xl mx-8 text-center elevation-5 m-3 mb-n10 font-bold rounded-25px bg-gradient-to-b from-gray-600 to-gray-500 text-white p-10"
          >
            User Account
          </p>
        </NuxtLink>
        <NuxtLink
          v-if="loadAdminLink"
          to="/admin"
        >
          <p
            class="text-center text-white"
          >
            Link for Admins
          </p>
        </NuxtLink>
      <!-- <NuxtLink to="/braintree">
        <h6
          class="text-black justify-center text-center align-center font-bold text-xl mb-10"
          :style="{fontFamily: 'Roboto Slab', textShadow: '1px 1px rgba(52, 211, 153)'}"
        >
          Braintree
        </h6>
      </NuxtLink> -->
      </div>
      <div
        v-if="auth.currentUser || firebaseUser"
        class="m-auto bg-white p-10 max-w-50rem elevation-5 rounded-25px"
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
          <div class="flex-grow text-lg">
            <p class="font-bold text-1.5rem">
              Name Placeholder
            </p>
            <p>mymessage@email.com</p>
            <p>258 First Street</p>
            <p>City, State, 25852</p>
            <p class="text-gray-500">
              Edit Profile
            </p>
          </div>
        </div>
        <!--Paragraph-->
        <p class="my-1rem">
          I need to add previous orders, password reset, display name, profile picture upload, account delete, and other settings as they become applicable.
        </p>
        <!--Buttons-->
        <div
          class="flex justify-center flex-wrap mt-1.5rem space-x-2rem <sm:(space-x-0 space-y-1.5rem)"
        >
          <div
            class="p-2 min-w-12rem text-white elevation-10 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
          >
            <v-btn
              variant="text"
              class="w-full"
            >
              Edit Account
            </v-btn>
          </div>
          <div
            class="p-2 min-w-12rem text-white elevation-10 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
          >
            <v-btn
              variant="text"
              class="w-full"
              @click="signOutUser"
            >
              Sign Out
            </v-btn>
          </div>
        </div>
      </div>
      <!--If Else (Not Logged In)-->
      <div
        v-else
        class="m-auto bg-white p-10 max-w-50rem elevation-5 rounded-25px"
      >
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
  </div>
  <TheFooter class="bg-yellow" />
</template>

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

<script setup>
import { async } from '@firebase/util';
import { getAuth } from 'firebase/auth'
import { useUserDataStore } from '~/stores/userData';

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