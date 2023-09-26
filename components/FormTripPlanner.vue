<template>
  <div class="textfields">
    <h3>Plan Your Cruise</h3>
    <div>
      <v-autocomplete
        label="Cruise Ship Name"
        placeholder="Cruise Ship Name"
        :items="['Happy Dolphin', 'Venus', 'The Empress', 'Aquarius III', 'The Big One']"
      />
      <v-autocomplete
        label="Destination"
        placeholder="Destination"
        :items="['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France']"
      />
    
      <div class="btnRow">
        <v-text-field
          v-model="trip.start"
          label="Start date"
          type="date"
        />
        <v-text-field
          v-model="trip.end"
          label="End date"
          type="date"
        />
      </div>
      <div class="flex justify-space-around">
        <p>
          Start date: {{ trip.start || 'Not set' }}
        </p>
        <p>
          End date: {{ trip.end || 'Not set' }}
        </p>
      </div>
    </div>
    <div>
      <div class="btnRow">
        <button
          class="btnstyle"
          color="success"
          variant="outlined"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
    }),
  }
</script>