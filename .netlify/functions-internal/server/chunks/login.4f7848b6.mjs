import { _ as __nuxt_component_0 } from './TheFooter.734dabd1.mjs';
import { e as useRoute } from './server.mjs';
import { ref, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './_plugin-vue_export-helper.a1a6add7.mjs';
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

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.redirectedFrom;
    const showUserRegistration = ref(false);
    const email = ref("");
    const password = ref("");
    const first = ref("");
    const last = ref("");
    const terms = ref(false);
    const rules = ref({
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    });
    const show = ref(false);
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_TheFooter = __nuxt_component_0;
      _push(`<!--[-->`);
      if (showUserRegistration.value) {
        _push(`<div><section class=""><h2 class="sectionTitle"> Sign Into Your Account </h2><div class="information w-full shadow"><div class="shadow"><div class="m-5 flex-col flex gap-5">`);
        _push(ssrRenderComponent(_component_v_text_field, {
          modelValue: first.value,
          "onUpdate:modelValue": ($event) => first.value = $event,
          color: "primary",
          label: "First name",
          variant: "underlined"
        }, null, _parent));
        _push(ssrRenderComponent(_component_v_text_field, {
          modelValue: last.value,
          "onUpdate:modelValue": ($event) => last.value = $event,
          color: "primary",
          label: "Last name",
          variant: "underlined"
        }, null, _parent));
        _push(ssrRenderComponent(_component_v_text_field, {
          modelValue: email.value,
          "onUpdate:modelValue": ($event) => email.value = $event,
          color: "primary",
          label: "Email",
          variant: "underlined"
        }, null, _parent));
        _push(ssrRenderComponent(_component_v_text_field, {
          modelValue: password.value,
          "onUpdate:modelValue": ($event) => password.value = $event,
          color: "primary",
          label: "Password",
          placeholder: "Enter your password",
          variant: "underlined",
          "append-icon": show.value ? "mdi-eye" : "mdi-eye-off",
          rules: [rules.value.required, rules.value.min],
          type: show.value ? "text" : "password",
          name: "input-10-1",
          hint: "At least 8 characters",
          counter: "",
          "onClick:append": ($event) => show.value = !show.value
        }, null, _parent));
        _push(ssrRenderComponent(_component_v_checkbox, {
          modelValue: terms.value,
          "onUpdate:modelValue": ($event) => terms.value = $event,
          class: "text-black",
          label: "I agree to the terms and conditions of creating this account.",
          onClick: ($event) => terms.value = !terms.value
        }, null, _parent));
        _push(`<div class="btnRow"><button class="plainBtn"> I Have An Account </button>`);
        if (terms.value) {
          _push(`<button class="plainBtn" color="success" variant="outlined"> Complete Registration </button>`);
        } else {
          _push(`<button disabled class="plainBtn opacity-60"> Complete Registration </button>`);
        }
        _push(`</div></div></div></div></section></div>`);
      } else {
        _push(`<div><div class="content"><section class=""><h2 class="section-title"> Sign Into Your Account </h2><div class="information w-full shadow"><div class="shadow"><div class="m-5 flex-col flex gap-5">`);
        _push(ssrRenderComponent(_component_v_text_field, {
          id: "email",
          modelValue: email.value,
          "onUpdate:modelValue": ($event) => email.value = $event,
          type: "email",
          label: "Email Address",
          placeholder: "Email Address",
          "hide-details": "",
          class: "shadow textField"
        }, null, _parent));
        _push(ssrRenderComponent(_component_v_text_field, {
          id: "password",
          modelValue: password.value,
          "onUpdate:modelValue": ($event) => password.value = $event,
          type: "",
          label: "Password",
          placeholder: "Password",
          "hide-details": "",
          class: "shadow textField"
        }, null, _parent));
        _push(`<div class="justify-space-between flex btnRow"><button class="underlineAnimation text-right"> Create New Account </button><button class="underlineAnimation text-right"> Forgot Password </button></div><div class="btnRow"><button class="plainBtn"> Sign In with Google </button><button class="plainBtn"> Sign In with Email </button></div></div></div></div></section></div></div>`);
      }
      _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login.4f7848b6.mjs.map
