import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="page"><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div></div><h2 class="text"> LSDope </h2><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reference/activetest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const activetest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { activetest as default };
//# sourceMappingURL=activetest.3ff272a8.mjs.map
