import { e as useRoute, _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { getAuth } from 'firebase/auth';
import { u as useOrderDataStore } from './orderData.d1183d9d.mjs';
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
    const auth = getAuth();
    const pageOrder = ref([]);
    let idBool = false;
    useOrderDataStore();
    const route = useRoute();
    const orderId = route.query.id;
    try {
      if (orderId.length > 0) {
        idBool = true;
      }
    } catch (e) {
      console.log("No ID found, going to display all of this user's orders.");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_card = resolveComponent("v-card");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_btn = resolveComponent("v-btn");
      if (unref(auth).currentUser) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_v_container, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(pageOrder.value, (order, item) => {
                _push2(ssrRenderComponent(_component_v_card, { key: item }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<br${_scopeId2}><br${_scopeId2}><br${_scopeId2}><p${_scopeId2}> ID: ${ssrInterpolate(order.id)}<br${_scopeId2}> Status: ${ssrInterpolate(order.status)}<br${_scopeId2}><br${_scopeId2}> UserInfo: ${ssrInterpolate(order.userInfo)}<br${_scopeId2}><br${_scopeId2}> ShippingInfo: ${ssrInterpolate(order.shippingInfo)}<br${_scopeId2}><br${_scopeId2}> BillingInfo: ${ssrInterpolate(order.billingInfo)}</p>`);
                    } else {
                      return [
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("p", null, [
                          createTextVNode(" ID: " + toDisplayString(order.id), 1),
                          createVNode("br"),
                          createTextVNode(" Status: " + toDisplayString(order.status), 1),
                          createVNode("br"),
                          createVNode("br"),
                          createTextVNode(" UserInfo: " + toDisplayString(order.userInfo), 1),
                          createVNode("br"),
                          createVNode("br"),
                          createTextVNode(" ShippingInfo: " + toDisplayString(order.shippingInfo), 1),
                          createVNode("br"),
                          createVNode("br"),
                          createTextVNode(" BillingInfo: " + toDisplayString(order.billingInfo), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(pageOrder.value, (order, item) => {
                  return openBlock(), createBlock(_component_v_card, { key: item }, {
                    default: withCtx(() => [
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("p", null, [
                        createTextVNode(" ID: " + toDisplayString(order.id), 1),
                        createVNode("br"),
                        createTextVNode(" Status: " + toDisplayString(order.status), 1),
                        createVNode("br"),
                        createVNode("br"),
                        createTextVNode(" UserInfo: " + toDisplayString(order.userInfo), 1),
                        createVNode("br"),
                        createVNode("br"),
                        createTextVNode(" ShippingInfo: " + toDisplayString(order.shippingInfo), 1),
                        createVNode("br"),
                        createVNode("br"),
                        createTextVNode(" BillingInfo: " + toDisplayString(order.billingInfo), 1)
                      ])
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
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_btn, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Login`);
                  } else {
                    return [
                      createTextVNode("Login")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_btn, null, {
                  default: withCtx(() => [
                    createTextVNode("Login")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.dde3cf54.mjs.map
