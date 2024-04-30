import { e as useRoute } from './server.mjs';
import { ref, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const pageOrder = ref({});
    const route = useRoute();
    route.params.id;
    useOrderDataStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_title = resolveComponent("v-title");
      const _component_v_subtitle = resolveComponent("v-subtitle");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Some shit.`);
                } else {
                  return [
                    createTextVNode("Some shit.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_subtitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(pageOrder.value.id)} ${ssrInterpolate(pageOrder.value.status)} ${ssrInterpolate(pageOrder.value.userInfo)} ${ssrInterpolate(pageOrder.value.shippingInfo)} ${ssrInterpolate(pageOrder.value.billingInfo)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(pageOrder.value.id) + " " + toDisplayString(pageOrder.value.status) + " " + toDisplayString(pageOrder.value.userInfo) + " " + toDisplayString(pageOrder.value.shippingInfo) + " " + toDisplayString(pageOrder.value.billingInfo), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_title, null, {
                default: withCtx(() => [
                  createTextVNode("Some shit.")
                ]),
                _: 1
              }),
              createVNode(_component_v_subtitle, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(pageOrder.value.id) + " " + toDisplayString(pageOrder.value.status) + " " + toDisplayString(pageOrder.value.userInfo) + " " + toDisplayString(pageOrder.value.shippingInfo) + " " + toDisplayString(pageOrder.value.billingInfo), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/orders/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.c29d2c44.mjs.map
