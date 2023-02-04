<!-- eslint-disable vue/multi-word-component-names -->

<!--To Do: 
    All asthetics.
  
  Section One: 
    Text spacing.
    Transparent div.

  Section Two:

  Section Three:

-->
<template>
  <!--First Section-->
  <div class="bg-gradient-to-b from-green-300 to-blue-300">
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      class="flex text-center align-middle items-center h-screen w-full"
    >
      <div class="flex text-center align-middle items-center justify-center flex-shrink">
        <div class="w-4/5 justify-center my-15">
          <div class="bg-white mx-2 p-7">
            <div class="">
              <h1 class="text-h4 !font-bold sm:text-h3">
                <!-- Old -->
                <!-- <div class="w-4/5 justify-center ">
                      <div class="bg-white">
                        <h1 class="text-h3 !font-bold sm:text-h3"> -->
                Restaurant Example Header
              </h1>
              <p class="my-5 italic text-3xl">
                Relate your restaurant's story to its core values. Tell them what struggles you had to overcome, what you learned from it, and how it impacted your values.
              </p>
              <div class=" items-center align-center justify-center text-2xl">
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
            </div>
            <!-- <v-divider
              vertical
              class="p-5"
            /> -->
                  
            <!--<img
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" 
              class="bg-red-100 object-scale-down"
            > -->
        
            <!--Icon-->
            <!-- <v-icon
              size="300"
              color="white"
              icon="mdi-image-plus-outline"
              class="bg-rose-700"
            /> -->
          </div>
        </div>
      </div>
    </v-parallax>
  </div>

  <!--Second Section-->
  <div class="bg-gradient-to-t from-red-300 to-blue-400 flex text-center align-middle items-center justify-center flex-shrink">
    <!--Menu Category Breakfast-->
    <div class="w-4/5 justify-center my-15">
      <div class="bg-white mx-2 p-7">
        <div class="">
          <h1 class="text-h4 !font-bold sm:text-h3">
            BREAKFAST
          </h1>
          <p class="p-2">
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
        </div>
      </div>
    
      <!--Dishes-->
      <div class="w-full">
        <!-- Michael's div stolen from shop-->
        <div class="flex pt-1 m-0 flex-wrap items-center align-center justify-center w-full">
          <!--Test v-for-->
          <div
            v-for="n in 6"
            :key="n"
            class="flex sm:w-full md:w-1/2 lg:w-1/3 items-center align-center"
          >
            <div
              class="m-2 bg-white"
            >
              <h1 class="bg-gray-100 py-2 text-h5 !font-bold <sm:text-h3">
                Dish name
              </h1>
              <div class="p-5">
                <p class="">
                  <v-icon
                    class="pr-3"
                    icon="mdi-candy-outline"
                  />The following are ingredients: Relate your restaurant's story to its core values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Second Section 1.5-->
  <div class="bg-gradient-to-t from-orange-300 to-red-300 flex text-center align-middle items-center justify-center flex-shrink">
    <!--Menu Category Breakfast-->
    <div class="w-4/5 justify-center my-15">
      <div class="bg-white mx-2 p-7">
        <div class="">
          <h1 class="text-h4 !font-bold sm:text-h3">
            LUNCH
          </h1>
          <p class="p-2">
            Breakfast is served with your choice of bacon, sausage, or hashbrowns. Breakfast is served with your choice of bacon, sausage, or hashbrowns. 
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
        </div>
      </div>
    
      <!--Dishes-->
      <div class="w-full">
        <!-- Michael's div stolen from shop-->
        <div class="flex pt-1 m-0 flex-wrap items-center align-center justify-center w-full">
          <!--Test v-for-->
          <div
            v-for="n in 8"
            :key="n"
            class="flex sm:w-full md:w-1/2 lg:w-1/3 items-center align-center"
          >
            <div
              class="m-2 bg-white"
            >
              <h1 class="bg-gray-100 py-2 text-h5 !font-bold <sm:text-h3">
                Dish name
              </h1>
              <div class="p-5">
                <p class="">
                  <v-icon
                    class="pr-3"
                    icon="mdi-candy-outline"
                  />The following are ingredients: Relate your restaurant's story to its core values. Breakfast is served with your choice of bacon, sausage, or hashbrowns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Third Section-->
  <div class="bg-gradient-to-b to-gray-300 from-orange-300 flex items-center align-center justify-center">
    <div class="p-10 w-4/5 flex text-center align-middle items-center justify-center flex-shrink flex-wrap ">
      <!--Map Image Column-->
      <div class="flex flex-wrap">
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          cover
          class="outline h-300px w-300px"
        />
      </div>
      <divider class="p-5" />
      <!--Contact/Info Column-->
      <div class="py-10">
        <h1 class="text-h3 !font-bold">
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
      </div>
    </div>
  </div>
</template>