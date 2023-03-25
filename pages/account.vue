<!-- eslint-disable vue/multi-word-component-names -->

<!--To Do
Confirmation pop-ups for delete account and sign out.
White card is not floating high enough.

-->

<template>
  <div class="bgImg h-100">
    <div class="bgImgCont">
      <!--Header-->
      <div class="p-3rem">
        <NuxtLink to="/account">
          <p
            class="pageTitle"
          > 
            User Account
          </p>
        </NuxtLink>
      </div>
      <div
        v-if="auth.currentUser || firebaseUser"
        class="shadow plainContainer p-2rem max-w-50rem rounded-25px"
      >
        <!--Profile Pic and Account Info Text-->
        <div class="flex space-x-1.5rem <sm:(flex-wrap space-x-0 space-y-1.5rem)">
          <!--Profile Image with Icon Relative Container-->
          <div class="flex align-center relative bg-green w-max-1/3 <sm:(w-full)">
            <img
              src="/img/MLogo.png"
            >
            <div class="absolute bottom-2 left-2">
              <v-btn
                icon="mdi-account-edit"
                color="white"
              />
            </div>
          </div>
          <!--Account Info Text-->
          <div class="mx-auto text-lg text-center gap-3 flex flex-column justify-center">
            <p class="font-bold text-1.5rem">
              Name Placeholder
            </p>
            <p>mymessage@email.com</p>
            <p>258 First Street, City, State, 25852</p>
            <p>258-8520-8520</p>
            <!-- <p class="plainBtn text-gray-500">
              Edit Profile
            </p> -->
          </div>
        </div>
        <!--Paragraph-->
        <p class="my-1rem">
          I need to add previous orders, password reset, display name, profile picture upload, account delete, and other settings as they become applicable.
        </p>
        <!--Buttons-->
        <!-- Temporary thing sorry for touching your stuff -->
        <div
          class="flex justify-center flex-wrap"
        >
          <div
            class="p-2 text-white elevation-10 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
          >
            <NuxtLink to="/shop/orders?id=IWseAIanYa7S8Qaiflvx">
              <v-btn
                variant="text"
                class="w-full"
              >
                Go to test order
              </v-btn>
            </NuxtLink>
          </div>
        </div>
        <div
          class="flex justify-center flex-wrap"
        >
          <div
            class="p-2 text-white elevation-10 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
          >
            <NuxtLink to="/shop/orders">
              <v-btn
                variant="text"
                class="w-full"
              >
                Go to Orders
              </v-btn>
            </NuxtLink>
          </div>
        </div>

        <v-select 
          v-model="userCountry"
          :items="countryNames"
          @update:model-value="setUserCountry"
        />


        <!-- Old -->
        <!-- <v-select
          id="country"
          v-model="userCountry"
          :items="countryNames"
          label="Country"
          placeholder="Country"
          hide-details
          bg-color="background"
          @update:model-value="setUserCountry"
        /> -->
        <!-- <vue-country-select
          v-model:model="userCountry"
          class="vue-country-select"
          name="country-select"
          language="en-US"
          searchable="true"
        /> -->
        <!--End of temporary shit, sorry again for touching stuff-->
        
        
        <div class="btnRow">  
          <button
            class="colorBtn"
            @click="dialog = true"
          >
            Edit Account
          </button>
          <v-dialog
            v-model="dialog"
          />
          <button
            class="colorBtn"
            @click="testdialog = true"
          >
            Sign Out
          </button>
          <v-dialog
            v-model="testdialog"
          >
            <div class="dialogContain">
              <div class="containTitle">
                Sign Out
              </div>
              <div class="containText">
                <p>
                  Are you sure you would like to sign out of your account?
                </p>
              </div>
              <div class="btnRow">
                <button
                  class="plainBtn"
                  @click="testdialog = false"
                >
                  No, Stay Logged In. 
                </button>
                <button
                  class="plainBtn"
                  @click="signOutUser"
                >
                  Yes, Log Out. 
                </button>
              </div>
            </div>
          </v-dialog>
        </div>
      </div>
      <!--If Else (Not Logged In)-->
      <div
        v-else
        class="m-auto bg-white p-10 max-w-50rem elevation-5 rounded-25px"
      >
        <!-- Push the login url to the router, then redirect back here after successful login -->
        <div class="pb-5 text-1.25rem text-center">
          <p class="text-gray-600 mt-10">
            You are not currently logged in.
          </p>
        </div>
        <div
          class="flex justify-center flex-wrap"
        >
          <div
            class="p-2 text-white elevation-10 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
          >
            <NuxtLink to="/login">
              <v-btn
                variant="text"
                class="w-full"
              >
                Login
              </v-btn>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div> <AFooter />
  <!-- <TheFooter class="absolute bottom-0 <sm:static" /> -->
