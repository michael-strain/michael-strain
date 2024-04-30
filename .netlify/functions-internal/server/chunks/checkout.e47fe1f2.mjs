import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './ShopFooter.a164084a.mjs';
import { _ as __nuxt_component_0$2 } from './server.mjs';
import { u as useFirebaseUser } from './useStates.13516514.mjs';
import { ref, resolveComponent, withCtx, createVNode, toDisplayString, unref, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useCartDataStore } from './cartData.947fcc28.mjs';
import { u as useProductDataStore } from './productData.7d836a64.mjs';
import { u as useUserDataStore } from './userData.be862cd2.mjs';
import { u as useOrderDataStore } from './orderData.d1183d9d.mjs';
import { getAuth, signInAnonymously } from 'firebase/auth';
import dropin from 'braintree-web-drop-in';
import './_plugin-vue_export-helper.a1a6add7.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'defu';
import './netlify.mjs';
import 'node-fetch-native/polyfill';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import './index.a7d16411.mjs';

const _sfc_main = {
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useUserDataStore();
    const cart = useCartDataStore();
    const store = useProductDataStore();
    const orders = useOrderDataStore();
    const auth = getAuth();
    const authUser = useFirebaseUser();
    const infoSubmitted = ref(false);
    const clientCartTotal = ref(0);
    ref(0);
    const cartProducts = ref([]);
    ref([]);
    const cartVariants = ref([]);
    const firebaseOrderId = ref();
    const loaded = ref(false);
    const billableCountries = ref();
    const useAsBilling = ref(true);
    const submitButton = ref(null);
    const userInfo = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      uid: ""
    });
    const shippingInfo = ref({
      country: "",
      region: "",
      address1: "",
      address2: "",
      city: "",
      zip: ""
    });
    const billingInfo = ref({
      country: "",
      region: "",
      address1: "",
      address2: "",
      city: "",
      zip: ""
    });
    var nonce;
    var payload;
    let authCall;
    const userCountry = ref();
    const countries = ref([
      { code: "AF", name: "Afghanistan" },
      { code: "AX", name: "\xC5land Islands" },
      { code: "AL", name: "Albania" },
      { code: "DZ", name: "Algeria" },
      { code: "AS", name: "American Samoa" },
      { code: "AD", name: "Andorra" },
      { code: "AO", name: "Angola" },
      { code: "AI", name: "Anguilla" },
      { code: "AQ", name: "Antarctica" },
      { code: "AG", name: "Antigua and Barbuda" },
      { code: "AR", name: "Argentina" },
      { code: "AM", name: "Armenia" },
      { code: "AW", name: "Aruba" },
      { code: "AU", name: "Australia" },
      { code: "AT", name: "Austria" },
      { code: "AZ", name: "Azerbaijan" },
      { code: "BS", name: "Bahamas" },
      { code: "BH", name: "Bahrain" },
      { code: "BD", name: "Bangladesh" },
      { code: "BB", name: "Barbados" },
      { code: "BY", name: "Belarus" },
      { code: "BE", name: "Belgium" },
      { code: "BZ", name: "Belize" },
      { code: "BJ", name: "Benin" },
      { code: "BM", name: "Bermuda" },
      { code: "BT", name: "Bhutan" },
      { code: "BO", name: "Bolivia, Plurinational State of" },
      { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
      { code: "BA", name: "Bosnia and Herzegovina" },
      { code: "BW", name: "Botswana" },
      { code: "BV", name: "Bouvet Island" },
      { code: "BR", name: "Brazil" },
      { code: "IO", name: "British Indian Ocean Territory" },
      { code: "BN", name: "Brunei Darussalam" },
      { code: "BG", name: "Bulgaria" },
      { code: "BF", name: "Burkina Faso" },
      { code: "BI", name: "Burundi" },
      { code: "KH", name: "Cambodia" },
      { code: "CM", name: "Cameroon" },
      { code: "CA", name: "Canada" },
      { code: "CV", name: "Cape Verde" },
      { code: "KY", name: "Cayman Islands" },
      { code: "CF", name: "Central African Republic" },
      { code: "TD", name: "Chad" },
      { code: "CL", name: "Chile" },
      { code: "CN", name: "China" },
      { code: "CX", name: "Christmas Island" },
      { code: "CC", name: "Cocos (Keeling) Islands" },
      { code: "CO", name: "Colombia" },
      { code: "KM", name: "Comoros" },
      { code: "CG", name: "Congo" },
      { code: "CD", name: "Congo, the Democratic Republic of the" },
      { code: "CK", name: "Cook Islands" },
      { code: "CR", name: "Costa Rica" },
      { code: "CI", name: "C\xF4te d'Ivoire" },
      { code: "HR", name: "Croatia" },
      { code: "CU", name: "Cuba" },
      { code: "CW", name: "Cura\xE7ao" },
      { code: "CY", name: "Cyprus" },
      { code: "CZ", name: "Czech Republic" },
      { code: "DK", name: "Denmark" },
      { code: "DJ", name: "Djibouti" },
      { code: "DM", name: "Dominica" },
      { code: "DO", name: "Dominican Republic" },
      { code: "EC", name: "Ecuador" },
      { code: "EG", name: "Egypt" },
      { code: "SV", name: "El Salvador" },
      { code: "GQ", name: "Equatorial Guinea" },
      { code: "ER", name: "Eritrea" },
      { code: "EE", name: "Estonia" },
      { code: "ET", name: "Ethiopia" },
      { code: "FK", name: "Falkland Islands (Malvinas)" },
      { code: "FO", name: "Faroe Islands" },
      { code: "FJ", name: "Fiji" },
      { code: "FI", name: "Finland" },
      { code: "FR", name: "France" },
      { code: "GF", name: "French Guiana" },
      { code: "PF", name: "French Polynesia" },
      { code: "TF", name: "French Southern Territories" },
      { code: "GA", name: "Gabon" },
      { code: "GM", name: "Gambia" },
      { code: "GE", name: "Georgia" },
      { code: "DE", name: "Germany" },
      { code: "GH", name: "Ghana" },
      { code: "GI", name: "Gibraltar" },
      { code: "GR", name: "Greece" },
      { code: "GL", name: "Greenland" },
      { code: "GD", name: "Grenada" },
      { code: "GP", name: "Guadeloupe" },
      { code: "GU", name: "Guam" },
      { code: "GT", name: "Guatemala" },
      { code: "GG", name: "Guernsey" },
      { code: "GN", name: "Guinea" },
      { code: "GW", name: "Guinea-Bissau" },
      { code: "GY", name: "Guyana" },
      { code: "HT", name: "Haiti" },
      { code: "HM", name: "Heard Island and McDonald Islands" },
      { code: "VA", name: "Holy See (Vatican City State)" },
      { code: "HN", name: "Honduras" },
      { code: "HK", name: "Hong Kong" },
      { code: "HU", name: "Hungary" },
      { code: "IS", name: "Iceland" },
      { code: "IN", name: "India" },
      { code: "ID", name: "Indonesia" },
      { code: "IR", name: "Iran, Islamic Republic of" },
      { code: "IQ", name: "Iraq" },
      { code: "IE", name: "Ireland" },
      { code: "IM", name: "Isle of Man" },
      { code: "IL", name: "Israel" },
      { code: "IT", name: "Italy" },
      { code: "JM", name: "Jamaica" },
      { code: "JP", name: "Japan" },
      { code: "JE", name: "Jersey" },
      { code: "JO", name: "Jordan" },
      { code: "KZ", name: "Kazakhstan" },
      { code: "KE", name: "Kenya" },
      { code: "KI", name: "Kiribati" },
      { code: "KP", name: "Korea, Democratic People's Republic of" },
      { code: "KR", name: "Korea, Republic of" },
      { code: "KW", name: "Kuwait" },
      { code: "KG", name: "Kyrgyzstan" },
      { code: "LA", name: "Lao People's Democratic Republic" },
      { code: "LV", name: "Latvia" },
      { code: "LB", name: "Lebanon" },
      { code: "LS", name: "Lesotho" },
      { code: "LR", name: "Liberia" },
      { code: "LY", name: "Libya" },
      { code: "LI", name: "Liechtenstein" },
      { code: "LT", name: "Lithuania" },
      { code: "LU", name: "Luxembourg" },
      { code: "MO", name: "Macao" },
      { code: "MK", name: "Macedonia, the Former Yugoslav Republic of" },
      { code: "MG", name: "Madagascar" },
      { code: "MW", name: "Malawi" },
      { code: "MY", name: "Malaysia" },
      { code: "MV", name: "Maldives" },
      { code: "ML", name: "Mali" },
      { code: "MT", name: "Malta" },
      { code: "MH", name: "Marshall Islands" },
      { code: "MQ", name: "Martinique" },
      { code: "MR", name: "Mauritania" },
      { code: "MU", name: "Mauritius" },
      { code: "YT", name: "Mayotte" },
      { code: "MX", name: "Mexico" },
      { code: "FM", name: "Micronesia, Federated States of" },
      { code: "MD", name: "Moldova, Republic of" },
      { code: "MC", name: "Monaco" },
      { code: "MN", name: "Mongolia" },
      { code: "ME", name: "Montenegro" },
      { code: "MS", name: "Montserrat" },
      { code: "MA", name: "Morocco" },
      { code: "MZ", name: "Mozambique" },
      { code: "MM", name: "Myanmar" },
      { code: "NA", name: "Namibia" },
      { code: "NR", name: "Nauru" },
      { code: "NP", name: "Nepal" },
      { code: "NL", name: "Netherlands" },
      { code: "NC", name: "New Caledonia" },
      { code: "NZ", name: "New Zealand" },
      { code: "NI", name: "Nicaragua" },
      { code: "NE", name: "Niger" },
      { code: "NG", name: "Nigeria" },
      { code: "NU", name: "Niue" },
      { code: "NF", name: "Norfolk Island" },
      { code: "MP", name: "Northern Mariana Islands" },
      { code: "NO", name: "Norway" },
      { code: "OM", name: "Oman" },
      { code: "PK", name: "Pakistan" },
      { code: "PW", name: "Palau" },
      { code: "PS", name: "Palestine, State of" },
      { code: "PA", name: "Panama" },
      { code: "PG", name: "Papua New Guinea" },
      { code: "PY", name: "Paraguay" },
      { code: "PE", name: "Peru" },
      { code: "PH", name: "Philippines" },
      { code: "PN", name: "Pitcairn" },
      { code: "PL", name: "Poland" },
      { code: "PT", name: "Portugal" },
      { code: "PR", name: "Puerto Rico" },
      { code: "QA", name: "Qatar" },
      { code: "RE", name: "R\xE9union" },
      { code: "RO", name: "Romania" },
      { code: "RU", name: "Russian Federation" },
      { code: "RW", name: "Rwanda" },
      { code: "BL", name: "Saint Barth\xE9lemy" },
      { code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" },
      { code: "KN", name: "Saint Kitts and Nevis" },
      { code: "LC", name: "Saint Lucia" },
      { code: "MF", name: "Saint Martin (French part)" },
      { code: "PM", name: "Saint Pierre and Miquelon" },
      { code: "VC", name: "Saint Vincent and the Grenadines" },
      { code: "WS", name: "Samoa" },
      { code: "SM", name: "San Marino" },
      { code: "ST", name: "Sao Tome and Principe" },
      { code: "SA", name: "Saudi Arabia" },
      { code: "SN", name: "Senegal" },
      { code: "RS", name: "Serbia" },
      { code: "SC", name: "Seychelles" },
      { code: "SL", name: "Sierra Leone" },
      { code: "SG", name: "Singapore" },
      { code: "SX", name: "Sint Maarten (Dutch part)" },
      { code: "SK", name: "Slovakia" },
      { code: "SI", name: "Slovenia" },
      { code: "SB", name: "Solomon Islands" },
      { code: "SO", name: "Somalia" },
      { code: "ZA", name: "South Africa" },
      { code: "GS", name: "South Georgia and the South Sandwich Islands" },
      { code: "SS", name: "South Sudan" },
      { code: "ES", name: "Spain" },
      { code: "LK", name: "Sri Lanka" },
      { code: "SD", name: "Sudan" },
      { code: "SR", name: "Suriname" },
      { code: "SJ", name: "Svalbard and Jan Mayen" },
      { code: "SZ", name: "Swaziland" },
      { code: "SE", name: "Sweden" },
      { code: "CH", name: "Switzerland" },
      { code: "SY", name: "Syrian Arab Republic" },
      { code: "TW", name: "Taiwan, Province of China" },
      { code: "TJ", name: "Tajikistan" },
      { code: "TZ", name: "Tanzania, United Republic of" },
      { code: "TH", name: "Thailand" },
      { code: "TL", name: "Timor-Leste" },
      { code: "TG", name: "Togo" },
      { code: "TK", name: "Tokelau" },
      { code: "TO", name: "Tonga" },
      { code: "TT", name: "Trinidad and Tobago" },
      { code: "TN", name: "Tunisia" },
      { code: "TR", name: "Turkey" },
      { code: "TM", name: "Turkmenistan" },
      { code: "TC", name: "Turks and Caicos Islands" },
      { code: "TV", name: "Tuvalu" },
      { code: "UG", name: "Uganda" },
      { code: "UA", name: "Ukraine" },
      { code: "AE", name: "United Arab Emirates" },
      { code: "GB", name: "United Kingdom" },
      { code: "US", name: "United States" },
      { code: "UM", name: "United States Minor Outlying Islands" },
      { code: "UY", name: "Uruguay" },
      { code: "UZ", name: "Uzbekistan" },
      { code: "VU", name: "Vanuatu" },
      { code: "VE", name: "Venezuela, Bolivarian Republic of" },
      { code: "VN", name: "Viet Nam" },
      { code: "VG", name: "Virgin Islands, British" },
      { code: "VI", name: "Virgin Islands, U.S." },
      { code: "WF", name: "Wallis and Futuna" },
      { code: "EH", name: "Western Sahara" },
      { code: "YE", name: "Yemen" },
      { code: "ZM", name: "Zambia" },
      { code: "ZW", name: "Zimbabwe" }
    ]);
    const countryNames = ref([]);
    const setUserCountry = () => {
      for (let i = 0; i < countries.value.length; i++) {
        let country = countries.value[i];
        if (country.name == billingInfo.value.country) {
          user.userData.billingInfo.country = country.code;
          console.log("User Billing Country set");
          console.log("Country Name: " + billingInfo.value.country);
          console.log("Country Code: " + user.userData.billingInfo.country);
        }
        if (country.name == shippingInfo.value.country) {
          const countryCode = country.code;
          userCountry.value = shippingInfo.value.country;
          user.userData.shippingInfo.country = countryCode;
          clientCartTotal.value = getCartTotal();
          console.log("User Shipping Country Set.");
          console.log("Country Name: " + shippingInfo.value.country);
          console.log("Country Code: " + user.userData.shippingInfo.country);
        }
      }
    };
    const cartVariantsInItem = (item) => {
      console.log("Getting variants for ItemID: " + item.id);
      var variantsInCart = [];
      if (item.variants.length > 0) {
        for (let i = 0; i < item.variants.length; i++) {
          if (item.variants[i].inCart) {
            console.log("Found a variant in cart");
            variantsInCart.push(item.variants[i]);
            console.log(variantsInCart);
          }
        }
      } else {
        if (item.variants[0].inCart) {
          console.log("Cart variant length is 0 i think... pushing 0th variant");
          variantsInCart.push(item.variants[0]);
        }
      }
      console.log("Finished cartVariantsInItem function");
      return variantsInCart;
    };
    const updateBilling = () => {
      if (useAsBilling.value) {
        billingInfo.value = shippingInfo.value;
      }
    };
    const submitShippingInfo = async () => {
      updateBilling();
      user.userData.shippingInfo = shippingInfo.value;
      user.userData.userInfo = userInfo.value;
      user.userData.billingInfo = billingInfo.value;
      if (cart.cartData.length <= 0) {
        return { error: "Cart is empty" };
      }
      validateShippingInfo();
      validateBillingInfo();
      checkForShippingProfiles();
      console.log("I've saved our user's shippingInfo to the userDataStore, and validated shipping and billing info, and set our storedShippingProfiles country value to whatever was input...untested though :D");
      if (!authUser.value || authUser.value == null) {
        console.log("No user found");
        signInAnonymously(auth).then(() => {
          console.log("Signed in anonymously :D");
          userInfo.value.uid = auth.user.uid;
          console.log(userInfo.value.uid);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error (" + errorCode + ") - " + errorMessage);
        });
      }
      userInfo.value.uid = authUser.value;
      console.log("Got auth");
      console.log(authUser.value);
      clientCartTotal.value = getCartTotal();
      console.log("I'm so excited to create a firebase order using our clientCartTotal now :D");
      let lineItems = [];
      let firebaseLineItems = [];
      for (let i = 0; i < cartProducts.value.length; i++) {
        let product = cartProducts.value[i];
        for (let j = 0; j < product.variants.length; j++) {
          let variant = product.variants[j];
          firebaseLineItems.push({
            product_id: product.id,
            variant_id: variant.id,
            quantity: variant.cartQty,
            price: itemPrice(variant).itemCost,
            shippingPrice: itemPrice(variant).shipCost
          });
          lineItems.push({
            product_id: variant.productId,
            variant_id: variant.id,
            quantity: cartVariants.value.cartQty
          });
        }
      }
      console.log("Line items arrays have been created for firebase and printify.");
      console.log("firebaseLineItems:");
      console.log(firebaseLineItems);
      console.log("printifyLineItems:");
      console.log(lineItems);
      const firebaseOrder = {
        status: "Pending Payment",
        paymentStatus: "Not Paid",
        printifyOrderStatus: "Not Sent",
        printifyOrderId: null,
        userInfo: userInfo.value,
        shippingInfo: shippingInfo.value,
        billingInfo: billingInfo.value,
        orderCreateDate: new Date(),
        lineItems: firebaseLineItems,
        customerServiceMessageLog: [],
        paymentDate: "Unpaid",
        trackingNumber: ""
      };
      console.log("firebaseOrder:");
      console.log(firebaseOrder);
      const firebasePost = await $fetch("/api/add?col=orders", { method: "POST", body: firebaseOrder });
      console.log("firebasePost Result:");
      console.log(firebasePost.result);
      firebaseOrderId.value = firebasePost.result._key.path.segments[1];
      console.log("Firebase Order ID: " + firebasePost.result._key.path.segments[1]);
      let localOrder = orders.orderData;
      localOrder.push(firebaseOrder);
      orders.$patch({ orderData: localOrder });
      console.log("Creating braintree dropin");
      infoSubmitted.value = true;
      dropin.create({
        authorization: await authCall,
        container: "#dropin-container",
        paypal: {
          flow: "vault",
          amount: clientCartTotal.value,
          currency: "USD"
        }
      }, async (createErr, instance) => {
        if (createErr) {
          console.log("Create Error", createErr);
          return;
        }
        submitButton.value.addEventListener("click", async () => {
          instance.requestPaymentMethod(async (err, event) => {
            console.log("Event Nonce: " + event.nonce);
            nonce = event.nonce;
            payload.nonce = nonce;
            payload = {
              nonce,
              type: "CreditCard",
              cart: cart.cartData,
              shipping: shippingInfo.value,
              billing: billingInfo.value,
              user: userInfo.value,
              orderId: firebaseOrderId.value,
              firebaseOrder
            };
            const data = await $fetch("/api/payment/braintree/sale", {
              method: "POST",
              body: payload
            });
            console.log("I think we just submitted a sale through Braintree, then updated the firebase order, and finally submitted an order to printify :D :D :D");
            console.log(data);
            if (data.length > 0) {
              userInfo.value.inVault = true;
              firebaseOrder.value.status = data.status;
              $router.push("/shop/orders?id=" + firebaseOrderId.value);
            }
          }), instance.on("paymentMethodRequestable", (event) => {
            submitButton.value.removeAttribute("disabled");
          }), instance.on("noPaymentMethodRequestable", (event) => {
            submitButton.value.setAttribute("disabled", true);
          }), instance.on("paymentOptionSelected", (event) => {
            console.log("Payment Option Selected: " + event);
          }), instance.on("error", (event) => {
            console.log("Instance Error: " + event);
          }), instance.on("changeActiveView", function() {
            console.log("Active View Changed");
          });
        });
      });
    };
    const validateShippingInfo = () => {
      if (shippingInfo.value.address1.length <= 0) {
        console.log("Shipping validation error!");
        return { error: "Shipping Address Cannot Be Empty" };
      }
      if (shippingInfo.value.region.length <= 0) {
        console.log("Shipping validation error!");
        return { error: "State/Region Cannot Be Empty" };
      }
    };
    const validateBillingInfo = () => {
      if (billingInfo.value.address1.length <= 0) {
        console.log("Billing validation error!");
        return { error: "Billing Address Cannot Be Empty" };
      }
    };
    const getCartTotal = () => {
      let totalPrice = 0;
      for (let i = 0; i < cart.cartData.length; i++) {
        for (let j = 0; j < cart.cartData[i].variants.length; j++) {
          totalPrice += (itemPrice(cart.cartData[i].variants[j]).itemCost + itemPrice(cart.cartData[i].variants[j]).shipCost) * cart.cartData[i].variants[j].cartQty;
        }
      }
      console.log("getCartTotal: Total price is (" + totalPrice + ")");
      console.log(totalPrice);
      return totalPrice;
    };
    const decreaseCartItemQty = (item, variant) => {
      let otherVariants = false;
      variant.cartQty--;
      item.variants[item.variants.map((x) => {
        return x.id;
      }).indexOf(variant.id)] = variant;
      if (variant.cartQty == 0) {
        variant.inCart = false;
        item.variants[item.variants.map((x) => {
          return x.id;
        }).indexOf(variant.id)] = variant;
        cart.$patch(cart.cartData[cart.cartData.map((x) => {
          return x.id;
        }).indexOf(item.id)] = item);
        cartProducts.value = cart.cartData;
        for (let j = 0; j < item.variants.length; j++) {
          if (item.variants[j].cartQty > 0) {
            otherVariants = true;
            break;
          }
        }
        if (!otherVariants) {
          cart.$patch(cart.cartData.splice(cart.cartData.map((x) => {
            return x.id;
          }).indexOf(item.id), 1));
          cartProducts.value = cart.cartData;
          if (cart.cartData.length == 0) {
            cart.$patch(cart.cartData = []);
            loaded.value = false;
          }
        }
      } else {
        cart.$patch(cart.cartData[cart.cartData.map((x) => {
          return x.id;
        }).indexOf(item.id)] = item);
        cartProducts.value = cart.cartData;
      }
      store.$patch(store.productData[store.productData.map((x) => {
        return x.id;
      }).indexOf(item.id)] = item);
    };
    function increaseCartItemQty(item, variant) {
      variant.cartQty++;
      item.variants[item.variants.map((x) => {
        return x.id;
      }).indexOf(variant.id)] = variant;
      cart.$patch(cart.cartData[cart.cartData.map((x) => {
        return x.id;
      }).indexOf(item.id)] = item);
      cartProducts.value = cart.cartData;
      const store2 = useProductDataStore();
      store2.$patch(store2.productData[store2.productData.map((x) => {
        return x.id;
      }).indexOf(item.id)] = item);
    }
    function removeVariant(item, variant) {
      let otherVariants = false;
      variant.cartQty = 0;
      variant.inCart = false;
      item.variants[item.variants.map((x) => {
        return x.id;
      }).indexOf(variant.id)] = variant;
      cart.$patch(cart.cartData[cart.cartData.map((x) => {
        return x.id;
      }).indexOf(item.id)] = item);
      cartProducts.value = cart.cartData;
      for (let j = 0; j < item.variants.length; j++) {
        if (item.variants[j].cartQty > 0) {
          otherVariants = true;
          break;
        }
      }
      if (!otherVariants) {
        cart.$patch(cart.cartData.splice(cart.cartData.map((x) => {
          return x.id;
        }).indexOf(item.id), 1));
        cartProducts.value = cart.cartData;
        if (cart.cartData.length == 0) {
          cart.$patch(cart.cartData = []);
          loaded.value = false;
        }
      }
      const store2 = useProductDataStore();
      store2.$patch(store2.productData[store2.productData.map((x) => {
        return x.id;
      }).indexOf(item.id)] = item);
    }
    const storedShippingProfiles = ref([]);
    const checkForShippingProfiles = () => {
      console.log("I'm checking for stored shipping countries to add to the storedShippingProfiles array");
      if (storedShippingProfiles.value = []) {
        try {
          if (shippingInfo.value.length > 0) {
            console.log("shippingInfo.value.country was added to storedShippingProfiles");
            storedShippingProfiles.value.push(shippingInfo.value.country);
          }
        } catch {
          console.log("shippingInfo.value was not used in storedShippingProfiles");
        }
        try {
          if (user.userData.shippingInfo.country.length > 0) {
            console.log("user.userData.shippingInfo.country was added to storedShippingProfiles");
            storedShippingProfiles.value.push(user.userData.shippingInfo.country);
          }
        } catch {
          console.log("user.userData.shippingInfo.country was not used in storedShippingProfiles");
        }
        if (storedShippingProfiles.value.length == 0) {
          storedShippingProfiles.value.push("REST_OF_THE_WORLD");
          console.log("Nothing better was found, setting shipping profile to REST_OF_THE_WORLD");
        }
      }
      return storedShippingProfiles.value;
    };
    const itemPrice = function(variant) {
      let sProfile = false;
      for (let i = 0; i < variant.shippingProfile.length; i++) {
        for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
          if (variant.shippingProfile[i].countries[j] == user.userData.shippingInfo.country) {
            sProfile = variant.shippingProfile[i];
            variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + variant.cost * 0.1 + 100);
            variant.shipCost = Math.ceil(sProfile.additional_items.cost);
            cart.$patch(variant.id, { itemCost: variant.itemCost, shipCost: variant.shipCost });
            return { itemCost: variant.itemCost, shipCost: variant.shipCost };
          }
        }
      }
      console.log("sProfile: " + sProfile);
      if (!sProfile) {
        for (let i = 0; variant.shippingProfile.length; i++) {
          for (let j = 0; variant.shippingProfile[i].countries.length; j++) {
            if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
              sProfile = variant.shippingProfile[i];
              console.log("New sProfile!");
              console.log(sProfile);
              variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + variant.cost * 0.1 + 100);
              variant.shipCost = Math.ceil(sProfile.additional_items.cost);
              cart.$patch(variant.id, { itemCost: variant.itemCost, shipCost: variant.shipCost });
              return { itemCost: variant.itemCost, shipCost: variant.shipCost };
            }
          }
        }
      }
      return { itemCost: variant.itemCost, shipCost: variant.shipCost };
    };
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShopHeader = __nuxt_component_0;
      const _component_v_container = resolveComponent("v-container");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_ShopFooter = __nuxt_component_2;
      _push(`<!--[--><div class="bg-image bg-repeat h-full" style="${ssrRenderStyle({ "background-image": "url('../img/purple-mushroom.jpg')" })}">`);
      _push(ssrRenderComponent(_component_ShopHeader, null, null, _parent));
      if (cartProducts.value != null && cartProducts.value.length > 0) {
        _push(ssrRenderComponent(_component_v_container, { class: "mt-8 md:flex" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(cartProducts.value, (item, product) => {
                _push2(ssrRenderComponent(_component_v_card, {
                  key: product,
                  class: "h-full bg-white w-3/4 <md:w-full text-wrap rounded-xl border flex shadow-xl"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(cartVariantsInItem(item), (variant) => {
                        _push3(ssrRenderComponent(_component_v_card, {
                          key: variant.id,
                          class: "d-sm-flex"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="p-10 &lt;md:pb-0 lg:w-2/3 lg:pr-4 lg:p-10 h-full align-center"${_scopeId3}><img${ssrRenderAttr("src", item.images[0].src)} lazy-src="img/black-gold-mushroom.jpg" class=""${_scopeId3}></div><div class="pt-7 w-100 &lt;md:text-center &lt;md:pb-5"${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_v_card_title, { class: "w-full" }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="text-wrap w-full text-3xl"${_scopeId4}>${ssrInterpolate(item.title)}</p>`);
                                  } else {
                                    return [
                                      createVNode("p", {
                                        style: { fontFamily: "Roboto Slab" },
                                        class: "text-wrap w-full text-3xl"
                                      }, toDisplayString(item.title), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`<p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="ml-3 text-wrap text-xl"${_scopeId3}>${ssrInterpolate(variant.title)}</p><div class="m-2"${_scopeId3}><p class="text-xs"${_scopeId3}> Each Item: <span class="font-bold"${_scopeId3}>${ssrInterpolate(unref(formatter).format(itemPrice(variant).itemCost / 100))}</span></p><p class="text-xs"${_scopeId3}> Ship Cost/Item: <span class="font-bold"${_scopeId3}>${ssrInterpolate(unref(formatter).format(itemPrice(variant).shipCost / 100))}</span></p></div><div class="flex m-3 items-center &lt;md:justify-center"${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_v_btn, {
                                icon: "",
                                size: "small",
                                onClick: ($event) => decreaseCartItemQty(item, variant)
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_v_icon, null, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`mdi-minus`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-minus")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-minus")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`<p class="text-bold mx-1 text-xl"${_scopeId3}>${ssrInterpolate(variant.cartQty)}</p>`);
                              _push4(ssrRenderComponent(_component_v_btn, {
                                icon: "",
                                size: "small",
                                onClick: ($event) => increaseCartItemQty(item, variant)
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-plus" }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, { icon: "mdi-plus" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                              _push4(ssrRenderComponent(_component_v_btn, {
                                class: "m-3 mt-0",
                                onClick: ($event) => removeVariant(item, variant)
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(` Delete `);
                                  } else {
                                    return [
                                      createTextVNode(" Delete ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div><div class="bg-surface flex-column gap-10 justify-center p-4 flex lg:w-1/3 text-center"${_scopeId3}><p class=""${_scopeId3}><span class="font-bold"${_scopeId3}>Items</span><br${_scopeId3}>${ssrInterpolate(unref(formatter).format(itemPrice(variant).itemCost * variant.cartQty / 100))}</p><p class=""${_scopeId3}><span class="font-bold"${_scopeId3}>Shipping</span><br${_scopeId3}> ${ssrInterpolate(unref(formatter).format(itemPrice(variant).shipCost * variant.cartQty / 100))}</p><p class="font-bold"${_scopeId3}> Total <br${_scopeId3}>${ssrInterpolate(unref(formatter).format((itemPrice(variant).itemCost * variant.cartQty + itemPrice(variant).shipCost * variant.cartQty) / 100))}</p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "p-10 <md:pb-0 lg:w-2/3 lg:pr-4 lg:p-10 h-full align-center" }, [
                                  createVNode("img", {
                                    src: item.images[0].src,
                                    "lazy-src": "img/black-gold-mushroom.jpg",
                                    class: ""
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "pt-7 w-100 <md:text-center <md:pb-5" }, [
                                  createVNode(_component_v_card_title, { class: "w-full" }, {
                                    default: withCtx(() => [
                                      createVNode("p", {
                                        style: { fontFamily: "Roboto Slab" },
                                        class: "text-wrap w-full text-3xl"
                                      }, toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("p", {
                                    style: { fontFamily: "Roboto Slab" },
                                    class: "ml-3 text-wrap text-xl"
                                  }, toDisplayString(variant.title), 1),
                                  createVNode("div", { class: "m-2" }, [
                                    createVNode("p", { class: "text-xs" }, [
                                      createTextVNode(" Each Item: "),
                                      createVNode("span", { class: "font-bold" }, toDisplayString(unref(formatter).format(itemPrice(variant).itemCost / 100)), 1)
                                    ]),
                                    createVNode("p", { class: "text-xs" }, [
                                      createTextVNode(" Ship Cost/Item: "),
                                      createVNode("span", { class: "font-bold" }, toDisplayString(unref(formatter).format(itemPrice(variant).shipCost / 100)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex m-3 items-center <md:justify-center" }, [
                                    createVNode(_component_v_btn, {
                                      icon: "",
                                      size: "small",
                                      onClick: ($event) => decreaseCartItemQty(item, variant)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-minus")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode("p", { class: "text-bold mx-1 text-xl" }, toDisplayString(variant.cartQty), 1),
                                    createVNode(_component_v_btn, {
                                      icon: "",
                                      size: "small",
                                      onClick: ($event) => increaseCartItemQty(item, variant)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { icon: "mdi-plus" })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  createVNode(_component_v_btn, {
                                    class: "m-3 mt-0",
                                    onClick: ($event) => removeVariant(item, variant)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Delete ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                createVNode("div", { class: "bg-surface flex-column gap-10 justify-center p-4 flex lg:w-1/3 text-center" }, [
                                  createVNode("p", { class: "" }, [
                                    createVNode("span", { class: "font-bold" }, "Items"),
                                    createVNode("br"),
                                    createTextVNode(toDisplayString(unref(formatter).format(itemPrice(variant).itemCost * variant.cartQty / 100)), 1)
                                  ]),
                                  createVNode("p", { class: "" }, [
                                    createVNode("span", { class: "font-bold" }, "Shipping"),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString(unref(formatter).format(itemPrice(variant).shipCost * variant.cartQty / 100)), 1)
                                  ]),
                                  createVNode("p", { class: "font-bold" }, [
                                    createTextVNode(" Total "),
                                    createVNode("br"),
                                    createTextVNode(toDisplayString(unref(formatter).format((itemPrice(variant).itemCost * variant.cartQty + itemPrice(variant).shipCost * variant.cartQty) / 100)), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(cartVariantsInItem(item), (variant) => {
                          return openBlock(), createBlock(_component_v_card, {
                            key: variant.id,
                            class: "d-sm-flex"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "p-10 <md:pb-0 lg:w-2/3 lg:pr-4 lg:p-10 h-full align-center" }, [
                                createVNode("img", {
                                  src: item.images[0].src,
                                  "lazy-src": "img/black-gold-mushroom.jpg",
                                  class: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "pt-7 w-100 <md:text-center <md:pb-5" }, [
                                createVNode(_component_v_card_title, { class: "w-full" }, {
                                  default: withCtx(() => [
                                    createVNode("p", {
                                      style: { fontFamily: "Roboto Slab" },
                                      class: "text-wrap w-full text-3xl"
                                    }, toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("p", {
                                  style: { fontFamily: "Roboto Slab" },
                                  class: "ml-3 text-wrap text-xl"
                                }, toDisplayString(variant.title), 1),
                                createVNode("div", { class: "m-2" }, [
                                  createVNode("p", { class: "text-xs" }, [
                                    createTextVNode(" Each Item: "),
                                    createVNode("span", { class: "font-bold" }, toDisplayString(unref(formatter).format(itemPrice(variant).itemCost / 100)), 1)
                                  ]),
                                  createVNode("p", { class: "text-xs" }, [
                                    createTextVNode(" Ship Cost/Item: "),
                                    createVNode("span", { class: "font-bold" }, toDisplayString(unref(formatter).format(itemPrice(variant).shipCost / 100)), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "flex m-3 items-center <md:justify-center" }, [
                                  createVNode(_component_v_btn, {
                                    icon: "",
                                    size: "small",
                                    onClick: ($event) => decreaseCartItemQty(item, variant)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-minus")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode("p", { class: "text-bold mx-1 text-xl" }, toDisplayString(variant.cartQty), 1),
                                  createVNode(_component_v_btn, {
                                    icon: "",
                                    size: "small",
                                    onClick: ($event) => increaseCartItemQty(item, variant)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { icon: "mdi-plus" })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                createVNode(_component_v_btn, {
                                  class: "m-3 mt-0",
                                  onClick: ($event) => removeVariant(item, variant)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Delete ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              createVNode("div", { class: "bg-surface flex-column gap-10 justify-center p-4 flex lg:w-1/3 text-center" }, [
                                createVNode("p", { class: "" }, [
                                  createVNode("span", { class: "font-bold" }, "Items"),
                                  createVNode("br"),
                                  createTextVNode(toDisplayString(unref(formatter).format(itemPrice(variant).itemCost * variant.cartQty / 100)), 1)
                                ]),
                                createVNode("p", { class: "" }, [
                                  createVNode("span", { class: "font-bold" }, "Shipping"),
                                  createVNode("br"),
                                  createTextVNode(" " + toDisplayString(unref(formatter).format(itemPrice(variant).shipCost * variant.cartQty / 100)), 1)
                                ]),
                                createVNode("p", { class: "font-bold" }, [
                                  createTextVNode(" Total "),
                                  createVNode("br"),
                                  createTextVNode(toDisplayString(unref(formatter).format((itemPrice(variant).itemCost * variant.cartQty + itemPrice(variant).shipCost * variant.cartQty) / 100)), 1)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              _push2(ssrRenderComponent(_component_v_divider, {
                vertical: "",
                class: "p-2"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_card, { class: "h-full bg-white text-wrap rounded-xl border flex shadow-xl w-1/3 <md:w-full" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_card_title, { class: "w-full pb-5 bg-surface" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="p-4 text-wrap text-center text-primary-darken-1 font-bold w-full text-3xl"${_scopeId3}> Order Information </p>`);
                        } else {
                          return [
                            createVNode("p", {
                              style: { fontFamily: "Roboto Slab" },
                              class: "p-4 text-wrap text-center text-primary-darken-1 font-bold w-full text-3xl"
                            }, " Order Information ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_container, { class: "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div${_scopeId3}><p class="text-center font-bold"${_scopeId3}> Cart Total: ${ssrInterpolate(unref(formatter).format(clientCartTotal.value / 100))}</p></div>`);
                          if (!infoSubmitted.value) {
                            _push4(`<div${_scopeId3}><div class=""${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_text_field, {
                              id: "firstName",
                              modelValue: userInfo.value.firstName,
                              "onUpdate:modelValue": ($event) => userInfo.value.firstName = $event,
                              type: "text",
                              label: "First Name",
                              placeholder: "First Name",
                              "hide-details": "",
                              "bg-color": "background",
                              class: ""
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_text_field, {
                              id: "lastName",
                              modelValue: userInfo.value.lastName,
                              "onUpdate:modelValue": ($event) => userInfo.value.lastName = $event,
                              type: "text",
                              label: "Last Name",
                              placeholder: "Last Name",
                              "hide-details": "",
                              "bg-color": "background",
                              class: ""
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_text_field, {
                              id: "email",
                              modelValue: userInfo.value.email,
                              "onUpdate:modelValue": ($event) => userInfo.value.email = $event,
                              type: "email",
                              label: "Email Address",
                              placeholder: "Email Address",
                              "hide-details": "",
                              "bg-color": "background",
                              class: ""
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_text_field, {
                              id: "phone",
                              modelValue: userInfo.value.phone,
                              "onUpdate:modelValue": ($event) => userInfo.value.phone = $event,
                              type: "tel",
                              label: "Phone Number",
                              placeholder: "Phone Number",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_text_field, {
                              id: "address1",
                              modelValue: shippingInfo.value.address1,
                              "onUpdate:modelValue": ($event) => shippingInfo.value.address1 = $event,
                              type: "text",
                              label: "Shipping Address",
                              placeholder: "Street Address or P.O. Box",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_text_field, {
                              id: "address2",
                              modelValue: shippingInfo.value.address2,
                              "onUpdate:modelValue": ($event) => shippingInfo.value.address2 = $event,
                              type: "text",
                              label: "Apt, suite, unit, ect.",
                              placeholder: "Apt, suite, unit, ect.",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_text_field, {
                              id: "city",
                              modelValue: shippingInfo.value.city,
                              "onUpdate:modelValue": ($event) => shippingInfo.value.city = $event,
                              type: "text",
                              label: "City",
                              placeholder: "City",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_text_field, {
                              id: "region",
                              modelValue: shippingInfo.value.region,
                              "onUpdate:modelValue": ($event) => shippingInfo.value.region = $event,
                              type: "text",
                              label: "State",
                              placeholder: "State",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_text_field, {
                              id: "zip",
                              modelValue: shippingInfo.value.zip,
                              "onUpdate:modelValue": ($event) => shippingInfo.value.zip = $event,
                              type: "text",
                              label: "Zip Code",
                              placeholder: "Zip Code",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_select, {
                              modelValue: shippingInfo.value.country,
                              "onUpdate:modelValue": [($event) => shippingInfo.value.country = $event, setUserCountry],
                              items: countryNames.value
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                            if (!useAsBilling.value) {
                              _push4(`<div class=""${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_v_card_title, { class: "w-full pb-5 bg-surface" }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="p-4 text-wrap text-center text-primary-darken-1 font-bold w-full text-2xl"${_scopeId4}> Billing Information </p>`);
                                  } else {
                                    return [
                                      createVNode("p", {
                                        style: { fontFamily: "Roboto Slab" },
                                        class: "p-4 text-wrap text-center text-primary-darken-1 font-bold w-full text-2xl"
                                      }, " Billing Information ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_v_text_field, {
                                id: "address1",
                                modelValue: billingInfo.value.address1,
                                "onUpdate:modelValue": ($event) => billingInfo.value.address1 = $event,
                                type: "text",
                                label: "Street Address",
                                placeholder: "Street Address or P.O. Box",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_v_text_field, {
                                id: "address2",
                                modelValue: billingInfo.value.address2,
                                "onUpdate:modelValue": ($event) => billingInfo.value.address2 = $event,
                                type: "text",
                                label: "Apt, suite, unit, ect.",
                                placeholder: "Apt, suite, unit, ect.",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_v_text_field, {
                                id: "city",
                                modelValue: billingInfo.value.city,
                                "onUpdate:modelValue": ($event) => billingInfo.value.city = $event,
                                type: "text",
                                label: "City",
                                placeholder: "City",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_v_text_field, {
                                id: "region",
                                modelValue: billingInfo.value.region,
                                "onUpdate:modelValue": ($event) => billingInfo.value.region = $event,
                                type: "text",
                                label: "State",
                                placeholder: "State",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_v_text_field, {
                                id: "zip",
                                modelValue: billingInfo.value.zip,
                                "onUpdate:modelValue": ($event) => billingInfo.value.zip = $event,
                                type: "text",
                                label: "Zip Code",
                                placeholder: "Zip Code",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_v_select, {
                                id: "country",
                                modelValue: billingInfo.value.country,
                                "onUpdate:modelValue": ($event) => billingInfo.value.country = $event,
                                items: billableCountries.value,
                                label: "Country",
                                placeholder: "Country",
                                "hide-details": "",
                                "bg-color": "background",
                                transition: "scale-transition"
                              }, null, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                          } else {
                            _push4(`<div${_scopeId3}><div id="dropin-container"${_scopeId3}></div><button id="submit-button" class="bg-primary-darken-1 fill-height align-middle w-full py-5 items-center h-full text-white"${_scopeId3}> Submit </button></div>`);
                          }
                          if (!infoSubmitted.value) {
                            _push4(`<div class="flex mx-auto justify-center flex-wrap mt-1.5rem"${_scopeId3}><div class="p-2 text-white w-4/5"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_btn, {
                              size: "large",
                              variant: "flat",
                              block: "",
                              color: "primary-darken-1",
                              class: "align-middle my-5px items-center fill-height text-white w-full",
                              onClick: ($event) => {
                                useAsBilling.value = !useAsBilling.value;
                                updateBilling();
                              }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="text-wrap text-md m-2"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_v_icon, {
                                    icon: useAsBilling.value ? "mdi-checkbox-outline" : "mdi-checkbox-blank-outline",
                                    class: "text-wrap flex flex-wrap text-wrap"
                                  }, null, _parent5, _scopeId4));
                                  _push5(` Billing Address Same as Shipping </div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "text-wrap text-md m-2" }, [
                                      createVNode(_component_v_icon, {
                                        icon: useAsBilling.value ? "mdi-checkbox-outline" : "mdi-checkbox-blank-outline",
                                        class: "text-wrap flex flex-wrap text-wrap"
                                      }, null, 8, ["icon"]),
                                      createTextVNode(" Billing Address Same as Shipping ")
                                    ])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`</div><div class="p-2 text-white w-4/5"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_btn, {
                              size: "large",
                              variant: "flat",
                              block: "",
                              color: "primary-darken-1",
                              class: "fill-height align-middle w-full my-5px items-center h-full text-white",
                              onClick: ($event) => submitShippingInfo()
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="text-wrap text-md m-2"${_scopeId4}> Submit </div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "text-wrap text-md m-2" }, " Submit ")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode("p", { class: "text-center font-bold" }, " Cart Total: " + toDisplayString(unref(formatter).format(clientCartTotal.value / 100)), 1)
                            ]),
                            !infoSubmitted.value ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode("div", { class: "" }, [
                                createVNode(_component_v_text_field, {
                                  id: "firstName",
                                  modelValue: userInfo.value.firstName,
                                  "onUpdate:modelValue": ($event) => userInfo.value.firstName = $event,
                                  type: "text",
                                  label: "First Name",
                                  placeholder: "First Name",
                                  "hide-details": "",
                                  "bg-color": "background",
                                  class: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "lastName",
                                  modelValue: userInfo.value.lastName,
                                  "onUpdate:modelValue": ($event) => userInfo.value.lastName = $event,
                                  type: "text",
                                  label: "Last Name",
                                  placeholder: "Last Name",
                                  "hide-details": "",
                                  "bg-color": "background",
                                  class: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "email",
                                  modelValue: userInfo.value.email,
                                  "onUpdate:modelValue": ($event) => userInfo.value.email = $event,
                                  type: "email",
                                  label: "Email Address",
                                  placeholder: "Email Address",
                                  "hide-details": "",
                                  "bg-color": "background",
                                  class: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "phone",
                                  modelValue: userInfo.value.phone,
                                  "onUpdate:modelValue": ($event) => userInfo.value.phone = $event,
                                  type: "tel",
                                  label: "Phone Number",
                                  placeholder: "Phone Number",
                                  "hide-details": "",
                                  "bg-color": "background"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "address1",
                                  modelValue: shippingInfo.value.address1,
                                  "onUpdate:modelValue": ($event) => shippingInfo.value.address1 = $event,
                                  type: "text",
                                  label: "Shipping Address",
                                  placeholder: "Street Address or P.O. Box",
                                  "hide-details": "",
                                  "bg-color": "background"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "address2",
                                  modelValue: shippingInfo.value.address2,
                                  "onUpdate:modelValue": ($event) => shippingInfo.value.address2 = $event,
                                  type: "text",
                                  label: "Apt, suite, unit, ect.",
                                  placeholder: "Apt, suite, unit, ect.",
                                  "hide-details": "",
                                  "bg-color": "background"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "city",
                                  modelValue: shippingInfo.value.city,
                                  "onUpdate:modelValue": ($event) => shippingInfo.value.city = $event,
                                  type: "text",
                                  label: "City",
                                  placeholder: "City",
                                  "hide-details": "",
                                  "bg-color": "background"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "region",
                                  modelValue: shippingInfo.value.region,
                                  "onUpdate:modelValue": ($event) => shippingInfo.value.region = $event,
                                  type: "text",
                                  label: "State",
                                  placeholder: "State",
                                  "hide-details": "",
                                  "bg-color": "background"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "zip",
                                  modelValue: shippingInfo.value.zip,
                                  "onUpdate:modelValue": ($event) => shippingInfo.value.zip = $event,
                                  type: "text",
                                  label: "Zip Code",
                                  placeholder: "Zip Code",
                                  "hide-details": "",
                                  "bg-color": "background"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_select, {
                                  modelValue: shippingInfo.value.country,
                                  "onUpdate:modelValue": [($event) => shippingInfo.value.country = $event, setUserCountry],
                                  items: countryNames.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ]),
                              !useAsBilling.value ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ""
                              }, [
                                createVNode(_component_v_card_title, { class: "w-full pb-5 bg-surface" }, {
                                  default: withCtx(() => [
                                    createVNode("p", {
                                      style: { fontFamily: "Roboto Slab" },
                                      class: "p-4 text-wrap text-center text-primary-darken-1 font-bold w-full text-2xl"
                                    }, " Billing Information ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  id: "address1",
                                  modelValue: billingInfo.value.address1,
                                  "onUpdate:modelValue": ($event) => billingInfo.value.address1 = $event,
                                  type: "text",
                                  label: "Street Address",
                                  placeholder: "Street Address or P.O. Box",
                                  "hide-details": "",
                                  "bg-color": "background"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "address2",
                                  modelValue: billingInfo.value.address2,
                                  "onUpdate:modelValue": ($event) => billingInfo.value.address2 = $event,
                                  type: "text",
                                  label: "Apt, suite, unit, ect.",
                                  placeholder: "Apt, suite, unit, ect.",
                                  "hide-details": "",
                                  "bg-color": "background"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "city",
                                  modelValue: billingInfo.value.city,
                                  "onUpdate:modelValue": ($event) => billingInfo.value.city = $event,
                                  type: "text",
                                  label: "City",
                                  placeholder: "City",
                                  "hide-details": "",
                                  "bg-color": "background"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "region",
                                  modelValue: billingInfo.value.region,
                                  "onUpdate:modelValue": ($event) => billingInfo.value.region = $event,
                                  type: "text",
                                  label: "State",
                                  placeholder: "State",
                                  "hide-details": "",
                                  "bg-color": "background"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  id: "zip",
                                  modelValue: billingInfo.value.zip,
                                  "onUpdate:modelValue": ($event) => billingInfo.value.zip = $event,
                                  type: "text",
                                  label: "Zip Code",
                                  placeholder: "Zip Code",
                                  "hide-details": "",
                                  "bg-color": "background"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_select, {
                                  id: "country",
                                  modelValue: billingInfo.value.country,
                                  "onUpdate:modelValue": ($event) => billingInfo.value.country = $event,
                                  items: billableCountries.value,
                                  label: "Country",
                                  placeholder: "Country",
                                  "hide-details": "",
                                  "bg-color": "background",
                                  transition: "scale-transition"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ])) : createCommentVNode("", true)
                            ])) : (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("div", { id: "dropin-container" }),
                              createVNode("button", {
                                id: "submit-button",
                                ref_key: "submitButton",
                                ref: submitButton,
                                class: "bg-primary-darken-1 fill-height align-middle w-full py-5 items-center h-full text-white"
                              }, " Submit ", 512)
                            ])),
                            !infoSubmitted.value ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "flex mx-auto justify-center flex-wrap mt-1.5rem"
                            }, [
                              createVNode("div", { class: "p-2 text-white w-4/5" }, [
                                createVNode(_component_v_btn, {
                                  size: "large",
                                  variant: "flat",
                                  block: "",
                                  color: "primary-darken-1",
                                  class: "align-middle my-5px items-center fill-height text-white w-full",
                                  onClick: ($event) => {
                                    useAsBilling.value = !useAsBilling.value;
                                    updateBilling();
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-wrap text-md m-2" }, [
                                      createVNode(_component_v_icon, {
                                        icon: useAsBilling.value ? "mdi-checkbox-outline" : "mdi-checkbox-blank-outline",
                                        class: "text-wrap flex flex-wrap text-wrap"
                                      }, null, 8, ["icon"]),
                                      createTextVNode(" Billing Address Same as Shipping ")
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "p-2 text-white w-4/5" }, [
                                createVNode(_component_v_btn, {
                                  size: "large",
                                  variant: "flat",
                                  block: "",
                                  color: "primary-darken-1",
                                  class: "fill-height align-middle w-full my-5px items-center h-full text-white",
                                  onClick: ($event) => submitShippingInfo()
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-wrap text-md m-2" }, " Submit ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_card_title, { class: "w-full pb-5 bg-surface" }, {
                        default: withCtx(() => [
                          createVNode("p", {
                            style: { fontFamily: "Roboto Slab" },
                            class: "p-4 text-wrap text-center text-primary-darken-1 font-bold w-full text-3xl"
                          }, " Order Information ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_container, { class: "" }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("p", { class: "text-center font-bold" }, " Cart Total: " + toDisplayString(unref(formatter).format(clientCartTotal.value / 100)), 1)
                          ]),
                          !infoSubmitted.value ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("div", { class: "" }, [
                              createVNode(_component_v_text_field, {
                                id: "firstName",
                                modelValue: userInfo.value.firstName,
                                "onUpdate:modelValue": ($event) => userInfo.value.firstName = $event,
                                type: "text",
                                label: "First Name",
                                placeholder: "First Name",
                                "hide-details": "",
                                "bg-color": "background",
                                class: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "lastName",
                                modelValue: userInfo.value.lastName,
                                "onUpdate:modelValue": ($event) => userInfo.value.lastName = $event,
                                type: "text",
                                label: "Last Name",
                                placeholder: "Last Name",
                                "hide-details": "",
                                "bg-color": "background",
                                class: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "email",
                                modelValue: userInfo.value.email,
                                "onUpdate:modelValue": ($event) => userInfo.value.email = $event,
                                type: "email",
                                label: "Email Address",
                                placeholder: "Email Address",
                                "hide-details": "",
                                "bg-color": "background",
                                class: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "phone",
                                modelValue: userInfo.value.phone,
                                "onUpdate:modelValue": ($event) => userInfo.value.phone = $event,
                                type: "tel",
                                label: "Phone Number",
                                placeholder: "Phone Number",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "address1",
                                modelValue: shippingInfo.value.address1,
                                "onUpdate:modelValue": ($event) => shippingInfo.value.address1 = $event,
                                type: "text",
                                label: "Shipping Address",
                                placeholder: "Street Address or P.O. Box",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "address2",
                                modelValue: shippingInfo.value.address2,
                                "onUpdate:modelValue": ($event) => shippingInfo.value.address2 = $event,
                                type: "text",
                                label: "Apt, suite, unit, ect.",
                                placeholder: "Apt, suite, unit, ect.",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "city",
                                modelValue: shippingInfo.value.city,
                                "onUpdate:modelValue": ($event) => shippingInfo.value.city = $event,
                                type: "text",
                                label: "City",
                                placeholder: "City",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "region",
                                modelValue: shippingInfo.value.region,
                                "onUpdate:modelValue": ($event) => shippingInfo.value.region = $event,
                                type: "text",
                                label: "State",
                                placeholder: "State",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "zip",
                                modelValue: shippingInfo.value.zip,
                                "onUpdate:modelValue": ($event) => shippingInfo.value.zip = $event,
                                type: "text",
                                label: "Zip Code",
                                placeholder: "Zip Code",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_select, {
                                modelValue: shippingInfo.value.country,
                                "onUpdate:modelValue": [($event) => shippingInfo.value.country = $event, setUserCountry],
                                items: countryNames.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            !useAsBilling.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ""
                            }, [
                              createVNode(_component_v_card_title, { class: "w-full pb-5 bg-surface" }, {
                                default: withCtx(() => [
                                  createVNode("p", {
                                    style: { fontFamily: "Roboto Slab" },
                                    class: "p-4 text-wrap text-center text-primary-darken-1 font-bold w-full text-2xl"
                                  }, " Billing Information ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                id: "address1",
                                modelValue: billingInfo.value.address1,
                                "onUpdate:modelValue": ($event) => billingInfo.value.address1 = $event,
                                type: "text",
                                label: "Street Address",
                                placeholder: "Street Address or P.O. Box",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "address2",
                                modelValue: billingInfo.value.address2,
                                "onUpdate:modelValue": ($event) => billingInfo.value.address2 = $event,
                                type: "text",
                                label: "Apt, suite, unit, ect.",
                                placeholder: "Apt, suite, unit, ect.",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "city",
                                modelValue: billingInfo.value.city,
                                "onUpdate:modelValue": ($event) => billingInfo.value.city = $event,
                                type: "text",
                                label: "City",
                                placeholder: "City",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "region",
                                modelValue: billingInfo.value.region,
                                "onUpdate:modelValue": ($event) => billingInfo.value.region = $event,
                                type: "text",
                                label: "State",
                                placeholder: "State",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                id: "zip",
                                modelValue: billingInfo.value.zip,
                                "onUpdate:modelValue": ($event) => billingInfo.value.zip = $event,
                                type: "text",
                                label: "Zip Code",
                                placeholder: "Zip Code",
                                "hide-details": "",
                                "bg-color": "background"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_select, {
                                id: "country",
                                modelValue: billingInfo.value.country,
                                "onUpdate:modelValue": ($event) => billingInfo.value.country = $event,
                                items: billableCountries.value,
                                label: "Country",
                                placeholder: "Country",
                                "hide-details": "",
                                "bg-color": "background",
                                transition: "scale-transition"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ])) : createCommentVNode("", true)
                          ])) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("div", { id: "dropin-container" }),
                            createVNode("button", {
                              id: "submit-button",
                              ref_key: "submitButton",
                              ref: submitButton,
                              class: "bg-primary-darken-1 fill-height align-middle w-full py-5 items-center h-full text-white"
                            }, " Submit ", 512)
                          ])),
                          !infoSubmitted.value ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "flex mx-auto justify-center flex-wrap mt-1.5rem"
                          }, [
                            createVNode("div", { class: "p-2 text-white w-4/5" }, [
                              createVNode(_component_v_btn, {
                                size: "large",
                                variant: "flat",
                                block: "",
                                color: "primary-darken-1",
                                class: "align-middle my-5px items-center fill-height text-white w-full",
                                onClick: ($event) => {
                                  useAsBilling.value = !useAsBilling.value;
                                  updateBilling();
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-wrap text-md m-2" }, [
                                    createVNode(_component_v_icon, {
                                      icon: useAsBilling.value ? "mdi-checkbox-outline" : "mdi-checkbox-blank-outline",
                                      class: "text-wrap flex flex-wrap text-wrap"
                                    }, null, 8, ["icon"]),
                                    createTextVNode(" Billing Address Same as Shipping ")
                                  ])
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "p-2 text-white w-4/5" }, [
                              createVNode(_component_v_btn, {
                                size: "large",
                                variant: "flat",
                                block: "",
                                color: "primary-darken-1",
                                class: "fill-height align-middle w-full my-5px items-center h-full text-white",
                                onClick: ($event) => submitShippingInfo()
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-wrap text-md m-2" }, " Submit ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(cartProducts.value, (item, product) => {
                  return openBlock(), createBlock(_component_v_card, {
                    key: product,
                    class: "h-full bg-white w-3/4 <md:w-full text-wrap rounded-xl border flex shadow-xl"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(cartVariantsInItem(item), (variant) => {
                        return openBlock(), createBlock(_component_v_card, {
                          key: variant.id,
                          class: "d-sm-flex"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "p-10 <md:pb-0 lg:w-2/3 lg:pr-4 lg:p-10 h-full align-center" }, [
                              createVNode("img", {
                                src: item.images[0].src,
                                "lazy-src": "img/black-gold-mushroom.jpg",
                                class: ""
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", { class: "pt-7 w-100 <md:text-center <md:pb-5" }, [
                              createVNode(_component_v_card_title, { class: "w-full" }, {
                                default: withCtx(() => [
                                  createVNode("p", {
                                    style: { fontFamily: "Roboto Slab" },
                                    class: "text-wrap w-full text-3xl"
                                  }, toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("p", {
                                style: { fontFamily: "Roboto Slab" },
                                class: "ml-3 text-wrap text-xl"
                              }, toDisplayString(variant.title), 1),
                              createVNode("div", { class: "m-2" }, [
                                createVNode("p", { class: "text-xs" }, [
                                  createTextVNode(" Each Item: "),
                                  createVNode("span", { class: "font-bold" }, toDisplayString(unref(formatter).format(itemPrice(variant).itemCost / 100)), 1)
                                ]),
                                createVNode("p", { class: "text-xs" }, [
                                  createTextVNode(" Ship Cost/Item: "),
                                  createVNode("span", { class: "font-bold" }, toDisplayString(unref(formatter).format(itemPrice(variant).shipCost / 100)), 1)
                                ])
                              ]),
                              createVNode("div", { class: "flex m-3 items-center <md:justify-center" }, [
                                createVNode(_component_v_btn, {
                                  icon: "",
                                  size: "small",
                                  onClick: ($event) => decreaseCartItemQty(item, variant)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-minus")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode("p", { class: "text-bold mx-1 text-xl" }, toDisplayString(variant.cartQty), 1),
                                createVNode(_component_v_btn, {
                                  icon: "",
                                  size: "small",
                                  onClick: ($event) => increaseCartItemQty(item, variant)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { icon: "mdi-plus" })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              createVNode(_component_v_btn, {
                                class: "m-3 mt-0",
                                onClick: ($event) => removeVariant(item, variant)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Delete ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            createVNode("div", { class: "bg-surface flex-column gap-10 justify-center p-4 flex lg:w-1/3 text-center" }, [
                              createVNode("p", { class: "" }, [
                                createVNode("span", { class: "font-bold" }, "Items"),
                                createVNode("br"),
                                createTextVNode(toDisplayString(unref(formatter).format(itemPrice(variant).itemCost * variant.cartQty / 100)), 1)
                              ]),
                              createVNode("p", { class: "" }, [
                                createVNode("span", { class: "font-bold" }, "Shipping"),
                                createVNode("br"),
                                createTextVNode(" " + toDisplayString(unref(formatter).format(itemPrice(variant).shipCost * variant.cartQty / 100)), 1)
                              ]),
                              createVNode("p", { class: "font-bold" }, [
                                createTextVNode(" Total "),
                                createVNode("br"),
                                createTextVNode(toDisplayString(unref(formatter).format((itemPrice(variant).itemCost * variant.cartQty + itemPrice(variant).shipCost * variant.cartQty) / 100)), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024);
                }), 128)),
                createVNode(_component_v_divider, {
                  vertical: "",
                  class: "p-2"
                }),
                createVNode(_component_v_card, { class: "h-full bg-white text-wrap rounded-xl border flex shadow-xl w-1/3 <md:w-full" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_title, { class: "w-full pb-5 bg-surface" }, {
                      default: withCtx(() => [
                        createVNode("p", {
                          style: { fontFamily: "Roboto Slab" },
                          class: "p-4 text-wrap text-center text-primary-darken-1 font-bold w-full text-3xl"
                        }, " Order Information ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_container, { class: "" }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("p", { class: "text-center font-bold" }, " Cart Total: " + toDisplayString(unref(formatter).format(clientCartTotal.value / 100)), 1)
                        ]),
                        !infoSubmitted.value ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("div", { class: "" }, [
                            createVNode(_component_v_text_field, {
                              id: "firstName",
                              modelValue: userInfo.value.firstName,
                              "onUpdate:modelValue": ($event) => userInfo.value.firstName = $event,
                              type: "text",
                              label: "First Name",
                              placeholder: "First Name",
                              "hide-details": "",
                              "bg-color": "background",
                              class: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "lastName",
                              modelValue: userInfo.value.lastName,
                              "onUpdate:modelValue": ($event) => userInfo.value.lastName = $event,
                              type: "text",
                              label: "Last Name",
                              placeholder: "Last Name",
                              "hide-details": "",
                              "bg-color": "background",
                              class: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "email",
                              modelValue: userInfo.value.email,
                              "onUpdate:modelValue": ($event) => userInfo.value.email = $event,
                              type: "email",
                              label: "Email Address",
                              placeholder: "Email Address",
                              "hide-details": "",
                              "bg-color": "background",
                              class: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "phone",
                              modelValue: userInfo.value.phone,
                              "onUpdate:modelValue": ($event) => userInfo.value.phone = $event,
                              type: "tel",
                              label: "Phone Number",
                              placeholder: "Phone Number",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "address1",
                              modelValue: shippingInfo.value.address1,
                              "onUpdate:modelValue": ($event) => shippingInfo.value.address1 = $event,
                              type: "text",
                              label: "Shipping Address",
                              placeholder: "Street Address or P.O. Box",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "address2",
                              modelValue: shippingInfo.value.address2,
                              "onUpdate:modelValue": ($event) => shippingInfo.value.address2 = $event,
                              type: "text",
                              label: "Apt, suite, unit, ect.",
                              placeholder: "Apt, suite, unit, ect.",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "city",
                              modelValue: shippingInfo.value.city,
                              "onUpdate:modelValue": ($event) => shippingInfo.value.city = $event,
                              type: "text",
                              label: "City",
                              placeholder: "City",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "region",
                              modelValue: shippingInfo.value.region,
                              "onUpdate:modelValue": ($event) => shippingInfo.value.region = $event,
                              type: "text",
                              label: "State",
                              placeholder: "State",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "zip",
                              modelValue: shippingInfo.value.zip,
                              "onUpdate:modelValue": ($event) => shippingInfo.value.zip = $event,
                              type: "text",
                              label: "Zip Code",
                              placeholder: "Zip Code",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_select, {
                              modelValue: shippingInfo.value.country,
                              "onUpdate:modelValue": [($event) => shippingInfo.value.country = $event, setUserCountry],
                              items: countryNames.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          !useAsBilling.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ""
                          }, [
                            createVNode(_component_v_card_title, { class: "w-full pb-5 bg-surface" }, {
                              default: withCtx(() => [
                                createVNode("p", {
                                  style: { fontFamily: "Roboto Slab" },
                                  class: "p-4 text-wrap text-center text-primary-darken-1 font-bold w-full text-2xl"
                                }, " Billing Information ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              id: "address1",
                              modelValue: billingInfo.value.address1,
                              "onUpdate:modelValue": ($event) => billingInfo.value.address1 = $event,
                              type: "text",
                              label: "Street Address",
                              placeholder: "Street Address or P.O. Box",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "address2",
                              modelValue: billingInfo.value.address2,
                              "onUpdate:modelValue": ($event) => billingInfo.value.address2 = $event,
                              type: "text",
                              label: "Apt, suite, unit, ect.",
                              placeholder: "Apt, suite, unit, ect.",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "city",
                              modelValue: billingInfo.value.city,
                              "onUpdate:modelValue": ($event) => billingInfo.value.city = $event,
                              type: "text",
                              label: "City",
                              placeholder: "City",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "region",
                              modelValue: billingInfo.value.region,
                              "onUpdate:modelValue": ($event) => billingInfo.value.region = $event,
                              type: "text",
                              label: "State",
                              placeholder: "State",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              id: "zip",
                              modelValue: billingInfo.value.zip,
                              "onUpdate:modelValue": ($event) => billingInfo.value.zip = $event,
                              type: "text",
                              label: "Zip Code",
                              placeholder: "Zip Code",
                              "hide-details": "",
                              "bg-color": "background"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_select, {
                              id: "country",
                              modelValue: billingInfo.value.country,
                              "onUpdate:modelValue": ($event) => billingInfo.value.country = $event,
                              items: billableCountries.value,
                              label: "Country",
                              placeholder: "Country",
                              "hide-details": "",
                              "bg-color": "background",
                              transition: "scale-transition"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ])) : createCommentVNode("", true)
                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("div", { id: "dropin-container" }),
                          createVNode("button", {
                            id: "submit-button",
                            ref_key: "submitButton",
                            ref: submitButton,
                            class: "bg-primary-darken-1 fill-height align-middle w-full py-5 items-center h-full text-white"
                          }, " Submit ", 512)
                        ])),
                        !infoSubmitted.value ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "flex mx-auto justify-center flex-wrap mt-1.5rem"
                        }, [
                          createVNode("div", { class: "p-2 text-white w-4/5" }, [
                            createVNode(_component_v_btn, {
                              size: "large",
                              variant: "flat",
                              block: "",
                              color: "primary-darken-1",
                              class: "align-middle my-5px items-center fill-height text-white w-full",
                              onClick: ($event) => {
                                useAsBilling.value = !useAsBilling.value;
                                updateBilling();
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-wrap text-md m-2" }, [
                                  createVNode(_component_v_icon, {
                                    icon: useAsBilling.value ? "mdi-checkbox-outline" : "mdi-checkbox-blank-outline",
                                    class: "text-wrap flex flex-wrap text-wrap"
                                  }, null, 8, ["icon"]),
                                  createTextVNode(" Billing Address Same as Shipping ")
                                ])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "p-2 text-white w-4/5" }, [
                            createVNode(_component_v_btn, {
                              size: "large",
                              variant: "flat",
                              block: "",
                              color: "primary-darken-1",
                              class: "fill-height align-middle w-full my-5px items-center h-full text-white",
                              onClick: ($event) => submitShippingInfo()
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-wrap text-md m-2" }, " Submit ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_v_container, { class: "flex text-center align-center items-center justify-center" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_card, {
                color: "surface",
                class: "w-1/2 <lg:w-3/4 mt-10 h-2/3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_container, { class: "fill-height text-center align-center justify-center" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class=""${_scopeId3}><h3 class="font-bold lg:text-5xl text-4xl my-5" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "0px 0px 3px purple" })}"${_scopeId3}> Your cart is empty. </h3>`);
                          _push4(ssrRenderComponent(_component_v_btn, {
                            size: "large",
                            variant: "flat",
                            color: "primary-darken-1",
                            class: "fill-height m-10"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  to: "/shop",
                                  class: "lg:text-2xl text-xl text-wrap m-5"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Visit the <b${_scopeId5}>shop</b> page.<br${_scopeId5}>Find something you love. `);
                                    } else {
                                      return [
                                        createTextVNode(" Visit the "),
                                        createVNode("b", null, "shop"),
                                        createTextVNode(" page."),
                                        createVNode("br"),
                                        createTextVNode("Find something you love. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_NuxtLink, {
                                    to: "/shop",
                                    class: "lg:text-2xl text-xl text-wrap m-5"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Visit the "),
                                      createVNode("b", null, "shop"),
                                      createTextVNode(" page."),
                                      createVNode("br"),
                                      createTextVNode("Find something you love. ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "" }, [
                              createVNode("h3", {
                                class: "font-bold lg:text-5xl text-4xl my-5",
                                style: { fontFamily: "Roboto Slab", textShadow: "0px 0px 3px purple" }
                              }, " Your cart is empty. "),
                              createVNode(_component_v_btn, {
                                size: "large",
                                variant: "flat",
                                color: "primary-darken-1",
                                class: "fill-height m-10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    to: "/shop",
                                    class: "lg:text-2xl text-xl text-wrap m-5"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Visit the "),
                                      createVNode("b", null, "shop"),
                                      createTextVNode(" page."),
                                      createVNode("br"),
                                      createTextVNode("Find something you love. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_container, { class: "fill-height text-center align-center justify-center" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "" }, [
                            createVNode("h3", {
                              class: "font-bold lg:text-5xl text-4xl my-5",
                              style: { fontFamily: "Roboto Slab", textShadow: "0px 0px 3px purple" }
                            }, " Your cart is empty. "),
                            createVNode(_component_v_btn, {
                              size: "large",
                              variant: "flat",
                              color: "primary-darken-1",
                              class: "fill-height m-10"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: "/shop",
                                  class: "lg:text-2xl text-xl text-wrap m-5"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Visit the "),
                                    createVNode("b", null, "shop"),
                                    createTextVNode(" page."),
                                    createVNode("br"),
                                    createTextVNode("Find something you love. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_card, {
                  color: "surface",
                  class: "w-1/2 <lg:w-3/4 mt-10 h-2/3"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_container, { class: "fill-height text-center align-center justify-center" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "" }, [
                          createVNode("h3", {
                            class: "font-bold lg:text-5xl text-4xl my-5",
                            style: { fontFamily: "Roboto Slab", textShadow: "0px 0px 3px purple" }
                          }, " Your cart is empty. "),
                          createVNode(_component_v_btn, {
                            size: "large",
                            variant: "flat",
                            color: "primary-darken-1",
                            class: "fill-height m-10"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/shop",
                                class: "lg:text-2xl text-xl text-wrap m-5"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Visit the "),
                                  createVNode("b", null, "shop"),
                                  createTextVNode(" page."),
                                  createVNode("br"),
                                  createTextVNode("Find something you love. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ShopFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkout.e47fe1f2.mjs.map
