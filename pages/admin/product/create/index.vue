<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <!--To Do: 
    Add something for variables. Size, color, ect.
    Make text edit buttons float in description box.
    Add drop down for extra information.
    Alert pop-ups what pushing bottom buttons.
    Upload and select images.
    Blueprint ID field with a link to admin/printfy/blueprints.
    Print provider ID

    Use v-data-tables for your products list.
-->

  <v-form class="flex text-center align-middle items-center justify-center flex-shrink bg-white">
    <v-card class="w-full">
      <v-container class="bg-white">
        <!-- <h1 class="text-3xl my-10 text-center"> -->
        <h3
          class="justify-center text-center align-center font-bold text-5xl mt-5 mb-10"
          :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}"
        >
          Create New Product
        </h3>
        <!--FIRST ROW-->
        <v-row class="pt-5">
          <v-col
            cols="12"
            sm=""
            class=""
          >
            <v-text-field
              label="Product Title"
              placeholder="Product  Title"
              variant="outlined"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
            class="outlined"
          >
            <v-text-field
              label="Category"
              placeholder="Category"
              variant="outlined"
              class=""
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
            class=""
          >
            <v-text-field
              label="Blueprint ID"
              placeholder="Blueprint ID"
              variant="outlined"
              class=""
            >
              {{ blueprintId }}
            </v-text-field>
          </v-col>
        </v-row>

        <!--SECOND ROW - NEEDS LOVIN'-->
        <v-row class=" ">
          <v-col
            cols="12"
            sm=""
            class=""
          >
            <v-combobox
              v-model="select"
              :items="items"
              label="Tags"
              clearable
              multiple
              persistent-hint
              variant="outlined"
              chips
              transition="scale-transition"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
            class=""
          >
            <v-combobox
              v-model="select"
              :items="items"
              label="Print Provider"
              clearable
              
              persistent-hint
              variant="outlined"
              chips
              transition="scale-transition"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
            class=""
          >
            <v-btn-toggle
              v-model="formatting"
              multiple
              variant="outlined"
              divided
            >
              <v-btn>
                <v-icon icon="mdi-format-italic" />
              </v-btn>

              <v-btn>
                <v-icon icon="mdi-format-bold" />
              </v-btn>

              <v-btn>
                <v-icon icon="mdi-format-underline" />
              </v-btn>
            
              
              <v-btn>
                <v-icon icon="mdi-format-align-center" />
              </v-btn>

              <v-btn>
                <v-icon icon="mdi-format-align-left" />
              </v-btn>

              <v-btn>
                <v-icon icon="mdi-format-align-right" />
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        
        <!--DESCRIPTION-->
        <v-row class=" ">
          <v-col
            cols="12"
            class=""
          >
            <v-textarea
              label="Description"
              placeholder="Description"
              variant="outlined"
              auto-grow
              class=""
            />
          </v-col>
        </v-row>
        
        <!--PRICING-->
        <v-row class=" ">
          <v-col
            cols="12"
            sm=""
          >
            <!-- class="flex text-center align-middle items-center justify-center flex-shrink" -->
            <v-text-field
              label="Product Cost"
              placeholder="Product Cost"
              variant="outlined"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              label="Shipping Cost"
              placeholder="Shipping Cost"
              variant="outlined"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              label="Retail Price"
              placeholder="Retail Price"
              variant="outlined"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              label="Profit"
              placeholder="Profit"
              variant="outlined"
            />
          </v-col>
        </v-row>
        
        <!--  UPLOAD FILES-->
        <v-row>
          <v-col
            cols="12"
            sm=""
          >
            <!-- https://next.vuetifyjs.com/en/components/file-inputs/ -->

            <!-- <div class="w-full">
              <v-file-input
                chips
                multiple
                label="File input w/ chips"
                variant="outlined"
                @change="onFileChange"
              />
              <v-progress-circular
                v-if="fileUploading"
                indeterminate
              />
            </div> -->
            <FirebaseUpload />
          </v-col>
        </v-row>

        
        
        <!--BUTTONS-->
        <v-row class=" ">
          <v-col>
            <v-row class="flex text-center align-middle items-center justify-center">
              <div class="sm:flex align-middle items-center h-min">
                <v-col
                  cols="12"
                  sm=""
                >
                  <v-btn
                    class="align-middle items-center"
                    size="large"
                  >
                    <v-icon
                      icon="mdi-email"
                      class="mr-3"
                    />Save Draft
                  </v-btn>
                </v-col>
                
                <v-col
                  cols="12"
                  sm=""
                  class=""
                >
                  <v-btn
                    class="align-middle items-center"
                    size="large"
                  >
                    <v-icon
                      icon="mdi-email"
                      class="mr-3"
                    />Publish
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  sm=""
                >
                  <v-btn
                    class="align-middle items-center"
                    size="large"
                  >
                    <v-icon
                      icon="mdi-email"
                      class="mr-3"
                    />DELETE
                  </v-btn>
                </v-col>
              </div>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="pt-5">
          <v-col
            cols="12"
            sm=""
            class=""
          />
        </v-row>
        <v-row class="pt-5">
          <v-col
            v-if="doWeNeedDetails"
            cols="12"
            sm=""
            class="w-screen d-flex flex-wrap text-center align-middle items-center justify-center flex-shrink"
          >
            <v-text class="text-3xl">
              Product Details
            </v-text>
            <v-divider />
            <v-item-group
              multiple
              selected-class="bg-purple"
            >
              <div class="text-caption mb-2">
                Tags
              </div>
              <v-item
                v-for="n in 8"
                :key="n"
                v-slot="{ selectedClass, toggle }"
              >
                <v-chip
                  :class="selectedClass"
                  @click="toggle"
                >
                  Tag {{ n }}
                </v-chip>
              </v-item>
            </v-item-group>
            <!-- <v-card
              class="w-screen d-flex flex-wrap text-center items-center justify-center flex-shrink"
              color=""
              flat
              rounded="0"
              min-height=""
            >
              <v-text-field
                v-for="n in 10"
                :key="n"
                class="pa-2"
                variant="outlined"
                rounded="0"
              >
                Flex item
              </v-text-field>
            </v-card> -->
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-form>
  



  <!--CAROUSEL-->
  <!-- 
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->

  <!--TABS-->
  <!-- <v-card> -->
  <!-- <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2">
        MENU
      </h1>
    </v-card-title> -->

  <!--TABS NAV BAR-->
  <!-- <v-tabs
      v-model="tab"
      bg-color="transparent"
      color=""
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs> -->
  <!--HOVER-->
  <!-- <v-window v-model="tab">
      <v-window-item
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
      >
        <div>
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto"
              color="grey-lighten-4"
              max-width="600"
              v-bind="props"
            >
              <v-img
                :aspect-ratio="16/9"
                cover
                src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
              >
                <v-expand-x-transition>
                  <div 
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out backdrop-opacity-10 backdrop-invert bg-white/50 v-card--reveal text-h2 items-center align-center justify-center"
                    style="height: 100%;"
                  >
                    <v-btn
                      class="outlined raised"
                      color="primary"
                      size="x-large"
                    >
                      VIEW
                    </v-btn>
                  </div>
                </v-expand-x-transition>
              </v-img>

              <v-card-text class="pt-6 text-center">
                <h3 class="text-h4 text-primary mb-2">
                  Product Name
                </h3>

                <div class="text-h5 mb-2">
                  $10.00
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </div>
      </v-window-item>
    </v-window> -->
  <!-- </v-card> -->

  <!--CONTAINER CARDS-->
  <!-- <v-card>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="text-white align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ card.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card> -->
</template>

<!--SCRIPT-->
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const blueprintId = ref()
const select = ref([])
const items = ref([
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
])

// We could update this to true to print blueprint and print provider info after they are successfully fetched.
const doWeNeedDetails = ref(false)


onMounted(async() => {
  if (route.params.blueprintId) {
    blueprintId.value = route.params.blueprintId
  }
})

// Other worse way, but it definitely works
// import { getQuery } from "h3"

// // List all our form variables as const name = ref(datatype)
// const blueprintId = ref()

// onMounted(async() => {
//   if (getQuery().blueprintId) {
//     blueprintId.value = getQuery().blueprintId
//   } else {
//     blueprintId.value = ""
//   }
// })

// TODO
// on blueprintId.value change, fetch the appropriate print-provider and product info

</script>

<!-- <script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        tab: 'Appetizers',
        items: [
          'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },

      ],}
      }
  }
</script> -->