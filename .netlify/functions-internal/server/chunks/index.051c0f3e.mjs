import { _ as __nuxt_component_0$2 } from './server.mjs';
import { useSSRContext, resolveComponent, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './brugmansia.a3c941cd.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_card = resolveComponent("v-card");
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_v_card_title = resolveComponent("v-card-title");
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center self-stretch"${_scopeId2}><div class="w-full float-left text-center items-center m-5 p-5"${_scopeId2}><h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl filter hue-rotate-60 font-bold w-full" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "5px 5px #558ABB" })}"${_scopeId2}> Services </h1></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center self-stretch" }, [
                  createVNode("div", { class: "w-full float-left text-center items-center m-5 p-5" }, [
                    createVNode("h1", {
                      class: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl filter hue-rotate-60 font-bold w-full",
                      style: { fontFamily: "Roboto Slab", textShadow: "5px 5px #558ABB" }
                    }, " Services ")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card, { class: "p-5 m-5 h-auto hover:shadow-2xl" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/services/webDevelopment" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex justify-center items-center text-center"${_scopeId3}><div class="w-1/2 p-2"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_card, { class: "bg-custcard my-2" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_card_title, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p class="font-semibold text-xs sm:text-xl" style="${ssrRenderStyle({ textShadow: "2px 2px #558ABB" })}"${_scopeId5}> Back-End Web Development </p>`);
                              } else {
                                return [
                                  createVNode("p", {
                                    class: "font-semibold text-xs sm:text-xl",
                                    style: { textShadow: "2px 2px #558ABB" }
                                  }, " Back-End Web Development ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode("p", {
                                  class: "font-semibold text-xs sm:text-xl",
                                  style: { textShadow: "2px 2px #558ABB" }
                                }, " Back-End Web Development ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card, { class: "bg-custcard" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-sm m-2"${_scopeId4}> Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website. </p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-sm m-2" }, " Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div><div class="w-1/2 p-2"${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} class="contain w-full" style="${ssrRenderStyle({})}"${_scopeId3}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-center items-center text-center" }, [
                        createVNode("div", { class: "w-1/2 p-2" }, [
                          createVNode(_component_v_card, { class: "bg-custcard my-2" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createVNode("p", {
                                    class: "font-semibold text-xs sm:text-xl",
                                    style: { textShadow: "2px 2px #558ABB" }
                                  }, " Back-End Web Development ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card, { class: "bg-custcard" }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-sm m-2" }, " Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website. ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "w-1/2 p-2" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "contain w-full",
                            style: {}
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/services/webDevelopment" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex justify-center items-center text-center" }, [
                      createVNode("div", { class: "w-1/2 p-2" }, [
                        createVNode(_component_v_card, { class: "bg-custcard my-2" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode("p", {
                                  class: "font-semibold text-xs sm:text-xl",
                                  style: { textShadow: "2px 2px #558ABB" }
                                }, " Back-End Web Development ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card, { class: "bg-custcard" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-sm m-2" }, " Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website. ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "w-1/2 p-2" }, [
                        createVNode("img", {
                          src: _imports_0,
                          class: "contain w-full",
                          style: {}
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card, { class: "p-5 m-5 h-auto hover:shadow-2xl" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/services/art" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex justify-center items-center text-center"${_scopeId3}><div class="w-1/2 p-2"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_card, { class: "bg-custcard my-2" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_card_title, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p class="font-semibold text-xs sm:text-xl" style="${ssrRenderStyle({ textShadow: "2px 2px #558ABB" })}"${_scopeId5}> Front-End Web Development </p>`);
                              } else {
                                return [
                                  createVNode("p", {
                                    class: "font-semibold text-xs sm:text-xl",
                                    style: { textShadow: "2px 2px #558ABB" }
                                  }, " Front-End Web Development ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode("p", {
                                  class: "font-semibold text-xs sm:text-xl",
                                  style: { textShadow: "2px 2px #558ABB" }
                                }, " Front-End Web Development ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card, { class: "bg-custcard" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-sm m-1"${_scopeId4}> Front-end website development is important because it deals with the visual design and user experience of a website. This includes things like HTML, CSS, and JavaScript, which are used to create the layout, style, and interactivity of a website. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings. Overall it is responsible for how website looks and feels to the end user. </p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-sm m-1" }, " Front-end website development is important because it deals with the visual design and user experience of a website. This includes things like HTML, CSS, and JavaScript, which are used to create the layout, style, and interactivity of a website. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings. Overall it is responsible for how website looks and feels to the end user. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div><div class="w-1/2 p-2"${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} class="contain w-full" style="${ssrRenderStyle({})}"${_scopeId3}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-center items-center text-center" }, [
                        createVNode("div", { class: "w-1/2 p-2" }, [
                          createVNode(_component_v_card, { class: "bg-custcard my-2" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createVNode("p", {
                                    class: "font-semibold text-xs sm:text-xl",
                                    style: { textShadow: "2px 2px #558ABB" }
                                  }, " Front-End Web Development ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card, { class: "bg-custcard" }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-sm m-1" }, " Front-end website development is important because it deals with the visual design and user experience of a website. This includes things like HTML, CSS, and JavaScript, which are used to create the layout, style, and interactivity of a website. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings. Overall it is responsible for how website looks and feels to the end user. ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "w-1/2 p-2" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "contain w-full",
                            style: {}
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/services/art" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex justify-center items-center text-center" }, [
                      createVNode("div", { class: "w-1/2 p-2" }, [
                        createVNode(_component_v_card, { class: "bg-custcard my-2" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode("p", {
                                  class: "font-semibold text-xs sm:text-xl",
                                  style: { textShadow: "2px 2px #558ABB" }
                                }, " Front-End Web Development ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card, { class: "bg-custcard" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-sm m-1" }, " Front-end website development is important because it deals with the visual design and user experience of a website. This includes things like HTML, CSS, and JavaScript, which are used to create the layout, style, and interactivity of a website. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings. Overall it is responsible for how website looks and feels to the end user. ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "w-1/2 p-2" }, [
                        createVNode("img", {
                          src: _imports_0,
                          class: "contain w-full",
                          style: {}
                        })
                      ])
                    ])
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
          createVNode(_component_v_card, null, {
            default: withCtx(() => [
              createVNode("div", { class: "flex items-center self-stretch" }, [
                createVNode("div", { class: "w-full float-left text-center items-center m-5 p-5" }, [
                  createVNode("h1", {
                    class: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl filter hue-rotate-60 font-bold w-full",
                    style: { fontFamily: "Roboto Slab", textShadow: "5px 5px #558ABB" }
                  }, " Services ")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_v_card, { class: "p-5 m-5 h-auto hover:shadow-2xl" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "/services/webDevelopment" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-center items-center text-center" }, [
                    createVNode("div", { class: "w-1/2 p-2" }, [
                      createVNode(_component_v_card, { class: "bg-custcard my-2" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, null, {
                            default: withCtx(() => [
                              createVNode("p", {
                                class: "font-semibold text-xs sm:text-xl",
                                style: { textShadow: "2px 2px #558ABB" }
                              }, " Back-End Web Development ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card, { class: "bg-custcard" }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-sm m-2" }, " Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website. ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "w-1/2 p-2" }, [
                      createVNode("img", {
                        src: _imports_0,
                        class: "contain w-full",
                        style: {}
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_card, { class: "p-5 m-5 h-auto hover:shadow-2xl" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "/services/art" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-center items-center text-center" }, [
                    createVNode("div", { class: "w-1/2 p-2" }, [
                      createVNode(_component_v_card, { class: "bg-custcard my-2" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, null, {
                            default: withCtx(() => [
                              createVNode("p", {
                                class: "font-semibold text-xs sm:text-xl",
                                style: { textShadow: "2px 2px #558ABB" }
                              }, " Front-End Web Development ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card, { class: "bg-custcard" }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-sm m-1" }, " Front-end website development is important because it deals with the visual design and user experience of a website. This includes things like HTML, CSS, and JavaScript, which are used to create the layout, style, and interactivity of a website. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings. Overall it is responsible for how website looks and feels to the end user. ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "w-1/2 p-2" }, [
                      createVNode("img", {
                        src: _imports_0,
                        class: "contain w-full",
                        style: {}
                      })
                    ])
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
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.051c0f3e.mjs.map
