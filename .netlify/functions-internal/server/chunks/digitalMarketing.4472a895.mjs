import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> Same thing as social media marketing except with e-mails and google ads and say SEO a lot and upsell clients into building their entire site for like $50k-10k depending on complexity and whether or not I already have something similar. </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/business/digitalMarketing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const digitalMarketing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { digitalMarketing as default };
//# sourceMappingURL=digitalMarketing.4472a895.mjs.map
