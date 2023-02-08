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
          <NuxtLink :to="'/admin/product/create/'+ item.id">
            <img
              :src="item.images[item.imageNum]"                  
              class="h-64 mx-auto"
            >
          </NuxtLink>

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
                </v-btn>
              </NuxtLink>
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
      
      for (let i = 0; i < bpData.length; i++) {
        // console.log("Adding imageNum to blueprintData: " + bpData.blueprintData[i].id)
        bpData.blueprintData[i].imageNum = 0
      }
      store.$patch({ blueprintData: bpData })
      blueprints.value = store.blueprintData
      loaded.value = true
    }
  })


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
</script>