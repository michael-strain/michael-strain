<template>
  <!-- <v-layout> -->
  <v-list nav>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
    >
      <v-btn
        block
        variant="text"
        class="bg-primary"
        :theme="item.theme"
        @click="themeClick(item.theme)"
      >
        {{ item.title }}
      </v-btn>
    </v-list-item>
  </v-list>
  <!-- </v-layout> -->
</template> 

<script setup>
  import { useTheme } from 'vuetify'

  const items = ref([
    { title: 'Night Mode', theme: 'myDarkTheme' },
    { title: 'Light Mode', theme: 'myPurpleTheme' },
    { title: 'Neutral Mode', theme: 'myNeutralTheme' },
    { title: 'Aggressive Mode', theme:'myAggressiveTheme' },

  ])

  const theme = useTheme()

  function themeClick (themeName) {
    theme.global.name.value = themeName
  }
  // const vcolors = theme.global.current.value.colors
  // console.log(Object.keys(vcolors))
    
</script>
