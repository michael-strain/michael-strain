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
                Each Item: <span class="font-bold">{{ formatter.format((itemPrice(variant).itemCost)/100) }}</span>
              </p>
              <p class="text-xs">
                Ship Cost/Item: <span class="font-bold">{{ formatter.format((itemPrice(variant).shipCost)/100) }}</span>
              </p>
            </div>

            <div class="flex m-3 items-center <md:justify-center">
              <v-btn
                icon
                size="small"
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
              <span class="font-bold">Items</span><br>{{ formatter.format((itemPrice(variant).itemCost * variant.cartQty)/100) }}
            </p>
            <p class="">
              <span class="font-bold">Shipping</span><br>
              {{ formatter.format((itemPrice(variant).shipCost * variant.cartQty)/100) }}
            </p>

            <p class="font-bold">
              Total <br>{{ formatter.format(((itemPrice(variant).itemCost * variant.cartQty) + (itemPrice(variant).shipCost * variant.cartQty))/100) }}
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
          class=""
        >
          <div>
            <p class="text-center font-bold">
              Cart Total: {{ formatter.format(clientCartTotal/100) }}
            </p>
          </div>
          <div v-if="!infoSubmitted">
            <!-- Need a dropdown select thing for User's with multiple stored shipping info options -->
            <!-- See storedShippingProfiles in setup script-->
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

              <!--Let's add the option to sign up for an account (or remain anonymous, with order history being stored both locally for the user, and )-->

              <!-- We should grab country options from our cart variants shipping profiles and only set items=countries to display what is available -->
              <!-- We also need to fire an event when this field is changed in order to update cart pricing using user selected country -->
              <!-- We should also update the user profile country on submit with whatever shipping country they select, so the store default shows their correct ship costs -->
              <v-select 
                v-model="shippingInfo.country"
                :items="countryNames"
                @update:model-value="setUserCountry"
              />

              <!-- OLD
              <v-select
                id="country"
                v-model="shippingInfo.country"
                :items="countryNames"
                label="Country"
                placeholder="Country"
                hide-details
                bg-color="background"
                transition="scale-transition"
                change
                @update:model-value="getShippableCountries"
              /> -->
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
              <v-select
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
          </div>
          <div v-else>
            <!-- Braintree Dropin (for accepting payments)-->
            <div id="dropin-container" />
            <button
              id="submit-button"
              ref="submitButton"
              class="bg-primary-darken-1 fill-height align-middle w-full py-5 items-center h-full text-white" 
            >
              Submit
            </button>
          </div>


          <!-- <p>Total: {{ clientCartTotal }}</p> -->

          <!--Buttons Before Shipping Info Submitted-->
          <div
            v-if="!infoSubmitted"
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
//This shouldn't ever run calls to printify directly
//we should make one order creation api call to firebase (/api/add.post) to create the original order document when a user submits their shipping/billing/user info (Order Information)

//Our client makes a call to create the braintree dropin (/api/payment/braintree.?)
//Our braintree dropin should be responsible for making our call to the sales API (/api/payment/braintree/sale.post)
//The braintree sale call should VALIDATE the item pricing being passed in against the server items, then post the sale to braintree.  Subsequently this should update the client's Firebase Order Document with the correct status/payment info/etc. Finally, we should return the updated order object.

//The client should receive the updated order object - or an error status - and be redirected to the order page


// Let's set our shit straight

// Finished
  // Step 1 - Ensure cart data is present
  // Step 2 - Display cart data as an order summary
  // Step 3 - Collect Shipping and Billing Info

// In Progress
  // Step 4 - If data passes vaildation, proceed, otherwise throw an error for the user to handle
    // NOTE - We may be able to do better validation with rules up in the template, rather than relying on my shitty validation functions - but we could still
    // try to do some kind of pre-processing validation here in the setup script in order to mitigate fraud risk and chargebacks and stuff
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
import { useOrderDataStore } from '~/stores/orderData'
import { getAuth, signInAnonymously } from 'firebase/auth'
import dropin from 'braintree-web-drop-in'


//TODO
//We may want to see if we can incorporate a getAuth() updateProfile() thing going on here to update the user (or anonymous user) profile with their most current information
//Need to allow the option for users to create an account with their order info (honestly, make an account either way, but only subscribe them to marketing emails if they check the box)


//Global variables
  //Datastores
const user = useUserDataStore() //Need to save the user's profile to the userDataStore
const cart = useCartDataStore()
const store = useProductDataStore()
const orders = useOrderDataStore()
//Firebase
const auth = getAuth();
const authUser = useFirebaseUser()
// authUser.value = auth.currentUser.uid

//Refs - // Need to go through these and make sure we can't just locally initialize them within functions
const infoSubmitted = ref(false)
const clientCartTotal = ref(0)
const clientCartShipTotal = ref(0)
const cartProducts = ref([])
const cartItemIds = ref([])
const cartVariants = ref([])
const firebaseOrderId = ref()
const loaded = ref(false)
// const hover = ref(false)
const billableCountries = ref()
const useAsBilling = ref(true)
const submitButton = ref(null)
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
var nonce
var payload
let authCall
const userCountry = ref()

