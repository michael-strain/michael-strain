import { ref, useSSRContext } from 'vue';
import { ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const product = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--> This will be the product admiministration page. <div><h1>Product ${ssrInterpolate(_ctx.$route.params.id)}</h1><p>Product name: ${ssrInterpolate(product.value.title)}</p><p>Product price: ${ssrInterpolate(product.value.variants[0].price)}</p><br><p>Product: ${ssrInterpolate(product.value)}</p></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.af1031af.mjs.map
