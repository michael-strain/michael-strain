<template>
<div class="bgImg">
  <div class="bgImgCont bgImgText">
    <h1>Background Image</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
  </div>
</div>

  </template>

<style> 

.bgImg {
  position: relative;
}

.bgImg::before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7; 
  background: whitesmoke url("https://picsum.photos/id/24/4855/1803") center center/cover no-repeat;
  padding: 1rem;
  border:1px solid lightgray;
}

.bgImgCont {
  position: relative;
}

.bgImgText {
  font-size: 1.25rem;
  color:black;
  text-align: center;
  padding: 1rem;
  font-weight: 600;
}
</style>
<!-- <style>
  .bgImg {
    padding: 1rem;
    background: whitesmoke url("https://picsum.photos/id/24/4855/1803") center center/cover no-repeat;
    }
  .bgImg::before {
    opacity: .5;
  }
</style> -->
  