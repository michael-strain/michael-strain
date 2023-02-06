<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Desperately need a loading screen while Blueprints are fetched -->

  <!-- Blueprint ID Gallery -->
  <div>
    <!-- <div
      v-for="(item, blueprint) in blueprints"
      :key="blueprint"
      class="flex items-center align-center justify-center"
    > -->
    <!-- <div
      v-for="i in 12"
      :key="i"
      class="flex items-center align-center justify-center"
    >
      <v-card
        class="bg-white w-80 text-wrap rounded-xl border flex m-5 p-2"
      >
        <NuxtLink
          :to="`/product/create?blueprintId=${store.blueprintData[i].id}`"
        >
          <img
            :src="`${store.blueprintData[i].images[store.blueprintData[i].imageNum]}`"                  
            class="h-64 mx-auto"
          >
        </NuxtLink>

        <v-card-title
          class="bg-surface text-wrap max-width-full justify-center text-center align-center"
        >
          <p
            :style="{fontFamily: 'Roboto Slab'}"
            class="text-wrap text-2xl"
          >
            {{ store.blueprintData[i].title }}
          </p>
        </v-card-title>
        
        <div
          class="bg-surface d-flex items-center justify-center text-center align-center m-0"
        >
          <v-card>
            <v-btn
              icon
              @click="leftArrow(store.blueprintData[i])"
            >
              <v-icon
                icon="mdi-chevron-left"
              />
            </v-btn>

            <NuxtLink
              :to="`/product/create?blueprintId=${store.blueprintData[i].id}`"
            >
              <v-btn
                icon
                transition="fade-transition"
              >
                <v-icon
                  icon="'mdi-cards-heart'"
                />
              </v-btn>
            </NuxtLink>
            <v-btn
              icon
              @click="rightArrow(store.blueprintData[i])"
            >
              <v-icon
                icon="mdi-chevron-right"
              />
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </div> -->


    <div v-if="loaded">
      <!-- <p>{{ blueprints }}</p> -->
      <RecycleScroller
        page-mode
        :items="blueprints"
        :item-size="60"
        :buffer="2000"
        key-field="id"
        v-slot="{ item }"
        class="scroller"
      >
        <!-- :item="{item}"
          :active="active"
          :size-dependencies="[item.id]"
          :data-index="index"
        > -->
        <v-card
          class="bg-white text-wrap rounded-xl border flex m-5 p-5 flex flex-wrap justify-center align-center"
        >
          <NuxtLink
            :to="`/admin/product/create/${item.id}`"
          >
            <img
              :src="`${item.images[item.imageNum]}`"                  
              class="h-64 mx-auto"
            >
          </NuxtLink>
          
          <!-- <v-card class="bg-transparent">
            <p
              :style="{fontFamily: 'Roboto Slab'}"
              class="text-green-400 pr-4 pb-4 text-3xl float-right"
            >
              {{ formatter.format((item.variants[0].price)/100) }}
            </p>
          </v-card> -->

          <v-card-title
            class="bg-surface text-wrap max-width-full justify-center text-center align-center"
          >
            <p
              :style="{fontFamily: 'Roboto Slab'}"
              class="text-wrap text-2xl"
            >
              {{ item.title }}
            </p>
          </v-card-title>
          
          <div
            class="bg-surface d-flex items-center justify-center text-center align-center m-0"
          >
            <v-card-actions>
              <v-btn
                icon
                @click="leftArrow(item)"
              >
                <v-icon
                  icon="mdi-chevron-left"
                />
              </v-btn>

              <!-- TODO -->
              <!-- Need to add a function to immediately add this item to the cart -->
              <NuxtLink
                :to="`/admin/product/create/${item.id}`"
              >
                <v-btn
                  icon
                  transition="fade-transition"
                >
                  <v-icon
                    icon="'mdi-cards-heart'"
                  />
                </v-btn>
              </NuxtLink>
              <v-btn
                icon
                @click="rightArrow(item)"
              >
                <v-icon
                  icon="mdi-chevron-right"
                />
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </RecycleScroller>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useBlueprintDataStore } from '~/stores/blueprintData';
  import { storeToRefs } from 'pinia'
  import { RecycleScroller, DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
  
  // app.component('RecycleScroller', RecycleScroller)

  const blueprints = ref([])
  // const item = ref({})
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
      console.log("Fetching blueprints from Printify API")
      const bpData = await $fetch('/api/printify/blueprints', { method: 'GET' })
      
      for (let i = 0; i < bpData.length; i++) {
        console.log("Adding imageNum to blueprintData: " + bpData[i].id)
        bpData[i].imageNum = 0
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
    imageId-=1
  } else {
    imageId = item.images.length
  }
  //patch the store with the new image number
  const store = useBlueprintDataStore()
  for (let i = 0; i < store.length; i++) {
    if (store[i].id == item.id) {
      store.$patch( store[i].imageNum = imageId )
      blueprints.value = storeToRefs(store)
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
  const store = useBlueprintDataStore()
  for (let i = 0; i < store.length; i++) {
    if (store[i].id == item.id) {
      store.$patch( store[i].imageNum = imageId )
      blueprints.value = storeToRefs(store)
    }
  }
}




  //Display them in-grid
  //Clicking on a blueprint will open a modal with the blueprint, showing details including the blueprintId
  //Clicking on the blueprintId will copy it to the clipboard (Or create a new product of this ID by redirecting users to the create page, prefilling the blueprintId field)

  //Blueprints will be displayed in grid, with a max of 4 per row
  //Blueprints will be displayed in a 1:1 aspect ratio
  //Blueprints will be displayed with a border
  //Blueprints will be displayed with a shadow
  //Blueprints will be displayed with a border-radius of 5px
  //Blueprints will be displayed with a margin of 10px
  //Blueprints will be displayed with a padding of 10px
  //Blueprints will be displayed with a background color of #fff
  //Blueprints will be displayed with a text color of #000
  //Blueprints will be displayed with a font size of 16px
  //Blueprints will be displayed with a font family of "Roboto", sans-serif
  //Blueprints will be displayed with a font weight of 400
  //Blueprints will be displayed with a text-align of center
  //Blueprints will be displayed with a cursor of pointer
  //Blueprints will be displayed with a transition of all 0.2s ease-in-out
  //Blueprints will be displayed with a hover background color of #eee
  //Blueprints will be displayed with a hover text color of #000
  //Blueprints will be displayed with a hover border color of #000
  //Blueprints will be displayed with a hover box-shadow of 0 0 10px rgba(0,0,0,0.2)
  //Blueprints will be displayed with a hover transform of scale(1.05)
  //Blueprints will be displayed with a hover transition of all 0.2s ease-in-out
  //Blueprints will be displayed with a active background color of #ddd
  //Blueprints will be displayed with a active text color of #000
  //Blueprints will be displayed with a active border color of #000
  //Blueprints will be displayed with a active box-shadow of 0 0 10px rgba(0,0,0,0.2)
  //Blueprints will be displayed with a active transform of scale(1.05)
  //Blueprints will be displayed with a active transition of all 0.2s ease-in-out
  //Blueprints will be displayed with a focus background color of #ddd
  //Blueprints will be displayed with a focus text color of #000
  //Blueprints will be displayed with a focus border color of #000
  //Blueprints will be displayed with a focus box-shadow of 0 0 10px rgba(0,0,0,0.2)
  //Blueprints will be displayed with a focus transform of scale(1.05)
  //Blueprints will be displayed with a focus transition of all 0.2s ease-in-out
  //Blueprints will be displayed with a active outline of none
  //Blueprints will be displayed with a focus outline of none
  //Blueprints will be displayed with a active outline-offset of none
  //Blueprints will be displayed with a focus outline-offset of none
  //Blueprints will be displayed with a active outline-style of none
  //Blueprints will be displayed with a focus outline-style of none
  //Blueprints will be displayed with a active outline-width of none
  //Blueprints will be displayed with a focus outline-width of none
  //Blueprints will be displayed with a active outline-color of none
  //Blueprints will be displayed with a focus outline-color of none
  //Blueprints will be displayed with a active outline-radius of none
  //Blueprints will be displayed with a focus outline-radius of none





</script>

<style scoped>
.scroller {
  height: 100%;
}
</style>