<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
  <NuxtLoadingIndicator />
  <v-app>
    <BgLava class="bglava_negindex"/>
    <v-app-bar order="3" class="bg-transparent elevation-0">
      <template #append>
        <div 
          class="opacity-90 md:mt-3 rounded-full flex justify-space-around bg-primary <sm:(mr-0 w-screen absolute top-0 right-0 rounded-none)"
        >
          <v-btn :icon="themeIcon" @click.stop="themedrawer = !themedrawer" />
          <NuxtLink to="/">
            <v-btn icon="mdi-home" />
          </NuxtLink>
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="themedrawer"
      temporary
    >
      <ToggleTheme />
    </v-navigation-drawer>
    
    <v-main order="0" class="z-10">
      <Header class="z-10" />
      <slot />      
    </v-main>
    <LazyFooter class="absolute bottom sticky" />
  </v-app>
</template>

<script setup>
  const themeIcon = ref('mdi-weather-sunny')
  const themedrawer = ref(null)
</script>

<style scoped>
* {
  font-display: swap;
}

:root {
  font-family: 'Raleway', sans-serif;
}

.bglava_negindex {
  z-index: 0;
}

</style>