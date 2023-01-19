<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
  <v-app :theme="theme">
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
    <!-- End Popup -->

    <v-main :class="pageTitle=='/' ? 'pt-0':''">
      <v-app-bar :elevation="0" class="bg-transparent flex flex-grow w-full" :class="pageTitle=='/' ? 'py-0 my-0' :''">
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
        <v-card class="d-flex float-right flex-shrink opacity-80">
          <v-btn :icon="pageTitle.includes('/shop') ? 'mdi-cart':'mdi-account'" @click="profileClick" />
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
        </v-card>
      </v-app-bar>

      <!-- Shopping Cart -->
      <!--MAKE FONT ROBOTO-->
      <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
        class="pl-2 pr-2 !bg-white"
      >
        <p class="text-center text-2xl pt-3 pb-3">
          Shopping Cart
        </p>

        <v-divider />

        <v-list
          nav
        >
          <div>
            <img
              src="https://images-api.printify.com/mockup/63b7410a0b5a3e94ee0565ad/88141/58694/glowing-mushroom-mug.jpg"
            >
            <div>
              <h4 class="text-2xl pt-3 pb-3 font-family fontFamily-'Roboto Slab'">
                Glowing Mushroom Mug
              </h4>
              <div class="grid grid-cols-2">
                <div class="grid grid-cols-4">
                  <!--FUTURE Button <v-btn
                    class="text-wraptext !bg-white"
                    variant="outlined"
                    :style="{fontFamily: 'Roboto Slab'}"
                  >
                    <p class="">
                      X
                    </p>
                  </v-btn> -->
                  <button class="text-center">
                    -
                  </button>
                  <p class="text-center">
                    1
                  </p>
                  <button class="text-center">
                    +
                  </button>
                </div>
                <div class="grid grid-col-3">
                  <p class="text-right">
                    $15.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <v-divider class="mt-4 mb-4" />

          <div>
            <div>
              <div class="grid grid-cols-2 mb-3">
                <h4 class="text-2xl font-bold">
                  Total
                </h4>
              <p class="text-right text-2xl">
                $17.00
              </p>
              </div>
              
              <div>
                <div class="grid grid-cols-2">
                  <p>Item Cost</p>
                  <div class="grid grid-col-2">
                    <p class="text-right">
                      $15.00
                    </p>
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <p>Shipping</p>
                  <div class="grid grid-col-2">
                    <p class="text-right">
                      $2.00
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <v-divider class="mt-4 mb-4" />
                <!-- <p>---Make Buttons Side-By-Side---</p> -->
                <v-btn
                  class="text-wraptext !bg-white"
                  variant="outlined"
                  :style="{fontFamily: 'Roboto Slab'}"
                >
                  <p class="text-base">
                    Check Out
                  </p>
                </v-btn>
              </div>
              <!--FUTURE Button <v-btn
                class="text-wraptext !bg-white"
                variant="outlined"
                :style="{fontFamily: 'Roboto Slab'}"
              >
                <p class="text-baseyar">
                  X
                </p>
              </v-btn> -->
            </div>
          </div>

          

          <!-- <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
          />
          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
          /> -->
        </v-list>
      </v-navigation-drawer>
      <!-- End Shopping Cart -->

      <!-- <v-container class="py-0"> -->
      <!-- <v-parallax src="/img/MLogo.png"> -->

      <!-- </v-parallax> -->
      <!-- </v-container> -->

      <!-- Content! -->
      <slot />
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
  const drawer = ref(null)


  // const route = useRoute()
  const pageTitle = computed(() => useRoute().path)

  function profileClick () {
    if (pageTitle.value.includes("/shop")){
      console.log("I'm gonna be a shopping cart someday")
      drawer.value=!drawer.value
      // dialog.value = true
      // dialogText.value = "Hello.  I am going to display a shopping cart soon."
      // dialogClicked()
    } else {
      console.log("Profile pressed but I don't know what to do yet")
      dialog.value = true
      dialogText.value = "Hello.  I don't know how to do accounts yet.  Sorry"
      // dialogClicked()
    }
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
    dialogText.value = "Hello.  I don't know how to search yet.  Sorry"
    // dialogClicked()
  }
</script>

<style>
  /* .custom-class {
    background: rgb(var(--v-theme-custcard));
    color: rgba(var(--v-theme-on-custcard), 0.9);
  } */
</style>