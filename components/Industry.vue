<template>
  <div class="wrapper2">
    <h2 class="w-full text-5xl font-bold text-center">
      Industries
    </h2>
    <br>
    <!-- <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div> -->
    <div class="wrapper justify-center flex gap-8 w-full sm:flex-row flex-col">
      <div class="w-1/5 scale">
        <img
          src="/favicon.png"
          class=""
        >
      </div>
      <div class="w-3/5 fade faderight">
        <p class="text-4xl  font-bold py-6">
          Ecommerce/Inventory/Data Analysis
        </p>
        <p class="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
        </p>
      </div>
    </div>
    <br>
    <div class="wrapper justify-center flex gap-8 w-full sm:flex-row-reverse flex-col">
      <div class="w-1/5 scale">
        <img
          src="/favicon.png"
          class=""
        >
      </div>
      <div class="w-3/5 fade text-right fadeleft">
        <p class="text-4xl  font-bold py-6">
          Subscriptions/Admins/Brand Redesign
        </p>
        <p class="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper2:is(:hover, :focus) .wrapper .scale {
  transform: scale(1);
  opacity: 100%;
  transition-duration: 1s;
}

.scale {
  transform: scale(.9);
  opacity: 0%;
}

.fade {
  transform-origin: 0 0;
  /* transform: translateX(200px); */
  /* opacity: 0; */
  transition-property: transform, opacity;
  transition-duration: 1s;
  transition-timing-function: ease;
}

.faderight {
  transform: translateX(1500px);
}

.fadeleft {
  transform: translateX(-1500px);
}

.wrapper2:is(:hover, :focus) .wrapper .fade {
  transform: translateX(0);
  opacity: 100%;
}
</style>