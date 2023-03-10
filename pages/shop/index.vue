<!-- eslint-disable vue/multi-word-component-names -->


<template>
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
          Welcome to L.S.Dope. All of the art you see here was created by small, independent artists.
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
                      <!-- Ashley wants to surprise our customers with added shipping.  Your funeral babe.
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
</template>


<script setup>

  //Minor Issue: The heart icon doesn't always update properly when you click it. It seems to be a problem with the reactive array.

  import { ref, onMounted } from 'vue'
  import { useProductDataStore } from '~/stores/productData';
  import { useCartDataStore } from '~/stores/cartData';
  import { useUserDataStore } from '~/stores/userData';
  import { storeToRefs } from 'pinia'

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
    const store = useProductDataStore()
    const cart = useCartDataStore()
    const user = useUserDataStore()
    
    if(store.productData.length > 0){
      // console.log("Products already loaded")
      products.value = store.productData
      loaded.value = true
      // products.value = storeToRefs(store.productData)
    }
    else {
      // console.log("Fetching products from Firestore")


      //TODO Probably need to replace this with a direct ID call or something... idk there should always be products in the datastore at this point maybe it's nbd.
      const pData = await $fetch('/api/query?col=products', { method: 'GET' })
      // console.log(pData)
      
      for (let i = 0; i < pData.length; i++) {
        // console.log("Adding imageNum to productData: " + pData[i].id)
        pData[i].variantNum = 0
        for (let j = 0; j < pData[i].variants.length; j++) {
          //If new products are fetched, set their cartQty and inCart values
          pData[i].variants[j].cartQty = 0
          pData[i].variants[j].inCart = false
        }
      }
      store.$patch({ productData: pData })
      products.value = store.productData
      loaded.value = true
    }
  })

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  // function heartIcon(item){
  //   if (item.cartQty>0){
  //     return "mdi-cards-heart"
  //   }
  //   else{
  //     return "mdi-cards-heart-outline"
  //   }
  // }


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



    //OLD METHOD
  //   for (i=0; i<cart.cartData.length; i++){
  //     if (cart.cartData[i].id == item.id){
  //       for (let j=0; j<cart.cartData[i].variants.length; j++) {
  //         if (cart.cartData[i].variants[j].cartQty>0 && cart.cartData[i].variants[j].id != variant.id) {
  //           otherVariants = true
  //         }
  //         if (cart.cartData[i].variants[j].cartQty>0 && cart.cartData[i].variants[j].id == variant.id) {
  //           thisVariantInCart = true
  //         }
  //         if (otherVariants && thisVariantInCart) {
  //           break
  //         }
  //       }
        


  //       if (thisVariantInCart) {
  //         if (otherVariants) {
  //           console.log("Removing just the one variant.") //Scenario 3b
  //           variant.cartQty = 0
  //           variant.inCart = false
            
  //           item.variants[item.variantNum] = variant
  //           cart.$patch(cart.cartData[i].variants[item.variantNum] = variant)
  //           // store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item)] = item)
  //           return
  //         }
  //         else {
  //           console.log("This is the only variant of this item in the cart.  Removing the whole item.") //Scenario 3a
  //           // cart is not being updated with the new variant object when you add it to the cart.  It is only being updated with the new variant object when you remove it from the cart. (Suggested by CoPilot)
  //           // Update cart with the new variant object


  //           variant.cartQty = 0
  //           variant.inCart = false
  //           item.variants[item.variantNum] = variant
  //           cart.$patch(cart.cartData[i].variants[item.variantNum] = variant)
  //           // store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item)] = item)
  //           // cart.$patch(cart.cartData[i].variants[item.variantNum] = variant)
  //           cart.$patch(cart.cartData.splice(i, 1)) //Removes the item from the cart

  //         }
  //       } else {
  //         console.log("This variant is not in the cart, but the item is.  Adding it.") //Scenario 2
  //         variant.cartQty = 1
  //         variant.inCart = true
  //         item.variants[item.variantNum] = variant
  //         cart.$patch(cart.cartData[i].variants[item.variantNum] = variant)
  //         // cart.$patch(cart.cartData[cart.cartData.indexOf(item)] = item)
  //         // store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item)] = item)
  //         return
  //       }
  //       break
  //     }
  //   }

  //   //Scenario 4 - Suggested by CoPilot
  //   //I think we need something here to handle the case where the item is not in the cart, but other items are.  I think this is the only case where we need to update the cart with the new variant object.

  //   //Nope, we are still having issues with the cart not being updated with the new variant object when you add it to the cart.  It is only being updated with the new variant object when you remove it from the cart. (Suggested by CoPilot)
  //   if (!thisItemInCart && otherItems) {
  //     console.log("This item is not in cart, but other items are, add this item (and variant) to cart")
  //     // Thanks CoPilot.  Sorry I'm slow sometimes, but I'm getting there.  It's also 2:30am here, so I'm not at my best.  I'll try to get this working tomorrow.  OR I could continue now! :D
  //     variant.cartQty = 1
  //     variant.inCart = true
  //     item.variants[item.variantNum] = variant
  //     cart.$patch(cart.cartData[cart.cartData.length] = item)
  //     // store.$patch(store.productData[i] = item)
  //     return
  //   }

  //   //Scenario 4 - This item is not in cart, but other items are, add this item (and variant) to cart
  //   // if (!thisItemInCart) {
  //   //   console.log("This item is not in cart, but other items are, add this item (and variant) to cart")
  //   //   variant.cartQty = 1
  //   //   variant.inCart = true
  //   //   thisItemInCart = true //This is not needed
  //   //   item.variants[item.variantNum] = variant
  //   //   cart.$patch(cart.cartData[cart.cartData.length-1] = item) //Does this work?
  //   //   store.$patch(store.productData[i] = item) //Does this work?
  //   //   return
  //   // }
  // }


  // THIS FUNCTION
  const itemPrice = function(variant) {
    // const cart = useCartDataStore()
    const user = useUserDataStore()
    let sProfile = false

    // is this running correctly?
    // console.log("Profiles: " + variant.shippingProfile[0])
    for (let i = 0; i < variant.shippingProfile.length ; i++) {
      // console.log(variant.shippingProfile[i].countries)
      // console.log(user.userData[0].country)
      let countryList = []
      countryList = variant.shippingProfile[i].countries
      for (let j = 0; j < countryList.length; j++) {
        if (countryList[j] == user.userData[0].country) {
          sProfile = variant.shippingProfile[i]
          variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
          // console.log("variant.cost: " + variant.cost)
          // console.log("sProfile.first_item.cost: " + sProfile.first_item.cost)
          // console.log("additional item cost: " + sProfile.additional_items.cost)
          // console.log("variant.cost * .25: " + (variant.cost * 0.25))
          // console.log("Our Costs: " + (variant.cost + sProfile.first_item.cost))
          // console.log("Our Profits: " + (variant.cost * 0.25) + sProfile.additional_items.cost + 100)
          // console.log("Shipping Profile: " + sProfile)

          //Example: Test Hand Towel
          // cost= 896
          // sProfile.first_item.cost = 429
          // sProfile.additional_items.cost = 199

          //Cost = 896 + 429 + 199 = 1524

          //Profit Margin = 224 + 100 (324)
          //Total Cost = 896 + 429 + 324 + 199 = 1848
          //
        }
      }
    }
    if (!sProfile) {
      for (let i=0; variant.shippingProfile.length; i++) {
        for (let j=0; variant.shippingProfile[i].countries.length; j++){
          if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
            sProfile = variant.shippingProfile[i]
            variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
            // console.log("Shipping Profile: " + sProfile)
          }
        }
      }
    }
    // console.log(sProfile)
    
    // cart.$patch(variant.id, {itemCost: variant.itemCost})
    // console.log(sProfile.first_item.cost)
    return variant.itemCost // Profit margin is 10% of cost + $1.00
    //   let firstItemCost = variant.shippingProfile[].first_item.cost
    //   let additionalItemCost = variant.shippingProfile[].additional_items.cost
    // return variant.cost + 
  }

  // const itemShippingPrice = computed((variant) => {
  //   let shipCost = variant.additionalItemCost * variant.cartQty
  //   console.log(shipCost)
  //   return { shipCost }
  // })

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

  // function leftImgArrow(item){
  //   // get current image number
  //   let imageId = item.imageNum
  //   if (imageId>0) {
  //     imageId--
  //   } else {
  //     imageId = item.images.length-1
  //   }

  //   //patch the store with the new image number
  //   const store = useProductDataStore()
  //   for (let i = 0; i < store.productData.length; i++) {
  //     if (store.productData[i].id === item.id) {
  //       store.$patch( store.productData[i].imageNum=imageId )
  //       products.value = store.productData
  //       return
  //     }
  //   }
  // }

  // function rightImgArrow(item){
  //   let imageId = item.imageNum
  //   if (imageId==item.images.length-1) {
  //     imageId = 0
  //   } else {
  //     imageId++
  //   }

  //   //patch the store with the new image number
  //   const store = useProductDataStore()
  //   for (let i = 0; i < store.productData.length; i++) {
  //     if (store.productData[i].id == item.id) {
  //       store.$patch( store.productData[i].imageNum = imageId )
  //       products.value = store.productData
  //       return
  //     }
  //   }
  // }

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