const countries = ref([
  {code:"AF", name: "Afghanistan"},
  {code:"AX", name: "Åland Islands"},
  {code:"AL", name: "Albania"},
  {code:"DZ", name: "Algeria"},
  {code:"AS", name: "American Samoa"},
  {code:"AD", name: "Andorra"},
  {code:"AO", name: "Angola"},
  {code:"AI", name: "Anguilla"},
  {code:"AQ", name: "Antarctica"},
  {code:"AG", name: "Antigua and Barbuda"},
  {code:"AR", name: "Argentina"},
  {code:"AM", name: "Armenia"},
  {code:"AW", name: "Aruba"},
  {code:"AU", name: "Australia"},
  {code:"AT", name: "Austria"},
  {code:"AZ", name: "Azerbaijan"},
  {code:"BS", name: "Bahamas"},
  {code:"BH", name: "Bahrain"},
  {code:"BD", name: "Bangladesh"},
  {code:"BB", name: "Barbados"},
  {code:"BY", name: "Belarus"},
  {code:"BE", name: "Belgium"},
  {code:"BZ", name: "Belize"},
  {code:"BJ", name: "Benin"},
  {code:"BM", name: "Bermuda"},
  {code:"BT", name: "Bhutan"},
  {code:"BO", name: "Bolivia, Plurinational State of"},
  {code:"BQ", name: "Bonaire, Sint Eustatius and Saba"},
  {code:"BA", name: "Bosnia and Herzegovina"},
  {code:"BW", name: "Botswana"},
  {code:"BV", name: "Bouvet Island"},
  {code:"BR", name: "Brazil"},
  {code:"IO", name: "British Indian Ocean Territory"},
  {code:"BN", name: "Brunei Darussalam"},
  {code:"BG", name: "Bulgaria"},
  {code:"BF", name: "Burkina Faso"},
  {code:"BI", name: "Burundi"},
  {code:"KH", name: "Cambodia"},
  {code:"CM", name: "Cameroon"},
  {code:"CA", name: "Canada"},
  {code:"CV", name: "Cape Verde"},
  {code:"KY", name: "Cayman Islands"},
  {code:"CF", name: "Central African Republic"},
  {code:"TD", name: "Chad"},
  {code:"CL", name: "Chile"},
  {code:"CN", name: "China"},
  {code:"CX", name: "Christmas Island"},
  {code:"CC", name: "Cocos (Keeling) Islands"},
  {code:"CO", name: "Colombia"},
  {code:"KM", name: "Comoros"},
  {code:"CG", name: "Congo"},
  {code:"CD", name: "Congo, the Democratic Republic of the"},
  {code:"CK", name: "Cook Islands"},
  {code:"CR", name: "Costa Rica"},
  {code:"CI", name: "Côte d'Ivoire"},
  {code:"HR", name: "Croatia"},
  {code:"CU", name: "Cuba"},
  {code:"CW", name: "Curaçao"},
  {code:"CY", name: "Cyprus"},
  {code:"CZ", name: "Czech Republic"},
  {code:"DK", name: "Denmark"},
  {code:"DJ", name: "Djibouti"},
  {code:"DM", name: "Dominica"},
  {code:"DO", name: "Dominican Republic"},
  {code:"EC", name: "Ecuador"},
  {code:"EG", name: "Egypt"},
  {code:"SV", name: "El Salvador"},
  {code:"GQ", name: "Equatorial Guinea"},
  {code:"ER", name: "Eritrea"},
  {code:"EE", name: "Estonia"},
  {code:"ET", name: "Ethiopia"},
  {code:"FK", name: "Falkland Islands (Malvinas)"},
  {code:"FO", name: "Faroe Islands"},
  {code:"FJ", name: "Fiji"},
  {code:"FI", name: "Finland"},
  {code:"FR", name: "France"},
  {code:"GF", name: "French Guiana"},
  {code:"PF", name: "French Polynesia"},
  {code:"TF", name: "French Southern Territories"},
  {code:"GA", name: "Gabon"},
  {code:"GM", name: "Gambia"},
  {code:"GE", name: "Georgia"},
  {code:"DE", name: "Germany"},
  {code:"GH", name: "Ghana"},
  {code:"GI", name: "Gibraltar"},
  {code:"GR", name: "Greece"},
  {code:"GL", name: "Greenland"},
  {code:"GD", name: "Grenada"},
  {code:"GP", name: "Guadeloupe"},
  {code:"GU", name: "Guam"},
  {code:"GT", name: "Guatemala"},
  {code:"GG", name: "Guernsey"},
  {code:"GN", name: "Guinea"},
  {code:"GW", name: "Guinea-Bissau"},
  {code:"GY", name: "Guyana"},
  {code:"HT", name: "Haiti"},
  {code:"HM", name: "Heard Island and McDonald Islands"},
  {code:"VA", name: "Holy See (Vatican City State)"},
  {code:"HN", name: "Honduras"},
  {code:"HK", name: "Hong Kong"},
  {code:"HU", name: "Hungary"},
  {code:"IS", name: "Iceland"},
  {code:"IN", name: "India"},
  {code:"ID", name: "Indonesia"},
  {code:"IR", name: "Iran, Islamic Republic of"},
  {code:"IQ", name: "Iraq"},
  {code:"IE", name: "Ireland"},
  {code:"IM", name: "Isle of Man"},
  {code:"IL", name: "Israel"},
  {code:"IT", name: "Italy"},
  {code:"JM", name: "Jamaica"},
  {code:"JP", name: "Japan"},
  {code:"JE", name: "Jersey"},
  {code:"JO", name: "Jordan"},
  {code:"KZ", name: "Kazakhstan"},
  {code:"KE", name: "Kenya"},
  {code:"KI", name: "Kiribati"},
  {code:"KP", name: "Korea, Democratic People's Republic of"},
  {code:"KR", name: "Korea, Republic of"},
  {code:"KW", name: "Kuwait"},
  {code:"KG", name: "Kyrgyzstan"},
  {code:"LA", name: "Lao People's Democratic Republic"},
  {code:"LV", name: "Latvia"},
  {code:"LB", name: "Lebanon"},
  {code:"LS", name: "Lesotho"},
  {code:"LR", name: "Liberia"},
  {code:"LY", name: "Libya"},
  {code:"LI", name: "Liechtenstein"},
  {code:"LT", name: "Lithuania"},
  {code:"LU", name: "Luxembourg"},
  {code:"MO", name: "Macao"},
  {code:"MK", name: "Macedonia, the Former Yugoslav Republic of"},
  {code:"MG", name: "Madagascar"},
  {code:"MW", name: "Malawi"},
  {code:"MY", name: "Malaysia"},
  {code:"MV", name: "Maldives"},
  {code:"ML", name: "Mali"},
  {code:"MT", name: "Malta"},
  {code:"MH", name: "Marshall Islands"},
  {code:"MQ", name: "Martinique"},
  {code:"MR", name: "Mauritania"},
  {code:"MU", name: "Mauritius"},
  {code:"YT", name: "Mayotte"},
  {code:"MX", name: "Mexico"},
  {code:"FM", name: "Micronesia, Federated States of"},
  {code:"MD", name: "Moldova, Republic of"},
  {code:"MC", name: "Monaco"},
  {code:"MN", name: "Mongolia"},
  {code:"ME", name: "Montenegro"},
  {code:"MS", name: "Montserrat"},
  {code:"MA", name: "Morocco"},
  {code:"MZ", name: "Mozambique"},
  {code:"MM", name: "Myanmar"},
  {code:"NA", name: "Namibia"},
  {code:"NR", name: "Nauru"},
  {code:"NP", name: "Nepal"},
  {code:"NL", name: "Netherlands"},
  {code:"NC", name: "New Caledonia"},
  {code:"NZ", name: "New Zealand"},
  {code:"NI", name: "Nicaragua"},
  {code:"NE", name: "Niger"},
  {code:"NG", name: "Nigeria"},
  {code:"NU", name: "Niue"},
  {code:"NF", name: "Norfolk Island"},
  {code:"MP", name: "Northern Mariana Islands"},
  {code:"NO", name: "Norway"},
  {code:"OM", name: "Oman"},
  {code:"PK", name: "Pakistan"},
  {code:"PW", name: "Palau"},
  {code:"PS", name: "Palestine, State of"},
  {code:"PA", name: "Panama"},
  {code:"PG", name: "Papua New Guinea"},
  {code:"PY", name: "Paraguay"},
  {code:"PE", name: "Peru"},
  {code:"PH", name: "Philippines"},
  {code:"PN", name: "Pitcairn"},
  {code:"PL", name: "Poland"},
  {code:"PT", name: "Portugal"},
  {code:"PR", name: "Puerto Rico"},
  {code:"QA", name: "Qatar"},
  {code:"RE", name: "Réunion"},
  {code:"RO", name: "Romania"},
  {code:"RU", name: "Russian Federation"},
  {code:"RW", name: "Rwanda"},
  {code:"BL", name: "Saint Barthélemy"},
  {code:"SH", name: "Saint Helena, Ascension and Tristan da Cunha"},
  {code:"KN", name: "Saint Kitts and Nevis"},
  {code:"LC", name: "Saint Lucia"},
  {code:"MF", name: "Saint Martin (French part)"},
  {code:"PM", name: "Saint Pierre and Miquelon"},
  {code:"VC", name: "Saint Vincent and the Grenadines"},
  {code:"WS", name: "Samoa"},
  {code:"SM", name: "San Marino"},
  {code:"ST", name: "Sao Tome and Principe"},
  {code:"SA", name: "Saudi Arabia"},
  {code:"SN", name: "Senegal"},
  {code:"RS", name: "Serbia"},
  {code:"SC", name: "Seychelles"},
  {code:"SL", name: "Sierra Leone"},
  {code:"SG", name: "Singapore"},
  {code:"SX", name: "Sint Maarten (Dutch part)"},
  {code:"SK", name: "Slovakia"},
  {code:"SI", name: "Slovenia"},
  {code:"SB", name: "Solomon Islands"},
  {code:"SO", name: "Somalia"},
  {code:"ZA", name: "South Africa"},
  {code:"GS", name: "South Georgia and the South Sandwich Islands"},
  {code:"SS", name: "South Sudan"},
  {code:"ES", name: "Spain"},
  {code:"LK", name: "Sri Lanka"},
  {code:"SD", name: "Sudan"},
  {code:"SR", name: "Suriname"},
  {code:"SJ", name: "Svalbard and Jan Mayen"},
  {code:"SZ", name: "Swaziland"},
  {code:"SE", name: "Sweden"},
  {code:"CH", name: "Switzerland"},
  {code:"SY", name: "Syrian Arab Republic"},
  {code:"TW", name: "Taiwan, Province of China"},
  {code:"TJ", name: "Tajikistan"},
  {code:"TZ", name: "Tanzania, United Republic of"},
  {code:"TH", name: "Thailand"},
  {code:"TL", name: "Timor-Leste"},
  {code:"TG", name: "Togo"},
  {code:"TK", name: "Tokelau"},
  {code:"TO", name: "Tonga"},
  {code:"TT", name: "Trinidad and Tobago"},
  {code:"TN", name: "Tunisia"},
  {code:"TR", name: "Turkey"},
  {code:"TM", name: "Turkmenistan"},
  {code:"TC", name: "Turks and Caicos Islands"},
  {code:"TV", name: "Tuvalu"},
  {code:"UG", name: "Uganda"},
  {code:"UA", name: "Ukraine"},
  {code:"AE", name: "United Arab Emirates"},
  {code:"GB", name: "United Kingdom"},
  {code:"US", name: "United States"},
  {code:"UM", name: "United States Minor Outlying Islands"},
  {code:"UY", name: "Uruguay"},
  {code:"UZ", name: "Uzbekistan"},
  {code:"VU", name: "Vanuatu"},
  {code:"VE", name: "Venezuela, Bolivarian Republic of"},
  {code:"VN", name: "Viet Nam"},
  {code:"VG", name: "Virgin Islands, British"},
  {code:"VI", name: "Virgin Islands, U.S."},
  {code:"WF", name: "Wallis and Futuna"},
  {code:"EH", name: "Western Sahara"},
  {code:"YE", name: "Yemen"},
  {code:"ZM", name: "Zambia"},
  {code:"ZW", name: "Zimbabwe"}
])

