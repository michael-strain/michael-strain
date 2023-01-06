<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
  <v-app :theme="theme">
    <!-- Used to have this on vmain: class="bg-gradient-to-r from-transparent to-current" -->
    <v-main>
      <v-app-bar :elevation="0" class="bg-transparent flex flex-grow w-full">
        <v-card class="d-flex m-2 flex-shrink opacity-90">
          <NuxtLink v-slot="{navigate}" to="/" class="my-1">
            <v-avatar :tile="true" class="mx-2">
              <v-img src="/img/MLogo.png" lazy-src="/img/MLogo.png" role="link" @click="navigate" />
            </v-avatar>
          </NuxtLink>
          <NuxtLink to="/" class="my-3 mr-4">
            <v-toolbar-title>
              <p class="text-md sm:text-lg md:text-xl font-bold tracking-widest">
                Home
              </p>
            </v-toolbar-title>
          </NuxtLink>
        </v-card>
        <div class="flex-grow" />
        <!-- <div class="float-right"> -->
        <v-card class="d-flex float-right flex-shrink opacity-80">
          <!-- <template #append> -->
          <v-btn icon="mdi-cart" @click="cartClick" />
          <v-btn :icon="themeIcon" @click="themeClick" />
          <!-- <v-btn icon="mdi-heart" @click="heartClick" /> -->
          <v-btn icon="mdi-magnify" @click="searchClick" />
          <v-menu transition="slide-x-transition">
            <template #activator="{ props }">
              <v-btn
                icon="mdi-menu"
                v-bind="props"
              />
            </template>
            <v-list>
              <NuxtLink to="/">
                <v-list-item link>
                  Home
                </v-list-item>
              </NuxtLink>
              <NuxtLink to="/services">
                <v-list-item link>
                  Services
                </v-list-item>
              </NuxtLink>
              <NuxtLink to="/blog">
                <v-list-item link>
                  Blog
                </v-list-item>
              </NuxtLink>
            </v-list>
          </v-menu>
          <!-- </template> -->
        </v-card>
        <!-- </div> -->
      </v-app-bar>
      <!-- <v-parallax src="" lazy-src=""> -->
      <v-container class="py-0">
        <!-- Popup -->
        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <v-card>
              <v-card-title class="text-h5">
                Missing Content!
              </v-card-title>

              <v-card-text>
                {{ dialogText }}
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

        <!-- </v-parallax> -->
      </v-container>
      <!-- Content! -->
      <slot />
      <!-- </v-parallax> -->
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
  const dialogText = ref('')


  // const route = useRoute()
  // const pageTitle = computed(() => useRoute().path)

  // function profileClick () {
  //   console.log("Profile pressed but I don't know what to do yet")
  //   dialog.value = true
  //   dialogText.value = "Hello.  I don't know how to do accounts yet.  Sorry"
  //   dialogClicked()
  // }

  function cartClick() {
    console.log("Profile pressed but I don't know what to do yet")
    dialog.value = true
    dialogText.value = "Sorry again, I haven't done this yet."
    dialogClicked()
  }

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

  // function heartClick() {
  //   //animate some hearts and request a donation lol
  //   if (heart.value == "❤️"){
  //     heart.value=""
  //   }
  //   else{
  //     heart.value="❤️"
  //   }
  // }

  function searchClick(){
    console.log("I have no idea how to integrate search functionality into Nuxt yet.")
    dialog.value = true
    dialogText.value = "Hello.  I don't know how to search yet.  Sorry"
    dialogClicked()
  }
</script>