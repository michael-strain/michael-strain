import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './ShopFooter.a164084a.mjs';
import { _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useProductDataStore();
    const cart = useCartDataStore();
    const user = useUserDataStore();
    const heart = ref((variant) => {
      if (variant.cartQty > 0) {
        return "mdi-cards-heart";
      } else {
        return "mdi-cards-heart-outline";
      }
    });
    const products = ref([]);
    const loaded = ref(false);
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    function heartClick(item, variant) {
      const cart2 = useCartDataStore();
      let thisItemInCart = false;
      let thisVariantInCart = false;
      let otherVariants = false;
      let otherItems = false;
      let itemIndex = null;
      let variantIndex = null;
      if (cart2.cartData.length == 0) {
        variant.cartQty = 1;
        variant.inCart = true;
        item.variants[item.variantNum] = variant;
        cart2.$patch(cart2.cartData[0] = item);
        return;
      }
      cartLoop:
        for (let i = 0; i < cart2.cartData.length; i++) {
          if (cart2.cartData[i].id != item.id) {
            otherItems = true;
          }
          if (cart2.cartData[i].id == item.id) {
            thisItemInCart = true;
            variantLoop:
              for (let j = 0; j < cart2.cartData[i].variants.length; j++) {
                if (cart2.cartData[i].variants[j].cartQty > 0 && cart2.cartData[i].variants[j].id != variant.id) {
                  otherVariants = true;
                }
                if (cart2.cartData[i].variants[j].cartQty > 0 && cart2.cartData[i].variants[j].id == variant.id) {
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
        cart2.$patch(cart2.cartData[cart2.cartData.length] = item);
        return;
      }
      if (thisItemInCart && thisVariantInCart) {
        console.log("This item and this variant are in cart.");
        if (!otherVariants) {
          console.log("This is the only variant of this item in cart - Scenario 3a");
          variant.cartQty = 0;
          variant.inCart = false;
          item.variants[item.variantNum] = variant;
          cart2.$patch(cart2.cartData[itemIndex].variants[variantIndex] = variant);
          cart2.cartData.splice(itemIndex, 1);
          cart2.$patch({ cartData: cart2.cartData });
          return;
        }
        if (otherVariants) {
          console.log("There are other variants of this item in cart - Scenario 3b");
          variant.cartQty = 0;
          variant.inCart = false;
          item.variants[item.variantNum] = variant;
          cart2.$patch(cart2.cartData[itemIndex].variants[variantIndex] = variant);
          cart2.cartData.splice(itemIndex, 1);
          cart2.$patch({ cartData: cart2.cartData });
          return;
        }
      }
      if (!thisItemInCart && otherItems) {
        console.log("This item is not in cart, but other items are, add this item (and variant) to cart");
        variant.cartQty = 1;
        variant.inCart = true;
        item.variants[item.variantNum] = variant;
        cart2.$patch(cart2.cartData[cart2.cartData.length] = item);
        return;
      }
    }
    const itemPrice = function(variant) {
      console.log("User Country: " + user.userData.shippingInfo.country);
      let sProfile = false;
      for (let i = 0; i < variant.shippingProfile.length; i++) {
        console.log("I am shipping profile #: " + i);
        for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
          console.log("I am country #(" + j + "):" + variant.shippingProfile[i].countries[j]);
          if (variant.shippingProfile[i].countries[j] == user.userData.shippingInfo.country) {
            console.log("Setting shipping profile!");
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
    function leftVariantArrow(item) {
      const store = useProductDataStore();
      const cart2 = useCartDataStore();
      let variantId = item.variantNum;
      if (variantId > 0) {
        variantId--;
      } else {
        variantId = item.variants.length - 1;
      }
      for (let i = 0; i < store.productData.length; i++) {
        if (store.productData[i].id === item.id) {
          store.$patch(store.productData[i].variantNum = variantId);
          for (let j = 0; j < cart2.cartData.length; j++) {
            if (cart2.cartData[j].id == store.productData[i].id) {
              cart2.$patch(cart2.cartData[j].variantNum = variantId);
            }
          }
          products.value = store.productData;
          return;
        }
      }
    }
    function rightVariantArrow(item) {
      const store = useProductDataStore();
      const cart2 = useCartDataStore();
      let variantId = item.variantNum;
      if (variantId < item.variants.length - 1) {
        variantId++;
      } else {
        variantId = 0;
      }
      for (let i = 0; i < store.productData.length; i++) {
        if (store.productData[i].id === item.id) {
          store.$patch(store.productData[i].variantNum = variantId);
          for (let j = 0; j < cart2.cartData.length; j++) {
            if (cart2.cartData[j].id == store.productData[i].id) {
              cart2.$patch(cart2.cartData[j].variantNum = variantId);
            }
          }
          products.value = store.productData;
          return;
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShopHeader = __nuxt_component_0;
      const _component_v_card = resolveComponent("v-card");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_carousel = resolveComponent("v-carousel");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_carousel_item = resolveComponent("v-carousel-item");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_ShopFooter = __nuxt_component_2;
      _push(`<!--[--><div class="bg-image img-opacity-40 bg-repeat" style="${ssrRenderStyle({ "background-image": "url('../img/purple-mushroom.jpg')" })}"><div class=""><div class="">`);
      _push(ssrRenderComponent(_component_ShopHeader, null, null, _parent));
      _push(`<p class="text-white p-5 flex flex-wrap justify-center text-center align-center text-2xl" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "2px 3px 0px purple, 0px 0px 6px black" })}"> Welcome to L.S.Dope. All of the art you see was created by independent artists. We hope you find something you love! </p><div class="flex flex-wrap items-center align-center justify-center">`);
      if (loaded.value) {
        _push(`<div class="flex flex-wrap items-center align-center justify-center w-full"><!--[-->`);
        ssrRenderList(products.value, (item, product) => {
          _push(`<div class="flex items-center align-center justify-center">`);
          _push(ssrRenderComponent(_component_v_card, { class: "w-80 text-wrap rounded-xl border flex m-5 p-2 h-450px" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="static h-0"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_v_btn, {
                  rounded: "",
                  class: "absolute top-5 left-40 z-50",
                  transition: "fade-transition",
                  onClick: ($event) => heartClick(item, item.variants[item.variantNum])
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="p-1 text-xl"${_scopeId2}>${ssrInterpolate(unref(formatter).format(itemPrice(item.variants[item.variantNum]) / 100))} `);
                      _push3(ssrRenderComponent(_component_v_icon, {
                        icon: heart.value(item.variants[item.variantNum])
                      }, null, _parent3, _scopeId2));
                      _push3(`</p>`);
                    } else {
                      return [
                        createVNode("p", {
                          style: { fontFamily: "Roboto Slab" },
                          class: "p-1 text-xl"
                        }, [
                          createTextVNode(toDisplayString(unref(formatter).format(itemPrice(item.variants[item.variantNum]) / 100)) + " ", 1),
                          createVNode(_component_v_icon, {
                            icon: heart.value(item.variants[item.variantNum])
                          }, null, 8, ["icon"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_v_carousel, {
                  height: "320",
                  "show-arrows": "hover",
                  color: "primary-darken-1",
                  "hide-delimiter-background": "",
                  "delimiter-icon": "mdi-circle-slice-8",
                  class: "pt-0 mt-0"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(item.images, (img, i) => {
                              _push4(ssrRenderComponent(_component_v_carousel_item, {
                                key: i,
                                src: img.src,
                                "lazy-src": img.src,
                                alt: img.alt
                              }, null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.images, (img, i) => {
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
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, { to: "" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.images, (img, i) => {
                              return openBlock(), createBlock(_component_v_carousel_item, {
                                key: i,
                                src: img.src,
                                "lazy-src": img.src,
                                alt: img.alt
                              }, null, 8, ["src", "lazy-src", "alt"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="h-100 justify-center text-center align-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: "/shop/product/" + item.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_v_card_title, { class: "text-wrap max-width-full" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="text-2xl"${_scopeId3}>${ssrInterpolate(item.title)}</p>`);
                          } else {
                            return [
                              createVNode("p", {
                                style: { fontFamily: "Roboto Slab" },
                                class: "text-2xl"
                              }, toDisplayString(item.title), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_v_card_title, { class: "text-wrap max-width-full" }, {
                          default: withCtx(() => [
                            createVNode("p", {
                              style: { fontFamily: "Roboto Slab" },
                              class: "text-2xl"
                            }, toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_v_card_subtitle, { class: "pb-3 max-width-full" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="text-xl text-center"${_scopeId2}>`);
                      if (item.variants.length > 1) {
                        _push3(ssrRenderComponent(_component_v_btn, {
                          variant: "text",
                          icon: "",
                          onClick: ($event) => leftVariantArrow(item)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-chevron-left" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(` ${ssrInterpolate(item.variants[item.variantNum].title)} `);
                      if (item.variants.length > 1) {
                        _push3(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          variant: "text",
                          onClick: ($event) => rightVariantArrow(item)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-chevron-right" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</p>`);
                    } else {
                      return [
                        createVNode("p", {
                          style: { fontFamily: "Roboto Slab" },
                          class: "text-xl text-center"
                        }, [
                          item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                            key: 0,
                            variant: "text",
                            icon: "",
                            onClick: ($event) => leftVariantArrow(item)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(item.variants[item.variantNum].title) + " ", 1),
                          item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                            key: 1,
                            icon: "",
                            variant: "text",
                            onClick: ($event) => rightVariantArrow(item)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "static h-0" }, [
                    createVNode(_component_v_btn, {
                      rounded: "",
                      class: "absolute top-5 left-40 z-50",
                      transition: "fade-transition",
                      onClick: ($event) => heartClick(item, item.variants[item.variantNum])
                    }, {
                      default: withCtx(() => [
                        createVNode("p", {
                          style: { fontFamily: "Roboto Slab" },
                          class: "p-1 text-xl"
                        }, [
                          createTextVNode(toDisplayString(unref(formatter).format(itemPrice(item.variants[item.variantNum]) / 100)) + " ", 1),
                          createVNode(_component_v_icon, {
                            icon: heart.value(item.variants[item.variantNum])
                          }, null, 8, ["icon"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  createVNode(_component_v_carousel, {
                    height: "320",
                    "show-arrows": "hover",
                    color: "primary-darken-1",
                    "hide-delimiter-background": "",
                    "delimiter-icon": "mdi-circle-slice-8",
                    class: "pt-0 mt-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, { to: "" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.images, (img, i) => {
                            return openBlock(), createBlock(_component_v_carousel_item, {
                              key: i,
                              src: img.src,
                              "lazy-src": img.src,
                              alt: img.alt
                            }, null, 8, ["src", "lazy-src", "alt"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("div", { class: "h-100 justify-center text-center align-center" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/shop/product/" + item.id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-wrap max-width-full" }, {
                          default: withCtx(() => [
                            createVNode("p", {
                              style: { fontFamily: "Roboto Slab" },
                              class: "text-2xl"
                            }, toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createVNode(_component_v_card_subtitle, { class: "pb-3 max-width-full" }, {
                      default: withCtx(() => [
                        createVNode("p", {
                          style: { fontFamily: "Roboto Slab" },
                          class: "text-xl text-center"
                        }, [
                          item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                            key: 0,
                            variant: "text",
                            icon: "",
                            onClick: ($event) => leftVariantArrow(item)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(item.variants[item.variantNum].title) + " ", 1),
                          item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                            key: 1,
                            icon: "",
                            variant: "text",
                            onClick: ($event) => rightVariantArrow(item)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_ShopFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.64901267.mjs.map
