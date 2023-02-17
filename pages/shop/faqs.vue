<!-- eslint-disable vue/multi-word-component-names -->
<!--Colors
Yellows: #FBFBD0, #FCEDB6, #FDDF9B, #FED081, #FFC266
Pink to Purple: #FEDBD0, #D9B8B0, #B4958F, #8E726F, #694F4E, #442C2E

-->

<template>
  <div
    class="bg-image bg-repeat h-fill"
    style="background-image: url('../img/purple-mushroom.jpg')"
  >
    <ShopHeader />
    <div
      class="d-flex justify-center align-center" 
      
    >
      <v-card
        class="w-1/2 <lg:w-3/4 flex m-10"
      >
        <div
          v-for="item in someData"
          class="pt-7 px-7 text-center"
        >
          <h class="text-2xl font-bold" :style="{fontFamily: 'Roboto Slab'}">
            {{ item.title }}
          </h>
          <p class="text-justify pt-2 text-secondary-darken-1">
            {{ item.paragraph }}
          </p>
        </div>
        <v-container class="text-center flex justify-center" />
      </v-card>
    </div>
  </div>
  <ShopFooter />
</template>

<script setup>
import { ref } from 'vue'
const someData = ref([
  {
    'title':'Refund and Replacement Policy',
    'paragraph':'If you have an issue with your order, contact our support team directly within seven days of product delivery. Please provide a detailed description of your issue, accompanied by relevant photo or video evidence that support your case. Products are unique and produced to order, therefore, they are non-refundable.'
  },
  {
    'title':'Shipping and Delivery',
    'paragraph':'Shipping times are estimated average times and are in no way guaranteed. If your order takes more than ten days to be delivered, please contact our support team.'
  },
  {
    'title':'Incorrect Delivery Address',
    'paragraph':'If an order is returned to due to an incorrect address, you will be contacted to arrange a reshipment. You will be liable for the reshipment costs and service fees. The service fee covers any Charge On Delivery (C.O.D) fees that we get charged by the fulfillment operator and handling fees. Packages will be donated after one week if we are not provided with a valid address for the reshipment.'
  },
  // {
  //   'title':'Title',
  //   'paragraph':'Paragraph.'
  // },
  // {
  //   'title':'Title',
  //   'paragraph':'Paragraph.'
  // },
  {
    'title':'Contact L.S.Dope Support',
    'paragraph':'For any questions, comments, or concerns, please send an email to ashley.n.strain@gmail.com.'
  }
])
</script>



<!-- 
<template>

      <h3
        class="text-center font-bold lg:text-5xl text-4xl m-10"
        :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(255, 194, 102)'}"
      >
        Frequently Asked Questions
      </h3>-->
      <!-- color="#fbfbd0" -->
      <!--

</template> -->
