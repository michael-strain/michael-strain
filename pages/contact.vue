<!-- eslint-disable vue/multi-word-component-names -->
<!-- Ashley: Make form clearable by pressing icon. Header. Vertically align Send Message and checkbox area. Message sent indicator (Pop-up?). Padding and Margins. Colors. Add a pic somewhere to make it not boring? Maybe parallax in the header.-->
<template>
  <v-form>
    <v-card class="m-5">
      <v-container>
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
            <v-responsive>
              <v-textarea
                label="We love to hear what you have to say."
                placeholder="We love to hear what you have to say."
                variant="solo"
                auto-grow
                hide-details="auto"
                clearable
              />
            </v-responsive>
          </v-col>
        </v-row>
        <row class="flex">
          <v-btn class="">
            <v-icon
              icon="mdi-email"
              class=""
            />Send Message
          </v-btn>
          <v-checkbox label="Subscribe to Emails" />
        </row>
      </v-container>
    </v-card>




    <!-- <div>
    <v-card>
      <v-card-title>Contact Us</v-card-title>
      <v-card-subtitle>
        <p>
          We are always happy to chat!
        </p>
      </v-card-subtitle>
      <v-form
        ref="applicationform"
        v-model="formVal"
      >
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="First name"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                label="Last name"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="msg"
                :rules="msgRules"
                label="Your Message"
                required
              />
            </v-col>

            

            <v-btn
              :disabled="!formVal"
              color="success"
              class="mr-4"
              @click="validatify"
            >
              Submit
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div> -->
  </v-form>
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