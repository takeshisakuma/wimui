"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Flex-CwvbGUNO.js";import{r as u,t as d}from"./DemoCell-BNI7hFXS.js";var f=t({Basic:()=>h,Column:()=>g,JustifyBetween:()=>_,Wrapped:()=>v,__namedExportsOrder:()=>y,default:()=>m}),p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),a(),c(),u(),p=s(),m={title:`Components/Layout/Flex`,component:l,tags:[],argTypes:{direction:{control:`select`,options:[`row`,`row-reverse`,`column`,`column-reverse`]},align:{control:`select`,options:[`start`,`center`,`end`,`stretch`,`baseline`]},justify:{control:`select`,options:[`start`,`center`,`end`,`between`,`around`,`evenly`,`stretch`]},wrap:{control:`select`,options:[`nowrap`,`wrap`,`wrap-reverse`]},gap:{control:`text`},inline:{control:`boolean`}}},h={render:function(e){let{t}=r(o);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,style:{minWidth:60},children:t(`story.flex_item_1`,`Unassigned`)}),(0,p.jsx)(d,{intent:`success`,style:{minWidth:60},children:t(`story.flex_item_2`,`In review`)}),(0,p.jsx)(d,{intent:`warning`,style:{minWidth:60},children:t(`story.flex_item_3`,`Blocked`)})]})},args:{direction:`row`,gap:16}},g={render:function(e){let{t}=r(o);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.flex_item_1`,`Unassigned`)}),(0,p.jsx)(d,{intent:`success`,children:t(`story.flex_item_2`,`In review`)}),(0,p.jsx)(d,{intent:`danger`,children:t(`story.flex_item_3`,`Blocked`)})]})},args:{direction:`column`,gap:`1rem`}},_={render:function(e){let{t}=r(o);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.flex_left`)}),(0,p.jsx)(d,{intent:`neutral`,children:t(`story.flex_middle`)}),(0,p.jsx)(d,{intent:`neutral`,children:t(`story.flex_right`)})]})},args:{justify:`between`,gap:16,style:{width:`100%`,border:`1px solid var(--wim-color-border)`,padding:`10px`}}},v={render:function(e){let{t}=r(o);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.flex_item_1`,`Unassigned`)}),(0,p.jsx)(d,{intent:`success`,children:t(`story.flex_item_2`,`In review`)}),(0,p.jsx)(d,{intent:`warning`,children:t(`story.flex_item_3`,`Blocked`)}),(0,p.jsx)(d,{intent:`danger`,children:t(`story.flex_item_4`,`Shipped`)}),(0,p.jsx)(d,{intent:`neutral`,children:t(`story.flex_item_5`,`Archived`)})]})},args:{wrap:`wrap`,gap:16,style:{width:`200px`,padding:`10px`,border:`1px solid var(--wim-color-border)`}}},y=[`Basic`,`Column`,`JustifyBetween`,`Wrapped`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <DemoCell intent="primary" style={{
        minWidth: 60
      }}>{t("story.flex_item_1", "Unassigned")}</DemoCell>
        <DemoCell intent="success" style={{
        minWidth: 60
      }}>{t("story.flex_item_2", "In review")}</DemoCell>
        <DemoCell intent="warning" style={{
        minWidth: 60
      }}>{t("story.flex_item_3", "Blocked")}</DemoCell>
      </Flex>;
  },
  args: {
    direction: "row",
    gap: 16
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <DemoCell intent="primary">{t("story.flex_item_1", "Unassigned")}</DemoCell>
        <DemoCell intent="success">{t("story.flex_item_2", "In review")}</DemoCell>
        <DemoCell intent="danger">{t("story.flex_item_3", "Blocked")}</DemoCell>
      </Flex>;
  },
  args: {
    direction: "column",
    gap: "1rem"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <DemoCell intent="primary">{t("story.flex_left")}</DemoCell>
        <DemoCell intent="neutral">{t("story.flex_middle")}</DemoCell>
        <DemoCell intent="neutral">{t("story.flex_right")}</DemoCell>
      </Flex>;
  },
  args: {
    justify: "between",
    gap: 16,
    style: {
      width: "100%",
      border: "1px solid var(--wim-color-border)",
      padding: "10px"
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <DemoCell intent="primary">{t("story.flex_item_1", "Unassigned")}</DemoCell>
        <DemoCell intent="success">{t("story.flex_item_2", "In review")}</DemoCell>
        <DemoCell intent="warning">{t("story.flex_item_3", "Blocked")}</DemoCell>
        <DemoCell intent="danger">{t("story.flex_item_4", "Shipped")}</DemoCell>
        <DemoCell intent="neutral">{t("story.flex_item_5", "Archived")}</DemoCell>
      </Flex>;
  },
  args: {
    wrap: "wrap",
    gap: 16,
    style: {
      width: "200px",
      padding: "10px",
      border: "1px solid var(--wim-color-border)"
    }
  }
}`,...v.parameters?.docs?.source}}}})))()}export{v as a,_ as i,g as n,b as o,f as r,h as t};