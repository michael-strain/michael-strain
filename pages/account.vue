<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="w-full p-0 m-0">
      <NuxtLink to="/account">
        <h3
          class="text-black justify-center text-center align-center font-bold text-5xl mb-10"
          :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}"
        >
          ACCOUNT
        </h3>
      </NuxtLink>
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
              :prepend-avatar="auth.currentUser.photoURL"
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
      <div v-else>
        <v-card>
          <v-card-title>You are not currently logged in.</v-card-title>
          <v-card-actions>
            <NuxtLink to="/login">
              <v-btn>Login</v-btn>
            </NuxtLink>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { getAuth } from 'firebase/auth'
  const auth = getAuth();
  const firebaseUser = useFirebaseUser()
  firebaseUser.value = auth.currentUser;

  if(auth.currentUser!==null){
    const displayName = auth.currentUser.displayName
    const email = auth.currentUser.email
    const emailVerified = auth.currentUser.emailVerified
    const photoURL = auth.currentUser.photoURL
    const isAnonymous = auth.currentUser.isAnonymous
    const uid = auth.currentUser.uid
    const providerData = auth.currentUser.providerData
  }
</script>