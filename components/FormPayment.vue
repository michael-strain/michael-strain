<template>
  <div class="textfields">
    <h3>Submit Payment</h3>
    <v-text-field
      type="text"
      label="Name on Card"
      placeholder="Name on Card"
      hide-details
    />
    <v-text-field
      type="text"
      label="Card Number"
      placeholder="Card Number"
      hide-details
    />
    <div class="flex gap-7 <sm:flex-col">
      <v-text-field
        type="text"
        label="CVV"
        placeholder="CVV"
        hide-details
      />
      <v-text-field
        type="text"
        label="Zip Code"
        placeholder="Zip Code"
        hide-details
      />
    </div>
    <div>
      <v-checkbox
        v-model="terms"
        label="I authorize Company Name to charge this card."
        class="btnlink"
        @click="terms=!terms"
      />
      <div class="btnRow">
        <button
          v-if="terms"
          class="btnstyle"
          color="success"
          variant="outlined"
        >
          Submit Payment
        </button>
        <button
          v-else
          disabled
          class="disabled btnstyle"
        >
          Submit Payment
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const terms = ref(false)

</script>