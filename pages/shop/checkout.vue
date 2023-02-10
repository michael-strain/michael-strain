<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!--To Do:
    Card number counter arrows and error/warning.
    Expiration for Month.
    Expiration for Year.
    Sticky cart. Adjust width to accomodate.
    Country options.
    Autofill email and name for account info if an account is made.
    Pretty background.
    Button
  -->
  <div
    class="bg-image"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.webp');
      height: 100;
    "
  >
    <div>
      <div
        v-if="cart.cartData === null || cart.cartData.length === 0"
      >
        <NuxtLink to="/shop">
          Cart Empty, Go Shop
        </NuxtLink>
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
            <v-card class="w-1/2 bg-custcard mt-10">
              <v-container class="">
                <h3
                  class="justify-center text-center align-center font-bold text-5xl my-5"
                  :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}"
                >
                  Shipping Address
                </h3>
                <h4
                  v-for="(item, product) in cart.cartData"
                  :key="product"
                  class="flex items-center align-center justify-center"
                >
                  <!-- {{ item.title }} -->

                  Cost of Shipping to{{ country }}: {{ item.shipping_cost }}
                </h4>
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
                      variant="solo"
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
                      variant="solo"
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
                      variant="solo"
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
                      variant="solo"
                    />
                  </v-col>
                </v-row>
              
                <!-- <label for="country">Country</label> -->
                <!-- <select
                    id="country"
                    v-model="country"
                    label="Country"
                    placeholder="Country"
                    variant="solo"
                  >
                    <option value="US">
                      United States
                    </option>
                    <option value="CA">
                      Canada
                    </option>
                    <option value="PA">
                      Panama
                    </option>
                  </select> -->
                <v-row class="justify-center text-center align-center">
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="address1">Address 1</label> -->
                    <v-text-field
                      id="address1"
                      v-model="address1"
                      type="text"
                      placeholder="Street Address or P.O. Box"
                      variant="solo"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="address2">Address 2</label> -->
                    <v-text-field
                      id="address2"
                      v-model="address2"
                      type="text"
                      placeholder="Apt, suite, unit, ect."
                      variant="solo"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="city">City</label> -->
                    <v-text-field
                      id="city"
                      v-model="city"
                      type="text"
                      placeholder="City"
                      variant="solo"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="region">Region</label> -->
                    <v-text-field
                      id="region"
                      v-model="region"
                      type="text"
                      placeholder="State"
                      variant="solo"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="zip">Zip</label> -->
                    <v-text-field
                      id="zip"
                      v-model="zip"
                      type="text"
                      placeholder="Zip"
                      variant="solo"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <v-combobox
                      id="country"
                      v-model="country"
                      :items="items"
                      label="Country"
                      placeholder="Country"
                      variant="solo"
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
                    <v-btn class="align-middle items-center h-full">
                      <!-- mdi-checkbox-blank-outline -->
                      <v-icon
                        icon="mdi-checkbox-blank-outline"
                        class="mr-3"
                        type="submit"
                      />Use as Billing Address
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
            <v-card class="w-1/2 bg-custcard">
              <v-container class="">
                <h3
                  class="justify-center text-center align-center font-bold text-5xl mt-5 mb-10"
                  :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}"
                >
                  Payment Information
                </h3>
                <v-row class="pt-5">
                  <v-col
                    cols="12"
                    sm=""
                    class=""
                  >
                    <!-- <label for="firstName">First Name</label> -->
                    <v-text-field
                      type="text"
                      label="Name on Card"
                      placeholder="Name on Card"
                      variant="solo"
                    />
                  </v-col>
                  <v-col>
                    <!-- <label for="lastName">Last Name</label> -->
                    <v-text-field
                      type="number"
                      label="Card Number"
                      placeholder="Card Number"
                      variant="solo"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <v-combobox
                      id="country"
                      v-model="country"
                      :items="items"
                      label="Expiration Month"
                      placeholder="Expiration Month"
                      variant="solo"
                      transition="scale-transition"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <v-combobox
                      id="country"
                      v-model="country"
                      :items="items"
                      label="Expiration Year"
                      placeholder="Expiration Year"
                      variant="solo"
                      transition="scale-transition"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <v-text-field
                      type="number"
                      label="Security Code"
                      placeholder="Security Code"
                      variant="solo"
                    />
                  </v-col>
                </v-row>
                <v-row class="justify-center text-center align-center">
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="address1">Address 1</label> -->
                    <v-text-field
                      id="address1"
                      v-model="address1"
                      type="text"
                      placeholder="Street Address or P.O. Box"
                      variant="solo"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="address2">Address 2</label> -->
                    <v-text-field
                      id="address2"
                      v-model="address2"
                      type="text"
                      placeholder="Apt, suite, unit, ect."
                      variant="solo"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="city">City</label> -->
                    <v-text-field
                      id="city"
                      v-model="city"
                      type="text"
                      placeholder="City"
                      variant="solo"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="region">Region</label> -->
                    <v-text-field
                      id="region"
                      v-model="region"
                      type="text"
                      placeholder="State"
                      variant="solo"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <!-- <label for="zip">Zip</label> -->
                    <v-text-field
                      id="zip"
                      v-model="zip"
                      type="text"
                      placeholder="Zip"
                      variant="solo"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <v-combobox
                      id="country"
                      v-model="country"
                      :items="items"
                      label="Country"
                      placeholder="Country"
                      variant="solo"
                      transition="scale-transition"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm=""
                  >
                    <v-btn class="align-middle items-center h-full">
                      <v-icon
                        icon="mdi-email"
                        class="mr-3"
                        type="submit"
                      />Continue
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
const items = ref([
  'Canada',
  'Europe',
  'United States',
  'Panama',
])


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

</script>