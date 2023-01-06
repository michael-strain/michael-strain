<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
  <v-app :theme="theme">
    <v-app-bar :elevation="0">
      <NuxtLink v-slot="{navigate}" to="/">
        <v-avatar :tile="true" class="m-2">
          <v-img src="/img/MLogo.png" role="link" @click="navigate" />
        </v-avatar>
      </NuxtLink>
      <NuxtLink to="/">
        <v-toolbar-title><p class="text-sm sm:text-base md:text-lg font-bold">Michael-Strain</p> {{ heart }}</v-toolbar-title>
      </NuxtLink>
      <template #append>
        <!-- <v-btn
          :prepend-icon="theme === 'myCustomLightTheme' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          @click="themeClick"
        /> -->
        <v-btn :icon="themeIcon" @click="themeClick"/>
        <v-btn icon="mdi-magnify" @click="searchClick"/>
        <v-btn icon="mdi-cart"/>
        <v-menu transition="slide-x-transition">
          <template #activator="{ props }">
            <v-btn
              icon="mdi-menu"
              class="ma-2"
              v-bind="props"
            />
          </template>
          <NavLinks />
        </v-menu>
      </template>
    </v-app-bar>
    <v-main>
      <!-- <v-main class="bg-gradient-to-r from-transparent to-current"> -->
      <v-container class="pt-0 mt-0">
        <!-- Popup -->
        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <v-card>
              <v-card-title class="text-h5 bg-grey-lighten-2">
                Missing Content!
              </v-card-title>

              <v-card-text>
                Hello.  I don't know how to search yet.  Sorry
              </v-card-text>

              <v-divider />

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  @click="dialog = false"
                >
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <!-- <v-parallax src="/img/MLogo.png"> -->

        <!-- Content! -->
        <slot />
        <!-- </v-parallax> -->
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const theme = ref('myCustomLightTheme')
  const themeIcon = ref('mdi-weather-sunny')
  const heart = ref('')
  const dialog = ref(false)

  function themeClick () {
    if (theme.value === 'myCustomLightTheme'){
      theme.value='myCustomDarkTheme'
      themeIcon.value = 'mdi-weather-night'
    } else {
      theme.value = 'myCustomLightTheme'
      themeIcon.value = 'mdi-weather-sunny'
    }
    // theme.value = theme.value === 'myCustomLightTheme' ? 'myCustomDarkTheme' : 'myCustomLightTheme'
    // themeIcon.value = 'mdi-weather-sunny' : 'mdi-weather-night'

    //probably a better way to do this, but it works well enough for now
    var h1 = document.getElementsByTagName("h1");
    for (var i = 0; i < h1.length; i++) {
        if (h1[i].className.includes('grayscale')){
          h1[i].className = h1[i].className.replace(' grayscale', '')
        }
        else{
          // h1[i].className.add('grayscale')
          h1[i].className += ' grayscale'
        }
    }
  }

  function heartClick() {
    //animate some hearts and request a donation lol
    if (heart.value == "❤️"){
      heart.value=""
    }
    else{
      heart.value="❤️"
    }
  }

  function searchClick(){
    console.log("I have no idea how to integrate search functionality into Nuxt yet.")
    dialog.value = true
    dialogClicked()
  }
</script>

<style>
  .custom-class {
    background: rgb(var(--v-theme-custcard));
    color: rgba(var(--v-theme-on-custcard), 0.9);
  }
</style>