"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Icon-TGLZuM2d.js";import{n as u,t as d}from"./BaseListItem-BauzLQwt.js";import{n as f,t as p}from"./Chip-Ce4fGuZT.js";var m=t({Default:()=>_,States:()=>x,WithBadge:()=>b,WithIcon:()=>v,WithRightSection:()=>y,__namedExportsOrder:()=>S,default:()=>g}),h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),u(),i(),a(),f(),c(),h=s(),g={title:`Components/Data Structures/BaseListItem`,component:d,parameters:{layout:`centered`}},_={render:function(e){let{t}=r(o);return(0,h.jsx)(d,{...e,children:e.children||t(`standard_list_item`)})},args:{style:{width:`240px`}}},v={render:function(e){let{t}=r(o);return(0,h.jsx)(d,{...e,icon:(0,h.jsx)(l,{name:`EditIcon`}),children:t(`home`)})},args:{..._.args}},y={render:function(e){let{t}=r(o);return(0,h.jsx)(d,{...e,icon:(0,h.jsx)(l,{name:`SettingsIcon`}),rightSection:(0,h.jsx)(l,{name:`ChevronRightIcon`,size:`sm`}),children:t(`a11y.settings`)})},args:{..._.args}},b={render:function(e){let{t}=r(o);return(0,h.jsx)(d,{...e,icon:(0,h.jsx)(l,{name:`BellIcon`}),rightSection:(0,h.jsx)(p,{size:`sm`,children:t(`new`)}),children:t(`notifications`)})},args:{..._.args}},x={render:function(e){let{t}=r(o);return(0,h.jsxs)(`div`,{style:{width:`240px`,display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,h.jsx)(d,{...e,children:t(`home`)}),(0,h.jsx)(d,{...e,active:!0,children:t(`profile`)}),(0,h.jsx)(d,{...e,disabled:!0,children:t(`a11y.settings`)}),(0,h.jsx)(d,{...e,danger:!0,icon:(0,h.jsx)(l,{name:`TrashIcon`}),children:t(`a11y.delete`)})]})}},S=[`Default`,`WithIcon`,`WithRightSection`,`WithBadge`,`States`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BaseListItem {...args} icon={<Icon name="EditIcon" />}>{t("home")}</BaseListItem>;
  },
  args: {
    ...Default.args
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}export{v as a,b as i,_ as n,y as o,x as r,C as s,m as t};