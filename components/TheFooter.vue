<template>
  <!-- <div>
    <v-card>Hello I'm a footer</v-card>
  </div> -->
  <!-- Component: AppFooter -->
  <v-footer>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        © {{ new Date().getFullYear() }} — <strong>Michael-Strain</strong>
        <br />
        {{ new Date() }}
        <br />
        <p class="text-xs">All content is owned solely by Michael Strain and/or his companies, and shall not be used or reproduced without prior consent.</p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<!-- <script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
  }
</script> -->

<script setup>
  const {data: links} = [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ]
</script>

<style scoped></style>
