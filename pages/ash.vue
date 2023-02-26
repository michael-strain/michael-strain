<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    v-for="c in Object.keys(vcolors)"
    :key="c"
    :class="'bg-' + c"
  >
    <p>{{ c }}</p>
  </div>
  <!-- <div class="bg-background">
    background
  </div>
  <div class="bg-surface">
    surface
  </div>
  <div class="bg-primary">
    primary
  </div>
  <div class="bg-primary-darken-1">
    primary-darken-1
  </div>
  <div class="bg-secondary">
    secondary
  </div>
  <div class="bg-secondary-darken-1">
    secondary-darken-1
  </div>
  <div class="bg-surface-darken-1">
    surface-darken-1
  </div> -->
</template>

<script setup>
  //Need to setup vcolors by pulling them from the current vuetify theme object's colors object
  //Do I need to import the vuetify file here?
  //how do I get the name of the active vuetify theme object so I can pull it's colors object?
  import { ref } from 'vue'

  import { useTheme } from 'vuetify'

  const theme = useTheme()

  //theme.global.name.value = theme.global.current.value

  
  const vcolors = theme.global.current.value.colors
  console.log(Object.keys(vcolors))
  // vcolors = theme.value.colors
</script>