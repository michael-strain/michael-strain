<template>
  <div class="lava_viewport lava_gradient_TopRadial">
    <div class="lava_filter">
      <div class="blob lava_blob-Left glowradial" />
      <div class="blob lava_blob-Center glowradial" />
      <div class="blob lava_blob-Right glowradial" />
      <div class="blob glowradial lava_blob-Top" />
      <div class="blob glowradial lava_blob-Bottom" />
    </div>
    <svg
      class="lava_gradient_BottomRadial"
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
</template>

<style scoped>

.lava_gradient_TopRadial {
  height: 100vh;
  width: 100vw;
  /* background-color:#090a0f; */
  background: radial-gradient(ellipse at bottom, rgb(var(--v-theme-primary-darken-3)), rgb(0, 0, 0)); 
}

.lava_viewport{
  height: 100vh;
  width: 100vw;
  position: fixed;
  top:0px;
  bottom: 0px;
  left:0px;
  right: 0px;
}

.lava_gradient_BottomRadial{
  height: 100vh;
  width: 100vw;
  background: radial-gradient(at bottom, transparent 50%, black);
  position: absolute;
  top:0;
  left:0;
}

.glowradial::before {
  content: "";
  border-radius: 100%;
  background-image: radial-gradient(rgb(var(--v-theme-primary-lighten-2)), rgb(var(--v-theme-primary)));
  position: absolute;
  filter:blur(15px);
  opacity: 90%;
  inset: 0px;
}

.lava_filter{
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
  position:absolute;
  will-change: transform;
}

.lava_blob-Top{
  border-radius: 50%;
  width: 100%;
  height: 8%;
  top: -5%;
  left:0;
  position: absolute;
}

.lava_blob-Bottom{
  border-radius: 50%;
  width: 100%;
  height: 10%;
  bottom: -30px;
  margin:auto;
}

.lava_blob-Left{
  width: 245px;
  height: 245px;
  bottom:-10%;
  left: 22%;
  animation: blob-one ease-in-out 38s infinite;
}

.lava_blob-Center{
  width: 385px;
  height: 395px;
  bottom:-55%;
  left: 35%;
  animation: blob-two ease-in-out 28s infinite;
}

.lava_blob-Right{
  width: 185px;
  height: 195px;
  bottom:0%;
  left: 58%;
  animation: blob-three ease-in-out 30s infinite;
}

/* Verticle Movement */
@keyframes blob-one{
  50%{
    transform: translateY(150%);
  }
  0%, 100%{
    transform: translateY(-400%);
  }
}
@keyframes blob-two{
  50%{
    transform: translateY(0);
  }
  0%, 100%{
     transform: translateY(-300%);
  }
}
@keyframes blob-three{
  50%{
    transform: translateY(300%);
  }
  0%, 100%{
     transform: translateY(-500%);
  }
}


</style>
