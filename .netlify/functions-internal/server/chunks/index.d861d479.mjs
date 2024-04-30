import { ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useBlueprintDataStore } from './blueprintData.480f853c.mjs';
import './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
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
import './index.a7d16411.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const product = ref();
    useRoute();
    const blueprintId = ref("3");
    const selectTags = ref([]);
    const selectPrintProvider = ref();
    const selectVariant = ref([]);
    const selectDescription = ref("");
    const selectTitle = ref("");
    const selectCategory = ref("");
    const store = useBlueprintDataStore();
    const items = ref([
      "Programming",
      "Design",
      "Vue",
      "Vuetify"
    ]);
    const blueprint = ref();
    const printProviders = ref([]);
    const variants = ref([]);
    const imageUrl = ref("");
    const imageName = ref("");
    ref();
    const doWeNeedDetails = ref(false);
    ref(false);
    const getUniquePrintProviders = () => {
      let uniquePrintProviders = [];
      for (let i = 0; i < variants.value.length; i++) {
        let obj = {
          "id": variants.value[i].printProvider.id,
          "title": variants.value[i].printProvider.title
        };
        if (uniquePrintProviders.findIndex((o) => o.id == obj.id) > -1) {
          console.log("Print provider already in list");
          break;
        } else {
          uniquePrintProviders.push(obj);
          console.log("Pushing print provider obj to printProviders.value");
        }
      }
      printProviders.value = uniquePrintProviders;
      selectPrintProvider.value = uniquePrintProviders[0];
    };
    const addData = async () => {
      console.log("Fetching blueprint id: " + blueprintId.value);
      const bpData = await $fetch(`/api/printify/blueprints?id=${blueprintId.value}`, { method: "GET" });
      console.log(bpData);
      store.$patch({ blueprintData: bpData });
      blueprint.value = bpData;
      product.value = blueprint.value;
      variants.value = blueprint.value.variants;
      console.log(variants.value);
      getUniquePrintProviders();
      selectVariant.value = [];
      for (let i = 0; i < variants.value.length; i++) {
        selectVariant.value.push(variants.value[i].title);
        variants.value[i].price = 9999;
      }
      selectDescription.value = blueprint.value.description;
      selectTitle.value = blueprint.value.title;
    };
    async function submit() {
      console.log("Attempting to submit image: " + imageName.value);
      const uploadImage = await $fetch("/api/printify/image", { method: "POST", headers: { "ContentType": "application/json" }, body: { file_name: imageName.value, url: imageUrl.value } });
      let varray = [];
      for (let i = 0; i < variants.value.length; i++) {
        varray.push(variants.value[i].id);
      }
      const opts = {
        method: "POST",
        url: "/api/printify/products",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "title": selectTitle.value,
          "description": selectDescription.value,
          "blueprint_id": blueprintId.value,
          "print_provider_id": selectPrintProvider.value.id,
          "variants": variants.value,
          "print_areas": [{
            "variant_ids": varray,
            "placeholders": [{
              "position": "front",
              "images": [{
                "id": uploadImage.id,
                "x": 0.5,
                "y": 0.5,
                "scale": 1,
                "angle": 0
              }]
            }]
          }]
        })
      };
      console.log("I am attempting to POST to /api/printify/products");
      const post = await $fetch(opts.url, { method: opts.method, headers: opts.headers, body: opts.body });
      console.log("I attempted to POST to /api/printify/products");
      if (post.error) {
        console.log(error);
        return error;
      }
      console.log("post.id");
      console.log(post.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_combobox = resolveComponent("v-combobox");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_item_group = resolveComponent("v-item-group");
      const _component_v_item = resolveComponent("v-item");
      const _component_v_chip = resolveComponent("v-chip");
      _push(ssrRenderComponent(_component_v_form, mergeProps({ class: "flex text-center align-middle items-center justify-center flex-shrink bg-white" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { class: "w-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, { class: "bg-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h3 class="justify-center text-center align-center font-bold text-5xl mt-5 mb-10" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" })}"${_scopeId3}> Create New Product </h3>`);
                        _push4(ssrRenderComponent(_component_v_row, { class: "pt-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: selectTitle.value,
                                      "onUpdate:modelValue": ($event) => selectTitle.value = $event,
                                      label: "Product Title",
                                      placeholder: "Product  Title",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: selectTitle.value,
                                        "onUpdate:modelValue": ($event) => selectTitle.value = $event,
                                        label: "Product Title",
                                        placeholder: "Product  Title",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: "outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: selectCategory.value,
                                      "onUpdate:modelValue": ($event) => selectCategory.value = $event,
                                      label: "Category",
                                      placeholder: "Category",
                                      variant: "outlined",
                                      class: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: selectCategory.value,
                                        "onUpdate:modelValue": ($event) => selectCategory.value = $event,
                                        label: "Category",
                                        placeholder: "Category",
                                        variant: "outlined",
                                        class: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: blueprintId.value,
                                      "onUpdate:modelValue": ($event) => blueprintId.value = $event,
                                      label: "Blueprint ID",
                                      placeholder: "Blueprint ID",
                                      variant: "outlined",
                                      class: "",
                                      onChange: addData
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: blueprintId.value,
                                        "onUpdate:modelValue": ($event) => blueprintId.value = $event,
                                        label: "Blueprint ID",
                                        placeholder: "Blueprint ID",
                                        variant: "outlined",
                                        class: "",
                                        onChange: addData
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: selectTitle.value,
                                      "onUpdate:modelValue": ($event) => selectTitle.value = $event,
                                      label: "Product Title",
                                      placeholder: "Product  Title",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "",
                                  class: "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: selectCategory.value,
                                      "onUpdate:modelValue": ($event) => selectCategory.value = $event,
                                      label: "Category",
                                      placeholder: "Category",
                                      variant: "outlined",
                                      class: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: blueprintId.value,
                                      "onUpdate:modelValue": ($event) => blueprintId.value = $event,
                                      label: "Blueprint ID",
                                      placeholder: "Blueprint ID",
                                      variant: "outlined",
                                      class: "",
                                      onChange: addData
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, { class: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_combobox, {
                                      modelValue: selectTags.value,
                                      "onUpdate:modelValue": ($event) => selectTags.value = $event,
                                      items: items.value,
                                      label: "Tags",
                                      clearable: "",
                                      multiple: "",
                                      "persistent-hint": "",
                                      variant: "outlined",
                                      chips: "",
                                      transition: "scale-transition"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_combobox, {
                                        modelValue: selectTags.value,
                                        "onUpdate:modelValue": ($event) => selectTags.value = $event,
                                        items: items.value,
                                        label: "Tags",
                                        clearable: "",
                                        multiple: "",
                                        "persistent-hint": "",
                                        variant: "outlined",
                                        chips: "",
                                        transition: "scale-transition"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_combobox, {
                                      modelValue: selectPrintProvider.value,
                                      "onUpdate:modelValue": ($event) => selectPrintProvider.value = $event,
                                      items: printProviders.value,
                                      label: "Print Provider",
                                      clearable: "",
                                      multiple: "",
                                      "persistent-hint": "",
                                      variant: "outlined",
                                      chips: "",
                                      transition: "scale-transition"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_combobox, {
                                      modelValue: selectVariant.value,
                                      "onUpdate:modelValue": ($event) => selectVariant.value = $event,
                                      items: variants.value,
                                      label: "Variants",
                                      clearable: "",
                                      multiple: "",
                                      "persistent-hint": "",
                                      variant: "outlined",
                                      chips: "",
                                      transition: "scale-transition"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_combobox, {
                                        modelValue: selectPrintProvider.value,
                                        "onUpdate:modelValue": ($event) => selectPrintProvider.value = $event,
                                        items: printProviders.value,
                                        label: "Print Provider",
                                        clearable: "",
                                        multiple: "",
                                        "persistent-hint": "",
                                        variant: "outlined",
                                        chips: "",
                                        transition: "scale-transition"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                      createVNode(_component_v_combobox, {
                                        modelValue: selectVariant.value,
                                        "onUpdate:modelValue": ($event) => selectVariant.value = $event,
                                        items: variants.value,
                                        label: "Variants",
                                        clearable: "",
                                        multiple: "",
                                        "persistent-hint": "",
                                        variant: "outlined",
                                        chips: "",
                                        transition: "scale-transition"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_combobox, {
                                      modelValue: selectTags.value,
                                      "onUpdate:modelValue": ($event) => selectTags.value = $event,
                                      items: items.value,
                                      label: "Tags",
                                      clearable: "",
                                      multiple: "",
                                      "persistent-hint": "",
                                      variant: "outlined",
                                      chips: "",
                                      transition: "scale-transition"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_combobox, {
                                      modelValue: selectPrintProvider.value,
                                      "onUpdate:modelValue": ($event) => selectPrintProvider.value = $event,
                                      items: printProviders.value,
                                      label: "Print Provider",
                                      clearable: "",
                                      multiple: "",
                                      "persistent-hint": "",
                                      variant: "outlined",
                                      chips: "",
                                      transition: "scale-transition"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                    createVNode(_component_v_combobox, {
                                      modelValue: selectVariant.value,
                                      "onUpdate:modelValue": ($event) => selectVariant.value = $event,
                                      items: variants.value,
                                      label: "Variants",
                                      clearable: "",
                                      multiple: "",
                                      "persistent-hint": "",
                                      variant: "outlined",
                                      chips: "",
                                      transition: "scale-transition"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, { class: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_textarea, {
                                      modelValue: selectDescription.value,
                                      "onUpdate:modelValue": ($event) => selectDescription.value = $event,
                                      label: "Description",
                                      placeholder: "Description",
                                      variant: "outlined",
                                      "auto-grow": "",
                                      class: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_textarea, {
                                        modelValue: selectDescription.value,
                                        "onUpdate:modelValue": ($event) => selectDescription.value = $event,
                                        label: "Description",
                                        placeholder: "Description",
                                        variant: "outlined",
                                        "auto-grow": "",
                                        class: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_textarea, {
                                      modelValue: selectDescription.value,
                                      "onUpdate:modelValue": ($event) => selectDescription.value = $event,
                                      label: "Description",
                                      placeholder: "Description",
                                      variant: "outlined",
                                      "auto-grow": "",
                                      class: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: imageName.value,
                                      "onUpdate:modelValue": ($event) => imageName.value = $event,
                                      label: "Image Filename",
                                      placeholder: "Image Filename",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: imageName.value,
                                        "onUpdate:modelValue": ($event) => imageName.value = $event,
                                        label: "Image Filename",
                                        placeholder: "Image Filename",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: imageName.value,
                                      "onUpdate:modelValue": ($event) => imageName.value = $event,
                                      label: "Image Filename",
                                      placeholder: "Image Filename",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: imageUrl.value,
                                      "onUpdate:modelValue": ($event) => imageUrl.value = $event,
                                      label: "Image URL",
                                      placeholder: "Image URL",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: imageUrl.value,
                                        "onUpdate:modelValue": ($event) => imageUrl.value = $event,
                                        label: "Image URL",
                                        placeholder: "Image URL",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: imageUrl.value,
                                      "onUpdate:modelValue": ($event) => imageUrl.value = $event,
                                      label: "Image URL",
                                      placeholder: "Image URL",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, { class: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="sm:flex align-middle items-center h-min"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: ""
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  class: "align-middle items-center",
                                                  size: "large"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`Save Draft `);
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_icon, {
                                                          icon: "mdi-email",
                                                          class: "mr-3"
                                                        }),
                                                        createTextVNode("Save Draft ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_btn, {
                                                    class: "align-middle items-center",
                                                    size: "large"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }),
                                                      createTextVNode("Save Draft ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "",
                                            class: ""
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  class: "align-middle items-center",
                                                  size: "large",
                                                  disabled: _ctx.fileUploading,
                                                  onClick: ($event) => submit()
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`Submit `);
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_icon, {
                                                          icon: "mdi-email",
                                                          class: "mr-3"
                                                        }),
                                                        createTextVNode("Submit ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_btn, {
                                                    class: "align-middle items-center",
                                                    size: "large",
                                                    disabled: _ctx.fileUploading,
                                                    onClick: ($event) => submit()
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }),
                                                      createTextVNode("Submit ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["disabled", "onClick"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: ""
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  class: "align-middle items-center",
                                                  size: "large"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`DELETE `);
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_icon, {
                                                          icon: "mdi-email",
                                                          class: "mr-3"
                                                        }),
                                                        createTextVNode("DELETE ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_btn, {
                                                    class: "align-middle items-center",
                                                    size: "large"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }),
                                                      createTextVNode("DELETE ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    class: "align-middle items-center",
                                                    size: "large"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }),
                                                      createTextVNode("Save Draft ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "",
                                                class: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    class: "align-middle items-center",
                                                    size: "large",
                                                    disabled: _ctx.fileUploading,
                                                    onClick: ($event) => submit()
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }),
                                                      createTextVNode("Submit ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["disabled", "onClick"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    class: "align-middle items-center",
                                                    size: "large"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }),
                                                      createTextVNode("DELETE ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  class: "align-middle items-center",
                                                  size: "large"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, {
                                                      icon: "mdi-email",
                                                      class: "mr-3"
                                                    }),
                                                    createTextVNode("Save Draft ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "",
                                              class: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  class: "align-middle items-center",
                                                  size: "large",
                                                  disabled: _ctx.fileUploading,
                                                  onClick: ($event) => submit()
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, {
                                                      icon: "mdi-email",
                                                      class: "mr-3"
                                                    }),
                                                    createTextVNode("Submit ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["disabled", "onClick"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  class: "align-middle items-center",
                                                  size: "large"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, {
                                                      icon: "mdi-email",
                                                      class: "mr-3"
                                                    }),
                                                    createTextVNode("DELETE ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                class: "align-middle items-center",
                                                size: "large"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, {
                                                    icon: "mdi-email",
                                                    class: "mr-3"
                                                  }),
                                                  createTextVNode("Save Draft ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "",
                                            class: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                class: "align-middle items-center",
                                                size: "large",
                                                disabled: _ctx.fileUploading,
                                                onClick: ($event) => submit()
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, {
                                                    icon: "mdi-email",
                                                    class: "mr-3"
                                                  }),
                                                  createTextVNode("Submit ")
                                                ]),
                                                _: 1
                                              }, 8, ["disabled", "onClick"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                class: "align-middle items-center",
                                                size: "large"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, {
                                                    icon: "mdi-email",
                                                    class: "mr-3"
                                                  }),
                                                  createTextVNode("DELETE ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, { class: "pt-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "",
                                  class: ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, { class: "pt-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (doWeNeedDetails.value) {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  sm: "",
                                  class: "w-screen d-flex flex-wrap text-center align-middle items-center justify-center flex-shrink"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<p class="text-3xl"${_scopeId5}> Product Details </p>`);
                                      _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_item_group, {
                                        multiple: "",
                                        "selected-class": "bg-purple"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="text-caption mb-2"${_scopeId6}> Tags </div><!--[-->`);
                                            ssrRenderList(8, (n) => {
                                              _push7(ssrRenderComponent(_component_v_item, { key: n }, {
                                                default: withCtx(({ selectedClass, toggle }, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_chip, {
                                                      class: selectedClass,
                                                      onClick: toggle
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(` Tag ${ssrInterpolate(n)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(" Tag " + toDisplayString(n), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_v_chip, {
                                                        class: selectedClass,
                                                        onClick: toggle
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Tag " + toDisplayString(n), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["class", "onClick"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "text-caption mb-2" }, " Tags "),
                                              (openBlock(), createBlock(Fragment, null, renderList(8, (n) => {
                                                return createVNode(_component_v_item, { key: n }, {
                                                  default: withCtx(({ selectedClass, toggle }) => [
                                                    createVNode(_component_v_chip, {
                                                      class: selectedClass,
                                                      onClick: toggle
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Tag " + toDisplayString(n), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class", "onClick"])
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 64))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("p", { class: "text-3xl" }, " Product Details "),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_item_group, {
                                          multiple: "",
                                          "selected-class": "bg-purple"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-caption mb-2" }, " Tags "),
                                            (openBlock(), createBlock(Fragment, null, renderList(8, (n) => {
                                              return createVNode(_component_v_item, { key: n }, {
                                                default: withCtx(({ selectedClass, toggle }) => [
                                                  createVNode(_component_v_chip, {
                                                    class: selectedClass,
                                                    onClick: toggle
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Tag " + toDisplayString(n), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class", "onClick"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                doWeNeedDetails.value ? (openBlock(), createBlock(_component_v_col, {
                                  key: 0,
                                  cols: "12",
                                  sm: "",
                                  class: "w-screen d-flex flex-wrap text-center align-middle items-center justify-center flex-shrink"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-3xl" }, " Product Details "),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_item_group, {
                                      multiple: "",
                                      "selected-class": "bg-purple"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption mb-2" }, " Tags "),
                                        (openBlock(), createBlock(Fragment, null, renderList(8, (n) => {
                                          return createVNode(_component_v_item, { key: n }, {
                                            default: withCtx(({ selectedClass, toggle }) => [
                                              createVNode(_component_v_chip, {
                                                class: selectedClass,
                                                onClick: toggle
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Tag " + toDisplayString(n), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class", "onClick"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 64))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h3", {
                            class: "justify-center text-center align-center font-bold text-5xl mt-5 mb-10",
                            style: { fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" }
                          }, " Create New Product ", 4),
                          createVNode(_component_v_row, { class: "pt-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: selectTitle.value,
                                    "onUpdate:modelValue": ($event) => selectTitle.value = $event,
                                    label: "Product Title",
                                    placeholder: "Product  Title",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: "outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: selectCategory.value,
                                    "onUpdate:modelValue": ($event) => selectCategory.value = $event,
                                    label: "Category",
                                    placeholder: "Category",
                                    variant: "outlined",
                                    class: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: blueprintId.value,
                                    "onUpdate:modelValue": ($event) => blueprintId.value = $event,
                                    label: "Blueprint ID",
                                    placeholder: "Blueprint ID",
                                    variant: "outlined",
                                    class: "",
                                    onChange: addData
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_combobox, {
                                    modelValue: selectTags.value,
                                    "onUpdate:modelValue": ($event) => selectTags.value = $event,
                                    items: items.value,
                                    label: "Tags",
                                    clearable: "",
                                    multiple: "",
                                    "persistent-hint": "",
                                    variant: "outlined",
                                    chips: "",
                                    transition: "scale-transition"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_combobox, {
                                    modelValue: selectPrintProvider.value,
                                    "onUpdate:modelValue": ($event) => selectPrintProvider.value = $event,
                                    items: printProviders.value,
                                    label: "Print Provider",
                                    clearable: "",
                                    multiple: "",
                                    "persistent-hint": "",
                                    variant: "outlined",
                                    chips: "",
                                    transition: "scale-transition"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                  createVNode(_component_v_combobox, {
                                    modelValue: selectVariant.value,
                                    "onUpdate:modelValue": ($event) => selectVariant.value = $event,
                                    items: variants.value,
                                    label: "Variants",
                                    clearable: "",
                                    multiple: "",
                                    "persistent-hint": "",
                                    variant: "outlined",
                                    chips: "",
                                    transition: "scale-transition"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_textarea, {
                                    modelValue: selectDescription.value,
                                    "onUpdate:modelValue": ($event) => selectDescription.value = $event,
                                    label: "Description",
                                    placeholder: "Description",
                                    variant: "outlined",
                                    "auto-grow": "",
                                    class: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: imageName.value,
                                    "onUpdate:modelValue": ($event) => imageName.value = $event,
                                    label: "Image Filename",
                                    placeholder: "Image Filename",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: imageUrl.value,
                                    "onUpdate:modelValue": ($event) => imageUrl.value = $event,
                                    label: "Image URL",
                                    placeholder: "Image URL",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              class: "align-middle items-center",
                                              size: "large"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, {
                                                  icon: "mdi-email",
                                                  class: "mr-3"
                                                }),
                                                createTextVNode("Save Draft ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "",
                                          class: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              class: "align-middle items-center",
                                              size: "large",
                                              disabled: _ctx.fileUploading,
                                              onClick: ($event) => submit()
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, {
                                                  icon: "mdi-email",
                                                  class: "mr-3"
                                                }),
                                                createTextVNode("Submit ")
                                              ]),
                                              _: 1
                                            }, 8, ["disabled", "onClick"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              class: "align-middle items-center",
                                              size: "large"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, {
                                                  icon: "mdi-email",
                                                  class: "mr-3"
                                                }),
                                                createTextVNode("DELETE ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "pt-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "pt-5" }, {
                            default: withCtx(() => [
                              doWeNeedDetails.value ? (openBlock(), createBlock(_component_v_col, {
                                key: 0,
                                cols: "12",
                                sm: "",
                                class: "w-screen d-flex flex-wrap text-center align-middle items-center justify-center flex-shrink"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-3xl" }, " Product Details "),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_item_group, {
                                    multiple: "",
                                    "selected-class": "bg-purple"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption mb-2" }, " Tags "),
                                      (openBlock(), createBlock(Fragment, null, renderList(8, (n) => {
                                        return createVNode(_component_v_item, { key: n }, {
                                          default: withCtx(({ selectedClass, toggle }) => [
                                            createVNode(_component_v_chip, {
                                              class: selectedClass,
                                              onClick: toggle
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Tag " + toDisplayString(n), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class", "onClick"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 64))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, { class: "bg-white" }, {
                      default: withCtx(() => [
                        createVNode("h3", {
                          class: "justify-center text-center align-center font-bold text-5xl mt-5 mb-10",
                          style: { fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" }
                        }, " Create New Product ", 4),
                        createVNode(_component_v_row, { class: "pt-5" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: selectTitle.value,
                                  "onUpdate:modelValue": ($event) => selectTitle.value = $event,
                                  label: "Product Title",
                                  placeholder: "Product  Title",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "",
                              class: "outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: selectCategory.value,
                                  "onUpdate:modelValue": ($event) => selectCategory.value = $event,
                                  label: "Category",
                                  placeholder: "Category",
                                  variant: "outlined",
                                  class: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: blueprintId.value,
                                  "onUpdate:modelValue": ($event) => blueprintId.value = $event,
                                  label: "Blueprint ID",
                                  placeholder: "Blueprint ID",
                                  variant: "outlined",
                                  class: "",
                                  onChange: addData
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, { class: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_combobox, {
                                  modelValue: selectTags.value,
                                  "onUpdate:modelValue": ($event) => selectTags.value = $event,
                                  items: items.value,
                                  label: "Tags",
                                  clearable: "",
                                  multiple: "",
                                  "persistent-hint": "",
                                  variant: "outlined",
                                  chips: "",
                                  transition: "scale-transition"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_combobox, {
                                  modelValue: selectPrintProvider.value,
                                  "onUpdate:modelValue": ($event) => selectPrintProvider.value = $event,
                                  items: printProviders.value,
                                  label: "Print Provider",
                                  clearable: "",
                                  multiple: "",
                                  "persistent-hint": "",
                                  variant: "outlined",
                                  chips: "",
                                  transition: "scale-transition"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                createVNode(_component_v_combobox, {
                                  modelValue: selectVariant.value,
                                  "onUpdate:modelValue": ($event) => selectVariant.value = $event,
                                  items: variants.value,
                                  label: "Variants",
                                  clearable: "",
                                  multiple: "",
                                  "persistent-hint": "",
                                  variant: "outlined",
                                  chips: "",
                                  transition: "scale-transition"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, { class: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_textarea, {
                                  modelValue: selectDescription.value,
                                  "onUpdate:modelValue": ($event) => selectDescription.value = $event,
                                  label: "Description",
                                  placeholder: "Description",
                                  variant: "outlined",
                                  "auto-grow": "",
                                  class: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: imageName.value,
                                  "onUpdate:modelValue": ($event) => imageName.value = $event,
                                  label: "Image Filename",
                                  placeholder: "Image Filename",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: imageUrl.value,
                                  "onUpdate:modelValue": ($event) => imageUrl.value = $event,
                                  label: "Image URL",
                                  placeholder: "Image URL",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, { class: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            class: "align-middle items-center",
                                            size: "large"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, {
                                                icon: "mdi-email",
                                                class: "mr-3"
                                              }),
                                              createTextVNode("Save Draft ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "",
                                        class: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            class: "align-middle items-center",
                                            size: "large",
                                            disabled: _ctx.fileUploading,
                                            onClick: ($event) => submit()
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, {
                                                icon: "mdi-email",
                                                class: "mr-3"
                                              }),
                                              createTextVNode("Submit ")
                                            ]),
                                            _: 1
                                          }, 8, ["disabled", "onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            class: "align-middle items-center",
                                            size: "large"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, {
                                                icon: "mdi-email",
                                                class: "mr-3"
                                              }),
                                              createTextVNode("DELETE ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, { class: "pt-5" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "",
                              class: ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, { class: "pt-5" }, {
                          default: withCtx(() => [
                            doWeNeedDetails.value ? (openBlock(), createBlock(_component_v_col, {
                              key: 0,
                              cols: "12",
                              sm: "",
                              class: "w-screen d-flex flex-wrap text-center align-middle items-center justify-center flex-shrink"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-3xl" }, " Product Details "),
                                createVNode(_component_v_divider),
                                createVNode(_component_v_item_group, {
                                  multiple: "",
                                  "selected-class": "bg-purple"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption mb-2" }, " Tags "),
                                    (openBlock(), createBlock(Fragment, null, renderList(8, (n) => {
                                      return createVNode(_component_v_item, { key: n }, {
                                        default: withCtx(({ selectedClass, toggle }) => [
                                          createVNode(_component_v_chip, {
                                            class: selectedClass,
                                            onClick: toggle
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Tag " + toDisplayString(n), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["class", "onClick"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, { class: "bg-white" }, {
                    default: withCtx(() => [
                      createVNode("h3", {
                        class: "justify-center text-center align-center font-bold text-5xl mt-5 mb-10",
                        style: { fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" }
                      }, " Create New Product ", 4),
                      createVNode(_component_v_row, { class: "pt-5" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: selectTitle.value,
                                "onUpdate:modelValue": ($event) => selectTitle.value = $event,
                                label: "Product Title",
                                placeholder: "Product  Title",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "",
                            class: "outlined"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: selectCategory.value,
                                "onUpdate:modelValue": ($event) => selectCategory.value = $event,
                                label: "Category",
                                placeholder: "Category",
                                variant: "outlined",
                                class: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: blueprintId.value,
                                "onUpdate:modelValue": ($event) => blueprintId.value = $event,
                                label: "Blueprint ID",
                                placeholder: "Blueprint ID",
                                variant: "outlined",
                                class: "",
                                onChange: addData
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_combobox, {
                                modelValue: selectTags.value,
                                "onUpdate:modelValue": ($event) => selectTags.value = $event,
                                items: items.value,
                                label: "Tags",
                                clearable: "",
                                multiple: "",
                                "persistent-hint": "",
                                variant: "outlined",
                                chips: "",
                                transition: "scale-transition"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_combobox, {
                                modelValue: selectPrintProvider.value,
                                "onUpdate:modelValue": ($event) => selectPrintProvider.value = $event,
                                items: printProviders.value,
                                label: "Print Provider",
                                clearable: "",
                                multiple: "",
                                "persistent-hint": "",
                                variant: "outlined",
                                chips: "",
                                transition: "scale-transition"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                              createVNode(_component_v_combobox, {
                                modelValue: selectVariant.value,
                                "onUpdate:modelValue": ($event) => selectVariant.value = $event,
                                items: variants.value,
                                label: "Variants",
                                clearable: "",
                                multiple: "",
                                "persistent-hint": "",
                                variant: "outlined",
                                chips: "",
                                transition: "scale-transition"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_textarea, {
                                modelValue: selectDescription.value,
                                "onUpdate:modelValue": ($event) => selectDescription.value = $event,
                                label: "Description",
                                placeholder: "Description",
                                variant: "outlined",
                                "auto-grow": "",
                                class: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: imageName.value,
                                "onUpdate:modelValue": ($event) => imageName.value = $event,
                                label: "Image Filename",
                                placeholder: "Image Filename",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: imageUrl.value,
                                "onUpdate:modelValue": ($event) => imageUrl.value = $event,
                                label: "Image URL",
                                placeholder: "Image URL",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          class: "align-middle items-center",
                                          size: "large"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              icon: "mdi-email",
                                              class: "mr-3"
                                            }),
                                            createTextVNode("Save Draft ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          class: "align-middle items-center",
                                          size: "large",
                                          disabled: _ctx.fileUploading,
                                          onClick: ($event) => submit()
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              icon: "mdi-email",
                                              class: "mr-3"
                                            }),
                                            createTextVNode("Submit ")
                                          ]),
                                          _: 1
                                        }, 8, ["disabled", "onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          class: "align-middle items-center",
                                          size: "large"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              icon: "mdi-email",
                                              class: "mr-3"
                                            }),
                                            createTextVNode("DELETE ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "pt-5" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "",
                            class: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "pt-5" }, {
                        default: withCtx(() => [
                          doWeNeedDetails.value ? (openBlock(), createBlock(_component_v_col, {
                            key: 0,
                            cols: "12",
                            sm: "",
                            class: "w-screen d-flex flex-wrap text-center align-middle items-center justify-center flex-shrink"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-3xl" }, " Product Details "),
                              createVNode(_component_v_divider),
                              createVNode(_component_v_item_group, {
                                multiple: "",
                                "selected-class": "bg-purple"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-caption mb-2" }, " Tags "),
                                  (openBlock(), createBlock(Fragment, null, renderList(8, (n) => {
                                    return createVNode(_component_v_item, { key: n }, {
                                      default: withCtx(({ selectedClass, toggle }) => [
                                        createVNode(_component_v_chip, {
                                          class: selectedClass,
                                          onClick: toggle
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Tag " + toDisplayString(n), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "onClick"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/product/create/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.d861d479.mjs.map
