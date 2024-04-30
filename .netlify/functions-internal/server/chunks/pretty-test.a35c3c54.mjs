import { useSSRContext, resolveComponent, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_parallax = resolveComponent("v-parallax");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_img = resolveComponent("v-img");
  const _component_divider = resolveComponent("divider");
  _push(`<!--[--><div class="bg-gradient-to-b from-green-300 to-blue-300">`);
  _push(ssrRenderComponent(_component_v_parallax, {
    src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
    class: "flex text-center align-middle items-center h-screen w-full"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex text-center align-middle items-center justify-center flex-shrink"${_scopeId}><div class="w-4/5 justify-center my-15"${_scopeId}><div class="bg-white mx-2 p-7"${_scopeId}><div class=""${_scopeId}><h1 class="text-h4 !font-bold sm:text-h3"${_scopeId}> Restaurant Example Header </h1><p class="my-5 italic text-3xl"${_scopeId}> Relate your restaurant&#39;s story to its core values. Tell them what struggles you had to overcome, what you learned from it, and how it impacted your values. </p><div class="items-center align-center justify-center text-2xl"${_scopeId}><div class="flex mx-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_icon, {
          class: "mr-3",
          icon: "mdi-candy-outline"
        }, null, _parent2, _scopeId));
        _push2(`<p${_scopeId}>Open Monday thru Saturday, 8AM - 10PM</p></div><div class="flex mx-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_icon, {
          class: "mr-3",
          icon: "mdi-candy-outline"
        }, null, _parent2, _scopeId));
        _push2(`<p${_scopeId}>852 Maybell Street, Shitty City, State</p></div><div class="flex mx-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_icon, {
          class: "mr-3",
          icon: "mdi-candy-outline"
        }, null, _parent2, _scopeId));
        _push2(`<p${_scopeId}>+507 - 963 - 1478</p></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex text-center align-middle items-center justify-center flex-shrink" }, [
            createVNode("div", { class: "w-4/5 justify-center my-15" }, [
              createVNode("div", { class: "bg-white mx-2 p-7" }, [
                createVNode("div", { class: "" }, [
                  createVNode("h1", { class: "text-h4 !font-bold sm:text-h3" }, " Restaurant Example Header "),
                  createVNode("p", { class: "my-5 italic text-3xl" }, " Relate your restaurant's story to its core values. Tell them what struggles you had to overcome, what you learned from it, and how it impacted your values. "),
                  createVNode("div", { class: "items-center align-center justify-center text-2xl" }, [
                    createVNode("div", { class: "flex mx-5" }, [
                      createVNode(_component_v_icon, {
                        class: "mr-3",
                        icon: "mdi-candy-outline"
                      }),
                      createVNode("p", null, "Open Monday thru Saturday, 8AM - 10PM")
                    ]),
                    createVNode("div", { class: "flex mx-5" }, [
                      createVNode(_component_v_icon, {
                        class: "mr-3",
                        icon: "mdi-candy-outline"
                      }),
                      createVNode("p", null, "852 Maybell Street, Shitty City, State")
                    ]),
                    createVNode("div", { class: "flex mx-5" }, [
                      createVNode(_component_v_icon, {
                        class: "mr-3",
                        icon: "mdi-candy-outline"
                      }),
                      createVNode("p", null, "+507 - 963 - 1478")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-gradient-to-t from-red-300 to-blue-400 flex text-center align-middle items-center justify-center flex-shrink"><div class="w-4/5 justify-center my-15"><div class="bg-white mx-2 p-7"><div class=""><h1 class="text-h4 !font-bold sm:text-h3"> BREAKFAST </h1><p class="p-2"> Breakfast is served with your choice of bacon, sausage, or hashbrowns. </p><div class="gap-7 flex flex-wrap items-center align-center justify-center"><div class="flex">`);
  _push(ssrRenderComponent(_component_v_icon, {
    class: "mr-1",
    icon: "mdi-candy-outline"
  }, null, _parent));
  _push(`<p>Spicy</p></div><div class="flex">`);
  _push(ssrRenderComponent(_component_v_icon, {
    class: "mr-1",
    icon: "mdi-candy-outline"
  }, null, _parent));
  _push(`<p>Vegetarian</p></div><div class="flex">`);
  _push(ssrRenderComponent(_component_v_icon, {
    class: "mr-1",
    icon: "mdi-candy-outline"
  }, null, _parent));
  _push(`<p>Vegan</p></div></div></div></div><div class="w-full"><div class="flex pt-1 m-0 flex-wrap items-center align-center justify-center w-full"><!--[-->`);
  ssrRenderList(6, (n) => {
    _push(`<div class="flex sm:w-full md:w-1/2 lg:w-1/3 items-center align-center"><div class="m-2 bg-white"><h1 class="bg-gray-100 py-2 text-h5 !font-bold &lt;sm:text-h3"> Dish name </h1><div class="p-5"><p class="">`);
    _push(ssrRenderComponent(_component_v_icon, {
      class: "pr-3",
      icon: "mdi-candy-outline"
    }, null, _parent));
    _push(`The following are ingredients: Relate your restaurant&#39;s story to its core values. </p></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div><div class="bg-gradient-to-t from-orange-300 to-red-300 flex text-center align-middle items-center justify-center flex-shrink"><div class="w-4/5 justify-center my-15"><div class="bg-white mx-2 p-7"><div class=""><h1 class="text-h4 !font-bold sm:text-h3"> LUNCH </h1><p class="p-2"> Breakfast is served with your choice of bacon, sausage, or hashbrowns. Breakfast is served with your choice of bacon, sausage, or hashbrowns. </p><div class="gap-7 flex flex-wrap items-center align-center justify-center"><div class="flex">`);
  _push(ssrRenderComponent(_component_v_icon, {
    class: "mr-1",
    icon: "mdi-candy-outline"
  }, null, _parent));
  _push(`<p>Spicy</p></div><div class="flex">`);
  _push(ssrRenderComponent(_component_v_icon, {
    class: "mr-1",
    icon: "mdi-candy-outline"
  }, null, _parent));
  _push(`<p>Vegetarian</p></div><div class="flex">`);
  _push(ssrRenderComponent(_component_v_icon, {
    class: "mr-1",
    icon: "mdi-candy-outline"
  }, null, _parent));
  _push(`<p>Vegan</p></div></div></div></div><div class="w-full"><div class="flex pt-1 m-0 flex-wrap items-center align-center justify-center w-full"><!--[-->`);
  ssrRenderList(8, (n) => {
    _push(`<div class="flex sm:w-full md:w-1/2 lg:w-1/3 items-center align-center"><div class="m-2 bg-white"><h1 class="bg-gray-100 py-2 text-h5 !font-bold &lt;sm:text-h3"> Dish name </h1><div class="p-5"><p class="">`);
    _push(ssrRenderComponent(_component_v_icon, {
      class: "pr-3",
      icon: "mdi-candy-outline"
    }, null, _parent));
    _push(`The following are ingredients: Relate your restaurant&#39;s story to its core values. Breakfast is served with your choice of bacon, sausage, or hashbrowns. </p></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div><div class="bg-gradient-to-b to-gray-300 from-orange-300 flex items-center align-center justify-center"><div class="p-10 w-4/5 flex text-center align-middle items-center justify-center flex-shrink flex-wrap"><div class="flex flex-wrap">`);
  _push(ssrRenderComponent(_component_v_img, {
    src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
    cover: "",
    class: "outline h-300px w-300px"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_divider, { class: "p-5" }, null, _parent));
  _push(`<div class="py-10"><h1 class="text-h3 !font-bold"> Restaurant Example Header </h1><div class="text-h6"><div class="flex py-2">`);
  _push(ssrRenderComponent(_component_v_icon, {
    class: "mr-3",
    icon: "mdi-candy-outline"
  }, null, _parent));
  _push(`<p>Open Monday thru Saturday, 8AM - 10PM</p></div><div class="flex py-2">`);
  _push(ssrRenderComponent(_component_v_icon, {
    class: "mr-3",
    icon: "mdi-candy-outline"
  }, null, _parent));
  _push(`<p>852 Maybell Street, Shitty City, State</p></div><div class="flex py-2">`);
  _push(ssrRenderComponent(_component_v_icon, {
    class: "mr-3",
    icon: "mdi-candy-outline"
  }, null, _parent));
  _push(`<p>+507 - 963 - 1478</p></div></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reference/pretty-test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prettyTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { prettyTest as default };
//# sourceMappingURL=pretty-test.a35c3c54.mjs.map
