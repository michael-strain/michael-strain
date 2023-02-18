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

        <div v-if="!loaded">
          <p class="text-center pt-3 pb-3">
            Your cart is empty
          </p>
        </div>
        <div
          v-else
        >
          <v-list
            nav
          >
            <v-list-item v-for="(item, product) in cartProducts" :key="product">
              <!-- TODO Need to display a list item for each variant WITH inCart-->
              <v-list-item v-for="variant in variantsInCart(item.variants)" :key="variant.id">
                <!-- TODO Need to make the buttons update all the relevant stuff (cartData store, productData store, then storeToRef to make everything react appropriately)-->
                <div>
                  <!--TODO Consider putting a carousel in here as well lol-->
                  <img
                    :src="item.images[0].src"
                  >
                  <div>
                    <h4 class="text-2xl pt-3 pb-3 font-family fontFamily-'Roboto Slab'">
                      {{ item.title }}
                    </h4>
                    <h5 class="text-xl pt-0 pb-3 font-family fontFamily-'Roboto Slab'">
                      {{ variant.title }}
                    </h5>
                    <div class="grid grid-cols-2">
                      <div class="grid grid-cols-4">
                        <button class="text-center" @click="decreaseCartItemQty(item, variant)">
                          -
                        </button>
                        <p class="text-center">
                          {{ variant.cartQty }}
                        </p>
                        <button class="text-center" @click="increaseCartItemQty(item, variant)">
                          +
                        </button>
                      </div>
                      <div class="grid grid-col-3">
                        <p class="text-right">
                          {{ formatter.format((itemPrice(variant)*variant.cartQty)/100) }}
                        <!-- TODO This should maybe be it's own function -->
                        <!-- We might also need a cart totaling thing for orders that uses the function as well-->
                        </p>
                      </div>
                      <div>
                        <v-icon :icon="hover ? 'mdi-skull-outline' : 'mdi-alpha-x-box-outline'" @click="removeVariant(item, variant); hover=!hover" @mouseover="hover=!hover" @mouseleave="hover=!hover" />
                        <!-- :icon="hover?'mdi-skull-scan-outline':'mdi-alpha-x-box-outline'" -->
                      </div>
                    </div>
                  </div>
                </div>
              </v-list-item>
            <!-- <v-list-item-avatar>
                <v-img :src="item.images[item.imageNum]" />
              </v-list-item-avatar>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title> -->
            </v-list-item>
            <v-divider class="mt-4 mb-4" />
            <div>
              <div>
                <div class="grid grid-cols-2 mb-3">
                  <h4 class="text-2xl font-bold">
                    Total
                  </h4>
                  <p class="text-right text-2xl">
                    {{ formatter.format((cartTotal)/100) }}
                  </p>
                  <!-- {{ formatter.format((cartProducts.reduce((a, b) => a + (b.variants[b.variantNum].price * b.variants[b.variantNum].cartQty), 0) + (cartProducts.reduce((a, b) => a + (b.variants[b.variantNum].firstItemCost * b.variants[b.variantNum].cartQty), 0)))/100) }} -->
                </div>
                
                <div>
                  <div class="grid grid-cols-2">
                    <p>Item Cost</p>
                    <div class="grid grid-col-2">
                      <p class="text-right">
                        {{ formatter.format((itemTotal)/100) }}
                      </p>
                      <!-- {{ formatter.format((cartProducts.reduce((a, b) => a + (b.variants[b.variantNum].price * b.variants[b.variantNum].cartQty), 0))/100) }} -->
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <p>Shipping</p>
                    <div class="grid grid-col-2">
                      <p class="text-right">
                        {{ formatter.format((shipTotal)/100) }}
                        <!-- {{ formatter.format((cartProducts.reduce((a, b) => a + (b.variants[b.variantNum].firstItemCost * b.variants[b.variantNum].cartQty), 0))/100) }} -->
                      <!-- TODO Need to figure out shipping cost if more than one of an item is chosen (incorporate additionalItemCost)-->
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
  </v-app>
</template>

