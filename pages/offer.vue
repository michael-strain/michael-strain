<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <div v-if="!user">
      <NuxtLink to="/login">
        <v-btn>Login or Create Account</v-btn>
      </NuxtLink>
    </div>
    <div v-else>
      <FormCard>
        <template #formtitle>
          Submit an Employment Offer
        </template>
        <v-form
          ref="isFormValid"
          class="twocolinputs"
          @submit.prevent
        >
          <v-text-field
            v-model="position"
            type="text"
            :rules="[rules.required]"
            label="Position"
          />
          <v-text-field
            v-model="salary"
            type="text"
            :rules="[rules.required]"
            label="Salary (Gross Annual in USD)"
          />
          <v-text-field
            v-model="location"
            type="text"
            :rules="[rules.required]"
            label="Location"
          />
          <v-text-field
            v-model="startDate"
            type="date"
            :rules="[rules.required]"
            label="Start Date"
          />
          <v-text-field
            v-model="duties"
            type="text"
            :rules="[rules.required]"
            label="Duties & Responsibilities"
          />
          <v-text-field
            v-model="schedule"
            type="text"
            :rules="[rules.required]"
            label="Work Schedule"
          />
          <v-text-field
            v-model="companyGoals"
            type="text"
            label="Company Goals & Achievements"
          />
          <v-text-field
            v-model="benefits"
            type="text"
            label="Benefits"
          />
          <v-text-field
            v-model="timeOff"
            type="text"
            label="Time Off"
          />
          <v-text-field
            v-model="bonuses"
            type="text"
            label="Hiring Bonuses & Annual Bonuses"
          />
          -PDF upload for Offer Letter (and any other contracts, onboarding docs, benefits info, etc.)
          <FileUploader :uid="user.uid" />
          <div class="form-control mt-2">
            <label class="cursor-pointer label">
              <input
                v-model="terms"
                type="checkbox"
                class="checkbox bg-base-100 outline checkbox-md"
              >
              <span class="w-full ml-4 text-left">
                <p class="">
                  I agree to all
                  <NuxtLink
                    to="/legal/termsAndConditions"
                  >
                    <a class="link link-acccent">Terms, Conditions, and Policies</a></NuxtLink>
                </p>
              </span>
            </label>
          </div>
          <div 
            v-if="offerSentSnackbar" 
            class="snackbar elevation-10"
          >
            <span>Your offer has been sent. <br> I will review, and your bid will be posted once approved.  I will keep in touch, and try to have a decision for you before your selected start date.</span>
          </div>
          <div 
            v-if="offerFailSnackbar" 
            class="snackbar elevation-10"
          >
            <span>Offer not sent.<br>Please fill out the required fields.</span>
          </div>
        </v-form>
        <div class="vbtn btn-wide btn-secondary text-secondary-content">
          <v-btn
            v-if="terms"
            class="mx-auto"
            variant="text"
            @click="submitOffer();"
          >
            Submit Offer
          </v-btn>
        </div>
      </FormCard>
    </div>
  </div>
</template>
<script setup>
import { useCurrentUser } from 'vuefire'
const user = useCurrentUser()

const position = ref('')
const salary = ref(0) //Need to convert auctions to WHOLE USD instead of stupid cents...
const location = ref('')
const startDate = ref()
const duties = ref('')
const schedule = ref('')
const companyGoals = ref('')
const benefits = ref('')
const timeOff = ref('')
const bonuses = ref('')

const offerFailSnackbar = ref(false)
const offerSentSnackbar = ref(false)

const rules = ref({
  required: value => !!value || 'Required.'
})

const submitOffer = async () =>{
  if(!(await isFormValid.value.validate()).valid){
    offerFailSnackbar.value = true
    await delay(3210)
    offerFailSnackbar.value = false
    return {error:"Form Invalid"}
  } else{
    let data = {
      position: position.value,
      salary: salary.value,
      location: location.value,
      startDate: startDate.value,
      duties: duties.value,
      schedule: schedule.value,
      companyGoals: companyGoals.value,
      benefits: benefits.value,
      timeOff: timeOff.value,
      bonuses: bonuses.value,
      uid: useCurrentUser().value.uid
    }
    await addDoc(collection(useFirestore(),'offers'),data)
  }
  isFormValid.value.reset()
  offerSentSnackbar.value = true
  await delay(500)
  offerSentSnackbar.value = false
}

const delay = ms => new Promise(res=> setTimeout(res,ms));

useServerSeoMeta({
  title: ' Employment Offer',
  ogTitle: 'Hire Michael Strain',
  description: 'This is the guy for the job.',
  ogDescription: 'This is the guy for the job, we should hire him.',
  twitterCard: 'summary_large_image',
  ogType:'website',
  ogUrl:'https://'+useRuntimeConfig().public.SITE_DOMAIN+'/offer'
})
</script>