<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-screen p-20 <sm:p-5 bg-gradient-to-b from-transparent via-transparent to-gray-600 bg-url('../img/purple-mushroom.jpg')">
    <div>
      <div class="position-relative max-w-700px z-index-2 mx-auto bg-transparent">
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
          <h6
            class="text-black justify-center text-center align-center font-bold text-xl mb-10"
            :style="{fontFamily: 'Roboto Slab', textShadow: '1px 1px rgba(52, 211, 153)'}"
          >
            ADMIN
          </h6>
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
      <div v-if="auth.currentUser || firebaseUser">
        <v-card>
          <v-card-title>You are logged in</v-card-title>
          <v-card-subtitle>Someday, actionable content will go here</v-card-subtitle>
          <v-card-text>I need to add password reset, display name, profile picture upload, account delete, and other settings as they become applicable.</v-card-text>
          <v-list lines="one">
            <v-list-item
              :key="auth.currentUser.uid"
              :title="auth.currentUser.displayName"
              :subtitle="auth.currentUser.email"
              :prepend-avatar="userPhotoUrl"
              lazy-prepend-avatar="/img/MLogo.png"
            />
          </v-list>

          <v-avatar />
          <!-- <v-card-text>{{ auth.currentUser }}</v-card-text> -->
          <v-card-actions>
            <v-btn @click="signOutUser">
              Sign Out
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div
        v-else
        class="m-auto bg-white max-w-700px elevation-5 rounded-25px"
      >
        <div class="p-5 text-lg text-center">
          <p class="text-gray-600 mt-10">
            You are not currently logged in.
          </p>
        </div>
        <div
          class="flex justify-center flex-wrap"
        >
          <div
            class="p-2 w-1/3 text-center mb-10 elevation-10 text-white rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
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
  <TheFooter class="bg-black" />

</template>

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