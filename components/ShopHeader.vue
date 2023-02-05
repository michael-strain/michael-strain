<template>
  <NuxtLink to="/shop">
    <h3
      class="text-black justify-center text-center align-center font-bold text-5xl mb-10"
      :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}"
    >
      SHOP
    </h3>
  </NuxtLink>
  
  <!--Quick Links-->
  <ul
    class="text-green-400 m-5 text-lg flex flex-wrap justify-center text-center align-center text-lg"
    :style="{fontFamily: 'Roboto Slab'}"
  >
    <li class="m-3 hover:text-green-600">
      <NuxtLink to="/shop/products/puzzles">
        PUZZLES
      </NuxtLink>
    </li>
    <li class="m-3 hover:text-green-600">
      <NuxtLink to="/shop/products/towels">
        TOWELS
      </NuxtLink>
    </li>
    <li class="m-3 hover:text-green-600">
      <NuxtLink to="/shop/products/cups">
        CUPS
      </NuxtLink>
    </li>
    <li class="m-3 hover:text-green-600">
      <NuxtLink to="/shop">
        ALL
      </NuxtLink>
    </li>
  </ul>
</template>