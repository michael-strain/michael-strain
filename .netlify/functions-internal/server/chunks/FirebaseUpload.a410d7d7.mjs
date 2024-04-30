import { ref, resolveComponent, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "FirebaseUpload",
  __ssrInlineRender: true,
  emits: ["fileChange", "fileUploading"],
  setup(__props, { emit: emits }) {
    ref();
    const fileUploading = ref(false);
    async function onFileChange(e) {
      const file = e.target.files[0];
      console.log(file);
      if (!file)
        return;
      const readData = async (f) => new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsBinaryString(f);
      });
      await readData(file);
      const url = URL.createObjectURL(file);
      file.value = url.replace("blob:", "");
      emits("fileChange", file.name, file.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_file_input = resolveComponent("v-file-input");
      const _component_v_progress_circular = resolveComponent("v-progress-circular");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_file_input, {
              chips: "",
              multiple: "",
              label: "File input w/ chips",
              onChange: onFileChange
            }, null, _parent2, _scopeId));
            if (fileUploading.value) {
              _push2(ssrRenderComponent(_component_v_progress_circular, { indeterminate: "" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full" }, [
                createVNode(_component_v_file_input, {
                  chips: "",
                  multiple: "",
                  label: "File input w/ chips",
                  onChange: onFileChange
                }),
                fileUploading.value ? (openBlock(), createBlock(_component_v_progress_circular, {
                  key: 0,
                  indeterminate: ""
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FirebaseUpload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FirebaseUpload.a410d7d7.mjs.map
