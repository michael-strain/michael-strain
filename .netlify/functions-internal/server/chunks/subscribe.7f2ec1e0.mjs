import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_card = resolveComponent("v-card");
  _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "flex-grow h-full w-full" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, { class: "h-full" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h3 class="text-black justify-center text-center align-center font-bold text-5xl my-10" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" })}"${_scopeId2}> NEWSLETTER SUBSCRIPTION </h3><iframe class="p-5 m-5" width="540" height="1000" src="https://1ed9d584.sibforms.com/serve/MUIEAFrEzm8GUf0DvPocOKUS9o7gzB803YWCH66TtVwfOQVI46Y4s6l3t80uzYXTxLOc4nEXbE2LpqI2VWOLlW72joY9-ANnRdpj4A8AICuD_U79_av5DqpjtxDxi5WwW62t1x-NpUYD0LGG6mkczBJxDqmwRuJtxC5sgBiKMCsO9x1jIgxmHejG_lPOiHnbiYyg2mUeRpRCPRsR" frameborder="0" scrolling="auto" allowfullscreen style="${ssrRenderStyle({ "display": "block", "margin-left": "auto", "margin-right": "auto", "max-width": "100%" })}"${_scopeId2}></iframe>`);
            } else {
              return [
                createVNode("h3", {
                  class: "text-black justify-center text-center align-center font-bold text-5xl my-10",
                  style: { fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" }
                }, " NEWSLETTER SUBSCRIPTION ", 4),
                createVNode("iframe", {
                  class: "p-5 m-5",
                  width: "540",
                  height: "1000",
                  src: "https://1ed9d584.sibforms.com/serve/MUIEAFrEzm8GUf0DvPocOKUS9o7gzB803YWCH66TtVwfOQVI46Y4s6l3t80uzYXTxLOc4nEXbE2LpqI2VWOLlW72joY9-ANnRdpj4A8AICuD_U79_av5DqpjtxDxi5WwW62t1x-NpUYD0LGG6mkczBJxDqmwRuJtxC5sgBiKMCsO9x1jIgxmHejG_lPOiHnbiYyg2mUeRpRCPRsR",
                  frameborder: "0",
                  scrolling: "auto",
                  allowfullscreen: "",
                  style: { "display": "block", "margin-left": "auto", "margin-right": "auto", "max-width": "100%" }
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card, { class: "h-full" }, {
            default: withCtx(() => [
              createVNode("h3", {
                class: "text-black justify-center text-center align-center font-bold text-5xl my-10",
                style: { fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" }
              }, " NEWSLETTER SUBSCRIPTION ", 4),
              createVNode("iframe", {
                class: "p-5 m-5",
                width: "540",
                height: "1000",
                src: "https://1ed9d584.sibforms.com/serve/MUIEAFrEzm8GUf0DvPocOKUS9o7gzB803YWCH66TtVwfOQVI46Y4s6l3t80uzYXTxLOc4nEXbE2LpqI2VWOLlW72joY9-ANnRdpj4A8AICuD_U79_av5DqpjtxDxi5WwW62t1x-NpUYD0LGG6mkczBJxDqmwRuJtxC5sgBiKMCsO9x1jIgxmHejG_lPOiHnbiYyg2mUeRpRCPRsR",
                frameborder: "0",
                scrolling: "auto",
                allowfullscreen: "",
                style: { "display": "block", "margin-left": "auto", "margin-right": "auto", "max-width": "100%" }
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/subscribe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const subscribe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { subscribe as default };
//# sourceMappingURL=subscribe.7f2ec1e0.mjs.map
