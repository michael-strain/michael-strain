import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, today, yesterday, earlier } from './Inbox.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'VToolbar', typeof __VLS_localComponents, "VToolbar", "vToolbar", "v-toolbar"> &
__VLS_WithComponent<'VToolbarTitle', typeof __VLS_localComponents, "VToolbarTitle", "vToolbarTitle", "v-toolbar-title"> &
__VLS_WithComponent<'VBtn', typeof __VLS_localComponents, "VBtn", "vBtn", "v-btn"> &
__VLS_WithComponent<'VTooltip', typeof __VLS_localComponents, "VTooltip", "vTooltip", "v-tooltip"> &
__VLS_WithComponent<'VList', typeof __VLS_localComponents, "VList", "vList", "v-list">;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
__VLS_components.VToolbar; __VLS_components.VToolbar; __VLS_components.vToolbar; __VLS_components.vToolbar; __VLS_components["v-toolbar"]; __VLS_components["v-toolbar"];
// @ts-ignore
[VToolbar, VToolbar,];
__VLS_components.VToolbarTitle; __VLS_components.VToolbarTitle; __VLS_components.vToolbarTitle; __VLS_components.vToolbarTitle; __VLS_components["v-toolbar-title"]; __VLS_components["v-toolbar-title"];
// @ts-ignore
[VToolbarTitle, VToolbarTitle,];
({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p;
__VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"];
// @ts-ignore
[VBtn, VBtn, VBtn,];
__VLS_components.VTooltip; __VLS_components.VTooltip; __VLS_components.VTooltip; __VLS_components.vTooltip; __VLS_components.vTooltip; __VLS_components.vTooltip; __VLS_components["v-tooltip"]; __VLS_components["v-tooltip"]; __VLS_components["v-tooltip"];
// @ts-ignore
[VTooltip, VTooltip, VTooltip,];
({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template;
__VLS_components.VList; __VLS_components.VList; __VLS_components.VList; __VLS_components.VList; __VLS_components.VList; __VLS_components.VList; __VLS_components.vList; __VLS_components.vList; __VLS_components.vList; __VLS_components.vList; __VLS_components.vList; __VLS_components.vList; __VLS_components["v-list"]; __VLS_components["v-list"]; __VLS_components["v-list"]; __VLS_components["v-list"]; __VLS_components["v-list"]; __VLS_components["v-list"];
// @ts-ignore
[VList, VList, VList, VList, VList, VList,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
let __VLS_5!: 'VToolbar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VToolbar : 'vToolbar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vToolbar : 'v-toolbar' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-toolbar'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VToolbar'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, color: ("primary"), }));
({} as { VToolbar: typeof __VLS_5; }).VToolbar;
({} as { VToolbar: typeof __VLS_5; }).VToolbar;
const __VLS_7 = __VLS_6({ ...{}, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, color: ("primary"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
let __VLS_10!: 'VToolbarTitle' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VToolbarTitle : 'vToolbarTitle' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vToolbarTitle : 'v-toolbar-title' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-toolbar-title'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VToolbarTitle'];
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { VToolbarTitle: typeof __VLS_10; }).VToolbarTitle;
({} as { VToolbarTitle: typeof __VLS_10; }).VToolbarTitle;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_17 = __VLS_16({ ...{}, class: ("ml-5 text-2xl font-black text-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("ml-5 text-2xl font-black text-center"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
(__VLS_18.slots!).default;
}
(__VLS_13.slots!).default;
}
{
let __VLS_20!: 'VBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBtn : 'vBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vBtn : 'v-btn' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-btn'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBtn'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, variant: ("text"), icon: ("mdi-magnify"), }));
({} as { VBtn: typeof __VLS_20; }).VBtn;
({} as { VBtn: typeof __VLS_20; }).VBtn;
const __VLS_22 = __VLS_21({ ...{}, variant: ("text"), icon: ("mdi-magnify"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, variant: ("text"), icon: ("mdi-magnify"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
let __VLS_25!: 'VTooltip' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VTooltip : 'vTooltip' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vTooltip : 'v-tooltip' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-tooltip'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VTooltip'];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, text: ("Search Emails"), location: ("start"), }));
({} as { VTooltip: typeof __VLS_25; }).VTooltip;
const __VLS_27 = __VLS_26({ ...{}, text: ("Search Emails"), location: ("start"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, text: ("Search Emails"), location: ("start"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
}
(__VLS_23.slots!).default;
}
{
let __VLS_30!: 'VTooltip' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VTooltip : 'vTooltip' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vTooltip : 'v-tooltip' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-tooltip'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VTooltip'];
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, text: ("Draft New Email"), location: ("start"), }));
({} as { VTooltip: typeof __VLS_30; }).VTooltip;
({} as { VTooltip: typeof __VLS_30; }).VTooltip;
const __VLS_32 = __VLS_31({ ...{}, text: ("Draft New Email"), location: ("start"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, text: ("Draft New Email"), location: ("start"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, });
{
const [{ props }] = __VLS_getSlotParams((__VLS_33.slots!).activator);
{
let __VLS_38!: 'VBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBtn : 'vBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vBtn : 'v-btn' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-btn'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBtn'];
const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ onClick: {} as any, }, ...(props), variant: ("text"), icon: ("mdi-plus"), }));
({} as { VBtn: typeof __VLS_38; }).VBtn;
const __VLS_40 = __VLS_39({ ...{ onClick: {} as any, }, ...(props), variant: ("text"), icon: ("mdi-plus"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_38, typeof __VLS_40> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, ...(props), variant: ("text"), icon: ("mdi-plus"), });
const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40)!;
let __VLS_42!: __VLS_NormalizeEmits<typeof __VLS_41.emit>;
let __VLS_43 = { 'click': __VLS_pickEvent(__VLS_42['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_39, typeof __VLS_40>).onClick) };
__VLS_43 = {
click: $event => {
__VLS_ctx.showNewEmailDraftForm = true;
}
};
}
}
}
}
(__VLS_8.slots!).default;
}
{
let __VLS_44!: 'VList' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VList : 'vList' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vList : 'v-list' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-list'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VList'];
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{}, items: ((__VLS_ctx.today)), itemProps: (true), lines: ("three"), }));
({} as { VList: typeof __VLS_44; }).VList;
({} as { VList: typeof __VLS_44; }).VList;
const __VLS_46 = __VLS_45({ ...{}, items: ((__VLS_ctx.today)), itemProps: (true), lines: ("three"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_44, typeof __VLS_46> & Record<string, unknown>) => void)({ ...{}, items: ((__VLS_ctx.today)), itemProps: (true), lines: ("three"), });
const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46)!;
let __VLS_48!: __VLS_NormalizeEmits<typeof __VLS_47.emit>;
{
const __VLS_49 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_50 = __VLS_elementAsFunctionalComponent(__VLS_49);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_51 = __VLS_50({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_50));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_49, typeof __VLS_51> & Record<string, unknown>) => void)({ ...{}, });
{
const [{ subtitle }] = __VLS_getSlotParams((__VLS_47.slots!).subtitle);
{
const __VLS_52 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_53 = __VLS_elementAsFunctionalComponent(__VLS_52);
({} as __VLS_IntrinsicElements).p;
const __VLS_54 = __VLS_53({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_52, typeof __VLS_54> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
let __VLS_56!: __VLS_NormalizeEmits<typeof __VLS_55.emit>;
__VLS_directiveFunction(__VLS_ctx.vHtml)((subtitle));
}
}
}
}
{
let __VLS_57!: 'VList' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VList : 'vList' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vList : 'v-list' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-list'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VList'];
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{}, items: ((__VLS_ctx.yesterday)), itemProps: (true), lines: ("three"), }));
({} as { VList: typeof __VLS_57; }).VList;
({} as { VList: typeof __VLS_57; }).VList;
const __VLS_59 = __VLS_58({ ...{}, items: ((__VLS_ctx.yesterday)), itemProps: (true), lines: ("three"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_57, typeof __VLS_59> & Record<string, unknown>) => void)({ ...{}, items: ((__VLS_ctx.yesterday)), itemProps: (true), lines: ("three"), });
const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59)!;
let __VLS_61!: __VLS_NormalizeEmits<typeof __VLS_60.emit>;
{
const __VLS_62 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_63 = __VLS_elementAsFunctionalComponent(__VLS_62);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_64 = __VLS_63({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_63));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_62, typeof __VLS_64> & Record<string, unknown>) => void)({ ...{}, });
{
const [{ subtitle }] = __VLS_getSlotParams((__VLS_60.slots!).subtitle);
{
const __VLS_65 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
({} as __VLS_IntrinsicElements).p;
const __VLS_67 = __VLS_66({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
__VLS_directiveFunction(__VLS_ctx.vHtml)((subtitle));
}
}
}
}
{
let __VLS_70!: 'VList' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VList : 'vList' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vList : 'v-list' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-list'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VList'];
const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, items: ((__VLS_ctx.earlier)), itemProps: (true), lines: ("three"), }));
({} as { VList: typeof __VLS_70; }).VList;
({} as { VList: typeof __VLS_70; }).VList;
const __VLS_72 = __VLS_71({ ...{}, items: ((__VLS_ctx.earlier)), itemProps: (true), lines: ("three"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, items: ((__VLS_ctx.earlier)), itemProps: (true), lines: ("three"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
{
const __VLS_75 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_77 = __VLS_76({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, });
{
const [{ subtitle }] = __VLS_getSlotParams((__VLS_73.slots!).subtitle);
{
const __VLS_78 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_79 = __VLS_elementAsFunctionalComponent(__VLS_78);
({} as __VLS_IntrinsicElements).p;
const __VLS_80 = __VLS_79({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_79));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_78, typeof __VLS_80> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_81 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80)!;
let __VLS_82!: __VLS_NormalizeEmits<typeof __VLS_81.emit>;
__VLS_directiveFunction(__VLS_ctx.vHtml)((subtitle));
}
}
}
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[showNewEmailDraftForm, today, today, today, yesterday, yesterday, yesterday, earlier, earlier, earlier,];
return __VLS_slots;
}