// const countryCodes = ref([])
const countryNames = ref([])


const setUserCountry = () => {
  for (let i=0; i<countries.value.length; i++){
    let country=countries.value[i]
    if(country.name==billingInfo.value.country){
      user.userData.billingInfo.country = country.code
      console.log("User Billing Country set")
      console.log("Country Name: " + billingInfo.value.country)
      console.log("Country Code: " + user.userData.billingInfo.country)
    }

    if (country.name == shippingInfo.value.country){
      const countryCode = country.code
      userCountry.value = shippingInfo.value.country
      user.userData.shippingInfo.country = countryCode
      clientCartTotal.value = getCartTotal()
      
      console.log("User Shipping Country Set.")
      console.log("Country Name: " + shippingInfo.value.country)
      console.log("Country Code: " + user.userData.shippingInfo.country)
    }
  }
}

onMounted(async() => {
  if(auth.currentUser){
    console.log(auth.currentUser.uid)
    authUser.value = auth.currentUser.uid
  } else{
    authUser.value = user.userData.userInfo.uid
  }

  if(cart.cartData.length>0 ){
    cartProducts.value = cart.cartData
    updateCartRefs() //Is this working correctly?
    //should i setusercountry all the way up here?

    //If user info is present (need to do the same in reverse on shippingInfoSubmit)
    if(user.userData){
      if(user.userData.userInfo){
        userInfo.value = user.userData.userInfo
      }
      if(user.userData.shippingInfo){
        shippingInfo.value = user.userData.shippingInfo
      }
      if(user.userData.billingInfo){
        billingInfo.value = user.userData.billingInfo
      }
    }

    //Not correct yet, needs to show us ONLY countries that are available for ALL selected variants
    // countries.value = getShippableCountries()
    billableCountries.value = countries.value //At least for now, I'm pretty sure we can map any possible printify countries with an appropriate braintree country counterpart, however we will need to be careful about orders being sent to "REST_OF_THE_WORLD" when the option is selected... need to ensure an appropriate billing country is still present, probably should do this by "watching" countries.value


    //I think we need to do a similar thing as this but in reverse when we are doing setUserShippingInfo
    countryNames.value = []
    for (let i=0;i<countries.value.length;i++){
      countryNames.value.push(countries.value[i].name)
      let country = countries.value[i]
      if(country.code==user.userData.shippingInfo.country){
        shippingInfo.value.country = country.name
      }
      if(country.code==user.userData.billingInfo.country){
        billingInfo.value.country = country.name
      }
    }
    setUserCountry()

    // console.log("Shippable Countries idk if we need this tho")
    // console.log(getShippableCountries())




    //I think this is a good idea
    clientCartTotal.value = getCartTotal()

    loaded.value = true
    //Pre-populate our shipping and billing info fields
      //If there are multiple options, select the user's default option, but add a dropdown for them to select from their pre-entered info, or they can enter new info
  }
  else {
    // cartProducts.value = cart.cartData
    loaded.value = false
  }
  updateBilling()
  payload = {
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
    // cart: cart.cartData.length>0 ? cart.cartData : null,
    cart: cart.cartData,
    shipping: shippingInfo.value,
    billing: billingInfo.value,
    user: userInfo.value,
    orderId: firebaseOrderId.value
  }
  authCall = await $fetch('/api/payment/braintree/token', { method: 'GET' })
})

