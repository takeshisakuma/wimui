"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Box-lSx-_C-t.js";import{r as u,t as d}from"./DemoCell-BNI7hFXS.js";var f=t({AsButton:()=>_,Default:()=>h,PaddingProps:()=>y,Spacing:()=>v,WithCustomShadow:()=>g,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),c(),i(),a(),u(),p=s(),m={title:`Components/Layout/Box`,component:l,tags:[],argTypes:{as:{control:`text`},bg:{control:`color`},display:{control:`text`},position:{control:`text`}}},h={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{...e,children:t(`story.box_default`)})},args:{bg:`var(--wim-color-surface-variant)`,p:20,radius:8}},g={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{...e,children:t(`story.box_shadow`)})},args:{bg:`var(--wim-color-surface)`,p:40,radius:12,shadow:`var(--wim-shadow-md)`}},_={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{...e,children:t(`story.box_button`)})},args:{as:`button`,bg:`color-mix(in srgb, var(--wim-color-primary) 12%, var(--wim-color-surface))`,color:`var(--wim-color-text-accent)`,px:`md`,py:`sm`,radius:`md`,style:{border:`1px solid var(--wim-color-primary)`,cursor:`pointer`,fontWeight:600}}},v={render:function(){let{t:e}=r(o);return(0,p.jsxs)(l,{bg:`var(--wim-color-surface-variant)`,p:`md`,radius:`md`,style:{border:`1px solid var(--wim-color-border)`},children:[(0,p.jsx)(d,{intent:`primary`,p:`sm`,mb:`sm`,children:e(`story.box_margin`)}),(0,p.jsx)(d,{intent:`success`,p:`sm`,children:e(`story.box_2`)})]})}},y={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{...e,children:t(`story.box_padding`)})},args:{bg:`color-mix(in srgb, var(--wim-color-danger) 12%, var(--wim-color-surface))`,color:`var(--wim-color-text-danger)`,px:40,py:10,radius:8,style:{border:`1px solid var(--wim-color-danger)`,display:`inline-block`}}},b=[`Default`,`WithCustomShadow`,`AsButton`,`Spacing`,`PaddingProps`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}})))()}export{h as n,x as r,f as t};