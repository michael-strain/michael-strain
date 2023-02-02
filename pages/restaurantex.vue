<!-- eslint-disable vue/multi-word-component-names -->

<!--To Do: 
  Section One: Parallax spacing.
  Section Two: Make rows hold three items.
  Section Three: Map to the left.
  Section Three: Contact, phone number, hours, and email. 
-->
<template>
  <!--First Section-->
  <div class="bg-gradient-to-b from-sky-200 text-center">
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      class="filter backdrop-opacity-40 items-center align-middle h-100"
    >
      <v-row class="p-10 mx-10 backdrop-opacity-10 backdrop-invert bg-white/75">
        <v-col
          cols=""
          sm=""
          class=""
        >
          <h1 class="text-h3 !font-bold sm:text-h3">
            Restaurant Example Header
          </h1>
          <p class="mt-5 mb-15">
            Relate your restaurant's story to its core values. Tell them what struggles you had to overcome, what you learned from it, and how it impacted your values.
          </p>
          <div class="flex flex-wrap items-center align-center justify-center">
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
        <!--       
      <v-col
        cols=""
        sm=""
        class="justify-center items-center flex"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" 
          class="bg-red-100 object-scale-down w-2/3"
        > -->
    
        <!--Icon-->
        <!-- <v-icon
          size=""
          color="white"
          icon="mdi-image-plus-outline"
          class="bg-rose-700"
        /> -->
      <!-- </v-col> -->
      </v-row>
    </v-parallax>
  </div>

  <!--Second Section-->
  <div class="px-35 grid bg-gradient-to-t from-red-200 mx-auto flex text-center align-middle items-center justify-center flex-shrink">
    <!--Menu Category-->
    <row>
      <v-col
        cols=""
        sm=""
        class="text-center"
      >
        <h1 class="text-h4 !font-bold sm:text-h3">
          BREAKFAST
        </h1>
        <p class="mb-15">
          Breakfast is served with your choice of bacon, sausage, or hashbrowns.
        </p>
      </v-col>
    </row>
    
    <!--Menu Options-->
    <v-row class="gap-15">
      <v-col
        cols=""
        sm=""
        class="bg-gray-100"
      >
        <div class="bg-yellow-100 flex my-5">
          
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
        cols=""
        sm=""
        class="bg-gray-100"
      >
        <div class="bg-yellow-100 flex my-5">
          <v-icon
            class="mr-5"
            icon="mdi-candy-outline"
          />
          <h1 class="text-h6 !font-bold sm:text-h3">
            Dish name
          </h1>
        </div>
        <p class="my-5">
          The following are ingredients: Relate your restaurant's story to its core values.
        </p>
      </v-col>
      <v-col
        cols=""
        sm=""
        class="bg-gray-100"
      >
        <div class="bg-yellow-100 flex my-5">
          <v-icon
            class="mr-5"
            icon="mdi-candy-outline"
          />
          <h1 class="text-h6 !font-bold sm:text-h3">
            Dish name
          </h1>
        </div>
        <p class="my-5">
          The following are ingredients: Relate your restaurant's story to its core values.
        </p>
      </v-col>
      <v-col
        cols=""
        sm=""
        class="bg-gray-100"
      >
        <div class="bg-yellow-100 flex my-5">
          <v-icon
            class="mr-5"
            icon="mdi-candy-outline"
          />
          <h1 class="text-h6 !font-bold sm:text-h3">
            Dish name
          </h1>
        </div>
        <p class="my-5">
          The following are ingredients: Relate your restaurant's story to its core values.
        </p>
      </v-col>
    </v-row>
  </div>

  <!--Third Section-->
  <div class="bg-gradient-to-b from-sky-200 text-center">
    <v-row class="">
      <v-col
        cols=""
        sm=""
        class="flex"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" 
          class="bg-red-100 m-15 object-scale-down"
        >
      </v-col>

      <v-col
        cols=""
        sm=""
        class=""
      >
        <h1 class="text-h3 !font-bold sm:text-h3">
          Restaurant Example Header
        </h1>
        <div class="flex flex-wrap">
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
    </v-row>
  </div>
</template>