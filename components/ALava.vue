<template class="">
  <div class="first">
    <div class="second">
      <div class="lamp">
        <div class="lava">
          <div class="blob glowradial" />
          <div class="blob glowradial" />
          <div class="blob glowradial" />
          <div class="blob glowradial" />
          <div class="blob glowradial" />
          <div class="blob glowradial" />
          <div class="blob glowradial" />
          <div class="blob glowradial" />
          <div class="blob glowradial top" />
          <div class="blob glowradial bottom" />
        </div>
      </div>

      <svg
        class="neg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend
              in="SourceGraphic"
              in2="goo"
            />
          </filter>
        </defs>
      </svg>
    </div>
  </div>
</template>

<style>
.first {
  height: 100%;
  /* background-color:#090a0f; */
  background: radial-gradient(ellipse at bottom, rgb(51, 53, 27), rgba(9, 10, 15, 1)); 
}
/* @keyframes mymove {
  0% {background-color: #ff006e;}
  50% {background-color: #8338ec;}
  100% {background-color: #3A86FF;}
}  */
.second {
  background: transparent;
}
.neg{
  height: 100vh;
  width: 100vw;
  background: radial-gradient(at bottom, transparent 15%, black);
  position: absolute;
  top:0;
  left:0;
}
.glowradial::before {
  content: "";
  border-radius: 100%;
  /* background-image: radial-gradient(
    rgb(199, 71, 71),pink 99%); */
  background-image: radial-gradient(
      #d4ff00, #ff0055);
    position: absolute;
    filter:blur(22px);
    opacity: 90%;
    inset: -10px;
}
.lava{
  filter: url("#goo");
  position:absolute;
  height:100%;
  width:100%;
  top:0;
  left:0;
  overflow: hidden;
}

.blob{
  border-radius: 45%;
  /* animation: mymove 15s infinite alternate; */
  /* background: #C86BFA; */
  position:absolute;
}

.blob.top{
  border-radius: 50%;
  width: 100%;
  height: 8%;
  top: -4%;
  left:0;
  position: absolute;
  animation: mymove 15s infinite alternate;

}
.blob.bottom{
  border-radius: 50%;
  width: 100%;
  height: 10%;
  bottom: -30px;
  margin:auto;
  animation: mymove 15s infinite alternate;
}
.blob:nth-child(1){
  width: 200px;
  height: 200px;
  left: 35%;
  bottom:-15%;
 
  animation: mymove 15s infinite alternate, wobble 4s ease-in-out alternate infinite, blob-one ease-in-out 20s infinite;
}
.blob:nth-child(2){
  width: 330px;
  height: 330px;
  right: 24%;
  bottom:-65%;
  
  animation: mymove 15s infinite alternate, wobble 5s ease-in-out alternate infinite, blob-two ease-in-out 28s infinite;
}
.blob:nth-child(3){
  width: 150px;
  height: 150px;
  bottom:-15%;
  left: 30%;
  
  animation: mymove 15s infinite alternate, wobble 6s ease-in-out alternate infinite, blob-three ease-in-out 16s infinite;
}
.blob:nth-child(4){
  width: 235px;
  height: 235px;
  bottom:-19%;
  left: 30%;
  
  animation: mymove 15s infinite alternate, wobble 7s ease-in-out alternate infinite, blob-four ease-in-out 16s infinite;
}
.blob:nth-child(4){
  width: 235px;
  height: 235px;
  bottom:-19%;
  left: 20%;
  animation: mymove 15s infinite alternate, wobble 8s ease-in-out alternate infinite, blob-four ease-in-out 25s infinite;
}
.blob:nth-child(5){
   width: 55px;
  height: 55px;
  bottom:-25%;
  left: 34%;
  
  animation: mymove 15s infinite alternate, wobble 9s ease-in-out alternate infinite, blob-five ease-in-out 32s infinite;
}
.blob:nth-child(6){
  width: 150px;
  height: 100px;
  bottom:-85%;
  right: 34%;
  
  animation: mymove 15s infinite alternate, wobble 10s ease-in-out alternate infinite,  blob-six ease-in-out 12s infinite;
}
.blob:nth-child(7){
  width: 435px;
  height: 435px;
  bottom:-50%;
  right: 40%;
  
  animation: mymove 15s infinite alternate, wobble 11s ease-in-out alternate infinite, blob-seven ease-in-out 42s infinite;
}
@keyframes blob-one{
  0%, 100%{
    transform: translatey(10%);
  }
  50%{
    transform: translatey(-500%);
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
    transform: translatey(10%);
  }
  50%{
    transform: translatey(-500%);
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
    transform: translatey(100%);
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