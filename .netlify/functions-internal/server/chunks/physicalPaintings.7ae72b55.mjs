import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(` A Rare Offering Physical Paintings by our artist, Ashley! Not many of these will be sold - I am selfish and have the intent to keep most of them. They are worth more to me than gold, and someday I will likely contact you with an offer to buy them back. Seriously. `);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/creative/art/physicalPaintings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const physicalPaintings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { physicalPaintings as default };
//# sourceMappingURL=physicalPaintings.7ae72b55.mjs.map
