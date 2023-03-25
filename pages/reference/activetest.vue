<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="page">
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
    <div class="blob" />
  </div>

  <h2 class="text">
    LSDope
  </h2>
</template>

<style lang="scss">
// $blob-count: 16;
// // @import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');

// @keyframes stretch {
//   0% {
//     transform: scale(1, 1);
//   }
//   50% {
//     transform: scale(.85, 1.1);
//   }
//   100%{
//     transform: scale(1, 1);
//   }
// }

// @for $i from 1 to $blob-count+1{
//   @keyframes float#{$i}{
//     $startpos: random(200) - 200;
//     $endpos: $startpos * -1;
//     $wobble: 10%;

//     0%{
//       top: #{$startpos + '%'};
//       transform: translateX($wobble*-1);
//     }
    
//     25%{
//       transform: translateX($wobble);
//     }
    
//     50%{
//       transform: translateX($wobble*-1);
//     }
    
//     75%{
//     transform: translateX($wobble);
//     }
    
//     100%{
//       top: #{$endpos + '%'};
//       transform: translateX($wobble*-1);
//     }
//   }
// }

// @for $n from 1 to $blob-count{
//   @keyframes morph#{$n}{
//     @for $i from 1 to 101{
//       $tl: (random(60) + 70) + '%';
//       $tr: (random(60) + 70) + '%';
//       $bl: (random(60) + 70) + '%';
//       $br: (random(60) + 70) + '%';
//       $tl2: (random(60) + 70) + '%';
//       $tr2: (random(60) + 70) + '%';
//       $bl2: (random(60) + 70) + '%';
//       $br2: (random(60) + 70) + '%';

//       #{$i}%{
//         border-radius: #{$tl} #{$tr} #{$bl} #{$br} / #{$tl2} #{$tr2} #{$bl2} #{$br2};
//       }
//     }
//   }
// }

// body{
//   -webkit-filter: brightness(1.2) contrast(20);
//   background: orange;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
// }

// .page{
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   overflow: hidden;
//   background: yellow;
//   padding:0;
//   margin:0;
//   top:0;
//   left:0;
//   -webkit-filter: blur(20px);
// }

// .text{
//     $font-size: 100;
//     $toppos: $font-size/2;
//     font-family: Shrikhand;
//     font-weight: 100;
//     font-size: #{$font-size}px;
//     transform: translate(-50%, calc(-50% - #{$toppos}px));
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     color: blue;
//     mix-blend-mode: difference;
//   }

// .blob{
//   display: block;
//   position: absolute;
//   width: 100px;
//   height: 100px;
//   background-color: skyblue;
//   border-radius: 50%;
// }



// @for $i from 1 through $blob-count + 1{
//   $rdim: random(300) + 5;
//   $rdur: 200 + 's';
//   $rdurfloat: (random(45) + 25) + 's';
//   .blob:nth-child(#{$i}){
//     width: #{$rdim}px;
//     height: #{$rdim}px;
//     left: percentage($i/$blob-count);
//     animation: morph#{$i} #{$rdur} alternate-reverse linear infinite, float#{$i} #{$rdurfloat} alternate-reverse linear infinite, stretch #{$rdur} alternate-reverse linear infinite;
//   }
// }
</style>
