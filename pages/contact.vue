<!-- eslint-disable vue/multi-word-component-names -->
<!-- Ashley: Make form clearable by pressing icon. Header. Vertically align Send Message and checkbox area. Message sent indicator (Pop-up?). Padding and Margins. Colors. Add a pic somewhere to make it not boring? Maybe parallax in the header.-->
<template>
  <!--Form-->
  <!-- <v-form class="flex">
          <v-card class="flex m-10">
            <v-container class="">
              <h1 class="text-2xl mb-5 text-center">
                What Do You Think?
              </h1>
              <v-row>
                <v-col class="flex">
                  <v-text-field
                    label="First Name"
                    placeholder="First Name"
                    variant="solo"
                  />
                </v-col>
                <v-col class="flex">
                  <v-text-field
                    label="Last Name"
                    placeholder="Last Name"
                    variant="solo"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col class="flex">
                  <v-text-field
                    label="Email Address"
                    placeholder="Email Address"
                    variant="solo"
                  />
                </v-col>
                <v-col class="flex">
                  <v-text-field
                    label="Phone Number"
                    placeholder="Phone Number"
                    variant="solo"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-textarea
                    label="We love to hear what you have to say."
                    placeholder="We love to hear what you have to say."
                    variant="solo"
                    auto-grow
                  />
                </v-col>
              </v-row>
              <row class="flex text-center align-middle items-center justify-center">
                <div class="flex align-middle items-center h-min">
                  <v-btn class="align-middle items-center h-full">
                    <v-icon
                      icon="mdi-email"
                      class=""
                    />Send Message
                  </v-btn>
                  <v-checkbox
                    class="pl-10 h-14 min-w-20"
                    label="Subscribe to Emails"
                  />
                </div>
              </row>
            </v-container>
          </v-card>
        </v-form> -->


  <div class="h-screen min-h-60 w-full m-0 p-0 flex">
    <v-parallax
      src="img/coffee-mountain.jpg"
      lazy-src="img/coffee-mountain.jpg"
    >
      <!-- <v-parallax src="img/bright-red-unusual-flower.jpg" lazy-src="img/bright-red-unusual-flower.jpg"> -->
      
      <div class="flex h-full">
        <!--Form-->
        <v-form class="flex text-center align-middle items-center justify-center flex-shrink">
          <v-card class="w-2/3 m-10">
            <v-container class="">
              <h1 class="text-2xl mb-10 mt-5 text-center">
                What Do You Think?
              </h1>
              <p class="mb-10 bg-custcard">
                Make text field wrap. <br>Make text field clearable.<br>Change input field color.<br>
              </p>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    label="First Name"
                    placeholder="First Name"
                    variant="outlined"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    label="Last Name"
                    placeholder="Last Name"
                    variant="outlined"
                    class="bg-custcard"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    label="Email Address"
                    placeholder="Email Address"
                    variant="outlined"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    label="Phone Number"
                    placeholder="Phone Number"
                    variant="outlined"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-textarea
                    label="We love to hear what you have to say."
                    placeholder="We love to hear what you have to say."
                    variant="outlined"
                    auto-grow
                  />
                </v-col>
            
                <v-col>
                  <row class="flex text-center align-middle items-center justify-center">
                    <div class="sm:flex align-middle items-center h-min">
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-btn class="align-middle items-center h-full">
                          <v-icon
                            icon="mdi-email"
                            class="mr-3"
                          />Send Message
                        </v-btn>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-checkbox
                          class="h-14 text-black"
                          label="Subscribe to Emails"
                        />
                      </v-col>
                    </div>
                  </row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-form>

       
        

        <!--Header-->
        <div class="<sm:w-full d-flex flex-column fill-height justify-center text-center align-center font-bold">
          <v-card class="absolute h-full bg-black pb-15">
            <div class="h-1/4" />
            <div class="bg-emerald-400 pt-6 pb-1">
              <h1
                class="px-10 text-h4 !font-bold sm:text-h3 mb-4 tracking-widest font-serif"
                :style="{ fontFamily: 'Roboto Slab', textShadow: '2px 2px #000000'}"
              >
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
                <v-btn
                  block
                  class="m-2 btnc1"
                >
                  <v-icon
                    start
                    icon="mdi-room-service-outline"
                  />Services<v-icon
                    end
                    icon="mdi-room-service-outline"
                  />
                </v-btn>
              </NuxtLink>
              <a href="/shop">
                <v-btn
                  block
                  class="m-2 btnc2"
                >
                  <v-icon
                    start
                    icon="mdi-store"
                  />Shop<v-icon
                    end
                    icon="mdi-store"
                  />
                </v-btn>
              </a>
              <NuxtLink to="/investors">
                <v-btn
                  block
                  class="m-2 btnc3"
                >
                  <v-icon
                    start
                    icon="mdi-chart-areaspline"
                  />Invest<v-icon
                    end
                    icon="mdi-chart-areaspline"
                  />
                </v-btn>
              </NuxtLink>
              <NuxtLink to="/donate">
                <v-btn
                  block
                  class="m-2 btnc4"
                >
                  <v-icon
                    start
                    icon="mdi-charity"
                  />Donate<v-icon
                    end
                    icon="mdi-charity"
                  />
                </v-btn>
              </NuxtLink>
            </div>
          </v-card>
        </div>
      </div>
    </v-parallax>
  </div>


  <!--Form-->
  <v-parallax
    src="img/purple-red-tree.jpg"
    lazy-src="img/purple-red-tree.jpg"
    class="items-center align-middle"
  >
    <v-form class="flex text-center align-middle items-center justify-center flex-shrink">
      <v-card class="w-2/3 m-10">
        <v-container class="">
          <h1 class="text-2xl mb-10 mt-5 text-center">
            What Do You Think?
          </h1>
          <p class="mb-10 bg-custcard">
            Make text field wrap. <br>Make text field clearable.<br>Change input field color.<br>
          </p>
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="First Name"
                placeholder="First Name"
                variant="outlined"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Last Name"
                placeholder="Last Name"
                variant="outlined"
                class="bg-custcard"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Email Address"
                placeholder="Email Address"
                variant="outlined"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Phone Number"
                placeholder="Phone Number"
                variant="outlined"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
            >
              <v-textarea
                label="We love to hear what you have to say."
                placeholder="We love to hear what you have to say."
                variant="outlined"
                auto-grow
              />
            </v-col>
            
            <v-col>
              <row class="flex text-center align-middle items-center justify-center">
                <div class="sm:flex align-middle items-center h-min">
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-btn class="align-middle items-center h-full">
                      <v-icon
                        icon="mdi-email"
                        class="mr-3"
                      />Send Message
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    class=""
                  >
                    <v-checkbox
                      class="h-14"
                      label="Subscribe to Emails"
                    />
                  </v-col>
                </div>
              </row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-form>
  </v-parallax>
</template>

<script setup>
  import { ref } from 'vue'

  const applicationform = ref(null)
  const formVal = ref(false)
  const ynm = ref(['Yes','No','Maybe'])
  // const yn = ref(['Yes','No'])
  const firstname = ref('')
  const lastname = ref('')
  const nameRules = ref([v => !!v || 'Name is required.'])
  const email = ref('')

  const emailRules =  ref([
        v => !!v || 'E-mail is required.',
        v => /.+@.+/.test(v) || 'E-mail must be formVal',
      ])
  const msg = ref('')
  const msgRules = ref([
        v => !!v || 'Hello?',
      ])

  //Cool idea here - what if this form actually -reacts- into a chatbox and connects to a chat with a real person

  function validatify(){
    console.log("I am gonna return applicationform.value.validate()")
    return applicationform.value.validate()
  }
</script>