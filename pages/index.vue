<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <Header />
  <div class="relative">
    <div class="md:h-[400px] h-[250px] md:w-[130%] w-full z-[0]">
      <TopWorld />
    </div>
    <section class="flex flex-col absolute bottom-0">
      <div class="md:ml-[60px] ml-3 z-[1] text-white">
        <p class="text-5xl md:text-8xl font-bold">
          Reshape<br>The World
        </p>
      </div>
      <p class="md:pl-[60px] md:py-4 text-2xl md:text-3xl text-white p-2 pl-3 w-full">
        Driving Solutions for a Sustainable Future
      </p>
    </section>
  </div>

  <br>

  <section class="padding">
    <div class="flex lg:flex-row flex-col gap-4 relative">
      <div class="w-full">
        <section class="padding">
          <LazyExperienceTimeline />
        </section>
      </div>
    </div>
  </section>

  <br>

  <section class="">
    <LazySkills />
  </section>

  <section class="">
    <LazyContactForm /> <!--Need to lazily prefetch the image tho right?-->
  </section>
  
  <LazyFooter />

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
  useServerSeoMeta({
    title:'Michael Strain',
    ogTitle:'Michael Strain',
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
