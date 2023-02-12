<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div 
      v-if="loaded"
      class="flex flex-wrap items-center align-center justify-center w-full"
    >
      <div
        v-for="(item, blueprint) in blueprints"
        :key="blueprint"
        class="flex items-center align-center justify-center"
        lazy
      >
        <v-card class="bg-white w-80 text-wrap rounded-xl border flex m-5 p-2">
          <v-carousel>
            <NuxtLink :to="'/admin/product/create/'+item.id">
              <v-carousel-item
                v-for="(img, i) in item.images"
                :key="i"
                :src="img.src"
                :lazy-src="img.src"
                :alt="img.alt"
                cover
              />
            </NuxtLink>
          </v-carousel>
          <!-- <NuxtLink :to="'/admin/product/create/'+ item.id">
            <img
              :src="item.images[item.imageNum]"                  
              class="h-64 mx-auto"
            >
          </NuxtLink> -->

          <v-card-title class="bg-surface text-wrap max-width-full justify-center text-center align-center">
            <p
              :style="{fontFamily: 'Roboto Slab'}"
              class="text-wrap text-2xl"
            >
              {{ item.title }}
            </p>
          </v-card-title>
          <v-card-subtitle class="text-wrap max-width-full justify-center text-center align-center">
            <p
              :style="{fontFamily: 'Roboto Slab'}"
              class="text-wrap text-2xl"
            >
              {{ item.variants[item.variantNum].title }}
            </p>
            <p>Cost: ${{ formatter.format((item.variants[item.variantNum].cost)/100) }}</p>
            <p>First Item Cost: ${{ formatter.format((item.variants[item.variantNum].shippingProfiles[0].first_item.cost)) }}</p>
            <p>Publicly Displayed Price: ${{ formatter.format((item.variants[item.variantNum].cost + item.variants[item.variantNum].shippingProfiles[0].first_item.cost)) }}</p>
            <p>Additional Item Cost: ${{ formatter.format((item.variants[item.variantNum].shippingProfiles[0].additional_item.cost)) }}</p>
            <p>Costs * 25%: ${{ formatter.format(((item.variants[item.variantNum].cost + item.variants[item.variantNum].shippingProfiles[0].first_item.cost)*0.25)/100) }}</p>
          </v-card-subtitle>
            
          <div class="bg-surface d-flex items-center justify-center text-center align-center m-0">
            <v-card-actions>
              <v-btn
                v-if="item.variants.length>1"
                icon
                @click="leftVariantArrow(item)"
              >
                <v-icon icon="mdi-chevron-left" />
              </v-btn>

              <!-- <v-btn
                icon
                transition="fade-transition"
                @click="heartClick(item)"
              >
                <v-icon :icon="heartIcon(item)" />
              </v-btn> -->
              <NuxtLink :to="'/admin/product/create/'+ item.id">
                <v-btn>
                  BID: {{ item.id }}
                  VID: {{ variant.id }}
                </v-btn>
              </NuxtLink>
              <v-btn
                v-if="item.variants.length>1"
                icon
                @click="rightVariantArrow(item)"
              >
                <v-icon icon="mdi-chevron-right" />
              </v-btn>
            </v-card-actions>
            <!-- <v-card-subtitle class="text-wrap max-width-full justify-center text-center align-center">
              <p
                :style="{fontFamily: 'Roboto Slab'}"
                class="text-wrap text-2xl"
              >
                {{ item.variants[item.variantNum].title }}
              </p>
              <p>${{ formatter.format() }}</p> -->
          </div>
        </v-card>
      </div> 
    </div> 
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useBlueprintDataStore } from '~/stores/blueprintData';

  const blueprints = ref()
  const loaded = ref(false)

  //Call API to get all blueprints
  onMounted(async() => {
    const store = useBlueprintDataStore()
    if(store.blueprintData.length > 0){
      console.log("Blueprints already loaded")
      blueprints.value = store.blueprintData
      loaded.value = true
      // blueprints.value = storeToRefs(store.blueprintData)
    }
    else {
      // console.log("Fetching blueprints from Printify API")
      const bpData = await $fetch('/api/printify/blueprints', { method: 'GET' })

      console.log(bpData)
      
      for (let i = 0; i < bpData.length; i++) {
        // console.log("Adding imageNum to blueprintData: " + bpData.blueprintData[i].id)
        bpData[i].variantNum = "0"
      }
      store.$patch({ blueprintData: bpData })
      blueprints.value = store.blueprintData
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


  function leftArrow(item){
    // get current image number
    let imageId = item.imageNum
    if (imageId>0) {
      imageId--
    } else {
      imageId = item.images.length-1
    }
    //patch the store with the new image number
    const store = useBlueprintDataStore()
    for (let i = 0; i < store.blueprintData.length; i++) {
      if (store.blueprintData[i].id === item.id) {
        store.$patch( store.blueprintData[i].imageNum = imageId )
        blueprints.value = store.blueprintData
        return
      }
    }
  }

  function rightArrow(item){
    let imageId = item.imageNum
    if (imageId==item.images.length-1) {
      imageId =0
    } else {
      imageId++
    }
    const store = useBlueprintDataStore()
    for (let i = 0; i < store.blueprintData.length; i++) {
      if (store.blueprintData[i].id == item.id) {
        store.$patch( store.blueprintData[i].imageNum = imageId )
        blueprints.value = store.blueprintData
        return
      }
    }
  }

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
          variant.itemCost = variant.cost + sProfile.first_item.cost + (variant.cost * 0.25) + 100
        }
      }
    }
    if (!sProfile) {
      for (let i=0; variant.shippingProfile.length; i++) {
        for (let j=0; variant.shippingProfile[i].countries.length; j++){
          if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
            sProfile = variant.shippingProfile[i]
            variant.itemCost = variant.cost + sProfile.first_item.cost + (variant.cost * 0.25) + 100
            // console.log("Shipping Profile: " + sProfile)
          }
        }
      }
    }
    return variant.itemCost 
  }

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
</script>