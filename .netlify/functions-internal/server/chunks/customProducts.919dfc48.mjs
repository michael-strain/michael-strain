import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(` Custom Products See something you like in the store but want to make it your own? Personalize anything, or contact us about whitelabel opportunities. `);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/creative/art/customProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customProducts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { customProducts as default };
//# sourceMappingURL=customProducts.919dfc48.mjs.map
