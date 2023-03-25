<template>
  <!-- <div class="text-center px-0.5rem text-white py-1rem w-full bg-gray-500 h-auto"> -->

  <div class="footer">
    <p class="text-1rem">Michael-Strain © {{ new Date().getFullYear() }}</p>
    <NuxtLink class="text-white" to="/contact">
      Contact Us
    </NuxtLink>
    <p class="text-xs text-white text-wrap">
      All content is owned solely by Michael Strain and/or his companies, and shall not be used or reproduced without prior written consent.<br>All Rights Reserved.
    </p>
  </div>
</template>

<style>
.footer {
  margin-inline: auto;
  font-size: large;
  padding: 1rem;
  background: white;
  font-size: .75rem;
  color:white;
  text-align: center;
  background: gray;
}
</style>