import { _ as _sfc_main$1 } from './FirebaseUpload.a410d7d7.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';

const _sfc_main = {
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const blueprintId = ref();
    const select = ref([]);
    const items = ref([
      "Programming",
      "Design",
      "Vue",
      "Vuetify"
    ]);
    const doWeNeedDetails = ref(false);
    if (route.params.id) {
      blueprintId.value = route.params.id;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_combobox = resolveComponent("v-combobox");
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
                                      placeholder: "Blueprint ID",
                                      variant: "outlined",
                                      class: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(blueprintId.value)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(blueprintId.value), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Blueprint ID",
                                        placeholder: "Blueprint ID",
                                        variant: "outlined",
                                        class: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(blueprintId.value), 1)
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
                                      placeholder: "Blueprint ID",
                                      variant: "outlined",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(blueprintId.value), 1)
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
                                    _push6(ssrRenderComponent(_component_v_combobox, {
                                      modelValue: select.value,
                                      "onUpdate:modelValue": ($event) => select.value = $event,
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
                                        modelValue: select.value,
                                        "onUpdate:modelValue": ($event) => select.value = $event,
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
                                      modelValue: select.value,
                                      "onUpdate:modelValue": ($event) => select.value = $event,
                                      items: items.value,
                                      label: "Print Provider",
                                      clearable: "",
                                      "persistent-hint": "",
                                      variant: "outlined",
                                      chips: "",
                                      transition: "scale-transition"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_combobox, {
                                        modelValue: select.value,
                                        "onUpdate:modelValue": ($event) => select.value = $event,
                                        items: items.value,
                                        label: "Print Provider",
                                        clearable: "",
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
                                    createVNode(_component_v_combobox, {
                                      modelValue: select.value,
                                      "onUpdate:modelValue": ($event) => select.value = $event,
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
                                      modelValue: select.value,
                                      "onUpdate:modelValue": ($event) => select.value = $event,
                                      items: items.value,
                                      label: "Print Provider",
                                      clearable: "",
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
                                      label: "Shipping Cost",
                                      placeholder: "Shipping Cost",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Shipping Cost",
                                        placeholder: "Shipping Cost",
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
                                      label: "Shipping Cost",
                                      placeholder: "Shipping Cost",
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
                                    placeholder: "Blueprint ID",
                                    variant: "outlined",
                                    class: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(blueprintId.value), 1)
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
                                  createVNode(_component_v_combobox, {
                                    modelValue: select.value,
                                    "onUpdate:modelValue": ($event) => select.value = $event,
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
                                    modelValue: select.value,
                                    "onUpdate:modelValue": ($event) => select.value = $event,
                                    items: items.value,
                                    label: "Print Provider",
                                    clearable: "",
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
                                    label: "Shipping Cost",
                                    placeholder: "Shipping Cost",
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
                                  placeholder: "Blueprint ID",
                                  variant: "outlined",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(blueprintId.value), 1)
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
                                createVNode(_component_v_combobox, {
                                  modelValue: select.value,
                                  "onUpdate:modelValue": ($event) => select.value = $event,
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
                                  modelValue: select.value,
                                  "onUpdate:modelValue": ($event) => select.value = $event,
                                  items: items.value,
                                  label: "Print Provider",
                                  clearable: "",
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
                                  label: "Shipping Cost",
                                  placeholder: "Shipping Cost",
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
                                placeholder: "Blueprint ID",
                                variant: "outlined",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(blueprintId.value), 1)
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
                              createVNode(_component_v_combobox, {
                                modelValue: select.value,
                                "onUpdate:modelValue": ($event) => select.value = $event,
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
                                modelValue: select.value,
                                "onUpdate:modelValue": ($event) => select.value = $event,
                                items: items.value,
                                label: "Print Provider",
                                clearable: "",
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
                                label: "Shipping Cost",
                                placeholder: "Shipping Cost",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reference/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test.300ba3b3.mjs.map
