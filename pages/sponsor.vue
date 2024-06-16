<template>
  Want your name on my site?
  Want to lend me your support?

  Sign up to give me money on a recurring basis! :D
  <v-text-field v-model="recurringDonationAmt" label="Monthly Donation Amount" />
  <p v-if="recurringDonationAmt>0&&recurringDonationAmt<=5">Buds Tier: Smoke a joint with me!</p>
  <p v-if="recurringDonationAmt>5&&recurringDonationAmt<=10">Good Buds Tier: Smoke a good joint with me!</p>
  <p v-if="recurringDonationAmt>10&&recurringDonationAmt<=20">Great Buds Tier: Smoke a great joint with me!</p>
  <p v-if="recurringDonationAmt>20&&recurringDonationAmt<=40">Best Buds Tier: Smoke a joint with me!</p>
  <p v-if="recurringDonationAmt>40&&recurringDonationAmt<=50">Friends Tier: I display your name/logo on my list of sponsors+ Smoke a blunt with me!</p>
  <p v-if="recurringDonationAmt>50&&recurringDonationAmt<=99">Good Friends Tier: Damn what do you want from me?  I could send you friendly emails?</p>
  <p v-if="recurringDonationAmt>100">Ultimate Tier: Just like being the best?  I'm not sure why you would want this, but yay!</p>
  <v-btn @click="submitDonationSubscriptionIntent">Submit</v-btn>
</template>

<script setup>
const recurringDonationAmt = ref(0)
const submitDonationSubscriptionIntent = () => {
  console.log("Not yet built :P")
}
</script>