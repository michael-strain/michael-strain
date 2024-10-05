<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- Calls To Action - In Progress -->
    <section class="hidden">
    <!-- <p>Your next employee, for only: ${{ (auction.currentBid + auction.bidIncrement)/100 }}</p> -->
    <!-- <p>Current Top Bidder: {{ auction.currentTopBidder }} @ ${{ auction.currentBid / 100 }}</p> -->

    <v-btn @click="navigateTo('/contact')">
      Message Me
    </v-btn>
    <v-btn @click="navigateTo('/schedule-interview')">
      Schedule an Interview
    </v-btn>
    <v-btn @click="navigateTo('/offer')">
      Submit an Employment Offer
    </v-btn>

    <!-- <p>Time Remaining Until Next Bid Increment Increase: {{ countdown }}</p> -->
  </section>
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
    <p class="text-xs text-wrap">
      All content is owned solely by Michael Strain, and shall not be used or reproduced without prior written consent. All Rights Reserved.
    </p>
  </div>
</template>