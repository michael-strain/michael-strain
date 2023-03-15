<template>
  <div class="shadow plainContainer">
    <p class="containText">Shadow Container</p>
  </div>
  <v-divider class="p-5" />
  <div class="plainContainer">
    <p class="containText">Plain Container</p>
  </div>
</template>


<style>

.shadow {
  box-shadow: 1px 1px 6px 0px gray; 
}

.plainContainer {
  margin-inline: auto;
  font-size: large;
  padding: 5rem;
  border:1px solid lightgray;
  background: white;
}

.containText {
  font-size: 1.25rem;
  color:darkslategrey;
  text-align: center;
  padding: 1rem;
}

</style>
