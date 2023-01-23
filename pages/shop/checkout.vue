<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div
      v-if="cart.cartData.data === null || cart.cartData.data.length === 0"
    >
      <NuxtLink to="/shop">
        Cart Empty, Go Shop
      </NuxtLink>
    </div>
    <div
      v-else-if="infoSubmitted"
    >
      <!-- Show the items and pricing info -->
      <div
        v-for="(item, product) in cart.cartData.data"
        :key="product"
        class="flex items-center align-center justify-center"
      >
        {{ item.title }}

        Cost of Shipping to {{ country }}: {{ item.shipping_cost }}
      </div>
    </div>
    <div v-else>
      <!-- Show the form -->
      <form
        @submit.prevent="submitShippingInfo"
      >
        <!-- Login with google/facebook option here to save user data for faster checkout next time? -->
        <div class="flex flex-col">
          <label for="firstName">First Name</label>
          <input
            id="firstName"
            v-model="firstName"
            type="text"
            placeholder="First Name"
          >
          <label for="lastName">Last Name</label>
          <input
            id="lastName"
            v-model="lastName"
            type="text"
            placeholder="Last Name"
          >
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Email"
          >
          <label for="phone">Phone</label>
          <input
            id="phone"
            v-model="phone"
            type="tel"
            placeholder="Phone"
          >

          <label for="country">Country</label>
          <select
            id="country"
            v-model="country"
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
          </select>

          <label for="region">Region</label>
          <input
            id="region"
            v-model="region"
            type="text"
            placeholder="Region"
          >

          <label for="address1">Address 1</label>
          <input
            id="address1"
            v-model="address1"
            type="text"
            placeholder="Address 1"
          >

          <label for="address2">Address 2</label>
          <input
            id="address2"
            v-model="address2"
            type="text"
            placeholder="Address 2"
          >

          <label for="city">City</label>
          <input
            id="city"
            v-model="city"
            type="text"
            placeholder="City"
          >

          <label for="zip">Zip</label>
          <input
            id="zip"
            v-model="zip"
            type="text"
            placeholder="Zip"
          >

          <button
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
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

const cart = useCartDataStore()
const cartData = ref()
cartData.value = storeToRefs(cart.cartData.data)

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

  cartData.value = storeToRefs(cart.cartData.data)
  if (cart.cartData.data != null && cart.cartData.data.length > 0) {
    console.log("Products are in cart")
    // if (item in cart.cartData.data) {
      
    for (let i = 0; i < cart.cartData.data.length; i++) {
      console.log(cart.cartData.data[i].id)
      // create line items
      lineItems.value[i] = {
        "product_id": cart.cartData.data[i].id,
        "variant_id": cart.cartData.data[i].variants[0].id,
        "quantity": cart.cartData.data[i].qty
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
    console.log(await useFetch(url, opts))
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