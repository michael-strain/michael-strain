<template>
  <v-app>
    <v-responsive
      :style="{ background: `rgb(${red}, ${green}, ${blue})` }"
      height="300px"
    />

    <v-card-text>
      <v-slider
        v-model="red"
        :max="255"
        :step="1"
        label="R"
        hide-details
        class="ma-4"
        thumb-label
      >
        <template #append>
          <v-text-field
            v-model="red"
            type="number"
            style="width: 80px"
            density="compact"
            hide-details
            variant="outlined"
          />
        </template>
      </v-slider>

      <v-slider
        v-model="green"
        :max="255"
        :step="1"
        label="G"
        hide-details
        class="ma-4"
      >
        <template #append>
          <v-text-field
            v-model="green"
            type="number"
            style="width: 80px"
            density="compact"
            hide-details
            variant="outlined"
          />
        </template>
      </v-slider>

      <v-slider
        v-model="blue"
        :max="255"
        :step="1"
        label="B"
        hide-details
        class="ma-4"
      >
        <template #append>
          <v-text-field
            v-model="blue"
            type="number"
            style="width: 80px"
            density="compact"
            hide-details
            variant="outlined"
          />
        </template>
      </v-slider>
    </v-card-text>
  </v-app>
</template>

<script setup>
const red = ref(64)
const green = ref(128)
const blue = ref(10)
</script>