<script setup>
  import { ref, reactive, computed } from 'vue'
  import { useCartDataStore } from '~/stores/cartData'
  import { useProductDataStore } from '~/stores/productData'
  import { useUserDataStore } from '~/stores/userData'
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
  // const cartProducts = ref()
  const loaded = ref(false)
  const store = useProductDataStore()
  const cart = useCartDataStore()
  const user = useUserDataStore()

  const hover = ref(false)

  //Call Datastore to get all Cart Products
  onMounted(async() => {
    //if we are on the shop page:
    if (pageTitle.value.includes("/shop")){
      // const cart = useCartDataStore()
      // console.log(cart.cartData.length)
      if(cart.cartData.length>0 ){
        cartProducts.value = cart.cartData
        loaded.value = true
      }
      else {
        // cartProducts.value = cart.cartData
        loaded.value = false
      }
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

  function decreaseCartItemQty(item, variant) {

    //Ultimately we need to:
      // 1. Decrease the cartQty of the variant
      // 2. If the cartQty of the variant is 0, remove the variant from the cart
      // 3. If the cartQty of the variant is 0 and there are no more variants of this item in the cart, remove the item from the cart
    
    // In it's current form, i'm patching like crazy and I don't think it's absolutely necessary.
    // Oh well for now I guess.

    // It also appears that the qty doesn't always update properly. (I think it's because I'm not using the cartDataStore properly. Suggested by CoPilot)
    // See below for a suggested fix:
    // vue-3-composition-api-how-to-update-a-nested-object-in-a-ref

    const cart = useCartDataStore()
    let otherVariants = false

    variant.cartQty--
    item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant

    if (variant.cartQty==0){
      variant.inCart = false
      item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant
      cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
      cartProducts.value = cart.cartData

      for (let j = 0; j < item.variants.length ; j++){
        if (item.variants[j].cartQty>0){
          console.log("There are still other variants of this item in the cart")
          otherVariants = true
          break
        }
      }

      //if there are not other variants of this item in the cart, just remove the whole item
      if (!otherVariants) {
        //Remove whole item from cart
        cart.$patch(cart.cartData.splice(cart.cartData.map((x)=>{return x.id}).indexOf(item.id),1))
        cartProducts.value = cart.cartData

        //If there are no other products in cart data, set loaded to false
        if(cart.cartData.length==0){
          cart.$patch(cart.cartData=[])
          loaded.value = false
        }

      }
      // else if (otherVariants) {
        //Remove just this variant from the cart
        // item = item.variants.splice(item.variants.map((x)=>{return x.id}).indexOf(variant.id),1)

        // We don't actually want to remove it from the item, just set cartQty and inCart values
        // cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
        // cartProducts.value = cart.cartData

        // This is all actually already happening above
      // }

      // cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
      // cartProducts.value = cart.cartData

    } else {
      // item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant // I don't think this line is necessary
      // Just patch the cart with the already formatted item
      cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
      cartProducts.value = cart.cartData
    }

    //Just for fun, we patch the whole damn product store with everything the cart is doing
    const store = useProductDataStore()
    store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)] = item)
    
    // itemTotal()
    // shipTotal()
  }

  function increaseCartItemQty(item, variant) {

    const cart = useCartDataStore()
    variant.cartQty++
    item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant
    cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
    cartProducts.value = cart.cartData

    // Do we need to do anything to the product store here?
    // May as well try :D
    const store = useProductDataStore()
    store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)] = item)

    // itemTotal()
    // shipTotal()
    
  }

  function profileClick () {
    if (pageTitle.value.includes("/shop")){
      const cart = useCartDataStore()
      console.log(cart.cartData.length)
      // const cart = useCartDataStore()
      // console.log(cart)
      // console.log("Cart button clicked: " + cart.cartData.length)
      // // cartProducts.value = cart.cartData
      if(cart.cartData.length>0 ){
        cartProducts.value = cart.cartData
        loaded.value = true
      } else {
        // cartProducts.value = cart.cartData
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

  // function limitVariants(variants) {
  //   let cartVariants = []
  //   for (let i = 0; i < length; i++){
  //     if (variants[i].inCart){
  //       cartVariants.push(variants[i])
  //     }
  //   }
  //   return cartVariants
  // }

//   const publishedBooksMessage = computed(() => {
//   return author.books.length > 0 ? 'Yes' : 'No'
// })
  // const variantsInCart = computed((item)=> {
  const variantsInCart = function (item) {
    let cartVariants=[]
    for (let i=0; i<item.length; i++){
      if(item[i].inCart){
        cartVariants.push(item[i])
      }
    }
    return cartVariants
  }


  // This doesn't work right
  // const itemPrice = reactive((variant) => {
  //   let price = 0
  //   let firstItemCost = 0

  //   let foundCountry = false
  //   for (let p=0; p<variant.shippingProfile.length; p++){
  //     console.log(variant.shippingProfile[p].countries)
  //     if (user.userData[0].country in variant.shippingProfile[p].countries){
  //       console.log(variant.shippingProfile[p])
  //       firstItemCost = variant.shippingProfile[p].first_item.cost
  //       foundCountry = true
  //       price=variant.cost + firstItemCost + (variant.cost * 0.25) + 100 // Profit margin is 25% of cost + $1.00
  //     }

  //   }

  //   if (!foundCountry){
  //     for (let p=0; p<variant.shippingProfile.length; p++){
  //       if ("REST_OF_THE_WORLD" in variant.shippingProfile[p].countries){
  //         console.log(variant.shippingProfile)
  //         firstItemCost = variant.shippingProfile[p].first_item.cost
  //         price=variant.cost + firstItemCost + (variant.cost * 0.25) + 100 // Profit margin is 25% of cost + $1.00
  //       }
  //     }
  //   }
  //   // itemPriceRef.value = price
  //   return price
  // })

const itemPrice = function(variant) {
  const cart = useCartDataStore()
  const user = useUserDataStore()
  let sProfile = false

  // is this running correctly?
  // console.log("Profiles: " + variant.shippingProfile[0])
  for (let i = 0; i < variant.shippingProfile.length ; i++) {
    // console.log(variant.shippingProfile[i].countries)
    // console.log(user.userData[0].country)

    //going to try a for country in countries loo
    for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
      // console.log(variant.shippingProfile[i].countries[j])
      if (variant.shippingProfile[i].countries[j] == user.userData[0].country) {
        sProfile = variant.shippingProfile[i]
        variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
        cart.$patch(variant.id, {itemCost: variant.itemCost})
        return variant.itemCost
        // console.log("Shipping Profile: " + sProfile)
      }
    }
  }
  if ( !sProfile.first_item.cost || sProfile.first_item.cost<1) {
    for (let i=0; variant.shippingProfile.length; i++) {
      if (variant.shippingProfile[i].countries.includes("REST_OF_THE_WORLD")) {
        sProfile = variant.shippingProfile[i]
        variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
        cart.$patch(variant.id, {itemCost: variant.itemCost})
        return variant.itemCost
        // console.log("Shipping Profile: " + sProfile)
      }
    }
  }
  // console.log(sProfile)
  variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
  cart.$patch(variant.id, {itemCost: variant.itemCost})
  return variant.itemCost
  //   let firstItemCost = variant.shippingProfile[].first_item.cost
  //   let additionalItemCost = variant.shippingProfile[].additional_items.cost
  // return variant.cost + 
}




// const itemShippingPrice = function(variant){
//   //set the default shipping profile to usd
//   //use the user's shipping profile if they have one
//   let shippingProfile = variant.shippingProfile[0]
//   let foundCountry = false
//   if (variant.shippingProfile.length > 0) {
//     for(profile in variant.shippingProfile){
//       if (profile.countries.includes(userData.country)) {
//         console.log("")
//         shippingProfile = profile
//         foundCountry = true
//       }
//     }
//     if (!foundCountry) {
//       for(profile in variant.shippingProfile){
//         if (profile.countries.includes("REST_OF_THE_WORLD")) {
//           shippingProfile = profile
//         }
//       }
//     }
//   }
//   let shippingPrice = shippingProfile.additional_items.cost
//   return shippingPrice
// }


  // const itemTotal = computed(function () {
  //   let total = 0
  //   for (let i=0; i<cartProducts.value.length; i++){
  //     for (let j=0; j<cartProducts.value[i].variants.length; j++){
  //       total += (itemPrice(cartProducts.value[i].variants[j]) * cartProducts.value[i].variants[j].cartQty)
  //       // if (cartProducts.value[i].variants[j].inCart){
  //       //   //use the user's shipping profile if they have one
  //       //   let shippingProfile = cartProducts.value[i].variants[j].shippingProfile[0]
  //       //   if (cartProducts.value[i].variants[j].shippingProfile.length > 0) {
  //       //     for(profile in cartProducts.value[i].variants[j].shippingProfile){
  //       //       if (profile.countries.includes(userData.country)) {
  //       //         let shippingProfile = profile
  //       //       }
  //       //     }
  //       //   }
  //       // total += (cartProducts.value[i].variants[j].cost + shippingProfile.first_item.cost + (cartProducts.value[i].variants[j].cost * 0.25) + 100) * cartProducts.value[i].variants[j].cartQty
  //       // }
  //     }
  //   }
  //   console.log("Items Total Price: " + total)
  //   return total
  // })

  const itemTotal = ref(computed(()=>{
    let total = 0
    for (let i=0; i<cartProducts.value.length; i++){
      for (let j=0; j<cartProducts.value[i].variants.length; j++){
        total += (itemPrice(cartProducts.value[i].variants[j]) * cartProducts.value[i].variants[j].cartQty)
      }
    }

    total = Math.ceil(total)

    // console.log("Items Total Price: " + total)
    return total
  }))

  // OLD ITEM TOTAL
  // const itemTotal = computed(() => {
  //   let total = 0
  //   for (let i=0; i<cartProducts.value.length; i++){
  //     for (let j=0; j<cartProducts.value[i].variants.length; j++){
  //       if (cartProducts.value[i].variants[j].inCart){
  //         //use the user's shipping profile if they have one
  //         let shippingProfile = cartProducts.value[i].variants[j].shippingProfile[0]
  //         if (cartProducts.value[i].variants[j].shippingProfile.length > 0) {
  //           for(profile in cartProducts.value[i].variants[j].shippingProfile){
  //             if (profile.countries.includes(userData.country)) {
  //               let shippingProfile = profile
  //             }
  //           }
  //         }
  //         total += (cartProducts.value[i].variants[j].cost + shippingProfile.first_item.cost + (variant.cost * 0.25) + 100) * cartProducts.value[i].variants[j].cartQty // Profit margin is 25% of cost + $1.00
  //       }
  //     }
  //   }
  //   return total
  // })

  const shipTotal = ref(computed(() => {
    let total = 0
    for (let i=0; i<cartProducts.value.length; i++){
      for (let j=0; j<cartProducts.value[i].variants.length; j++){
        if (cartProducts.value[i].variants[j].inCart){
          total += itemShippingPrice(cartProducts.value[i].variants[j]) * cartProducts.value[i].variants[j].cartQty
        }
      }
    }
    return total
  }))

const itemShippingPrice = function(variant) {
  const user = useUserDataStore()
  let sProfile = false

  // is this running correctly?
  // console.log("Profiles: " + variant.shippingProfile[0])
  for (let i = 0; i < variant.shippingProfile.length ; i++) {
    for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
      if (variant.shippingProfile[i].countries[j] == user.userData[0].country) {
        sProfile = variant.shippingProfile[i]
        variant.shipCost = sProfile.additional_items.cost
        // console.log("Shipping Profile: " + sProfile)
        return variant.shipCost
      }
    }
  }
  if (!sProfile) {
    for (let i=0; variant.shippingProfile.length; i++) {
      for (let j=0; variant.shippingProfile[i].countries.length; j++) {
        if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
          sProfile = variant.shippingProfile[i]
          variant.shipCost = sProfile.additional_items.cost
          // console.log("Shipping Profile: " + sProfile)
          return variant.shipCost
        }
      }
    }
  }
  // console.log(sProfile.first_item.cost)
  return (variant.shipCost >0 ? variant.shipCost : 1000)
}

  // const shipTotal = ref(computed(() => {
  //   let total = 0
  //   let restOfTheWorldPrice = {'additional_items':{'cost':1000}}
  //   for (let i=0; i<cartProducts.value.length; i++){
  //     for (let j=0; j<cartProducts.value[i].variants.length; j++){
  //       if (cartProducts.value[i].variants[j].inCart){
  //         let foundCountry = false
  //         //use the user's shipping profile if they have one
  //         for (let l=0; l<cartProducts.value[i].variants[j].shippingProfile.length; l++){
  //           if (cartProducts.value[i].variants[j].shippingProfile[l].countries.includes(user.userData[0].country)) {
  //             let shippingProfile = cartProducts.value[i].variants[j].shippingProfile[l]
  //             total += (shippingProfile.additional_items.cost * (cartProducts.value[i].variants[j].cartQty))
  //             console.log("Item shipping price added.  Current Total: " + total)
  //             foundCountry = true
  //           } else if(cartProducts.value[i].variants[j].shippingProfile[l].countries.includes("REST_OF_THE_WORLD")) {
  //             restOfTheWorldPrice = cartProducts.value[i].variants[j].shippingProfile[l].additional_items.cost
  //             // total += (shippingProfile.additional_items.cost * (cartProducts.value[i].variants[j].cartQty))
  //           }
  //         }
  //         // if (!foundCountry) {
  //         //   for (let k=0; k<cartProducts.value[i].variants[j].shippingProfile.length; k++){
  //         //     if (cartProducts.value[i].variants[j].shippingProfile[k].countries.includes("REST_OF_THE_WORLD")) {
  //         //       let shippingProfile = cartProducts.value[i].variants[j].shippingProfile[k].
  //         //       total += (shippingProfile.additional_items.cost * (cartProducts.value[i].variants[j].cartQty))
  //         //     }
  //         //   }
  //         // }
  //         if (!foundCountry) {
  //           total += (restOfTheWorldPrice * (cartProducts.value[i].variants[j].cartQty))
  //           console.log("Country not found, setting shipping price to rest of the world price.  Current Total: " + total)
  //         }
  //       }
  //     }

  //         // if (cartProducts.value[i].variants[j].cartQty>1){
  //         //   console.log()
  //         //   // total += cartProducts.value[i].variants[j].additionalItemCost * (cartProducts.value[i].variants[j].cartQty-1)
  //         //   total += (cartProducts.value[i].variants[j].additional_item.cost * (cartProducts.value[i].variants[j].cartQty-1)) + cartProducts.value[i].variants[j].first_item.cost
  //         // }
  //         // else {
  //         //   total += cartProducts.value[i].variants[j].first_item.cost
  //         // }
  //   }
  //   return total
  // }))

  const cartTotal = ref(computed(() => { return itemTotal.value + shipTotal.value }))



  // const cartTotal = computed(() => { return itemTotal.value + shipTotal.value })

    // function variantsInCart (item) {
    // let cartVariants=[]
    // for (let variant in item){
    //   if (variant.inCart){
    //     cartVariants.push(variant)
    //   }
    // }
  //   console.log("Returning variants: " + cartVariants)
  //   return cartVariants
  // }
  //)


  function removeVariant(item, variant) {
    const cart = useCartDataStore()
    let otherVariants = false

    variant.cartQty = 0
    variant.inCart = false
    item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant
    cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
    cartProducts.value = cart.cartData

    for (let j = 0; j < item.variants.length ; j++){
      if (item.variants[j].cartQty>0){
        console.log("There are still other variants of this item in the cart")
        otherVariants = true
        break
      }
    }

    //if there are not other variants of this item in the cart, just remove the whole item
    if (!otherVariants) {
      //Remove whole item from cart
      cart.$patch(cart.cartData.splice(cart.cartData.map((x)=>{return x.id}).indexOf(item.id),1))
      cartProducts.value = cart.cartData

      //If there are no other products in cart data, set loaded to false
      if(cart.cartData.length==0){
        cart.$patch(cart.cartData=[])
        loaded.value = false
      }
    }

    //Update the store to show updated inCart and cartQty values
    const store = useProductDataStore()
    store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)] = item)

    // itemTotal()
    // shipTotal()
  }
</script>