<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NuxtLayout
    :name="layout"
  />
  <div class="flex overflow-auto h-screen justify-center">
    <div class="content">
      <div class="">
        <div class="pagetitle textstroke">
          LSDope
        </div>
      </div>
      <div class="justify-center">
        <div>
          <section>
            <div class="bg-something on-something">background color with appropriate text color contrast</div>
            <h2>Create an Account</h2>
            <div class="information darkdiv">
              <ANewAccount />
            </div>
          </section>
          <section>
            <h2>Log In</h2>
            <div class="information darkdiv">
              <div class="textfields">
                <v-text-field
                  id="email"
                  v-model="email"
                  label="Email Address"
                  placeholder="Email Address"
                  hide-details
                  class=""
                />
           
                <v-text-field
                  id="password"
                  v-model="password"
                  label="Password"
                  placeholder="Password"
                  hide-details
                  class=""
                />
              </div>
              <div class="justify-space-between flex -my-2rem pt-2">
                <button
                  class="btnlink"
                  @click="showUserRegistration=!showUserRegistration"
                >
                  Create New Account
                </button>
                <button class="btnlink">
                  Forgot Password
                </button>
              </div>

              <div class="btnRow">
                <button
                  class="btnstyle"
                  @click="loginWithGoogle"
                >
                  Sign In with Google
                </button>
                <button
                  class="btnstyle"
                  @click="signInUser(loginEmail, loginPassword)"
                  @keyup.enter="signInUser(loginEmail, loginPassword)"
                >
                  Sign In with Email
                </button>
              </div>
            </div>
          </section>
          <!--Work above me-->
          <section class="">
            <h2 class="">
              This is an Example
            </h2>
            <div class="information darkdiv">
              <p>Maybe you want a paragraph here. Maybe you want a paragraph here. Maybe you want a paragraph here. Maybe you want a paragraph here. Maybe you want a paragraph here. </p>
              <v-text-field
                id="firstname"
                v-model="text"
                label="Then a Text Field"
                placeholder="First Name"
                hint="Here's a little hint..."
                persistent-hint 
                class=""
              />
              <p>Why not have a bunch of buttons?</p>
              <div class="btnRow">
                <button class="bg-white">
                  Butt Stuff
                </button>
                <button class="underline-animation">
                  Wait, I Meant...
                </button>
                <button>Button Stuff</button>
              </div>
              <v-img
                class="align-self-center flex"
                :width="300"
                aspect-ratio="16/9"
                cover
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              />
            </div>
          </section>

          <section class="">
            <h2 class="newtext">
              Create New Account
            </h2>
            <div class="information darkdiv">
              <ANewAccount />
            </div>
          </section>

          <section class="">
            <h2 class="">
              Colors :D
            </h2>
            <div class="information darkdiv">
              <div
                v-for="c in Object.keys(vcolors)"
                :key="c"
                :class="'bg-' + c"
              >
                <p>{{ c }}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  //Need to setup vcolors by pulling them from the current vuetify theme object's colors object
  //Do I need to import the vuetify file here?
  //how do I get the name of the active vuetify theme object so I can pull it's colors object?
  import { ref } from 'vue'
  import "@/assets/global.css"
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  const layout = "lava-layout";
  //theme.global.name.value = theme.global.current.value

  
  const vcolors = theme.global.current.value.colors
  console.log(Object.keys(vcolors))
  // vcolors = theme.value.colors

// Rain JS Test 


</script>

<style>
.custom-class {
    background: rgb(var(--v-theme-something));
    color: rgba(var(--v-theme-on-something), 0.9)
  }

.maintitle {
  transition: all 1s;
  -webkit-text-stroke: 4px var(--secondary-color);
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
}
 /* 8px 0px 3px #E6B723,
    15px 0px 3px #FF2828,
    20px 0px 5px black,
    0px 0px 20px black; */

.maintitle:hover {
  font-variation-settings: "wght" 100, "ital" 0;
  text-shadow:  0px 0px 0px black;
  -webkit-text-stroke: 4px blue;
}

</style>

<!-- <section class="">
  <h2 class="">
    Colors :D
  </h2>
  <div class="information w-full">
    <div
      v-for="c in Object.keys(vcolors)"
      :key="c"
      :class="'bg-' + c"
    >
      <p>{{ c }}</p>
    </div>
  </div>
</section> -->