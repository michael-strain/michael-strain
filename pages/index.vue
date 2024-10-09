<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div
    :class="$device.isMobileorTablet ? '' : 'flex justify-space-between align-center p-4 flex-wrap' "
    class="  bg-black sticky z-[5] md:top-0 w-full"
  >
    <p class="uppercase text-2xl font-bold mx-auto">
      Michael Strain
    </p>
    <div class=flex-grow></div>

    <div :class="$device.isMobileorTablet ? 'flex flex-col justify-space-between' : 'flex align-center flex-row justify-center mx-auto flex-wrap gap-x-5' ">
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
        <a href="tel:+1-239-413-6517">
          <p>+1 (239) 413-6517</p>
        </a>
      </div>
      <div class="flex gap-2 align-center">
        <v-icon icon="mdi-download" />
        <!--This will be a nuxt link to a pdf that will be stored in public assets i think-->
        <a href="/Resume.pdf"><p class="link">Download Resume</p></a>
      </div>
    </div>
  </div>
  <div class="relative">
    <div class="md:h-[400px] h-[250px] md:w-[130%] w-full z-[0]">
      <TopWorld />
    </div>
    <section class="flex flex flex-col absolute bottom-0">
      <div class="md:ml-[60px] ml-3 z-[1] text-white">
        <!--IDEALLY this should be a smaller div, it's making it so we can't use orbitControls on the TopWorld component-->
        <p class="text-5xl md:text-8xl font-bold">
          Reshape<br>The World
        </p>
      </div>
      <p class="md:pl-[60px] md:py-4 text-2xl md:text-3xl text-white p-2 pl-3 w-full">
        Driving Ambitious Solutions for a Sustainable Future
      </p>
    </section>
  </div>

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

  <!-- <div class="divider" /> -->

  <section class="">
    <Skills />
  </section>
  <!--   
  <section class="">
    <Projects />
  </section> -->

  <!-- <div class="divider" />
  <section class="padding">
    <ServicesSummary />
  </section>
  <br> -->
  <!-- <div class="divider" />
  <section class="padding">
    <Industry />
  </section> -->
  <!-- <ContactMainPage /> -->


  <!-- <section class="padding">
    <v-btn>Submit OfferLetter</v-btn>
    <v-btn>Contact Me</v-btn>
    <v-btn>Schedule an Interview</v-btn>
  </section> -->
  
  <!-- Calls To Action - In Progress -->
  <section class="hidden">
    <!-- <p>Your next employee, for only: ${{ (auction.currentBid + auction.bidIncrement)/100 }}</p> -->
    <!-- <p>Current Top Bidder: {{ auction.currentTopBidder }} @ ${{ auction.currentBid / 100 }}</p> -->

    TODO
    Ashley, I would appreciate your help making my calls to action look acceptable...
    <v-btn @click="navigateTo('/contact')">
      Message Me
    </v-btn>
    <v-btn @click="navigateTo('/schedule-interview')">
      Schedule an Interview
    </v-btn>
    <!-- <v-btn @click="navigateTo('/offer')">
      Submit an Employment Offer
    </v-btn> -->

    <!-- <p>Time Remaining Until Next Bid Increment Increase: {{ countdown }}</p> -->
  </section>
  <Footer />

  <!-- 
  
    Future chunks:
    -Rates for services? Buy it now style?  Ask users for location permission/zipcode to check range for in-person services?
    -Approximate location tracker? To show my current range of availability for in-person services
    -Public/private todo list?  scrum style kanban board(s)? (backlog, color categorized priorities, columns for stages, list views vs card views, titles/descriptions/dates/tags/this is trello now)
    -Project Categorized Gallery (could be cool to gamify the gallery with threejs/tresjs/cientos)
    -Ambition Board maybe throw some of my idea projects out there on something of a whiteboard (but with general financial/business plans), and have sponsorship CTAs for people that are interested
    -Life Achievements (Could be silly to add stuff like Unique Plants Consumed, mushrooms discovered, etc. and add expandable checklists for things like Places I've Been/Lived, and drag and drop prioritization and progress bars and such)
    -Build a chat feature (and for now only show when I am online), and store the dialogue to later train a chatbot to talk like me
    -Public Approval Buttons (Smiley and Frowny with counters, smiley let's you increment once or retract your vote, frowny shows a gif of me flipping you off and a permanent 0 counter lol)

    Old ideas:
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
