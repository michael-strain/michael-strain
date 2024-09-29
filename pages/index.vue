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
        <a
          href="mailto:michael.v.strain@gmail.com"
          target="_blank"
        >
          <p class="">
            michael.v.strain@gmail.com
          </p>
        </a>
      </div>
      <div class="flex gap-2 p-4 align-center">
        <v-icon icon="mdi-phone" />
        <a href="tel:+1-239-413-6517">
          <p>239.413.6517</p>
        </a>
      </div>
      <div class="flex gap-2 p-4 align-center">
        <v-icon icon="mdi-download" />
        <!--This will be a nuxt link to a pdf that will be stored in public assets i think-->
        <p class="link">
          Download Resume
        </p>
      </div>
    </div>
  </div>
  <section class="bg-black flex lg:pt-[100px]">
    <div class="md:ml-[80px] ml-6 mb-n8 z-[1]">
      <!--IDEALLY this should be a smaller div, it's making it so we can't use orbitControls on the TopWorld component-->
      <p class="text-xl md:text-8xl font-bold">
        Reshape<br>the<br>World<br>
      </p>
      <p class="text-2xl mt-2 text-primary">
        Driving Ambitious Solutions for a Sustainable Future
      </p>

      <!-- Maybe we could split this div into to flexy divs and put the CTA stuff on the right? (but columnize on mobile?)-->
    </div>
    <div class="absolute top-0 h-[450px] w-full">
      <TopWorld />
    </div>
  </section>
  <br>
  <br>

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

  <!-- All these are going to be used, but are currently unfinished-->
  <!-- <div class="divider" /> -->
  
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
      <div class="w-full">
        <section class="padding">
          <ExperienceTimeline />
        </section>
      </div>
      <!-- 
      This is not functionally integrated with the experience timeline yet.
      <div class="static top-0 w-1/3">I'd like to set this component to h-full and have it fixed to the side once you scroll into it's area and until you leave the professional experience timeline...
        <World />
      </div> -->
    </div>
  </section>
  <br>
  <section class="">
    <Skills />
  </section>
  <!-- <div class="divider" />
  <section class="padding">
    <ServicesSummary />
  </section>
  <br> -->
  <!-- <div class="divider" />
  <section class="padding">
    <Industry />
  </section> -->
  <ContactMainPage />


  <!-- <section class="padding">
    <v-btn>Submit OfferLetter</v-btn>
    <v-btn>Contact Me</v-btn>
    <v-btn>Schedule an Interview</v-btn>
  </section> -->
  <Footer />

  <!-- 
  
    Future chunks:
    -Auction an hour of my time for consultation (likely broken into 2 30min portions, first for questions, then some time for me to think/research, then 30 min for answers)
    -Invest in one of the Strain Investment Company LLC subsidiaries
    -Show a timeline of our personal and professional highlights
   
   -->
</template>

<script setup>

  // import { useDocument, useFirestore } from 'vuefire'
  // import { doc } from 'firebase/firestore'
  // import { formatDistanceToNow } from "date-fns"

  // const docRef = doc(useFirestore(),'auctions/mysoul')
  // const {data:auction, pending,error} = useDocument(docRef)

  // const countdown = ref()

  // onMounted(async()=>{
  //   if(!pending.value&&!error.value && auction.value){
  //     const incrementDate = auction.value.nextIncrementDate
  //     const result = formatDistanceToNow(
  //       new Date(incrementDate.toDate().toString()),
  //       {includeSeconds: true}
  //     )
  //     countdown.value = result
  //   }
  // })
  

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
