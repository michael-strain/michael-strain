<template>
  <div>
    <!-- <v-toolbar
      flat
      color="deep-purple-accent-4"
      dark
    >
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Filter results</v-toolbar-title>
    </v-toolbar> -->
    <div class="textfields">
      <div>
        <h3>
          Amenities
        </h3>

        <v-chip-group
          v-model="amenities"
          column
          multiple
        >
          <v-chip
            v-for="tag in amenitiestags"
            :key="tag"
            filter
            variant="outlined"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </div>
      <div>
        <h3>
          Areas of Interest
        </h3>

        <v-chip-group
          v-model="neighborhoods"
          column
          multiple
        >
          <v-chip
            v-for="tag in areastags"
            :key="tag"
            filter
            variant="outlined"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </div>
      <div>
        <h3>
          Lease Duration
        </h3>

        <v-chip-group
          v-model="duration"
          column
          multiple
        >
          <v-chip
            v-for="tag in durationtags"
            :key="tag"
            filter
            variant="outlined"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      amenities: [],
      neighborhoods: [],
      duration: [],
    
    amenitiestags: [
        'Washer/Dryer',
        'Accepts Pets',
        'Fireplace',
        'Wheelchair Access',
        'Elevator',
        'Swimming Pool',
        'Clubhouse',
        'Covered Parking',
        'Air Conditioning',
        'Outdoor Storage',
        'Patio',
        'Gated Community',
        'Dog Park',
      ],
      areastags: [
        'Silver Loop',
        'Westfall Road',
        'Gordon Village',
        'Kennedy Park',
        'Black Isle',
        'Wintry Grove',
        'Ventura Park',
        'Newmont Prairie',
        'Winden Ridge',
        'Windeco Falls',
      ],
      durationtags: [
        'Less Than 6 Months',
        '6 Months to One Year',
        'More Than One Year',
      ],
    }),
  }
</script>