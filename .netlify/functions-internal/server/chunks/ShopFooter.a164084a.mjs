import { _ as __nuxt_component_0$2 } from './server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext, resolveComponent, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: "/shop" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="pt-10 text-white justify-center text-center align-center font-bold text-6xl" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "2px 4px 2px purple, 0px 0px 10px black" })}"${_scopeId}> L.S.DOPE </h3>`);
      } else {
        return [
          createVNode("h3", {
            class: "pt-10 text-white justify-center text-center align-center font-bold text-6xl",
            style: { fontFamily: "Roboto Slab", textShadow: "2px 4px 2px purple, 0px 0px 10px black" }
          }, " L.S.DOPE ")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShopHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div justify="center" class="text-center m-5 h-auto"${_scopeId}><strong${_scopeId}>\xA9 L.S.Dope - Strain Investment Co.</strong><br${_scopeId}><div class="mb-1"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/shop/faqs",
          class: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Contact Us `);
            } else {
              return [
                createTextVNode(" Contact Us ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/shop/faqs",
          class: "p-5"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Frequently Asked Questions `);
            } else {
              return [
                createTextVNode(" Frequently Asked Questions ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Website Developer `);
            } else {
              return [
                createTextVNode(" Website Developer ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><p class="text-xs text-wrap"${_scopeId}> All content is owned solely by Michael Strain and/or his companies, and shall not be used or reproduced without prior written consent.<br${_scopeId}>All Rights Reserved. </p></div>`);
      } else {
        return [
          createVNode("div", {
            justify: "center",
            class: "text-center m-5 h-auto"
          }, [
            createVNode("strong", null, "\xA9 L.S.Dope - Strain Investment Co."),
            createVNode("br"),
            createVNode("div", { class: "mb-1" }, [
              createVNode(_component_NuxtLink, {
                to: "/shop/faqs",
                class: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" Contact Us ")
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, {
                to: "/shop/faqs",
                class: "p-5"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Frequently Asked Questions ")
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, {
                to: "/",
                class: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" Website Developer ")
                ]),
                _: 1
              })
            ]),
            createVNode("p", { class: "text-xs text-wrap" }, [
              createTextVNode(" All content is owned solely by Michael Strain and/or his companies, and shall not be used or reproduced without prior written consent."),
              createVNode("br"),
              createTextVNode("All Rights Reserved. ")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShopFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=ShopFooter.a164084a.mjs.map
