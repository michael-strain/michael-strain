<template>
  <div class="flex justify-between items-center">
    <p>{{ name }}</p>
    <v-progress-linear
      :model-value="percentage"
      :label="name"
      :color="theme.current.value.colors.info"
      class="flex-1 ml-4"
      height="10"
      striped
    />
    <p class="text-gray-500">{{ percentage }}%</p>
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const props = defineProps({
  name: String,
  percentage: Number
})
</script>