<!--OLD VERSION BELOW-->





<!-- TODO: Make a loading display when people push left/right arrow on product images -->

<!-- <template>
  <div>
    <div class="w-full p-0 m-0">
      <ShopHeader />
      <div class="flex flex-wrap items-center align-center justify-center">
        <div v-if="pending">
          Loading . . .
        </div>
        <div
          v-else
          class="flex flex-wrap items-center align-center justify-center w-full"
        >
          <div
            v-for="(item, product) in store.productData"
            :key="product"
            class="flex items-center align-center justify-center"
          >
            <v-card class="bg-white w-80 text-wrap rounded-xl border flex m-5 p-2">
              <NuxtLink :to="`/shop/product/${item.id}`">
                <img
                  :src="`${item.images[item.imageNum].src}`"                  
                  class="h-64 mx-auto"
                  lazy
                >
              </NuxtLink>
              
              <v-card class="bg-transparent">
                <p
                  :style="{fontFamily: 'Roboto Slab'}"
                  class="text-green-400 pr-4 pb-4 text-3xl float-right"
                >
                  {{ formatter.format((item.variants[0].price)/100) }}
                </p>
              </v-card>

              <v-card-title class="bg-surface text-wrap max-width-full justify-center text-center align-center">
                <p
                  :style="{fontFamily: 'Roboto Slab'}"
                  class="text-wrap text-2xl"
                >
                  {{ item.title }}
                </p>
              </v-card-title>
              
              <div class="bg-surface d-flex items-center justify-center text-center align-center m-0">
                <v-card-actions>
                  <v-btn
                    icon
                    @click="leftArrow(item)"
                  >
                    <v-icon icon="mdi-chevron-left" />
                  </v-btn>

                  <v-btn
                    icon
                    transition="fade-transition"
                    @click="heartClick(item)"
                  >
                    <v-icon :icon="item.inCart ? 'mdi-cards-heart' : 'mdi-cards-heart-outline'" />
                  </v-btn>
                  <v-btn
                    icon
                    @click="rightArrow(item)"
                  >
                    <v-icon icon="mdi-chevron-right" />
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template> -->


