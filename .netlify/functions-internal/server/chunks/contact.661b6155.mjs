import { ref, resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(false);
    ref(["Yes", "No", "Maybe"]);
    ref("");
    ref("");
    ref([(v) => !!v || "Name is required."]);
    ref("");
    ref([
      (v) => !!v || "E-mail is required.",
      (v) => /.+@.+/.test(v) || "E-mail must be formVal"
    ]);
    ref("");
    ref([
      (v) => !!v || "Hello?"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_parallax = resolveComponent("v-parallax");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="h-screen w-full p-0 m-0">`);
      _push(ssrRenderComponent(_component_v_parallax, {
        src: "img/purple-red-tree.jpg",
        "lazy-src": "img/purple-red-tree.jpg",
        class: "items-center align-middle p-0 m-0 h-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_form, { class: "flex text-center align-middle items-center justify-center flex-shrink mt-20" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { class: "w-2/3 my-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_container, { class: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h3 class="justify-center text-center align-center font-bold text-5xl mt-5 mb-10" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" })}"${_scopeId4}> Contact Us </h3>`);
                              _push5(ssrRenderComponent(_component_v_row, { class: "bg-custcard pt-5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "",
                                      class: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "First Name",
                                            placeholder: "First Name",
                                            variant: "solo"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "First Name",
                                              placeholder: "First Name",
                                              variant: "solo"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Last Name",
                                            placeholder: "Last Name",
                                            variant: "solo",
                                            class: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Last Name",
                                              placeholder: "Last Name",
                                              variant: "solo",
                                              class: ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "",
                                        class: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "First Name",
                                            placeholder: "First Name",
                                            variant: "solo"
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
                                            label: "Last Name",
                                            placeholder: "Last Name",
                                            variant: "solo",
                                            class: ""
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, { class: "bg-custcard" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Email Address",
                                            placeholder: "Email Address",
                                            variant: "solo"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Email Address",
                                              placeholder: "Email Address",
                                              variant: "solo"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Phone Number",
                                            placeholder: "Phone Number",
                                            variant: "solo"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Phone Number",
                                              placeholder: "Phone Number",
                                              variant: "solo"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Email Address",
                                            placeholder: "Email Address",
                                            variant: "solo"
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
                                            label: "Phone Number",
                                            placeholder: "Phone Number",
                                            variant: "solo"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, { class: "bg-custcard" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_textarea, {
                                            label: "Message",
                                            placeholder: "Message",
                                            variant: "solo",
                                            "auto-grow": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_textarea, {
                                              label: "Message",
                                              placeholder: "Message",
                                              variant: "solo",
                                              "auto-grow": ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_textarea, {
                                            label: "Message",
                                            placeholder: "Message",
                                            variant: "solo",
                                            "auto-grow": ""
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, { class: "bg-custcard" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="sm:flex align-middle items-center h-min"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_btn, { class: "align-middle items-center h-full" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_icon, {
                                                              icon: "mdi-email",
                                                              class: "mr-3"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(`Send Message `);
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_icon, {
                                                                icon: "mdi-email",
                                                                class: "mr-3"
                                                              }),
                                                              createTextVNode("Send Message ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_btn, { class: "align-middle items-center h-full" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, {
                                                              icon: "mdi-email",
                                                              class: "mr-3"
                                                            }),
                                                            createTextVNode("Send Message ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6",
                                                  class: ""
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_checkbox, {
                                                        class: "h-14",
                                                        label: "Subscribe to Emails"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_checkbox, {
                                                          class: "h-14",
                                                          label: "Subscribe to Emails"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      sm: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, { class: "align-middle items-center h-full" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, {
                                                              icon: "mdi-email",
                                                              class: "mr-3"
                                                            }),
                                                            createTextVNode("Send Message ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      sm: "6",
                                                      class: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox, {
                                                          class: "h-14",
                                                          label: "Subscribe to Emails"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, { class: "align-middle items-center h-full" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, {
                                                            icon: "mdi-email",
                                                            class: "mr-3"
                                                          }),
                                                          createTextVNode("Send Message ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6",
                                                    class: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_checkbox, {
                                                        class: "h-14",
                                                        label: "Subscribe to Emails"
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, { class: "align-middle items-center h-full" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, {
                                                          icon: "mdi-email",
                                                          class: "mr-3"
                                                        }),
                                                        createTextVNode("Send Message ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6",
                                                  class: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      class: "h-14",
                                                      label: "Subscribe to Emails"
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h3", {
                                  class: "justify-center text-center align-center font-bold text-5xl mt-5 mb-10",
                                  style: { fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" }
                                }, " Contact Us ", 4),
                                createVNode(_component_v_row, { class: "bg-custcard pt-5" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "First Name",
                                          placeholder: "First Name",
                                          variant: "solo"
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
                                          label: "Last Name",
                                          placeholder: "Last Name",
                                          variant: "solo",
                                          class: ""
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, { class: "bg-custcard" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "Email Address",
                                          placeholder: "Email Address",
                                          variant: "solo"
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
                                          label: "Phone Number",
                                          placeholder: "Phone Number",
                                          variant: "solo"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, { class: "bg-custcard" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_textarea, {
                                          label: "Message",
                                          placeholder: "Message",
                                          variant: "solo",
                                          "auto-grow": ""
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, { class: "bg-custcard" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, { class: "align-middle items-center h-full" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, {
                                                        icon: "mdi-email",
                                                        class: "mr-3"
                                                      }),
                                                      createTextVNode("Send Message ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "6",
                                                class: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    class: "h-14",
                                                    label: "Subscribe to Emails"
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
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_container, { class: "" }, {
                            default: withCtx(() => [
                              createVNode("h3", {
                                class: "justify-center text-center align-center font-bold text-5xl mt-5 mb-10",
                                style: { fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" }
                              }, " Contact Us ", 4),
                              createVNode(_component_v_row, { class: "bg-custcard pt-5" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "",
                                    class: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "First Name",
                                        placeholder: "First Name",
                                        variant: "solo"
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
                                        label: "Last Name",
                                        placeholder: "Last Name",
                                        variant: "solo",
                                        class: ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, { class: "bg-custcard" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Email Address",
                                        placeholder: "Email Address",
                                        variant: "solo"
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
                                        label: "Phone Number",
                                        placeholder: "Phone Number",
                                        variant: "solo"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, { class: "bg-custcard" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_textarea, {
                                        label: "Message",
                                        placeholder: "Message",
                                        variant: "solo",
                                        "auto-grow": ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, { class: "bg-custcard" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, { class: "align-middle items-center h-full" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, {
                                                      icon: "mdi-email",
                                                      class: "mr-3"
                                                    }),
                                                    createTextVNode("Send Message ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6",
                                              class: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_checkbox, {
                                                  class: "h-14",
                                                  label: "Subscribe to Emails"
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
                              })
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
                    createVNode(_component_v_card, { class: "w-2/3 my-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, { class: "" }, {
                          default: withCtx(() => [
                            createVNode("h3", {
                              class: "justify-center text-center align-center font-bold text-5xl mt-5 mb-10",
                              style: { fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" }
                            }, " Contact Us ", 4),
                            createVNode(_component_v_row, { class: "bg-custcard pt-5" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "First Name",
                                      placeholder: "First Name",
                                      variant: "solo"
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
                                      label: "Last Name",
                                      placeholder: "Last Name",
                                      variant: "solo",
                                      class: ""
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, { class: "bg-custcard" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Email Address",
                                      placeholder: "Email Address",
                                      variant: "solo"
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
                                      label: "Phone Number",
                                      placeholder: "Phone Number",
                                      variant: "solo"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, { class: "bg-custcard" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_textarea, {
                                      label: "Message",
                                      placeholder: "Message",
                                      variant: "solo",
                                      "auto-grow": ""
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, { class: "bg-custcard" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, { class: "align-middle items-center h-full" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, {
                                                    icon: "mdi-email",
                                                    class: "mr-3"
                                                  }),
                                                  createTextVNode("Send Message ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            class: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_checkbox, {
                                                class: "h-14",
                                                label: "Subscribe to Emails"
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_form, { class: "flex text-center align-middle items-center justify-center flex-shrink mt-20" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { class: "w-2/3 my-5" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, { class: "" }, {
                        default: withCtx(() => [
                          createVNode("h3", {
                            class: "justify-center text-center align-center font-bold text-5xl mt-5 mb-10",
                            style: { fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" }
                          }, " Contact Us ", 4),
                          createVNode(_component_v_row, { class: "bg-custcard pt-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "First Name",
                                    placeholder: "First Name",
                                    variant: "solo"
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
                                    label: "Last Name",
                                    placeholder: "Last Name",
                                    variant: "solo",
                                    class: ""
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "bg-custcard" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Email Address",
                                    placeholder: "Email Address",
                                    variant: "solo"
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
                                    label: "Phone Number",
                                    placeholder: "Phone Number",
                                    variant: "solo"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "bg-custcard" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_textarea, {
                                    label: "Message",
                                    placeholder: "Message",
                                    variant: "solo",
                                    "auto-grow": ""
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "bg-custcard" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { class: "flex text-center align-middle items-center justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "sm:flex align-middle items-center h-min" }, [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, { class: "align-middle items-center h-full" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, {
                                                  icon: "mdi-email",
                                                  class: "mr-3"
                                                }),
                                                createTextVNode("Send Message ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          class: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_checkbox, {
                                              class: "h-14",
                                              label: "Subscribe to Emails"
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
                          })
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact.661b6155.mjs.map
