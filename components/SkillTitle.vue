<template>
  <p class="uppercase text-2xl font-bold text-center">
    {{ name }}
  </p>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const props = defineProps({
  name: String
})
</script>
