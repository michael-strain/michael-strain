<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="bg-image bg-repeat h-full"
    style="background-image: url('../img/purple-mushroom.jpg')"
  >
    <ShopHeader />
    
    <v-container
      v-if="cartProducts != null && cartProducts.length>0"
      class="mt-8 md:flex"
    >
      <v-card
        v-for="(item, product) in cartProducts"
        :key="product"
        class="h-full bg-white w-3/4 <md:w-full text-wrap rounded-xl border flex shadow-xl"
      >
        <v-card
          v-for="variant in cartVariantsInItem(item)"
          :key="variant.id"
          class="d-sm-flex"
          variant="none"
        >
          <!--C1-->
          <div class="p-10 <md:pb-0 lg:(w-2/3 pr-4 p-10) h-full align-center">
            <img
              :src="item.images[0].src"
              lazy-src="img/black-gold-mushroom.jpg"
              class=""
            >
          </div>
          <!--C2-->
          <div class="pt-7 w-100 <md:(text-center pb-5)">
            <v-card-title class="w-full">
              <p                      
                :style="{fontFamily: 'Roboto Slab'}"
                class="text-wrap w-full text-3xl"
              >
                {{ item.title }}
              </p>
            </v-card-title>
            <p
              :style="{fontFamily: 'Roboto Slab'}"
              class="ml-3 text-wrap text-xl"
            >
              {{ variant.title }}
            </p>

            <div class="m-2">
              <p class="text-xs">
                Each Item: <span class="font-bold">{{ formatter.format(itemPrice(variant)/100) }}</span>
              </p>
              <p class="text-xs">
                Ship Cost/Item: <span class="font-bold">{{ formatter.format(itemShippingPrice(variant)/100) }}</span>
              </p>
            </div>

            <div class="flex m-3 items-center <md:justify-center">
              <v-btn
                icon
                size="small"
                variant="none"
                @click="decreaseCartItemQty(item, variant)"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <p class="text-bold mx-1 text-xl">
                {{ variant.cartQty }}
              </p>
              <v-btn
                icon
                size="small"
                variant="none"
                @click="increaseCartItemQty(item, variant)"
              >
                <v-icon icon="mdi-plus" />
              </v-btn>
            </div>
            <v-btn
              class="m-3 mt-0"
              @click="removeVariant(item,variant)"
            >
              Delete
            </v-btn>
          </div>
          <!--C3-->
          <div class="bg-surface flex-column gap-10 justify-center p-4 flex lg:w-1/3 text-center">
            <p class="">
              <span class="font-bold">Items</span><br>{{ formatter.format((itemPrice(variant) * variant.cartQty)/100) }}
            </p>
            <p class="">
              <span class="font-bold">Shipping</span><br>
              {{ formatter.format((itemShippingPrice(variant) * variant.cartQty)/100) }}
            </p>

            <p class="font-bold">
              Total <br>{{ formatter.format((itemPrice(variant) * variant.cartQty + itemShippingPrice(variant) * variant.cartQty)/100) }}
            </p>
          </div>
        </v-card>
      </v-card>
  
      <!--Divider-->
      <v-divider
        vertical
        class="p-2"
      />
      
      <!--Order Information-->
      <!-- We should probably do a v-if somewhere around here so we can display our braintree dropin on submit -->
      <v-card
        v-if="!infoSubmitted"
        class="h-full bg-white text-wrap rounded-xl border flex shadow-xl w-1/3 <md:w-full"
      >
        <v-card-title class="w-full pb-5 bg-surface ">
          <p                      
            :style="{fontFamily: 'Roboto Slab'}"
            class="p-4 text-wrap text-center text-primary-darken-1 font-bold w-full text-3xl"
          >
            Order Information
          </p>
        </v-card-title> 
        <v-container
          v-if="!infoSubmitted"
          class=""
        >          
          <div class="">
            <v-text-field
              id="firstName"
              v-model="userInfo.firstName"
              type="text"
              label="First Name"
              placeholder="First Name"
              hide-details
              bg-color="background"
              class=""
            />

            <v-text-field
              id="lastName"
              v-model="userInfo.lastName"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              hide-details
              bg-color="background"
              class=""
            />
            
            <v-text-field
              id="email"
              v-model="userInfo.email"
              type="email"
              label="Email Address"
              placeholder="Email Address"
              hide-details
              bg-color="background"
              class=""
            />
           
            <v-text-field
              id="phone"
              v-model="userInfo.phone"
              type="tel"
              label="Phone Number"
              placeholder="Phone Number"
              hide-details
              bg-color="background"
            />
              
            <v-text-field
              id="address1"
              v-model="shippingInfo.address1"
              type="text"
              label="Shipping Address"
              placeholder="Street Address or P.O. Box"
              hide-details
              bg-color="background"
            />
            <v-text-field
              id="address2"
              v-model="shippingInfo.address2"
              type="text"
              label="Apt, suite, unit, ect."
              placeholder="Apt, suite, unit, ect."
              hide-details
              bg-color="background"
            />
            <v-text-field
              id="city"
              v-model="shippingInfo.city"
              type="text"
              label="City"
              placeholder="City"
              hide-details
              bg-color="background"
            />
            <v-text-field
              id="region"
              v-model="shippingInfo.region"
              type="text"
              label="State"
              placeholder="State"
              hide-details
              bg-color="background"
            />
            <v-text-field
              id="zip"
              v-model="shippingInfo.zip"
              type="text"
              label="Zip Code"
              placeholder="Zip Code"
              hide-details
              bg-color="background"
            />

            <!-- We should grab country options from our cart variants shipping profiles and only set items=countries to display what is available -->
            <!-- We also need to fire an event when this field is changed in order to update cart pricing using user selected country -->
            <!-- We should also update the user profile country on submit with whatever shipping country they select, so the store default shows their correct ship costs -->
            <v-text-field
              id="country"
              v-model="shippingInfo.country"
              :items="countries"
              label="Country"
              placeholder="Country"
              hide-details
              bg-color="background"
              transition="scale-transition"
            />
          </div>


          <div
            v-if="!useAsBilling"
            class=""
          >
            <v-card-title class="w-full pb-5 bg-surface ">
              <p                      
                :style="{fontFamily: 'Roboto Slab'}"
                class="p-4 text-wrap text-center text-primary-darken-1 font-bold w-full text-2xl"
              >
                Billing Information
              </p>
            </v-card-title> 
            <v-text-field
              id="address1"
              v-model="billingInfo.address1"
              type="text"
              label="Street Address"
              placeholder="Street Address or P.O. Box"
              hide-details
              bg-color="background"
            />
            <v-text-field
              id="address2"
              v-model="billingInfo.address2"
              type="text"
              label="Apt, suite, unit, ect."
              placeholder="Apt, suite, unit, ect."
              hide-details
              bg-color="background"
            />
            <v-text-field
              id="city"
              v-model="billingInfo.city"
              type="text"
              label="City"
              placeholder="City"
              hide-details
              bg-color="background"
            />
            <v-text-field
              id="region"
              v-model="billingInfo.region"
              type="text"
              label="State"
              placeholder="State"
              hide-details
              bg-color="background"
            />
            <v-text-field
              id="zip"
              v-model="billingInfo.zip"
              type="text"
              label="Zip Code"
              placeholder="Zip Code"
              hide-details
              bg-color="background"
            />
            <!-- Should only be set to accept countries that are currently accepted by Braintree (billableCountries) -->
            <v-text-field
              id="country"
              v-model="billingInfo.country"
              :items="billableCountries"
              label="Country"
              placeholder="Country"
              hide-details
              bg-color="background"
              transition="scale-transition"
            />
          </div>

          <p>Total: {{ clientCartTotal }}</p>

          <!--Buttons-->
          <div
            class="flex mx-auto justify-center flex-wrap mt-1.5rem"
          >
            <div
              class="p-2 text-white w-4/5"
            >
              <v-btn
                size="large"
                variant="flat"
                block
                color="primary-darken-1"
                class="align-middle my-5px items-center fill-height text-white w-full"
                @click="useAsBilling=!useAsBilling; updateBilling()"
              >
                <div class="text-wrap text-md m-2">
                  <v-icon
                    :icon="useAsBilling ? 'mdi-checkbox-outline':'mdi-checkbox-blank-outline'"
                    class="text-wrap flex flex-wrap text-wrap"
                  />
                  Billing Address Same as Shipping
                </div>
              </v-btn>
            </div>
            <div
              class="p-2 text-white w-4/5"
            >
              <v-btn
                size="large"
                variant="flat"
                block
                color="primary-darken-1"
                class="fill-height align-middle w-full my-5px items-center h-full text-white" 
                @click="submitShippingInfo()"
              >
                <div class="text-wrap text-md m-2">
                  Submit
                </div>
              </v-btn>
            </div>
          </div>
        </v-container>
        <v-container v-if="infoSubmitted">
          <!-- Braintree Dropin (for accepting payments)-->
          <div id="dropin-container" />
          <button
            id="submit-button"
            ref="submitButton"
          >
            Pay
          </button>
        </v-container>
      </v-card>
    </v-container>

    <!-- No Products In Cart -->
    <v-container
      v-else
      class="flex text-center align-center items-center justify-center"
    >
      <v-card
        color="surface"
        class="w-1/2 <lg:w-3/4 mt-10 h-2/3 "
      >
        <v-container class="fill-height text-center align-center justify-center">
          <div class="">
            <h3
              class="font-bold lg:text-5xl text-4xl my-5"
              :style="{fontFamily: 'Roboto Slab', textShadow: '0px 0px 3px purple'}"
            >
              Your cart is empty.
            </h3>
            <v-btn
              size="large"
              variant="flat"
              color="primary-darken-1"
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
    </v-container>
  </div>
  <ShopFooter />
