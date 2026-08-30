"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Ir as c,t as l}from"./src-CV0le6yM.js";import{t as u}from"./Icon-DKSRBrcV.js";import{n as d,r as f}from"./BaseListItem-C_TtCKeS.js";var p=e({Default:()=>g,States:()=>b,WithBadge:()=>y,WithIcon:()=>_,WithRightSection:()=>v,__namedExportsOrder:()=>x,default:()=>h}),m,h,g,_,v,y,b,x,S=t((()=>{n(),f(),o(),i(),l(),m=a(),h={title:`Components/Data Structures/BaseListItem`,component:d,parameters:{layout:`centered`}},g={render:function(e){let{t}=r(s);return(0,m.jsx)(d,{...e,children:e.children||t(`standard_list_item`)})},args:{style:{width:`240px`}}},_={render:function(e){let{t}=r(s);return(0,m.jsx)(d,{...e,icon:(0,m.jsx)(u,{name:`EditIcon`}),children:t(`home`)})},args:{...g.args}},v={render:function(e){let{t}=r(s);return(0,m.jsx)(d,{...e,icon:(0,m.jsx)(u,{name:`SettingsIcon`}),rightSection:(0,m.jsx)(u,{name:`ChevronRightIcon`,size:`sm`}),children:t(`a11y.settings`)})},args:{...g.args}},y={render:function(e){let{t}=r(s);return(0,m.jsx)(d,{...e,icon:(0,m.jsx)(u,{name:`BellIcon`}),rightSection:(0,m.jsx)(c,{size:`sm`,children:t(`new`)}),children:t(`notifications`)})},args:{...g.args}},b={render:function(e){let{t}=r(s);return(0,m.jsxs)(`div`,{style:{width:`240px`,display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,m.jsx)(d,{...e,children:t(`home`)}),(0,m.jsx)(d,{...e,active:!0,children:t(`profile`)}),(0,m.jsx)(d,{...e,disabled:!0,children:t(`a11y.settings`)}),(0,m.jsx)(d,{...e,danger:!0,icon:(0,m.jsx)(u,{name:`TrashIcon`}),children:t(`a11y.delete`)})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BaseListItem {...args} icon={<Icon name="EditIcon" />}>{t("home")}</BaseListItem>;
  },
  args: {
    ...Default.args
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BaseListItem {...args} icon={<Icon name="SettingsIcon" />} rightSection={<Icon name="ChevronRightIcon" size="sm" />}>
        {t("a11y.settings")}
      </BaseListItem>;
  },
  args: {
    ...Default.args
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BaseListItem {...args} icon={<Icon name="BellIcon" />} rightSection={<Chip size="sm">{t("new")}</Chip>}>
        {t("notifications")}
      </BaseListItem>;
  },
  args: {
    ...Default.args
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
            <BaseListItem {...args} disabled>{t("a11y.settings")}</BaseListItem>
            <BaseListItem {...args} danger icon={<Icon name="TrashIcon" />}>{t("a11y.delete")}</BaseListItem>
        </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithIcon`,`WithRightSection`,`WithBadge`,`States`]}));S();export{g as Default,b as States,y as WithBadge,_ as WithIcon,v as WithRightSection,x as __namedExportsOrder,h as default,S as n,p as t};