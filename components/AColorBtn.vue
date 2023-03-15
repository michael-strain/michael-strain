
import { title } from 'process';

<template>
  <!-- <button
    class="text-white p-1rem text-center max-w-15rem elevation-5 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500"
  >
    Butt Stuff
  </button> -->
  <button class="colorBtn">
    A Color Button
  </button>
</template>

<style>

.colorBtn {
  background: linear-gradient(0deg, rgb(72, 72, 72) 0%, rgb(128, 128, 128) 10%, rgb(195, 195, 195) 100%);
  padding-inline: 1.75rem;
  padding-block: .75rem;
  border-radius: 15px; 
  text-align: center;
  box-shadow: 1px 1px 6px 0px gray; 
  color: white;
  font-size: large;
}
  
</style>