<!-- eslint-disable vue/multi-word-component-names -->

<!--To Do: 
  Section One: 
    Parallax spacing.

  Section Two:
    Make rows hold three items.
    Center Dish Name.
    Move icons to description.
    Make icon key gap left to right only. 

  Section Three:
    Change text size based on screen width.
    Format image size and position to something more adaptable.

-->
<template>
  <!--First Section-->
  <div class="bg-gradient-to-b from-green-200 to-blue-200 text-center">
    <!-- <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      class="filter backdrop-opacity-40 items-center align-middle h-100"
    > -->
    <v-row class="p-10 mx-10">
      <v-col
        cols=""
        sm=""
        class=""
      >
        <h1 class="text-h3 !font-bold sm:text-h3">
          Restaurant Example Header
        </h1>
        <p class="my-5 italic text-3xl">
          Relate your restaurant's story to its core values. Tell them what struggles you had to overcome, what you learned from it, and how it impacted your values.
        </p>
        <div class="flex flex-wrap items-center align-center justify-center text-2xl">
          <div class="flex mx-5">
            <v-icon
              class="mr-3"
              icon="mdi-candy-outline"
            />
            <p>Open Monday thru Saturday, 8AM - 10PM</p>
          </div>
          <div class="flex mx-5">
            <v-icon
              class="mr-3"
              icon="mdi-candy-outline"
            />
            <p>852 Maybell Street, Shitty City, State</p>
          </div>
          <div class="flex mx-5">
            <v-icon
              class="mr-3"
              icon="mdi-candy-outline"
            />
            <p>+507 - 963 - 1478</p>
          </div>
        </div>
      </v-col>
      <v-divider
        vertical
        class="p-5"
      />
              
      <v-col
        cols=""
        sm=""
        class="justify-center items-center flex outline"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" 
          class="bg-red-100 object-scale-down"
        >
    
        <!--Icon-->
        <!-- <v-icon
          size="300"
          color="white"
          icon="mdi-image-plus-outline"
          class="bg-rose-700"
        /> -->
      </v-col>
    </v-row>
    <!-- </v-parallax> -->
  </div>

  <!--Second Section-->
  <div class="outline py-10 px-10 grid bg-gradient-to-t from-red-200 to-blue-200 mx-auto text-center align-middle items-center justify-center">
    <!--Menu Category Breakfast-->
    <row class="outline">
      <v-col
        cols=""
        sm=""
        class="text-center"
      >
        <h1 class="text-h4 !font-bold sm:text-h3">
          BREAKFAST
        </h1>
        <p class="py-3">
          Breakfast is served with your choice of bacon, sausage, or hashbrowns.
        </p>
        <div class="gap-7 flex flex-wrap items-center align-center justify-center">
          <div class="flex">
            <v-icon
              class="mr-1"
              icon="mdi-candy-outline"
            />
            <p>Spicy</p>
          </div>
          <div class="flex">
            <v-icon
              class="mr-1"
              icon="mdi-candy-outline"
            />
            <p>Vegetarian</p>
          </div>
          <div class="flex">
            <v-icon
              class="mr-1"
              icon="mdi-candy-outline"
            />
            <p>Vegan</p>
          </div>
        </div>
      </v-col>
    </row>
    
    <!--Test-->
    
    <!--Menu Options-->
    <v-container class="outline">
      <v-row class="pt-5">
        <v-col
          cols="12"
          sm="4"
          class="bg-gray-100"
        >
          <div class="bg-yellow-100">
            <h1 class="text-h6 !font-bold sm:text-h3">
              Dish name
            </h1>
          </div>
          <v-col class="">
            <p class="">
              <v-icon
                class="pr-3"
                icon="mdi-candy-outline"
              />The following are ingredients: Relate your restaurant's story to its core values.
            </p>
          </v-col>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="bg-gray-100"
        >
          <div class="bg-yellow-100">
            <h1 class="text-h6 !font-bold sm:text-h3">
              Dish name
            </h1>
          </div>
          <v-col class="">
            <p class="">
              <v-icon
                class="pr-3"
                icon="mdi-candy-outline"
              />The following are ingredients: Relate your restaurant's story to its core values.
            </p>
          </v-col>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="bg-gray-100"
        >
          <div class="bg-yellow-100">
            <h1 class="text-h6 !font-bold sm:text-h3">
              Dish name
            </h1>
          </div>
          <v-col class="">
            <p class="">
              <v-icon
                class="pr-3"
                icon="mdi-candy-outline"
              />The following are ingredients: Relate your restaurant's story to its core values.
            </p>
          </v-col>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="bg-gray-100"
        >
          <div class="bg-yellow-100">
            <h1 class="text-h6 !font-bold sm:text-h3">
              Dish name
            </h1>
          </div>
          <v-col class="">
            <p class="">
              <v-icon
                class="pr-3"
                icon="mdi-candy-outline"
              />The following are ingredients: Relate your restaurant's story to its core values.
            </p>
          </v-col>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="bg-gray-100"
        >
          <div class="bg-yellow-100">
            <h1 class="text-h6 !font-bold sm:text-h3">
              Dish name
            </h1>
          </div>
          <v-col class="">
            <p class="">
              <v-icon
                class="pr-3"
                icon="mdi-candy-outline"
              />The following are ingredients: Relate your restaurant's story to its core values.
            </p>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <!--Third Section-->
  <div class="bg-gradient-to-b to-orange-200 from-red-200">
    <v-row class="p-10">
      <!--Map Image Column-->
      <v-col
        cols=""
        sm=""
        class=""
      >
        <img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" 
          class="object-scale-down outline"
        >
      </v-col>
      <divider class="p-5" />
      <!--Contact/Info Column-->
      <v-col
        cols=""
        sm=""
        class="py-5"
      >
        <h1 class="text-h3 !font-bold sm:text-h5">
          Restaurant Example Header
        </h1>
        <div class="text-h6">
          <div class="flex py-2">
            <v-icon
              class="mr-3"
              icon="mdi-candy-outline"
            />
            <p>Open Monday thru Saturday, 8AM - 10PM</p>
          </div>
          <div class="flex py-2">
            <v-icon
              class="mr-3"
              icon="mdi-candy-outline"
            />
            <p>852 Maybell Street, Shitty City, State</p>
          </div>
          <div class="flex py-2">
            <v-icon
              class="mr-3"
              icon="mdi-candy-outline"
            />
            <p>+507 - 963 - 1478</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>