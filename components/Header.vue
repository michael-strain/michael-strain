<template>
  <NuxtLink to="/">
    <p
      class="header_sitetitle text-8xl pb-3 <md:(text-7xl)"
    >
      Michael-Strain
    </p>
  </NuxtLink>
  <v-container class="align-center align-items-center align-content-center">
    <v-row class="w-full p-5">
      <v-col cols="20" sm="4"><NuxtLink to="/blog"><v-btn variant="block">Blog</v-btn></NuxtLink></v-col>
      <v-col cols="20" sm="4"><NuxtLink to="/contact"><v-btn variant="block">Contact</v-btn></NuxtLink></v-col>
      <v-col cols="20" sm="4"><NuxtLink to="/donate"><v-btn variant="block">Donate</v-btn></NuxtLink></v-col>
      <v-col cols="20" sm="4"><NuxtLink to="/invest"><v-btn variant="block">Invest</v-btn></NuxtLink></v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.header_sitetitle {
  font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;;
  /* text-transform: uppercase; */
  /* display: block; */
  /* font-size: 92px; */
  color: rgb(var(--v-theme-primary-darken-1));
  /* color: #f1ebe5; */
  -webkit-text-stroke: 1px white;
  text-shadow: 0 5px 9px rgb(var(--v-theme-primary-lighten-2)), -2px -2px 2px #fff, 0px 0px 3px rgb(var(--v-theme-primary));
  font-weight: bold;
  letter-spacing: -4px;
  text-align: center;
  /* background: linear-gradient(to bottom, #ece4d9 0%,#e9dfd1 100%); */
  /* position: absolute; */
  /* padding: 100px 200px; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
  /* border-radius: 20px; */
}

</style>