</template>

<script setup>
// Let's set our shit straight

// Finished
  // Step 1 - Ensure cart data is present
  // Step 2 - Display cart data as an order summary
  // Step 3 - Collect Shipping and Billing Info

// In Progress
  // Step 4 - If data passes vaildation, proceed, otherwise throw an error for the user to handle
    // NOTE - We may be able to do better validation with rules up in the template, rather than relying on my shitty validation functions - but we could still
    // try to do some kind of pre-processing validation in order to mitigate fraud risk and chargebacks and stuff
  // Step 5 - If submitted data passes validation and submit was pressed, post an order api call
    // Step 5a - The order API call should include all the cart, user, shipping, and billing data, and the order should automatically be created with a PENDING status
    // Step 5b - The Server should first ensure that the requested cart items are available for fulfillment - and return an error to the user prior to payment if there's a problem - and get accurate pricing if there are no problems
    // Step 5c - The Server should update firebase with the pending order, including the freshly retrieved cost information
    // Step 5d - The Server should create a user associated with this e-mail if one does not exist - and give it a flag like (signedUp: false)
    // Step 5e - The API should return a total cost - as well as the rest of the order data - which will be used to create a braintree drop-in
  // Step 6 - Display the Braintree Drop-In
  // Step 7 - User submits payment to braintree
  // Step 8 - If payment is successful, post order to printify printify (/v1/shops/{shop_id}/orders.json) & update Firebase with order information
  // Step 9 - If payment is not successful, display error message & allow user to try again with different payment information
    // Step 9a- Store all payment attempt information in the DB for reporting and potentially retrying purposes
  // Step 10 - If prinfity order POST is not successful, alert an admin, we may have a problem, we need to ensure that the customer gets what they paid for and might need to manually make an order for them
  // Step 11 - If everything is successful, redirect user to the order confirmation page, and display all the relevant order details



