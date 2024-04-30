import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(` Housekeeping, Housesitting, Cleaning Services `);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/realEstate/homeCare.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeCare = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { homeCare as default };
//# sourceMappingURL=homeCare.47b74407.mjs.map
