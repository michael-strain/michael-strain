<template>
  <div class="dialogContain">
    <div class="containTitle">
      A Dialog Pop Up
    </div>
    <div class="containText">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
    <div class="btnRow">
      <APlainBtn />
      <AColorBtn />
    </div>
  </div>
</template>


<style>

.dialogContain {
  margin-inline: auto;
  box-shadow: 1px 1px 6px 0px gray; 
  font-size: large;
  max-width: 50rem;
  background-color:white;
}

.containTitle {
  color: white;
  font-size: 2.5rem;
  text-align: center;
  background-color: gray;
  padding: 1rem;
  font-weight: bold;
}

.containText {
  font-size: 1.25rem;
  color:darkslategrey;
  text-align: center;
  padding: 1rem;
}

/* <div class="text-center p-2rem pt-0 flex-wrap flex gap-2rem justify-center"> */
.btnRow {
  padding: 1rem;
  padding-top: 1rem;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  row-gap: 2rem;
}

</style>
