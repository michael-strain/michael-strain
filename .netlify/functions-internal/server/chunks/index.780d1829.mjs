import { b as useNuxtApp, _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { getAuth } from 'firebase/auth';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    getAuth();
    const loadAdminProducts = ref(false);
    const products = ref();
    const displayAddProductCard = ref(false);
    ref(false);
    const refreshPrintifyProducts = async () => {
      console.log("Refreshing Printify Products");
      const { result } = await $fetch("/api/printify/products", { method: "GET" });
      console.log(result);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      if (loadAdminProducts.value) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_v_btn, { onClick: refreshPrintifyProducts }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`ReFetch Printify Products`);
            } else {
              return [
                createTextVNode("ReFetch Printify Products")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/admin/product/create" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_btn, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Add Product`);
                  } else {
                    return [
                      createTextVNode("Add Product")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_btn, null, {
                  default: withCtx(() => [
                    createTextVNode("Add Product")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (displayAddProductCard.value) {
          _push(ssrRenderComponent(_component_v_card, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_v_card_title, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Add a Product to Printify`);
                    } else {
                      return [
                        createTextVNode("Add a Product to Printify")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createTextVNode("Add a Product to Printify")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_v_list, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(products.value, (product) => {
                _push2(ssrRenderComponent(_component_v_list_item, {
                  key: product.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_v_list_item_title, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(product.title)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(product.title), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_v_list_item_title, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(product.variants[0].price)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(product.variants[0].price), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: "/admin/product/" + product.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`Edit Product`);
                                } else {
                                  return [
                                    createTextVNode("Edit Product")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("Edit Product")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(product.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(product.variants[0].price), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_NuxtLink, {
                          to: "/admin/product/" + product.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createTextVNode("Edit Product")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(products.value, (product) => {
                  return openBlock(), createBlock(_component_v_list_item, {
                    key: product.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_title, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(product.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_v_list_item_title, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(product.variants[0].price), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_NuxtLink, {
                        to: "/admin/product/" + product.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("Edit Product")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/printify/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.780d1829.mjs.map
