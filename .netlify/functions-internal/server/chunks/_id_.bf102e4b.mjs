import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './ShopFooter.a164084a.mjs';
import { e as useRoute, _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, computed, resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, unref, createTextVNode, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useProductDataStore } from './productData.7d836a64.mjs';
import { u as useCartDataStore } from './cartData.947fcc28.mjs';
import { u as useUserDataStore } from './userData.be862cd2.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useProductDataStore();
    useUserDataStore();
    const route = useRoute();
    ref(route.params.id);
    const product = ref();
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    function changeProductVariantNum(item, e) {
      console.log("Changing variant number to " + e);
      let idx = item.variants.map((x) => {
        return x.title;
      }).indexOf(e);
      item.variantNum = idx;
      console.log(item);
    }
    function heartClick(item, variant) {
      const cart = useCartDataStore();
      let thisItemInCart = false;
      let thisVariantInCart = false;
      let otherVariants = false;
      let otherItems = false;
      let itemIndex = null;
      let variantIndex = null;
      if (cart.cartData.length == 0) {
        variant.cartQty = 1;
        variant.inCart = true;
        item.variants[item.variantNum] = variant;
        cart.$patch(cart.cartData[0] = item);
        return;
      }
      cartLoop:
        for (let i = 0; i < cart.cartData.length; i++) {
          if (cart.cartData[i].id != item.id) {
            otherItems = true;
          }
          if (cart.cartData[i].id == item.id) {
            thisItemInCart = true;
            variantLoop:
              for (let j = 0; j < cart.cartData[i].variants.length; j++) {
                if (cart.cartData[i].variants[j].cartQty > 0 && cart.cartData[i].variants[j].id != variant.id) {
                  otherVariants = true;
                }
                if (cart.cartData[i].variants[j].cartQty > 0 && cart.cartData[i].variants[j].id == variant.id) {
                  thisVariantInCart = true;
                  itemIndex = i;
                  variantIndex = j;
                }
                if (otherVariants && thisVariantInCart) {
                  if (otherItems && thisItemInCart) {
                    break cartLoop;
                  }
                  break variantLoop;
                }
              }
          }
          if (otherItems && thisItemInCart) {
            break cartLoop;
          }
        }
      if (thisItemInCart && !thisVariantInCart) {
        console.log("This item is in cart, but not this variant");
        variant.cartQty = 1;
        variant.inCart = true;
        item.variants[variantIndex] = variant;
        cart.$patch(cart.cartData[cart.cartData.length] = item);
        return;
      }
      if (thisItemInCart && thisVariantInCart) {
        console.log("This item and this variant are in cart.");
        if (!otherVariants) {
          console.log("This is the only variant of this item in cart - Scenario 3a");
          variant.cartQty = 0;
          variant.inCart = false;
          item.variants[item.variantNum] = variant;
          cart.$patch(cart.cartData[itemIndex].variants[variantIndex] = variant);
          cart.cartData.splice(itemIndex, 1);
          cart.$patch({ cartData: cart.cartData });
          return;
        }
        if (otherVariants) {
          console.log("There are other variants of this item in cart - Scenario 3b");
          variant.cartQty = 0;
          variant.inCart = false;
          item.variants[item.variantNum] = variant;
          cart.$patch(cart.cartData[itemIndex].variants[variantIndex] = variant);
          cart.cartData.splice(itemIndex, 1);
          cart.$patch({ cartData: cart.cartData });
          return;
        }
      }
      if (!thisItemInCart && otherItems) {
        console.log("This item is not in cart, but other items are, add this item (and variant) to cart");
        variant.cartQty = 1;
        variant.inCart = true;
        item.variants[item.variantNum] = variant;
        cart.$patch(cart.cartData[cart.cartData.length] = item);
        return;
      }
    }
    const itemPrice = function(variant) {
      const cart = useCartDataStore();
      const user = useUserDataStore();
      let sProfile = false;
      for (let i = 0; i < variant.shippingProfile.length; i++) {
        for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
          if (variant.shippingProfile[i].countries[j] == user.userData[0].country) {
            sProfile = variant.shippingProfile[i];
            variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + variant.cost * 0.1 + 100);
            cart.$patch(variant.id, { itemCost: variant.itemCost });
            return variant.itemCost;
          }
        }
      }
      if (!sProfile.first_item.cost || sProfile.first_item.cost < 1) {
        for (let i = 0; variant.shippingProfile.length; i++) {
          if (variant.shippingProfile[i].countries.includes("REST_OF_THE_WORLD")) {
            sProfile = variant.shippingProfile[i];
            variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + variant.cost * 0.1 + 100);
            cart.$patch(variant.id, { itemCost: variant.itemCost });
            return variant.itemCost;
          }
        }
      }
      variant.itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + variant.cost * 0.1 + 100);
      cart.$patch(variant.id, { itemCost: variant.itemCost });
      return variant.itemCost;
    };
    ref(computed(() => {
      let total = 0;
      for (let i = 0; i < cartProducts.value.length; i++) {
        for (let j = 0; j < cartProducts.value[i].variants.length; j++) {
          total += itemPrice(cartProducts.value[i].variants[j]) * cartProducts.value[i].variants[j].cartQty;
        }
      }
      total = Math.ceil(total);
      return total;
    }));
    const itemShippingPrice = function(variant) {
      const user = useUserDataStore();
      let sProfile = false;
      for (let i = 0; i < variant.shippingProfile.length; i++) {
        for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
          if (variant.shippingProfile[i].countries[j] == user.userData[0].country) {
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
      return variant.shipCost > 0 ? variant.shipCost : 1e3;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShopHeader = __nuxt_component_0;
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_carousel = resolveComponent("v-carousel");
      const _component_v_carousel_item = resolveComponent("v-carousel-item");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_select = resolveComponent("v-select");
      const _component_ShopFooter = __nuxt_component_2;
      _push(`<!--[--><div class="bg-image bg-repeat align-items-center align-middle items-center h-full" style="${ssrRenderStyle({ "background-image": "url('/img/purple-mushroom.jpg')" })}">`);
      _push(ssrRenderComponent(_component_ShopHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_v_container, { class: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { dense: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-wrap"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_card, { class: "bg-white w-full text-wrap rounded-xl border flex m-5 p-2 shadow-xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (product.value) {
                                _push5(`<div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_card_title, { class: "bg-surface py-5" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="text-wrap text-5xl m-3 text-center"${_scopeId5}>${ssrInterpolate(product.value.title)}</p>`);
                                    } else {
                                      return [
                                        createVNode("p", {
                                          style: { fontFamily: "Roboto Slab" },
                                          class: "text-wrap text-5xl m-3 text-center"
                                        }, toDisplayString(product.value.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div class="sm:w-full sm:h-full sm:float-none flex md:w-1/3 md:float-left md:mr-10"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_carousel, {
                                  color: "primary-darken-1",
                                  "delimiter-icon": "mdi-circle-slice-8"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(product.value.images, (img, i) => {
                                        _push6(ssrRenderComponent(_component_v_carousel_item, {
                                          key: i,
                                          src: img.src,
                                          "lazy-src": img.src,
                                          alt: img.alt
                                        }, null, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(product.value.images, (img, i) => {
                                          return openBlock(), createBlock(_component_v_carousel_item, {
                                            key: i,
                                            src: img.src,
                                            "lazy-src": img.src,
                                            alt: img.alt
                                          }, null, 8, ["src", "lazy-src", "alt"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div><div class="sm:float-none sm:p-10 sm:w-full md:w-full"${_scopeId4}><div class="text-center justify-space-between sm:flex-none sm:md:flex"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  class: "text-wrap <md:w-3/4 md:w-1/3 !font-semibold !text-green-600 !text-2x3 !hover:text-green-800",
                                  variant: "outlined",
                                  size: "x-large",
                                  style: { fontFamily: "Roboto Slab" },
                                  onClick: ($event) => heartClick(product.value, product.value.variants[product.value.variantNum])
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<p class="text-base"${_scopeId5}> Add to Cart </p>`);
                                    } else {
                                      return [
                                        createVNode("p", { class: "text-base" }, " Add to Cart ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<p class="&lt;md:w-full &lt;md:py-6 md:w-1/3 md:pt-2 text-center text-4xl font-semibold text-green-600" size=""${_scopeId4}>${ssrInterpolate(unref(formatter).format(itemPrice(product.value.variants[product.value.variantNum]) / 100))}</p><p${_scopeId4}>Shipping Cost: ${ssrInterpolate(unref(formatter).format(itemShippingPrice(product.value.variants[product.value.variantNum]) / 100))}</p>`);
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  to: "/shop/checkout",
                                  class: "<md:w-3/4 md:w-1/3"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        class: "<md:w-3/4 w-full text-wrap !font-semibold !text-green-600 !text-2x3 !hover:text-green-800",
                                        variant: "outlined",
                                        size: "x-large",
                                        style: { fontFamily: "Roboto Slab" }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<p class="text-base"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_icon, { class: "pr-3" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` mdi-cart `);
                                                } else {
                                                  return [
                                                    createTextVNode(" mdi-cart ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`View Cart </p>`);
                                          } else {
                                            return [
                                              createVNode("p", { class: "text-base" }, [
                                                createVNode(_component_v_icon, { class: "pr-3" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-cart ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode("View Cart ")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_btn, {
                                          class: "<md:w-3/4 w-full text-wrap !font-semibold !text-green-600 !text-2x3 !hover:text-green-800",
                                          variant: "outlined",
                                          size: "x-large",
                                          style: { fontFamily: "Roboto Slab" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "text-base" }, [
                                              createVNode(_component_v_icon, { class: "pr-3" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-cart ")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode("View Cart ")
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div><p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="text-wrap text-xl text-justify py-10 &lt;md:px-5"${_scopeId4}>${product.value.description}</p>`);
                                if (product.value.variants.length > 1) {
                                  _push5(`<div class="flex align-center"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_v_select, {
                                    default: product.value.variants[product.value.variantNum].title,
                                    label: "Select a variant",
                                    items: product.value.variants,
                                    class: "",
                                    "onUpdate:modelValue": ($event) => changeProductVariantNum(product.value, $event)
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                product.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode(_component_v_card_title, { class: "bg-surface py-5" }, {
                                    default: withCtx(() => [
                                      createVNode("p", {
                                        style: { fontFamily: "Roboto Slab" },
                                        class: "text-wrap text-5xl m-3 text-center"
                                      }, toDisplayString(product.value.title), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "sm:w-full sm:h-full sm:float-none flex md:w-1/3 md:float-left md:mr-10" }, [
                                    createVNode(_component_v_carousel, {
                                      color: "primary-darken-1",
                                      "delimiter-icon": "mdi-circle-slice-8"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(product.value.images, (img, i) => {
                                          return openBlock(), createBlock(_component_v_carousel_item, {
                                            key: i,
                                            src: img.src,
                                            "lazy-src": img.src,
                                            alt: img.alt
                                          }, null, 8, ["src", "lazy-src", "alt"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "sm:float-none sm:p-10 sm:w-full md:w-full" }, [
                                    createVNode("div", { class: "text-center justify-space-between sm:flex-none sm:md:flex" }, [
                                      createVNode(_component_v_btn, {
                                        class: "text-wrap <md:w-3/4 md:w-1/3 !font-semibold !text-green-600 !text-2x3 !hover:text-green-800",
                                        variant: "outlined",
                                        size: "x-large",
                                        style: { fontFamily: "Roboto Slab" },
                                        onClick: ($event) => heartClick(product.value, product.value.variants[product.value.variantNum])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-base" }, " Add to Cart ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode("p", {
                                        class: "<md:w-full <md:py-6 md:w-1/3 md:pt-2 text-center text-4xl font-semibold text-green-600",
                                        size: ""
                                      }, toDisplayString(unref(formatter).format(itemPrice(product.value.variants[product.value.variantNum]) / 100)), 1),
                                      createVNode("p", null, "Shipping Cost: " + toDisplayString(unref(formatter).format(itemShippingPrice(product.value.variants[product.value.variantNum]) / 100)), 1),
                                      createVNode(_component_NuxtLink, {
                                        to: "/shop/checkout",
                                        class: "<md:w-3/4 md:w-1/3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            class: "<md:w-3/4 w-full text-wrap !font-semibold !text-green-600 !text-2x3 !hover:text-green-800",
                                            variant: "outlined",
                                            size: "x-large",
                                            style: { fontFamily: "Roboto Slab" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("p", { class: "text-base" }, [
                                                createVNode(_component_v_icon, { class: "pr-3" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-cart ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode("View Cart ")
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("p", {
                                      style: { fontFamily: "Roboto Slab" },
                                      class: "text-wrap text-xl text-justify py-10 <md:px-5",
                                      innerHTML: product.value.description
                                    }, null, 8, ["innerHTML"]),
                                    product.value.variants.length > 1 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex align-center"
                                    }, [
                                      createVNode(_component_v_select, {
                                        default: product.value.variants[product.value.variantNum].title,
                                        label: "Select a variant",
                                        items: product.value.variants,
                                        class: "",
                                        "onUpdate:modelValue": ($event) => changeProductVariantNum(product.value, $event)
                                      }, null, 8, ["default", "items", "onUpdate:modelValue"])
                                    ])) : createCommentVNode("", true)
                                  ])
                                ])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-wrap" }, [
                            createVNode(_component_v_card, { class: "bg-white w-full text-wrap rounded-xl border flex m-5 p-2 shadow-xl" }, {
                              default: withCtx(() => [
                                product.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode(_component_v_card_title, { class: "bg-surface py-5" }, {
                                    default: withCtx(() => [
                                      createVNode("p", {
                                        style: { fontFamily: "Roboto Slab" },
                                        class: "text-wrap text-5xl m-3 text-center"
                                      }, toDisplayString(product.value.title), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "sm:w-full sm:h-full sm:float-none flex md:w-1/3 md:float-left md:mr-10" }, [
                                    createVNode(_component_v_carousel, {
                                      color: "primary-darken-1",
                                      "delimiter-icon": "mdi-circle-slice-8"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(product.value.images, (img, i) => {
                                          return openBlock(), createBlock(_component_v_carousel_item, {
                                            key: i,
                                            src: img.src,
                                            "lazy-src": img.src,
                                            alt: img.alt
                                          }, null, 8, ["src", "lazy-src", "alt"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "sm:float-none sm:p-10 sm:w-full md:w-full" }, [
                                    createVNode("div", { class: "text-center justify-space-between sm:flex-none sm:md:flex" }, [
                                      createVNode(_component_v_btn, {
                                        class: "text-wrap <md:w-3/4 md:w-1/3 !font-semibold !text-green-600 !text-2x3 !hover:text-green-800",
                                        variant: "outlined",
                                        size: "x-large",
                                        style: { fontFamily: "Roboto Slab" },
                                        onClick: ($event) => heartClick(product.value, product.value.variants[product.value.variantNum])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-base" }, " Add to Cart ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode("p", {
                                        class: "<md:w-full <md:py-6 md:w-1/3 md:pt-2 text-center text-4xl font-semibold text-green-600",
                                        size: ""
                                      }, toDisplayString(unref(formatter).format(itemPrice(product.value.variants[product.value.variantNum]) / 100)), 1),
                                      createVNode("p", null, "Shipping Cost: " + toDisplayString(unref(formatter).format(itemShippingPrice(product.value.variants[product.value.variantNum]) / 100)), 1),
                                      createVNode(_component_NuxtLink, {
                                        to: "/shop/checkout",
                                        class: "<md:w-3/4 md:w-1/3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            class: "<md:w-3/4 w-full text-wrap !font-semibold !text-green-600 !text-2x3 !hover:text-green-800",
                                            variant: "outlined",
                                            size: "x-large",
                                            style: { fontFamily: "Roboto Slab" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("p", { class: "text-base" }, [
                                                createVNode(_component_v_icon, { class: "pr-3" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-cart ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode("View Cart ")
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("p", {
                                      style: { fontFamily: "Roboto Slab" },
                                      class: "text-wrap text-xl text-justify py-10 <md:px-5",
                                      innerHTML: product.value.description
                                    }, null, 8, ["innerHTML"]),
                                    product.value.variants.length > 1 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex align-center"
                                    }, [
                                      createVNode(_component_v_select, {
                                        default: product.value.variants[product.value.variantNum].title,
                                        label: "Select a variant",
                                        items: product.value.variants,
                                        class: "",
                                        "onUpdate:modelValue": ($event) => changeProductVariantNum(product.value, $event)
                                      }, null, 8, ["default", "items", "onUpdate:modelValue"])
                                    ])) : createCommentVNode("", true)
                                  ])
                                ])) : createCommentVNode("", true)
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
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-wrap" }, [
                          createVNode(_component_v_card, { class: "bg-white w-full text-wrap rounded-xl border flex m-5 p-2 shadow-xl" }, {
                            default: withCtx(() => [
                              product.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode(_component_v_card_title, { class: "bg-surface py-5" }, {
                                  default: withCtx(() => [
                                    createVNode("p", {
                                      style: { fontFamily: "Roboto Slab" },
                                      class: "text-wrap text-5xl m-3 text-center"
                                    }, toDisplayString(product.value.title), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "sm:w-full sm:h-full sm:float-none flex md:w-1/3 md:float-left md:mr-10" }, [
                                  createVNode(_component_v_carousel, {
                                    color: "primary-darken-1",
                                    "delimiter-icon": "mdi-circle-slice-8"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(product.value.images, (img, i) => {
                                        return openBlock(), createBlock(_component_v_carousel_item, {
                                          key: i,
                                          src: img.src,
                                          "lazy-src": img.src,
                                          alt: img.alt
                                        }, null, 8, ["src", "lazy-src", "alt"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "sm:float-none sm:p-10 sm:w-full md:w-full" }, [
                                  createVNode("div", { class: "text-center justify-space-between sm:flex-none sm:md:flex" }, [
                                    createVNode(_component_v_btn, {
                                      class: "text-wrap <md:w-3/4 md:w-1/3 !font-semibold !text-green-600 !text-2x3 !hover:text-green-800",
                                      variant: "outlined",
                                      size: "x-large",
                                      style: { fontFamily: "Roboto Slab" },
                                      onClick: ($event) => heartClick(product.value, product.value.variants[product.value.variantNum])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-base" }, " Add to Cart ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode("p", {
                                      class: "<md:w-full <md:py-6 md:w-1/3 md:pt-2 text-center text-4xl font-semibold text-green-600",
                                      size: ""
                                    }, toDisplayString(unref(formatter).format(itemPrice(product.value.variants[product.value.variantNum]) / 100)), 1),
                                    createVNode("p", null, "Shipping Cost: " + toDisplayString(unref(formatter).format(itemShippingPrice(product.value.variants[product.value.variantNum]) / 100)), 1),
                                    createVNode(_component_NuxtLink, {
                                      to: "/shop/checkout",
                                      class: "<md:w-3/4 md:w-1/3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          class: "<md:w-3/4 w-full text-wrap !font-semibold !text-green-600 !text-2x3 !hover:text-green-800",
                                          variant: "outlined",
                                          size: "x-large",
                                          style: { fontFamily: "Roboto Slab" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "text-base" }, [
                                              createVNode(_component_v_icon, { class: "pr-3" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-cart ")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode("View Cart ")
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("p", {
                                    style: { fontFamily: "Roboto Slab" },
                                    class: "text-wrap text-xl text-justify py-10 <md:px-5",
                                    innerHTML: product.value.description
                                  }, null, 8, ["innerHTML"]),
                                  product.value.variants.length > 1 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "flex align-center"
                                  }, [
                                    createVNode(_component_v_select, {
                                      default: product.value.variants[product.value.variantNum].title,
                                      label: "Select a variant",
                                      items: product.value.variants,
                                      class: "",
                                      "onUpdate:modelValue": ($event) => changeProductVariantNum(product.value, $event)
                                    }, null, 8, ["default", "items", "onUpdate:modelValue"])
                                  ])) : createCommentVNode("", true)
                                ])
                              ])) : createCommentVNode("", true)
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
              createVNode(_component_v_row, { dense: "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-wrap" }, [
                        createVNode(_component_v_card, { class: "bg-white w-full text-wrap rounded-xl border flex m-5 p-2 shadow-xl" }, {
                          default: withCtx(() => [
                            product.value ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode(_component_v_card_title, { class: "bg-surface py-5" }, {
                                default: withCtx(() => [
                                  createVNode("p", {
                                    style: { fontFamily: "Roboto Slab" },
                                    class: "text-wrap text-5xl m-3 text-center"
                                  }, toDisplayString(product.value.title), 1)
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "sm:w-full sm:h-full sm:float-none flex md:w-1/3 md:float-left md:mr-10" }, [
                                createVNode(_component_v_carousel, {
                                  color: "primary-darken-1",
                                  "delimiter-icon": "mdi-circle-slice-8"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(product.value.images, (img, i) => {
                                      return openBlock(), createBlock(_component_v_carousel_item, {
                                        key: i,
                                        src: img.src,
                                        "lazy-src": img.src,
                                        alt: img.alt
                                      }, null, 8, ["src", "lazy-src", "alt"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "sm:float-none sm:p-10 sm:w-full md:w-full" }, [
                                createVNode("div", { class: "text-center justify-space-between sm:flex-none sm:md:flex" }, [
                                  createVNode(_component_v_btn, {
                                    class: "text-wrap <md:w-3/4 md:w-1/3 !font-semibold !text-green-600 !text-2x3 !hover:text-green-800",
                                    variant: "outlined",
                                    size: "x-large",
                                    style: { fontFamily: "Roboto Slab" },
                                    onClick: ($event) => heartClick(product.value, product.value.variants[product.value.variantNum])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-base" }, " Add to Cart ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode("p", {
                                    class: "<md:w-full <md:py-6 md:w-1/3 md:pt-2 text-center text-4xl font-semibold text-green-600",
                                    size: ""
                                  }, toDisplayString(unref(formatter).format(itemPrice(product.value.variants[product.value.variantNum]) / 100)), 1),
                                  createVNode("p", null, "Shipping Cost: " + toDisplayString(unref(formatter).format(itemShippingPrice(product.value.variants[product.value.variantNum]) / 100)), 1),
                                  createVNode(_component_NuxtLink, {
                                    to: "/shop/checkout",
                                    class: "<md:w-3/4 md:w-1/3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        class: "<md:w-3/4 w-full text-wrap !font-semibold !text-green-600 !text-2x3 !hover:text-green-800",
                                        variant: "outlined",
                                        size: "x-large",
                                        style: { fontFamily: "Roboto Slab" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-base" }, [
                                            createVNode(_component_v_icon, { class: "pr-3" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" mdi-cart ")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode("View Cart ")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("p", {
                                  style: { fontFamily: "Roboto Slab" },
                                  class: "text-wrap text-xl text-justify py-10 <md:px-5",
                                  innerHTML: product.value.description
                                }, null, 8, ["innerHTML"]),
                                product.value.variants.length > 1 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "flex align-center"
                                }, [
                                  createVNode(_component_v_select, {
                                    default: product.value.variants[product.value.variantNum].title,
                                    label: "Select a variant",
                                    items: product.value.variants,
                                    class: "",
                                    "onUpdate:modelValue": ($event) => changeProductVariantNum(product.value, $event)
                                  }, null, 8, ["default", "items", "onUpdate:modelValue"])
                                ])) : createCommentVNode("", true)
                              ])
                            ])) : createCommentVNode("", true)
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
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ShopFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.bf102e4b.mjs.map
