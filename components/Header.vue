<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="$device.isMobileOrTablet ? '' : 'flex justify-space-between align-center p-4 flex-wrap' "
    class="  bg-black sticky z-[5] md:top-0 w-full"
  >
    <NuxtLink to="/">
      <p class="uppercase text-2xl font-bold mx-auto">
        Michael Strain
      </p>
    </NuxtLink>
    <div class="flex-grow" />

    <div :class="$device.isMobileOrTablet ? 'flex flex-col justify-space-between' : 'flex align-center flex-row justify-center mx-auto flex-wrap gap-x-5' ">
      <div class="flex gap-2 align-center">
        <v-icon icon="mdi-email" />
        <a
          href="mailto:michael.v.strain@gmail.com"
          target="_blank"
        >
          <p class="">
            michael.v.strain@gmail.com
          </p>
        </a>
      </div>
      <div class="flex gap-2 align-center">
        <v-icon icon="mdi-phone" />
        <a
          href="tel:+1-239-413-6517"
          target="_blank"
        >
          <p>+1 (239) 413-6517</p>
        </a>
      </div>
      <div class="flex gap-2 align-center">
        <v-icon icon="mdi-download" />
        <!--This will be a nuxt link to a pdf that will be stored in public assets i think-->
        <a
          href="/Resume.pdf"
          target="_blank"
        >
          <p class="link">Download Resume</p>
        </a>
      </div>
    </div>
  </div>
</template>