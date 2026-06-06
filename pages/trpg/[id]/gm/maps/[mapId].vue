<template>
  <GmSandboxCanvas /> 
</template>

<script setup>
import GmSandboxCanvas from '~/components/GmSandboxCanvas.vue';

definePageMeta({
  layout: 'gm',
})
//Need to let GMs define collisons, area boundaries, map edges and connections (when player moves to the end of a trail leading off the map, define a teleport point and which map and what coordinates it leads to - or let the gms manually configure this)
//For maps with multiple floors, instead of doing some crazy leveling bullshit and spreading players across multiple maps, let's put all the levels of a map on the same background image and teleport to otherwise inaccessible parts of that same map
//Will need to adjust the map size to fit grid lines so that each box represents a 5 ft square


</script>