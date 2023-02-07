<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/no-unused-vars -->

<!-- TODO This layout needs a complete overhaul for code efficiency, readability, and best practices -->
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
          <div v-if="false" class="my-1">
            <NuxtLink v-slot="{navigate}" to="/account" class="my-1">
              <v-avatar :tile="true" class="mx-2">
                <!-- Use a user profile img as the src here, if profile img empty, use the mdi-icon -->
                <v-img src="/img/MLogo.png" role="link" @click="navigate" />
              </v-avatar>
            </NuxtLink>
          </div>
          <div v-else class="my-1">
            <NuxtLink v-slot="{navigate}" to="/" class="my-1">
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
              <NuxtLink v-if="false" to="/account">
                <v-list-item link>
                  Account
                </v-list-item>
              </NuxtLink>
              <NuxtLink v-if="false" to="/">
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

        <div v-if="!loaded||cartProducts.length<0">
          <p class="text-center pt-3 pb-3">
            Your cart is empty
          </p>
        </div>
        <div v-else-if="cartProducts.length>0">
          <v-list
            nav
          >
            <v-list-item v-for="(item, product) in cartProducts" :key="product">
              <!-- <v-list-item-avatar>
                <v-img :src="item.images[item.imageNum]" />
              </v-list-item-avatar>

              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title> -->

              <!-- TODO Need to make the buttons update all the relevant stuff (cartData store, productData store, then storeToRef to make everything react appropriately)-->

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
                      <button class="text-center" @click="decreaseCartItemQty(item)">
                        -
                      </button>
                      <p class="text-center">
                        {{ item.qty }}
                      </p>
                      <button class="text-center" @click="increaseCartItemQty(item)">
                        +
                      </button>
                    </div>
                    <div class="grid grid-col-3">
                      <p class="text-right">
                        {{ formatter.format((item.variants[0].price * item.qty)/100) }}
                        <!-- TODO This should at some point not be just some random variant, but a chosen variant defaulting to zero -->
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
                    {{ formatter.format((cartProducts.reduce((a, b) => a + (b.variants[0].price * b.qty), 0) + 500)/100) }}
                  </p>
                </div>
                
                <div>
                  <div class="grid grid-cols-2">
                    <p>Item Cost</p>
                    <div class="grid grid-col-2">
                      <p class="text-right">
                        {{ formatter.format((cartProducts.reduce((a, b) => a + (b.variants[0].price * b.qty), 0))/100) }}
                      </p>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <p>Shipping</p>
                    <div class="grid grid-col-2">
                      <p class="text-right">
                        $5.00
                        <!-- TODO Need to put actual shipping sum here -->
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
        <!-- <v-btn @click="cart.reset()">Reset Cart</v-btn> -->
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
  import { useCartDataStore } from '~/stores/cartData'
  import { useProductDataStore } from '~/stores/productData'
  // import { firebase } from '~/plugins/firebase'

  // const firebaseUser = useFirebaseUser()
  // console.log(firebaseUser)

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

  const cartProducts = ref([])
  const loaded = ref(false)
  const store = useProductDataStore()

  //Call Datastore to get all Cart Products
  onMounted(async() => {
    const cart = useCartDataStore()
    if(cart.cartData.length > 0){
      cartProducts.value = cart.cartData
      loaded.value = true
    }
    else {
      loaded.value = false
    }
  })

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

  function decreaseCartItemQty(item) {
    const cart = useCartDataStore()
    item.qty--
    if (item.qty===0){
      // Remove this shit from the cart
      item.inCart = false
      cart.$patch(cart.cartData.splice(cart.cartData.map((x)=>{return x.id}).indexOf(item.id),1))
      // cartProducts.value.splice(cartProducts.value.map((x)=>{return x.id}).indexOf(item.id),1)
      // cart.$patch(cartProducts.value)
      cartProducts.value = cart.cartData
      if (!cart.cartData[0]){
        loaded.value = false
      }
    } else {
      // cartProducts.value[cartProducts.value.map((x)=>{return x.id}).indexOf(item.id)].qty=item.qty
      cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)].qty=item.qty)
      cartProducts.value = cart.cartData
    }
    store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)] = item)
  }

  function increaseCartItemQty(item) {
    const cart = useCartDataStore()
    item.qty++
    cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)].qty=item.qty)
    cartProducts.value = cart.cartData
    // cart.$patch(cart.cartData[array.map((x)=>{return x.id}).indexOf(item.id)].qty=item.qty)
    store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)].qty = item.qty)
  }

  function profileClick () {
    if (pageTitle.value.includes("/shop")){
      const cart = useCartDataStore()
      if(cart.cartData.length > 0){
        cartProducts.value = cart.cartData
        loaded.value = true
      }
      else {
        loaded.value = false
      }
      // If the page is shop, open the shopping cart drawer
      drawer.value=!drawer.value
    } else {
      router.push('/account')
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