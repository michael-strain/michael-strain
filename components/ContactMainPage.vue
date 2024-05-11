<template>
  <div class="flex flex-col sm:flex-row flex-auto">
    <div
      class="padding flex gap-8 flex-col sm:flex-row w-full overflow-hidden text-white bg-cover relative justify-center z-0"
      style="background-image: url(https://cdn.midjourney.com/0b25cf56-ee2a-4656-8a9d-91d14804ad4e/0_2.png);"
    >
      <div class="absolute bg-black opacity-60 inset-0" />
      <div
        class="absolute triangle right-0 w-1/2 z-[0]"
      />
      <div class="text-right z-[1] text-lg w-1/4 py-8">
        <h1>
          Let's Talk
        </h1>
        <p class="">
          Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
        </p>
      </div>
      <div class="z-3 w-full md:w-1/2 z-[1] py-8">
        <v-form
          class="md:grid md:grid-cols-2 gap-x-5 rounded-lg bg-black p-6"
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
          <!-- <div 
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
          </div> -->
          <button class="font-semibold uppercase p-5 col-span-2 mx-auto">
            Send Message
          </button>
        </v-form>
      </div>
    </div>
  </div>
</template>

<style scoped>

.triangle{
  border-top:60rem solid #3c3c3c;
  border-left:25rem solid transparent;
  z-index: 0;
}

</style>