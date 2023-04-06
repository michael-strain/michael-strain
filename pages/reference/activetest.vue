<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NuxtLayout
    :name="layout"
    class="z-0 absolute top-0 bottom-0 left-0 right-0"
  />
  
  <div class="flex z-10 justify-center align-center">
    <div class="z-10 flex-col flex justify-center align-center">
      <p CLASS="">
        THIS IS A TEST
      </p>
      <ANewAccount />
    </div>
  </div>
</template>

<script setup>
const layout = "lava-layout";
</script>