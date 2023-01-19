<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container class="flex-grow h-full w-full">
    <v-card class="h-full">
      <h3
          class="text-black justify-center text-center align-center font-bold text-5xl my-10"
          :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}"
        >
          NEWSLETTER SUBSCRIPTION
        </h3>
      <!-- <h1 class="font-extrabold text-xl m-4">I realize iFrames are icky.</h1>
      <p class="break-words m-4 font-thin">I apologize.  It's not pretty, and I'm not proud, but it's what my e-mail service provider gave me to work with.<br>So, until I tear it apart and make my own version of their form, we are stuck with icky.  :'(</p> -->
      <iframe
        class="p-5 m-5"
        width="540"
        height="1000"
        src="https://1ed9d584.sibforms.com/serve/MUIEAFrEzm8GUf0DvPocOKUS9o7gzB803YWCH66TtVwfOQVI46Y4s6l3t80uzYXTxLOc4nEXbE2LpqI2VWOLlW72joY9-ANnRdpj4A8AICuD_U79_av5DqpjtxDxi5WwW62t1x-NpUYD0LGG6mkczBJxDqmwRuJtxC5sgBiKMCsO9x1jIgxmHejG_lPOiHnbiYyg2mUeRpRCPRsR"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
        style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
      />
    </v-card>
  </v-container>
</template>