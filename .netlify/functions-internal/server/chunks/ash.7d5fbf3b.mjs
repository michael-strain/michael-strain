import { c as useTheme } from './server.mjs';
import { unref, useSSRContext, ref, resolveComponent, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './TheFooter.734dabd1.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'defu';
import './netlify.mjs';
import 'node-fetch-native/polyfill';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main$1 = {
  __name: "ANewAccount",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const email = ref("");
    const password = ref("");
    const first = ref("");
    const last = ref("");
    const terms = ref(false);
    ref({
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    });
    ref(false);
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_checkbox = resolveComponent("v-checkbox");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "information overlord w-full" }, _attrs))}><div class="formcont"><div class="flex-col flex gap-2rem"><input${ssrRenderAttr("value", first.value)} placeholder="First name"><input${ssrRenderAttr("value", last.value)} placeholder="Last name"><input${ssrRenderAttr("value", email.value)} placeholder="Email"><input${ssrRenderAttr("value", password.value)} placeholder="Password"></div><div class="">`);
      _push(ssrRenderComponent(_component_v_checkbox, {
        modelValue: terms.value,
        "onUpdate:modelValue": ($event) => terms.value = $event,
        label: "I agree to the terms and conditions of creating this account.",
        class: "checkbox",
        onClick: ($event) => terms.value = !terms.value
      }, null, _parent));
      _push(`<div class="btnRow"><button class=""> I Have An Account </button>`);
      if (terms.value) {
        _push(`<button class="" color="success" variant="outlined"> Complete Registration </button>`);
      } else {
        _push(`<button disabled class=""> Complete Registration </button>`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ANewAccount.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ash",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useTheme();
    const vcolors = theme.global.current.value.colors;
    console.log(Object.keys(vcolors));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ANewAccount = _sfc_main$1;
      const _component_TheFooter = __nuxt_component_0;
      _push(`<!--[--><div class="flex justify-center bgimg"><div class="content box"><div class=""><div class="pagetitle"> LSDope </div></div><div class="justify-center"><div><section class=""><h2 class="newtext"> Create New Account </h2>`);
      _push(ssrRenderComponent(_component_ANewAccount, null, null, _parent));
      _push(`</section><section class=""><h2 class=""> Colors :D </h2><div class="information w-full"><!--[-->`);
      ssrRenderList(Object.keys(unref(vcolors)), (c) => {
        _push(`<div class="${ssrRenderClass("bg-" + c)}"><p>${ssrInterpolate(c)}</p></div>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(Object.keys(unref(vcolors)), (c) => {
        _push(`<div class="${ssrRenderClass("bg-" + c)}"><p>${ssrInterpolate(c)}</p></div>`);
      });
      _push(`<!--]--></section><section><h2> De Finibus Bonorum et Malorum </h2><div class="information w-full"><p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. </p><p> Limilique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </p><p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. </p><p> Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. </p></div></section></div></div></div></div>`);
      _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ash.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ash.7d5fbf3b.mjs.map
