<template>
  <div>
    <v-container>
      <div class="flex">
        <div
          class="flex-row flex-shrink"
        >
          <!--Beginfirstcard-->
          <v-card class="mx-auto flex">
            <img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" class="h-full m-0 p-0 contain">

            <v-card-title class="justify-center text-center align-center">
              Top western road trips
            </v-card-title>

            <!-- <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle> -->

            <div class="d-flex items-center justify-center text-center align-center m-0 pt-5">
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

            <v-expand-transition />
          </v-card>
          <!-- End first card-->

          <!-- Begin Second card-->
          <v-card class="mx-auto flex">
            <img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" class="h-full m-0 p-0 contain">

            <v-card-title class="justify-center text-center align-center">
              Top western road trips
            </v-card-title>

            <!-- <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle> -->

            <div class="d-flex items-center justify-center text-center align-center m-0 pt-5">
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

            <v-expand-transition />
          </v-card>
          <!--End second card-->

          <!-- Begin third card -->
          <v-card class="mx-auto flex">
            <img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" class="h-full m-0 p-0 contain">

            <v-card-title class="justify-center text-center align-center">
              Top western road trips
            </v-card-title>

            <!-- <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle> -->

            <div class="d-flex items-center justify-center text-center align-center m-0 pt-5">
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

            <v-expand-transition />
          </v-card>
          <!--End third card-->
        </div> <!-- End of First Row-->
      </div>
    </v-container>
  </div>
</template>

<script setup>
import {ref} from 'vue'
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "shop",
});

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