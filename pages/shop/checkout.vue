<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="bg-image bg-repeat align-items-center align-middle items-center h-full"
    style="background-image: url('../img/purple-mushroom.jpg')"
  >
    <ShopHeader />
    <!-- <v-img src="../img/leaf-background.jpg" /> -->
    <div class="h-full">
      <div
        v-if="cart.cartData === null || cart.cartData.length === 0"
        class="grid h-full place-items-center pb-40"
      > 
        <!-- Old v-if cart null div class -->
        <!-- class="flex align-items-center justify-center" -->
        <v-card
          class="w-1/2 <lg:w-3/4"
        >
          <!--SAFE TO EDIT-->
          <div>
            <v-container class="fill-height text-center flex align-center justify-center">
              <div class="">
                <h3
                  class="font-bold text-secondary-darken-1 text-5xl my-5 fill-height text-center flex align-item-center justify-center"
                  :style="{fontFamily: 'Roboto Slab'}"
                >
                  Your cart is empty.
                </h3>
                <v-btn
                  size="large"
                  variant="flat"
                  color="button"
                  class="fill-height m-10"
                >
                  <NuxtLink
                    to="/shop"
                    class="lg:text-2xl text-xl text-wrap m-5"
                  >
                    Visit the <b>shop</b> page.<br>Find something you love.
                  </NuxtLink>
                </v-btn>
              </div>
            </v-container>
          </div>
        </v-card>
      </div>
      <div v-else>
        <!-- v-else-if="infoSubmitted" -->
        <!-- Show the items and pricing info and pictures and such - make an invoice looking page -->
        <div>
          <!--SHIPPING ADDRESS FORM-->
          <v-form
            class="flex text-center align-middle items-center justify-center flex-shrink"
            @submit.prevent="submitShippingInfo"
          >
            <!-- Login with google/facebook option here to save user data for faster checkout next time? -->
            <v-card
              class="w-1/2 <lg:w-3/4 bg-green-600 mt-10"
            >
              <v-container class="">
                <h3
                  class="text-secondary-darken-1 justify-center text-center align-center font-bold lg:text-5xl text-4xl my-5"
                  :style="{fontFamily: 'Roboto Slab'}"
                >
                  Shipping Address
                </h3>
                <!-- <h4
                  v-for="(item, product) in cart.cartData"
                  :key="product"
                  class="flex items-center align-center justify-center"
                >
                  Cost of Shipping to{{ country }}: {{ item.shipping_cost }}
                </h4> -->
                <v-row class="pt-5">
                  <v-col
                    cols="12"
                    sm=""
                    class=""
                  >
                    <!-- <label for="firstName">First Name</label> -->
                    <v-text-field
                      id="firstName"
                      v-model="firstName"
                      type="text"
                      label="First Name"
                      placeholder="First Name"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col>
                    <!-- <label for="lastName">Last Name</label> -->
                    <v-text-field
                      id="lastName"
                      v-model="lastName"
                      type="text"
                      label="Last Name"
                      placeholder="Last Name"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                </v-row>
                <v-row class="justify-center text-center align-center">
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="email">Email</label> -->
                    <v-text-field
                      id="email"
                      v-model="email"
                      type="email"
                      label="Email Address"
                      placeholder="Email Address"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="phone">Phone</label> -->
                    <v-text-field
                      id="phone"
                      v-model="phone"
                      type="tel"
                      label="Phone Number"
                      placeholder="Phone Number"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                </v-row>
              
                <v-row class="justify-center text-center align-center">
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <!-- <label for="address1">Address 1</label> -->
                    <v-text-field
                      id="address1"
                      v-model="address1"
                      type="text"
                      placeholder="Street Address or P.O. Box"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <!-- <label for="address2">Address 2</label> -->
                    <v-text-field
                      id="address2"
                      v-model="address2"
                      type="text"
                      placeholder="Apt, suite, unit, ect."
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <!-- <label for="city">City</label> -->
                    <v-text-field
                      id="city"
                      v-model="city"
                      type="text"
                      placeholder="City"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <!-- <label for="region">Region</label> -->
                    <v-text-field
                      id="region"
                      v-model="region"
                      type="text"
                      placeholder="State"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <!-- <label for="zip">Zip</label> -->
                    <v-text-field
                      id="zip"
                      v-model="zip"
                      type="text"
                      placeholder="Zip"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <v-combobox
                      id="country"
                      v-model="country"
                      :items="countries"
                      label="Country"
                      placeholder="Country"
                      variant="outlined"
                      bg-color="textfield"
                      transition="scale-transition"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm=""
                    class=""
                  >
                    <v-btn
                      size="large"
                      variant="flat"
                      color="button"
                      class="fill-height align-middle items-center h-full text-white "
                      @click="useAsBilling=!useAsBilling; updateBilling()"
                    >
                      <div class="text-wrap text-md m-2">
                        <v-icon
                          :icon="useAsBilling ? 'mdi-checkbox-outline':'mdi-checkbox-blank-outline'"
                          class="mr-3 text-wrap flex flex-wrap text-wrap"
                        />
                        <!--This v-icon used to say type="submit"-->
                        Same as Billing Address
                      </div>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-form>


          <!--PAYMENT INFORMATION FORM-->
          <v-form
            class="flex text-center align-middle items-center justify-center flex-shrink mt-10 pb-10"
            @submit.prevent="submitOrder"
          >
            <!-- Login with google/facebook option here to save user data for faster checkout next time? -->
            <v-card
              class="w-1/2 <lg:w-3/4 justify-center text-center align-center"
            >
              <v-container class="">
                <h3
                  class="justify-center text-secondary-darken-1 text-center align-center font-bold lg:text-5xl text-4xl mt-5 mb-10"
                  :style="{fontFamily: 'Roboto Slab'}"
                >
                  Payment Information
                </h3>
                <v-row class="pt-5 ">
                  <v-col
                    cols="12"
                    sm=""
                    class=""
                  >
                    <!-- <label for="firstName">First Name</label> -->
                    <v-text-field
                      id="cardname"
                      v-model="cardname"
                      type="text"
                      label="Name on Card"
                      placeholder="Name on Card"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col>
                    <!-- <label for="lastName">Last Name</label> -->
                    <v-text-field
                      id="cardnum"
                      v-model="cardnum"
                      label="Card Number"
                      placeholder="Card Number"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    md=""
                    sm="6"
                  >
                    <v-combobox
                      id="expmonth"
                      v-model="expmonth"
                      :items="months"
                      label="Expiration Month"
                      placeholder="Expiration Month"
                      variant="outlined"
                      bg-color="textfield"
                      transition="scale-transition"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    sm="6"
                  >
                    <v-combobox
                      id="expyear"
                      v-model="expyear"
                      :items="expirationYearOptions()"
                      label="Expiration Year"
                      placeholder="Expiration Year"
                      variant="outlined"
                      bg-color="textfield"
                      transition="scale-transition"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    sm="6"
                  >
                    <v-text-field
                      id="securitycode"
                      v-model="securitycode"
                      label="Security Code"
                      placeholder="Security Code"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <!-- <label for="address1">Address 1</label> -->
                    <v-text-field
                      id="address1b"
                      v-model="address1b"
                      type="text"
                      placeholder="Street Address or P.O. Box"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <!-- <label for="address2">Address 2</label> -->
                    <v-text-field
                      id="address2b"
                      v-model="address2b"
                      type="text"
                      placeholder="Apt, suite, unit, ect."
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <!-- <label for="city">City</label> -->
                    <v-text-field
                      id="cityb"
                      v-model="cityb"
                      type="text"
                      placeholder="City"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <!-- <label for="region">Region</label> -->
                    <v-text-field
                      id="regionb"
                      v-model="regionb"
                      type="text"
                      placeholder="State"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <!-- <label for="zip">Zip</label> -->
                    <v-text-field
                      id="zipb"
                      v-model="zipb"
                      type="text"
                      placeholder="Zip"
                      variant="outlined"
                      bg-color="textfield"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <v-combobox
                      id="countryb"
                      v-model="countryb"
                      :items="countries"
                      label="Country"
                      placeholder="Country"
                      variant="outlined"
                      bg-color="textfield"
                      transition="scale-transition"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <v-btn
                      size="large"
                      variant="flat"
                      color="button"
                      class=" fill-height align-middle items-center h-full text-white "
                      @click="echo('I love you <3')"
                    >
                      <div class="text-wrap text-md m-2">
                        <v-icon
                          icon="mdi-cards-heart"
                          class="mr-3 text-wrap flex flex-wrap text-wrap"
                          type="submit"
                        />
                        Continue
                      </div>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-form>
        </div>
      </div>
    </div>
  </div>
  <ShopFooter />
