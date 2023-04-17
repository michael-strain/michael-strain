<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/no-unused-vars -->

<template>
  <v-layout>
    <ToggleTheme />
    <v-main>
      <v-container>
        <v-row no-gutters>
          <v-col
            cols="4"
            sm="4"
          >
            <div
              v-for="c in Object.keys(vcolors)"
              :key="c"
              :class="'bg-' + c"
              class="p-3 m-1 flex-none"
            >
              <p>{{ c }}</p>
            </div>
          </v-col>
          <v-col
            cols="8"
            sm="8"
          >
            <div>
              <v-window class="mx-auto bg-background">
                <v-navigation-drawer
                  rail
                  permanent
                  location="right"
                >
                  <v-list>
                    <v-list-item prepend-icon="mdi-view-dashboard" value="dashboard" />

                    <v-list-item prepend-icon="mdi-forum" value="messages" />
                  </v-list>
                </v-navigation-drawer>
                <v-toolbar class="px-0">
                  <v-app-bar-nav-icon />

                  <v-toolbar-title>Contacts</v-toolbar-title>

                  <v-spacer />

                  <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-tabs
                  v-model="tabs"
                  color="primary"
                  grow
                >
                  <v-tab
                    :value="1"
                  >
                    <v-icon>mdi-phone</v-icon>
                  </v-tab>

                  <v-tab
                    :value="2"
                  >
                    <v-icon>mdi-heart</v-icon>
                  </v-tab>

                  <v-tab
                    :value="3"
                  >
                    <v-icon>mdi-account-box</v-icon>
                  </v-tab>
                </v-tabs>

                <v-window v-model="tabs">
                  <v-window-item
                    v-for="i in 3"
                    :key="i"
                    :value="i"
                  >
                    <v-card class="m-4">
                      <v-card-title>Card Title</v-card-title>
                      <v-card-subtitle>Card subtitle.</v-card-subtitle>
                      <v-card-text>Card test example.</v-card-text>
                      <v-card-actions>
                        <v-btn>Card Button</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-window-item>
                </v-window>
                <div class="flex flex-wrap gap-1rem justify-space-around">
                  <v-btn>
                    default
                  </v-btn>
                  <v-btn variant="elevated">
                    elevated
                  </v-btn>
                  <v-btn variant="flat">
                    flat
                  </v-btn>
                  <v-btn variant="tonal">
                    tonal
                  </v-btn>
                  <v-btn variant="outlined">
                    outlined
                  </v-btn>
                  <v-btn variant="text">
                    text
                  </v-btn>
                  <v-btn variant="plain">
                    plain
                  </v-btn>
                </div>
                <v-pagination :length="3" />
              </v-window>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
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

  const tabs=ref(null)

</script>
