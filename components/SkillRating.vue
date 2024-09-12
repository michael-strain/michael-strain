<template>
  <div class="flex flex-col md:flex-row justify-space-between">
    <p class="text-xl md:ml-4">{{ name }}</p>
    <v-rating
      :length="5"
      :style="{ fontSize: '22px' }"
      :size="35"
      :color="theme.current.value.colors.info"
      :model-value="rating"
      readonly
    />
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const props = defineProps({
  name: String,
  rating: Number
})
</script>