<!-- <script setup>
// Need a price box on the bottom right of the product
// Need to loop through images with arrow buttons
import { ref } from 'vue'
import { useProductDataStore } from '~/stores/productData';
import { useCartDataStore } from '~/stores/cartData';
import { storeToRefs } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

// import { useCartStore } from '~/stores/cart';

const url = 'https://api.printify.com/v1/shops/6483145/products.json'
const products = ref([])
const productId = ref({})
const pending = ref(true)

const store = useProductDataStore()
const cart = useCartDataStore()
const cartData = ref()








// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});



// TODO

const localstore = useLocalStorage('productData')

// If localstore data is present but store.productData is not
// set patch store with locally-stored data

//  IDK if this does anything worth doing
// onMounted(async () => {
//   if (store.productData != null && store.productData.data.length > 0 ){
//     products.value = storeToRefs(store.productData.data)
//   }
// })

// If store.productData is set but localstore isn't
// store it locally i guess - but i think this should be happening already

//Figure out if i need to use mounted and store locally on client, or if i can store on server (or should store in firestore)

//modify this
onMounted(async() => {
  if ((store.productData != null && store.productData.length > 0 )|| (localstore.value !=null && JSON.parse(localstore.value).length>0)) {
    console.log("Products are in store")
    for (let i = 0; i < store.productData.length; i++) {
      store.$patch( store.productData[i].imageNum = 0 )
      store.$patch( store.productData[i].qty = 0)
      store.$patch( store.productData[i].inCart = false)
    }
    products.value = storeToRefs(store.productData)
    console.log(products)
    pending.value = false
  } else {
    console.log("Products are not in store")
    pending.value = true
    // onMounted(async() => {
    //   const { result } = await $fetch("/api/query?col=products")
    //   todos.value = result
    // })

    // get from firestore with query
    const { result } = await $fetch('/api/query?col=products')
    console.log(result)
    // products.value = result
    store.$patch({productData: result})
    localstore.value = JSON.stringify(store.productData.productData)
    console.log(store.productData.productData)
    for (let i = 0; i < store.productData.length; i++) {
      store.$patch(store.productData[i].imageNum = 0 )
      store.$patch(store.productData[i].qty = 0)
      store.$patch(store.productData[i].inCart = false)
    }
    products.value = storeToRefs(store.productData)
    pending.value = false
    // Old, direct call to printify method
    // const opts = {
    //   method: 'GET',
    //   // mode: 'no-cors',
    //   headers: {
    //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
    //     // 'Access-Control-Allow-Origin': 'https://localhost:3000',
    //     'User-Agent': 'Michael-Strain Nuxt App'
    //   },
    // };
    // const { data:result, pending:penval } = $fetch(url, opts)

    // store.$patch({productData: result})
    
    // products.value = storeToRefs(store.productData.products.data)
  }
})