import { ref } from 'vue'
import { useCartDataStore } from '~/stores/cartData';
import { useProductDataStore } from '~/stores/productData'
import { useUserDataStore } from '~/stores/userData'
import { getAuth, signInAnonymously } from 'firebase/auth'

const infoSubmitted = ref(false)

const user = useUserDataStore() //Need to save the user's profile to the userDataStore
//Need to allow the option for users to create an account with their order info (honestly, make an account either way, but only subscribe them to marketing emails if they check the box)

const clientCartTotal = ref(0)
//clientCartTotal.value = 100 //Obviously temporary

const firebaseOrderId = ref('')

const cartProducts = ref([])
const cartItemIds = ref([])
const cartVariants = ref([])
const loaded = ref(false)
const cart = useCartDataStore()
const hover = ref(false)

const userInfo = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  uid: ''
})

const shippingInfo = ref({
  country: '',
  region: '',
  address1: '',
  address2: '',
  city: '',
  zip: ''
})

const billingInfo = ref({
  country: '',
  region: '',
  address1: '',
  address2: '',
  city: '',
  zip: ''
})

const countries = ref([])
const billableCountries = ref([])

function cartVariantsInItem(item) {
  let variants=[]
  for (let i=0; i<item.variants.length; i++){
    if(item.variants[i].inCart){
      variants.push(item.variants[i])
    }
  }
  return variants
}

