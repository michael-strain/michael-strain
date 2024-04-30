import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(` La Vista Part 2: A Review of our first month in Panama. `);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/laVista2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const laVista2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { laVista2 as default };
//# sourceMappingURL=laVista2.cd8b3a67.mjs.map