// Need to make leftArrow and rightArrow functions that rotate each item's images

// definePageMeta({
//   key:'products'
// })

function heartClick(item){ 
  console.log("Item id: " + item.id)

  // add item to cart based on item id
  const cart = useCartDataStore()
  let notfound = true
  // cartData.value = storeToRefs(cart.cartData.data)
  if (cart.cartData.data != null && cart.cartData.data.length > 0) {
    console.log("Products are in cart")
    // if (item in cart.cartData.data) {
      
    for (let i = 0; i < cart.cartData.data.length; i++) {
      if (item.id === cart.cartData.data[i].id) {
        notfound = false
        console.log("Item is in cart:  " + i)
        item.qty +=1
        item.inCart = true
        cart.$patch(cart.cartData.data[i] = item)
        return
      } else {
        console.log("Not this item: " + i)
        let notfound = true
        // item.qty = 1
        // cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
      }
    }
    if (notfound) {
      item.qty = 1
      item.inCart = true
      cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
      for (let x = 0; x < store.productData.length; x++) {
        if (item.id === store.productData[x].id) {
          store.$patch(store.productData[x].inCart = true)
          products.value = storeToRefs(store.productData)
        }
      }
    }
    // cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
  } else {
    console.log("Products are not in cart")
    item.qty = 1
    item.inCart=true
    cart.$patch(cart.cartData.data[cart.cartData.data.length] = item)
    for (let x = 0; x < store.productData.length; x++) {
      if (item.id === store.productData[x].id) {
        store.$patch(store.productData[x].inCart = true)
        products.value = storeToRefs(store.productData)
      }
    }
    
    return
  }

}

function leftArrow(item){
  // get current image number
  let imageId = item.imageNum
  if (imageId>0) {
    imageId-=1
  } else {
    imageId = item.images.length
  }
  //patch the store with the new image number
  const store = useProductDataStore()
  for (let i = 0; i < store.productData.length; i++) {
    if (store.productData[i].id == item.id) {
      store.$patch( store.productData[i].imageNum = imageId )
    }
  }
}

