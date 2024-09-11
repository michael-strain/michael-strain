<template>
  <div class="flex justify-between items-center">
    <p>{{ name }}</p>
    <p class="text-gray-500">{{ percentage }}%</p>
    <v-progress-linear
      :model-value="percentage"
      color="primary"
      class="flex-1 ml-4"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  percentage: Number
})
</script>
