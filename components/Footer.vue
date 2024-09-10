<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 place-content-stretch text-center bg-black">
    <div class="flex md:flex-col gap-2 p-2 sm:p-4 justify-center align-center">
      <v-icon icon="mdi-email" />
      <p class="text-xl">michael.v.strain@gmail.com</p>
      <!-- <p class="text-gray-500">email</p> -->
    </div>
    <div class="flex md:flex-col gap-2 p-2 sm:p-4 justify-center align-center">
      <v-icon icon="mdi-phone" />
      <p>239.413.6517</p>
      <!-- <p class="">phone</p> -->
    </div>
    <div class="flex md:flex-col gap-2 p-2 sm:p-4 justify-center align-center">
      <v-icon icon="mdi-download" />
      <p class="link">Download Resume</p>
      <!-- <p class="">resume</p> -->
    </div>
  </div>
  <div class="bg-black w-100 z-[6] text-center py-3">
    <p class="text-xs">
      © Strain Investment Co. LLC
    </p>
    <p class="text-xs text-wrap">
      All content is owned solely by Michael Strain, and shall not be used or reproduced without prior written consent. All Rights Reserved.
    </p>
  </div>
</template>