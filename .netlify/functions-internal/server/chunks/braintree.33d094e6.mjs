import { ssrInterpolate } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';
import { u as useCartDataStore } from './cartData.947fcc28.mjs';
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
import './index.a7d16411.mjs';

const _sfc_main = {
  __name: "braintree",
  __ssrInlineRender: true,
  setup(__props) {
    useCartDataStore();
    ref(null);
    const totalCost = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="dropin-container"></div><button id="submit-button"> Pay </button><p> Total Cost: ${ssrInterpolate(totalCost.value)}</p><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/braintree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=braintree.33d094e6.mjs.map
