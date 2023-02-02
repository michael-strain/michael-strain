<!-- eslint-disable vue/multi-word-component-names -->
<!-- Ashley: Make form clearable by pressing icon. Header. Vertically align Send Message and checkbox area. Message sent indicator (Pop-up?). Padding and Margins. Colors. Add a pic somewhere to make it not boring? Maybe parallax in the header.-->
<template>
  <div>
    <div class="h-screen w-full p-0 m-0">
      <!--Form-->
      <v-parallax
        src="img/purple-red-tree.jpg"
        lazy-src="img/purple-red-tree.jpg"
        class="items-center align-middle p-0 m-0 h-100"
      >
        <v-form class="flex text-center align-middle items-center justify-center flex-shrink mt-20">
          <v-card class="w-2/3 my-5">
            <v-container class="">
              <!-- <h1 class="text-3xl my-10 text-center"> -->
              <h3
                class="justify-center text-center align-center font-bold text-5xl mt-5 mb-10"
                :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}"
              >
                Contact Us
              </h3>
              <v-row class="bg-custcard pt-5">
                <v-col
                  cols="12"
                  sm=""
                  class=""
                >
                  <v-text-field
                    label="First Name"
                    placeholder="First Name"
                    variant="solo"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm=""
                >
                  <v-text-field
                    label="Last Name"
                    placeholder="Last Name"
                    variant="solo"
                    class=""
                  />
                </v-col>
              </v-row>



              <v-row class="bg-custcard">
                <v-col
                  cols="12"
                  sm=""
                >
                  <!-- class="flex text-center align-middle items-center justify-center flex-shrink" -->
                  <v-text-field
                    label="Email Address"
                    placeholder="Email Address"
                    variant="solo"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm=""
                >
                  <v-text-field
                    label="Phone Number"
                    placeholder="Phone Number"
                    variant="solo"
                  />
                </v-col>
              </v-row>
              <v-row class="bg-custcard">
                <v-col
                  cols="12"
                >
                  <v-textarea
                    label="Message"
                    placeholder="Message"
                    variant="solo"
                    auto-grow
                  />
                </v-col>
              </v-row>
              <v-row class="bg-custcard">
                <v-col>
                  <v-row class="flex text-center align-middle items-center justify-center">
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
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-form>
      </v-parallax>
    </div>
  </div>
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