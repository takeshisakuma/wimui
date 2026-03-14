import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as r}from"./BaseListItem-DIe3ldom.js";import{I as m}from"./Icon-C3VpYLWw.js";import{C as g}from"./Chip-rvsi_eB_.js";import{A as d}from"./i18nConstants-BpHxieg5.js";import{u as l}from"./useTranslation-CgRV5_0i.js";const p={title:"Components/Internal/BaseListItem",component:r,parameters:{layout:"centered"}},s={render:function(n){const{t}=l(d);return e.jsx(r,{...n,children:n.children||t("standard_list_item")})},args:{style:{width:"240px"}}},a={render:function(n){const{t}=l(d);return e.jsx(r,{...n,icon:e.jsx(m,{name:"EditIcon"}),children:t("home")})},args:{...s.args}},o={render:function(n){const{t}=l(d);return e.jsx(r,{...n,icon:e.jsx(m,{name:"SettingsIcon"}),rightSection:e.jsx(m,{name:"ChevronRightIcon",size:"small"}),children:t("a11y_settings")})},args:{...s.args}},i={render:function(n){const{t}=l(d);return e.jsx(r,{...n,icon:e.jsx(m,{name:"BellIcon"}),rightSection:e.jsx(g,{label:t("new"),size:"small"}),children:t("notifications")})},args:{...s.args}},c={render:function(n){const{t}=l(d);return e.jsxs("div",{style:{width:"240px",display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(r,{...n,children:t("home")}),e.jsx(r,{...n,active:!0,children:t("profile")}),e.jsx(r,{...n,disabled:!0,children:t("a11y_settings")}),e.jsx(r,{...n,danger:!0,icon:e.jsx(m,{name:"TrashIcon"}),children:t("a11y_delete")})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    return <BaseListItem {...args} icon={<Icon name="SettingsIcon" />} rightSection={<Icon name="ChevronRightIcon" size="small" />}>\r
        {t("a11y_settings")}\r
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
    return <BaseListItem {...args} icon={<Icon name="BellIcon" />} rightSection={<Chip label={t("new")} size="small" />}>\r
        {t("notifications")}\r
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
    }}>\r
            <BaseListItem {...args}>{t("home")}</BaseListItem>\r
            <BaseListItem {...args} active>{t("profile")}</BaseListItem>\r
            <BaseListItem {...args} disabled>{t("a11y_settings")}</BaseListItem>\r
            <BaseListItem {...args} danger icon={<Icon name="TrashIcon" />}>{t("a11y_delete")}</BaseListItem>\r
        </div>;
  }
}`,...c.parameters?.docs?.source}}};const h=["Default","WithIcon","WithRightSection","WithBadge","States"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:s,States:c,WithBadge:i,WithIcon:a,WithRightSection:o,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{s as D,_ as S,a as W,o as a,i as b,c};
