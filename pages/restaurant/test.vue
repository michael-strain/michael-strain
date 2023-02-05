<!-- eslint-disable vue/valid-template-root -->
<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/valid-template-root
<template>
  <!--To Do: 
-->
  <v-form class="flex text-center align-middle items-center justify-center flex-shrink">
    <v-card class="w-full m-15">
      <v-container class="">
        <!-- <h1 class="text-3xl my-10 text-center"> -->
        <h3
          class="justify-center text-center align-center font-bold text-5xl mt-5 mb-10"
          :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}"
        >
          Create New Product
        </h3>
        <v-row class="bg-custcard pt-5">
          <v-col
            cols="12"
            sm=""
            class=""
          >
            <v-text-field
              label="Product Title"
              placeholder="Product  Title"
              variant="solo"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              label="Category"
              placeholder="Category"
              variant="solo"
              class=""
            />
          </v-col>
        </v-row>

        <v-row class="bg-custcard">
          <v-col
            cols="12"
          >
            <v-textarea
              label="Description"
              placeholder="Description"
              variant="solo"
              auto-grow
            />
          </v-col>
        </v-row>

        <v-row class="bg-custcard">
          <v-col
            cols="12"
            sm=""
          >
            <!-- class="flex text-center align-middle items-center justify-center flex-shrink" -->
            <v-text-field
              label="Product Cost"
              placeholder="Product Cost"
              variant="solo"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              label="Shipping Cost"
              placeholder="Shipping Cost"
              variant="solo"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              label="Retail Price"
              placeholder="Retail Price"
              variant="solo"
            />
          </v-col>
        </v-row>
        
        <v-row class="bg-custcard">
          <v-col cols="12">
            <v-combobox
              v-model="select"
              :items="items"
              label="Tags"
              placeholder="Select Tags"
              multiple
              clearable
              variant="solo"
            />
          </v-col>
        </v-row>
        
        <v-row class="bg-custcard">
          <v-col>
            <v-row class="flex text-center align-middle items-center justify-center">
              <div class="sm:flex align-middle items-center h-min">
                <v-col
                  cols="12"
                  sm="6"
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
                  sm="6"
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
              </div>
            </v-row>
            
          </v-col>
        </v-row>
        
      </v-container>
    </v-card>
  </v-form>
  <v-card>
    <v-toolbar class="text-center">
      <v-toolbar-title>Create a New Product</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        variant="outlined"
        label="Product Name"
        model-value="Product Name"
      />

      <v-textarea
        variant="outlined"
        label="Text"
        model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
      />

      <v-divider class="my-2" />

      <!-- <v-item-group multiple selected-class="bg-purple">
        <div class="text-caption mb-2">Tags</div>
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
      </v-item-group> -->
    </v-card-text>

    <v-divider />

    
    <v-combobox
      v-model="model"
      v-model:search-input="search"
      :items="items"
      hide-selected
      label="Add some tags"
      multiple
      persistent-hint
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-combobox>
    <v-card-actions>
      <v-spacer />
      <v-btn
        class="outlined"
        color="primary"
        size=""
      >
        Save as Draft
      </v-btn>
      <v-btn
        class="outlined"
        color="primary"
        size=""
      >
        Publish
      </v-btn>
    </v-card-actions>
  </v-card>



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

<script>
  export default {
    data: () => ({
      items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
      model: ['Vuetify'],
      search: null,
    }),

    watch: {
      model (val) {
        if (val.length > 5) {
          this.$nextTick(() => this.model.pop())
        }
      },
    },
  }
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