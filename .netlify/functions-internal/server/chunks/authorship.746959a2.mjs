import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> I can write. Ash can write. I can edit. Seems like an easy way to earn some income when time is available. Otherwise work can be delegated to freelancers or locals and we can operate as quality control until things are up and running smoothly. </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/creative/authorship.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const authorship = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { authorship as default };
//# sourceMappingURL=authorship.746959a2.mjs.map
