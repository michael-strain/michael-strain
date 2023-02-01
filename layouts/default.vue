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
      <v-app-bar :elevation="0" class="bg-transparent flex flex-grow w-full" :class="noHeaderPadding.includes(useRoute().path) ? 'py-0 my-0' : ''">
        <v-card class="d-flex m-2 flex-shrink opacity-90">
          <div v-if="firebaseUser" class="my-1">
            <NuxtLink v-slot="{navigate}" to="/account" class="my-1">
              <v-avatar :tile="true" class="mx-2">
                <!-- Use a user profile img as the src here, if profile img empty, use the mdi-icon -->
                <v-img src="/img/MLogo.png" role="link" @click="navigate" />
              </v-avatar>
            </NuxtLink>
          </div>
          <div v-else class="my-1">
            <NuxtLink v-slot="{navigate}" to="/login" class="my-1">
              <v-avatar :tile="true" class="mx-2">
                <v-img src="/img/MLogo.png" role="link" @click="navigate" />
              </v-avatar>
            </NuxtLink>
          </div>
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
              <NuxtLink to="/shop">
                <v-list-item link>
                  Shop
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
              <NuxtLink v-if="firebaseUser" to="/account">
                <v-list-item link>
                  Account
                </v-list-item>
              </NuxtLink>
              <NuxtLink v-if="firebaseUser" to="/">
                <v-list-item link @click="signOut" />
              </NuxtLink>
            </v-list>
          </v-menu>
        </v-card>
      </v-app-bar>

      <!-- Shopping Cart -->
      <!--MAKE FONT ROBOTO-->
      <!--Make functional-->
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

        <div v-if="!cartProducts || cart.cartData.data.length==0">
          <p class="text-center pt-3 pb-3">
            Your cart is empty
          </p>
        </div>
        <div v-else-if="cart.cartData.data.length>0">
          <v-list
            nav
          >
            <v-list-item v-for="(item, product) in cart.cartData.data" :key="product">
              <!-- <v-list-item-avatar>
                <v-img :src="item.images[item.imageNum]" />
              </v-list-item-avatar>

              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title> -->

              <div>
                <img
                  :src="item.images[item.imageNum].src"
                >
                <div>
                  <h4 class="text-2xl pt-3 pb-3 font-family fontFamily-'Roboto Slab'">
                    {{ item.title }}
                  </h4>
                  <div class="grid grid-cols-2">
                    <div class="grid grid-cols-4">
                      <button class="text-center" @click="item.qty--; cart.$patch(cart.cartData.data[i] = item)">
                        -
                      </button>
                      <p class="text-center">
                        {{ item.qty }}
                      </p>
                      <button class="text-center" @click="item.qty++; cart.$patch(cart.cartData.data[i] = item)">
                        +
                      </button>
                    </div>
                    <div class="grid grid-col-3">
                      <p class="text-right">
                        {{ formatter.format((item.variants[0].price * item.qty)/100) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </v-list-item>



            

            <v-divider class="mt-4 mb-4" />

            <div>
              <div>
                <div class="grid grid-cols-2 mb-3">
                  <h4 class="text-2xl font-bold">
                    Total
                  </h4>
                  <p class="text-right text-2xl">
                    {{ formatter.format((cart.cartData.data.reduce((a, b) => a + (b.variants[0].price * b.qty), 0) + 500)/100) }}
                  </p>
                </div>
                
                <div>
                  <div class="grid grid-cols-2">
                    <p>Item Cost</p>
                    <div class="grid grid-col-2">
                      <p class="text-right">
                        {{ formatter.format((cart.cartData.data.reduce((a, b) => a + (b.variants[0].price * b.qty), 0))/100) }}
                      </p>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <p>Shipping</p>
                    <div class="grid grid-col-2">
                      <p class="text-right">
                        $5.00
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <v-divider class="mt-4 mb-4" />
                  <v-btn
                    class="text-wrap !bg-white"
                    variant="outlined"
                    :style="{fontFamily: 'Roboto Slab'}"
                    @click="moveToCheckout"
                  >
                    <p class="text-base">
                      Check Out
                    </p>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-list>
        </div>
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
  import { storeToRefs } from 'pinia'
  import { useCartDataStore } from '~/stores/cartData';
  // import { firebase } from '~/plugins/firebase'

  const firebaseUser = useFirebaseUser()
  console.log(firebaseUser)

  const signOut = async () => {
    await signOutUser()
  }

  const noHeaderPadding = ref(['/','/contact'])

  const router = useRouter()
  const moveToCheckout = ref(() => router.push('/shop/checkout'))

  const theme = ref('myCustomLightTheme')
  const themeIcon = ref('mdi-weather-sunny')
  const heart = ref('')
  const dialog = ref(false)
  const dialogText = ref('')
  const drawer = ref(null)
  const cartProducts = ref()

  const cart = useCartDataStore()
  cartProducts.value = storeToRefs(cart.cartData.cartData)

  // Create our number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  // These won't work until I sign up with algolia and create an index

  // const { result, search } = useAlgoliaSearch('index')

  // onMounted(async () => {
  //   await search({query: 'Search Query'})
  // })

  // const route = useRoute()
  const pageTitle = computed(() => useRoute().path)
  // let pageTitle = ref(async () => {console.log(useRoute().path); return useRoute().path.tostring()})

  function profileClick () {
    if (pageTitle.value.includes("/shop")){
      drawer.value=!drawer.value
      const cart = useCartDataStore()
      cartProducts.value = storeToRefs(cart.cartData.cartData)

      

      //fill cart with cartProducts from the datastore
      //if empty, display empty cart message
      //if not empty, display cart items
      // console.log(cart.cartItems)
      // console.log(cart.cartItems.length)
      // console.log(cart.cartItems[0])
      // console.log(cart.cartItems[0].name)
      // console.log(cart.cartItems[0].price)
      // console.log(cart.cartItems[0].image)
      // console.log(cart.cartItems[0].quantity)
      // console.log(cart.cartItems[0].id)
      // console.log(cart.cartItems[0].description)
      // console.log(cart.cartItems[0].category)
      // console.log(cart.cartItems[0].rating)
      // console.log(cart.cartItems[0].numReviews)
      // console.log(cart.cartItems[0].countInStock)
      // console.log(cart.cartItems[0].brand)

      

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
    let h1 = document.getElementsByTagName("h1");
    for (let i = 0; i < h1.length; i++) {
        if (h1[i].className.includes('grayscale')){
          h1[i].className = h1[i].className.replace(' grayscale', '')
        }
        else{
          // h1[i].className.add('grayscale')
          h1[i].className += ' grayscale'
        }
    }
  }

  function searchClick(){
    console.log("I have no idea how to integrate search functionality into Nuxt yet.")
    dialog.value = true
    dialogText.value = "Hello.  I don't know how to search yet.  Sorry"
    // dialogClicked()
  }
</script>