//This might not be working properly
const cartVariantsInItem = (item) => {
  console.log("Getting variants for ItemID: " + item.id)
  // try{
    var variantsInCart=[]
    if(item.variants.length>0){
      for (let i=0; i<item.variants.length; i++){
        if(item.variants[i].inCart){
          console.log("Found a variant in cart")
          variantsInCart.push(item.variants[i]) //Maybe we should just be storing an ID here...
          console.log(variantsInCart)
        }
      }
    } else {
      if(item.variants[0].inCart){
        console.log("Cart variant length is 0 i think... pushing 0th variant")
        variantsInCart.push(item.variants[0]) //Maybe we should just be storing an ID here...
      }
    }
    // console.log(variantsInCart)
  // } catch(e) {
  //   //maybe something is happening.... here..... O_O
  //   console.log("Ah!")
  //   console.log(e)
  //   console.log(item)
  //   try {
  //     if(item.variants[0].inCart){variantsInCart.push(item.variants[0])}
  //     console.log("Pushed the item's only inCart variant to the variantsInCart:")
  //     console.log(variantsInCart)
  //   } catch (e) {
  //     console.log("Ah hah!!!")
  //     console.log(item)
  //     console.log(e)
  //     console.log("I still can't get this fucking thing right")
  //   }
  // }
  console.log("Finished cartVariantsInItem function")
  return variantsInCart
}

//Just copies the shippingInfo.value to billingInfo.value
const updateBilling = () => {
  if (useAsBilling.value){
    billingInfo.value = shippingInfo.value
  }
}



// const getShippableCountries = () => {
//   var allCountries = []
//     for (let i=0; i<cartVariants.value.length; i++) {
//       let variant = cartVariants.value[i]
//       for (let j=0; j<variant.shippingProfile.length;j++) {
//         let sProfile = variant.shippingProfile[j]
//         for(let k=0; k<sProfile.countries.length; k++){
//           if(!allCountries.includes(sProfile.countries[k])){
//             allCountries.push(sProfile.countries[k])
//           }
//         }
//       }
//     }
//     console.log("allCountries: ")
//     console.log(allCountries)

//     //Loop through allCountries and remove the country if it is not found on ANY variant
//     for (let i=0; i<allCountries.length; i++) {
//       let country = allCountries[i]
//       //allCountries now shows all unique countries that these variants can be shipped to
//       //now we need to get only the countries that universally are available in the selected country
//       for (let i=0; i<cartVariants.value.length; i++) {
//         let variant = cartVariants.value[i]
//         let foundCountry = false
//         for (let j=0; j<variant.shippingProfile.length;j++) {
//           let sProfile = variant.shippingProfile[j]
//           for(let k=0; k<sProfile.countries.length; k++){
//             if (sProfile.countries.includes(country)) {
//               foundCountry = true
//             }
//           }
//           if (!foundCountry){
//             // remove country
//             let idx = allCountries.indexOf(country)
//             allCountries = allCountries.splice(idx, 1)
//           }
//         }
//       }
//     }

//     console.log("Shippable Countries:")
//     console.log(allCountries)
//     return allCountries
// }

const updateCartRefs = () => {
  console.log("updateCartRefs: cartProducts.value:")
  console.log(cartProducts.value)
  for (let i=0; i<cartProducts.value.length; i++){
    let product = cartProducts.value[i]

    //All variants of all items in cart should already be in this array
    cartVariants.value = cartVariantsInItem(product)
    cartItemIds.value.push(product.id)
  }
}

