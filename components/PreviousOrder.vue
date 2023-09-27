<template>
  <div class="shadow">
    <div class="orderHistRow">
      <img
        class="orderHistImg"
        src="/img/MLogo.png"
      >
      <div class="text-left">
        <p class="text-left font-bold">
          Order ID: BGD854N56
        </p>
        <p class="text-left">
          Date Ordered: 05/08/2023
        </p>
        <p>Delivered: 05/12/2023</p>
        <p class="text-left">
          Tracking Number: MNBV254MK45
        </p>
        <button
          class="underlineAnimation"
          @click="show = !show"
        >
          Additional Information
        </button>
        <Transition>
          <div v-if="show">
            <br>
            <p>Shipping Address: 258 First Street, City, State, 25852</p>
            <br>
            <div class="">
              <p class="font-bold">
                Item Title
              </p>
              <div class="flex flex-wrap gap-x-1.5rem">
                <p>Item Cost: $15</p>
                <p>Shipping: $5</p>
                <p>Total: $20.00</p>
              </div>
            </div>
            <br>
            <div>
              <p class="font-bold">
                Item Title
              </p>
              <div class="flex flex-wrap gap-x-1.5rem">
                <p>Item Cost: $15</p>
                <p>Shipping: $5</p>
                <p>Total: $20.00</p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>

const show = ref(false)

</script>

<style>

.orderHistImg {
  max-width: 150px;
  max-height: 150px;
}

.orderHistRow {
  padding: 1rem;
  padding-top: 1rem;
  flex-wrap: wrap;
  display: flex;
  text-align: left;
  /* justify-content: center; */
  column-gap: 2rem;
  row-gap: 2rem;
}

.underlineAnimation {
  display: inline-block;
  position: relative;
  color: gray;
}

.underlineAnimation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: gray;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.underlineAnimation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>