<template>
  <NuxtLink to="/shop">
    <h3
      class="pt-10 text-black justify-center text-center align-center font-bold text-6xl mb-10"
      :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(139, 195, 74)'}"
    >
      L.S.DOPE
    </h3>
  </NuxtLink>
  
  <!--Quick Links-->
  <ul
    class="text-secondary m-5 flex flex-wrap justify-center text-center align-center text-lg"
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