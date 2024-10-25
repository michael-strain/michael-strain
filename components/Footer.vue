<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class=" grid grid-cols-1 sm:grid-cols-3 place-content-stretch text-center bg-black">
    <div class="flex gap-2 p-2 sm:p-4 justify-center align-center">
      <v-icon icon="mdi-email" />
      <a href="mailto:michael.v.strain@gmail.com"><p class="text-xl">michael.v.strain@gmail.com</p></a>
      <!-- <p class="text-gray-500">email</p> -->
    </div>
    <div class="flex gap-2 p-2 sm:p-4 justify-center align-center">
      <v-icon icon="mdi-phone" />
      <a href="tel:+1-239-413-6517"><p>+1 (239) 413-6517</p></a>
      <!-- <p class="">phone</p> -->
    </div>
    <div class="flex gap-2 p-2 sm:p-4 justify-center align-center">
      <v-icon icon="mdi-download" />
      <a href="/Resume.pdf"><p class="link">Download Resume</p></a>
      <!-- <p class="">resume</p> -->
    </div>
  </div>
  <div class="bg-black w-100 z-[6] text-center pb-3">
    <p class="text-xs">
      © Strain Investment Co. LLC
    </p>
    <p class="text-xs text-wrap pb-3">
      All content is owned solely by Michael Strain, and shall not be used or reproduced without prior written consent. All Rights Reserved.
    </p>
    <div class="text-sm flex justify-center gap-2 flex-col md:flex-row md:gap-8">
    <NuxtLink
      to="/legal/termsAndConditions"
      class=""
    >
      Terms & Conditions
    </NuxtLink>
    <NuxtLink
      to="/legal/privacyPolicy"
    >
      Privacy Policy
    </NuxtLink>
  </div>
  </div>
  
</template>