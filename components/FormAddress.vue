<template>
  <div class="textfields">
    <h3>Enter Your Address</h3>
    <v-text-field
      type="text"
      label="Shipping Address"
      placeholder="Street Address or P.O. Box"
      hide-details
    />
    <v-text-field
      type="text"
      label="Apt, suite, unit, ect."
      placeholder="Apt, suite, unit, ect."
      hide-details
    />
    <div class="flex gap-7 <sm:flex-col">
      <v-text-field
        type="text"
        label="City"
        placeholder="City"
        hide-details
      />
      <v-text-field
        type="text"
        label="State"
        placeholder="State"
        hide-details
      />
    </div>
    <div class="flex gap-7 <sm:flex-col">
      <v-text-field
        type="text"
        label="Zip Code"
        placeholder="Zip Code"
        hide-details
      />
      <v-autocomplete
        label="Country"
        placeholder="Country"
        :items="['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France']"
      />
    </div>
    <button
      class="btnstyle"
      variant="text"
    >
      Update Address
    </button>
  </div>
</template>
