<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="loadAdminPanel">
    <h1>Admin</h1>
    <p>Admin page</p>
    <p>Only logged in ADMIN users can see this page</p>
    {{ auth.currentUser.uid }}
  </div>
</template>

<script setup>
import { getAuth } from 'firebase/auth'
import { useRouter } from 'vue-router'

const auth = getAuth();
const firebaseUser = useFirebaseUser()
firebaseUser.value = auth.currentUser;

const loadAdminPanel = ref(false)

onMounted(async () => {
  if (auth.currentUser.uid!==null){
    console.log("auth.currentUser.uid: " + auth.currentUser.uid)
    if (auth.currentUser.uid=="TkEKGIw1RNT8DfNFyK88eQtJBwl1") {
      loadAdminPanel.value = 'true'
    } else {
      const router = useRouter()
      router.push('/account')
    }
  }
  else {
    const router = useRouter()
    router.push('/login')
  }
})
</script>