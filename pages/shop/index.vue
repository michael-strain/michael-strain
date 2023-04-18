<!-- eslint-disable vue/multi-word-component-names -->
<!-- URGENT TODO
This page seems to reload the whole damn vue application on load for some reason -->
<template>
  <v-layout>
    <div
      class="bg-image img-opacity-40 bg-repeat"
      style="background-image: url('../img/purple-mushroom.jpg')"
    >
      <div class="">
        <div class="">
          <ShopHeader />
          <p
            class="text-white p-5 flex flex-wrap justify-center text-center align-center text-2xl"
            :style="{fontFamily: 'Roboto Slab', textShadow: '2px 3px 0px purple, 0px 0px 6px black'}"
          >
            Welcome to L.S.Dope. All of the art you see was created by independent artists.  We hope you find something you love!
          </p>
          <div class="flex flex-wrap items-center align-center justify-center">
            <div 
              v-if="loaded"
              class="flex flex-wrap items-center align-center justify-center w-full"
            >
              <div
                v-for="(item, product) in products"
                :key="product"
                class="flex items-center align-center justify-center"
              >
                <v-card class="w-80 text-wrap rounded-xl border flex m-5 p-2 h-450px">
                  <div class="static h-0">
                    <v-btn
                      rounded
                      class="absolute top-5 left-40 z-50"
                      transition="fade-transition"
                      @click="heartClick(item, item.variants[item.variantNum])"
                    >
                      <p
                        :style="{fontFamily: 'Roboto Slab'}"
                        class="p-1 text-xl"
                      >
                        <!-- class="p-2 text-xl float-right " -->
                        <!-- Ashley wants to surprise our customers with added shipping.
                      {{ formatter.format((itemPrice(item.variants[item.variantNum])+itemShippingPrice(item.variants[item.variantNum]))/100) }}
                      -->
                        {{ formatter.format((itemPrice(item.variants[item.variantNum]))/100) }}
                        <v-icon
                          :icon="heart(item.variants[item.variantNum])"
                        />
                      </p>
                    <!-- <p>
                      + {{ formatter.format(itemShippingPrice(item.variants[item.variantNum])/100) }} Shipping
                    </p> -->
                    </v-btn>
                  </div>
                  <v-carousel
                    height="320"
                    show-arrows="hover"
                    color="primary-darken-1"
                    hide-delimiter-background
                    delimiter-icon="mdi-circle-slice-8"
                    class="pt-0 mt-0"
                  >
                    <NuxtLink to="">
                      <v-carousel-item
                        v-for="(img, i) in item.images"
                        :key="i"
                        :src="img.src"
                        :lazy-src="img.src"
                        :alt="img.alt"
                      />
                    </NuxtLink>
                  </v-carousel>
              
                  <div class="h-100 justify-center text-center align-center">
                    <NuxtLink :to="'/shop/product/'+item.id">
                      <v-card-title class="text-wrap max-width-full ">
                        <p
                          :style="{fontFamily: 'Roboto Slab'}"
                          class="text-2xl"
                        >
                          {{ item.title }}
                        </p>
                      </v-card-title>
                    </NuxtLink>
                    <v-card-subtitle class="pb-3 max-width-full">
                      <p
                        :style="{fontFamily: 'Roboto Slab'}"
                        class="text-xl text-center "
                      >
                        <v-btn
                          v-if="item.variants.length>1"
                          variant="text"
                          icon
                          @click="leftVariantArrow(item)"
                        >
                          <v-icon icon="mdi-chevron-left" />
                        </v-btn>
                        {{ item.variants[item.variantNum].title }}
                        <v-btn
                          v-if="item.variants.length>1"
                          icon
                          variant="text"
                          @click="rightVariantArrow(item)"
                        >
                          <v-icon icon="mdi-chevron-right" />
                        </v-btn>
                      </p>
                    </v-card-subtitle>
                  </div>
              
              
                  <!-- <v-btn
                    icon
                    transition="fade-transition"
                    @click="heartClick(item, item.variants[item.variantNum])"
                  >
                    <v-icon :icon="heartIcon(item)" /> -->
                  <!-- <v-icon
                      v-if="item.qty>0"
                      icon="mdi-cards-heart"
                    />
                    <v-icon
                      v-else
                      icon="mdi-cards-heart-outline"
                    /> -->
                  <!-- </v-btn> -->
                  <!-- </v-card-actions> -->

              
                <!-- Old method -->
                <!-- <NuxtLink :to="`/shop/product/${item.id}`">
                <img
                  :src="item.images[item.imageNum].src"                  
                  class="h-64 mx-auto"
                >
              </NuxtLink> -->
                </v-card>
              </div> 
            </div> 
          </div>
        </div>
      </div>
    </div>
    <ShopFooter />
  </v-layout>