const submitShippingInfo = async () => {
  //This function is so fucked up right now, we need to break apart separate functions for readability
  //step 1 - get user's submitted shippinginfo, userinfo, and billinginfo data
  //step 2 - ensure accurate and updated pricing & shiping costs
  //step 3 - create braintree dropin
  //step 4 - (?) create pending firebase order
  //step 5 - on braintree sale, update firebase with sale info, create printify order, update firebase order with printify info

  updateBilling() //This won't affect the billingInfo data unless the user has selected to use shippingInfo as billingInfo

  // user=useUserDataStore() //do we need to do this?

  user.userData.shippingInfo = shippingInfo.value
  user.userData.userInfo = userInfo.value
  user.userData.billingInfo = billingInfo.value


  //If no products in cart
  if (cart.cartData.length<=0) { 
    //return an error or redirect to the shop page
    //shouldn't be possible to access this button if there are no items in cart, but may as well protect it anyway...right?
    return { error: "Cart is empty" }
  }

  //Validate shipping info - future improvements could be made by calling an address validation API of some kind
  const shippingValidation = validateShippingInfo()
  // if (shippingValidation.error!=undefined) { 
  //   console.log(shippingValidation.error)
  //   return { error: shippingValidation.error}
  // }

  //Validate billing info
  const billingValidation = validateBillingInfo()
  // if (billingValidation.error) { 
  //   console.log(billingValidation.error!=undefined)
  //   return {error: billingValidation.error}
  // }

  checkForShippingProfiles() //May as well run this here now just to set our storedShippingProfiles.value to the user's submitted shipping info


  console.log("I've saved our user's shippingInfo to the userDataStore, and validated shipping and billing info, and set our storedShippingProfiles country value to whatever was input...untested though :D")

  //If user is logged in, and they added a new billing or shipping address, do a quick typo check so you can present "Did you mean?" suggestions
  //Otherwise, store the new billing/shipping info in firebase in the user collection

  //EXPERIMENTAL!
  // AND NOT FULLY INTEGRATED: still missing the ability to tie anonymous users to their accounts should they choose to create one.
  // If user is not logged in, use their info to create an unverified account, and store their info anyway.  If they ever choose to create an account, just switch the unverified flag and let them set a password using email verification
  if(!authUser.value||authUser.value==null){
    console.log("No user found")
    //https://firebase.google.com/docs/auth/web/anonymous-auth

    // const auth = getAuth()//should be getAuth(app) and app = initializeApp(firebaseConfig) i think
    // console.log("Got a... blank... auth?")
    signInAnonymously(auth).then(() => {
      // Signed in anonymously
      console.log("Signed in anonymously :D")
      userInfo.value.uid = auth.user.uid
      console.log(userInfo.value.uid)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log("Error (" + errorCode + ") - " + errorMessage )
    })
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     //User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     userInfo.value.uid = user.uid //kinda redundant i think, see below
    //     user.userData.userInfo = userInfo.value //This needs to be set with a patch
    //     console.log("Set the userInfo.value.uid to our user.uid")
    //   }
    // })
  }

  userInfo.value.uid = authUser.value
  
  console.log("Got auth")
  console.log(authUser.value)

  //Debug
  // const user = auth.currentUser //will return null if user is not logged in
  // try{
  //   if(user){
  //     const displayName = user.displayName
  //     const email = user.email
  //     const photoURL = user.photoURL
  //     const emailVerified = user.emailVerified
  //     const uid = user.uid

  //     user.providerData.forEach((profile) =>{
  //       console.log("Provider: " + profile.providerId)
  //       console.log("Provider-specific UID: " + profile.uid)
  //       console.log("Name: " + profile.displayName)
  //       console.log("Email: " + profile.email)
  //       console.log("Photo URL: " + profile.photoURL)
  //     })
    
  //     //How do we add this info?  Can we store it with user data, or do we have to store it in firestore?
  //     if (!user.shippingInfo.includes(shippingInfo.value)) {
  //       //push the new shipping info to the user profile - not sure how to do this exactly with firebase auth
  //       //I think we may actually have to store users in our db in order to save their info for them... maybe just keep it locally in the userDataStore and call it good enough?
  //       console.log("I want to push info to auth, but I don't know how yet :'(")
  //     }
  //   }
  // } catch(e){
  //   console.log(e)
  // }
  // console.log("Successfully finished playing with myself - auth stuff")

  
  // console.log("Set userInfo.value.uid to auth.user.uid... idk if it was a good idea to do that here, but i did")

  //Time to query firebase to get accurate pricing info in order to build braintree
  

  //Query firebase to get our cart total? now would be a better time for it I suppose
  clientCartTotal.value = getCartTotal()
  console.log("I'm so excited to create a firebase order using our clientCartTotal now :D")

  //CREATE OUR PENDING ORDER (in Firebase)
  let lineItems = []
  let firebaseLineItems = [] //This array of objects, for each variant in cart, {product_id, variant_id, quantity}
  for (let i=0; i<cartProducts.value.length;i++) {
    let product = cartProducts.value[i]
    for (let j=0; j<product.variants.length; j++) {
      let variant = product.variants[j]
      firebaseLineItems.push({
        product_id: product.id,
        variant_id: variant.id,
        quantity: variant.cartQty,
        price: itemPrice(variant).itemCost,
        shippingPrice: itemPrice(variant).shipCost
      })
      lineItems.push({
        product_id: variant.productId,
        variant_id: variant.id,
        quantity: cartVariants.value.cartQty
      })
    }
  }
  console.log("Line items arrays have been created for firebase and printify.")
  console.log("firebaseLineItems:")
  console.log(firebaseLineItems)
  console.log("printifyLineItems:")
  console.log(lineItems)


  const firebaseOrder = {
    status: 'Pending Payment', //Options: Pending Payment, [Payment Error: (error), Paid, Printify Error: (error), Awaiting Fulfillment, Shipped, Delivered, Refund Requested, Refunded, Refund Rejected, RMA Requested, RMA Accepted, Product Returned, RMA Processed, RMA Rejected]
    paymentStatus: 'Not Paid',
    printifyOrderStatus: 'Not Sent',
    printifyOrderId: null,
    userInfo: userInfo.value,
    shippingInfo: shippingInfo.value,
    billingInfo: billingInfo.value,
    orderCreateDate: new Date(),
    lineItems: firebaseLineItems,
    customerServiceMessageLog: [],
    paymentDate: 'Unpaid',
    trackingNumber: '',
    //We may be able to skip a lot of this shit and only add it to applicable orders (save money, be efficient! only post it if and when it's necessary!) (but if it's inevitably, or very likely going to end up on the object, maybe we should add it just to be safe?  idk database architecture is hard)
    // shipDate: 'Unshipped', //?
    // etaDate: 'Unfulfilled', //?
    // deliveryDate: 'Not Delivered', //?
    // refundDate: 'Not Refunded', //?
    // rmaDate: 'No RMA', //?
    // cancelDate: 'Not Canceled' //?
  }

  console.log("firebaseOrder:")
  console.log(firebaseOrder)

  //Post order to firebase
  const firebasePost = await $fetch('/api/add?col=orders', {method: 'POST', body:firebaseOrder})

  console.log("firebasePost Result:")
  console.log(firebasePost.result)
  //Needs errorHandling

  firebaseOrderId.value = firebasePost.result._key.path.segments[1]
  console.log("Firebase Order ID: " + firebasePost.result._key.path.segments[1])

  let localOrder = orders.orderData
  localOrder.push(firebasePost)

  //Now let's add our firebaseOrder to our local orderStore
  orders.$patch({orderData:localOrder})

  console.log("Creating braintree dropin")
  
  infoSubmitted.value = true
  
  ////Braintree, create yourself!...?
  
  dropin.create({
    authorization: await authCall,
    container: '#dropin-container',
    paypal: {
      flow: 'vault',
      amount: clientCartTotal.value,
      currency: 'USD'
    }
  },async (createErr, instance) => {
    if (createErr) {
      console.log('Create Error', createErr)
      //update firebase order with the payment issue
      return
    }
    submitButton.value.addEventListener('click', async () => {
      instance.requestPaymentMethod(async (err, event) => {
        // Submit payload.nonce to your server
        console.log("Event Nonce: " + event.nonce)
        nonce = event.nonce
        payload.nonce = nonce

        //RIGHT HERE
        //We need to make sure our FirebaseOrderID is passed through payload as orderId
        //I'm just doing this by re-establishing the whole damn payload.

        payload = {
          nonce: nonce,
          type: 'CreditCard',
          // details: {
          //   lastTwo: '11',
          //   cardType: 'Visa'
          // },
          // description: 'ending in 11',
          // binData: {
          //   commercial: 'Unknown',
          //   countryOfIssuance: 'USA',
          //   debit: 'Unknown',
          //   durbinRegulated: 'Unknown',
          //   healthcare: 'Unknown',
          //   payroll: 'Unknown',
          //   prepaid: 'Unknown',
          //   productId: 'Unknown'
          // },
          // threeDSecureInfo: {
          //   liabilityShiftPossible: false,
          //   liabilityShifted: false,
          //   status: 'not_eligible'
          // },
          // // deviceData: deviceData, //Does this work? No, it's resulting in an error: invalidKeysError: These keys are invalid: deviceData[VERSION]
          // // cart: cart.cartData.length>0 ? cart.cartData : null,
          cart: cart.cartData,
          shipping: shippingInfo.value,
          billing: billingInfo.value,
          user: userInfo.value,
          orderId: firebaseOrderId.value
        }


        const data = await $fetch('/api/payment/braintree/sale', {
          method: 'POST',
          body: payload
        })
        console.log("I think we just submitted a sale through Braintree, then updated the firebase order, and finally submitted an order to printify :D :D :D")
        console.log(data)

        if (data.length>0){
          //save our updated "userInfo.value.inVault" bool
          userInfo.value.inVault = true
          //update firebase order with response data
          firebaseOrder.value.status = data.status
          $router.push('/shop/orders?id=' + firebaseOrderId.value)
        }
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
      instance.on('error', (event) => {
        console.log("Instance Error: " + event)
      }),
      instance.on('changeActiveView', function(){
        // alert('activeView changed')
        console.log("Active View Changed")
      })
    })
  })

}

const validateShippingInfo = () => {
  if (shippingInfo.value.address1.length<=0) {
    //throw an error
    console.log("Shipping validation error!")
    return { error: "Shipping Address Cannot Be Empty" }
  }
  if (shippingInfo.value.region.length<=0){
    console.log("Shipping validation error!")
    return { error: "State/Region Cannot Be Empty"}
  }
  //
}

const validateBillingInfo = () => {
  if (billingInfo.value.address1.length<=0) {
    console.log("Billing validation error!")
    return { error: "Billing Address Cannot Be Empty" }
  }
}

const getCartTotal = () => {

  let totalPrice = 0

  for(let i=0; i<cart.cartData.length;i++){
    for(let j=0; j<cart.cartData[i].variants.length;j++) {
      totalPrice += (itemPrice(cart.cartData[i].variants[j]).itemCost + itemPrice(cart.cartData[i].variants[j]).shipCost) * cart.cartData[i].variants[j].cartQty
    }
  }
  // for (let i=0; i<cartVariants.value.length; i++) {
  //   let variant = cartVariants.value[i]
  //   totalPrice += variant.itemCost + variant.shipCost
  // }

  //We don't actually need to get this cart total from the server
  //When we submit the sale to braintree, we can run the api call to update firebase and we can check the cart items against the serverside price, and freeze the transaction if pricing doesn't add up

  // const cartIds = cartItemIds.value
  // console.log("getCartTotal: Fetching cart items from FirebaseDB")
  // console.log("HEY YOU!  Cart Item Ids: ")
  // console.log(cartItemIds.value)
  // const serverItems = await $fetch(`/api/queryItem?col=products&field=id&operator===&value=${cartIds}`, {method: 'GET'})
  // //Need to error handle this server call
  // if (serverItems.error){
  //   console.log("serverItems failed :'('")
  //   console.log(serverItems.error)
  //   return {error: serverItems.error}
  // }

  // let totalPrice = 0
  // console.log("Server Items: ")
  // console.log(serverItems)
  // console.log("serverItems.length: " + serverItems.length)

  // for (let i=0; i<serverItems.length; i++) {
  //   let sItem = serverItems[i]
  //   if (cartItemIds.value.includes(sItem.id)) {
  //     //This item is in the cart
  //     for(let j=0; j<sItem.variants.length; j++) {
  //       let variant = sItem.variants[j]
  //       // console.log("Total Price - itemPrice(variant).itemCost:" + itemPrice(variant).itemCost)
  //       // console.log("Total Price - itemPrice(variant).shipCost:" + itemPrice(variant).shipCost)
  //       // console.log("variant.cartQty:" + variant.cartQty)
  //       totalPrice+= (itemPrice(variant).totalPrice) * variant.cartQty
  //       // totalPrice+= itemPrice(variant) * variant.cartQty //getItemCost(variant)
  //       // totalPrice+= itemShippingPrice(variant) * variant.cartQty//getShippingCost(variant)
  //     }
  //   }
  // }
  console.log("getCartTotal: Total price is ("+totalPrice+")")
  console.log(totalPrice)
  return totalPrice
}

// const submitOrder = async () => {
//   // POST Order
//   console.log("I'm gonna do it")

  

//   //Now we need to confirm that the braintree payment successfully processed a full payment before moving any further



//   //We are now doing this server side from our sale.post api call
//   //Finally, if payment succeeds, we can send the order to printify
//   // const printifyOrder = {
//   //   //Printify POST data
//   //   external_id: firebaseOrderId.value,
//   //   line_items: lineItems, //this should just have a product_id, variant_id, and quantity
//   //   shipping_method: 1, //2 for express shipping
//   //   send_shipping_notification: true,
//   //   address_to: {
//   //     first_name: userInfo.value.firstName,
//   //     last_name: userInfo.value.lastName,
//   //     email: userInfo.value.email,
//   //     phone: userInfo.value.phone,
//   //     country: shippingInfo.value.country,
//   //     region: shippingInfo.value.region,
//   //     address1: shippingInfo.value.address1,
//   //     address2: shippingInfo.value.address2,
//   //     city: shippingInfo.value.city,
//   //     zip: shippingInfo.value.zip
//   //   }
//   // }

//   //First, post the order information to the database.  Not sure if there should be a users collection that contains orders, or if the orders should be stored in their own collection and referenced by the user's collection.
//   //I think the orders should be stored in their own collection, with a UID value.
//   //The UID value should be the same as the user's UID value, so that we can easily reference the user's orders.

//   //The orders collection should look something like this:
//   //orders: {
//   //  orderID: {
//   //    orderStatus: 'Created',
//   //    paymentStatus: 'Not Paid'
//   //    printifyOrderStatus: 'Not Sent'
//   //    printifyOrderId: null
//   //    userID: userID,
//   //    orderDate: orderDate,
//   //    orderTotal: orderTotal,
//   //    orderItems: [],
//   //    orderShipping: {
//   //      shippingCharged: shippingCharged,
//   //      shippingMethod: shippingMethod,
//   //      ourShippingCost: ourShippingCost,
//   //      shippingProvider: shippingProvider,
//   //      shippingProviderCost: shippingProviderCost,
//   //      shippingProviderTrackingNumber: null,
//   //      firstName: firstName,
//   //      lastName: lastName,
//   //      email: email,
//   //      phone: phone,
//   //      country: country,
//   //      region: region,
//   //      address1: address1,
//   //      address2: address2,
//   //      city: city,
//   //      zip: zip
//   //  },
//   //    orderBilling: {
//   //      firstName: firstName,
//   //      lastName: lastName,
//   //      email: email,
//   //      phone: phone,
//   //      country: country,
//   //      region: region,
//   //      address1: address1,
//   //      address2: address2,
//   //      city: city,
//   //      zip: zip,
//   // // Card information may actually be stored as a payment token depending on payment processor
//   // //       cardNumber: cardNumber,
//   // //       cardExpMonth: cardExpMonth,
//   // //      cardExpYear: cardExpYear,
//   // //      cardSecurityCode: cardSecurityCode
//   //  },
//   //}

//   // Add product to DB
//   const orderSubmission = await $fetch("/api/add?col=orders", {
//     method: 'POST',
//     body: {"thereIs":"Nothing here yet lol"}
//   })

//   console.log(orderSubmission)
//   //what do we need to do with this?
//   //update the status in firebase? redirect to an order-success page? or just the order-id page?
// }

const decreaseCartItemQty = (item, variant) => {

  //Ultimately we need to:
    // 1. Decrease the cartQty of the variant
    // 2. If the cartQty of the variant is 0, remove the variant from the cart
    // 3. If the cartQty of the variant is 0 and there are no more variants of this item in the cart, remove the item from the cart

  // In it's current form, i'm patching like crazy and I don't think it's absolutely necessary.
  // Oh well for now I guess.

  // It also appears that the qty doesn't always update properly. (I think it's because I'm not using the cartDataStore properly. Suggested by CoPilot)
  // See below for a suggested fix:
  // vue-3-composition-api-how-to-update-a-nested-object-in-a-ref

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

  // Do we need this?
  // updateCartRefs()

  //Just for fun, we patch the whole damn product store with everything the cart is doing
  store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)] = item)

  // itemTotal()
  // shipTotal()
}

