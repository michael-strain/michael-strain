import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './ShopFooter.a164084a.mjs';
import { ref, resolveComponent, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
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
import './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {
  __name: "faqs",
  __ssrInlineRender: true,
  setup(__props) {
    const someData = ref([
      {
        "id": 0,
        "title": "Refund and Replacement Policy",
        "paragraph": "If you have an issue with your order, contact our support team directly within seven days of product delivery. Please provide a detailed description of your issue, accompanied by relevant photo or video evidence that support your case. Products are unique and produced to order, therefore, they are non-refundable."
      },
      {
        "id": 1,
        "title": "Shipping and Delivery",
        "paragraph": "Shipping times are estimated average times and are in no way guaranteed. If your order takes more than ten days to be delivered, please contact our support team."
      },
      {
        "id": 2,
        "title": "Incorrect Delivery Address",
        "paragraph": "If an order is returned to due to an incorrect address, you will be contacted to arrange a reshipment. You will be liable for the reshipment costs and service fees. The service fee covers any Charge On Delivery (C.O.D) fees that we get charged by the fulfillment operator and handling fees. Packages will be donated after one week if we are not provided with a valid address for the reshipment."
      },
      {
        "title": "Contact L.S.Dope Support",
        "paragraph": "For any questions, comments, or concerns, please send an email to ashley.n.strain@gmail.com."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShopHeader = __nuxt_component_0;
      const _component_v_card = resolveComponent("v-card");
      const _component_h = resolveComponent("h");
      const _component_v_container = resolveComponent("v-container");
      const _component_ShopFooter = __nuxt_component_2;
      _push(`<!--[--><div class="bg-image bg-repeat h-fill" style="${ssrRenderStyle({ "background-image": "url('../img/purple-mushroom.jpg')" })}">`);
      _push(ssrRenderComponent(_component_ShopHeader, null, null, _parent));
      _push(`<div class="d-flex justify-center align-center">`);
      _push(ssrRenderComponent(_component_v_card, { class: "w-1/2 <lg:w-3/4 flex m-10 opacity-80" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(someData.value, (item) => {
              _push2(`<div class="pt-7 px-7 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_h, {
                class: "text-2xl font-bold",
                style: { fontFamily: "Roboto Slab" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<p class="text-justify pt-2 text-primary-darken-1"${_scopeId}>${ssrInterpolate(item.paragraph)}</p></div>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_v_container, { class: "text-center flex justify-center" }, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(someData.value, (item) => {
                return openBlock(), createBlock("div", {
                  key: item.id,
                  class: "pt-7 px-7 text-center"
                }, [
                  createVNode(_component_h, {
                    class: "text-2xl font-bold",
                    style: { fontFamily: "Roboto Slab" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.title), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("p", { class: "text-justify pt-2 text-primary-darken-1" }, toDisplayString(item.paragraph), 1)
                ]);
              }), 128)),
              createVNode(_component_v_container, { class: "text-center flex justify-center" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ShopFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/faqs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faqs.cb8e0a22.mjs.map