</template>


<script setup>

  //Minor Issue: The heart icon doesn't always update properly when you click it. It seems to be a problem with the reactive array.

  import { ref, onMounted } from 'vue'
  import { useProductDataStore } from '~/stores/productData';
  import { useCartDataStore } from '~/stores/cartData';
  import { useUserDataStore } from '~/stores/userData';
import consolaGlobalInstance from 'consola';

  const store = useProductDataStore()
  const cart = useCartDataStore()
  const user = useUserDataStore()

  const heart = ref((variant)=> {
    if (variant.cartQty>0){
      return "mdi-cards-heart"
    }
    else{
      return "mdi-cards-heart-outline"
    }
  })

  const products = ref([])
  // const cartProducts = reactive([])
  const loaded = ref(false)

  onMounted(async() => {
    if(store.productData.length > 0){
      console.log("store.productData.length: " + store.productData.length)
      products.value = store.productData
      loaded.value = true
    }
    else {
      store.productData = await getProductData()
      products.value = store.productData
      loaded.value = true
    }
    //if user, do something pricing related?
  })

  const getProductData = async () => {
    console.log("Fetching product data")
    const pData = await $fetch('/api/query?col=products', { method: 'GET' })
    for (let i = 0; i < pData.length; i++) {
      pData[i].variantNum = 0
      for (let j = 0; j < pData[i].variants.length; j++) {
        pData[i].variants[j].cartQty = 0
        pData[i].variants[j].inCart = false
      }
    }
    return pData
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  // Only one issue appears to remain here.
  // If you add two different items to the cart, and then remove the more recently added item, the cart gets new array objects of the variant you are trying to remove
  // This is because the cart is not being updated with the new variant object when you add it to the cart.  It is only being updated with the new variant object when you remove it from the cart. (Suggested by CoPilot)
  function heartClick(item, variant){ 
    const cart = useCartDataStore()
    // const store = useProductDataStore()

   //TODO
   //Looks like the heart icon doesn't always necessarily show whether or not a variant is in the cart. 

    //:D   //Scenario 1: No items in cart, add this item to cart
    //:D   //Scenario 2: This item is in cart, but not this variant, add this variant to cart
    //:D   //Scenario 3: This item is in cart, and this variant is in cart:
          //:D  //Scenario 3a: If this is the only variant of this item in cart, remove the item from cart
          //:D  //Scenario 3b: If there are other variants of this item in cart, remove this variant from cart
    //:D   //Scenario 4: This item is not in cart, but other items are, add this item (and variant) to cart

    let thisItemInCart = false
    let thisVariantInCart = false
    let otherVariants = false
    let otherItems = false
    let itemIndex = null
    let variantIndex = null



    //Scenario 1: No items in cart, add this item to cart
    if (cart.cartData.length==0) {
      // console.log("No items in cart") //Scenario 1
      variant.cartQty = 1
      variant.inCart = true
      item.variants[item.variantNum] = variant
      // cart.$patch({ cartData: [item] })
      cart.$patch(cart.cartData[0] = item)
      // store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item)] = item)
      return
    }

    //Checking if this item is in the cart, and if other items are in the cart
    cartLoop: for (let i=0; i<cart.cartData.length; i++){
      if (cart.cartData[i].id != item.id){
        otherItems = true
      }
      if (cart.cartData[i].id == item.id){
        thisItemInCart = true

        variantLoop: for (let j=0; j<cart.cartData[i].variants.length; j++) {
          if (cart.cartData[i].variants[j].cartQty>0 && cart.cartData[i].variants[j].id != variant.id) {
            otherVariants = true
          }
          if (cart.cartData[i].variants[j].cartQty>0 && cart.cartData[i].variants[j].id == variant.id) {
            thisVariantInCart = true
            itemIndex = i
            variantIndex = j
          }
          if (otherVariants && thisVariantInCart) {
            if (otherItems && thisItemInCart) {
              break cartLoop
            }
            break variantLoop //Does this break out of both for loops, or just the variant loop?
          }
        }
      }
      if (otherItems && thisItemInCart) {
        break cartLoop
      }
    }

    //Scenario 2: This item is in cart, but not this variant, add this variant to cart
    if (thisItemInCart && !thisVariantInCart) {
      console.log("This item is in cart, but not this variant")
      variant.cartQty = 1
      variant.inCart = true
      item.variants[variantIndex] = variant
      cart.$patch(cart.cartData[cart.cartData.length] = item)
      // cart.cartData[itemIndex].variants.push(variant)
      // cart.$patch({ cartData: cart.cartData })
      // store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item)] = item)
      return
    }

    //Scenario 3: This item is in cart, and this variant is in cart:
    if (thisItemInCart && thisVariantInCart) {
      console.log("This item and this variant are in cart.")

      //Other variants should only be set to true if there are other variants OF THIS ITEM in the cart
      //Scenario 3a: If this is the only variant of this item in cart, remove the item from cart
      if (!otherVariants) {
        console.log("This is the only variant of this item in cart - Scenario 3a")
        variant.cartQty = 0
        variant.inCart = false
        item.variants[item.variantNum] = variant
        cart.$patch(cart.cartData[itemIndex].variants[variantIndex] = variant)
        cart.cartData.splice(itemIndex, 1)
        cart.$patch({ cartData: cart.cartData })
        // store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item)] = item)
        return
      }
      //Scenario 3b: If there are other variants of this item in cart, remove this variant from cart
      if (otherVariants) {
        console.log("There are other variants of this item in cart - Scenario 3b")
        variant.cartQty = 0
        variant.inCart = false
        item.variants[item.variantNum] = variant
        cart.$patch(cart.cartData[itemIndex].variants[variantIndex] = variant)
        cart.cartData.splice(itemIndex, 1)
        cart.$patch({ cartData: cart.cartData })
        // store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item)] = item)
        return
      }
    }

    //Scenario 4: This item is not in cart, but other items are, add this item (and variant) to cart
    if (!thisItemInCart && otherItems) {
      console.log("This item is not in cart, but other items are, add this item (and variant) to cart")
      variant.cartQty = 1
      variant.inCart = true
      item.variants[item.variantNum] = variant
      cart.$patch(cart.cartData[cart.cartData.length] = item)
      // store.$patch(store.productData[i] = item)
      return
    }
  }

  const itemPrice = function(variant) {
    console.log("User Country: " + user.userData.shippingInfo.country)
  
    let sProfile = false
    // is this running correctly?
    // console.log("Profiles: " + variant.shippingProfile[0])
    for (let i = 0; i < variant.shippingProfile.length ; i++) {
      console.log("I am shipping profile #: " + i)
      // console.log(variant.shippingProfile[i].countries)
      // console.log(user.userData[0].country)

      //going to try a for country in countries loo
      for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
        console.log("I am country #(" + j + "):" + variant.shippingProfile[i].countries[j])
        if (variant.shippingProfile[i].countries[j] == user.userData.shippingInfo.country) {
          console.log("Setting shipping profile!")
          sProfile = variant.shippingProfile[i]
          variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
          cart.$patch(variant.id, {itemCost: variant.itemCost})
          return variant.itemCost
          // console.log("Shipping Profile: " + sProfile)
        }
        //else-if REST_OF_THE_WORLD is an option, and sProfile cost didn't get us a price

      }
    }
    console.log("sProfile: " + sProfile)
    if (!sProfile) {
      for (let i=0; variant.shippingProfile.length; i++) {
        for (let j=0; variant.shippingProfile[i].countries.length; j++){
          if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
            sProfile = variant.shippingProfile[i]
            console.log("New sProfile!")
            console.log(sProfile)
            variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
            cart.$patch(variant.id, {itemCost: variant.itemCost})
            return variant.itemCost
            // console.log("Shipping Profile: " + sProfile)
          }
        }
      }
    }
    // console.log(sProfile)
    // variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
    // cart.$patch(variant.id, {itemCost: variant.itemCost})
    return variant.itemCost
    //   let firstItemCost = variant.shippingProfile[].first_item.cost
    //   let additionalItemCost = variant.shippingProfile[].additional_items.cost
    // return variant.cost + 
  }

  // const itemShippingPrice = computed((variant) => {
  //   let shipCost = variant.additionalItemCost * variant.cartQty
  //   console.log(shipCost)
  //   return { shipCost }
  // })

  // const itemShippingPrice = function(variant) {
  // const user = useUserDataStore()
  // let sProfile = false

  // // is this running correctly?
  // // console.log("Profiles: " + variant.shippingProfile[0])
  // for (let i = 0; i < variant.shippingProfile.length ; i++) {
  //   for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
  //     if (variant.shippingProfile[i].countries[j] == user.userData.shippingInfo.country) {
  //       sProfile = variant.shippingProfile[i]
  //       variant.shipCost = sProfile.additional_items.cost
  //       // console.log("Shipping Profile: " + sProfile)
  //       return variant.shipCost
  //     }
  //   }
  // }
  // if (!sProfile) {
  //   for (let i=0; variant.shippingProfile.length; i++) {
  //     for (let j=0; variant.shippingProfile[i].countries.length; j++) {
  //       if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
  //         sProfile = variant.shippingProfile[i]
  //         variant.shipCost = sProfile.additional_items.cost
  //         // console.log("Shipping Profile: " + sProfile)
  //         return variant.shipCost
  //       }
  //     }
  //   }
  // }
  // // console.log(sProfile.first_item.cost)
  // return (variant.shipCost >0 ? variant.shipCost : 1000)
  // }


  function leftVariantArrow(item){
    // Cycle through item variants
    const store = useProductDataStore()
    const cart = useCartDataStore()
    let variantId = item.variantNum
    if (variantId>0) {
      variantId--
    } else {
      variantId = item.variants.length-1
    }
    for (let i = 0; i < store.productData.length; i++) {
      if (store.productData[i].id === item.id) {
        store.$patch( store.productData[i].variantNum=variantId )
        
        // for items in cart
          //if product is in cart, patch the cart with the variantNum
        for (let j=0;j<cart.cartData.length;j++) {
          if (cart.cartData[j].id==store.productData[i].id){
            cart.$patch(cart.cartData[j].variantNum=variantId)
          }
        }

        products.value = store.productData
        return
      }
    }
  }

  function rightVariantArrow(item){
    // Cycle through item variants
    const store = useProductDataStore()
    const cart = useCartDataStore()
    let variantId = item.variantNum
    if (variantId<item.variants.length-1) {
      variantId++
    } else {
      variantId = 0
    }
    for (let i = 0; i < store.productData.length; i++) {
      if (store.productData[i].id === item.id) {
        store.$patch( store.productData[i].variantNum=variantId )

         // for items in cart
          //if product is in cart, patch the cart with the variantNum
        for (let j=0;j<cart.cartData.length;j++) {
          if (cart.cartData[j].id==store.productData[i].id){
            cart.$patch(cart.cartData[j].variantNum=variantId)
          }
        }

        products.value = store.productData
        return
      }
    }
  }

// type Variant = {
//   additionalItemCost: number
//   cartQty: number
//   cost: number
//   firstItemCost: number
//   grams: number
//   handlingTime: number
//   handlingTimeUnit: string
//   id: number
//   inCart: boolean
//   is_available: boolean
//   is_default: boolean
//   is_enabled: boolean
//   options: number[]
//   price: number
//   quantity: number
//   shippingCountries: string[]
//   sku: string
//   title: string
// }


</script>