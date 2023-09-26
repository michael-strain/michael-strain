<template>
  <div>
    <v-card-item title="Florida">
      <template #subtitle>
        <v-icon
          icon="mdi-alert"
          size="18"
          color="error"
        />

        Extreme Weather Alert
      </template>
    </v-card-item>
    <div class="flex justify-space-between align-center">
      <p class="text-6xl">
        64&deg;F
      </p>
      <v-icon
        color="error"
        icon="mdi-weather-hurricane"
        size="88"
      />
    </div>
    <div class="d-flex py-3 justify-space-between">
      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-windy"
      >
        <v-list-item-subtitle>110 mph</v-list-item-subtitle>
      </v-list-item>

      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-pouring"
      >
        <v-list-item-subtitle>48%</v-list-item-subtitle>
      </v-list-item>
    </div>

    <v-expand-transition>
      <div v-if="expand">
        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in forecast"
            :key="item.day"
            :title="item.day"
            :append-icon="item.icon"
            :subtitle="item.temp"
          />
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider />

    <v-card-actions>
      <v-btn @click="expand = !expand">
        {{ !expand ? 'Full Report' : 'Hide Report' }}
      </v-btn>
    </v-card-actions>
  </div>
</template>
<script>
  export default {
    data: () => ({
      expand: false,
      time: 0,
      forecast: [
        { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
        { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
        { day: 'Friday', icon: 'mdi-white-balance-sunny', temp: '21\xB0/13\xB0' },
        { day: 'Saturday', icon: 'mdi-cloud', temp: '27\xB0/18\xB0' },
      ],
    }),
  }
</script>