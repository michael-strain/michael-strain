<template>
  <canvas v-bind="rain" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
const rain=ref()
onMounted(()=>{
  console.log("I'm alive!")
  var c = rain
  console.log("c: " + c.value)
  var ctx = c.getContext("2d");
  console.log(ctx)
  var w = c.value.width = window.innerWidth;
  console.log(w)
})
</script>