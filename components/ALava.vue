<template>
<div class="first">
  <div class="second">
    
<div class="lamp">
    <div class="lava">
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob top"></div>
      <div class="blob bottom"></div>
      
    </div>
  
</div>

<svg class="neg" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </defs>
</svg>
</div>
</div>

<!-- <h1 class="text-light">CSS Lava Lamp</h1>
<p class="text-light">Originally by Rose Lui</p> -->
</template>

<style>
.first {
  height: 100%;
  background-color:#3D0066;
  /* background: radial-gradient(ellipse at bottom, rgba(27, 39, 53, 1), rgba(9, 10, 15, 1));
  overflow: hidden; */
  
}
.second {
  background: transparent;
}
.neg{
  height: 200vh;
  width: 100vw;
  background: radial-gradient(transparent 30%, black);
  position: absolute;
  top:0;
  left:0;
  overflow: hidden;
}

.lava{
  filter: url("#goo");
  position:absolute;
  height:100%;
  width:100%;
  top:0;
  left:0;
}

.blob{
  border-radius: 50%;
  background: #C86BFA;
  position:absolute;
}

.blob.top{
  border-radius: 50%;
  width: 100%;
  height: 6%;
  top: -3%;
  left:0;
  position: absolute;
  
}
.blob.bottom{
  border-radius: 50%;
  width: 100%;
  height:6%;
  bottom: -3%;
  left:0;
}
.blob:nth-child(1){
  width: 200px;
  height: 200px;
  left: 35%;
  bottom:-15%;
 
  animation: wobble 4s ease-in-out alternate infinite, blob-one ease-in-out 13s infinite;
}
.blob:nth-child(2){
  width: 330px;
  height: 330px;
  right: 24%;
  bottom:-65%;
  
  animation: wobble 5s ease-in-out alternate infinite, blob-two ease-in-out 22s infinite;
 
  

}
.blob:nth-child(3){
  width: 150px;
  height: 150px;
  bottom:-15%;
  left: 34%;
  
  animation: wobble 6s ease-in-out alternate infinite, blob-three ease-in-out 16s infinite;
}
.blob:nth-child(4){
  width: 235px;
  height: 235px;
  bottom:-19%;
  left: 30%;
  
  animation: wobble 7s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;
}
.blob:nth-child(4){
  width: 235px;
  height: 235px;
  bottom:-19%;
  left: 30%;
  animation: wobble 8s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;
}
.blob:nth-child(5){
   width: 55px;
  height: 55px;
  bottom:-25%;
  left: 34%;
  
  animation: wobble 9s ease-in-out alternate infinite, blob-five ease-in-out 32s infinite;
}
.blob:nth-child(6){
  width: 35px;
  height: 35px;
  bottom:-25%;
  right: 34%;
  
  animation:wobble 10s ease-in-out alternate infinite,  blob-six ease-in-out 12s infinite;
}
.blob:nth-child(7){
  width: 435px;
  height: 435px;
  bottom:-85%;
  right: 40%;
  
  animation: wobble 11s ease-in-out alternate infinite, blob-seven ease-in-out 32s infinite;
}
@keyframes blob-one{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
    transform: translatey(-700%);
  }
}

@keyframes blob-two{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
    transform: translatey(-420%);
  }
}

@keyframes blob-three{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
    transform: translatey(-305%);
  }
}
@keyframes blob-four{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
    transform: translatey(-605%);
  }
}
@keyframes blob-five{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
     transform: translatey(-700%);
  }
}
@keyframes blob-six{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
     transform: translatey(-700%);
  }
}
@keyframes blob-seven{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
     transform: translatey(-300%);
  }
}


@keyframes wobble {
  50% {
   border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  }
  100% {
   border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%;
  }
}


</style>