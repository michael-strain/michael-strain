<template>
  <h1>
    <slot name="formtitle" />
  </h1>
  <v-form>
    <div class="twocolinputs"> 
      <slot name="forminputs" />
    </div>
    <slot name="formpostinputs" />

    <div class="flex gap-4 w-full flex-wrap justify-space-around mb-4 <md:flex-col">
      <slot name="formbuttons" />
    </div>

    <slot />
  </v-form>
</template>

<script setup>
// const isValid = ref()
// const emit = defineEmits(['validate'])
// watch(computed(async()=>(await isValid.value.validate()).valid),(newValid)=>{
//   //runs everytime a value changes in any field, so annoying
//   emit('validate',newValid)
//   // console.log("newValid: " + newValid)
// })
</script>

<!-- <FormCard>
  <template #formtitle>
  </template>

  <template #forminputs>
  </template>

  <template #formpostinputs>
  </template>

  <template #formbuttons>
  </template>
</FormCard> -->