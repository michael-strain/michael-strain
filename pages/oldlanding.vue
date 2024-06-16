<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-layout>
    <v-main>
      <v-container class="m-20">
        <div class="flex gap-10 text-center align-middle">
          <v-card-actions class="flex-col">
            <NuxtLink to="/portfolio"><v-btn>Portfolio</v-btn></NuxtLink>
            <br>
            <NuxtLink to="/sponsor"><v-btn variant="plain">Sponsor</v-btn></NuxtLink>
            <NuxtLink to="/donate"><v-btn variant="plain">Donate</v-btn></NuxtLink>
            <NuxtLink to="/hire"><v-btn variant="plain">Hire</v-btn></NuxtLink>
            <!-- <v-card-subtitle class="text-center mb-5">You learn the most about a person by learning:</v-card-subtitle> -->
            <!-- <NuxtLink to="/goals"><v-btn variant="plain">What's Motivates Them</v-btn></NuxtLink>
            <NuxtLink to="/projects"><v-btn variant="plain">How They Spend Their Time</v-btn></NuxtLink>
            <NuxtLink to="/blog/personal-timeline"><v-btn variant="plain">Who They Spend Their Time With</v-btn></NuxtLink> -->
          </v-card-actions>
          <v-img class="bg-white" height="250px"></v-img>
        </div>
      </v-container>
      <v-divider />
      <v-container class="flex flex-col pt-10 text-center justify-center">
          <p class="w-full p-2">Have something to say?</p>
          <NuxtLink to="/contact"><v-btn variant="plain" class="mb-5">Get In Touch</v-btn></NuxtLink>
      </v-container>
      <v-divider />
      <v-container class="text-center justify-center flex">
        <v-card-actions class="text-center justify-center">
          <v-btn variant="tonal">
            <v-icon icon="mdi-google" />
          </v-btn>
          <v-btn variant="tonal">
            <v-icon icon="mdi-github" />
          </v-btn>
          <v-btn variant="tonal">
            <v-icon icon="mdi-mastodon" />
          </v-btn>
          <v-btn variant="tonal">
            <v-icon icon="mdi-youtube" />
          </v-btn>
          <v-btn variant="tonal">
            <v-icon icon="mdi-email" />
          </v-btn>
        </v-card-actions>
      </v-container>
      <!-- <v-container class="my-10 mx-20">
        <p>Looking for your own custom eCommerce platform that outperforms Amazon on PageSpeed Insights?</p>
        <v-btn>
          <a href="https://lsdope.com">I built one.</a>
        </v-btn>
        <v-btn>
          <NuxtLink to="/seller-application">Apply For Your Own</NuxtLink>
        </v-btn>
        <v-divider />
        <p>Looking for a dev team?</p>
        <v-btn>
          <NuxtLink to="/project-proposal">Send A Proposal</NuxtLink>
        </v-btn>
        <v-divider />
        <p>Investing in startups, sustainable real estate, or various other projects I feel like taking on?</p>
        <v-btn>
          <NuxtLink to="/invest">Reveal Opportunities</NuxtLink>
        </v-btn>
        <v-divider />
        <p>Feeling charitable?  Appreciative of something I did?  Just like throwing money around?</p>
        <v-btn>
          <NuxtLink to="/donate">Donate</NuxtLink>
        </v-btn>
      </v-container>
      <v-container class="my-10 mx-20">
        <v-card-title>Social Stuff</v-card-title>
        <p>Read the blog, which includes both personal and professional articles.</p><br>
        <v-btn>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </v-btn>
        <v-divider />
        <a href="https://www.youtube.com/channel/UCXo9qETIsM-oNybayMhivPQ" class="flex-auto">
          <v-btn class="m-1 bg-white flex">
            <v-icon icon="mdi-youtube" class="m-2" />Watch YouTube
          </v-btn>
        </a>
        <v-divider />
        <v-btn>Github</v-btn>
        <v-divider />
        <v-btn>Mastodon</v-btn>
        <p>Anything else...?Google or Google Developer profile?</p><br>
      </v-container> -->
    </v-main>
  </v-layout>
</template>

<script setup>
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