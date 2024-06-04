<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/max-attributes-per-line -->

<!--Ashley: 
  Home Page: Consolidate Footer Buttons.
  Services: 
-->

<template>
  <div>
    <div class="h-screen min-h-60 w-full m-0 p-0 flex">
      <v-parallax src="img/coffee-mountain.jpg" lazy-src="img/coffee-mountain.jpg">
        <!-- <v-parallax src="img/bright-red-unusual-flower.jpg" lazy-src="img/bright-red-unusual-flower.jpg"> -->
        <div class="flex h-full">
          <div class="<sm:w-0 sm:w-3/4" /> <!-- This just keeps our welcome bar on the right side -->
          <div class="<sm:w-full d-flex flex-column fill-height justify-center text-center align-center font-bold">
            <v-card class="absolute h-full bg-black pb-15">
              <div class="h-1/4" />
              <div class="bg-emerald-400 pt-6 pb-1">
                <h1 class="px-10 text-h4 !font-bold sm:text-h3 mb-4 tracking-widest font-serif" :style="{ fontFamily: 'Roboto Slab', textShadow: '2px 2px #000000'}">
                  WELCOME
                </h1>
              </div>
              <div class="px-5 py-6">
                <h4 class="subheading">
                  Grab a warm drink,<br>and read on to see<br>what we can do for you.
                </h4>
              </div>
              <div class="py-4 pr-8 pl-4 bg-slate-400">
                <NuxtLink to="/services">
                  <v-btn block class="m-2 btnc1">
                    <v-icon start icon="mdi-room-service-outline" />Services<v-icon end icon="mdi-room-service-outline" />
                  </v-btn>
                </NuxtLink>
                <a href="/shop">
                  <v-btn block class="m-2 btnc2">
                    <v-icon start icon="mdi-store" />Shop<v-icon end icon="mdi-store" />
                  </v-btn>
                </a>
                <NuxtLink to="/investors">
                  <v-btn block class="m-2 btnc3">
                    <v-icon start icon="mdi-chart-areaspline" />Invest<v-icon end icon="mdi-chart-areaspline" />
                  </v-btn>
                </NuxtLink>
              </div>
            </v-card>
          </div>
        </div>
      </v-parallax>
    </div>
    <v-container class="align-middle items-center justify-center">
      <v-card class="p-5 m-5 align-middle items-center justify-center">
        <!-- Ash wants this to be bg-light-700 in light theme-->
        <div class="flex justify-center items-center text-center align-middle">
          <div class="w-full p-5 flex justify-center items-center text-center md:w-1/2">
            <div class="">
              <h1
                class="text-2xl mb-5" :style="{ fontFamily: 'Roboto Slab', textShadow: '2px 2px rgba(52, 211, 153)' }"
              >
                What You See
              </h1>
              <p
                class="text-justify"
              >
                This site functions as both a development playground for a suite of services I intend to offer, as well as a technical showcase and portfolio.
                It may look a bit chaotic now, but I intend to deploy each service separately as they become fully functional, and utilize this site as a central hub.
                This will allow me to quickly deploy modular and highly functional and customizable components that I can use when developing for future clients in need of similar features.
                Basically, you are looking at my toolbelt.
              </p>
            </div>
          </div>
          <!-- <div class="w-full p-5 hidden md:(flex w-1/2)">
            <img src="~/assets/img/brugmansia.svg" class="contain w-full" style="{ contain }">
          </div> -->
        </div>
      </v-card>
    </v-container>
  </div>
  <!-- <v-card class="p-5 m-5 h-auto">
        <div class="flex justify-center items-center text-center">
          <div class="m-10">
            <h1 class="text-2xl mb-5">
              Website Consistency
            </h1>
            <p>
              Consistency is essential for a website to be effective in creating a strong and recognizable brand image. It helps to create a sense of familiarity and trust with users, making it more likely that they will return to the site in the future. Website consistency involves using the same visual elements, such as colors, typography, and imagery, across all aspects of the website. This includes the website's layout, content, and marketing materials. Maintaining consistency in the messaging and tone used throughout the website also plays a vital role in building a strong impression. In addition, it also helps in creating a clear and cohesive message that is easy for users to understand and remember. Overall, consistency can greatly impact the effectiveness of a website.
            </p>
          </div>
        </div>
      </v-card> -->
  <!-- <p>
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
      </p> -->
  <div class="w-full m-0 p-0 flex items-center align-middle">
    <v-parallax src="img/purple-red-tree.jpg" lazy-src="img/purple-red-tree.jpg" class="items-center align-middle">
      <v-container class="items-center align-middle">
        <v-card class="p-5 m-5 h-auto">
          <!-- Ash wants this to be bg-white -->
          <div class="flex justify-center items-center text-center">
            <!-- <div class="w-1/2 p-5 flex justify-center items-center text-center"></div> -->
            <div class="m-10">
              <h1
                class="text-2xl mb-5" :style="{ fontFamily: 'Roboto Slab', textShadow: '2px 2px rgba(52, 211, 153)' }"
              >
                Back-End Web Development
              </h1>
              <p class="text-justify">
                Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website.
              </p>
              <!-- Front-end website development is important because it deals with the visual design and user experience of a website. This includes things like HTML, CSS, and JavaScript, which are used to create the layout, style, and interactivity of a website. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings. Overall it is responsible for how website looks and feels to the end user. -->
            </div>
            <!-- <div class="w-1/2 p-5">
            <img src="~/assets/img/brugmansia.svg" class="contain w-full" style="{ contain }">
          </div> -->
          </div>
        </v-card>

        <v-card class="p-5 m-5 h-auto">
          <!-- Ash wants this to be bg-white-->
          <div class="flex justify-center items-center text-center">
            <div class="m-10">
              <h1
                class="text-2xl mb-5" :style="{ fontFamily: 'Roboto Slab', textShadow: '2px 2px rgba(52, 211, 153)' }"
              >
                Front-End Web Development
              </h1>
              <p class="text-justify">
                Front-end website development is important because it deals with the visual design and user experience of a website. This includes things like HTML, CSS, and JavaScript, which are used to create the layout, style, and interactivity of a website. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings. Overall it is responsible for how website looks and feels to the end user.
              </p>
            </div>
          </div>
        </v-card>
      </v-container>
        
      <!-- <div class="d-flex h-full">
          <div class="flex-grow w-1/4" />
          <div class="d-flex w-3/4 align-center">
            <v-card class="opacity-85 !bg-white flex-grow align-center text-center p-5 m-5">
              <div class="p-10">Creating sustainable communities in Panama would have a number of benefits for the country and its inhabitants. One of the main benefits would be the conservation and protection of Panama's natural resources and biodiversity. Panama is home to a wide variety of ecosystems, including tropical forests, wetlands, and coral reefs, which are essential for maintaining the balance of the country's ecosystem. By promoting sustainable practices in communities, such as efficient use of resources and conservation of natural areas, it would help to preserve these ecosystems and the wildlife that depends on them for survival.
              </div>
            </v-card>
          </div>
          <div class="flex-grow w-1/4" />
        </div> -->
    </v-parallax>
  </div>
  <div class="w-full p-4 flex">
    <!--eslint-disable-next-line vuetify/no-deprecated-colors-->
    <div class="flex flex-wrap h-full w-full text-center justify-center align-center">
      <NuxtLink to="/subscribe" class="flex-auto">
        <v-btn class="m-1 bg-white flex">
          <v-icon icon="mdi-email" class="m-2" />Subscribe to Emails
        </v-btn>
      </NuxtLink>
      <NuxtLink to="/legal/faqs" class="flex-auto">
        <v-btn class="m-1 bg-white flex">
          <v-icon icon="mdi-chat-question" class="m-2" />Frequently Asked Questions
        </v-btn>
      </NuxtLink>
    </div>
  </div>
  <!-- <v-container>
      <v-card class="p-5 m-5 h-auto">
        <div class="flex justify-center items-center text-center">
          <div class="w-1/2 p-5 flex justify-center items-center text-center">
            <p>This site functions as both a development playground for a suite of services I intend to offer, as well as a technical showcase and portfolio.
