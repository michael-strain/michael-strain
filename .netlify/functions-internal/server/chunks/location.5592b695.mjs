import { _ as __nuxt_component_0$2 } from './server.mjs';
import { useSSRContext, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  _push(`<div${ssrRenderAttrs(_attrs)}> Locating Our Site Chiriqui Province, Panama Some of you may be disappointed to know that our development will not be taking place in the US at this time. Although we believe that it would soon be a very opportune time for acquisitions in the states, Panama offers a better climate (literally, and economically) for our current endeavors.  Allow me to briefly explain why. Panama is an incredible, magical paradise - ripe with opportunity, abundant with freedom and an industrious, accepting people that are eager to see their country blossom - so long as it is done with great care to preserve it&#39;s natural wonder. As of writing (Nov. 23, 2022) Ashley, Parker and myself have been in Panama for almost 1 month. It&#39;s hard to believe how quickly the time has passed, and each day has been full to the brim. Most days, we are exploring, networking, and researching from the time we wake up til the time we fall asleep. In the time we&#39;ve been here, we&#39;ve been from coast to coast, east to west, low and high. We&#39;ve seen every major city in the country, and spent at least a few days in most of them talking to people and learning everything we can. Read the more personal details `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog/laVista" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`here`);
      } else {
        return [
          createTextVNode("here")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` if you are into that sort of thing, or continue reading for some tidbits about the more professional oriented side of things. It&#39;s impossible to put what we&#39;ve experienced into words - and all the pictures and videos in the world won&#39;t do it any justice. This is a place you have to see to believe it. The climate is truly perfect for growth, and we are confident that we&#39;ve found the place to root-in. From tropical lowlands to lush cloud-forests, bustling cities to backroad villages, Chiriqui province has something for everyone - and it&#39;s never far from an aggressively expanding infrastructure. We&#39;ve seen fiber internet availability in rural communities. New roads are being paved everyday, and with expert consideration for the management of the province&#39;s frequent rains. Cell phone service is always available, even in the mountains - and we are paying ~$28/mo for unlimited data. The towns and villages are already self-sufficient, with markets and produce stands producing their own fruit, vegetables, and livestock typically within just a few miles from where they are sold. Sustainable electrical generation is already rapidly growing, with new solar fields and wind turbines popping up each day (and the power companies bill an unexpectedly affordable rate). The best part is, everything here is affordable. That includes construction materials, land, skilled and unskilled labor, food, gas, etc. In fact, the only things we have been disappointed by were products imported from the US. Panamanian currency may be tied to the dollar (actual US Dollars are used), the value of that dollar holds far more weight here. The next for us is to finalize a deal with a land-owner. We have a pretty vast selection, but we have narrowed our search down to a very specific region based on it&#39;s elevation and proximity to local points of interest. As we continue to make progress, updates will be posted here and on our YouTube channel. I&#39;m not a pro when it comes to video work, and I need to predominantly utilize my time for the good of the development project, but I&#39;ll try to keep our content relevant, informative, and hopefully entertaining. Stay tuned! </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/location.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const location = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { location as default };
//# sourceMappingURL=location.5592b695.mjs.map
