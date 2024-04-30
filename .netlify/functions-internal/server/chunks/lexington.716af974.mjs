import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(` Our first home, and our first project. It was a success! We purchased this home from a property management company in 2018, and sold in December of 2021. This was our first home purchase. We put a lot of work into it, but there were clear areas for improvement and advancement. All things considered, we were very happy with the outcomes of this project, and it fueled an excitement to continue. We&#39;ve since spent our time studying real estate from every angle, learning the process from each perspective we could. It was time well spent, and holds many fun memories. `);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/realEstate/lexington.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lexington = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { lexington as default };
//# sourceMappingURL=lexington.716af974.mjs.map
