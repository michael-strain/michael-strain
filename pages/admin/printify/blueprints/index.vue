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
                :src="img"
                lazy-src="/img/blueprint.png"
                cover
              />
            </NuxtLink>
          </v-carousel>
          <v-card-title class="bg-surface text-wrap max-width-full justify-center text-center align-center">
            <p
              :style="{fontFamily: 'Roboto Slab'}"
              class="text-wrap text-2xl"
            >
              <pre>{{ item.title }}</pre>
            </p>
          </v-card-title>

          <!-- This is not ready yet -->
          <v-card-subtitle class="text-wrap max-width-full justify-center text-center align-center">
            <p
              :style="{fontFamily: 'Roboto Slab'}"
              class="text-wrap text-2xl"
            >
              {{ item.variants[item.variantNum].title }}
            </p>

            <!-- Need to have the ability to cycle costs by country -->
            <!-- <p>Cost: ${{ formatter.format((item.variants[item.variantNum].cost)/100) }}</p> -->
            <p>First Item Cost: {{ formatter.format((item.variants[item.variantNum].shippingProfiles[item.currentShippingProfile].first_item.cost)/100) }} </p>
            <p>Additional Item Cost: {{ formatter.format((item.variants[item.variantNum].shippingProfiles[item.currentShippingProfile].additional_items.cost)/100) }}</p>
            <!-- <p>First Item Cost: {{ formatter.format((item.variants[item.variantNum].shippingProfiles[item.variants[item.variantNum].shippingProfiles.findIndex((element, index, array)=>{ array.includes(item.currentCountryName) })].first_item.cost)/100) }}</p> -->
            <!-- <p>Publicly Displayed Price: ${{ formatter.format((item.variants[item.variantNum].cost + item.variants[item.variantNum].shippingProfiles[0].first_item.cost)) }}</p> -->
            <!-- <p>Additional Item Cost: {{ formatter.format((item.variants[item.variantNum].shippingProfiles[item.variants[item.variantNum].shippingProfiles.findIndex((element, index, array)=>{ array.includes(item.currentCountryName) })].additional_items.cost)/100) }}</p> -->
            <!-- <p>Costs * 25%: ${{ formatter.format(((item.variants[item.variantNum].cost + item.variants[item.variantNum].shippingProfiles[0].first_item.cost)*0.25)/100) }}</p> -->
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
                  VID: {{ item.variants[item.variantNum].id }}
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

          <!-- NEW : Cycling through shipping profiles using the countries available in shipping profiles -->

          <!-- Need to revamp again to use a country select function instead of arrows -->
          <div class="bg-surface d-flex items-center justify-center text-center align-center m-0">
            <v-card-actions>
              <v-btn
                v-if="item.variants.length>1"
                icon
                @click="leftCountryArrow(item)"
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
                  {{ item.currentCountryName }}
                </v-btn>
              </NuxtLink>
              <v-btn
                v-if="item.variants.length>1"
                icon
                @click="rightCountryArrow(item)"
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
      <div>
        Page:
        <v-icon icon="mdi-chevron-left" @click="pageDecrement" />
        {{ page }}
        <v-icon icon="mdi-chevron-right" @click="pageIncrement" />
      </div>
      
      <div>
        Limit:
        <v-icon icon="mdi-chevron-left" @click="limitDecrement" />
        {{ limit }}
        <v-icon icon="mdi-chevron-right" @click="limitIncrement" />
      </div>
    </div> 
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useBlueprintDataStore } from '~/stores/blueprintData'
  // import { useRawBlueprintDataStore } from '~/stores/rawBlueprintData'
  import { getQuery } from 'h3'

  const blueprints = ref()
  const loaded = ref(false)
  let bpData = []

  const store = useBlueprintDataStore()

  const page=ref(1)
  const limit=ref(1)

  //Call API to get all blueprints
  onMounted(async() => {
    const store = useBlueprintDataStore()
    if(store.blueprintData.length > page.value*limit.value){
      console.log("Blueprints already loaded")
      blueprints.value = store.blueprintData
      loaded.value = true
      // blueprints.value = storeToRefs(store.blueprintData)
    }
    else {
      console.log("Fetching blueprints from Printify API")
      await addData()
    }
    watch(() => queryString.value, async () => await addData() );
  })

  const addData = async () => {

    bpData = await $fetch(`/api/printify/blueprints${queryString.value}`, { method: 'GET' })

    let storeDataCount = 0
    for (let i = 0; i < store.blueprintData.length; i++) {
      // for each blueprint in datastore, add it to the array
      bpData[i] = store.blueprintData[i]
      storeDataCount++
    }

    console.log(bpData)

    for (let i = 0; i < bpData.length; i++) {
      //for each item returned by query, 
      // console.log("Adding imageNum to blueprintData: " + bpData.blueprintData[i].id)
      bpData[i].variantNum = 0
      bpData[i].currentCountry = 0 //should find the index of the user's country in the total list of country names present (or default to the index for REST OF WORLD)
      bpData[i].currentCountryName = 'US' //should use userdata.country
      bpData[i].currentShippingProfile = 0 //should set to the index of the shipping profile that matches the user's country (or default to the index for REST OF WORLD)
    }
    store.$patch({blueprintData: bpData})
    blueprints.value = store.blueprintData
    loaded.value = true
  }

  const queryString = computed(() => {
    let values = '?page=' + page.value + '&limit=' + limit.value
    return values
  })

  // const { data:bpData, pending, refresh } = useLazyAsyncData('bpData', ()=> $fetch("/api/printify/blueprints" + queryString.value, { method: 'GET' }))

  async function getNewBlueprints(){
    bpData = await $fetch("/api/printify/blueprints" + queryString.value, { method: 'GET' })
    return bpData
  }

  

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
    if (store.blueprintData.length > 0) {
      for (let i = 0; i < store.blueprintData.length; i++) {
        if (store.blueprintData[i].id === item.id) {
          store.$patch( store.blueprintData[i].imageNum = imageId )
          blueprints.value = store.blueprintData
          return
        }
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
    if (store.blueprintData.length > 0) {
      for (let i = 0; i < store.blueprintData.length; i++) {
        if (store.blueprintData[i].id == item.id) {
          store.$patch( store.blueprintData[i].imageNum = imageId )
          blueprints.value = store.blueprintData
          return
        }
      }
    }
  }


  // I Don't think these are ready yet either
  // const itemPrice = function(variant) {
  //   // const cart = useCartDataStore()
  //   const user = useUserDataStore()
  //   let sProfile = false

  //   console.log("Searching for itemPrice: " + variant.id)
  //   console.log(variant)

  //   // is this running correctly?
  //   // console.log("Profiles: " + variant.shippingProfile[0])
  //   for (let i = 0; i < variant.shippingProfile.length ; i++) {
  //     // console.log(variant.shippingProfile[i].countries)
  //     // console.log(user.userData[0].country)
  //     let countryList = []
  //     countryList = variant.shippingProfile[i].countries
  //     for (let j = 0; j < countryList.length; j++) {
  //       if (countryList[j] == user.userData[0].country) {
  //         sProfile = variant.shippingProfile[i]
  //         variant.itemCost = variant.cost + sProfile.first_item.cost + (variant.cost * 0.25) + 100
  //       }
  //     }
  //   }
  //   if (!sProfile) {
  //     for (let i=0; variant.shippingProfile.length; i++) {
  //       for (let j=0; variant.shippingProfile[i].countries.length; j++){
  //         if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
  //           sProfile = variant.shippingProfile[i]
  //           variant.itemCost = variant.cost + sProfile.first_item.cost + (variant.cost * 0.25) + 100
  //           // console.log("Shipping Profile: " + sProfile)
  //         }
  //       }
  //     }
  //   }
  //   console.log("Item Price: " + variant.itemCost + " for variant: " + variant.id)
  //   return variant.itemCost 
  // }

  // const itemShippingPrice = function(variant) {
  // const user = useUserDataStore()
  // let sProfile = false

  // // is this running correctly?
  // // console.log("Profiles: " + variant.shippingProfile[0])
  // for (let i = 0; i < variant.shippingProfile.length ; i++) {
  //   for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
  //     if (variant.shippingProfile[i].countries[j] == user.userData[0].country) {
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

  function leftCountryArrow(item){
    // Cycle through item variants
    const store = useBlueprintDataStore()
    let variantId = item.variantNum
    let country = item.currentCountry
    let countryNames = []
    let currShippingProfile = 0

    if (country>0) {
      country--
      //need to find our shipping profile
      for (let i = 0; i < item.variants[variantId].shippingProfiles.length; i++) {
        for (let j = 0; j < item.variants[variantId].shippingProfiles[i].countries.length; j++) {
          countryNames.push(item.variants[variantId].shippingProfiles[i].countries[j])
          // if (item.variants[variantId].shippingProfiles[i].countries[j] == item.currentCountryName) {
          //   currShippingProfile = i-1
          // }
        }
      }
    } else {
      if(item.variants[variantId].shippingProfiles.length>0){
        //count all the countries in all the shipping profiles
        let countryCount = 0
        for (let i = 0; i < item.variants[variantId].shippingProfiles.length; i++) {
          countryCount += item.variants[variantId].shippingProfiles[i].countries.length
          // console.log("I'm at " + i + " and there are " + countryCount + " countries")
          for (let j = 0; j < item.variants[variantId].shippingProfiles[i].countries.length; j++) {
            countryNames.push(item.variants[variantId].shippingProfiles[i].countries[j])
            // if (item.variants[variantId].shippingProfiles[i].countries[j] == item.currentCountryName) {
            //   currShippingProfile = i-1
            // }
          }
        }
        country = countryCount-1 // Select the last country
        // currShippingProfile = item.variants[variantId].shippingProfiles.length-1
      }
    }

    const countryName = countryNames[country]

    for (let i = 0; i < item.variants[variantId].shippingProfiles.length; i++) {
      for (let j = 0; j < item.variants[variantId].shippingProfiles[i].countries.length; j++) {
        if (item.variants[variantId].shippingProfiles[i].countries[j] == countryName) {
          currShippingProfile = i
        }
      }
    }

    for (let i = 0; i < store.blueprintData.length; i++) {
      if (store.blueprintData[i].id === item.id) {
        store.$patch( store.blueprintData[i].currentShippingProfile=currShippingProfile)
        store.$patch( store.blueprintData[i].currentCountryName=countryName)
        store.$patch( store.blueprintData[i].currentCountry=country )
        blueprints.value = store.blueprintData
        return
      }
    }
  }

  function rightCountryArrow(item) {
    const store = useBlueprintDataStore()
    let variantId = item.variantNum
    let country = item.currentCountry
    let countryNames = []
    let currShippingProfile = 0
    let countryCount = 0

    if(item.variants[variantId].shippingProfiles.length>0){
      //count all the countries in all the shipping profiles
      for (let i = 0; i < item.variants[variantId].shippingProfiles.length; i++) {
        countryCount += item.variants[variantId].shippingProfiles[i].countries.length
        // console.log("I'm at " + i + " and there are " + countryCount + " countries")
        for (let j = 0; j < item.variants[variantId].shippingProfiles[i].countries.length; j++) {
          countryNames.push(item.variants[variantId].shippingProfiles[i].countries[j])
        }
      }
    }

    if (country<countryCount-1) {
      country++
    } else {
      country = 0
    }

    //set shippingProfile based on country
    for (let i = 0; i < item.variants[variantId].shippingProfiles.length; i++) {
      for (let j = 0; j < item.variants[variantId].shippingProfiles[i].countries.length; j++) {
        if (item.variants[variantId].shippingProfiles[i].countries[j] == countryNames[country]) {
          currShippingProfile = i
        }
      }
    }

    const countryName = countryNames[country]

    for (let i = 0; i < store.blueprintData.length; i++) {
      if (store.blueprintData[i].id === item.id) {
        store.$patch( store.blueprintData[i].currentShippingProfile=currShippingProfile)
        store.$patch( store.blueprintData[i].currentCountryName=countryName)
        store.$patch( store.blueprintData[i].currentCountry=country )
        blueprints.value = store.blueprintData
        return
      }
    }
  }

  function leftVariantArrow(item){
    const store = useBlueprintDataStore()
    let variantId = item.variantNum

    if (variantId>0) {
      variantId--
    } else {
      variantId = item.variants.length-1
    }
    for (let i = 0; i < store.blueprintData.length; i++) {
      if (store.blueprintData[i].id === item.id) {
        store.$patch( store.blueprintData[i].variantNum=variantId )
        blueprints.value = store.blueprintData
        return
      }
    }
  }

  function rightVariantArrow(item){
    // Cycle through item variants
    const store = useBlueprintDataStore()
    let variantId = item.variantNum
    if (variantId<item.variants.length-1) {
      variantId++
    } else {
      variantId = 0
    }
    for (let i = 0; i < store.blueprintData.length; i++) {
      if (store.blueprintData[i].id === item.id) {
        store.$patch( store.blueprintData[i].variantNum=variantId )
        blueprints.value = store.blueprintData
        return
      }
    }
  }

  function pageDecrement(){
    if (page.value>1) {
      page.value--
    } else {
      page.value = 1
    }
  }

  function pageIncrement(){
    // if (page.value<Math.ceil(totalBlueprints/limit.value)) {
    page.value++
  }

  function limitDecrement(){
    switch (limit.value) {
      case 1:
        limit.value = 1
        break;
      case 5:
        limit.value = 1
        break;
      case 10:
        limit.value = 5
        break;
      case 20:
        limit.value = 10
        break;
    }
  }

  function limitIncrement(){
    switch (limit.value) {
      case 1:
        limit.value = 5
        break;
      case 5:
        limit.value = 10
        break;
      case 10:
        limit.value = 20
        break;
      case 20:
        limit.value = 20
        break;
    }
  }

</script>