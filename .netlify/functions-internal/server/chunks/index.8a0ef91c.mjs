import { _ as __nuxt_component_0$2 } from './server.mjs';
import { useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode } from 'vue';
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
  const _component_v_parallax = resolveComponent("v-parallax");
  const _component_v_card = resolveComponent("v-card");
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_container = resolveComponent("v-container");
  _push(`<!--[--><div data-v-ce4f7154><div class="h-screen min-h-60 w-full m-0 p-0 flex" data-v-ce4f7154>`);
  _push(ssrRenderComponent(_component_v_parallax, {
    src: "img/coffee-mountain.jpg",
    "lazy-src": "img/coffee-mountain.jpg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex h-full" data-v-ce4f7154${_scopeId}><div class="&lt;sm:w-0 sm:w-3/4" data-v-ce4f7154${_scopeId}></div><div class="&lt;sm:w-full d-flex flex-column fill-height justify-center text-center align-center font-bold" data-v-ce4f7154${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_card, { class: "absolute h-full bg-black pb-15" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="h-1/4" data-v-ce4f7154${_scopeId2}></div><div class="bg-emerald-400 pt-6 pb-1" data-v-ce4f7154${_scopeId2}><h1 class="px-10 text-h4 !font-bold sm:text-h3 mb-4 tracking-widest font-serif" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "2px 2px #000000" })}" data-v-ce4f7154${_scopeId2}> WELCOME </h1></div><div class="px-5 py-6" data-v-ce4f7154${_scopeId2}><h4 class="subheading" data-v-ce4f7154${_scopeId2}> Grab a warm drink,<br data-v-ce4f7154${_scopeId2}>and read on to see<br data-v-ce4f7154${_scopeId2}>what we can do for you. </h4></div><div class="py-4 pr-8 pl-4 bg-slate-400" data-v-ce4f7154${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/services" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_btn, {
                      block: "",
                      class: "m-2 btnc1"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, {
                            start: "",
                            icon: "mdi-room-service-outline"
                          }, null, _parent5, _scopeId4));
                          _push5(`Services`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            end: "",
                            icon: "mdi-room-service-outline"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_icon, {
                              start: "",
                              icon: "mdi-room-service-outline"
                            }),
                            createTextVNode("Services"),
                            createVNode(_component_v_icon, {
                              end: "",
                              icon: "mdi-room-service-outline"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_btn, {
                        block: "",
                        class: "m-2 btnc1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            start: "",
                            icon: "mdi-room-service-outline"
                          }),
                          createTextVNode("Services"),
                          createVNode(_component_v_icon, {
                            end: "",
                            icon: "mdi-room-service-outline"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<a href="/shop" data-v-ce4f7154${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                block: "",
                class: "m-2 btnc2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_icon, {
                      start: "",
                      icon: "mdi-store"
                    }, null, _parent4, _scopeId3));
                    _push4(`Shop`);
                    _push4(ssrRenderComponent(_component_v_icon, {
                      end: "",
                      icon: "mdi-store"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_icon, {
                        start: "",
                        icon: "mdi-store"
                      }),
                      createTextVNode("Shop"),
                      createVNode(_component_v_icon, {
                        end: "",
                        icon: "mdi-store"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</a>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/investors" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_btn, {
                      block: "",
                      class: "m-2 btnc3"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, {
                            start: "",
                            icon: "mdi-chart-areaspline"
                          }, null, _parent5, _scopeId4));
                          _push5(`Invest`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            end: "",
                            icon: "mdi-chart-areaspline"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_icon, {
                              start: "",
                              icon: "mdi-chart-areaspline"
                            }),
                            createTextVNode("Invest"),
                            createVNode(_component_v_icon, {
                              end: "",
                              icon: "mdi-chart-areaspline"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_btn, {
                        block: "",
                        class: "m-2 btnc3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            start: "",
                            icon: "mdi-chart-areaspline"
                          }),
                          createTextVNode("Invest"),
                          createVNode(_component_v_icon, {
                            end: "",
                            icon: "mdi-chart-areaspline"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/donate" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_btn, {
                      block: "",
                      class: "m-2 btnc4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, {
                            start: "",
                            icon: "mdi-charity"
                          }, null, _parent5, _scopeId4));
                          _push5(`Donate`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            end: "",
                            icon: "mdi-charity"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_icon, {
                              start: "",
                              icon: "mdi-charity"
                            }),
                            createTextVNode("Donate"),
                            createVNode(_component_v_icon, {
                              end: "",
                              icon: "mdi-charity"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_btn, {
                        block: "",
                        class: "m-2 btnc4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            start: "",
                            icon: "mdi-charity"
                          }),
                          createTextVNode("Donate"),
                          createVNode(_component_v_icon, {
                            end: "",
                            icon: "mdi-charity"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "h-1/4" }),
                createVNode("div", { class: "bg-emerald-400 pt-6 pb-1" }, [
                  createVNode("h1", {
                    class: "px-10 text-h4 !font-bold sm:text-h3 mb-4 tracking-widest font-serif",
                    style: { fontFamily: "Roboto Slab", textShadow: "2px 2px #000000" }
                  }, " WELCOME ")
                ]),
                createVNode("div", { class: "px-5 py-6" }, [
                  createVNode("h4", { class: "subheading" }, [
                    createTextVNode(" Grab a warm drink,"),
                    createVNode("br"),
                    createTextVNode("and read on to see"),
                    createVNode("br"),
                    createTextVNode("what we can do for you. ")
                  ])
                ]),
                createVNode("div", { class: "py-4 pr-8 pl-4 bg-slate-400" }, [
                  createVNode(_component_NuxtLink, { to: "/services" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        block: "",
                        class: "m-2 btnc1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            start: "",
                            icon: "mdi-room-service-outline"
                          }),
                          createTextVNode("Services"),
                          createVNode(_component_v_icon, {
                            end: "",
                            icon: "mdi-room-service-outline"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("a", { href: "/shop" }, [
                    createVNode(_component_v_btn, {
                      block: "",
                      class: "m-2 btnc2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          start: "",
                          icon: "mdi-store"
                        }),
                        createTextVNode("Shop"),
                        createVNode(_component_v_icon, {
                          end: "",
                          icon: "mdi-store"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtLink, { to: "/investors" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        block: "",
                        class: "m-2 btnc3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            start: "",
                            icon: "mdi-chart-areaspline"
                          }),
                          createTextVNode("Invest"),
                          createVNode(_component_v_icon, {
                            end: "",
                            icon: "mdi-chart-areaspline"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/donate" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        block: "",
                        class: "m-2 btnc4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            start: "",
                            icon: "mdi-charity"
                          }),
                          createTextVNode("Donate"),
                          createVNode(_component_v_icon, {
                            end: "",
                            icon: "mdi-charity"
                          })
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
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex h-full" }, [
            createVNode("div", { class: "<sm:w-0 sm:w-3/4" }),
            createVNode("div", { class: "<sm:w-full d-flex flex-column fill-height justify-center text-center align-center font-bold" }, [
              createVNode(_component_v_card, { class: "absolute h-full bg-black pb-15" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-1/4" }),
                  createVNode("div", { class: "bg-emerald-400 pt-6 pb-1" }, [
                    createVNode("h1", {
                      class: "px-10 text-h4 !font-bold sm:text-h3 mb-4 tracking-widest font-serif",
                      style: { fontFamily: "Roboto Slab", textShadow: "2px 2px #000000" }
                    }, " WELCOME ")
                  ]),
                  createVNode("div", { class: "px-5 py-6" }, [
                    createVNode("h4", { class: "subheading" }, [
                      createTextVNode(" Grab a warm drink,"),
                      createVNode("br"),
                      createTextVNode("and read on to see"),
                      createVNode("br"),
                      createTextVNode("what we can do for you. ")
                    ])
                  ]),
                  createVNode("div", { class: "py-4 pr-8 pl-4 bg-slate-400" }, [
                    createVNode(_component_NuxtLink, { to: "/services" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          block: "",
                          class: "m-2 btnc1"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              start: "",
                              icon: "mdi-room-service-outline"
                            }),
                            createTextVNode("Services"),
                            createVNode(_component_v_icon, {
                              end: "",
                              icon: "mdi-room-service-outline"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("a", { href: "/shop" }, [
                      createVNode(_component_v_btn, {
                        block: "",
                        class: "m-2 btnc2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            start: "",
                            icon: "mdi-store"
                          }),
                          createTextVNode("Shop"),
                          createVNode(_component_v_icon, {
                            end: "",
                            icon: "mdi-store"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_NuxtLink, { to: "/investors" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          block: "",
                          class: "m-2 btnc3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              start: "",
                              icon: "mdi-chart-areaspline"
                            }),
                            createTextVNode("Invest"),
                            createVNode(_component_v_icon, {
                              end: "",
                              icon: "mdi-chart-areaspline"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/donate" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          block: "",
                          class: "m-2 btnc4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              start: "",
                              icon: "mdi-charity"
                            }),
                            createTextVNode("Donate"),
                            createVNode(_component_v_icon, {
                              end: "",
                              icon: "mdi-charity"
                            })
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
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_v_container, { class: "align-middle items-center justify-center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, { class: "p-5 m-5 align-middle items-center justify-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex justify-center items-center text-center align-middle" data-v-ce4f7154${_scopeId2}><div class="w-full p-5 flex justify-center items-center text-center md:w-1/2" data-v-ce4f7154${_scopeId2}><div class="" data-v-ce4f7154${_scopeId2}><h1 class="text-2xl mb-5" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "2px 2px rgba(52, 211, 153)" })}" data-v-ce4f7154${_scopeId2}> What You See </h1><p class="text-justify" data-v-ce4f7154${_scopeId2}> This site functions as both a development playground for a suite of services I intend to offer, as well as a technical showcase and portfolio. It may look a bit chaotic now, but I intend to deploy each service separately as they become fully functional, and utilize this site as a central hub. This will allow me to quickly deploy modular and highly functional and customizable components that I can use when developing for future clients in need of similar features. Basically, you are looking at my toolbelt. </p></div></div><div class="w-full p-5 hidden md:flex md:w-1/2" data-v-ce4f7154${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="contain w-full" style="${ssrRenderStyle({})}" data-v-ce4f7154${_scopeId2}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-center items-center text-center align-middle" }, [
                  createVNode("div", { class: "w-full p-5 flex justify-center items-center text-center md:w-1/2" }, [
                    createVNode("div", { class: "" }, [
                      createVNode("h1", {
                        class: "text-2xl mb-5",
                        style: { fontFamily: "Roboto Slab", textShadow: "2px 2px rgba(52, 211, 153)" }
                      }, " What You See ", 4),
                      createVNode("p", { class: "text-justify" }, " This site functions as both a development playground for a suite of services I intend to offer, as well as a technical showcase and portfolio. It may look a bit chaotic now, but I intend to deploy each service separately as they become fully functional, and utilize this site as a central hub. This will allow me to quickly deploy modular and highly functional and customizable components that I can use when developing for future clients in need of similar features. Basically, you are looking at my toolbelt. ")
                    ])
                  ]),
                  createVNode("div", { class: "w-full p-5 hidden md:flex md:w-1/2" }, [
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card, { class: "p-5 m-5 align-middle items-center justify-center" }, {
            default: withCtx(() => [
              createVNode("div", { class: "flex justify-center items-center text-center align-middle" }, [
                createVNode("div", { class: "w-full p-5 flex justify-center items-center text-center md:w-1/2" }, [
                  createVNode("div", { class: "" }, [
                    createVNode("h1", {
                      class: "text-2xl mb-5",
                      style: { fontFamily: "Roboto Slab", textShadow: "2px 2px rgba(52, 211, 153)" }
                    }, " What You See ", 4),
                    createVNode("p", { class: "text-justify" }, " This site functions as both a development playground for a suite of services I intend to offer, as well as a technical showcase and portfolio. It may look a bit chaotic now, but I intend to deploy each service separately as they become fully functional, and utilize this site as a central hub. This will allow me to quickly deploy modular and highly functional and customizable components that I can use when developing for future clients in need of similar features. Basically, you are looking at my toolbelt. ")
                  ])
                ]),
                createVNode("div", { class: "w-full p-5 hidden md:flex md:w-1/2" }, [
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
  }, _parent));
  _push(`</div><div class="w-full m-0 p-0 flex items-center align-middle" data-v-ce4f7154>`);
  _push(ssrRenderComponent(_component_v_parallax, {
    src: "img/purple-red-tree.jpg",
    "lazy-src": "img/purple-red-tree.jpg",
    class: "items-center align-middle"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_container, { class: "items-center align-middle" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card, { class: "p-5 m-5 h-auto" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex justify-center items-center text-center" data-v-ce4f7154${_scopeId3}><div class="m-10" data-v-ce4f7154${_scopeId3}><h1 class="text-2xl mb-5" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "2px 2px rgba(52, 211, 153)" })}" data-v-ce4f7154${_scopeId3}> Back-End Web Development </h1><p class="text-justify" data-v-ce4f7154${_scopeId3}> Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website. </p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-center items-center text-center" }, [
                        createVNode("div", { class: "m-10" }, [
                          createVNode("h1", {
                            class: "text-2xl mb-5",
                            style: { fontFamily: "Roboto Slab", textShadow: "2px 2px rgba(52, 211, 153)" }
                          }, " Back-End Web Development ", 4),
                          createVNode("p", { class: "text-justify" }, " Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website. ")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card, { class: "p-5 m-5 h-auto" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex justify-center items-center text-center" data-v-ce4f7154${_scopeId3}><div class="m-10" data-v-ce4f7154${_scopeId3}><h1 class="text-2xl mb-5" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "2px 2px rgba(52, 211, 153)" })}" data-v-ce4f7154${_scopeId3}> Front-End Web Development </h1><p class="text-justify" data-v-ce4f7154${_scopeId3}> Front-end website development is important because it deals with the visual design and user experience of a website. This includes things like HTML, CSS, and JavaScript, which are used to create the layout, style, and interactivity of a website. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings. Overall it is responsible for how website looks and feels to the end user. </p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-center items-center text-center" }, [
                        createVNode("div", { class: "m-10" }, [
                          createVNode("h1", {
                            class: "text-2xl mb-5",
                            style: { fontFamily: "Roboto Slab", textShadow: "2px 2px rgba(52, 211, 153)" }
                          }, " Front-End Web Development ", 4),
                          createVNode("p", { class: "text-justify" }, " Front-end website development is important because it deals with the visual design and user experience of a website. This includes things like HTML, CSS, and JavaScript, which are used to create the layout, style, and interactivity of a website. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings. Overall it is responsible for how website looks and feels to the end user. ")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card, { class: "p-5 m-5 h-auto" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex justify-center items-center text-center" }, [
                      createVNode("div", { class: "m-10" }, [
                        createVNode("h1", {
                          class: "text-2xl mb-5",
                          style: { fontFamily: "Roboto Slab", textShadow: "2px 2px rgba(52, 211, 153)" }
                        }, " Back-End Web Development ", 4),
                        createVNode("p", { class: "text-justify" }, " Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website. ")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card, { class: "p-5 m-5 h-auto" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex justify-center items-center text-center" }, [
                      createVNode("div", { class: "m-10" }, [
                        createVNode("h1", {
                          class: "text-2xl mb-5",
                          style: { fontFamily: "Roboto Slab", textShadow: "2px 2px rgba(52, 211, 153)" }
                        }, " Front-End Web Development ", 4),
                        createVNode("p", { class: "text-justify" }, " Front-end website development is important because it deals with the visual design and user experience of a website. This includes things like HTML, CSS, and JavaScript, which are used to create the layout, style, and interactivity of a website. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings. Overall it is responsible for how website looks and feels to the end user. ")
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
          createVNode(_component_v_container, { class: "items-center align-middle" }, {
            default: withCtx(() => [
              createVNode(_component_v_card, { class: "p-5 m-5 h-auto" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-center items-center text-center" }, [
                    createVNode("div", { class: "m-10" }, [
                      createVNode("h1", {
                        class: "text-2xl mb-5",
                        style: { fontFamily: "Roboto Slab", textShadow: "2px 2px rgba(52, 211, 153)" }
                      }, " Back-End Web Development ", 4),
                      createVNode("p", { class: "text-justify" }, " Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website. ")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_card, { class: "p-5 m-5 h-auto" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-center items-center text-center" }, [
                    createVNode("div", { class: "m-10" }, [
                      createVNode("h1", {
                        class: "text-2xl mb-5",
                        style: { fontFamily: "Roboto Slab", textShadow: "2px 2px rgba(52, 211, 153)" }
                      }, " Front-End Web Development ", 4),
                      createVNode("p", { class: "text-justify" }, " Front-end website development is important because it deals with the visual design and user experience of a website. This includes things like HTML, CSS, and JavaScript, which are used to create the layout, style, and interactivity of a website. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings. Overall it is responsible for how website looks and feels to the end user. ")
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
  _push(`</div><div class="w-full p-4 flex" data-v-ce4f7154><div class="flex flex-wrap h-full w-full text-center justify-center align-center" data-v-ce4f7154>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/subscribe",
    class: "flex-auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, { class: "m-1 bg-white flex" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_icon, {
                icon: "mdi-email",
                class: "m-2"
              }, null, _parent3, _scopeId2));
              _push3(`Subscribe to Emails `);
            } else {
              return [
                createVNode(_component_v_icon, {
                  icon: "mdi-email",
                  class: "m-2"
                }),
                createTextVNode("Subscribe to Emails ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_btn, { class: "m-1 bg-white flex" }, {
            default: withCtx(() => [
              createVNode(_component_v_icon, {
                icon: "mdi-email",
                class: "m-2"
              }),
              createTextVNode("Subscribe to Emails ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/legal/faqs",
    class: "flex-auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, { class: "m-1 bg-white flex" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_icon, {
                icon: "mdi-chat-question",
                class: "m-2"
              }, null, _parent3, _scopeId2));
              _push3(`Frequently Asked Questions `);
            } else {
              return [
                createVNode(_component_v_icon, {
                  icon: "mdi-chat-question",
                  class: "m-2"
                }),
                createTextVNode("Frequently Asked Questions ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_btn, { class: "m-1 bg-white flex" }, {
            default: withCtx(() => [
              createVNode(_component_v_icon, {
                icon: "mdi-chat-question",
                class: "m-2"
              }),
              createTextVNode("Frequently Asked Questions ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="https://www.youtube.com/channel/UCXo9qETIsM-oNybayMhivPQ" class="flex-auto" data-v-ce4f7154>`);
  _push(ssrRenderComponent(_component_v_btn, { class: "m-1 bg-white flex" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_icon, {
          icon: "mdi-youtube",
          class: "m-2"
        }, null, _parent2, _scopeId));
        _push2(`Watch Our Journey `);
      } else {
        return [
          createVNode(_component_v_icon, {
            icon: "mdi-youtube",
            class: "m-2"
          }),
          createTextVNode("Watch Our Journey ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ce4f7154"]]);

export { index as default };
//# sourceMappingURL=index.8a0ef91c.mjs.map
