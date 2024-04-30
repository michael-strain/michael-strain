<template>
  <NuxtLink to="/">
    <p
      class="header_sitetitle text-5xl pb-2"
    >
      Michael-Strain
    </p>
  </NuxtLink>
  <v-container>
    <v-row class="w-full flex justify-center mx-auto gap-2">
      <NuxtLink to="/blog"><v-btn variant="plain">Blog</v-btn></NuxtLink>
      <NuxtLink to="/donate"><v-btn variant="plain">Donate</v-btn></NuxtLink>
      <NuxtLink to="/invest"><v-btn variant="plain">Invest</v-btn></NuxtLink>
      <NuxtLink to="/contact"><v-btn variant="plain">Contact</v-btn></NuxtLink>
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
  -webkit-text-stroke: 0.1px white;
  text-shadow: 0 0.5px 0px rgb(var(--v-theme-primary-lighten-2)), -2px -2px 2px #fff, 0px 0px 3px rgb(var(--v-theme-primary));
  font-weight: bold;
  /* letter-spacing: -2px; */
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