<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="max-w-80rem mx-auto outline p-5 m-5">
    <ATitle />
    <v-divider class="p-5" />
    <AColorBtn />
    <v-divider class="p-5" />
    <APlainBtn />
    <v-divider class="p-5" />
    <ADialog />
    <v-divider class="p-5" />
    <AContainer />
    <v-divider class="p-5" />
    <ABgImg />
    <v-divider class="p-5" />
    <AFooter />
    <!--<AForm /> [Log In, Unsure on Component or CSS. Use Task Video]-->
    <!--<ATestList /> [CSS the Lines]-->
    <!--Form Component?-->
  </div>





<!--Colors-->
  <div
    v-for="c in Object.keys(vcolors)"
    :key="c"
    :class="'bg-' + c"
  >
    <p>{{ c }}</p>
  </div>
</template>

<script setup>
  //Need to setup vcolors by pulling them from the current vuetify theme object's colors object
  //Do I need to import the vuetify file here?
  //how do I get the name of the active vuetify theme object so I can pull it's colors object?
  import { ref } from 'vue'

  import { useTheme } from 'vuetify'

  const theme = useTheme()

  //theme.global.name.value = theme.global.current.value

  
  const vcolors = theme.global.current.value.colors
  console.log(Object.keys(vcolors))
  // vcolors = theme.value.colors
</script>