function rightArrow(item){
  let imageId = item.imageNum
  if (imageId<item.images.length) {
    imageId+=1
  } else {
    imageId = 0
  }
  const store = useProductDataStore()
  for (let i = 0; i < store.productData.length; i++) {
    if (store.productData[i].id == item.id) {
      store.$patch( store.productData[i].imageNum = imageId )
    }
  }
}

function refreshAll() {refreshNuxtData()}
// function refreshProducts() {refreshNuxtData('result')}
//
//
// const exampleResponse = {
//     "current_page": 1,
//     "data": [
//         {
//             "id": "5d39b159e7c48c000728c89f",
//             "title": "Mug 11oz",
//             "description": `"Perfect for coffee, tea and hot chocolate, this classic shape white, durable 
//             ceramic mug in the most popular size. High quality sublimation printing makes it an 
//             appreciated gift to every true hot beverage lover.Perfect for coffee, tea and hot 
//             chocolate, this classic shape white, durable ceramic mug in the most popular size. 
//             High quality sublimation printing makes it an appreciated gift to every true hot beverage lover. 
//             .: White ceramic
//             .: 11 oz (0.33 l)
//             .: Rounded corners
//             .: C-Handle"`,
//             "tags": [
//                 "Home & Living",
//                 "Mugs",
//                 "11 oz",
//                 "White base",
//                 "Sublimation"
//             ],
//             "options": [
//                 {
//                     "name": "Sizes",
//                     "type": "size",
//                     "values": [
//                         {
//                             "id": 1189,
//                             "title": "11oz"
//                         }
//                     ]
//                 }
//             ],
//             "variants": [
//                 {
//                     "id": 33719,
//                     "sku": "866366009",
//                     "cost": 516,
//                     "price": 860,
//                     "title": "11oz",
//                     "grams": 460,
//                     "is_enabled": true,
//                     "is_default": true,
//                     "is_available": true,
//                     "options": [
//                         1189
//                     ]
//                 }
//             ],
//             "images": [
//                 {
//                     "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/145/mug-11oz.jpg",
//                     "variant_ids": [
//                         33719
//                     ],
//                     "position": "front",
//                     "is_default": false
//                 },
//                 {
//                     "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/146/mug-11oz.jpg",
//                     "variant_ids": [
//                         33719
//                     ],
//                     "position": "other",
//                     "is_default": false
//                 },
//                 {
//                     "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/147/mug-11oz.jpg",
//                     "variant_ids": [
//                         33719
//                     ],
//                     "position": "other",
//                     "is_default": true
//                 }
//             ],
//             "created_at": "2019-07-25 13:40:41+00:00",
//             "updated_at": "2019-07-25 13:40:59+00:00",
//             "visible": true,
//             "is_locked": false,
//             "blueprint_id": 68,
//             "user_id": 1337,
//             "shop_id": 1337,
//             "print_provider_id": 9,
//             "print_areas": [
//                 {
//                     "variant_ids": [
//                         33719
//                     ],
//                     "placeholders": [
//                         {
//                             "position": "front",
//                             "images": [
//                                 {
//                                     "id": "5c7665205342af161e1cb26e",
//                                     "name": "Test.png",
//                                     "type": "image/png",
//                                     "height": 5850,
//                                     "width": 4350,
//                                     "x": 0.5,
//                                     "y": 0.5,
//                                     "scale": 1.01,
//                                     "angle": 0
//                                 }
//                             ]
//                         }
//                     ],
//                     "background": "#ffffff"
//                 }
//             ],
//             "sales_channel_properties": []    
//         }
//     ],
//     "first_page_url": "/?page=1",
//     "from": 1,
//     "last_page": 22,
//     "last_page_url": "/?page=22",
//     "next_page_url": "/?page=2",
//     "path": "/",
//     "per_page": 1,
//     "prev_page_url": null,
//     "to": 1,
//     "total": 22
// }



</script> -->