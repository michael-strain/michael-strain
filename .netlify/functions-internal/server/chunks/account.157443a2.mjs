import { _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, resolveComponent, unref, withCtx, createVNode, createTextVNode, isRef, useSSRContext, mergeProps } from 'vue';
import { u as useFirebaseUser } from './useStates.13516514.mjs';
import { s as signOutUser } from './firebase.9a3b2c60.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { getAuth } from 'firebase/auth';
import { u as useUserDataStore } from './userData.be862cd2.mjs';
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
import 'firebase/app';
import './index.a7d16411.mjs';

const _imports_0 = "" + globalThis.__publicAssetsURL("img/MLogo.png");
const _sfc_main$1 = {
  __name: "PreviousOrder",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow" }, _attrs))}><div class="orderHistRow"><img class="orderHistImg"${ssrRenderAttr("src", _imports_0)}><div class="text-left"><p class="text-left font-bold"> Order ID: BGD854N56 </p><p class="text-left"> Date Ordered: 05/08/2023 </p><p>Delivered: 05/12/2023</p><p class="text-left"> Tracking Number: MNBV254MK45 </p><button class="underlineAnimation"> Additional Information </button>`);
      if (show.value) {
        _push(`<div><br><p>Shipping Address: 258 First Street, City, State, 25852</p><br><div class=""><p class="font-bold"> Item Title </p><div class="flex flex-wrap gap-x-1.5rem"><p>Item Cost: $15</p><p>Shipping: $5</p><p>Total: $20.00</p></div></div><br><div><p class="font-bold"> Item Title </p><div class="flex flex-wrap gap-x-1.5rem"><p>Item Cost: $15</p><p>Shipping: $5</p><p>Total: $20.00</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PreviousOrder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = {
  components: { PreviousOrder: _sfc_main$1 },
  data() {
    return {
      peelog: false,
      testdialog: false,
      dialog: false
    };
  },
  methods: {
    redirectMe() {
      this.$router.push("/login");
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "account",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useUserDataStore();
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
        if (country.name == userCountry.value) {
          const countryCode = country.code;
          user.userData.shippingInfo.country = countryCode;
          console.log("User Info Set.");
          console.log("Country Name: " + userCountry.value);
          console.log("Country Code: " + user.userData.shippingInfo.country);
          break;
        }
      }
    };
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser;
    const loadAdminLink = ref(false);
    ref();
    if (auth.currentUser !== null) {
      const displayName = auth.currentUser.displayName;
      const email = auth.currentUser.email;
      const emailVerified = auth.currentUser.emailVerified;
      const photoURL = auth.currentUser.photoURL;
      const isAnonymous = auth.currentUser.isAnonymous;
      const uid = auth.currentUser.uid;
      auth.currentUser.providerData;
      user.$patch(
        {
          userData: {
            userInfo: {
              displayName,
              email,
              emailVerified,
              photoURL,
              isAnonymous,
              uid
            }
          }
        }
      );
      if (auth.currentUser.uid == "TkEKGIw1RNT8DfNFyK88eQtJBwl1" || auth.currentUser.uid == "MluMazy3zhVrub2QWoJDy4dJFvn2") {
        loadAdminLink.value = "true";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_select = resolveComponent("v-select");
      const _component_AFooter = resolveComponent("AFooter");
      _push(`<!--[--><div class="bgImg h-100"><div class="bgImgCont"><div class="content">`);
      if (unref(auth).currentUser || unref(firebaseUser)) {
        _push(`<div><section><h2 class="sectionTitle"> Account Information </h2><div class="information shadow w-100"><p> Name: Name Placeholder </p><p>Email: mymessage@email.com</p><p>Phone Number: 258-8520-8520</p><p>Shipping Address: 258 First Street, City, State, 25852</p><p>Billing Address: 654 Second Street, City, State, 74125</p><div class="btnRow">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="plainBtn"${_scopeId}> Edit Account </button>`);
            } else {
              return [
                createVNode("button", { class: "plainBtn" }, " Edit Account ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="plainBtn"> Sign Out </button>`);
        _push(ssrRenderComponent(_component_v_dialog, {
          modelValue: _ctx.testdialog,
          "onUpdate:modelValue": ($event) => _ctx.testdialog = $event
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="dialogContain"${_scopeId}><div class="containTitle"${_scopeId}> A Dialog Pop Up </div><div class=""${_scopeId}><p${_scopeId}> Are you sure you would like to sign out of your account? </p></div><div class="btnRow"${_scopeId}><button class="plainBtn"${_scopeId}> No, Stay Logged In. </button><button class="plainBtn"${_scopeId}> Yes, Log Out. </button></div></div>`);
            } else {
              return [
                createVNode("div", { class: "dialogContain" }, [
                  createVNode("div", { class: "containTitle" }, " A Dialog Pop Up "),
                  createVNode("div", { class: "" }, [
                    createVNode("p", null, " Are you sure you would like to sign out of your account? ")
                  ]),
                  createVNode("div", { class: "btnRow" }, [
                    createVNode("button", {
                      class: "plainBtn",
                      onClick: ($event) => _ctx.testdialog = false
                    }, " No, Stay Logged In. ", 8, ["onClick"]),
                    createVNode("button", {
                      class: "plainBtn",
                      onClick: unref(signOutUser)
                    }, " Yes, Log Out. ", 8, ["onClick"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></section><section><h2 class="sectionTitle"> Previous Orders </h2><div class="information w-100"><p>There is no previous order history to report. Let&#39;s change that.</p><div class="btnRow"><button class="plainBtn"> Go to Shop </button></div>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`</div></section><div class="flex justify-center flex-wrap"><div class="p-2 text-white elevation-10 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop/orders" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_btn, {
                variant: "text",
                class: "w-full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Go to Orders `);
                  } else {
                    return [
                      createTextVNode(" Go to Orders ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_btn, {
                  variant: "text",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Go to Orders ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_v_select, {
          modelValue: unref(userCountry),
          "onUpdate:modelValue": [($event) => isRef(userCountry) ? userCountry.value = $event : null, setUserCountry],
          items: unref(countryNames)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><button class="plainContainer"> Redirect Me </button></div>`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_AFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=account.157443a2.mjs.map
