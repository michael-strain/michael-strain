import { a as useRouter$1, e as useRoute, _ as __nuxt_component_0$2 } from './server.mjs';
import { s as signOutUser } from './firebase.9a3b2c60.mjs';
import { ref, computed, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, openBlock, createBlock, createCommentVNode, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { u as useCartDataStore } from './cartData.947fcc28.mjs';
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
import 'firebase/auth';
import './index.a7d16411.mjs';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const signOut = async () => {
      await signOutUser();
    };
    const noHeaderPadding = ref(["/", "/contact"]);
    const router = useRouter$1();
    const moveToCheckout = ref(() => router.push("/shop/checkout"));
    const theme = ref("myCustomLightTheme");
    const themeIcon = ref("mdi-weather-sunny");
    ref("");
    const dialog = ref(false);
    const dialogText = ref("");
    const drawer = ref(null);
    const cartProducts = ref([]);
    const loaded = ref(false);
    const cart = useCartDataStore();
    const user = useUserDataStore();
    const hover = ref(false);
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    const pageTitle = computed(() => useRoute().path);
    function decreaseCartItemQty(item, variant) {
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
    }
    function increaseCartItemQty(item, variant) {
      variant.cartQty++;
      item.variants[item.variants.map((x) => {
        return x.id;
      }).indexOf(variant.id)] = variant;
      cart.$patch(cart.cartData[cart.cartData.map((x) => {
        return x.id;
      }).indexOf(item.id)] = item);
      cartProducts.value = cart.cartData;
    }
    function cartClick() {
      if (cart.cartData.length > 0) {
        cartProducts.value = cart.cartData;
        loaded.value = true;
      } else {
        loaded.value = false;
      }
      drawer.value = !drawer.value;
    }
    function profileClick() {
      router.push("/account");
    }
    function themeClick() {
      if (theme.value === "myCustomLightTheme") {
        theme.value = "myCustomDarkTheme";
        themeIcon.value = "mdi-weather-night";
      } else {
        theme.value = "myCustomLightTheme";
        themeIcon.value = "mdi-weather-sunny";
      }
      let h1 = document.getElementsByTagName("h1");
      for (let i = 0; i < h1.length; i++) {
        if (h1[i].className.includes("grayscale")) {
          h1[i].className = h1[i].className.replace(" grayscale", "");
        } else {
          h1[i].className += " grayscale";
        }
      }
    }
    function searchClick() {
      console.log("I have no idea how to integrate search functionality into Nuxt yet.");
      dialog.value = true;
      dialogText.value = "Hello.  I don't know how to search yet.  Sorry";
    }
    const variantsInCart = function(item) {
      let cartVariants = [];
      for (let i = 0; i < item.length; i++) {
        if (item[i].inCart) {
          cartVariants.push(item[i]);
        }
      }
      return cartVariants;
    };
    const itemPrice = function(variant) {
      let sProfile = false;
      for (let i = 0; i < variant.shippingProfile.length; i++) {
        for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
          if (variant.shippingProfile[i].countries[j] == user.userData.shippingInfo.country) {
            sProfile = variant.shippingProfile[i];
            variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + variant.cost * 0.1 + 100);
            cart.$patch(variant.id, { itemCost: variant.itemCost });
            return variant.itemCost;
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
              cart.$patch(variant.id, { itemCost: variant.itemCost });
              return variant.itemCost;
            }
          }
        }
      }
      return variant.itemCost;
    };
    const itemTotal = ref(computed(() => {
      let total = 0;
      for (let i = 0; i < cartProducts.value.length; i++) {
        for (let j = 0; j < cartProducts.value[i].variants.length; j++) {
          total += itemPrice(cartProducts.value[i].variants[j]) * cartProducts.value[i].variants[j].cartQty;
        }
      }
      total = Math.ceil(total);
      return total;
    }));
    const shipTotal = ref(computed(() => {
      let total = 0;
      for (let i = 0; i < cartProducts.value.length; i++) {
        for (let j = 0; j < cartProducts.value[i].variants.length; j++) {
          if (cartProducts.value[i].variants[j].inCart) {
            total += itemShippingPrice(cartProducts.value[i].variants[j]) * cartProducts.value[i].variants[j].cartQty;
          }
        }
      }
      return total;
    }));
    const itemShippingPrice = function(variant) {
      if (variant.shipCost) {
        return variant.shipCost;
      }
      let sProfile = false;
      for (let i = 0; i < variant.shippingProfile.length; i++) {
        for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
          if (variant.shippingProfile[i].countries[j] == user.userData.shippingInfo.country) {
            sProfile = variant.shippingProfile[i];
            variant.shipCost = sProfile.additional_items.cost;
            return variant.shipCost;
          }
        }
      }
      if (!sProfile) {
        for (let i = 0; variant.shippingProfile.length; i++) {
          for (let j = 0; variant.shippingProfile[i].countries.length; j++) {
            if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
              sProfile = variant.shippingProfile[i];
              variant.shipCost = sProfile.additional_items.cost;
              return variant.shipCost;
            }
          }
        }
      }
      return variant.shipCost > 200 ? variant.shipCost : 1e3;
    };
    const cartTotal = ref(computed(() => {
      return itemTotal.value + shipTotal.value;
    }));
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
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_main = resolveComponent("v-main");
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_app, mergeProps({
        theme: theme.value,
        class: "pt-0 mt-0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_dialog, {
              modelValue: dialog.value,
              "onUpdate:modelValue": ($event) => dialog.value = $event,
              width: "500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_title, { class: "text-h5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Missing Content! `);
                            } else {
                              return [
                                createTextVNode(" Missing Content! ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(dialogText.value)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(dialogText.value), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_actions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                onClick: ($event) => dialog.value = false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` I accept `);
                                  } else {
                                    return [
                                      createTextVNode(" I accept ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  onClick: ($event) => dialog.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" I accept ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_title, { class: "text-h5" }, {
                            default: withCtx(() => [
                              createTextVNode(" Missing Content! ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(dialogText.value), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_card_actions, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                onClick: ($event) => dialog.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" I accept ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h5" }, {
                          default: withCtx(() => [
                            createTextVNode(" Missing Content! ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(dialogText.value), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_card_actions, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              onClick: ($event) => dialog.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" I accept ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_main, {
              class: unref(pageTitle) == "/" ? "pt-0 mt-0" : "pt-0 mt-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_app_bar, {
                    elevation: 0,
                    class: ["bg-transparent flex flex-grow w-full", noHeaderPadding.value.includes(unref(useRoute)().path) ? "py-0 my-0" : ""]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex-grow"${_scopeId3}></div>`);
                        _push4(ssrRenderComponent(_component_v_card, { class: "d-flex float-right flex-shrink opacity-80" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                class: "hidden-mobile",
                                icon: "mdi-home"
                              }, null, _parent5, _scopeId4));
                              if (unref(pageTitle).includes("/shop")) {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  class: "hidden-mobile",
                                  icon: "mdi-cart",
                                  onClick: cartClick
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_v_btn, {
                                class: "hidden-mobile",
                                icon: "mdi-account",
                                onClick: profileClick
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                class: "hidden-mobile",
                                icon: themeIcon.value,
                                onClick: themeClick
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                class: "hidden-mobile",
                                icon: "mdi-magnify",
                                onClick: searchClick
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_menu, { transition: "slide-x-transition" }, {
                                activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "mdi-menu" }, props), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_btn, mergeProps({ icon: "mdi-menu" }, props), null, 16)
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item, { link: "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Home `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Home ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item, { link: "" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Home ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item, { link: "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Shop `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Shop ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item, { link: "" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Shop ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_NuxtLink, { to: "/services" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item, { link: "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Services `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Services ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item, { link: "" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Services ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_NuxtLink, { to: "/blog" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item, { link: "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Blog `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Blog ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item, { link: "" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Blog ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          if (unref(user)) {
                                            _push7(ssrRenderComponent(_component_NuxtLink, { to: "/account" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_list_item, { link: "" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Account `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Account ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_list_item, { link: "" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Account ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  link: "",
                                                  onClick: signOut
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item, {
                                                    link: "",
                                                    onClick: signOut
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_NuxtLink, { to: "/" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item, { link: "" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Home ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_NuxtLink, { to: "/shop" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item, { link: "" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Shop ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_NuxtLink, { to: "/services" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item, { link: "" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Services ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_NuxtLink, { to: "/blog" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item, { link: "" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Blog ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            unref(user) ? (openBlock(), createBlock(_component_NuxtLink, {
                                              key: 0,
                                              to: "/account"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item, { link: "" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Account ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            createVNode(_component_NuxtLink, { to: "/" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item, {
                                                  link: "",
                                                  onClick: signOut
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtLink, { to: "/" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item, { link: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Home ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_NuxtLink, { to: "/shop" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item, { link: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Shop ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_NuxtLink, { to: "/services" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item, { link: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Services ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_NuxtLink, { to: "/blog" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item, { link: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Blog ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          unref(user) ? (openBlock(), createBlock(_component_NuxtLink, {
                                            key: 0,
                                            to: "/account"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item, { link: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Account ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          createVNode(_component_NuxtLink, { to: "/" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item, {
                                                link: "",
                                                onClick: signOut
                                              })
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  class: "hidden-mobile",
                                  icon: "mdi-home"
                                }),
                                unref(pageTitle).includes("/shop") ? (openBlock(), createBlock(_component_v_btn, {
                                  key: 0,
                                  class: "hidden-mobile",
                                  icon: "mdi-cart",
                                  onClick: cartClick
                                })) : createCommentVNode("", true),
                                createVNode(_component_v_btn, {
                                  class: "hidden-mobile",
                                  icon: "mdi-account",
                                  onClick: profileClick
                                }),
                                createVNode(_component_v_btn, {
                                  class: "hidden-mobile",
                                  icon: themeIcon.value,
                                  onClick: themeClick
                                }, null, 8, ["icon"]),
                                createVNode(_component_v_btn, {
                                  class: "hidden-mobile",
                                  icon: "mdi-magnify",
                                  onClick: searchClick
                                }),
                                createVNode(_component_v_menu, { transition: "slide-x-transition" }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_v_btn, mergeProps({ icon: "mdi-menu" }, props), null, 16)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, { to: "/" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item, { link: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Home ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_NuxtLink, { to: "/shop" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item, { link: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Shop ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_NuxtLink, { to: "/services" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item, { link: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Services ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_NuxtLink, { to: "/blog" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item, { link: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Blog ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        unref(user) ? (openBlock(), createBlock(_component_NuxtLink, {
                                          key: 0,
                                          to: "/account"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item, { link: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Account ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        createVNode(_component_NuxtLink, { to: "/" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item, {
                                              link: "",
                                              onClick: signOut
                                            })
                                          ]),
                                          _: 1
                                        })
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "flex-grow" }),
                          createVNode(_component_v_card, { class: "d-flex float-right flex-shrink opacity-80" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                class: "hidden-mobile",
                                icon: "mdi-home"
                              }),
                              unref(pageTitle).includes("/shop") ? (openBlock(), createBlock(_component_v_btn, {
                                key: 0,
                                class: "hidden-mobile",
                                icon: "mdi-cart",
                                onClick: cartClick
                              })) : createCommentVNode("", true),
                              createVNode(_component_v_btn, {
                                class: "hidden-mobile",
                                icon: "mdi-account",
                                onClick: profileClick
                              }),
                              createVNode(_component_v_btn, {
                                class: "hidden-mobile",
                                icon: themeIcon.value,
                                onClick: themeClick
                              }, null, 8, ["icon"]),
                              createVNode(_component_v_btn, {
                                class: "hidden-mobile",
                                icon: "mdi-magnify",
                                onClick: searchClick
                              }),
                              createVNode(_component_v_menu, { transition: "slide-x-transition" }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_v_btn, mergeProps({ icon: "mdi-menu" }, props), null, 16)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, { to: "/" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, { link: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Home ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_NuxtLink, { to: "/shop" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, { link: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Shop ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_NuxtLink, { to: "/services" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, { link: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Services ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_NuxtLink, { to: "/blog" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, { link: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Blog ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      unref(user) ? (openBlock(), createBlock(_component_NuxtLink, {
                                        key: 0,
                                        to: "/account"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, { link: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Account ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createVNode(_component_NuxtLink, { to: "/" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, {
                                            link: "",
                                            onClick: signOut
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_navigation_drawer, {
                    modelValue: drawer.value,
                    "onUpdate:modelValue": ($event) => drawer.value = $event,
                    temporary: "",
                    location: "right",
                    class: "pl-2 pr-2 !bg-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-center text-2xl pt-3 pb-3"${_scopeId3}> Shopping Cart </p>`);
                        _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                        if (!loaded.value) {
                          _push4(`<div${_scopeId3}><p class="text-center pt-3 pb-3"${_scopeId3}> Your cart is empty </p>`);
                          _push4(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_btn, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Go Shopping!`);
                                    } else {
                                      return [
                                        createTextVNode("Go Shopping!")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_btn, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Go Shopping!")
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
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_list, { nav: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(cartProducts.value, (item, product) => {
                                  _push5(ssrRenderComponent(_component_v_list_item, { key: product }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<!--[-->`);
                                        ssrRenderList(variantsInCart(item.variants), (variant) => {
                                          _push6(ssrRenderComponent(_component_v_list_item, {
                                            key: variant.id
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`<div${_scopeId6}><img${ssrRenderAttr("src", item.images[0].src)}${_scopeId6}><div${_scopeId6}><h4 class="text-2xl pt-3 pb-3 font-family fontFamily-&#39;Roboto Slab&#39;"${_scopeId6}>${ssrInterpolate(item.title)}</h4><h5 class="text-xl pt-0 pb-3 font-family fontFamily-&#39;Roboto Slab&#39;"${_scopeId6}>${ssrInterpolate(variant.title)}</h5><div class="grid grid-cols-2"${_scopeId6}><div class="grid grid-cols-4"${_scopeId6}><button class="text-center"${_scopeId6}> - </button><p class="text-center"${_scopeId6}>${ssrInterpolate(variant.cartQty)}</p><button class="text-center"${_scopeId6}> + </button></div><div class="grid grid-col-3"${_scopeId6}><p class="text-right"${_scopeId6}>${ssrInterpolate(unref(formatter).format(itemPrice(variant) * variant.cartQty / 100))} </p></div><div${_scopeId6}>`);
                                                _push7(ssrRenderComponent(_component_v_icon, {
                                                  icon: hover.value ? "mdi-skull-outline" : "mdi-alpha-x-circle-outline",
                                                  onClick: ($event) => {
                                                    removeVariant(item, variant);
                                                    hover.value = !hover.value;
                                                  },
                                                  onMouseover: ($event) => hover.value = !hover.value,
                                                  onMouseleave: ($event) => hover.value = !hover.value
                                                }, null, _parent7, _scopeId6));
                                                _push7(`</div></div></div></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", null, [
                                                    createVNode("img", {
                                                      src: item.images[0].src
                                                    }, null, 8, ["src"]),
                                                    createVNode("div", null, [
                                                      createVNode("h4", { class: "text-2xl pt-3 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(item.title), 1),
                                                      createVNode("h5", { class: "text-xl pt-0 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(variant.title), 1),
                                                      createVNode("div", { class: "grid grid-cols-2" }, [
                                                        createVNode("div", { class: "grid grid-cols-4" }, [
                                                          createVNode("button", {
                                                            class: "text-center",
                                                            onClick: ($event) => decreaseCartItemQty(item, variant)
                                                          }, " - ", 8, ["onClick"]),
                                                          createVNode("p", { class: "text-center" }, toDisplayString(variant.cartQty), 1),
                                                          createVNode("button", {
                                                            class: "text-center",
                                                            onClick: ($event) => increaseCartItemQty(item, variant)
                                                          }, " + ", 8, ["onClick"])
                                                        ]),
                                                        createVNode("div", { class: "grid grid-col-3" }, [
                                                          createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(itemPrice(variant) * variant.cartQty / 100)) + " ", 1)
                                                        ]),
                                                        createVNode("div", null, [
                                                          createVNode(_component_v_icon, {
                                                            icon: hover.value ? "mdi-skull-outline" : "mdi-alpha-x-circle-outline",
                                                            onClick: ($event) => {
                                                              removeVariant(item, variant);
                                                              hover.value = !hover.value;
                                                            },
                                                            onMouseover: ($event) => hover.value = !hover.value,
                                                            onMouseleave: ($event) => hover.value = !hover.value
                                                          }, null, 8, ["icon", "onClick", "onMouseover", "onMouseleave"])
                                                        ])
                                                      ])
                                                    ])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        });
                                        _push6(`<!--]-->`);
                                      } else {
                                        return [
                                          (openBlock(true), createBlock(Fragment, null, renderList(variantsInCart(item.variants), (variant) => {
                                            return openBlock(), createBlock(_component_v_list_item, {
                                              key: variant.id
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createVNode("img", {
                                                    src: item.images[0].src
                                                  }, null, 8, ["src"]),
                                                  createVNode("div", null, [
                                                    createVNode("h4", { class: "text-2xl pt-3 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(item.title), 1),
                                                    createVNode("h5", { class: "text-xl pt-0 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(variant.title), 1),
                                                    createVNode("div", { class: "grid grid-cols-2" }, [
                                                      createVNode("div", { class: "grid grid-cols-4" }, [
                                                        createVNode("button", {
                                                          class: "text-center",
                                                          onClick: ($event) => decreaseCartItemQty(item, variant)
                                                        }, " - ", 8, ["onClick"]),
                                                        createVNode("p", { class: "text-center" }, toDisplayString(variant.cartQty), 1),
                                                        createVNode("button", {
                                                          class: "text-center",
                                                          onClick: ($event) => increaseCartItemQty(item, variant)
                                                        }, " + ", 8, ["onClick"])
                                                      ]),
                                                      createVNode("div", { class: "grid grid-col-3" }, [
                                                        createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(itemPrice(variant) * variant.cartQty / 100)) + " ", 1)
                                                      ]),
                                                      createVNode("div", null, [
                                                        createVNode(_component_v_icon, {
                                                          icon: hover.value ? "mdi-skull-outline" : "mdi-alpha-x-circle-outline",
                                                          onClick: ($event) => {
                                                            removeVariant(item, variant);
                                                            hover.value = !hover.value;
                                                          },
                                                          onMouseover: ($event) => hover.value = !hover.value,
                                                          onMouseleave: ($event) => hover.value = !hover.value
                                                        }, null, 8, ["icon", "onClick", "onMouseover", "onMouseleave"])
                                                      ])
                                                    ])
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
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                                _push5(ssrRenderComponent(_component_v_divider, { class: "mt-4 mb-4" }, null, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}><div${_scopeId4}><div class="grid grid-cols-2 mb-3"${_scopeId4}><h4 class="text-2xl font-bold"${_scopeId4}> Total </h4><p class="text-right text-2xl"${_scopeId4}>${ssrInterpolate(unref(formatter).format(cartTotal.value / 100))}</p></div><div${_scopeId4}><div class="grid grid-cols-2"${_scopeId4}><p${_scopeId4}>Item Cost</p><div class="grid grid-col-2"${_scopeId4}><p class="text-right"${_scopeId4}>${ssrInterpolate(unref(formatter).format(itemTotal.value / 100))}</p></div></div><div class="grid grid-cols-2"${_scopeId4}><p${_scopeId4}>Shipping</p><div class="grid grid-col-2"${_scopeId4}><p class="text-right"${_scopeId4}>${ssrInterpolate(unref(formatter).format(shipTotal.value / 100))} </p></div></div></div><div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_divider, { class: "mt-4 mb-4" }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  class: "text-wrap !bg-white",
                                  variant: "outlined",
                                  style: { fontFamily: "Roboto Slab" },
                                  onClick: moveToCheckout.value
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<p class="text-base"${_scopeId5}> Check Out </p>`);
                                    } else {
                                      return [
                                        createVNode("p", { class: "text-base" }, " Check Out ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div></div></div>`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(cartProducts.value, (item, product) => {
                                    return openBlock(), createBlock(_component_v_list_item, { key: product }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(variantsInCart(item.variants), (variant) => {
                                          return openBlock(), createBlock(_component_v_list_item, {
                                            key: variant.id
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode("img", {
                                                  src: item.images[0].src
                                                }, null, 8, ["src"]),
                                                createVNode("div", null, [
                                                  createVNode("h4", { class: "text-2xl pt-3 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(item.title), 1),
                                                  createVNode("h5", { class: "text-xl pt-0 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(variant.title), 1),
                                                  createVNode("div", { class: "grid grid-cols-2" }, [
                                                    createVNode("div", { class: "grid grid-cols-4" }, [
                                                      createVNode("button", {
                                                        class: "text-center",
                                                        onClick: ($event) => decreaseCartItemQty(item, variant)
                                                      }, " - ", 8, ["onClick"]),
                                                      createVNode("p", { class: "text-center" }, toDisplayString(variant.cartQty), 1),
                                                      createVNode("button", {
                                                        class: "text-center",
                                                        onClick: ($event) => increaseCartItemQty(item, variant)
                                                      }, " + ", 8, ["onClick"])
                                                    ]),
                                                    createVNode("div", { class: "grid grid-col-3" }, [
                                                      createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(itemPrice(variant) * variant.cartQty / 100)) + " ", 1)
                                                    ]),
                                                    createVNode("div", null, [
                                                      createVNode(_component_v_icon, {
                                                        icon: hover.value ? "mdi-skull-outline" : "mdi-alpha-x-circle-outline",
                                                        onClick: ($event) => {
                                                          removeVariant(item, variant);
                                                          hover.value = !hover.value;
                                                        },
                                                        onMouseover: ($event) => hover.value = !hover.value,
                                                        onMouseleave: ($event) => hover.value = !hover.value
                                                      }, null, 8, ["icon", "onClick", "onMouseover", "onMouseleave"])
                                                    ])
                                                  ])
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
                                  createVNode(_component_v_divider, { class: "mt-4 mb-4" }),
                                  createVNode("div", null, [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "grid grid-cols-2 mb-3" }, [
                                        createVNode("h4", { class: "text-2xl font-bold" }, " Total "),
                                        createVNode("p", { class: "text-right text-2xl" }, toDisplayString(unref(formatter).format(cartTotal.value / 100)), 1)
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("div", { class: "grid grid-cols-2" }, [
                                          createVNode("p", null, "Item Cost"),
                                          createVNode("div", { class: "grid grid-col-2" }, [
                                            createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(itemTotal.value / 100)), 1)
                                          ])
                                        ]),
                                        createVNode("div", { class: "grid grid-cols-2" }, [
                                          createVNode("p", null, "Shipping"),
                                          createVNode("div", { class: "grid grid-col-2" }, [
                                            createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(shipTotal.value / 100)) + " ", 1)
                                          ])
                                        ])
                                      ]),
                                      createVNode("div", null, [
                                        createVNode(_component_v_divider, { class: "mt-4 mb-4" }),
                                        createVNode(_component_v_btn, {
                                          class: "text-wrap !bg-white",
                                          variant: "outlined",
                                          style: { fontFamily: "Roboto Slab" },
                                          onClick: moveToCheckout.value
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "text-base" }, " Check Out ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        }
                      } else {
                        return [
                          createVNode("p", { class: "text-center text-2xl pt-3 pb-3" }, " Shopping Cart "),
                          createVNode(_component_v_divider),
                          !loaded.value ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("p", { class: "text-center pt-3 pb-3" }, " Your cart is empty "),
                            createVNode(_component_NuxtLink, { to: "/shop" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Go Shopping!")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode(_component_v_list, { nav: "" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(cartProducts.value, (item, product) => {
                                  return openBlock(), createBlock(_component_v_list_item, { key: product }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(variantsInCart(item.variants), (variant) => {
                                        return openBlock(), createBlock(_component_v_list_item, {
                                          key: variant.id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode("img", {
                                                src: item.images[0].src
                                              }, null, 8, ["src"]),
                                              createVNode("div", null, [
                                                createVNode("h4", { class: "text-2xl pt-3 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(item.title), 1),
                                                createVNode("h5", { class: "text-xl pt-0 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(variant.title), 1),
                                                createVNode("div", { class: "grid grid-cols-2" }, [
                                                  createVNode("div", { class: "grid grid-cols-4" }, [
                                                    createVNode("button", {
                                                      class: "text-center",
                                                      onClick: ($event) => decreaseCartItemQty(item, variant)
                                                    }, " - ", 8, ["onClick"]),
                                                    createVNode("p", { class: "text-center" }, toDisplayString(variant.cartQty), 1),
                                                    createVNode("button", {
                                                      class: "text-center",
                                                      onClick: ($event) => increaseCartItemQty(item, variant)
                                                    }, " + ", 8, ["onClick"])
                                                  ]),
                                                  createVNode("div", { class: "grid grid-col-3" }, [
                                                    createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(itemPrice(variant) * variant.cartQty / 100)) + " ", 1)
                                                  ]),
                                                  createVNode("div", null, [
                                                    createVNode(_component_v_icon, {
                                                      icon: hover.value ? "mdi-skull-outline" : "mdi-alpha-x-circle-outline",
                                                      onClick: ($event) => {
                                                        removeVariant(item, variant);
                                                        hover.value = !hover.value;
                                                      },
                                                      onMouseover: ($event) => hover.value = !hover.value,
                                                      onMouseleave: ($event) => hover.value = !hover.value
                                                    }, null, 8, ["icon", "onClick", "onMouseover", "onMouseleave"])
                                                  ])
                                                ])
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
                                createVNode(_component_v_divider, { class: "mt-4 mb-4" }),
                                createVNode("div", null, [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "grid grid-cols-2 mb-3" }, [
                                      createVNode("h4", { class: "text-2xl font-bold" }, " Total "),
                                      createVNode("p", { class: "text-right text-2xl" }, toDisplayString(unref(formatter).format(cartTotal.value / 100)), 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "grid grid-cols-2" }, [
                                        createVNode("p", null, "Item Cost"),
                                        createVNode("div", { class: "grid grid-col-2" }, [
                                          createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(itemTotal.value / 100)), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "grid grid-cols-2" }, [
                                        createVNode("p", null, "Shipping"),
                                        createVNode("div", { class: "grid grid-col-2" }, [
                                          createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(shipTotal.value / 100)) + " ", 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode(_component_v_divider, { class: "mt-4 mb-4" }),
                                      createVNode(_component_v_btn, {
                                        class: "text-wrap !bg-white",
                                        variant: "outlined",
                                        style: { fontFamily: "Roboto Slab" },
                                        onClick: moveToCheckout.value
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-base" }, " Check Out ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    createVNode(_component_v_app_bar, {
                      elevation: 0,
                      class: ["bg-transparent flex flex-grow w-full", noHeaderPadding.value.includes(unref(useRoute)().path) ? "py-0 my-0" : ""]
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-grow" }),
                        createVNode(_component_v_card, { class: "d-flex float-right flex-shrink opacity-80" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              class: "hidden-mobile",
                              icon: "mdi-home"
                            }),
                            unref(pageTitle).includes("/shop") ? (openBlock(), createBlock(_component_v_btn, {
                              key: 0,
                              class: "hidden-mobile",
                              icon: "mdi-cart",
                              onClick: cartClick
                            })) : createCommentVNode("", true),
                            createVNode(_component_v_btn, {
                              class: "hidden-mobile",
                              icon: "mdi-account",
                              onClick: profileClick
                            }),
                            createVNode(_component_v_btn, {
                              class: "hidden-mobile",
                              icon: themeIcon.value,
                              onClick: themeClick
                            }, null, 8, ["icon"]),
                            createVNode(_component_v_btn, {
                              class: "hidden-mobile",
                              icon: "mdi-magnify",
                              onClick: searchClick
                            }),
                            createVNode(_component_v_menu, { transition: "slide-x-transition" }, {
                              activator: withCtx(({ props }) => [
                                createVNode(_component_v_btn, mergeProps({ icon: "mdi-menu" }, props), null, 16)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, { to: "/" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, { link: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Home ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_NuxtLink, { to: "/shop" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, { link: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Shop ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_NuxtLink, { to: "/services" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, { link: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Services ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_NuxtLink, { to: "/blog" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, { link: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Blog ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    unref(user) ? (openBlock(), createBlock(_component_NuxtLink, {
                                      key: 0,
                                      to: "/account"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, { link: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Account ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_NuxtLink, { to: "/" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          link: "",
                                          onClick: signOut
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["class"]),
                    createVNode(_component_v_navigation_drawer, {
                      modelValue: drawer.value,
                      "onUpdate:modelValue": ($event) => drawer.value = $event,
                      temporary: "",
                      location: "right",
                      class: "pl-2 pr-2 !bg-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-center text-2xl pt-3 pb-3" }, " Shopping Cart "),
                        createVNode(_component_v_divider),
                        !loaded.value ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("p", { class: "text-center pt-3 pb-3" }, " Your cart is empty "),
                          createVNode(_component_NuxtLink, { to: "/shop" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, null, {
                                default: withCtx(() => [
                                  createTextVNode("Go Shopping!")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode(_component_v_list, { nav: "" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(cartProducts.value, (item, product) => {
                                return openBlock(), createBlock(_component_v_list_item, { key: product }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(variantsInCart(item.variants), (variant) => {
                                      return openBlock(), createBlock(_component_v_list_item, {
                                        key: variant.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("img", {
                                              src: item.images[0].src
                                            }, null, 8, ["src"]),
                                            createVNode("div", null, [
                                              createVNode("h4", { class: "text-2xl pt-3 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(item.title), 1),
                                              createVNode("h5", { class: "text-xl pt-0 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(variant.title), 1),
                                              createVNode("div", { class: "grid grid-cols-2" }, [
                                                createVNode("div", { class: "grid grid-cols-4" }, [
                                                  createVNode("button", {
                                                    class: "text-center",
                                                    onClick: ($event) => decreaseCartItemQty(item, variant)
                                                  }, " - ", 8, ["onClick"]),
                                                  createVNode("p", { class: "text-center" }, toDisplayString(variant.cartQty), 1),
                                                  createVNode("button", {
                                                    class: "text-center",
                                                    onClick: ($event) => increaseCartItemQty(item, variant)
                                                  }, " + ", 8, ["onClick"])
                                                ]),
                                                createVNode("div", { class: "grid grid-col-3" }, [
                                                  createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(itemPrice(variant) * variant.cartQty / 100)) + " ", 1)
                                                ]),
                                                createVNode("div", null, [
                                                  createVNode(_component_v_icon, {
                                                    icon: hover.value ? "mdi-skull-outline" : "mdi-alpha-x-circle-outline",
                                                    onClick: ($event) => {
                                                      removeVariant(item, variant);
                                                      hover.value = !hover.value;
                                                    },
                                                    onMouseover: ($event) => hover.value = !hover.value,
                                                    onMouseleave: ($event) => hover.value = !hover.value
                                                  }, null, 8, ["icon", "onClick", "onMouseover", "onMouseleave"])
                                                ])
                                              ])
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
                              createVNode(_component_v_divider, { class: "mt-4 mb-4" }),
                              createVNode("div", null, [
                                createVNode("div", null, [
                                  createVNode("div", { class: "grid grid-cols-2 mb-3" }, [
                                    createVNode("h4", { class: "text-2xl font-bold" }, " Total "),
                                    createVNode("p", { class: "text-right text-2xl" }, toDisplayString(unref(formatter).format(cartTotal.value / 100)), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "grid grid-cols-2" }, [
                                      createVNode("p", null, "Item Cost"),
                                      createVNode("div", { class: "grid grid-col-2" }, [
                                        createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(itemTotal.value / 100)), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-2" }, [
                                      createVNode("p", null, "Shipping"),
                                      createVNode("div", { class: "grid grid-col-2" }, [
                                        createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(shipTotal.value / 100)) + " ", 1)
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(_component_v_divider, { class: "mt-4 mb-4" }),
                                    createVNode(_component_v_btn, {
                                      class: "text-wrap !bg-white",
                                      variant: "outlined",
                                      style: { fontFamily: "Roboto Slab" },
                                      onClick: moveToCheckout.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-base" }, " Check Out ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode(_component_v_dialog, {
                  modelValue: dialog.value,
                  "onUpdate:modelValue": ($event) => dialog.value = $event,
                  width: "500"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h5" }, {
                          default: withCtx(() => [
                            createTextVNode(" Missing Content! ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(dialogText.value), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_card_actions, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              onClick: ($event) => dialog.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" I accept ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode(_component_v_main, {
                class: unref(pageTitle) == "/" ? "pt-0 mt-0" : "pt-0 mt-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_app_bar, {
                    elevation: 0,
                    class: ["bg-transparent flex flex-grow w-full", noHeaderPadding.value.includes(unref(useRoute)().path) ? "py-0 my-0" : ""]
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex-grow" }),
                      createVNode(_component_v_card, { class: "d-flex float-right flex-shrink opacity-80" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            class: "hidden-mobile",
                            icon: "mdi-home"
                          }),
                          unref(pageTitle).includes("/shop") ? (openBlock(), createBlock(_component_v_btn, {
                            key: 0,
                            class: "hidden-mobile",
                            icon: "mdi-cart",
                            onClick: cartClick
                          })) : createCommentVNode("", true),
                          createVNode(_component_v_btn, {
                            class: "hidden-mobile",
                            icon: "mdi-account",
                            onClick: profileClick
                          }),
                          createVNode(_component_v_btn, {
                            class: "hidden-mobile",
                            icon: themeIcon.value,
                            onClick: themeClick
                          }, null, 8, ["icon"]),
                          createVNode(_component_v_btn, {
                            class: "hidden-mobile",
                            icon: "mdi-magnify",
                            onClick: searchClick
                          }),
                          createVNode(_component_v_menu, { transition: "slide-x-transition" }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ icon: "mdi-menu" }, props), null, 16)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, { to: "/" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, { link: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Home ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_NuxtLink, { to: "/shop" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, { link: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Shop ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_NuxtLink, { to: "/services" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, { link: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Services ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_NuxtLink, { to: "/blog" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, { link: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Blog ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  unref(user) ? (openBlock(), createBlock(_component_NuxtLink, {
                                    key: 0,
                                    to: "/account"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, { link: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Account ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_NuxtLink, { to: "/" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        link: "",
                                        onClick: signOut
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(_component_v_navigation_drawer, {
                    modelValue: drawer.value,
                    "onUpdate:modelValue": ($event) => drawer.value = $event,
                    temporary: "",
                    location: "right",
                    class: "pl-2 pr-2 !bg-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-center text-2xl pt-3 pb-3" }, " Shopping Cart "),
                      createVNode(_component_v_divider),
                      !loaded.value ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("p", { class: "text-center pt-3 pb-3" }, " Your cart is empty "),
                        createVNode(_component_NuxtLink, { to: "/shop" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, null, {
                              default: withCtx(() => [
                                createTextVNode("Go Shopping!")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])) : (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode(_component_v_list, { nav: "" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(cartProducts.value, (item, product) => {
                              return openBlock(), createBlock(_component_v_list_item, { key: product }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(variantsInCart(item.variants), (variant) => {
                                    return openBlock(), createBlock(_component_v_list_item, {
                                      key: variant.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("img", {
                                            src: item.images[0].src
                                          }, null, 8, ["src"]),
                                          createVNode("div", null, [
                                            createVNode("h4", { class: "text-2xl pt-3 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(item.title), 1),
                                            createVNode("h5", { class: "text-xl pt-0 pb-3 font-family fontFamily-'Roboto Slab'" }, toDisplayString(variant.title), 1),
                                            createVNode("div", { class: "grid grid-cols-2" }, [
                                              createVNode("div", { class: "grid grid-cols-4" }, [
                                                createVNode("button", {
                                                  class: "text-center",
                                                  onClick: ($event) => decreaseCartItemQty(item, variant)
                                                }, " - ", 8, ["onClick"]),
                                                createVNode("p", { class: "text-center" }, toDisplayString(variant.cartQty), 1),
                                                createVNode("button", {
                                                  class: "text-center",
                                                  onClick: ($event) => increaseCartItemQty(item, variant)
                                                }, " + ", 8, ["onClick"])
                                              ]),
                                              createVNode("div", { class: "grid grid-col-3" }, [
                                                createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(itemPrice(variant) * variant.cartQty / 100)) + " ", 1)
                                              ]),
                                              createVNode("div", null, [
                                                createVNode(_component_v_icon, {
                                                  icon: hover.value ? "mdi-skull-outline" : "mdi-alpha-x-circle-outline",
                                                  onClick: ($event) => {
                                                    removeVariant(item, variant);
                                                    hover.value = !hover.value;
                                                  },
                                                  onMouseover: ($event) => hover.value = !hover.value,
                                                  onMouseleave: ($event) => hover.value = !hover.value
                                                }, null, 8, ["icon", "onClick", "onMouseover", "onMouseleave"])
                                              ])
                                            ])
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
                            createVNode(_component_v_divider, { class: "mt-4 mb-4" }),
                            createVNode("div", null, [
                              createVNode("div", null, [
                                createVNode("div", { class: "grid grid-cols-2 mb-3" }, [
                                  createVNode("h4", { class: "text-2xl font-bold" }, " Total "),
                                  createVNode("p", { class: "text-right text-2xl" }, toDisplayString(unref(formatter).format(cartTotal.value / 100)), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "grid grid-cols-2" }, [
                                    createVNode("p", null, "Item Cost"),
                                    createVNode("div", { class: "grid grid-col-2" }, [
                                      createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(itemTotal.value / 100)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-2" }, [
                                    createVNode("p", null, "Shipping"),
                                    createVNode("div", { class: "grid grid-col-2" }, [
                                      createVNode("p", { class: "text-right" }, toDisplayString(unref(formatter).format(shipTotal.value / 100)) + " ", 1)
                                    ])
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_v_divider, { class: "mt-4 mb-4" }),
                                  createVNode(_component_v_btn, {
                                    class: "text-wrap !bg-white",
                                    variant: "outlined",
                                    style: { fontFamily: "Roboto Slab" },
                                    onClick: moveToCheckout.value
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-base" }, " Check Out ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.1fc0f3d1.mjs.map
