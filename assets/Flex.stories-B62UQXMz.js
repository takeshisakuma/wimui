"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{t as c}from"./src-CV0le6yM.js";import{a as l}from"./SpeedDial-75iu1pCN.js";import{r as u,t as d}from"./DemoCell-DdsJN3Va.js";var f=e({Basic:()=>h,Column:()=>g,JustifyBetween:()=>_,Wrapped:()=>v,__namedExportsOrder:()=>y,default:()=>m}),p,m,h,g,_,v,y,b=t((()=>{n(),o(),i(),c(),u(),p=a(),m={title:`Components/Layout/Flex`,component:l,tags:[],argTypes:{direction:{control:`select`,options:[`row`,`row-reverse`,`column`,`column-reverse`]},align:{control:`select`,options:[`start`,`center`,`end`,`stretch`,`baseline`]},justify:{control:`select`,options:[`start`,`center`,`end`,`between`,`around`,`evenly`,`stretch`]},wrap:{control:`select`,options:[`nowrap`,`wrap`,`wrap-reverse`]},gap:{control:`text`},inline:{control:`boolean`}}},h={render:function(e){let{t}=r(s);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,style:{minWidth:60},children:t(`story.flex_item_1`,`1`)}),(0,p.jsx)(d,{intent:`success`,style:{minWidth:60},children:t(`story.flex_item_2`,`2`)}),(0,p.jsx)(d,{intent:`warning`,style:{minWidth:60},children:t(`story.flex_item_3`,`3`)})]})},args:{direction:`row`,gap:16}},g={render:function(e){let{t}=r(s);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.flex_item_1`,`Item 1`)}),(0,p.jsx)(d,{intent:`success`,children:t(`story.flex_item_2`,`Item 2`)}),(0,p.jsx)(d,{intent:`danger`,children:t(`story.flex_item_3`,`Item 3`)})]})},args:{direction:`column`,gap:`1rem`}},_={render:function(e){let{t}=r(s);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.flex_left`)}),(0,p.jsx)(d,{intent:`neutral`,children:t(`story.flex_middle`)}),(0,p.jsx)(d,{intent:`neutral`,children:t(`story.flex_right`)})]})},args:{justify:`between`,gap:16,style:{width:`100%`,border:`1px solid var(--wim-color-border)`,padding:`10px`}}},v={render:function(e){let{t}=r(s);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.flex_item_1`,`1`)}),(0,p.jsx)(d,{intent:`success`,children:t(`story.flex_item_2`,`2`)}),(0,p.jsx)(d,{intent:`warning`,children:t(`story.flex_item_3`,`3`)}),(0,p.jsx)(d,{intent:`danger`,children:t(`story.flex_item_4`,`4`)}),(0,p.jsx)(d,{intent:`neutral`,children:t(`story.flex_item_5`,`5`)})]})},args:{wrap:`wrap`,gap:16,style:{width:`200px`,padding:`10px`,border:`1px solid var(--wim-color-border)`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <DemoCell intent="primary" style={{
        minWidth: 60
      }}>{t("story.flex_item_1", "1")}</DemoCell>
        <DemoCell intent="success" style={{
        minWidth: 60
      }}>{t("story.flex_item_2", "2")}</DemoCell>
        <DemoCell intent="warning" style={{
        minWidth: 60
      }}>{t("story.flex_item_3", "3")}</DemoCell>
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
        <DemoCell intent="primary">{t("story.flex_item_1", "Item 1")}</DemoCell>
        <DemoCell intent="success">{t("story.flex_item_2", "Item 2")}</DemoCell>
        <DemoCell intent="danger">{t("story.flex_item_3", "Item 3")}</DemoCell>
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
        <DemoCell intent="primary">{t("story.flex_item_1", "1")}</DemoCell>
        <DemoCell intent="success">{t("story.flex_item_2", "2")}</DemoCell>
        <DemoCell intent="warning">{t("story.flex_item_3", "3")}</DemoCell>
        <DemoCell intent="danger">{t("story.flex_item_4", "4")}</DemoCell>
        <DemoCell intent="neutral">{t("story.flex_item_5", "5")}</DemoCell>
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
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`Column`,`JustifyBetween`,`Wrapped`]}));b();export{h as Basic,g as Column,_ as JustifyBetween,v as Wrapped,y as __namedExportsOrder,m as default,b as n,f as t};