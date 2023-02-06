<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!--To Do: Tabs, Hover, Cards, Carousels
  
  Section One:
    Carosal background. Can this be done with a paralax as well?
    Name of dish somewhere on the carosal image.

  Section Two: 
    If adding images for each dish, use hover > transations for layout.
    Add icon to bottom right corner of card for special information.
    Try using tabs for the different categories with grow prop.
    Try replacing divs with cards.  
    Fix that the grid system is not sliding like first card. Uses v-window-item.

-->
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
  <v-card>
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
      > -->
    
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
            <v-card-title class="text-h5">Item Type</v-card-title>
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
        
        <!-- <v-card
              color="basil"
              flat
            >
              <v-card-text>{{ text }}</v-card-text>
            </v-card> -->
      </v-hover>
    </div>
    <!-- </v-window-item>
    </v-window> -->
  </v-card>

  <!--CONTAINER CARDS-->

  <v-card>
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
  </v-card>
</template>

<script setup>
  import { ref, onMounted } from "vue"

  // List all our form variables as const name = ref(datatype)
  const blueprintId = ref()
  const route = useRoute()
  
  onMounted(async() => {
    if (route.params.blueprintId)
      blueprintId.value = route.params.blueprintId
  })



</script>

<!--SCRIPT-->
<script>

//This is all bad, needs to be done with Composition API in a setup script

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
</script>