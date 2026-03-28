import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as s}from"./BaseListItem-CDj8Suqv.js";import{I as m}from"./Icon-CMlobE3G.js";import{C as g}from"./Chip-CW7iOArg.js";import{A as d}from"./iframe-DhNyLLHC.js";import{u as l}from"./useTranslation-OwuDKqc3.js";const p={title:"Components/Internal/BaseListItem",component:s,parameters:{layout:"centered"}},r={render:function(n){const{t}=l(d);return e.jsx(s,{...n,children:n.children||t("standard_list_item")})},args:{style:{width:"240px"}}},a={render:function(n){const{t}=l(d);return e.jsx(s,{...n,icon:e.jsx(m,{name:"EditIcon"}),children:t("home")})},args:{...r.args}},o={render:function(n){const{t}=l(d);return e.jsx(s,{...n,icon:e.jsx(m,{name:"SettingsIcon"}),rightSection:e.jsx(m,{name:"ChevronRightIcon",size:"small"}),children:t("a11y_settings")})},args:{...r.args}},i={render:function(n){const{t}=l(d);return e.jsx(s,{...n,icon:e.jsx(m,{name:"BellIcon"}),rightSection:e.jsx(g,{label:t("new"),size:"small"}),children:t("notifications")})},args:{...r.args}},c={render:function(n){const{t}=l(d);return e.jsxs("div",{style:{width:"240px",display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(s,{...n,children:t("home")}),e.jsx(s,{...n,active:!0,children:t("profile")}),e.jsx(s,{...n,disabled:!0,children:t("a11y_settings")}),e.jsx(s,{...n,danger:!0,icon:e.jsx(m,{name:"TrashIcon"}),children:t("a11y_delete")})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BaseListItem {...args}>{args.children || t("standard_list_item")}</BaseListItem>;
  },
  args: {
    style: {
      width: "240px"
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BaseListItem {...args} icon={<Icon name="EditIcon" />}>{t("home")}</BaseListItem>;
  },
  args: {
    ...Default.args
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BaseListItem {...args} icon={<Icon name="SettingsIcon" />} rightSection={<Icon name="ChevronRightIcon" size="small" />}>
        {t("a11y_settings")}
      </BaseListItem>;
  },
  args: {
    ...Default.args
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BaseListItem {...args} icon={<Icon name="BellIcon" />} rightSection={<Chip label={t("new")} size="small" />}>
        {t("notifications")}
      </BaseListItem>;
  },
  args: {
    ...Default.args
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      width: "240px",
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }}>
            <BaseListItem {...args}>{t("home")}</BaseListItem>
            <BaseListItem {...args} active>{t("profile")}</BaseListItem>
            <BaseListItem {...args} disabled>{t("a11y_settings")}</BaseListItem>
            <BaseListItem {...args} danger icon={<Icon name="TrashIcon" />}>{t("a11y_delete")}</BaseListItem>
        </div>;
  }
}`,...c.parameters?.docs?.source}}};const h=["Default","WithIcon","WithRightSection","WithBadge","States"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:r,States:c,WithBadge:i,WithIcon:a,WithRightSection:o,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{r as D,_ as S,a as W,o as a,i as b,c};
