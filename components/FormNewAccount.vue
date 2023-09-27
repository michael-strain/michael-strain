<template> 
  <!-- Register New User with Email and Password -->
  <div class="">
    <div class="textfields">
      <h3>Create A New Account</h3>
      <v-text-field
        label="First Name"
        placeholder="First Name"
        hide-details
      />
      <v-text-field
        label="Last Name"
        placeholder="Last Name"
        hide-details
        class=""
      />
      <v-text-field
        label="Email Address"
        placeholder="Email Address"
        hide-details
        class="text-field"
      />
           
      <v-text-field
        label="Password"
        placeholder="Password"
        hide-details
        class="text-field"
      />
    </div>
    <v-checkbox
      v-model="terms"
      label="I agree to the terms and conditions of creating this account."
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
        Complete Registration
      </button>
      <button
        v-else
        disabled
        class="disabled btnstyle"
      >
        Complete Registration
      </button>
      <button
        class="btnstyle"
        variant="text"
      >
        Log In With Existing Account
      </button>
    </div>
  </div>
</template>

<script setup>
const terms = ref(false)
</script>

<style>
 /* @import url('https://fonts.googleapis.com2?family=Raleway:wght@400;700&display=swap'); */

/* :root { */
  /* --secondary-color: #03e9f4;
  --secondary-color-light: #95faff;
  --color-form-bg: #e7e7e7;
  --color-form-input-bg: #f2f2f2;
  --color-form-button: #dadada;
  --color-form-shadow: #5a5a5a;
  --color-form-highlight: #FFF;
  --color-form-button-text: #333232;*/
/* }  */

/* .text-field {
  font-weight: bold;
  border: none;
  border-bottom: 1px solid var(--secondary-color);
  outline: none;
  background: gray;
} */
/* .textfields:hover {
  color: var(--secondary-color);
} */


/* .overlord {
  :root {
  --color-form-bg: #e7e7e7;
  --color-form-input-bg: #f2f2f2;
  --color-form-button: #dadada;
  --color-form-shadow: #5a5a5a;
  --color-form-highlight: #FFF;
  --color-form-button-text: #333232;
} */
/* .formcont {
    border-radius: 25px;
    padding: 2rem;
    background: rgba(0,0,0 .65);
    font-family: 'Raleway', sans-serif;
} */
  /* div.formcont {
    border-radius: 25px;
    padding: 2rem;
    background: rgba(255,255,255, .65);
    position: relative;
    border-left: 1px solid rgba(255,255,255,.5);
    border-top: 1px solid rgba(255,255,255,.5);
    border-right: 1px solid var(--color-form-shadow);
    border-bottom: 1px solid var(--color-form-shadow);
    
  }
  div.formcont::before { 
    content: ''; 
    background-image: linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%);
    background: var(--background-image-dark);
    top: -10px;
    left: -10px;
    bottom: -10px;
    right: -10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% auto;
    filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index:-1;
} 

  input {
    box-shadow:  inset 2px 2px 5px var(--color-form-shadow), inset -5px -5px 10px var(--color-form-highlight);
    padding: .75rem;
    background-color:var(--color-form-input-bg);
    width: 100%;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;
    border-top: 1px solid var(--color-form-shadow);
    border-left: 1px solid var(--color-form-shadow);
  }
  input:focus {
    outline: none;
    box-shadow:  inset 1px 1px 2px var(--color-form-shadow), inset -1px -1px 2px var(--color-form-highlight);
  }

  button {
    color: var(--color-form-button-text);
    font-weight: bold;
    box-shadow: -4px -4px 10px var(--color-form-highlight),  4px 4px 10px var(--color-form-shadow);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 600;
    border-radius: 10px;
    background-color:var(--color-form-button);
    padding: .75rem;
    border-top: 1px solid var(--color-form-highlight);
    border-left: 1px solid var(--color-form-highlight);
  }

  button:hover {
    box-shadow: -2px -2px 5px var(--color-form-highlight), 2px 2px 5px var(--color-form-shadow);
  }

  button:active {
    box-shadow: inset 1px 1px 2px var(--color-form-shadow), inset -1px -1px 2px var(--color-form-highlight);
    border-top: 1px solid var(--color-form-shadow);
    border-left: 1px solid var(--color-form-shadow);
  }
  .checkbox {
    font-weight: 600;
  }
} */



</style>