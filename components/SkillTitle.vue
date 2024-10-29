<template>
  <p class="uppercase text-2xl font-bold text-center">
    {{ name }}
  </p>
</template>

<script setup>
const props = defineProps({
  name: String
})
</script>
