<!-- eslint-disable vue/multi-word-component-names -->

<!--TODO

-Finish conversion from eCommerce format to Portfolio format
-Copy to offer page and reformat

-->
<template>
  <div class="card"> 
    <FormCard>
      <template #formtitle>
        Contact Us
      </template>

      <v-form
        ref="isFormValid"
        class="twocolinputs"
        @submit.prevent
      >
        <!-- <template #forminputs> -->
        <v-text-field
          v-model="firstName"
          type="text"
          label="First Name"
          :rules="[rules.required]"
        />

        <v-text-field
          v-model="lastName"
          type="text"
          label="Last Name"
          :rules="[rules.required]"
        />
            
        <v-text-field
          v-model="email"
          type="email"
          label="Email Address"
          :rules="[rules.required, rules.email]"
        />
            
        <v-text-field
          v-model="phone"
          type="tel"
          label="Phone Number"
        />
        <v-autocomplete
          auto-select-first
          v-model="category"
          :items="['Recruiting Inquiry', 'Web Development Inquiry', 'Custom Product Request', 'Website Bug Report', 'Other']"
          label="Message Type"
          :rules="[rules.required]"
          class=" "
        />
        <v-text-field
          v-model="subject"
          type="text"
          label="Subject"
          :rules="[rules.required, rules.max]"
          class="col-span-2 <md:col-span-1"
        />
        <v-textarea
          v-model="message"
          type="text"
          label="Message"
          :rules="[rules.required]"
          class="col-span-2 <md:col-span-1"
        />
        <!-- </template> -->

        <!-- <template #formbuttons> -->
        
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
        
        <!-- </template> -->
      </v-form>
      <div class="vbtn btn-wide btn-secondary text-secondary-content">
        <v-btn
          class="mx-auto"
          variant="text"
          @click="submitMessage();"
        >
          Send Message
        </v-btn>
      </div>
    </FormCard>
  </div>
</template>

<script setup>
import { addDoc, collection } from 'firebase/firestore';
import { useCurrentUser } from 'vuefire'

  //Cool idea here - what if this form actually -reacts- into a chatbox and connects to a chat with a real person
  const message = ref()
  const email = ref()
  const category = ref()
  const phone = ref()
  const firstName = ref()
  const lastName = ref()
  const subject = ref()

  const msgSentSnackbar = ref(false)
  const msgFailSnackbar = ref(false)
  const isFormValid = ref()

  const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  // const phonePattern = /^^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

  const rules = ref({
    email: v=> emailPattern.test(v) || 'Invalid E-mail',
    // phone: v=>phonePattern.test(v) || 'Invalid Phone Number',
    required: value => !!value || 'Required.',
    max: v => v.length <= 50 || 'Max 50 Characters'
  })

  onMounted(async()=>{
    if(useCurrentUser().value){
      firstName.value = useUserDataStore().userData.firstName ? useUserDataStore().userData.firstName : '';
      lastName.value = useUserDataStore().userData.lastName ? useUserDataStore().userData.lastName : '';
      email.value = useCurrentUser().value.email
      phone.value = useCurrentUser().value.phoneNumber
    }
  })

  const submitMessage = async () => {
    //use brevo to send message and contact details to service@domain.com/support/whatevs
    if(!(await isFormValid.value.validate()).valid){
      msgFailSnackbar.value = true
      await delay(3210)
      msgFailSnackbar.value = false
      return {error:"Form Invalid"}
    } else{

      let subj = '['+category.value+'] ' + subject.value

      //Before sending the email, let's add the info to a collection in firestore
      let data = {
        sendDate: new Date(),
        subject: subject.value,
        category: category.value,
        message: message.value,
        email: email.value,
        userAgent: useDevice().userAgent
      }
      if(phone.value.length>0){
        data.phone = phone.value
      }
      if(useCurrentUser().value){
        data.author = useCurrentUser().value.uid
        if(useCurrentUser().value.displayName){
          data.displayName = useCurrentUser().value.displayName
        } else {
          data.displayName = "No Display Name"
        }
      } else{
        data.displayName = "Anonymous"
      }
      try{
        await addDoc(collection(useFirestore(),'contactSubmissions'),data)
      }catch(e){
        console.log("Error Updating contactSubmissions Doc: " + e)
      }


      //Send
      try{
        await $fetch('/api/brevo/contact',{method:'POST',body:{subject:subj, from:email.value, fromName: firstName.value + ' ' + lastName.value, msg:message.value}})
      } catch(e){
        msgFailSnackbar.value = true
        await delay(3210)
        msgFailSnackbar.value = false
      }

      isFormValid.value.reset()
      //if this doesn't work, maybe isFormValid.reset() directly?
      // isFormValid.value.reset()
      // message.value = ''
      // email.value = ''
      // category.value = ''
      // phone.value = ''
      // firstName.value = ''
      // lastName.value = ''
      // subject.value = ''
      // isFormValid.value.resetValidation()

      msgSentSnackbar.value = true
      await delay(5000)
      msgSentSnackbar.value = false
    }
  }

  useServerSeoMeta({
    title: useRuntimeConfig().public.SHOP_NAME + ' - Contact',
    ogTitle: 'CONTACT ' + useRuntimeConfig().public.SHOP_NAME,
    description: 'Need something?  Just ask!',
    ogDescription: 'Ever shop here?  A new US-Based eCommerce site with great prices on dope products.  They even do custom prints on tons of different products!',
    twitterCard: 'summary_large_image',
    ogType:'website',
    ogUrl:'https://'+useRuntimeConfig().public.SITE_DOMAIN
  })

  const delay = ms => new Promise(res => setTimeout(res, ms));

</script>