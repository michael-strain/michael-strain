<template>
  <h2 class="w-full text-4xl font-bold text-center">
    Skills
  </h2>
  <br>
  <div class="grid grid-cols-2 gap-y-8 gap-x-14">
    <div>
      <p class="uppercase text-2xl">
        Languages
      </p>
      <span class="flex justify-space-between"><p>JavaScript</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />
      <span class="flex justify-space-between"><p>SQL</p> <p class="text-gray-500">80%</p></span>

      <v-progress-linear
        model-value="80"
        color="primary"
        class="mb-4"
      />
      <span class="flex justify-space-between"><p>CSS</p> <p class="text-gray-500">95%</p></span>

      <v-progress-linear
        model-value="95"
        color="primary"
        class="mb-4"
      />
      <span class="flex justify-space-between"><p>HTML5</p> <p class="text-gray-500">30%</p></span>

      <v-progress-linear
        model-value="30"
        color="primary"
        class="mb-4"
      />
      <span class="flex justify-space-between"><p>Python</p> <p class="text-gray-500">30%</p></span>

      <v-progress-linear
        model-value="30"
        color="primary"
        class="mb-4"
      />
    </div>
    <div>
      <p class="uppercase text-2xl">
        User Interface/Front End
      </p>

      <span class="flex justify-space-between"><p>CSS</p> <p class="text-gray-500">95%</p></span>
      <v-progress-linear
        model-value="95"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Vuetify</p> <p class="text-gray-500">30%</p></span>
      <v-progress-linear
        model-value="30"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Daisy UI</p> <p class="text-gray-500">30%</p></span>
      <v-progress-linear
        model-value="30"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Tailwind CSS</p> <p class="text-gray-500">30%</p></span>
      <v-progress-linear
        model-value="30"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Windy CSS</p> <p class="text-gray-500">30%</p></span>
      <v-progress-linear
        model-value="30"
        color="primary"
        class="mb-4"
      />
    </div>

    <div class="flex flex-col gap-2">     
      <p class="uppercase text-2xl">
        Frameworks
      </p>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="4"
          readonly 
        />
        <p class="text-xl">Nuxt</p>
      </span>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="4"
          readonly 
        />
        <p class="text-xl">Visual Studio</p>
      </span>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="4"
          readonly 
        />
        <p class="text-xl">Node JS</p>
      </span>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="4"
          readonly 
        />
        <p class="text-xl">Git</p>
      </span>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="4"
          readonly 
        />
        <p class="text-xl">AWS</p>
      </span>
    </div>
    <div>
      <p class="uppercase text-2xl">
        Applications
      </p>
      <span class="flex justify-space-between"><p>Adobe Products</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />
      <span class="flex justify-space-between"><p>Mail Chimp</p> <p class="text-gray-500">80%</p></span>

      <v-progress-linear
        model-value="80"
        color="primary"
        class="mb-4"
      />
      <span class="flex justify-space-between"><p>Microsoft Office Suite</p> <p class="text-gray-500">95%</p></span>

      <v-progress-linear
        model-value="95"
        color="primary"
        class="mb-4"
      />
      <span class="flex justify-space-between"><p>Google Suite</p> <p class="text-gray-500">30%</p></span>

      <v-progress-linear
        model-value="30"
        color="primary"
        class="mb-4"
      />
    </div>
  </div>
</template>