</template>

<script setup>
// Let's set our shit straight
// Step 1 - Ensure cart data is present
// Step 2 - Display cart data as an order summary
// Step 3 - Collect payment and shipping information
// Step 4 - Before we actually get payment confirmation, we are going to POST the order to printify (/v1/shops/{shop_id}/orders.json)
// Step 5 - Update the database with the order information, and associate the user with the order - not sure yet how this will be structured in firebase
// Step 6 - Submit payment
// Step 7 - If payment is successful, post order
  // Step 7a - If payment is successful, update database with order information
// Step 8 - If payment is not successful, display error message & allow user to try again with different payment information
  // Step 8a- Store payment information for automatic retry at a later date and time (Friday morning?), maybe with different payment gateway or something?



import { ref } from 'vue'
import { useCartDataStore } from '~/stores/cartData';
import { storeToRefs } from 'pinia';
import { range } from '@antfu/utils';

const infoSubmitted = ref(false)

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const country = ref('')
const region = ref('')
const address1 = ref('')
const address2 = ref('')
const city = ref('')
const zip = ref('')

const shipping = ref({
  firstName: firstName.value,
  lastName: lastName.value,
  email: email.value,
  phone: phone.value,
  country: country.value,
  region: region.value,
  address1: address1.value,
  address2: address2.value,
  city: city.value,
  zip: zip.value,
})

