<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <NuxtLayout :name="layout" /> -->
  <div class="">
    <!-- <ToggleTheme /> -->
    <div class="fadein">
      <!-- <div class="">
        <p class="pagetitle textstroke">
          Cool Shit Co.
        </p>
      </div> -->
      <div class="grid grid-cols-3 gap-10 p-10 bg-secondary-lighten-3 <lg:grid-cols-2 <sm:grid-cols-1"> 
        <section class="">
          <h2 class="">
            Chat Messages
          </h2>
          <div class="baseoutline">
            <ChatMessages />
          </div>
        </section>

        <section class="">
          <h2 class="">
            File List
          </h2>
          <div class="baseoutline">
            <MyFiles />
          </div>
        </section>

        <section class="">
          <h2 class="">
            Inbox
          </h2>
          <div class="baseoutline">
            <Inbox />
          </div>
        </section>
        <section>
          <h2>Form New Account </h2>
          <div class="basediv">
            <FormNewAccount />
          </div>
        </section>

        <section>
          <h2>Form Log In</h2>
          <div class="basediv">
            <FormLogIn />
          </div>
        </section>

        <!--THIS BREAKS TOOLTIPS-->
        <section class="">
          <h2 class="">
            Form Address
          </h2>
          <div class="basediv">
            <FormAddress />
          </div>
        </section>

        <section class="">
          <h2 class="">
            Form Payment
          </h2>
          <div class="basediv">
            <FormPayment />
          </div>
        </section>

        <section class="">
          <h2 class="">
            Chips Selection
          </h2>
          <div class="basediv">
            <ChipSelection />
          </div>
        </section>

        <!--THIS BREAKS TOOLTIPS-->
        <section class="">
          <h2 class="">
            Form Trip Planner
          </h2>
          <div class="basediv">
            <FormTripPlanner />
          </div>
        </section>

        <section class="">
          <h2 class="">
            Weather Panel
          </h2>
          <div class="basediv">
            <WeatherPanel />
          </div>
        </section>

        <section class="">
          <h2 class="">
            Previous Order
          </h2>
          <div class="basediv">
            <PreviousOrder />
          </div>
        </section>
        
        <section class="">
          <h2 class="">
            Color Picker
          </h2>
          <div class="basediv">
            <ColorPicker />
          </div>
        </section>
        
        <section class="">
          <h2 class="">
            h2
          </h2>
          <div class="basediv">
            <p>component</p>
          </div>
        </section>

        <section class="">
          <h2 class="">
            h2
          </h2>
          <div class="basediv">
            <p>component</p>
          </div>
        </section>

        <section class="">
          <h2 class="">
            h2
          </h2>
          <div class="basediv">
            <p>component</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
  //Need to setup vcolors by pulling them from the current vuetify theme object's colors object
  //Do I need to import the vuetify file here?
  //how do I get the name of the active vuetify theme object so I can pull it's colors object?
  // import { ref } from 'vue'
  import "@/assets/global.css"
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  // const layout = "lava-layout"; 
  //theme.global.name.value = theme.global.current.value

  
  const vcolors = theme.global.current.value.colors
  // console.log(Object.keys(vcolors))
  // vcolors = theme.value.colors

// Rain JS Test 


</script>

<style>
/* 
.maintitle {
  transition: all 1s;
  -webkit-text-stroke: 4px rgba(var(--v-theme-on-secondary));
  font-variation-settings: "wght" 900, "ital" 1;
  font-size: 8rem;
  text-align: center;
  color: transparent;
  font-family: "Meta", sans-serif;
  text-shadow: 0px 0px 0px black,
    8px 8px 3px blue,
    13px 13px 3px darkblue,
    20px 20px 5px black,
    -1px -1px 5px black,
    -1px -1px 5px black;
  cursor: pointer;
} */
 /* 8px 0px 3px #E6B723,
    15px 0px 3px #FF2828,
    20px 0px 5px black,
    0px 0px 20px black; */

/* .maintitle:hover {
  font-variation-settings: "wght" 100, "ital" 0;
  text-shadow:  0px 0px 0px black;
  -webkit-text-stroke: 4px blue;
} */

</style>

<!-- <section class="">
  <h2 class="">
    Colors :D
  </h2>
  <div class="basediv w-full">
    <div
      v-for="c in Object.keys(vcolors)"
      :key="c"
      :class="'bg-' + c"
    >
      <p>{{ c }}</p>
    </div>
  </div>
</section> -->