</template>






       

<script setup>
import { async } from '@firebase/util';
import { getAuth } from 'firebase/auth'
import { useUserDataStore } from '~/stores/userData';

//TODO
//Setup updateProfile actions

//Let's start with user shipping country
/* <v-select
  id="country"
  v-model="userCountry"
  :items="countries"
  label="Country"
  placeholder="Country"
  hide-details
  bg-color="background"
  transition="scale-transition"
  change
  @update:model-value="setUserCountry"
/> */
const user = useUserDataStore()

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
    if (country.name == userCountry.value){
      const countryCode = country.code
      user.userData.shippingInfo.country = countryCode
      console.log("User Info Set.")
      console.log("Country Name: " + userCountry.value)
      console.log("Country Code: " + user.userData.shippingInfo.country)
      break
    }
  }
  // console.log("Country Code2: " + countryCode)
  
}

const auth = getAuth();
const firebaseUser = useFirebaseUser()
firebaseUser.value = auth.currentUser;

const loadAdminLink = ref(false)

const userPhotoUrl = ref()

onMounted(async () => {
  if (auth.currentUser) {
    userPhotoUrl.value = auth.currentUser.photoURL
  }
  if(!user.userData.shippingInfo.country.length>0){
    //No User Country Found, defaulting to the US
    user.$patch({userData: {shippingInfo:{country:"US"}}})
    userCountry.value = "United States"
  }

  for (let i=0;i<countries.value.length;i++){
    countryNames.value.push(countries.value[i].name)
    if(countries.value[i].code==user.userData.shippingInfo.country){
      userCountry.value = countries.value[i].name
    }
  }

  // userCountry.value = user.userData.shippingInfo.country

})


if(auth.currentUser!==null){
  const displayName = auth.currentUser.displayName
  const email = auth.currentUser.email
  const emailVerified = auth.currentUser.emailVerified
  const photoURL = auth.currentUser.photoURL
  const isAnonymous = auth.currentUser.isAnonymous
  const uid = auth.currentUser.uid
  const providerData = auth.currentUser.providerData

  user.$patch(
    { 
      userData: 
      { 
        userInfo:
        {
          displayName:displayName,
          email:email,
          emailVerified:emailVerified,
          photoURL:photoURL,
          isAnonymous:isAnonymous,
          uid:uid
          //I hope our firstName, lastName, and phone variables passed from the checkout form aren't lost when users visit the account page :(
        }
      }
    }
  )

  if (auth.currentUser.uid=="TkEKGIw1RNT8DfNFyK88eQtJBwl1" || auth.currentUser.uid=="MluMazy3zhVrub2QWoJDy4dJFvn2") {
    loadAdminLink.value = 'true'
  }


}
</script>

<script>
  export default {
    data () {
      return {
        peelog: false,
        testdialog: false,
        dialog: false,
      }
    },
  }
</script>


<!-- <NuxtLink
          v-if="loadAdminLink"
          to="/admin"
        >
          <p
            class="text-center pt-3px bg-red text-white"
          >
            Link for Admins
          </p>
        </NuxtLink> -->
      <!-- <NuxtLink to="/braintree">
        <h6
          class="text-black justify-center text-center align-center font-bold text-xl mb-10"
          :style="{fontFamily: 'Roboto Slab', textShadow: '1px 1px rgba(52, 211, 153)'}"
        >
          Braintree
        </h6>
      </NuxtLink> -->

       <!-- <v-list lines="one">
          <v-list-item
            :key="auth.currentUser.uid"
            :title="auth.currentUser.displayName"
            :subtitle="auth.currentUser.email"
            :prepend-avatar="userPhotoUrl"
            lazy-prepend-avatar="/img/MLogo.png"
          />
        </v-list> -->

        <!-- <v-card-text>{{ auth.currentUser }}</v-card-text> -->
        <!-- <v-btn @click="signOutUser">
            Sign Out
          </v-btn> -->

          <!--Old Button-->
          <!-- @click="isActive.value = false" -->