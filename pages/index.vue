<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div>
    <div class="h-screen min-h-60 w-full m-0 p-0 flex">
      <v-parallax src="img/bright-red-unusual-flower.jpg" lazy-src="img/bright-red-unusual-flower.jpg">
        <div class="flex h-full">
          <div class="<sm:w-0 sm:w-3/4" /> <!-- This just keeps our welcome bar on the right side -->
          <div class="<sm:w-full d-flex flex-column fill-height justify-center text-center align-center font-bold">
            <v-card class="absolute h-full opacity-80 bg-black">
              <div class="h-1/4" />
              <div class="bg-rose-700 pt-6 pb-1">
                <h1 class="text-h4 sm:text-h3 mb-4 tracking-widest font-serif" :style="{ fontFamily: 'Roboto Slab', textShadow: '3px 2px #558ABB'}">
                  WELCOME
                </h1>
              </div>
              <div class="px-5 py-4">
                <h4 class="subheading">
                  Now is your chance to make a difference.
                  <br> Support our community in Panama.
                  <br> Purchase our products or services.
                  <br> Make an impact.
                </h4>
              </div>
              <div class="m-3 py-4 pr-8 pl-4 bg-slate-400">
                <NuxtLink to="/services">
                  <v-btn block class="m-2 btnc1">
                    <v-icon start icon="mdi-room-service-outline" />Services<v-icon end icon="mdi-room-service-outline" />
                  </v-btn>
                </NuxtLink>
                <NuxtLink to="/shop">
                  <v-btn block class="m-2 btnc2">
                    <v-icon start icon="mdi-store" />Shop<v-icon end icon="mdi-store" />
                  </v-btn>
                </NuxtLink>
                <NuxtLink to="/investors">
                  <v-btn block class="m-2 btnc3">
                    <v-icon start icon="mdi-chart-areaspline" />Invest<v-icon end icon="mdi-chart-areaspline" />
                  </v-btn>
                </NuxtLink>
                <NuxtLink to="/donate">
                  <v-btn block class="m-2 btnc4">
                    <v-icon start icon="mdi-charity" />Donate<v-icon end icon="mdi-charity" />
                  </v-btn>
                </NuxtLink>
              </div>
            </v-card>
          </div>
        </div>
      </v-parallax>
    </div>

    <v-container>
      <v-card class="p-5 m-5 h-auto">
        <div class="flex justify-center items-center text-center">
          <div class="w-1/2 p-5 flex justify-center items-center text-center">
            This site is meant to serve as a resource for the benefit of<br>
            the community of Panamanians I live and work with.
          </div>
          <div class="w-1/2 p-5">
            <img src="~/assets/img/brugmansia.svg" class="contain w-full" style="{ contain }">
          </div>
        </div>
      </v-card>

      <p>
        Proceeds from the store and donations will serve to feed, shelter, and provide basic necessities for poverty stricken people.
        The store will be stocked with goods made in Panama.  The sale of a single bag, while it may not seem like much to you, can be used to feed an entire family for a month.
        Local services will be in direct support of Panamians without work, creating jobs and income for those without.
        Donations will be used to feed, shelter, and provide basic necessities for poverty stricken people.
        A single dollar can feed someone a good meal.  $20 can cover medical expenses.  Anything you can give will be greatly appreciated, and when you donate, I'll actually send you pictures of the people I'm giving your donations to, so you can see the difference you are making.
        Times are tough in the US, I understand if you can't give today, but in the very least I hope you follow along and give what you can, when you can - whether it's a donation, a purchase, or even contributing your own time and efforts, all will be welcome.

        The site may have my name on it, but I am dedicating myself to making a much needed positive impact on the community I've chosen to call home.
        Right here should be a blog/vlog video
        Below the blog should be guides/classes in cards arranged as two columns
        E-mail subcsription bar

        Probably do another big parallax image here, or a bifold looking thing
      </p>
    </v-container>

    <div class="h-screen min-h-60 w-full m-0 p-0 flex">
      <v-parallax src="img/coffee-mountain.jpg" lazy-src="img/coffee-mountain.jpg">
        <div class="d-flex h-full">
          <div class="flex-grow w-1/4" />
          <div class="d-flex w-1/2 align-center">
            <v-card class="opacity-80 flex-grow align-center text-center p-5 m-5">
              Content:
              <br> I have no purpose.
            </v-card>
          </div>
          <div class="flex-grow w-1/4" />
        </div>
      </v-parallax>
    </div>

    <v-container>
      <v-card class="p-5 m-5 h-auto">
        <div class="flex justify-center items-center text-center">
          <div class="w-1/2 p-5 flex justify-center items-center text-center">
            <p>This is going to be content.</p>
          </div>
          <div class="w-1/2 p-5">
            <img src="~/assets/img/brugmansia.svg" class="contain w-full" style="{ contain }">
          </div>
        </div>
      </v-card>
    </v-container>

    <!-- Social Bar -->
    <v-card class="mb-4">
      <v-card-title class="text-center">SOCIALS</v-card-title>
      <div class="h-20 w-full m-0 p-0 flex bg-custcard mb-4">
        <!--eslint-disable-next-line vuetify/no-deprecated-colors-->
        <div class="d-flex h-full w-full text-center justify-center align-center items-center primary">
          <a href="https://www.youtube.com/channel/UCXo9qETIsM-oNybayMhivPQ"><v-btn class="btnc2 m-1"><v-icon icon="mdi-youtube" class="m-2"/>@michael-strain</v-btn></a>
          <a href="https://www.facebook.com/groups/therealestateinvestorsclub"><v-btn class="btnc1 m-1"><v-icon icon="mdi-facebook" class="m-2"/>Investors Club</v-btn></a>
        </div>
      </div>
    </v-card>

    <div class="h-60 w-full m-0 p-0 flex">
      <v-parallax src="img/panama-city-ocean.jpg" lazy-src="img/panama-city-ocean.jpg">
        <div class="d-flex h-full">
          <div class="d-flex w-40 align-center">
            <div class="m-4 opacity-70 <sm:hidden"><v-icon icon="mdi-email-outline" size="80" class="flex-grow"/></div>
          </div>
          <div class="d-flex w-full align-center">
            <v-card class="opacity-90 flex-grow align-center text-center p-5 m-5">
              <NuxtLink to="/subscribe">
                <v-btn block class="btnc3">
                  <v-icon start icon="mdi-email" />Subscribe to our Newsletter<v-icon end icon="mdi-email" />
                </v-btn>
              </NuxtLink>
            </v-card>
          </div>
          <div class="d-flex w-40 align-center">
            <div class="m-4 opacity-70 <sm:hidden"><v-icon icon="mdi-email-outline" size="80" class="flex-grow"/></div>
          </div>
        </div>
      </v-parallax>
    </div>
  </div>
</template>

<style scoped>
.btnc1:hover{
  color:blue;
}
.btnc2:hover{
  color:red;
}
.btnc3:hover{
  color:green;
}
.btnc4:hover{
  color:purple;
}
</style>