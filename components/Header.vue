<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="$device.isMobileOrTablet ? '' : 'flex justify-space-between align-center px-4 py-5 flex-wrap' "
    class="  bg-black sticky py-2 z-[5] md:top-0 w-full"
  >
    <NuxtLink to="/">
      <p class="text-center uppercase text-2xl font-bold mx-auto">
        Michael Strain
      </p>
    </NuxtLink>
    <div class="flex-grow" />

    <div :class="$device.isMobileOrTablet ? 'flex justify-space-around py-1' : 'flex align-center flex-row justify-center mx-auto flex-wrap gap-x-8' ">
      <a
        href="mailto:michael.v.strain@gmail.com"
        target="_blank"
        class="flex gap-2 align-center"
      >
        <v-icon icon="mdi-email" />
        <p v-if="$device.isDesktopOrTablet">
          michael.v.strain@gmail.com
        </p>
      </a>
      <a
        href="tel:+1-239-413-6517"
        target="_blank"
        class="flex gap-2 align-center"
      >
        <v-icon icon="mdi-phone" />
        <p v-if="$device.isDesktopOrTablet">+1 (239) 413-6517</p>
      </a>
      <a
        href="/Resume.pdf"
        target="_blank"
        class="flex gap-2 align-center"
      >
        <v-icon icon="mdi-download" />
        <p
          v-if="$device.isDesktopOrTablet"
          class="link"
        >Download Resume</p>
      </a>
    </div>
  </div>
</template>