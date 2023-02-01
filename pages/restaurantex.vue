<template>
  <div class="bg-gradient-to-b from-sky-800 mx-auto">
    <!--First Section-->
    <v-row class="p-15">
      <v-col
        cols=""
        sm=""
        class="bg-gray-100"
      >
        <h1 class="text-h3 !font-bold sm:text-h3">
          Header
        </h1>
        <p class="text-h5 mb-5">
          Sub Text
        </p>
        <div>
          <div class="bg-yellow-100 flex my-5">
            <v-icon
              class="mr-5"
              icon="mdi-candy-outline"
            />
            <p>Open Monday thru Saturday, 8AM - 10PM</p>
          </div>
          <div class="bg-yellow-100 flex my-5">
            <v-icon
              class="mr-5"
              icon="mdi-candy-outline"
            />
            <p>852 Maybell Street, Shitty City, State</p>
          </div>
          <div class="bg-yellow-100 flex my-5">
            <v-icon
              class="mr-5"
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
        class="bg-red-100 justify-center items-center flex"
      >
        <v-img
          src="https://picsum.photos/300/150/?image=41"
        />

      <!-- Icon
        <v-icon
          size=""
          color="white"
          icon="mdi-image-plus-outline"
          class="bg-rose-700"
        /> -->
      </v-col>
    </v-row>
  </div>
</template>