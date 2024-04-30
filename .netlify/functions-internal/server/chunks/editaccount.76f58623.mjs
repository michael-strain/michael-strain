import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_text_field = resolveComponent("v-text-field");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-5 flex-col flex gap-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_text_field, {
    id: "address1",
    modelValue: _ctx.address1,
    "onUpdate:modelValue": ($event) => _ctx.address1 = $event,
    type: "text",
    label: "Shipping Address",
    placeholder: "Street Address or P.O. Box",
    "hide-details": "",
    class: "shadow textField"
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_text_field, {
    id: "address2",
    modelValue: _ctx.address2,
    "onUpdate:modelValue": ($event) => _ctx.address2 = $event,
    type: "text",
    label: "Apt, suite, unit, ect.",
    placeholder: "Apt, suite, unit, ect.",
    "hide-details": "",
    class: "shadow textField"
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_text_field, {
    id: "city",
    modelValue: _ctx.city,
    "onUpdate:modelValue": ($event) => _ctx.city = $event,
    type: "text",
    label: "City",
    placeholder: "City",
    "hide-details": "",
    class: "shadow textField"
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_text_field, {
    id: "region",
    modelValue: _ctx.region,
    "onUpdate:modelValue": ($event) => _ctx.region = $event,
    type: "text",
    label: "State",
    placeholder: "State",
    "hide-details": "",
    class: "shadow textField"
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_text_field, {
    id: "zip",
    modelValue: _ctx.zip,
    "onUpdate:modelValue": ($event) => _ctx.zip = $event,
    type: "text",
    label: "Zip Code",
    placeholder: "Zip Code",
    "hide-details": "",
    class: "shadow textField"
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_text_field, {
    id: "country",
    modelValue: _ctx.country,
    "onUpdate:modelValue": ($event) => _ctx.country = $event,
    items: _ctx.countries,
    label: "Country",
    placeholder: "Country",
    "hide-details": "",
    class: "shadow textField",
    transition: "scale-transition"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddressForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_AddressForm = __nuxt_component_0;
  const _component_v_icon = resolveComponent("v-icon");
  const _component_AAddressForm = resolveComponent("AAddressForm");
  const _component_AFooter = resolveComponent("AFooter");
  _push(`<!--[--><div class="content"><section><h2 class="sectionTitle"> User Information </h2><div class="information w-full shadow"><div class="shadow"><div class="m-5 flex-col flex gap-5">`);
  _push(ssrRenderComponent(_component_v_text_field, {
    id: "firstName",
    modelValue: _ctx.firstName,
    "onUpdate:modelValue": ($event) => _ctx.firstName = $event,
    type: "text",
    label: "First Name",
    placeholder: "First Name",
    "hide-details": "",
    class: "shadow textField"
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_text_field, {
    id: "lastName",
    modelValue: _ctx.lastName,
    "onUpdate:modelValue": ($event) => _ctx.lastName = $event,
    type: "text",
    label: "Last Name",
    placeholder: "Last Name",
    "hide-details": "",
    class: "shadow textField"
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_text_field, {
    id: "email",
    modelValue: _ctx.email,
    "onUpdate:modelValue": ($event) => _ctx.email = $event,
    type: "email",
    label: "Email Address",
    placeholder: "Email Address",
    "hide-details": "",
    class: "shadow textField"
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_text_field, {
    id: "phone",
    modelValue: _ctx.phone,
    "onUpdate:modelValue": ($event) => _ctx.phone = $event,
    type: "tel",
    label: "Phone Number",
    placeholder: "Phone Number",
    "hide-details": "",
    class: "shadow textField"
  }, null, _parent));
  _push(`<div class="btnRow"><button class="plainBtn"> Request Password Reset </button></div></div></div></div></section><section><h2 class="sectionTitle"> Shipping Address </h2><div class="information w-full shadow"><div class="shadow">`);
  _push(ssrRenderComponent(_component_AddressForm, null, null, _parent));
  _push(`<div class="btnRow"><button class="plainBtn">`);
  _push(ssrRenderComponent(_component_v_icon, {
    icon: _ctx.useAsBilling ? "mdi-checkbox-outline" : "mdi-checkbox-blank-outline",
    class: "text-wrap flex flex-wrap text-wrap"
  }, null, _parent));
  _push(` Use As Billing Address </button></div></div></div></section><section><h2 class="sectionTitle"> Billing Address </h2><div class="information w-full shadow"><div class="shadow">`);
  _push(ssrRenderComponent(_component_AAddressForm, null, null, _parent));
  _push(`</div></div></section><section><h2 class="sectionTitle"> Confirm Changes </h2><div class="information w-100 shadow"><div class="btnRow"><button class="plainBtn"> Delete Account </button><button class="plainBtn"> Discard Changes </button><button class="plainBtn"> Update Information </button></div></div></section></div>`);
  _push(ssrRenderComponent(_component_AFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/editaccount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editaccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { editaccount as default };
//# sourceMappingURL=editaccount.76f58623.mjs.map
