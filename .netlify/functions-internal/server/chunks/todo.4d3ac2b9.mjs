import { _ as _sfc_main$1 } from './FirebaseUpload.a410d7d7.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "todo",
  __ssrInlineRender: true,
  setup(__props) {
    const todos = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FirebaseUpload = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><pre>${ssrInterpolate(todos.value)}</pre>`);
      _push(ssrRenderComponent(_component_FirebaseUpload, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/todo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=todo.4d3ac2b9.mjs.map
