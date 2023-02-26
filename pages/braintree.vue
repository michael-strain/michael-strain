<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="dropin-container" />
  <button
    id="submit-button"
    ref="submitButton"
  >
    Pay
  </button>
  <p> Total Cost: {{ totalCost }}</p>
  <!-- </div> -->
</template>
<!-- Not sure if we need this, or if the plugin file works -->
<!-- <script src="https://js.braintreegateway.com/web/dropin/1.34.0/js/dropin.min.js"></script> -->
<script setup>
import dropin from 'braintree-web-drop-in'
// import deviceData from 'braintree-web-drop-in'
import { ref, onMounted } from 'vue'
import { useCartDataStore } from '~/stores/cartData';
import { useUserDataStore } from '~/stores/userData';
// import { useUserDataStore } from '~/stores/userData';
// import { getAuth } from 'firebase/auth'

// const auth = getAuth();
// const uid = auth.currentUser.uid ? auth.currentUser.uid : 'test'
// const clientAuthorization = $fetch('/api/payment/braintree/token', { method: 'GET' })

const cart = useCartDataStore()
// const user = useUserDataStore()

const submitButton = ref(null)

var nonce
const totalCost = ref(0)

// import 'braintree-web-drop-in'
onMounted(async () => {

//TEMPORARY
const shipping = ref({
  firstName: 'Test',
  lastName: 'User',
  email: 'test@user.com',
  phone: '888-555-2222',
  country: 'US',
  region: 'FL',
  address1: '123 Kickass Rd',
  address2: '',
  city: 'Miami',
  zip: '33101',
})

  var payload = {
    nonce: nonce,
    type: 'CreditCard',
    details: {
      lastTwo: '11',
      cardType: 'Visa'
    },
    description: 'ending in 11',
    binData: {
      commercial: 'Unknown',
      countryOfIssuance: 'USA',
      debit: 'Unknown',
      durbinRegulated: 'Unknown',
      healthcare: 'Unknown',
      payroll: 'Unknown',
      prepaid: 'Unknown',
      productId: 'Unknown'
    },
    threeDSecureInfo: {
      liabilityShiftPossible: false,
      liabilityShifted: false,
      status: 'not_eligible'
    },
    // deviceData: deviceData, //Does this work? No, it's resulting in an error: invalidKeysError: These keys are invalid: deviceData[VERSION]
    cart: cart.cartData.length>0 ? cart.cartData : null,
    shipping: shipping.value,

  }

  //Fetch product data from the database using /api/queryItem
  var cartItems = {
    itemId: [],
    variantId: [],
    quantity: []
  }
  for (let i = 0; i < cart.cartData.length; i++) {
    cartItems.itemId.push(cart.cartData[i].id)
    for (let j=0; j < cart.cartData[i].variants.length; j++) {
      if (cart.cartData[i].variants[j].cartQty > 0) {

        cartItems.variantId.push(cart.cartData[i].variants[j].id)
        cartItems.quantity.push(cart.cartData[i].variants[j].cartQty)
        //Create an array of all the variants of all items in cart in order to query the database for the price of each variant
        //See shop page for example of getting itemprice and shipcost for each variant
        //Multiply item cost and ship cost by quantity
        // totalAmount += //not based on cart, fetch it separately from our server or DB
      }  // Are we sure this isn't cartQty here?

      //Create an array of all the variants of all items in cart in order to query the database for the price of each variant
      //See shop page for example of getting itemprice and shipcost for each variant
      //Multiply item cost and ship cost by quantity
      // totalAmount += //not based on cart, fetch it separately from our server or DB
    } 
  }
  // console.log(cartItems)
  payload.cartItems = cartItems

  const products = await $fetch('/api/queryItem?' + 'col=products' + '&field=id&operator===&value=' + cartItems.itemId , { method: 'GET' })
  // console.log(products)
  // console.log(cartItems)

  //This is not working properly when there are multiple items and variants and quantities in the cart
  for (let i = 0; i < products.length; i++) {
    for(let j = 0; j < products[i].variants.length; j++) {
      if(products[i].variants[j].id === cartItems.variantId[j]) {
        console.log("Found a match at j-index: " + j)
        let thisItemPrice = itemPrice(products[i].variants[j])
        let thisShipCost = itemShippingPrice(products[i].variants[j])
        let thisItemQty = cartItems.quantity[j]
        // console.log(thisItemQty)
        totalCost.value += ((thisItemPrice + thisShipCost) * thisItemQty)/100
      }
    }
  }



  dropin.create({
    authorization: await $fetch('/api/payment/braintree/token', { method: 'GET' }),
    container: '#dropin-container',
    // selector: '#dropin-container',
    paypal: {
      flow: 'vault',
      amount: totalCost,
      currency: 'USD'
    }
  },async (createErr, instance) => {
    if (createErr) {
      console.log('Create Error', createErr)
      return
    }
    submitButton.value.addEventListener('click', async () => {
      instance.requestPaymentMethod(async (err, event) => {
        // Submit payload.nonce to your server
        console.log("Event Nonce: " + event.nonce)
        nonce = event.nonce
        payload.nonce = nonce

        const data = await $fetch('/api/payment/braintree/sale', {
          method: 'POST',
          body: payload
        })
        console.log(data)
      }),
      instance.on('paymentMethodRequestable', (event) => {
        submitButton.value.removeAttribute('disabled')
      }),
      instance.on('noPaymentMethodRequestable', (event) => {
        submitButton.value.setAttribute('disabled', true)
      }),
      instance.on('paymentOptionSelected', (event) => {
        console.log("Payment Option Selected: " + event)
      }),
      // instance.on('paymentMethodReceived', (event) => {
      //   console.log("Event Nonce: " + event.nonce)
      //   nonce = event.nonce
      //   payload.nonce = nonce
      //   console.log("none: " + nonce)
      //   console.log("payload: " + payload)
      //   const data = $fetch('/api/payment/braintree', {
      //     method: 'POST',
      //     body: JSON.stringify(payload)
      //   })
      // }),
      instance.on('error', (event) => {
        console.log("Instance Error: " + event)
      }),
      instance.on('changeActiveView', function(){
        // alert('activeView changed')
        console.log("Active View Changed")
      })
    })
  })
})
// const itemShippingPrice = computed((variant) => {
const itemShippingPrice = function(variant) {
  const user = useUserDataStore()
  let sProfile = false

  // is this running correctly?
  // console.log("Profiles: " + variant.shippingProfile[0])
  for (let i = 0; i < variant.shippingProfile.length ; i++) {
    for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
      if (variant.shippingProfile[i].countries[j] == user.userData[0].country) {
        sProfile = variant.shippingProfile[i]
        variant.shipCost = sProfile.additional_items.cost
        console.log("Shipping Cost: " + sProfile.additional_items.cost)
        return sProfile.additional_items.cost
      }
    }
  }
  if (!sProfile) {
    for (let i=0; variant.shippingProfile.length; i++) {
      for (let j=0; variant.shippingProfile[i].countries.length; j++) {
        if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
          sProfile = variant.shippingProfile[i]
          variant.shipCost = sProfile.additional_items.cost
          console.log("Shipping Cost: " + sProfile.additional_items.cost)
          return sProfile.additional_items.cost
        }
      }
    }
  }
  // console.log(sProfile.first_item.cost)
  return (sProfile.additional_items.cost > 0 ? sProfile.additional_items.cost : 1000)
}//)

// const itemPrice = computed((variant) => {
const itemPrice = function(variant) {
  // const cart = useCartDataStore()
  const user = useUserDataStore()
  let sProfile = false
  var itemCost

  for (let i = 0; i < variant.shippingProfile.length ; i++) {
    let countryList = []
    countryList = variant.shippingProfile[i].countries
    for (let j = 0; j < countryList.length; j++) {
      if (countryList[j] == user.userData[0].country) {
        sProfile = variant.shippingProfile[i]
        itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
        console.log("Item Cost: " + itemCost)
        return itemCost
      }
    }
  }
  if (!sProfile) {
    for (let i=0; variant.shippingProfile.length; i++) {
      for (let j=0; variant.shippingProfile[i].countries.length; j++){
        if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
          sProfile = variant.shippingProfile[i]
          itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
          console.log("Item Cost: " + itemCost)
          return itemCost
        }
      }
    }
  }
  // console.log("Item Cost: " + itemCost)
  // return itemCost // Profit margin is 10% of cost + $1.00
}//)
</script>

