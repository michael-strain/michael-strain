<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <p>{{ todos }}</p>
</template>

<script setup>
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { useCollection } from 'vuefire'
import { createApp } from 'vue'

// const firebase = initializeApp({projectId: 'michael-strain'})
// const db = getFirestore(firebase)

const nuxtApp = useNuxtApp()
const db = nuxtApp.$firestore
console.log(db)

createApp({
  setup(){
    const todosRef = collection(db, 'todos')
    const todos = useCollection(todosRef)

    console.log(todos)

    return { todos }
  }
})
</script>