<template>
  <v-app-bar :elevation="0">
    <template #append>
      <v-btn icon="mdi-heart" />
      <v-btn icon="mdi-magnify" />
    </template>
  </v-app-bar>
</template>

<!-- <script lang="ts">
  export default {
    data: () => ({
      open: ['Users'],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }),
  }
</script> -->