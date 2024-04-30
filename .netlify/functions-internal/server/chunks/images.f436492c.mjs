import { ref, resolveComponent, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "images",
  __ssrInlineRender: true,
  setup(__props) {
    const imageData = ref();
    const imagePage = ref(1);
    const addData = async () => {
      const res = await $fetch(`/api/printify/images?page=${imagePage.value}`, { method: "GET" });
      imageData.value = res.data[0];
    };
    addData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_input = resolveComponent("v-input");
      const _component_v_text_field = resolveComponent("v-text-field");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_input, {
        modelValue: unref(imagePage),
        "onUpdate:modelValue": ($event) => isRef(imagePage) ? imagePage.value = $event : null,
        "text-field": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: unref(imagePage),
        "onUpdate:modelValue": ($event) => isRef(imagePage) ? imagePage.value = $event : null,
        label: "Page",
        placeholder: "Page (Temporary)",
        variant: "outlined",
        class: "",
        onChange: addData
      }, null, _parent));
      _push(`<pre>${ssrInterpolate(unref(imageData))}</pre><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/printify/images.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=images.f436492c.mjs.map
