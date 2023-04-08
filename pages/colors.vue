<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/no-unused-vars -->

<!-- <template>
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
    <main>
      <h3>Color Tests</h3>
      <br>
      <div class="flex gap-5 m-5">
        <div class="pl-10">
          <div
            v-for="c in Object.keys(vcolors)"
            :key="c"
            :class="'bg-' + c"
            class="p-3 m-1"
          >
            <p>{{ c }}</p>
          </div>
        </div>
      </div>
    </main>
  </v-layout>
</template> -->

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer permanent>
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
      <v-main>
        <div
          v-for="c in Object.keys(vcolors)"
          :key="c"
          :class="'bg-' + c"
          class="p-3 m-1"
        >
          <p>{{ c }}</p>
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  const vcolors = theme.global.current.value.colors
  // console.log(Object.keys(vcolors))

  const items = ref([
    { title: 'Lava Inspiration', theme: 'myLavaTheme' },
    { title: 'Red and Black', theme: 'myPastelTheme' },
    { title: 'Blue and Pink', theme: 'myBluePinkTheme' },
    { title: 'Green and Yellow', theme: 'myGreenYellowTheme' },
  ])
</script>
