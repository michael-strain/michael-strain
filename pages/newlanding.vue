<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <!--Left Large Title
  Bottom SICO sticky on scroll w contact
  Animated examples and with titles ex. ecommerce, admin, subscription, chat/inbox, personal profiles
  Contact form  -->

  <!--Header-->
  <div class="p h-screen flex flex-col bg-black">
    <p class="text-xl md:text-8xl font-bold mt-auto">
      Website<br>Design<br>Expeditious<br>Beautiful
    </p>
    <p class="text-2xl mt-2">
      One company to handle design, creation, and functionality for any business.
    </p>
  </div>
  <!--Thirds-->
  <section class="p">
    <div class="mx-auto flex flex-wrap">
      <h1 class="text-center mb-8">
        Services
      </h1>
      <div class="wrapper flex md:gap-10 gap-8 md:flex-row flex-col">
        <div class="delay1 third">
          <p class="w-full text-gray-600 text-xs md:text-sm">
            Design
          </p>
          <p class="w-full font-bold text-xl  mb-3">
            User Interface
          </p>
          <p class="">
            Beautiful animations and transtions. Seamless on mobile and desktop. We will incorporate your companies current designs for craft them for you. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings.
          </p>
        </div>
        <div class="delay2 third">
          <p class="w-full text-gray-600 text-xs md:text-sm">
            Something
          </p>
          <p class="w-full font-bold text-xl mb-3">
            Branding
          </p>
          <p class="">
            We can make your company look cool.
          </p>
        </div>
        <div class="delay3 third">
          <p class="w-full text-gray-600 text-xs md:text-sm">
            Efficient
          </p>
          <p class="w-full font-bold text-xl mb-3">
            Performance
          </p>
          <p class="">
            Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website. Beat the shit outta other major ecommerce platforms.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!--Swoopies-->
  <section class="p wrapper2">
    <h2 class="w-full text-5xl font-bold text-center">
      Industries
    </h2>
    <br>
    <!-- <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div> -->
    <div class="wrapper justify-center flex gap-8 w-full sm:flex-row flex-col">
      <div class="w-1/5 scale">
        <img
          src="/public/favicon.png"
          class=""
        >
      </div>
      <div class="w-3/5 fade faderight">
        <p class="text-4xl  font-bold py-6">
          Ecommerce/Inventory/Data Analysis
        </p>
        <p class="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
        </p>
      </div>
    </div>
    <br>
    <div class="wrapper justify-center flex gap-8 w-full sm:flex-row-reverse flex-col">
      <div class="w-1/5 scale">
        <img
          src="/public/favicon.png"
          class=""
        >
      </div>
      <div class="w-3/5 fade text-right fadeleft">
        <p class="text-4xl  font-bold py-6">
          Subscriptions/Admins/Brand Redesign
        </p>
        <p class="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
        </p>
      </div>
    </div>
  </section>
  <section class="flex flex-col sm:flex-row flex-auto">
    <div
      class="flex flex-col sm:flex-row w-full overflow-hidden text-white bg-cover relative justify-center"
      style="background-image: url(https://cdn.midjourney.com/0b25cf56-ee2a-4656-8a9d-91d14804ad4e/0_2.png);"
    >
      <div class="absolute bg-black opacity-70 inset-0 z-[0]" />
      <div
        class="absolute triangle right-0 w-1/2 z-[0]"
        style=""
      />
      <div class="text-right m-10 z-[1] bg-pink w-1/4">
        <h1>
          Let's Talk
        </h1>
        <p class="">
          Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
        </p>
      </div>
      <div class="z-[1] bg-yellow w-full md:w-1/2">
        <v-form
          class="md:grid md:grid-cols-2 gap-x-5 text-base-content rounded-lg bg-base-100 p-6 m-10"
        >
          <v-text-field
            type="text"
            label="First Name"
          />

          <v-text-field
            type="text"
            label="Last Name"
          />
            
          <v-text-field
            type="email"
            label="Email Address"
          />
          <v-text-field
            type="tel"
            label="Phone Number"
          />
          <v-text-field
            type="text"
            label="Subject"
            class="col-span-2 <md:col-span-1"
          />
          <v-textarea
            type="text"
            label="Message"
            class="col-span-2 <md:col-span-1"
          />
          <div 
            v-if="msgSentSnackbar" 
            class="snackbar elevation-10"
          >
            <span>Your message has been sent. <br> We will get back to you as soon as possible.</span>
          </div>
          <div 
            v-if="msgFailSnackbar" 
            class="snackbar elevation-10"
          >
            <span>Message was unable to send.<br>Please fill out the required fields.</span>
          </div>
          <button class="btn btn-wide col-span-2 mx-auto">
            Send Message
          </button>
        </v-form>
      </div>
      <ul class="circles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'blank'
})
</script>

<style scoped>

.scale {
  transform: scale(.9);
  opacity: 0%;
}

.wrapper2:is(:hover, :focus) .wrapper .scale {
  transform: scale(1);
  opacity: 100%;
  transition-duration: 1s;
}

.wrapper:is(:hover, :focus) .third {
  transform: translateY(0);
  opacity: 100%;
}

.third {
  @apply w-full md:w-1/3 p-5 bg-base-200 flex flex-col flex-grow flex-shrink rounded-lg;
  transform-origin: 0 0;
  transform: translateY(200px);
  opacity: 0;
  transition-property: transform, opacity;
  transition-duration: .5s;
  transition-timing-function: ease;
  box-shadow: 0px 8px 10px 1px rgba(0, 0, 0, 0.2);
}

.fade {
  transform-origin: 0 0;
  /* transform: translateX(200px); */
  /* opacity: 0; */
  transition-property: transform, opacity;
  transition-duration: 1s;
  transition-timing-function: ease;
}

.faderight {
  transform: translateX(1500px);
}

.fadeleft {
  transform: translateX(-1500px);
}

.wrapper2:is(:hover, :focus) .wrapper .fade {
  transform: translateX(0);
  opacity: 100%;
}

.delay1 {
  transition-delay: 50ms;
}

.delay2 {
  transition-delay: 200ms;
}

.delay3 {
  transition-delay: 350ms;
}

.p {
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 25px;
  padding-bottom: 50px;
}

h1 {
  @apply w-full my-2 text-5xl font-bold
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
  .circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;  
}
.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}
 
 
.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}
 
.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}
 
.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}
 
.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}
 
.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}
 
.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}
 
.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}
 
.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}
 
.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
  @keyframes animate {
 
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
 
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
 
}
.triangle{
  border-top:60rem solid #786d6d;
  border-left:25rem solid transparent;
}

.gradient {
        background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
      }
</style>
