<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Account</h1>
    <p>Account page</p>
    <p>Only logged in users can see this page</p>
    <p>Well... that's the idea at least.  Functionality not yet enabled.</p>
    <p>{{ firebaseUser }}</p>
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser()
</script>