function increaseCartItemQty(item, variant) {

  variant.cartQty++
  item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant
  cart.$patch(cart.cartData[cart.cartData.map((x)=>{return x.id}).indexOf(item.id)] = item)
  cartProducts.value = cart.cartData

  //Do we need this?
  // updateCartRefs()

  // Do we need to do anything to the product store here?
  // May as well try :D
  const store = useProductDataStore()
  store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)] = item)

  // itemTotal()
  // shipTotal()

}

function removeVariant(item, variant) {
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

  //Do we need this?
  // updateCartRefs()

  //Update the store to show updated inCart and cartQty values
  const store = useProductDataStore()
  store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)] = item)

  // itemTotal()
  // shipTotal()
}

const storedShippingProfiles = ref([])

const checkForShippingProfiles = () => {
  console.log("I'm checking for stored shipping countries to add to the storedShippingProfiles array")
  if(storedShippingProfiles.value = []){
    try{
      if (shippingInfo.value.length>0){
        console.log("shippingInfo.value.country was added to storedShippingProfiles")
        storedShippingProfiles.value.push(shippingInfo.value.country)
      }
    } catch {
      console.log("shippingInfo.value was not used in storedShippingProfiles")
    }
    try {
      if (user.userData.shippingInfo.country.length>0){
        console.log("user.userData.shippingInfo.country was added to storedShippingProfiles")
        storedShippingProfiles.value.push(user.userData.shippingInfo.country)
      }
    } catch {
      console.log("user.userData.shippingInfo.country was not used in storedShippingProfiles")
    }

    if (storedShippingProfiles.value.length==0){
      storedShippingProfiles.value.push("REST_OF_THE_WORLD")
      //or we should set it to US by default?  IDK...
      console.log("Nothing better was found, setting shipping profile to REST_OF_THE_WORLD")
    }
  }
  return storedShippingProfiles.value
}

