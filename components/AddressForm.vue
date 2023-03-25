<template>
  <div class="m-5 flex-col flex gap-5">
    <v-text-field
      id="address1"
      v-model="address1"
      type="text"
      label="Shipping Address"
      placeholder="Street Address or P.O. Box"
      hide-details
      class="shadow textField"
    />
    <v-text-field
      id="address2"
      v-model="address2"
      type="text"
      label="Apt, suite, unit, ect."
      placeholder="Apt, suite, unit, ect."
      hide-details
      class="shadow textField"
    />
    <v-text-field
      id="city"
      v-model="city"
      type="text"
      label="City"
      placeholder="City"
      hide-details
      class="shadow textField"
    />
    <v-text-field
      id="region"
      v-model="region"
      type="text"
      label="State"
      placeholder="State"
      hide-details
      class="shadow textField"
    />
    <v-text-field
      id="zip"
      v-model="zip"
      type="text"
      label="Zip Code"
      placeholder="Zip Code"
      hide-details
      class="shadow textField"
    />
    <v-text-field
      id="country"
      v-model="country"
      :items="countries"
      label="Country"
      placeholder="Country"
      hide-details
      class="shadow textField"
      transition="scale-transition"
    />
  </div>
</template>