// Form Options
const months = ["1 - January","2 - February","3 - March","4 - April","5 - May","6 - June","7 - July","8 - August","9 - September","10 - October","11 - November","12 - December"]
function expirationYearOptions () {
  let years = [];
  for (let i=0; i<40; i++) {

    years.push(new Date().getFullYear()+i);
  }
  return years
}


// Are these necessary? - No, not with Braintree
// const cardname = ref('')
// const cardnum = ref('')
// const expmonth = ref('')
// const expyear = ref('')
// const securitycode = ref('')

const countryb = ref('')
const regionb = ref('')
const address1b = ref('')
const address2b = ref('')
const cityb = ref('')
const zipb = ref('')
const itemsb = ref([
  'Canada',
  'Europe',
  'United States',
  'Panama',
])

const useAsBilling = ref(false)

const updateBilling = function () {
  if (useAsBilling.value){
    countryb.value = country.value
    regionb.value = region.value
    address1b.value = address1.value
    address2b.value = address2.value
    cityb.value = city.value
    zipb.value = zip.value
  }
}

const cart = useCartDataStore()
const cartData = ref()
cartData.value = storeToRefs(cart.cartData)

async function submitShippingInfo() {
  const cart = useCartDataStore()
  const shipTotal = ref()
  const lineItems = ref([])
  const addressTo = ref({
    "first_name": firstName.value,
    "last_name": lastName.value,
    "email": email.value,
    "phone": phone.value,
    "country": country.value,
    "region": region.value,
    "address1": address1.value,
    "address2": address2.value,
    "city": city.value,
    "zip": zip.value
  })
}



// POST Order Body
const postOrderBody = 
{
    "external_id": "<string>",
    "line_items": [
        {
            "product_id": "<string>",
            "print_provider_id": "<integer>",
            "blueprint_id": "<integer>",
            "variant_id": "<integer>",
            "print_areas": "<object>",
            "quantity": "<integer>"
        },
        {
            "product_id": "<string>",
            "print_provider_id": "<integer>",
            "blueprint_id": "<integer>",
            "variant_id": "<integer>",
            "print_areas": "<object>",
            "quantity": "<integer>"
        }
    ],
    "shipping_method": 1,
    "send_shipping_notification": "<boolean>",
    "address_to": {
        "first_name": "<string>",
        "last_name": "<string>",
        "email": "<string>",
        "phone": "<string>",
        "country": "<string>",
        "region": "<string>",
        "address1": "<string>",
        "address2": "<string>",
        "city": "<string>",
        "zip": "<string>"
    }
}

function echo(msg){
  console.log(msg.toString())
}

function submitOrder(){
  // POST Order
  console.log("I'm gonna do it")

  //First, post the order information to the database.  Not sure if there should be a users collection that contains orders, or if the orders should be stored in their own collection and referenced by the user's collection.
  //I think the orders should be stored in their own collection, with a UID value.
  //The UID value should be the same as the user's UID value, so that we can easily reference the user's orders.

  //The orders collection should look something like this:
  //orders: {
  //  orderID: {
  //    orderStatus: 'Created',
  //    paymentStatus: 'Not Paid'
  //    printifyOrderStatus: 'Not Sent'
  //    printifyOrderId: null
  //    userID: userID,
  //    orderDate: orderDate,
  //    orderTotal: orderTotal,
  //    orderItems: [],
  //    orderShipping: {
  //      shippingCharged: shippingCharged,
  //      shippingMethod: shippingMethod,
  //      ourShippingCost: ourShippingCost,
  //      shippingProvider: shippingProvider,
  //      shippingProviderCost: shippingProviderCost,
  //      shippingProviderTrackingNumber: null,
  //      firstName: firstName,
  //      lastName: lastName,
  //      email: email,
  //      phone: phone,
  //      country: country,
  //      region: region,
  //      address1: address1,
  //      address2: address2,
  //      city: city,
  //      zip: zip
  //  },
  //    orderBilling: {
  //      firstName: firstName,
  //      lastName: lastName,
  //      email: email,
  //      phone: phone,
  //      country: country,
  //      region: region,
  //      address1: address1,
  //      address2: address2,
  //      city: city,
  //      zip: zip,
  // // Card information may actually be stored as a payment token depending on payment processor
  // //       cardNumber: cardNumber,
  // //       cardExpMonth: cardExpMonth,
  // //      cardExpYear: cardExpYear,
  // //      cardSecurityCode: cardSecurityCode
  //  },
  //}

  // Add product to DB
  const { submitOrder } = $fetch("/api/add?col=orders", {
    method: 'POST',
    body: {"thereIs":"Nothing here yet lol"}
  })

  //

}

</script>