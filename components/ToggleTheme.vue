<template>
  <v-layout>
    <v-navigation-drawer
      class="bg-secondary-darken-1"
      permanent
    >
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
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup>
  import { useTheme } from 'vuetify'

  const items = ref([
    { title: 'Pastel', theme: 'myPastelTheme' },
    { title: 'Blue and Pink', theme: 'myBluePinkTheme' },
    { title: 'Green and Yellow', theme: 'myGreenYellowTheme' },
    { title: 'Lava', theme: 'myLavaTheme' },
  ])

  const theme = useTheme()

  function themeClick (themeName) {
    theme.global.name.value = themeName
  }
</script>
