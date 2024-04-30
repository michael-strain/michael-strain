import { _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, computed, resolveComponent, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, toDisplayString, unref, createTextVNode, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useBlueprintDataStore } from './blueprintData.480f853c.mjs';
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
import './index.a7d16411.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const blueprints = ref();
    const loaded = ref(false);
    useBlueprintDataStore();
    const page = ref(1);
    const limit = ref(1);
    computed(() => {
      let values = "?page=" + page.value + "&limit=" + limit.value;
      return values;
    });
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    function leftCountryArrow(item) {
      const store = useBlueprintDataStore();
      let variantId = item.variantNum;
      let country = item.currentCountry;
      let countryNames = [];
      let currShippingProfile = 0;
      if (country > 0) {
        country--;
        for (let i = 0; i < item.variants[variantId].shippingProfiles.length; i++) {
          for (let j = 0; j < item.variants[variantId].shippingProfiles[i].countries.length; j++) {
            countryNames.push(item.variants[variantId].shippingProfiles[i].countries[j]);
          }
        }
      } else {
        if (item.variants[variantId].shippingProfiles.length > 0) {
          let countryCount = 0;
          for (let i = 0; i < item.variants[variantId].shippingProfiles.length; i++) {
            countryCount += item.variants[variantId].shippingProfiles[i].countries.length;
            for (let j = 0; j < item.variants[variantId].shippingProfiles[i].countries.length; j++) {
              countryNames.push(item.variants[variantId].shippingProfiles[i].countries[j]);
            }
          }
          country = countryCount - 1;
        }
      }
      const countryName = countryNames[country];
      for (let i = 0; i < item.variants[variantId].shippingProfiles.length; i++) {
        for (let j = 0; j < item.variants[variantId].shippingProfiles[i].countries.length; j++) {
          if (item.variants[variantId].shippingProfiles[i].countries[j] == countryName) {
            currShippingProfile = i;
          }
        }
      }
      for (let i = 0; i < store.blueprintData.length; i++) {
        if (store.blueprintData[i].id === item.id) {
          store.$patch(store.blueprintData[i].currentShippingProfile = currShippingProfile);
          store.$patch(store.blueprintData[i].currentCountryName = countryName);
          store.$patch(store.blueprintData[i].currentCountry = country);
          blueprints.value = store.blueprintData;
          return;
        }
      }
    }
    function rightCountryArrow(item) {
      const store = useBlueprintDataStore();
      let variantId = item.variantNum;
      let country = item.currentCountry;
      let countryNames = [];
      let currShippingProfile = 0;
      let countryCount = 0;
      if (item.variants[variantId].shippingProfiles.length > 0) {
        for (let i = 0; i < item.variants[variantId].shippingProfiles.length; i++) {
          countryCount += item.variants[variantId].shippingProfiles[i].countries.length;
          for (let j = 0; j < item.variants[variantId].shippingProfiles[i].countries.length; j++) {
            countryNames.push(item.variants[variantId].shippingProfiles[i].countries[j]);
          }
        }
      }
      if (country < countryCount - 1) {
        country++;
      } else {
        country = 0;
      }
      for (let i = 0; i < item.variants[variantId].shippingProfiles.length; i++) {
        for (let j = 0; j < item.variants[variantId].shippingProfiles[i].countries.length; j++) {
          if (item.variants[variantId].shippingProfiles[i].countries[j] == countryNames[country]) {
            currShippingProfile = i;
          }
        }
      }
      const countryName = countryNames[country];
      for (let i = 0; i < store.blueprintData.length; i++) {
        if (store.blueprintData[i].id === item.id) {
          store.$patch(store.blueprintData[i].currentShippingProfile = currShippingProfile);
          store.$patch(store.blueprintData[i].currentCountryName = countryName);
          store.$patch(store.blueprintData[i].currentCountry = country);
          blueprints.value = store.blueprintData;
          return;
        }
      }
    }
    function leftVariantArrow(item) {
      const store = useBlueprintDataStore();
      let variantId = item.variantNum;
      if (variantId > 0) {
        variantId--;
      } else {
        variantId = item.variants.length - 1;
      }
      for (let i = 0; i < store.blueprintData.length; i++) {
        if (store.blueprintData[i].id === item.id) {
          store.$patch(store.blueprintData[i].variantNum = variantId);
          blueprints.value = store.blueprintData;
          return;
        }
      }
    }
    function rightVariantArrow(item) {
      const store = useBlueprintDataStore();
      let variantId = item.variantNum;
      if (variantId < item.variants.length - 1) {
        variantId++;
      } else {
        variantId = 0;
      }
      for (let i = 0; i < store.blueprintData.length; i++) {
        if (store.blueprintData[i].id === item.id) {
          store.$patch(store.blueprintData[i].variantNum = variantId);
          blueprints.value = store.blueprintData;
          return;
        }
      }
    }
    function pageDecrement() {
      if (page.value > 1) {
        page.value--;
      } else {
        page.value = 1;
      }
    }
    function pageIncrement() {
      page.value++;
    }
    function limitDecrement() {
      switch (limit.value) {
        case 1:
          limit.value = 1;
          break;
        case 5:
          limit.value = 1;
          break;
        case 10:
          limit.value = 5;
          break;
        case 20:
          limit.value = 10;
          break;
      }
    }
    function limitIncrement() {
      switch (limit.value) {
        case 1:
          limit.value = 5;
          break;
        case 5:
          limit.value = 10;
          break;
        case 10:
          limit.value = 20;
          break;
        case 20:
          limit.value = 20;
          break;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_carousel = resolveComponent("v-carousel");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_carousel_item = resolveComponent("v-carousel-item");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (loaded.value) {
        _push(`<div class="flex flex-wrap items-center align-center justify-center w-full"><!--[-->`);
        ssrRenderList(blueprints.value, (item, blueprint) => {
          _push(`<div class="flex items-center align-center justify-center" lazy>`);
          _push(ssrRenderComponent(_component_v_card, { class: "bg-white w-80 text-wrap rounded-xl border flex m-5 p-2" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_v_carousel, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: "/admin/product/create/" + item.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(item.images, (img, i) => {
                              _push4(ssrRenderComponent(_component_v_carousel_item, {
                                key: i,
                                src: img,
                                "lazy-src": "/img/blueprint.png",
                                cover: ""
                              }, null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.images, (img, i) => {
                                return openBlock(), createBlock(_component_v_carousel_item, {
                                  key: i,
                                  src: img,
                                  "lazy-src": "/img/blueprint.png",
                                  cover: ""
                                }, null, 8, ["src"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, {
                          to: "/admin/product/create/" + item.id
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.images, (img, i) => {
                              return openBlock(), createBlock(_component_v_carousel_item, {
                                key: i,
                                src: img,
                                "lazy-src": "/img/blueprint.png",
                                cover: ""
                              }, null, 8, ["src"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_v_card_title, { class: "bg-surface text-wrap max-width-full justify-center text-center align-center" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="text-wrap text-2xl"${_scopeId2}><pre${_scopeId2}>${ssrInterpolate(item.title)}</pre></p>`);
                    } else {
                      return [
                        createVNode("p", {
                          style: { fontFamily: "Roboto Slab" },
                          class: "text-wrap text-2xl"
                        }, [
                          createVNode("pre", null, toDisplayString(item.title), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_v_card_subtitle, { class: "text-wrap max-width-full justify-center text-center align-center" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p style="${ssrRenderStyle({ fontFamily: "Roboto Slab" })}" class="text-wrap text-2xl"${_scopeId2}>${ssrInterpolate(item.variants[item.variantNum].title)}</p><p${_scopeId2}>First Item Cost: ${ssrInterpolate(unref(formatter).format(item.variants[item.variantNum].shippingProfiles[item.currentShippingProfile].first_item.cost / 100))}</p><p${_scopeId2}>Additional Item Cost: ${ssrInterpolate(unref(formatter).format(item.variants[item.variantNum].shippingProfiles[item.currentShippingProfile].additional_items.cost / 100))}</p>`);
                    } else {
                      return [
                        createVNode("p", {
                          style: { fontFamily: "Roboto Slab" },
                          class: "text-wrap text-2xl"
                        }, toDisplayString(item.variants[item.variantNum].title), 1),
                        createVNode("p", null, "First Item Cost: " + toDisplayString(unref(formatter).format(item.variants[item.variantNum].shippingProfiles[item.currentShippingProfile].first_item.cost / 100)), 1),
                        createVNode("p", null, "Additional Item Cost: " + toDisplayString(unref(formatter).format(item.variants[item.variantNum].shippingProfiles[item.currentShippingProfile].additional_items.cost / 100)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="bg-surface d-flex items-center justify-center text-center align-center m-0"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_v_card_actions, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (item.variants.length > 1) {
                        _push3(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          onClick: ($event) => leftVariantArrow(item)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-chevron-left" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: "/admin/product/create/" + item.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_v_btn, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` BID: ${ssrInterpolate(item.id)} VID: ${ssrInterpolate(item.variants[item.variantNum].id)}`);
                                } else {
                                  return [
                                    createTextVNode(" BID: " + toDisplayString(item.id) + " VID: " + toDisplayString(item.variants[item.variantNum].id), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_v_btn, null, {
                                default: withCtx(() => [
                                  createTextVNode(" BID: " + toDisplayString(item.id) + " VID: " + toDisplayString(item.variants[item.variantNum].id), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if (item.variants.length > 1) {
                        _push3(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          onClick: ($event) => rightVariantArrow(item)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-chevron-right" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                          key: 0,
                          icon: "",
                          onClick: ($event) => leftVariantArrow(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true),
                        createVNode(_component_NuxtLink, {
                          to: "/admin/product/create/" + item.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, null, {
                              default: withCtx(() => [
                                createTextVNode(" BID: " + toDisplayString(item.id) + " VID: " + toDisplayString(item.variants[item.variantNum].id), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                          key: 1,
                          icon: "",
                          onClick: ($event) => rightVariantArrow(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="bg-surface d-flex items-center justify-center text-center align-center m-0"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_v_card_actions, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (item.variants.length > 1) {
                        _push3(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          onClick: ($event) => leftCountryArrow(item)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-chevron-left" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: "/admin/product/create/" + item.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_v_btn, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.currentCountryName)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.currentCountryName), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_v_btn, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.currentCountryName), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if (item.variants.length > 1) {
                        _push3(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          onClick: ($event) => rightCountryArrow(item)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-chevron-right" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                          key: 0,
                          icon: "",
                          onClick: ($event) => leftCountryArrow(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true),
                        createVNode(_component_NuxtLink, {
                          to: "/admin/product/create/" + item.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.currentCountryName), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                          key: 1,
                          icon: "",
                          onClick: ($event) => rightCountryArrow(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode(_component_v_carousel, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/admin/product/create/" + item.id
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.images, (img, i) => {
                            return openBlock(), createBlock(_component_v_carousel_item, {
                              key: i,
                              src: img,
                              "lazy-src": "/img/blueprint.png",
                              cover: ""
                            }, null, 8, ["src"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_v_card_title, { class: "bg-surface text-wrap max-width-full justify-center text-center align-center" }, {
                    default: withCtx(() => [
                      createVNode("p", {
                        style: { fontFamily: "Roboto Slab" },
                        class: "text-wrap text-2xl"
                      }, [
                        createVNode("pre", null, toDisplayString(item.title), 1)
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_v_card_subtitle, { class: "text-wrap max-width-full justify-center text-center align-center" }, {
                    default: withCtx(() => [
                      createVNode("p", {
                        style: { fontFamily: "Roboto Slab" },
                        class: "text-wrap text-2xl"
                      }, toDisplayString(item.variants[item.variantNum].title), 1),
                      createVNode("p", null, "First Item Cost: " + toDisplayString(unref(formatter).format(item.variants[item.variantNum].shippingProfiles[item.currentShippingProfile].first_item.cost / 100)), 1),
                      createVNode("p", null, "Additional Item Cost: " + toDisplayString(unref(formatter).format(item.variants[item.variantNum].shippingProfiles[item.currentShippingProfile].additional_items.cost / 100)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("div", { class: "bg-surface d-flex items-center justify-center text-center align-center m-0" }, [
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                          key: 0,
                          icon: "",
                          onClick: ($event) => leftVariantArrow(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true),
                        createVNode(_component_NuxtLink, {
                          to: "/admin/product/create/" + item.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, null, {
                              default: withCtx(() => [
                                createTextVNode(" BID: " + toDisplayString(item.id) + " VID: " + toDisplayString(item.variants[item.variantNum].id), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                          key: 1,
                          icon: "",
                          onClick: ($event) => rightVariantArrow(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode("div", { class: "bg-surface d-flex items-center justify-center text-center align-center m-0" }, [
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                          key: 0,
                          icon: "",
                          onClick: ($event) => leftCountryArrow(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "mdi-chevron-left" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true),
                        createVNode(_component_NuxtLink, {
                          to: "/admin/product/create/" + item.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.currentCountryName), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        item.variants.length > 1 ? (openBlock(), createBlock(_component_v_btn, {
                          key: 1,
                          icon: "",
                          onClick: ($event) => rightCountryArrow(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "mdi-chevron-right" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--><div> Page: `);
        _push(ssrRenderComponent(_component_v_icon, {
          icon: "mdi-chevron-left",
          onClick: pageDecrement
        }, null, _parent));
        _push(` ${ssrInterpolate(page.value)} `);
        _push(ssrRenderComponent(_component_v_icon, {
          icon: "mdi-chevron-right",
          onClick: pageIncrement
        }, null, _parent));
        _push(`</div><div> Limit: `);
        _push(ssrRenderComponent(_component_v_icon, {
          icon: "mdi-chevron-left",
          onClick: limitDecrement
        }, null, _parent));
        _push(` ${ssrInterpolate(limit.value)} `);
        _push(ssrRenderComponent(_component_v_icon, {
          icon: "mdi-chevron-right",
          onClick: limitIncrement
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/printify/blueprints/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.a1082b5f.mjs.map
