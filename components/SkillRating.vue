<template>
  <div class="flex items-center">
    <v-rating
      :length="5"
      :style="{ fontSize: '22px' }"
      :size="35"
      color="primary"
      :model-value="rating"
      readonly
    />
    <p class="text-xl ml-4">{{ name }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  rating: Number
})
</script>