//INDEX itemPrice
const itemPrice = function(variant) {
  let sProfile = false
  for (let i = 0; i < variant.shippingProfile.length ; i++) {
    for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
      if (variant.shippingProfile[i].countries[j] == user.userData.shippingInfo.country) {
        sProfile = variant.shippingProfile[i]
        variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
        variant.shipCost = Math.ceil(sProfile.additional_items.cost)
        cart.$patch(variant.id, {itemCost: variant.itemCost, shipCost: variant.shipCost})
        return {itemCost: variant.itemCost, shipCost: variant.shipCost}
      }
    }
  }
  console.log("sProfile: " + sProfile)
  if (!sProfile) {
    for (let i=0; variant.shippingProfile.length; i++) {
      for (let j=0; variant.shippingProfile[i].countries.length; j++){
        if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
          sProfile = variant.shippingProfile[i]
          console.log("New sProfile!")
          console.log(sProfile)
          variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
          variant.shipCost = Math.ceil(sProfile.additional_items.cost)
          cart.$patch(variant.id, {itemCost: variant.itemCost, shipCost: variant.shipCost})
          return {itemCost: variant.itemCost, shipCost: variant.shipCost}
        }
      }
    }
  }
  return {itemCost: variant.itemCost, shipCost: variant.shipCost}
}

// const itemPrice = (variant) => {
//   console.log("I'm going to get the itemPrice!")
//   let sProfile = false
//   for (let i = 0; i < variant.shippingProfile.length ; i++) {
//     for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
//       if (variant.shippingProfile[i].countries[j] == user.userData.shippingInfo.country) {
//         sProfile = variant.shippingProfile[i]
//         let iCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
//         let sCost = Math.ceil(sProfile.additional_items.cost)
//         // console.log(sProfile)
//         variant.itemCost = iCost
//         variant.shipCost = sCost
//         // cart.$patch((cartData) => {
//         //   cartData.variants[map((x)=>{return x.id}).indexOf(variant.id)] = variant
//         // })
//         //
//         cart.$patch(variant.id, {itemCost: variant.itemCost, shipCost: variant.shipCost})
//         console.log("I am returning the variant's cost! :D")
//         // console.log(Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100))
//         // console.log(Math.ceil(sProfile.additional_items.cost))
//         return {itemCost: iCost, shipCost: sCost, totalCost: iCost+sCost}
//         // console.log("Shipping Profile: " + sProfile)
//       }
//     }
//   }
//   if (!sProfile){
//     for (let i=0; variant.shippingProfile.length; i++) {
//       for (let j=0; variant.shippingProfile[i].countries.length; j++){
//         if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
//           sProfile = variant.shippingProfile[i]
//           let iCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
//           let sCost = Math.ceil(sProfile.additional_items.cost)
//           // console.log(sProfile)
//           variant.itemCost = iCost
//           variant.shipCost = sCost
//           // cart.$patch((cartData) => {
//           //   cartData.variants[map((x)=>{return x.id}).indexOf(variant.id)] = variant
//           // })
//           //
//           cart.$patch(variant.id, {itemCost: variant.itemCost, shipCost: variant.shipCost})
//           console.log("I am returning the variant's cost! :D")
//             // console.log("Shipping Profile: " + sProfile)
//           return {itemCost: iCost, shipCost: sCost, totalCost: iCost+sCost}
//         // console.log("Shipping Profile: " + sProfile)
//         }
//       }
//     }
//   }

//   return { itemCost: variant.itemCost, shipCost: variant.shipCost, totalCost: variant.itemCost + variant.shipCost }


//   // try{
//   //   try {
//   //     //Trying to find the cost based on the user's shipping country
//   //     console.log(shippingInfo.value.country)
//   //     console.log(variant.shippingProfile.map((x)=>{return x.countries}).indexOf(shippingInfo.value.country))
//   //     const sProfile = variant.shippingProfile[variant.shippingProfile.map((x)=>{return x.countries}).indexOf(shippingInfo.value.country)]
//   //     console.log("sProfile:")
//   //     console.log(sProfile)
//   //     console.log("shippingInfo.value.country firstitemcost:" + sProfile.first_item.cost)
//   //   } catch (e){
//   //     console.log(e)
//   //     try{
//   //       console.log("what")
//   //       console.log(user.user[0].shippingInfo.country)
//   //       const sProfile = variant.shippingProfile[variant.shippingProfile.map((x)=>{return x.countries}).indexOf(user.user[0].shippingInfo.country)]
//   //       console.log("user.user[0].shippingInfo.country firstitemcost:" + sProfile.first_item.cost)
//   //     } catch (e){
//   //       console.log(e)
//   //       try{
//   //         //Trying to find a "REST_OF_THE_WORLD country"
//   //         const sProfile = variant.shippingProfile[variant.shippingProfile.map((x)=>{return x.countries}).indexOf("REST_OF_THE_WORLD")]
//   //         console.log("REST_OF_THE_WORLD firstitemcost: " + sProfile.first_item.cost)
//   //       } catch (e){
//   //         console.log(e)
//   //         const sProfile = variant.shippingProfile[0]
//   //         console.log("variant.shippingProfile[0] firstitemcost: " + sProfile.first_item.cost)
//   //         const cost = variant.cost
//   //         console.log(cost)
//   //         const shipCost = sProfile.first_item.cost
//   //         console.log(shipCost)
//   //         // const addCost = sProfile.additional_items.cost
//   //         const ourCost = (cost * .1) + 100
//   //         console.log(ourCost)
          
