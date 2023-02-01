<template>
  <div>
    <!--First Section-->
    <v-container class="bg-sky-100">
      <v-row class="p-5">
        <v-col
          cols=""
          sm=""
          class="bg-gray-100"
        >
          <p>Header</p>
          <p class="my-5">Sub Text</p>
          <div>
            <div class="bg-yellow-100 flex my-5">
              <v-icon class="mr-5" icon="mdi-candy-outline" />
              <p>Paragraph</p>
            </div>
            <div class="bg-yellow-100 flex my-5">
              <v-icon class="mr-5" icon="mdi-candy-outline" />
              <p>Paragraph</p>
            </div>
            <div class="bg-yellow-100 flex my-5">
              <v-icon class="mr-5" icon="mdi-candy-outline" />
              <p>Paragraph</p>
            </div>
          </div>
        </v-col>
        <v-spacer />
        <v-col
          cols=""
          sm=""
          class="bg-red-100 m-10"
        >
          <div>
            <v-icon icon="mdi-image-plus-outline" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>