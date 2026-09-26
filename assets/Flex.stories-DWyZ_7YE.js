"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,Sr as i,Tr as a,ur as o,xr as s}from"./iframe-DkmqI5Zh.js";import{t as c}from"./src-BWkk1A6b.js";import{a as l}from"./SpeedDial-BETEjV3w.js";import{r as u,t as d}from"./DemoCell-DrY2yu05.js";var f=e({Basic:()=>h,Column:()=>g,JustifyBetween:()=>_,Wrapped:()=>v,__namedExportsOrder:()=>y,default:()=>m}),p,m,h,g,_,v,y,b=t((()=>{n(),r(),i(),c(),u(),p=o(),m={title:`Components/Layout/Flex`,component:l,tags:[],argTypes:{direction:{control:`select`,options:[`row`,`row-reverse`,`column`,`column-reverse`]},align:{control:`select`,options:[`start`,`center`,`end`,`stretch`,`baseline`]},justify:{control:`select`,options:[`start`,`center`,`end`,`between`,`around`,`evenly`,`stretch`]},wrap:{control:`select`,options:[`nowrap`,`wrap`,`wrap-reverse`]},gap:{control:`text`},inline:{control:`boolean`}}},h={render:function(e){let{t}=a(s);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,style:{minWidth:60},children:t(`story.flex_item_1`,`Unassigned`)}),(0,p.jsx)(d,{intent:`success`,style:{minWidth:60},children:t(`story.flex_item_2`,`In review`)}),(0,p.jsx)(d,{intent:`warning`,style:{minWidth:60},children:t(`story.flex_item_3`,`Blocked`)})]})},args:{direction:`row`,gap:16}},g={render:function(e){let{t}=a(s);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.flex_item_1`,`Unassigned`)}),(0,p.jsx)(d,{intent:`success`,children:t(`story.flex_item_2`,`In review`)}),(0,p.jsx)(d,{intent:`danger`,children:t(`story.flex_item_3`,`Blocked`)})]})},args:{direction:`column`,gap:`1rem`}},_={render:function(e){let{t}=a(s);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.flex_left`)}),(0,p.jsx)(d,{intent:`neutral`,children:t(`story.flex_middle`)}),(0,p.jsx)(d,{intent:`neutral`,children:t(`story.flex_right`)})]})},args:{justify:`between`,gap:16,style:{width:`100%`,border:`1px solid var(--wim-color-border)`,padding:`10px`}}},v={render:function(e){let{t}=a(s);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.flex_item_1`,`Unassigned`)}),(0,p.jsx)(d,{intent:`success`,children:t(`story.flex_item_2`,`In review`)}),(0,p.jsx)(d,{intent:`warning`,children:t(`story.flex_item_3`,`Blocked`)}),(0,p.jsx)(d,{intent:`danger`,children:t(`story.flex_item_4`,`Shipped`)}),(0,p.jsx)(d,{intent:`neutral`,children:t(`story.flex_item_5`,`Archived`)})]})},args:{wrap:`wrap`,gap:16,style:{width:`200px`,padding:`10px`,border:`1px solid var(--wim-color-border)`}}},y=[`Basic`,`Column`,`JustifyBetween`,`Wrapped`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}}));b();export{h as Basic,g as Column,_ as JustifyBetween,v as Wrapped,y as __namedExportsOrder,m as default,b as n,f as t};