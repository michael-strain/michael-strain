import { ref, resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "application",
  __ssrInlineRender: true,
  setup(__props) {
    const applicationform = ref(null);
    const formVal = ref(false);
    ref(["Yes", "No", "Maybe"]);
    const firstname = ref("");
    const lastname = ref("");
    const nameRules = ref([(v) => !!v || "Name is required."]);
    const email = ref("");
    const emailRules = ref([
      (v) => !!v || "E-mail is required.",
      (v) => /.+@.+/.test(v) || "E-mail must be formVal"
    ]);
    const capital = ref("");
    const capitalRules = ref([
      (v) => !!v || "We need to at least have a ballpark.",
      (v) => v >= 1e3 || "We have a minimum investment requirement of $1,000"
    ]);
    const phoneNumber = ref("");
    const phoneRules = ref([
      (v) => !!v || "Phone number is required."
    ]);
    const currentAddress = ref("");
    const currentAddressRules = ref([
      (v) => !!v || "Address is required."
    ]);
    ref("");
    ref([
      (v) => !!v || "Answer is required.",
      (v) => !!(v === "Yes" | v === "No" | v === "Maybe") || "Invalid option selected...somehow"
    ]);
    const annualIncome = ref("");
    const annualIncomeRules = ref([
      (v) => !!v || "Income information is required in order to validate your candidacy.",
      (v) => v >= 0 || "Please enter a valid number."
    ]);
    const netWorth = ref("");
    const netWorthRules = ref([
      (v) => !!v || "Income information is required in order to validate your candidacy.",
      (v) => v >= 0 || "Please enter a valid number."
    ]);
    const experience = ref("");
    function validatify() {
      console.log("I am gonna return applicationform.value.validate()");
      return applicationform.value.validate();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Investor Applicant Screening`);
                } else {
                  return [
                    createTextVNode("Investor Applicant Screening")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_subtitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}> The purpose of this form is to develop a substantive understanding of your ability to invest in our development project. You should not fill out this form if you do not have a good understanding of the goals of the development Management Company (Strain Investment Company LLC), and the financial risks and rewards involved in participating in this project. You are not guaranteed acceptance by filling out this form. We will take all applications into consideration, but will only accept those applicants that we deem fit. Investing involves risk, including loss of principal. Past performance does not guarantee or indicate future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. While the data we use from third parties is believed to be reliable, we cannot ensure the accuracy or completeness of data provided by investors or other third parties. Neither Strain Investments Company LLC, nor any of its affiliates provide tax advice and do not represent in any manner that the outcomes described herein will result in any particular tax consequence. Offers to sell, or solicitations of offers to buy, any security can only be made through official offering documents that contain important information about investment objectives, risks, fees and expenses. Prospective investors should consult with a tax or legal adviser before making any investment decision. For Regulation A offering(s), no sale may be made to you in this offering if the aggregate purchase price you pay is more than 10% of the greater of your annual income or net worth (excluding your primary residence, as described in Rule 501(a)(5)(i) of Regulation D). Different rules apply to accredited investors and non-natural persons. Before making any representation that your investment does not exceed applicable thresholds, we encourage you to review Rule 251(d)(2)(i)(C) of Regulation A. For general information on investing, we encourage you to refer to www.investor.gov. </p>`);
                } else {
                  return [
                    createVNode("p", null, " The purpose of this form is to develop a substantive understanding of your ability to invest in our development project. You should not fill out this form if you do not have a good understanding of the goals of the development Management Company (Strain Investment Company LLC), and the financial risks and rewards involved in participating in this project. You are not guaranteed acceptance by filling out this form. We will take all applications into consideration, but will only accept those applicants that we deem fit. Investing involves risk, including loss of principal. Past performance does not guarantee or indicate future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. While the data we use from third parties is believed to be reliable, we cannot ensure the accuracy or completeness of data provided by investors or other third parties. Neither Strain Investments Company LLC, nor any of its affiliates provide tax advice and do not represent in any manner that the outcomes described herein will result in any particular tax consequence. Offers to sell, or solicitations of offers to buy, any security can only be made through official offering documents that contain important information about investment objectives, risks, fees and expenses. Prospective investors should consult with a tax or legal adviser before making any investment decision. For Regulation A offering(s), no sale may be made to you in this offering if the aggregate purchase price you pay is more than 10% of the greater of your annual income or net worth (excluding your primary residence, as described in Rule 501(a)(5)(i) of Regulation D). Different rules apply to accredited investors and non-natural persons. Before making any representation that your investment does not exceed applicable thresholds, we encourage you to review Rule 251(d)(2)(i)(C) of Regulation A. For general information on investing, we encourage you to refer to www.investor.gov. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_form, {
              ref_key: "applicationform",
              ref: applicationform,
              modelValue: formVal.value,
              "onUpdate:modelValue": ($event) => formVal.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: firstname.value,
                                      "onUpdate:modelValue": ($event) => firstname.value = $event,
                                      rules: nameRules.value,
                                      label: "First name",
                                      required: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: firstname.value,
                                        "onUpdate:modelValue": ($event) => firstname.value = $event,
                                        rules: nameRules.value,
                                        label: "First name",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: lastname.value,
                                      "onUpdate:modelValue": ($event) => lastname.value = $event,
                                      rules: nameRules.value,
                                      label: "Last name",
                                      required: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: lastname.value,
                                        "onUpdate:modelValue": ($event) => lastname.value = $event,
                                        rules: nameRules.value,
                                        label: "Last name",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: email.value,
                                      "onUpdate:modelValue": ($event) => email.value = $event,
                                      rules: emailRules.value,
                                      label: "E-mail",
                                      required: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: email.value,
                                        "onUpdate:modelValue": ($event) => email.value = $event,
                                        rules: emailRules.value,
                                        label: "E-mail",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: phoneNumber.value,
                                      "onUpdate:modelValue": ($event) => phoneNumber.value = $event,
                                      rules: phoneRules.value,
                                      label: "Phone Number",
                                      required: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: phoneNumber.value,
                                        "onUpdate:modelValue": ($event) => phoneNumber.value = $event,
                                        rules: phoneRules.value,
                                        label: "Phone Number",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: currentAddress.value,
                                      "onUpdate:modelValue": ($event) => currentAddress.value = $event,
                                      rules: currentAddressRules.value,
                                      label: "Full Address",
                                      required: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: currentAddress.value,
                                        "onUpdate:modelValue": ($event) => currentAddress.value = $event,
                                        rules: currentAddressRules.value,
                                        label: "Full Address",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: capital.value,
                                      "onUpdate:modelValue": ($event) => capital.value = $event,
                                      rules: capitalRules.value,
                                      label: "How much capital are you willing to invest?",
                                      required: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: capital.value,
                                        "onUpdate:modelValue": ($event) => capital.value = $event,
                                        rules: capitalRules.value,
                                        label: "How much capital are you willing to invest?",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: annualIncome.value,
                                      "onUpdate:modelValue": ($event) => annualIncome.value = $event,
                                      rules: annualIncomeRules.value,
                                      label: "What is your annual income?",
                                      required: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: annualIncome.value,
                                        "onUpdate:modelValue": ($event) => annualIncome.value = $event,
                                        rules: annualIncomeRules.value,
                                        label: "What is your annual income?",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: netWorth.value,
                                      "onUpdate:modelValue": ($event) => netWorth.value = $event,
                                      rules: netWorthRules.value,
                                      label: "What is your current net worth?",
                                      required: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: netWorth.value,
                                        "onUpdate:modelValue": ($event) => netWorth.value = $event,
                                        rules: netWorthRules.value,
                                        label: "What is your current net worth?",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: experience.value,
                                      "onUpdate:modelValue": ($event) => experience.value = $event,
                                      label: "Have you done any real estate investing before?  If so, please tell us about your experience."
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: experience.value,
                                        "onUpdate:modelValue": ($event) => experience.value = $event,
                                        label: "Have you done any real estate investing before?  If so, please tell us about your experience."
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                disabled: !formVal.value,
                                color: "success",
                                class: "mr-4",
                                onClick: validatify
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Submit `);
                                  } else {
                                    return [
                                      createTextVNode(" Submit ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: firstname.value,
                                      "onUpdate:modelValue": ($event) => firstname.value = $event,
                                      rules: nameRules.value,
                                      label: "First name",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: lastname.value,
                                      "onUpdate:modelValue": ($event) => lastname.value = $event,
                                      rules: nameRules.value,
                                      label: "Last name",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: email.value,
                                      "onUpdate:modelValue": ($event) => email.value = $event,
                                      rules: emailRules.value,
                                      label: "E-mail",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: phoneNumber.value,
                                      "onUpdate:modelValue": ($event) => phoneNumber.value = $event,
                                      rules: phoneRules.value,
                                      label: "Phone Number",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: currentAddress.value,
                                      "onUpdate:modelValue": ($event) => currentAddress.value = $event,
                                      rules: currentAddressRules.value,
                                      label: "Full Address",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: capital.value,
                                      "onUpdate:modelValue": ($event) => capital.value = $event,
                                      rules: capitalRules.value,
                                      label: "How much capital are you willing to invest?",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: annualIncome.value,
                                      "onUpdate:modelValue": ($event) => annualIncome.value = $event,
                                      rules: annualIncomeRules.value,
                                      label: "What is your annual income?",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: netWorth.value,
                                      "onUpdate:modelValue": ($event) => netWorth.value = $event,
                                      rules: netWorthRules.value,
                                      label: "What is your current net worth?",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: experience.value,
                                      "onUpdate:modelValue": ($event) => experience.value = $event,
                                      label: "Have you done any real estate investing before?  If so, please tell us about your experience."
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  disabled: !formVal.value,
                                  color: "success",
                                  class: "mr-4",
                                  onClick: validatify
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Submit ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: firstname.value,
                                    "onUpdate:modelValue": ($event) => firstname.value = $event,
                                    rules: nameRules.value,
                                    label: "First name",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: lastname.value,
                                    "onUpdate:modelValue": ($event) => lastname.value = $event,
                                    rules: nameRules.value,
                                    label: "Last name",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: email.value,
                                    "onUpdate:modelValue": ($event) => email.value = $event,
                                    rules: emailRules.value,
                                    label: "E-mail",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: phoneNumber.value,
                                    "onUpdate:modelValue": ($event) => phoneNumber.value = $event,
                                    rules: phoneRules.value,
                                    label: "Phone Number",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: currentAddress.value,
                                    "onUpdate:modelValue": ($event) => currentAddress.value = $event,
                                    rules: currentAddressRules.value,
                                    label: "Full Address",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: capital.value,
                                    "onUpdate:modelValue": ($event) => capital.value = $event,
                                    rules: capitalRules.value,
                                    label: "How much capital are you willing to invest?",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: annualIncome.value,
                                    "onUpdate:modelValue": ($event) => annualIncome.value = $event,
                                    rules: annualIncomeRules.value,
                                    label: "What is your annual income?",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: netWorth.value,
                                    "onUpdate:modelValue": ($event) => netWorth.value = $event,
                                    rules: netWorthRules.value,
                                    label: "What is your current net worth?",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: experience.value,
                                    "onUpdate:modelValue": ($event) => experience.value = $event,
                                    label: "Have you done any real estate investing before?  If so, please tell us about your experience."
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                disabled: !formVal.value,
                                color: "success",
                                class: "mr-4",
                                onClick: validatify
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Submit ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
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
                    createVNode(_component_v_container, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: firstname.value,
                                  "onUpdate:modelValue": ($event) => firstname.value = $event,
                                  rules: nameRules.value,
                                  label: "First name",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: lastname.value,
                                  "onUpdate:modelValue": ($event) => lastname.value = $event,
                                  rules: nameRules.value,
                                  label: "Last name",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: email.value,
                                  "onUpdate:modelValue": ($event) => email.value = $event,
                                  rules: emailRules.value,
                                  label: "E-mail",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: phoneNumber.value,
                                  "onUpdate:modelValue": ($event) => phoneNumber.value = $event,
                                  rules: phoneRules.value,
                                  label: "Phone Number",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: currentAddress.value,
                                  "onUpdate:modelValue": ($event) => currentAddress.value = $event,
                                  rules: currentAddressRules.value,
                                  label: "Full Address",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: capital.value,
                                  "onUpdate:modelValue": ($event) => capital.value = $event,
                                  rules: capitalRules.value,
                                  label: "How much capital are you willing to invest?",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: annualIncome.value,
                                  "onUpdate:modelValue": ($event) => annualIncome.value = $event,
                                  rules: annualIncomeRules.value,
                                  label: "What is your annual income?",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: netWorth.value,
                                  "onUpdate:modelValue": ($event) => netWorth.value = $event,
                                  rules: netWorthRules.value,
                                  label: "What is your current net worth?",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: experience.value,
                                  "onUpdate:modelValue": ($event) => experience.value = $event,
                                  label: "Have you done any real estate investing before?  If so, please tell us about your experience."
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              disabled: !formVal.value,
                              color: "success",
                              class: "mr-4",
                              onClick: validatify
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Submit ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
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
              createVNode(_component_v_card_title, null, {
                default: withCtx(() => [
                  createTextVNode("Investor Applicant Screening")
                ]),
                _: 1
              }),
              createVNode(_component_v_card_subtitle, null, {
                default: withCtx(() => [
                  createVNode("p", null, " The purpose of this form is to develop a substantive understanding of your ability to invest in our development project. You should not fill out this form if you do not have a good understanding of the goals of the development Management Company (Strain Investment Company LLC), and the financial risks and rewards involved in participating in this project. You are not guaranteed acceptance by filling out this form. We will take all applications into consideration, but will only accept those applicants that we deem fit. Investing involves risk, including loss of principal. Past performance does not guarantee or indicate future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. While the data we use from third parties is believed to be reliable, we cannot ensure the accuracy or completeness of data provided by investors or other third parties. Neither Strain Investments Company LLC, nor any of its affiliates provide tax advice and do not represent in any manner that the outcomes described herein will result in any particular tax consequence. Offers to sell, or solicitations of offers to buy, any security can only be made through official offering documents that contain important information about investment objectives, risks, fees and expenses. Prospective investors should consult with a tax or legal adviser before making any investment decision. For Regulation A offering(s), no sale may be made to you in this offering if the aggregate purchase price you pay is more than 10% of the greater of your annual income or net worth (excluding your primary residence, as described in Rule 501(a)(5)(i) of Regulation D). Different rules apply to accredited investors and non-natural persons. Before making any representation that your investment does not exceed applicable thresholds, we encourage you to review Rule 251(d)(2)(i)(C) of Regulation A. For general information on investing, we encourage you to refer to www.investor.gov. ")
                ]),
                _: 1
              }),
              createVNode(_component_v_form, {
                ref_key: "applicationform",
                ref: applicationform,
                modelValue: formVal.value,
                "onUpdate:modelValue": ($event) => formVal.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: firstname.value,
                                "onUpdate:modelValue": ($event) => firstname.value = $event,
                                rules: nameRules.value,
                                label: "First name",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: lastname.value,
                                "onUpdate:modelValue": ($event) => lastname.value = $event,
                                rules: nameRules.value,
                                label: "Last name",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: email.value,
                                "onUpdate:modelValue": ($event) => email.value = $event,
                                rules: emailRules.value,
                                label: "E-mail",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: phoneNumber.value,
                                "onUpdate:modelValue": ($event) => phoneNumber.value = $event,
                                rules: phoneRules.value,
                                label: "Phone Number",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: currentAddress.value,
                                "onUpdate:modelValue": ($event) => currentAddress.value = $event,
                                rules: currentAddressRules.value,
                                label: "Full Address",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: capital.value,
                                "onUpdate:modelValue": ($event) => capital.value = $event,
                                rules: capitalRules.value,
                                label: "How much capital are you willing to invest?",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: annualIncome.value,
                                "onUpdate:modelValue": ($event) => annualIncome.value = $event,
                                rules: annualIncomeRules.value,
                                label: "What is your annual income?",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: netWorth.value,
                                "onUpdate:modelValue": ($event) => netWorth.value = $event,
                                rules: netWorthRules.value,
                                label: "What is your current net worth?",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: experience.value,
                                "onUpdate:modelValue": ($event) => experience.value = $event,
                                label: "Have you done any real estate investing before?  If so, please tell us about your experience."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            disabled: !formVal.value,
                            color: "success",
                            class: "mr-4",
                            onClick: validatify
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 1
                      })
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
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/investors/application.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=application.faf21b06.mjs.map