const useAsBilling = ref(true)

const updateBilling = function () {
  if (useAsBilling.value){
    billingInfo.value = shippingInfo.value
  }
}



onMounted(async() => {
  if(cart.cartData.length>0 ){
    cartProducts.value = cart.cartData
    updateCartRefs()

    //Not correct yet, needs to show us ONLY countries that are available for ALL selected variants
    countries.value = getShippableCountries()
    billableCountries.value = countries.value //At least for now, I'm pretty sure we can map any possible printify countries with an appropriate braintree country counterpart, however we will need to be careful about orders being sent to "REST_OF_THE_WORLD" when the option is selected... need to ensure an appropriate billing country is still present, probably should do this by "watching" countries.value


    loaded.value = true
    //If user info is present
    //Pre-populate our shipping and billing info fields
      //If there are multiple options, select the user's default option, but add a dropdown for them to select from their pre-entered info, or they can enter new info
  }
  else {
    // cartProducts.value = cart.cartData
    loaded.value = false
  }
})

async function getShippableCountries () {
  let allCountries = []
    for (variant in cartVariants.value) {
      for (sProfile in variant) {
        if(!allCountries.includes(country)){
          allCountries.push(country)
        }
      }
    }

    //Loop through allCountries and remove the country if it is not found on ANY variant
    for (country in allCountries) {
      //allCountries now shows all unique countries that these variants can be shipped to
      //now we need to get only the countries that universally are available in the selected country
      for (variant in cartVariants.value) {
        let foundCountry = false
        for (sProfile in variant) {
          if (sProfile.includes(country)) {
            foundCountry = true
          }
        }
        if (!foundCountry){
          allCountries.remove(country)
          continue
        }
      }
    }
    return allCountries
}

async function updateCartRefs() {
  for (product in cartProducts.value) {

    //All variants of all items in cart are now in this array
    cartVariants.value.push(cartVariantsInItem(product))
    cartItemIds.value.push(product.id)
  }
}

