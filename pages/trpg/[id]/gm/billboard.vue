<template>
  This page will allow GM's to post editable or non-editable information and documents for public or private view
  <TipTap />
</template>

<script setup>
//Lots of extensions available for audio, video, images, file upload, etc
//Need a save button to save the contents of the editor (and resources uploaded via extensions)
//Need a switch to toggle GM-Only documents vs Public Documents
definePageMeta({
  layout: 'gm',
})
</script>