import { _ as __nuxt_component_0$2 } from './server.mjs';
import { useSSRContext, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<!--[--> Our second project - another success! Pine Key Resort Condominiums We played a role in the management and conversion of rental units to owner occupied units. Major projects were undertaken, including the landscaping overhaul around the clubhouse, repairs and upgrades throughout dozens of units, and preparations are currently underway to develop townhomes on the remaining unencumbered lots. We were looking forward to being a part of the development of these townhomes, but have since shifted focus to our developments in `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog/location" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Panama`);
      } else {
        return [
          createTextVNode("Panama")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`. <!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/realEstate/pineKey.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pineKey = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { pineKey as default };
//# sourceMappingURL=pineKey.16b94984.mjs.map
