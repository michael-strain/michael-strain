import { ref, watch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { u as useLazyAsyncData } from './asyncData.41ef76d1.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "tempCatalog",
  __ssrInlineRender: true,
  setup(__props) {
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
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "items-center justify-center text-center align-center align middle" }, _attrs))}>`);
      if (unref(pending)) {
        _push(`<div> Loading . . . </div>`);
      } else {
        _push(`<div> Fill this with the new cards full of product data :D Gonna do a for loop Gonna do streams Gonna do all kinds of cool shit to make this an infinitely scrollable, searchable, filterable, kickass products page <!--[-->`);
        ssrRenderList(unref(products).data, (item, index) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_v_card, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_v_card_title, null, {
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
                _push2(ssrRenderComponent(_component_v_card_subtitle, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.description)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.description), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.title), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_v_card_subtitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.description), 1)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/tempCatalog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tempCatalog.ee3a37bd.mjs.map
