<!-- eslint-disable vue/multi-word-component-names -->
<!--Colors
Yellows: #FBFBD0, #FCEDB6, #FDDF9B, #FED081, #FFC266
Pink to Purple: #FEDBD0, #D9B8B0, #B4958F, #8E726F, #694F4E, #442C2E

-->


<template>

<div class="bg-background">background</div>
<div class="bg-surface">surface</div>
<div class="bg-primary">primary</div>
<div class="bg-primary-darken-1">primary-darken-1</div>
<div class="bg-secondary">secondary</div>
<div class="bg-secondary-darken-1">secondary-darken-1</div>


  <div
    class="bg-image bg-repeat p-20 h-screen"
    style="background-image: url('../img/leaf-background-2.jpg')"
  >
    <!--Store Faqs Category--> <!--color="#fbfbd0"-->
    <v-card
      class="w-1/2 <lg:w-3/4 mt-10"
    >
      <h3
        class="text-center font-bold lg:text-5xl text-4xl m-10"
        :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(255, 194, 102)'}"
      >
        Frequently Asked Questions
      </h3>
      <!-- color="#fbfbd0" -->
      <v-expansion-panels
        variant="accordion"
      >
        <v-expansion-panel
          title="Refund and Replacement Policy"
          text="If you have an issue with your order, contact our support team directly within seven days of product delivery. Please provide a detailed description of your issue, accompanied by relevant photo or video evidence that support your case. Products are unique and produced to order, therefore, they are non-refundable."
        />

        <v-expansion-panel
          title="Shipping Costs and Delivery"
          text="Each item has a shipping fee of $2. If the item total exceeds $20, the shipping cost will be waived. Shipping times are estimated average times and are in no way guaranteed. If your order takes more than ten days to be delivered, please contact our support team."
        />

        <v-expansion-panel
          title="Incorrect Delivery Address"
          text="If an order is returned to Printify due to an incorrect address, the User will be contacted by Printify Merchant Support to arrange a reshipment. The User will be liable for the reshipment costs once an updated address is provided and confirmed. Otherwise, packages will be donated after one week if Printify Merchant Support is not provided with a valid address for the reshipment. Reshipment costs include the original shipping cost of the product and a service fee of $4. The service fee covers any Charge On Delivery (C.O.D) fees that we get charged by the fulfillment operator and handling fees."
        />

        <v-expansion-panel
          title="Payment Processing"
          text="Answer"
        />

        <v-expansion-panel
          title="Contact Strain Store Support"
          text="For any questions, comments, or concerns, please send an email to ashley.n.strain@gmail.com."
        />
      
        <v-expansion-panel
          title="Question"
          text="Answer"
        />
      
        <v-expansion-panel
          title="Question"
          text="Answer"
        />
      </v-expansion-panels>
    </v-card>
  </div>
</template>
