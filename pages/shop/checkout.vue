<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="bg-image bg-repeat"
    style="background-image: url('../img/leaf-background-2.jpg')"
  >
    <!-- <v-img src="../img/leaf-background.jpg" /> -->
    <div class="">
      <div
        v-if="cart.cartData === null || cart.cartData.length === 0"
        class="flex align-center justify-center h-screen"
      >
        <v-card
          class="w-1/2 <lg:w-3/4 mt-10 h-2/3 "
        >
          <v-container class="fill-height text-center align-center justify-center">
            <div class="">
              <h3
                class="font-bold lg:text-5xl text-4xl my-5"
                :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(255, 194, 102)'}"
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
                  class="justify-center text-center align-center font-bold lg:text-5xl <md:text-4xl my-5"
                  :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(255, 194, 102)'}"
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
                    <!-- <v-btn
                      size="large"
                      variant=""
                      color="#ffc266"
                      class="bg-red fill-height m-10"
                    >
                      <NuxtLink
                        to="/shop"
                        class="lg:text-2xl text-xl text-wrap"
                      >
                        Visit the <b>shop</b> page.<br>Find something you love.
                      </NuxtLink>
                    </v-btn> -->


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
            @submit.prevent="submitShippingInfo"
          >
            <!-- Login with google/facebook option here to save user data for faster checkout next time? -->
            <v-card
              class="w-1/2 <lg:w-3/4 justify-center text-center align-center"
            >
              <v-container class="">
                <h3
                  class="justify-center text-center align-center font-bold lg:text-5xl <md:text-4xl mt-5 mb-10"
                  :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(255, 194, 102)'}"
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
</template>

<script setup>
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

// Form Options
const months = ["1 - January","2 - February","3 - March","4 - April","5 - May","6 - June","7 - July","8 - August","9 - September","10 - October","11 - November","12 - December"]
function expirationYearOptions () {
  let years = [];
  for (let i=0; i<40; i++) {

    years.push(new Date().getFullYear()+i);
  }
  return years
}



const cardname = ref('')
const cardnum = ref('')
const expmonth = ref('')
const expyear = ref('')
const securitycode = ref('')
// Are these necessary?
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
  // for each item in cart get the shipping cost and create line items
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

  cartData.value = storeToRefs(cart.cartData)
  if (cart.cartData != null && cart.cartData.length > 0) {
    console.log("Products are in cart")
    // if (item in cart.cartData) {
      
    for (let i = 0; i < cart.cartData.length; i++) {
      console.log(cart.cartData[i].id)
      // create line items
      lineItems.value[i] = {
        "product_id": cart.cartData[i].id,
        "variant_id": cart.cartData[i].variants[0].id,
        "quantity": cart.cartData[i].qty
      }
    }
    // get shipping cost
    // not working yet
    const opts = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
        'Access-Control-Allow-Origin': 'https://localhost:3000/shop/*',
        'User-Agent': 'Michael-Strain Nuxt App'
      },
      body: {
        'line_items': lineItems.value,
        'address_to': addressTo.value
      }
    };
    const url = 'https://api.printful.com/v1/shops/6483145/orders/shipping.json'
    // const { data:shipCost } = await useFetch(url, opts)
    //console.log(await useFetch(url, opts))
  }
  infoSubmitted.value = true
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

</script>