<!-- eslint-disable vue/multi-word-component-names -->
<template>
  Contact Us
  We are always happy to chat!
  <div>
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