async function submitShippingInfo() {
  updateBilling() //This won't affect the billingInfo data unless the user has selected to use shippingInfo as billingInfo

  user.userData[0].shippingInfo = shippingInfo.value

  if (cart.cartData.length<0) {
    //No products remain in cart, 
    //return an error or redirect to the shop page
    //shouldn't be possible to access this button if there are no items in cart, but may as well protect it anyway
    return { error: "Cart is empty" }
  }

  //Validate shipping info - future improvements could be made by calling an address validation API of some kind
  const shippingValidation = await validateShippingInfo()
  if (shippingValidation.error) { return }

  //Validate billing info
  const billingValidation = await validateBillingInfo()
  if (billingValidation.error) { return }

  //If user is logged in, and they added a new billing or shipping address, do a quick typo check so you can present "Did you mean?" suggestions
  //Otherwise, store the new billing/shipping info in firebase in the user collection
  if ($auth.user) {
    if (!$auth.user.shippingInfo.includes(shippingInfo.value)) {
      //push the new shipping info to the user profile - not sure how to do this exactly with firebase auth
      console.log("I want to push info to auth, but I don't know how yet :'(")
    }
  }

  //EXPERIMENTAL!
  // AND NOT FULLY INTEGRATED: still missing the ability to tie anonymous users to their accounts should they choose to create one.
  // If user is not logged in, use their info to create an unverified account, and store their info anyway.  If they ever choose to create an account, just switch the unverified flag and let them set a password using email verification
  if(!$auth.user){
    //https://firebase.google.com/docs/auth/web/anonymous-auth

    const auth = getAuth()//should be getAuth(app) and app = initializeApp(firebaseConfig) i think
    await signInAnonymously(auth).then(() => {
      // Signed in anonymously
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log("Error (" + errorCode + ") - " + errorMessage )
    })
    onAuthStateCahnged(auth, (user) => {
      if (user) {
        //User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        userInfo.value.uid = user.uid
        user.userInfo = userInfo.value
      }
    })
  }

  userInfo.value.uid = $auth.user.uid

  //Time to query firebase to get accurate pricing info in order to build braintree
  const clientCartShipTotal = ref(0)

  //Query firebase to get our cart total
  clientCartTotal.value = await getCartTotal()

  //CREATE OUR PENDING ORDER (in Firebase)
  let lineItems = []
  let firebaseLineItems = [] //This array of objects, for each variant in cart, {product_id, variant_id, quantity}
  for (product in cartProducts.value) {
    for (variant in cartVariants.value) {
      firebaseLineItems.push({
        product_id: variant.productId,
        variant_id: variant.id,
        quantity: cartVariants.value.cartQty,
        price: itemPrice(variant),
        shippingPrice: itemShippingPrice(variant)
      })
      lineItems.push({
        product_id: variant.productId,
        variant_id: variant.id,
        quantity: cartVariants.value.cartQty
      })
    }
  }

  const firebaseOrder = {
    status: 'Pending Payment', //Options: Pending Payment, [Payment Error: (error), Paid, Printify Error: (error), Awaiting Fulfillment, Shipped, Delivered, Refund Requested, Refunded, Refund Rejected, RMA Requested, RMA Accepted, Product Returned, RMA Processed, RMA Rejected]
    paymentStatus: 'Not Paid',
    printifyOrderStatus: 'Not Sent',
    printifyOrderId: null,
    userInfo: userInfo.value,
    shippingInfo: shippingInfo.value,
    billingInfo: billingInfo.value,
    orderCreateDate: Date.now(),
    lineItems: firebaseLineItems,
    customerServiceMessageLog: [],
    paymentDate: 'Unpaid',
    shipDate: 'Unshipped',
    etaDate: 'Unfulfilled',
    deliveryDate: 'Not Delivered',
    refundDate: 'Not Refunded',
    rmaDate: 'No RMA',
    cancelDate: 'Not Canceled'
  }

  //Post order to firebase
  const firebasePost = $fetch('/api/add?col=orders', {method: 'POST', body:firebaseOrder})

  firebaseOrderId.value = firebasePost.id



  ////Braintree, reveal yourself!...?
  
  

  //When this process is all complete
  infoSubmitted.value = true
}

async function validateShippingInfo() {
  if (shippingInfo.value.address1.length<0) {
    //throw an error
    return { error: "Shipping Address Cannot Be Empty" }
  }
  if (shippingInfo.value.region.length<0){
    return { error: "State/Region Cannot Be Empty"}
  }
  //
}

async function validateBillingInfo() {
  if (billingInfo.value.address1.length<0) {
    return { error: "Billing Address Cannot Be Empty" }
  }
}

