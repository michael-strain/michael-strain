import { ref, resolveComponent, withCtx, mergeProps, createTextVNode, openBlock, createBlock, createVNode, createCommentVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const __default__ = {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: [
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth"
      ],
      tab: "Appetizers",
      items: [
        "Appetizers",
        "Entrees",
        "Deserts",
        "Cocktails"
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      cards: [
        { title: "Pre-fab homes", src: "https://cdn.vuetifyjs.com/images/cards/house.jpg", flex: 4 },
        { title: "Favorite road trips", src: "https://cdn.vuetifyjs.com/images/cards/road.jpg", flex: 4 },
        { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 4 },
        { title: "Pre-fab homes", src: "https://cdn.vuetifyjs.com/images/cards/house.jpg", flex: 4 },
        { title: "Favorite road trips", src: "https://cdn.vuetifyjs.com/images/cards/road.jpg", flex: 4 },
        { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 4 }
      ]
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "old-index",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_hover = resolveComponent("v-hover");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_expand_x_transition = resolveComponent("v-expand-x-transition");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_hover, null, {
              default: withCtx(({ isHovering, props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, mergeProps({
                    class: "mx-auto",
                    color: "grey-lighten-4",
                    "max-width": "600"
                  }, props), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_img, {
                          "aspect-ratio": 16 / 9,
                          cover: "",
                          src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_expand_x_transition, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (isHovering) {
                                      _push6(`<div class="d-flex transition-fast-in-fast-out backdrop-opacity-10 backdrop-invert bg-white/50 v-card--reveal text-h2 items-center align-center justify-center" style="${ssrRenderStyle({ "height": "100%" })}"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        class: "outlined raised",
                                        color: "primary",
                                        size: "x-large"
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` VIEW `);
                                          } else {
                                            return [
                                              createTextVNode(" VIEW ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      isHovering ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "d-flex transition-fast-in-fast-out backdrop-opacity-10 backdrop-invert bg-white/50 v-card--reveal text-h2 items-center align-center justify-center",
                                        style: { "height": "100%" }
                                      }, [
                                        createVNode(_component_v_btn, {
                                          class: "outlined raised",
                                          color: "primary",
                                          size: "x-large"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" VIEW ")
                                          ]),
                                          _: 1
                                        })
                                      ])) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card_title, { class: "text-h5" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Item Type`);
                                  } else {
                                    return [
                                      createTextVNode("Item Type")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_expand_x_transition, null, {
                                  default: withCtx(() => [
                                    isHovering ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "d-flex transition-fast-in-fast-out backdrop-opacity-10 backdrop-invert bg-white/50 v-card--reveal text-h2 items-center align-center justify-center",
                                      style: { "height": "100%" }
                                    }, [
                                      createVNode(_component_v_btn, {
                                        class: "outlined raised",
                                        color: "primary",
                                        size: "x-large"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" VIEW ")
                                        ]),
                                        _: 1
                                      })
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_card_title, { class: "text-h5" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Item Type")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_text, { class: "pt-6 text-center" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h3 class="text-h4 text-primary mb-2"${_scopeId4}> Product Name </h3><div class="text-h5 mb-2"${_scopeId4}> $10.00 </div>`);
                            } else {
                              return [
                                createVNode("h3", { class: "text-h4 text-primary mb-2" }, " Product Name "),
                                createVNode("div", { class: "text-h5 mb-2" }, " $10.00 ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_img, {
                            "aspect-ratio": 16 / 9,
                            cover: "",
                            src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expand_x_transition, null, {
                                default: withCtx(() => [
                                  isHovering ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "d-flex transition-fast-in-fast-out backdrop-opacity-10 backdrop-invert bg-white/50 v-card--reveal text-h2 items-center align-center justify-center",
                                    style: { "height": "100%" }
                                  }, [
                                    createVNode(_component_v_btn, {
                                      class: "outlined raised",
                                      color: "primary",
                                      size: "x-large"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" VIEW ")
                                      ]),
                                      _: 1
                                    })
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_card_title, { class: "text-h5" }, {
                                default: withCtx(() => [
                                  createTextVNode("Item Type")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_card_text, { class: "pt-6 text-center" }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "text-h4 text-primary mb-2" }, " Product Name "),
                              createVNode("div", { class: "text-h5 mb-2" }, " $10.00 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, mergeProps({
                      class: "mx-auto",
                      color: "grey-lighten-4",
                      "max-width": "600"
                    }, props), {
                      default: withCtx(() => [
                        createVNode(_component_v_img, {
                          "aspect-ratio": 16 / 9,
                          cover: "",
                          src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_expand_x_transition, null, {
                              default: withCtx(() => [
                                isHovering ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "d-flex transition-fast-in-fast-out backdrop-opacity-10 backdrop-invert bg-white/50 v-card--reveal text-h2 items-center align-center justify-center",
                                  style: { "height": "100%" }
                                }, [
                                  createVNode(_component_v_btn, {
                                    class: "outlined raised",
                                    color: "primary",
                                    size: "x-large"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" VIEW ")
                                    ]),
                                    _: 1
                                  })
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_card_title, { class: "text-h5" }, {
                              default: withCtx(() => [
                                createTextVNode("Item Type")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_card_text, { class: "pt-6 text-center" }, {
                          default: withCtx(() => [
                            createVNode("h3", { class: "text-h4 text-primary mb-2" }, " Product Name "),
                            createVNode("div", { class: "text-h5 mb-2" }, " $10.00 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_v_hover, null, {
                  default: withCtx(({ isHovering, props }) => [
                    createVNode(_component_v_card, mergeProps({
                      class: "mx-auto",
                      color: "grey-lighten-4",
                      "max-width": "600"
                    }, props), {
                      default: withCtx(() => [
                        createVNode(_component_v_img, {
                          "aspect-ratio": 16 / 9,
                          cover: "",
                          src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_expand_x_transition, null, {
                              default: withCtx(() => [
                                isHovering ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "d-flex transition-fast-in-fast-out backdrop-opacity-10 backdrop-invert bg-white/50 v-card--reveal text-h2 items-center align-center justify-center",
                                  style: { "height": "100%" }
                                }, [
                                  createVNode(_component_v_btn, {
                                    class: "outlined raised",
                                    color: "primary",
                                    size: "x-large"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" VIEW ")
                                    ]),
                                    _: 1
                                  })
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_card_title, { class: "text-h5" }, {
                              default: withCtx(() => [
                                createTextVNode("Item Type")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_card_text, { class: "pt-6 text-center" }, {
                          default: withCtx(() => [
                            createVNode("h3", { class: "text-h4 text-primary mb-2" }, " Product Name "),
                            createVNode("div", { class: "text-h5 mb-2" }, " $10.00 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, { fluid: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, { dense: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(_ctx.cards, (card) => {
                          _push4(ssrRenderComponent(_component_v_col, {
                            key: card.title,
                            cols: card.flex
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_img, {
                                        src: card.src,
                                        class: "text-white align-end",
                                        gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                        height: "200px"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_card_title, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(card.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(card.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(card.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_img, {
                                          src: card.src,
                                          class: "text-white align-end",
                                          gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                          height: "200px"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(card.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: card.src,
                                        class: "text-white align-end",
                                        gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                        height: "200px"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(card.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.cards, (card) => {
                            return openBlock(), createBlock(_component_v_col, {
                              key: card.title,
                              cols: card.flex
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: card.src,
                                      class: "text-white align-end",
                                      gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                      height: "200px"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(card.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["cols"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, { dense: "" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.cards, (card) => {
                          return openBlock(), createBlock(_component_v_col, {
                            key: card.title,
                            cols: card.flex
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: card.src,
                                    class: "text-white align-end",
                                    gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                    height: "200px"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(card.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["src"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["cols"]);
                        }), 128))
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
              createVNode(_component_v_container, { fluid: "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { dense: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.cards, (card) => {
                        return openBlock(), createBlock(_component_v_col, {
                          key: card.title,
                          cols: card.flex
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: card.src,
                                  class: "text-white align-end",
                                  gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                  height: "200px"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(card.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["src"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["cols"]);
                      }), 128))
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/product/create/old-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=old-index.b6c57260.mjs.map
