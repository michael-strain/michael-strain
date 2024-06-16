<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-layout>
      <v-main>
        <v-img src="/img/bright-red-unusual-flower.jpg" height="250px" />
        <v-container class="my-10 mx-20">
          <v-card-title>Services</v-card-title>
          <p>Looking for an eCommerce Platform that outperforms Amazon on PageSpeed Insights?</p>
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
        <v-card class="my-10 mx-20">
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
        </v-card>
      </v-main>
    </v-layout>
  </div>
</template>

<script setup>
  useServerSeoMeta({
    title:'Michael Strain',
    ogTitle:'The Personal Website of Michael Strain',
    description:'An Entrepreneur with Atypical Priorities and a Diverse Background and Vast Passions.',
    ogDescription:'This guy is going places.  I mean he already has gone places, seriously.  Did you read about him on Forbes yet?  I\'m compelled to make an early-stage investment in his next project!',
    ogImage:'img/mountain-coffeefarm.jpg',
    twitterCard:'summary_large_image',
    ogType:'website',
    ogUrl:'https://michael-strain.com'
  })
</script>