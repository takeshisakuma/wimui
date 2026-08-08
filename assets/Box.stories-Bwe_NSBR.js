"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{n as c,t as l}from"./Box-Bs2Irq0X.js";import{r as u,t as d}from"./DemoCell-BGw1L_9W.js";var f=e({AsButton:()=>_,Default:()=>h,PaddingProps:()=>y,Spacing:()=>v,WithCustomShadow:()=>g,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b,x=t((()=>{n(),c(),o(),i(),u(),p=a(),m={title:`Components/Layout/Box`,component:l,tags:[],argTypes:{as:{control:`text`},bg:{control:`color`},display:{control:`text`},position:{control:`text`}}},h={render:function(e){let{t}=r(s);return(0,p.jsx)(l,{...e,children:t(`story.box_default`)})},args:{bg:`var(--wim-color-surface-variant)`,p:20,radius:8}},g={render:function(e){let{t}=r(s);return(0,p.jsx)(l,{...e,children:t(`story.box_shadow`)})},args:{bg:`var(--wim-color-surface)`,p:40,radius:12,shadow:`var(--wim-shadow-md)`}},_={render:function(e){let{t}=r(s);return(0,p.jsx)(l,{...e,children:t(`story.box_button`)})},args:{as:`button`,bg:`color-mix(in srgb, var(--wim-color-primary) 12%, var(--wim-color-surface))`,color:`var(--wim-color-text-accent)`,px:`md`,py:`sm`,radius:`md`,style:{border:`1px solid var(--wim-color-primary)`,cursor:`pointer`,fontWeight:600}}},v={render:function(){let{t:e}=r(s);return(0,p.jsxs)(l,{bg:`var(--wim-color-surface-variant)`,p:`md`,radius:`md`,style:{border:`1px solid var(--wim-color-border)`},children:[(0,p.jsx)(d,{intent:`primary`,p:`sm`,mb:`sm`,children:e(`story.box_margin`)}),(0,p.jsx)(d,{intent:`success`,p:`sm`,children:e(`story.box_2`)})]})}},y={render:function(e){let{t}=r(s);return(0,p.jsx)(l,{...e,children:t(`story.box_padding`)})},args:{bg:`color-mix(in srgb, var(--wim-color-danger) 12%, var(--wim-color-surface))`,color:`var(--wim-color-text-danger)`,px:40,py:10,radius:8,style:{border:`1px solid var(--wim-color-danger)`,display:`inline-block`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Box {...args}>{t("story.box_default")}</Box>;
  },
  args: {
    bg: "var(--wim-color-surface-variant)",
    p: 20,
    radius: 8
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Box {...args}>{t("story.box_shadow")}</Box>;
  },
  args: {
    bg: "var(--wim-color-surface)",
    p: 40,
    radius: 12,
    shadow: "var(--wim-shadow-md)"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Box {...args}>{t("story.box_button")}</Box>;
  },
  args: {
    as: "button",
    bg: "color-mix(in srgb, var(--wim-color-primary) 12%, var(--wim-color-surface))",
    color: "var(--wim-color-text-accent)",
    px: "md",
    py: "sm",
    radius: "md",
    style: {
      border: "1px solid var(--wim-color-primary)",
      cursor: "pointer",
      fontWeight: 600
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Box bg="var(--wim-color-surface-variant)" p="md" radius="md" style={{
      border: "1px solid var(--wim-color-border)"
    }}>
        <DemoCell intent="primary" p="sm" mb="sm">
          {t("story.box_margin")}
        </DemoCell>
        <DemoCell intent="success" p="sm">
          {t("story.box_2")}
        </DemoCell>
      </Box>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Box {...args}>{t("story.box_padding")}</Box>;
  },
  args: {
    bg: "color-mix(in srgb, var(--wim-color-danger) 12%, var(--wim-color-surface))",
    color: "var(--wim-color-text-danger)",
    px: 40,
    // Left and right padding
    py: 10,
    // Top and bottom padding
    radius: 8,
    style: {
      border: "1px solid var(--wim-color-danger)",
      display: "inline-block"
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithCustomShadow`,`AsButton`,`Spacing`,`PaddingProps`]}));x();export{_ as AsButton,h as Default,y as PaddingProps,v as Spacing,g as WithCustomShadow,b as __namedExportsOrder,m as default,x as n,f as t};