async function getCartTotal() {

  const serverItems = await $fetch(`/api/queryItem?field=id&operator=in&value=${cartItemIds.value}`, {method: 'GET'})
  //Need to error handle this server call

  let totalPrice = 0

  for (sItem in serverItems) {
    if (cartItemIds.value.includes(sItem.id)) {
      //This item is in the cart
      for(variant in sItem.variants) {
        totalPrice+= itemPrice(variant) //getItemCost(variant)
        totalPrice+= itemShippingPrice(variant)//getShippingCost(variant)
      }
    }
  }
  return totalPrice
}

function submitOrder(){
  // POST Order
  console.log("I'm gonna do it")

  

  //Now we need to confirm that the braintree payment successfully processed a full payment before moving any further



  //Finally, if payment succeeds, we can send the order to printify
  const printifyOrder = {
    //Printify POST data
    external_id: firebaseOrderId.value,
    line_items: lineItems, //this should just have a product_id, variant_id, and quantity
    shipping_method: 1, //2 for express shipping
    send_shipping_notification: true,
    address_to: {
      first_name: userInfo.value.firstName,
      last_name: userInfo.value.lastName,
      email: userInfo.value.email,
      phone: userInfo.value.phone,
      country: shippingInfo.value.country,
      region: shippingInfo.value.region,
      address1: shippingInfo.value.address1,
      address2: shippingInfo.value.address2,
      city: shippingInfo.value.city,
      zip: shippingInfo.value.zip
    }
  }

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
  const submitOrder = $fetch("/api/add?col=orders", {
    method: 'POST',
    body: {"thereIs":"Nothing here yet lol"}
  })
}

function decreaseCartItemQty(item, variant) {

  //Ultimately we need to:
    // 1. Decrease the cartQty of the variant
    // 2. If the cartQty of the variant is 0, remove the variant from the cart
    // 3. If the cartQty of the variant is 0 and there are no more variants of this item in the cart, remove the item from the cart

  // In it's current form, i'm patching like crazy and I don't think it's absolutely necessary.
  // Oh well for now I guess.

  // It also appears that the qty doesn't always update properly. (I think it's because I'm not using the cartDataStore properly. Suggested by CoPilot)
  // See below for a suggested fix:
  // vue-3-composition-api-how-to-update-a-nested-object-in-a-ref

  const cart = useCartDataStore()
  let otherVariants = false

  variant.cartQty--
  item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant

  if (variant.cartQty==0){
    variant.inCart = false
    item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant
    cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
    cartProducts.value = cart.cartData

    for (let j = 0; j < item.variants.length ; j++){
      if (item.variants[j].cartQty>0){
        // console.log("There are still other variants of this item in the cart")
        otherVariants = true
        break
      }
    }

    //if there are not other variants of this item in the cart, just remove the whole item
    if (!otherVariants) {
      //Remove whole item from cart
      cart.$patch(cart.cartData.splice(cart.cartData.map((x)=>{return x.id}).indexOf(item.id),1))
      cartProducts.value = cart.cartData

      //If there are no other products in cart data, set loaded to false
      if(cart.cartData.length==0){
        cart.$patch(cart.cartData=[])
        loaded.value = false
      }

    }
    // else if (otherVariants) {
      //Remove just this variant from the cart
      // item = item.variants.splice(item.variants.map((x)=>{return x.id}).indexOf(variant.id),1)

      // We don't actually want to remove it from the item, just set cartQty and inCart values
      // cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
      // cartProducts.value = cart.cartData

      // This is all actually already happening above
    // }

    // cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
    // cartProducts.value = cart.cartData

  } else {
    // item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant // I don't think this line is necessary
    // Just patch the cart with the already formatted item
    cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
    cartProducts.value = cart.cartData
  }

  updateCartRefs()

  //Just for fun, we patch the whole damn product store with everything the cart is doing
  const store = useProductDataStore()
  store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)] = item)

  // itemTotal()
  // shipTotal()
}

