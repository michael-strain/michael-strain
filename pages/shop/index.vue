<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <v-container>
      <h3 class="justify-center text-center align-center font-bold text-5xl mb-10">PAGE NAME</h3>
      
      <!--Quick Links-->
      <ul class="flex flex-wrap justify-center text-center align-center text-lg m-10">
        <li>Puzzles</li>
        <li>Cups</li>
        <li>Towels</li>
      </ul>


      <div class="flex flex-wrap items-center align-center justify-center">
        <!--Beginfirstcard-->
        <v-card class="flex-1 m-5 min-w-xs">
          <img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            class="w-full"
          >
          <v-card-title class="text-h5 justify-center text-center align-center">
            Fuck 
          </v-card-title>
          <div class="d-flex items-center justify-center text-center align-center m-0">
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
        <v-card class="flex-1 m-5 min-w-xs">
          <img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            class="w-full"
          >
          <v-card-title class="text-h5 justify-center text-center align-center">
            Fuck 
          </v-card-title>
          <div class="d-flex items-center justify-center text-center align-center m-0">
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
        <!--<v-card class="flex-grow m-5 max-w-sm sm:max-w-xs"></v-card>-->
        <v-card class="flex-1 m-5 min-w-xs">
          <img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            class="w-full"
          >
          <v-card-title class="text-h5 justify-center text-center align-center">
            Fuck 
          </v-card-title>
          <div class="d-flex items-center justify-center text-center align-center m-0">
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