<template>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
      align-tabs="center"
      height="80px"
    >
      <v-tab value="one">Photography</v-tab>
      <v-tab value="two">Hand-Drawn</v-tab>
      <v-tab value="three">Favorites</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <ImageGrid category="photography" />
        </v-window-item>

        <v-window-item value="two">
          <ImageGrid category="handDrawn"/>
        </v-window-item>

        <v-window-item value="three">
          <ImageGrid category="favorites"/>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      tab: null,
    }),
    
  }
</script>