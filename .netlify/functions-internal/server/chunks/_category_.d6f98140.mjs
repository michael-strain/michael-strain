import { _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, watch, resolveComponent, withCtx, createVNode, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { u as useLazyAsyncData } from './asyncData.41ef76d1.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "[category]",
  __ssrInlineRender: true,
  setup(__props) {
    function heartClick() {
      console.log("Heart was clicked");
    }
    function leftArrow() {
      console.log("Left arrow clicked");
    }
    function rightArrow() {
      console.log("Right arrow clicked");
    }
    const show = ref(true);
    const shopId = "6483145";
    const baseUrl = `https://api.printify.com/v1/shops/${shopId}`;
    const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q";
    const getProductsQuery = `/products.json`;
    const params = ref("");
    baseUrl + params.value;
    const options = {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    };
    const { pending, data: products } = useLazyAsyncData("products", () => $fetch(`${baseUrl}${getProductsQuery}`, options));
    watch(products, (newProduct) => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate(_ctx.$route.params)} <div class="w-full p-0 m-0">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="justify-center text-center align-center font-bold text-5xl mb-10" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" })}"${_scopeId}> SHOP </h3>`);
          } else {
            return [
              createVNode("h3", {
                class: "justify-center text-center align-center font-bold text-5xl mb-10",
                style: { fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" }
              }, " SHOP ", 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="text-green-400 m-5 text-lg flex flex-wrap justify-center text-center align-center text-lg" style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}"><li class="m-3 hover:text-green-600">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop/products/puzzles" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`PUZZLES`);
          } else {
            return [
              createTextVNode("PUZZLES")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="m-3 hover:text-green-600">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop/products/towels" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`TOWELS`);
          } else {
            return [
              createTextVNode("TOWELS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="m-3 hover:text-green-600">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop/products/cups" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`CUPS`);
          } else {
            return [
              createTextVNode("CUPS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="m-3 hover:text-green-600">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ALL`);
          } else {
            return [
              createTextVNode("ALL")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="flex flex-wrap items-center align-center justify-center">`);
      if (unref(pending)) {
        _push(`<div> Loading . . . </div>`);
      } else {
        _push(`<div class="flex flex-wrap items-center align-center justify-center w-full"><!--[-->`);
        ssrRenderList(unref(products).data, (item, index) => {
          _push(`<div class="flex items-center align-center justify-center">`);
          if (_ctx.$route.params in item.tags) {
            _push(`<div>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/shop/product/${item.id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_v_card, { class: "w-80 text-wrap rounded-xl border shadow-md flex m-5 p-2" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<img${ssrRenderAttr("src", `${item.images[0].src}`)} class="h-64 mx-auto"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_v_card_title, { class: "bg-gray-100 text-wrap max-width-full justify-center text-center align-center" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="text-wrap text-2xl"${_scopeId3}>${ssrInterpolate(item.title)}</p>`);
                            } else {
                              return [
                                createVNode("p", {
                                  style: { fontFamily: "Roboto Slab" },
                                  class: "text-wrap text-2xl"
                                }, toDisplayString(item.title), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`<div class="bg-gray-100 d-flex items-center justify-center text-center align-center m-0"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_v_card_actions, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_v_btn, {
                                icon: "",
                                onClick: leftArrow
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-chevron-left" }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_v_btn, {
                                icon: "",
                                onClick: ($event) => {
                                  show.value = !show.value;
                                  heartClick();
                                }
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_v_icon, null, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(show.value ? "mdi-cards-heart-outline" : "mdi-cards-heart")}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(show.value ? "mdi-cards-heart-outline" : "mdi-cards-heart"), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(show.value ? "mdi-cards-heart-outline" : "mdi-cards-heart"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_v_btn, {
                                icon: "",
                                onClick: rightArrow
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-chevron-right" }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  icon: "",
                                  onClick: leftArrow
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  icon: "",
                                  onClick: ($event) => {
                                    show.value = !show.value;
                                    heartClick();
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(show.value ? "mdi-cards-heart-outline" : "mdi-cards-heart"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  icon: "",
                                  onClick: rightArrow
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: `${item.images[0].src}`,
                            class: "h-64 mx-auto"
                          }, null, 8, ["src"]),
                          createVNode(_component_v_card_title, { class: "bg-gray-100 text-wrap max-width-full justify-center text-center align-center" }, {
                            default: withCtx(() => [
                              createVNode("p", {
                                style: { fontFamily: "Roboto Slab" },
                                class: "text-wrap text-2xl"
                              }, toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", { class: "bg-gray-100 d-flex items-center justify-center text-center align-center m-0" }, [
                            createVNode(_component_v_card_actions, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  icon: "",
                                  onClick: leftArrow
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  icon: "",
                                  onClick: ($event) => {
                                    show.value = !show.value;
                                    heartClick();
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(show.value ? "mdi-cards-heart-outline" : "mdi-cards-heart"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  icon: "",
                                  onClick: rightArrow
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
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
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_v_card, { class: "w-80 text-wrap rounded-xl border shadow-md flex m-5 p-2" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: `${item.images[0].src}`,
                          class: "h-64 mx-auto"
                        }, null, 8, ["src"]),
                        createVNode(_component_v_card_title, { class: "bg-gray-100 text-wrap max-width-full justify-center text-center align-center" }, {
                          default: withCtx(() => [
                            createVNode("p", {
                              style: { fontFamily: "Roboto Slab" },
                              class: "text-wrap text-2xl"
                            }, toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "bg-gray-100 d-flex items-center justify-center text-center align-center m-0" }, [
                          createVNode(_component_v_card_actions, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                icon: "",
                                onClick: leftArrow
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                icon: "",
                                onClick: ($event) => {
                                  show.value = !show.value;
                                  heartClick();
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(show.value ? "mdi-cards-heart-outline" : "mdi-cards-heart"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_v_btn, {
                                icon: "",
                                onClick: rightArrow
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<p> No products found. </p>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/products/[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_category_.d6f98140.mjs.map