//   //         //Don't use addcost here... i think
//   //         const total = Math.ceil(cost + shipCost + ourCost)
//   //         console.log(total)
//   //         return total
//   //       }
//   //     }
//   //   }
//   // } catch (e) {
//   //   console.log("I really fucked this up")
//   //   console.log(e)
//   //   return { error: e, msg: "No acceptable shipping profile was found.  Please go fuck yourself - or perhaps try a mail forwarding service?"}
//   // }

//   // const cost = variant.cost
//   // console.log(cost)
//   // const shipCost = sProfile.first_item.cost
//   // console.log(shipCost)
//   // // const addCost = sProfile.additional_items.cost
//   // const ourCost = (cost * .1) + 100
//   // console.log(ourCost)
  
//   // //Don't use addcost here... i think
//   // const total = Math.ceil(cost + shipCost + ourCost)
//   // console.log(total)
//   // return total

// }

// const itemTotalPrice = async (variant) => {
//   //THIS SHOULD ONLY BE RUN ON VARIANTS PULLED DIRECTLY FROM FIREBASE - or maybe even printify honestly
//   //Get the shipping profile options of the variant
//   //Get cost info of the variant
//   //Should we charge tax?  Fuck no, taxation is theft
//   //Add in our share: *.1 + $1.00 (.05 being given as art comissions, 0.03 + 0.49 covers payment processing, don't know what our tech expenses will be like but fuck I hope we make a profit and soon...)
//   //Add them up (and multiply by cartQty?)

//   try{
//     try {
//       const sProfile = variant.shippingProfile[variant.shippingProfile.map((x)=>{return x.countries}).indexOf(shippingInfo.value.country)]
//       console.log(sProfile.first_item.cost)
//     } catch {
//       const sProfile = variant.shippingProfile[variant.shippingProfile.map((x)=>{return x.countries}).indexOf("REST_OF_THE_WORLD")]
//       console.log(sProfile.first_item.cost)
//     }
//   } catch (e) {
//     return { error: e, msg: "No acceptable shipping profile was found.  Please go fuck yourself - or perhaps try a mail forwarding service?"}
//   }

//   const cost = variant.cost
//   const shipCost = sProfile.first_item.cost
//   const addCost = sProfile.additional_items.cost
//   const ourCost = (cost * .1) + 100
  
//   const total = cost + shipCost + addCost + ourCost
//   return total
// }

// const itemShippingPrice = async (variant) => { 
//   try {
//     try {
//       const sProfile = variant.shippingProfile[variant.shippingProfile.map((x)=>{return x.countries}).indexOf(shippingInfo.value.country)]
//       console.log(sProfile.first_item.cost)
//     } catch {
//       const sProfile = variant.shippingProfile[variant.shippingProfile.map((x)=>{return x.countries}).indexOf("REST_OF_THE_WORLD")]
//       console.log(sProfile.first_item.cost)
//     }
//   } catch (e) {
//     return { error: e, msg: "No acceptable shipping profile was found.  Please go fuck yourself - or perhaps try a mail forwarding service?"}
//   }
//   const addCost = sProfile.additional_items.cost
//   return addCost
// }

// const itemShippingPrice = function(variant) {
//   const user = useUserDataStore()
//   let sProfile = false

//   // is this running correctly?
//   // console.log("Profiles: " + variant.shippingProfile[0])
//   for (let i = 0; i < variant.shippingProfile.length ; i++) {
//     for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
//       if (variant.shippingProfile[i].countries[j] == user.userData[0].country) {
//         sProfile = variant.shippingProfile[i]
//         variant.shipCost = sProfile.additional_items.cost
//         // console.log("Shipping Profile: " + sProfile)
//         return variant.shipCost
//       }
//     }
//   }
//   if (!sProfile) {
//     for (let i=0; variant.shippingProfile.length; i++) {
//       for (let j=0; variant.shippingProfile[i].countries.length; j++) {
//         if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
//           sProfile = variant.shippingProfile[i]
//           variant.shipCost = sProfile.additional_items.cost
//           // console.log("Shipping Profile: " + sProfile)
//           return variant.shipCost
//         }
//       }
//     }
//   }
//   // console.log(sProfile.first_item.cost)
//   return (variant.shipCost >0 ? variant.shipCost : 1000)
// }


// const itemPrice = function(variant) {
//   // console.log(variant)
//   // const cart = useCartDataStore() //Do I have to do this here?
//   // const user = useUserDataStore()
//   let sProfile = false

//   // is this running correctly?
//   // console.log("Profiles: " + variant.shippingProfile[0])
//   console.log("For each shipping profile in variant: ")
//   for (let i = 0; i < variant.shippingProfile.length ; i++) {
//     console.log(variant.shippingProfile[i])
//     // console.log(variant.shippingProfile[i].countries)

//     //going to try a for country in countries loo
//     for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
//       console.log(variant.shippingProfile[i].countries[j])
//       if (variant.shippingProfile[i].countries[j] == user.userData[0].shippingInfo.country) {
//         sProfile = variant.shippingProfile[i]
//         variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
//         cart.$patch(variant.id, {itemCost: variant.itemCost})
//         console.log("Got it done son")
//         return variant.itemCost
//         // console.log("Shipping Profile: " + sProfile)
//       }
//     }
//   }

//   if ( !sProfile.first_item.cost || sProfile.first_item.cost<1) {
//     console.log("There isn't a matching shippingProfile, using REST_OF_THE_WORLD if available")
//     for (let i=0; variant.shippingProfile.length; i++) {
//       if (variant.shippingProfile[i].countries.includes("REST_OF_THE_WORLD")) {
//         sProfile = variant.shippingProfile[i]
//         variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
//         cart.$patch(variant.id, {itemCost: variant.itemCost})
//         console.log("Pushed the tush")
//         return variant.itemCost
//         // console.log("Shipping Profile: " + sProfile)
//       }
//     }
//   }

//   // console.log(sProfile)
//   // variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
//   // cart.$patch(variant.id, {itemCost: variant.itemCost})
//   console.log("Returning itemCost: " + variant.itemCost)
//   return variant.itemCost
//   //   let firstItemCost = variant.shippingProfile[].first_item.cost
//   //   let additionalItemCost = variant.shippingProfile[].additional_items.cost
//   // return variant.cost + 
// }


// const itemTotal = ref(computed(()=>{
//   let total = 0
//   for (let i=0; i<cartProducts.value.length; i++){
//     for (let j=0; j<cartProducts.value[i].variants.length; j++){
//       total += (itemPrice(cartProducts.value[i].variants[j]) * cartProducts.value[i].variants[j].cartQty)
//     }
//   }

//   total = Math.ceil(total)

//   // console.log("Items Total Price: " + total)
//   return total
// }))

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


</script>