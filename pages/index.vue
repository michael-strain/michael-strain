<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="flex justify-space-between text-center bg-black fixed z-[5] top-0 w-full">
    <!-- Header -->
    <p class="uppercase p-4 text-2xl font-bold">
      Michael Strain
    </p>
    <div class="flex justify-space-between">
      <div class="flex gap-2 p-4 align-center">
        <v-icon icon="mdi-email" />
        <p class="">
          michael.v.strain@gmail.com
        </p>
      </div>
      <div class="flex gap-2 p-4 align-center">
        <v-icon icon="mdi-phone" />
        <p>239.413.6517</p>
      </div>
      <div class="flex gap-2 p-4 align-center">
        <v-icon icon="mdi-download" />
        <p class="link">
          Download Resume
        </p>
      </div>
    </div>
  </div>

  <!-- Splash -->
  <section class="bg-black flex flex-col content-end lg:pt-[100px]">
    <div class="md:h-1/4 h-16" />
    <div class="padding w-full mb-n8 z-[2]"><!--IDEALLY this should be a smaller div, it's making it so we can't use orbitControls on the TopWorld component-->
      <p class="text-xl md:text-8xl font-bold">
        Reshape<br>the<br>World<br>
      </p>
      <p class="text-2xl mt-2 text-secondary">
        Driving Ambitious Solutions for a Sustainable Future
      </p>
    </div>
    <div class="absolute top-0 h-[450px] w-full">
      <TopWorld />
    </div>
    <div class="bg-black">
      <svg
        viewBox="0 0 1428 174"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            transform="translate(-2.000000, 44.000000)"
            fill="#cccccc"
            fill-rule="nonzero"
          >
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"
            />
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            />
            <path
              id="Path-4"
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              opacity="0.200000003"
            />
          </g>
          <g
            transform="translate(-4.000000, 76.000000)"
            fill="#fff"
            fill-rule="nonzero"
          >
            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" />
          </g>
        </g>
      </svg>
    </div>
  </section>
  <br>
  <br>

  <!-- In Progress -->
  <section class="padding">
    Your next employee, for only: ${{ (auction.currentBid + auction.bidIncrement)/100 }}
    Current Highest Bidder: {{ auction.currentTopBidder }} @ ${{ auction.currentBid / 100 }}

    <v-btn @click="navigateTo('/offer')">Submit Offer</v-btn>
    <v-btn @click="navigateTo('/contact')">Contact Me</v-btn>

    COUNTDOWN to Bid Increment Increase: {{ countdownTimer }}

  </section>
  <!-- All these are going to be used, but are currently unfinished-->
  <div class="divider" />
  <section class="padding">
    <Skills />
  </section>
  <br>
  <!-- <div class="divider" />
  <section class="padding">
    <Projects />
  </section>
  <br>
  <div class="divider" />
  <section class="padding">
    <Goals />
    <Hobbies />
  </section>
  <br> 
  <div class="divider" />
  <section class="padding">
    <Socials /> Youtube, Facebook, Mastodon, Github, etc
  </section>
  -->
  <section class="padding">
    <div class="flex lg:flex-row flex-col gap-4 relative">
      <div class="static top-0 w-1/2">
        <World />
      </div>
      <div class="w-1/2">
        <section class="padding">
          <ExperienceTimeline />
        </section>
      </div>
    </div>
  </section>
  <br>
  <!-- <div class="divider" />
  <section class="padding">
    <ServicesSummary />
  </section>
  <br> -->
  <!-- <div class="divider" />
  <section class="padding">
    <Industry />
  </section> -->
  <!-- <br>
  <ContactMainPage /> -->
  <div class="divider" />
  <section class="padding">
    <v-btn>Submit OfferLetter</v-btn>
    <v-btn>Contact Me</v-btn>
  </section>
  <Footer />

  <!-- 
  
    Future chunks:
    -Auction an hour of my time for consultation (likely broken into 2 30min portions, first for questions, then some time for me to think/research, then 30 min for answers)
    -Invest in one of the Strain Investment Company LLC subsidiaries
    -Show a timeline of our personal and professional highlights
   
   -->
</template>

<script setup>

  import { useDocument, useFirestore } from 'vuefire'
  import { doc } from 'firebase/firestore'

  const docRef = doc(useFirestore(),'auctions/mysoul')
  const auction = useDocument(docRef)

  const countdownTimer = ref()

  //Our backend should be responsible for actually incrementing the bidIncrement
  //But the goal is to increment our bidIncrement at set intervals by set amts until I get hired
  //I'm thinking that my bidIncrement should start at 1k and increase by 1k every week until we get to 70k (about 4 weeks unless there are bids), then increase the increment to 5k until we get to 100k (6 weeks no bids), then we increment by 10k...

  
  // definePageMeta({
  //   layout: 'blank'
  // })
  useServerSeoMeta({
    title:'Michael Strain',
    ogTitle:'The Personal Website of Michael Strain',
    description:'A Man with Good Priorities, a Diverse Background, Vast Passions, and a Bright Future.',
    ogDescription:'This guy is going places.  I mean he already has gone places, seriously.  Did you read about him on Forbes yet?  I\'m compelled to make an early-stage investment in his next project!',
    ogImage:'img/mountain-coffeefarm.jpg',
    twitterCard:'summary_large_image',
    ogType:'website',
    ogUrl:'https://michael-strain.com'
  })
</script>

<style scoped>

</style>
