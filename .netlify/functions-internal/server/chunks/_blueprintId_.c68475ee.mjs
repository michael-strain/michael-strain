import { _ as _sfc_main$1 } from './FirebaseUpload.a410d7d7.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "[blueprintId]",
  __ssrInlineRender: true,
  setup(__props) {
    const blueprint = ref({});
    useRoute();
    ref();
    ref([]);
    ref([
      "Programming",
      "Design",
      "Vue",
      "Vuetify"
    ]);
    useBlueprintDataStore();
    const doWeNeedDetails = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn_toggle = resolveComponent("v-btn-toggle");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_FirebaseUpload = _sfc_main$1;
      const _component_v_text = resolveComponent("v-text");
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
                                      label: "Product Title",
                                      placeholder: "Product  Title",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Product Title",
                                        placeholder: "Product  Title",
                                        variant: "outlined"
                                      })
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
                                      label: "Category",
                                      placeholder: "Category",
                                      variant: "outlined",
                                      class: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Category",
                                        placeholder: "Category",
                                        variant: "outlined",
                                        class: ""
                                      })
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
                                      label: "Blueprint ID",
                                      variant: "outlined",
                                      class: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(blueprint.value.id)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(blueprint.value.id), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Blueprint ID",
                                        variant: "outlined",
                                        class: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(blueprint.value.id), 1)
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
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Product Title",
                                      placeholder: "Product  Title",
                                      variant: "outlined"
                                    })
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
                                      label: "Category",
                                      placeholder: "Category",
                                      variant: "outlined",
                                      class: ""
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
                                    createVNode(_component_v_text_field, {
                                      label: "Blueprint ID",
                                      variant: "outlined",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(blueprint.value.id), 1)
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
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      label: "Tags",
                                      placeholder: "Tags",
                                      variant: "outlined",
                                      class: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Tags",
                                        placeholder: "Tags",
                                        variant: "outlined",
                                        class: ""
                                      })
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
                                      label: "Print Provider",
                                      placeholder: "Print Provider",
                                      variant: "outlined",
                                      class: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(blueprint.value.variants[blueprint.value.variantNum].printProvider.title)} (ID: ${ssrInterpolate(blueprint.value.variants[blueprint.value.variantNum].printProvider.id)}) `);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.id) + ") ", 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      label: "Variant",
                                      placeholder: "Variant",
                                      variant: "outlined",
                                      class: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(blueprint.value.variants[blueprint.value.variantNum].title)} (ID: ${ssrInterpolate(blueprint.value.variants[blueprint.value.variantNum].id)}) `);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].id) + ") ", 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Print Provider",
                                        placeholder: "Print Provider",
                                        variant: "outlined",
                                        class: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.id) + ") ", 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        label: "Variant",
                                        placeholder: "Variant",
                                        variant: "outlined",
                                        class: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].id) + ") ", 1)
                                        ]),
                                        _: 1
                                      })
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
                                    _push6(ssrRenderComponent(_component_v_btn_toggle, {
                                      modelValue: _ctx.formatting,
                                      "onUpdate:modelValue": ($event) => _ctx.formatting = $event,
                                      multiple: "",
                                      variant: "outlined",
                                      divided: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_btn, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { icon: "mdi-format-italic" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { icon: "mdi-format-italic" })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { icon: "mdi-format-bold" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { icon: "mdi-format-bold" })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { icon: "mdi-format-underline" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { icon: "mdi-format-underline" })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { icon: "mdi-format-align-center" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { icon: "mdi-format-align-center" })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { icon: "mdi-format-align-left" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { icon: "mdi-format-align-left" })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { icon: "mdi-format-align-right" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { icon: "mdi-format-align-right" })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_btn, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { icon: "mdi-format-italic" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { icon: "mdi-format-bold" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { icon: "mdi-format-underline" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { icon: "mdi-format-align-center" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { icon: "mdi-format-align-left" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { icon: "mdi-format-align-right" })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_btn_toggle, {
                                        modelValue: _ctx.formatting,
                                        "onUpdate:modelValue": ($event) => _ctx.formatting = $event,
                                        multiple: "",
                                        variant: "outlined",
                                        divided: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, { icon: "mdi-format-italic" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, { icon: "mdi-format-bold" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, { icon: "mdi-format-underline" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, { icon: "mdi-format-align-center" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, { icon: "mdi-format-align-left" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, { icon: "mdi-format-align-right" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      label: "Tags",
                                      placeholder: "Tags",
                                      variant: "outlined",
                                      class: ""
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
                                    createVNode(_component_v_text_field, {
                                      label: "Print Provider",
                                      placeholder: "Print Provider",
                                      variant: "outlined",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.id) + ") ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      label: "Variant",
                                      placeholder: "Variant",
                                      variant: "outlined",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].id) + ") ", 1)
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
                                    createVNode(_component_v_btn_toggle, {
                                      modelValue: _ctx.formatting,
                                      "onUpdate:modelValue": ($event) => _ctx.formatting = $event,
                                      multiple: "",
                                      variant: "outlined",
                                      divided: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, { icon: "mdi-format-italic" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, { icon: "mdi-format-bold" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, { icon: "mdi-format-underline" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, { icon: "mdi-format-align-center" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, { icon: "mdi-format-align-left" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, { icon: "mdi-format-align-right" })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      label: "Description",
                                      placeholder: "Description",
                                      variant: "outlined",
                                      "auto-grow": "",
                                      class: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_textarea, {
                                        label: "Description",
                                        placeholder: "Description",
                                        variant: "outlined",
                                        "auto-grow": "",
                                        class: ""
                                      })
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
                                      label: "Description",
                                      placeholder: "Description",
                                      variant: "outlined",
                                      "auto-grow": "",
                                      class: ""
                                    })
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
                                sm: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      label: "Product Cost",
                                      placeholder: "Product Cost",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Product Cost",
                                        placeholder: "Product Cost",
                                        variant: "outlined"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      label: "Shipping First Item Cost",
                                      placeholder: "Shipping First Item Cost",
                                      variant: "outlined"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].first_item.cost)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].first_item.cost), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Shipping First Item Cost",
                                        placeholder: "Shipping First Item Cost",
                                        variant: "outlined"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].first_item.cost), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      label: "Shipping Additional Items Cost",
                                      placeholder: "Shipping Additional Items Cost",
                                      variant: "outlined"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].additional_items.cost)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].additional_items.cost), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Shipping Additional Items Cost",
                                        placeholder: "Shipping Additional Items Cost",
                                        variant: "outlined"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].additional_items.cost), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      label: "Retail Price",
                                      placeholder: "Retail Price",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Retail Price",
                                        placeholder: "Retail Price",
                                        variant: "outlined"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      label: "Profit",
                                      placeholder: "Profit",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Profit",
                                        placeholder: "Profit",
                                        variant: "outlined"
                                      })
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
                                      label: "Product Cost",
                                      placeholder: "Product Cost",
                                      variant: "outlined"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Shipping First Item Cost",
                                      placeholder: "Shipping First Item Cost",
                                      variant: "outlined"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].first_item.cost), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Shipping Additional Items Cost",
                                      placeholder: "Shipping Additional Items Cost",
                                      variant: "outlined"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].additional_items.cost), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Retail Price",
                                      placeholder: "Retail Price",
                                      variant: "outlined"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Profit",
                                      placeholder: "Profit",
                                      variant: "outlined"
                                    })
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
                                    _push6(ssrRenderComponent(_component_FirebaseUpload, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_FirebaseUpload)
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
                                    createVNode(_component_FirebaseUpload)
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
                                                  size: "large"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`Publish `);
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_icon, {
                                                          icon: "mdi-email",
                                                          class: "mr-3"
                                                        }),
                                                        createTextVNode("Publish ")
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
                                                      createTextVNode("Publish ")
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
                                                    size: "large"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }),
                                                      createTextVNode("Publish ")
                                                    ]),
                                                    _: 1
                                                  })
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
                                                  size: "large"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, {
                                                      icon: "mdi-email",
                                                      class: "mr-3"
                                                    }),
                                                    createTextVNode("Publish ")
                                                  ]),
                                                  _: 1
                                                })
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
                                                size: "large"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, {
                                                    icon: "mdi-email",
                                                    class: "mr-3"
                                                  }),
                                                  createTextVNode("Publish ")
                                                ]),
                                                _: 1
                                              })
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
                                      _push6(ssrRenderComponent(_component_v_text, { class: "text-3xl" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Product Details `);
                                          } else {
                                            return [
                                              createTextVNode(" Product Details ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_item_group, {
                                        multiple: "",
                                        "selected-class": "bg-purple"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="text-caption mb-2"${_scopeId6}> Tags </div><!--[-->`);
                                            ssrRenderList(blueprint.value.tags.length, (n) => {
                                              _push7(ssrRenderComponent(_component_v_item, { key: n }, {
                                                default: withCtx(({ selectedClass, toggle }, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_chip, {
                                                      class: selectedClass,
                                                      onClick: toggle
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(` Tag ${ssrInterpolate(blueprint.value.tag[n])}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(" Tag " + toDisplayString(blueprint.value.tag[n]), 1)
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
                                                          createTextVNode(" Tag " + toDisplayString(blueprint.value.tag[n]), 1)
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
                                              (openBlock(true), createBlock(Fragment, null, renderList(blueprint.value.tags.length, (n) => {
                                                return openBlock(), createBlock(_component_v_item, { key: n }, {
                                                  default: withCtx(({ selectedClass, toggle }) => [
                                                    createVNode(_component_v_chip, {
                                                      class: selectedClass,
                                                      onClick: toggle
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Tag " + toDisplayString(blueprint.value.tag[n]), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class", "onClick"])
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_text, { class: "text-3xl" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Product Details ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_item_group, {
                                          multiple: "",
                                          "selected-class": "bg-purple"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-caption mb-2" }, " Tags "),
                                            (openBlock(true), createBlock(Fragment, null, renderList(blueprint.value.tags.length, (n) => {
                                              return openBlock(), createBlock(_component_v_item, { key: n }, {
                                                default: withCtx(({ selectedClass, toggle }) => [
                                                  createVNode(_component_v_chip, {
                                                    class: selectedClass,
                                                    onClick: toggle
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Tag " + toDisplayString(blueprint.value.tag[n]), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class", "onClick"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
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
                                    createVNode(_component_v_text, { class: "text-3xl" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Product Details ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_item_group, {
                                      multiple: "",
                                      "selected-class": "bg-purple"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption mb-2" }, " Tags "),
                                        (openBlock(true), createBlock(Fragment, null, renderList(blueprint.value.tags.length, (n) => {
                                          return openBlock(), createBlock(_component_v_item, { key: n }, {
                                            default: withCtx(({ selectedClass, toggle }) => [
                                              createVNode(_component_v_chip, {
                                                class: selectedClass,
                                                onClick: toggle
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Tag " + toDisplayString(blueprint.value.tag[n]), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class", "onClick"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
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
                                    label: "Product Title",
                                    placeholder: "Product  Title",
                                    variant: "outlined"
                                  })
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
                                    label: "Category",
                                    placeholder: "Category",
                                    variant: "outlined",
                                    class: ""
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
                                  createVNode(_component_v_text_field, {
                                    label: "Blueprint ID",
                                    variant: "outlined",
                                    class: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(blueprint.value.id), 1)
                                    ]),
                                    _: 1
                                  })
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
                                  createVNode(_component_v_text_field, {
                                    label: "Tags",
                                    placeholder: "Tags",
                                    variant: "outlined",
                                    class: ""
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
                                  createVNode(_component_v_text_field, {
                                    label: "Print Provider",
                                    placeholder: "Print Provider",
                                    variant: "outlined",
                                    class: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.id) + ") ", 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    label: "Variant",
                                    placeholder: "Variant",
                                    variant: "outlined",
                                    class: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].id) + ") ", 1)
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
                                  createVNode(_component_v_btn_toggle, {
                                    modelValue: _ctx.formatting,
                                    "onUpdate:modelValue": ($event) => _ctx.formatting = $event,
                                    multiple: "",
                                    variant: "outlined",
                                    divided: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { icon: "mdi-format-italic" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { icon: "mdi-format-bold" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { icon: "mdi-format-underline" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { icon: "mdi-format-align-center" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { icon: "mdi-format-align-left" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { icon: "mdi-format-align-right" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    label: "Description",
                                    placeholder: "Description",
                                    variant: "outlined",
                                    "auto-grow": "",
                                    class: ""
                                  })
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
                                sm: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Product Cost",
                                    placeholder: "Product Cost",
                                    variant: "outlined"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Shipping First Item Cost",
                                    placeholder: "Shipping First Item Cost",
                                    variant: "outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].first_item.cost), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Shipping Additional Items Cost",
                                    placeholder: "Shipping Additional Items Cost",
                                    variant: "outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].additional_items.cost), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Retail Price",
                                    placeholder: "Retail Price",
                                    variant: "outlined"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Profit",
                                    placeholder: "Profit",
                                    variant: "outlined"
                                  })
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
                                  createVNode(_component_FirebaseUpload)
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
                                              size: "large"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, {
                                                  icon: "mdi-email",
                                                  class: "mr-3"
                                                }),
                                                createTextVNode("Publish ")
                                              ]),
                                              _: 1
                                            })
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
                                  createVNode(_component_v_text, { class: "text-3xl" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Product Details ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_item_group, {
                                    multiple: "",
                                    "selected-class": "bg-purple"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption mb-2" }, " Tags "),
                                      (openBlock(true), createBlock(Fragment, null, renderList(blueprint.value.tags.length, (n) => {
                                        return openBlock(), createBlock(_component_v_item, { key: n }, {
                                          default: withCtx(({ selectedClass, toggle }) => [
                                            createVNode(_component_v_chip, {
                                              class: selectedClass,
                                              onClick: toggle
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Tag " + toDisplayString(blueprint.value.tag[n]), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class", "onClick"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
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
                                  label: "Product Title",
                                  placeholder: "Product  Title",
                                  variant: "outlined"
                                })
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
                                  label: "Category",
                                  placeholder: "Category",
                                  variant: "outlined",
                                  class: ""
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
                                createVNode(_component_v_text_field, {
                                  label: "Blueprint ID",
                                  variant: "outlined",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(blueprint.value.id), 1)
                                  ]),
                                  _: 1
                                })
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
                                createVNode(_component_v_text_field, {
                                  label: "Tags",
                                  placeholder: "Tags",
                                  variant: "outlined",
                                  class: ""
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
                                createVNode(_component_v_text_field, {
                                  label: "Print Provider",
                                  placeholder: "Print Provider",
                                  variant: "outlined",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.id) + ") ", 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  label: "Variant",
                                  placeholder: "Variant",
                                  variant: "outlined",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].id) + ") ", 1)
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
                                createVNode(_component_v_btn_toggle, {
                                  modelValue: _ctx.formatting,
                                  "onUpdate:modelValue": ($event) => _ctx.formatting = $event,
                                  multiple: "",
                                  variant: "outlined",
                                  divided: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { icon: "mdi-format-italic" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { icon: "mdi-format-bold" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { icon: "mdi-format-underline" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { icon: "mdi-format-align-center" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { icon: "mdi-format-align-left" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { icon: "mdi-format-align-right" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  label: "Description",
                                  placeholder: "Description",
                                  variant: "outlined",
                                  "auto-grow": "",
                                  class: ""
                                })
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
                              sm: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  label: "Product Cost",
                                  placeholder: "Product Cost",
                                  variant: "outlined"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  label: "Shipping First Item Cost",
                                  placeholder: "Shipping First Item Cost",
                                  variant: "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].first_item.cost), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  label: "Shipping Additional Items Cost",
                                  placeholder: "Shipping Additional Items Cost",
                                  variant: "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].additional_items.cost), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  label: "Retail Price",
                                  placeholder: "Retail Price",
                                  variant: "outlined"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  label: "Profit",
                                  placeholder: "Profit",
                                  variant: "outlined"
                                })
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
                                createVNode(_component_FirebaseUpload)
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
                                            size: "large"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, {
                                                icon: "mdi-email",
                                                class: "mr-3"
                                              }),
                                              createTextVNode("Publish ")
                                            ]),
                                            _: 1
                                          })
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
                                createVNode(_component_v_text, { class: "text-3xl" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Product Details ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider),
                                createVNode(_component_v_item_group, {
                                  multiple: "",
                                  "selected-class": "bg-purple"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption mb-2" }, " Tags "),
                                    (openBlock(true), createBlock(Fragment, null, renderList(blueprint.value.tags.length, (n) => {
                                      return openBlock(), createBlock(_component_v_item, { key: n }, {
                                        default: withCtx(({ selectedClass, toggle }) => [
                                          createVNode(_component_v_chip, {
                                            class: selectedClass,
                                            onClick: toggle
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Tag " + toDisplayString(blueprint.value.tag[n]), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["class", "onClick"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                                label: "Product Title",
                                placeholder: "Product  Title",
                                variant: "outlined"
                              })
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
                                label: "Category",
                                placeholder: "Category",
                                variant: "outlined",
                                class: ""
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
                              createVNode(_component_v_text_field, {
                                label: "Blueprint ID",
                                variant: "outlined",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(blueprint.value.id), 1)
                                ]),
                                _: 1
                              })
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
                              createVNode(_component_v_text_field, {
                                label: "Tags",
                                placeholder: "Tags",
                                variant: "outlined",
                                class: ""
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
                              createVNode(_component_v_text_field, {
                                label: "Print Provider",
                                placeholder: "Print Provider",
                                variant: "outlined",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].printProvider.id) + ") ", 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                label: "Variant",
                                placeholder: "Variant",
                                variant: "outlined",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].title) + " (ID: " + toDisplayString(blueprint.value.variants[blueprint.value.variantNum].id) + ") ", 1)
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
                              createVNode(_component_v_btn_toggle, {
                                modelValue: _ctx.formatting,
                                "onUpdate:modelValue": ($event) => _ctx.formatting = $event,
                                multiple: "",
                                variant: "outlined",
                                divided: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { icon: "mdi-format-italic" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { icon: "mdi-format-bold" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { icon: "mdi-format-underline" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { icon: "mdi-format-align-center" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { icon: "mdi-format-align-left" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { icon: "mdi-format-align-right" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                label: "Description",
                                placeholder: "Description",
                                variant: "outlined",
                                "auto-grow": "",
                                class: ""
                              })
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
                            sm: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                label: "Product Cost",
                                placeholder: "Product Cost",
                                variant: "outlined"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                label: "Shipping First Item Cost",
                                placeholder: "Shipping First Item Cost",
                                variant: "outlined"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].first_item.cost), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                label: "Shipping Additional Items Cost",
                                placeholder: "Shipping Additional Items Cost",
                                variant: "outlined"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(blueprint.value.variants[blueprint.value.variantNum].shippingProfiles[0].additional_items.cost), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                label: "Retail Price",
                                placeholder: "Retail Price",
                                variant: "outlined"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                label: "Profit",
                                placeholder: "Profit",
                                variant: "outlined"
                              })
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
                              createVNode(_component_FirebaseUpload)
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
                                          size: "large"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              icon: "mdi-email",
                                              class: "mr-3"
                                            }),
                                            createTextVNode("Publish ")
                                          ]),
                                          _: 1
                                        })
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
                              createVNode(_component_v_text, { class: "text-3xl" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Product Details ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_divider),
                              createVNode(_component_v_item_group, {
                                multiple: "",
                                "selected-class": "bg-purple"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-caption mb-2" }, " Tags "),
                                  (openBlock(true), createBlock(Fragment, null, renderList(blueprint.value.tags.length, (n) => {
                                    return openBlock(), createBlock(_component_v_item, { key: n }, {
                                      default: withCtx(({ selectedClass, toggle }) => [
                                        createVNode(_component_v_chip, {
                                          class: selectedClass,
                                          onClick: toggle
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Tag " + toDisplayString(blueprint.value.tag[n]), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "onClick"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/product/create/[blueprintId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_blueprintId_.c68475ee.mjs.map