function increaseCartItemQty(item, variant) {

  const cart = useCartDataStore()
  variant.cartQty++
  item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant
  cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
  cartProducts.value = cart.cartData

  updateCartRefs()

  // Do we need to do anything to the product store here?
  // May as well try :D
  const store = useProductDataStore()
  store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)] = item)

  // itemTotal()
  // shipTotal()

}

function removeVariant(item, variant) {
  const cart = useCartDataStore()
  let otherVariants = false

  variant.cartQty = 0
  variant.inCart = false
  item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant
  cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
  cartProducts.value = cart.cartData

  for (let j = 0; j < item.variants.length ; j++){
    if (item.variants[j].cartQty>0){
      // console.log("There are still other variants of this item in the cart")
      otherVariants = true
      break
    }
  }

  //if there are not other variants of this item in the cart, just remove the whole item
  if (!otherVariants) {
    //Remove whole item from cart
    cart.$patch(cart.cartData.splice(cart.cartData.map((x)=>{return x.id}).indexOf(item.id),1))
    cartProducts.value = cart.cartData

    //If there are no other products in cart data, set loaded to false
    if(cart.cartData.length==0){
      cart.$patch(cart.cartData=[])
      loaded.value = false
    }
  }

  updateCartRefs()

  //Update the store to show updated inCart and cartQty values
  const store = useProductDataStore()
  store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)] = item)

  // itemTotal()
  // shipTotal()
}

const itemPrice = function(variant) {
  const cart = useCartDataStore()
  const user = useUserDataStore()
  let sProfile = false

  // is this running correctly?
  // console.log("Profiles: " + variant.shippingProfile[0])
  for (let i = 0; i < variant.shippingProfile.length ; i++) {
    // console.log(variant.shippingProfile[i].countries)
    // console.log(user.userData[0].country)

    //going to try a for country in countries loo
    for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
      // console.log(variant.shippingProfile[i].countries[j])
      if (variant.shippingProfile[i].countries[j] == user.userData[0].shippingInfo.country) {
        sProfile = variant.shippingProfile[i]
        variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
        cart.$patch(variant.id, {itemCost: variant.itemCost})
        return variant.itemCost
        // console.log("Shipping Profile: " + sProfile)
      }
    }
  }

  if ( !sProfile.first_item.cost || sProfile.first_item.cost<1) {
    for (let i=0; variant.shippingProfile.length; i++) {
      if (variant.shippingProfile[i].countries.includes("REST_OF_THE_WORLD")) {
        sProfile = variant.shippingProfile[i]
        variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
        cart.$patch(variant.id, {itemCost: variant.itemCost})
        return variant.itemCost
        // console.log("Shipping Profile: " + sProfile)
      }
    }
  }
  // console.log(sProfile)
  variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
  cart.$patch(variant.id, {itemCost: variant.itemCost})
  return variant.itemCost
  //   let firstItemCost = variant.shippingProfile[].first_item.cost
  //   let additionalItemCost = variant.shippingProfile[].additional_items.cost
  // return variant.cost + 
}


const itemTotal = ref(computed(()=>{
  let total = 0
  for (let i=0; i<cartProducts.value.length; i++){
    for (let j=0; j<cartProducts.value[i].variants.length; j++){
      total += (itemPrice(cartProducts.value[i].variants[j]) * cartProducts.value[i].variants[j].cartQty)
    }
  }

  total = Math.ceil(total)

  // console.log("Items Total Price: " + total)
  return total
}))

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

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
        // console.log("Shipping Profile: " + sProfile)
        return variant.shipCost
      }
    }
  }
  if (!sProfile) {
    for (let i=0; variant.shippingProfile.length; i++) {
      for (let j=0; variant.shippingProfile[i].countries.length; j++) {
        if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
          sProfile = variant.shippingProfile[i]
          variant.shipCost = sProfile.additional_items.cost
          // console.log("Shipping Profile: " + sProfile)
          return variant.shipCost
        }
      }
    }
  }
  // console.log(sProfile.first_item.cost)
  return (variant.shipCost >0 ? variant.shipCost : 1000)
}

</script>