I am somewhat chaotic in my organization, but I intend to deploy each service separately as they become fully functional, and utilize this site as a hub.
This will allow me to quickly deploy modular and highly functional and customizable components that I can use when developing for future clients in need of similar features.
Basically, you are looking at my toolbelt.</p>
          </div>
          <div class="w-1/2 p-5">
            <img src="~/assets/img/brugmansia.svg" class="contain w-full" style="{ contain }">
          </div>
        </div>
      </v-card>
    </v-container> -->

  <!-- Social Bar -->
  <!-- <v-card class="mb-4">
      <v-card-title class="text-center">
        SOCIALS
      </v-card-title>
      <div class="h-20 w-full m-0 p-0 flex bg-custcard mb-4">
        <div class="d-flex h-full w-full text-center justify-center align-center items-center primary">
          <a href="https://www.youtube.com/channel/UCXo9qETIsM-oNybayMhivPQ"><v-btn class="btnc2 m-1"><v-icon icon="mdi-youtube" class="m-2" />@michael-strain</v-btn></a>
          <a href="https://www.facebook.com/groups/therealestateinvestorsclub"><v-btn class="btnc1 m-1"><v-icon icon="mdi-facebook" class="m-2" />Investors Club</v-btn></a>
        </div>
      </div>
    </v-card> -->
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