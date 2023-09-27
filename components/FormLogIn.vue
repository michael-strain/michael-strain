<template>
  <div class="textfields">
    <h3>Log Into Your Account</h3>
    <v-text-field
      label="Email Address"
      placeholder="Email Address"
      hide-details
      class=""
    />
           
    <v-text-field
      label="Password"
      placeholder="Password"
      hide-details
      class=""
    />
  </div>
  <div class="justify-space-between flex my-n5">
    <button
      class="btnlink"
    >
      Create New Account
    </button>
    <button class="btnlink">
      Forgot Password
    </button>
  </div>

  <div class="btnRow">
    <button
      class="btnstyle"
    >
      Sign In with Google
    </button>
    <button
      class="btnstyle"
    >
      Sign In with Email
    </button>
  </div>
</template>