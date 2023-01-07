<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <v-container>
      <h3 class="justify-center text-center align-center font-bold text-5xl mb-10" :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}">
        SHOP
      </h3>
      
      <!--Quick Links-->
      <ul class="text-green-400 m-5 text-lg flex flex-wrap justify-center text-center align-center text-lg" :style="{fontFamily: 'Roboto Slab'}">
        <li class="m-3 hover:text-green-600"><a href="http://localhost:3000/">PUZZLES</a></li>
        <li class="m-3 hover:text-green-600"><a href="http://localhost:3000/">TOWELS</a></li>
        <li class="m-3 hover:text-green-600"><a href="http://localhost:3000/">CUPS</a></li>
        
      </ul>

      <!-- <div class="bg-gray-100 rounded-xl shadow-md p-10 border">
          <v-card-title class="justify-center text-center align-center">
            <h5 class="font-bold text-4xl">Puzzles</h5>
          </v-card-title>
          <h3 class="justify-center text-center align-center">Glossy puzzles that come in four sizes: 110, 252, 500, and 1014 pieces.</h3>
        </div> -->

      <div class="flex flex-wrap items-center align-center justify-center">
        <!--Beginfirstcard-->
        <v-card class="rounded-xl border shadow-md flex-1 m-5 min-w-xs">
          <img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            class="w-fit"
          >
          <v-card-title class="bg-gray-100 text-h5 justify-center text-center align-center">
            <p :style="{fontFamily: 'Roboto Slab'}">Fuck</p> 
          </v-card-title>
          <div class="bg-gray-100 d-flex items-center justify-center text-center align-center m-0">
            <v-card-actions>
              <v-btn
                icon
                @click="leftArrow"
              >
                <v-icon icon="mdi-chevron-left" />
              </v-btn>
              <v-btn
                icon
                @click="show = !show; heartClick()"
              >
                <v-icon>{{ show ? 'mdi-cards-heart-outline' : 'mdi-cards-heart' }}</v-icon>
              </v-btn>
              <v-btn
                icon
                @click="rightArrow"
              >
                <v-icon icon="mdi-chevron-right" />
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
        <!-- End first card-->

        <!-- Begin Second card-->
        <v-card class="rounded-xl flex-1 m-5 min-w-xs">
          <img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            class="w-full"
          >
          <v-card-title class="bg-gray-100 text-h5 justify-center text-center align-center">
            Fuck 
          </v-card-title>
          <div class="bg-gray-100 d-flex items-center justify-center text-center align-center m-0">
            <v-card-actions>
              <v-btn
                icon
                @click="leftArrow"
              >
                <v-icon icon="mdi-chevron-left" />
              </v-btn>
              <v-btn
                icon
                @click="show = !show; heartClick()"
              >
                <v-icon>{{ show ? 'mdi-cards-heart-outline' : 'mdi-cards-heart' }}</v-icon>
              </v-btn>
              <v-btn
                icon
                @click="rightArrow"
              >
                <v-icon icon="mdi-chevron-right" />
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
        <!--End second card-->

        <!-- Begin third card -->
        <v-card class="rounded-xl flex-1 m-5 min-w-xs">
          <img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            class="w-full"
          >
          <v-card-title class="bg-gray-100 text-h5 justify-center text-center align-center">
            Fuck 
          </v-card-title>
          <div class="bg-gray-100 d-flex items-center justify-center text-center align-center m-0">
            <v-card-actions>
              <v-btn
                icon
                @click="leftArrow"
              >
                <v-icon icon="mdi-chevron-left" />
              </v-btn>
              <v-btn
                icon
                @click="show = !show; heartClick()"
              >
                <v-icon>{{ show ? 'mdi-cards-heart-outline' : 'mdi-cards-heart' }}</v-icon>
              </v-btn>
              <v-btn
                icon
                @click="rightArrow"
              >
                <v-icon icon="mdi-chevron-right" />
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
        <!--End third card-->
      </div> <!-- End of First Row-->
    </v-container>
  </div>
</template>


<script setup>
import {ref} from 'vue'
// This will work in both `<script setup>` and `<script>`
// definePageMeta({
//   layout: "shop",
// });

const products = ref([
  {
    uuid: 'test-test-test-test-00001',
    name: 'Test Product 1',
    description: 'This is an example of a product (1)',
    price: 1.01,
    photoUrl: '/img/gold-at-the-end-of-the-rainbow.jpg'

  }
])

function heartClick(){
  console.log("Heart was clicked")
}

function leftArrow(){
  console.log("Left arrow clicked")
}

function rightArrow(){
  console.log("Right arrow clicked")
}

const show = ref(true)



</script>