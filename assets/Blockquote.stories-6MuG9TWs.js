"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Blockquote--B-UxhVt.js";var u=t({AsChild:()=>b,Default:()=>p,Intents:()=>y,Large:()=>h,NoBorder:()=>_,Small:()=>g,VariousColors:()=>v,WithCite:()=>m,__namedExportsOrder:()=>x,default:()=>f}),d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Typography & Icons/Blockquote`,component:l,parameters:{layout:`centered`},tags:[],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`black`,`deepgray`,`gray`,`lightgray`,`white`,`primary`,`success`,`warning`,`danger`,`info`]}}},p={render:e=>{let{t}=r(o);return(0,d.jsx)(l,{...e,content:t(`story.quote_default`)})},args:{}},m={render:e=>{let{t}=r(o);return(0,d.jsx)(l,{...e,content:t(`story.quote_design`),cite:`Steve Jobs`})},args:{}},h={render:e=>{let{t}=r(o);return(0,d.jsx)(l,{...e,content:t(`story.quote_work`),cite:`Steve Jobs`})},args:{size:`lg`}},g={render:e=>{let{t}=r(o);return(0,d.jsx)(l,{...e,content:t(`story.quote_work`),cite:`Steve Jobs`})},args:{size:`sm`}},_={render:e=>{let{t}=r(o);return(0,d.jsx)(l,{...e,content:t(`story.quote_simple`),cite:`Leonardo da Vinci`})},args:{border:!1}},v={render:function(e){let{t}=r(o);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,d.jsx)(l,{...e,content:t(`story.quote_black`),color:`text-primary`}),(0,d.jsx)(l,{...e,content:t(`story.quote_deepgray`),color:`text-secondary`}),(0,d.jsx)(l,{...e,content:t(`story.quote_gray`),color:`text-tertiary`}),(0,d.jsx)(`div`,{"data-theme":`dark`,style:{backgroundColor:`var(--wim-color-surface-void)`,padding:`12px`,borderRadius:`4px`},children:(0,d.jsx)(l,{...e,content:t(`story.quote_lightgray`),color:`text-disabled`})})]})}},y={render:function(e){let{t}=r(o);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-2xl)`},children:[(0,d.jsx)(l,{...e,content:t(`story.quote_default`),color:`primary`}),(0,d.jsx)(l,{...e,content:t(`story.quote_work`),color:`success`}),(0,d.jsx)(l,{...e,content:t(`story.quote_simple`),color:`warning`}),(0,d.jsx)(l,{...e,content:t(`story.quote_design`),color:`danger`}),(0,d.jsx)(l,{...e,content:t(`story.quote_measure`),color:`info`})]})}},b={render:e=>{let{t}=r(o);return(0,d.jsx)(l,{...e,content:t(`story.quote_default`),asChild:!0,children:(0,d.jsx)(`div`,{style:{padding:`20px`,background:`var(--wim-color-surface-variant)`},children:t(`story.quote_default`)})})},args:{}},x=[`Default`,`WithCite`,`Large`,`Small`,`NoBorder`,`VariousColors`,`Intents`,`AsChild`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_default')} />;
  },
  args: {}
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_design')} cite="Steve Jobs" />;
  },
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_work')} cite="Steve Jobs" />;
  },
  args: {
    size: "lg"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_work')} cite="Steve Jobs" />;
  },
  args: {
    size: "sm"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_simple')} cite="Leonardo da Vinci" />;
  },
  args: {
    border: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args: React.ComponentProps<typeof Blockquote>) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        <Blockquote {...args} content={t('story.quote_black')} color="text-primary" />
        <Blockquote {...args} content={t('story.quote_deepgray')} color="text-secondary" />
        <Blockquote {...args} content={t('story.quote_gray')} color="text-tertiary" />
        <div data-theme="dark" style={{
        backgroundColor: "var(--wim-color-surface-void)",
        padding: "12px",
        borderRadius: "4px"
      }}>
          <Blockquote {...args} content={t('story.quote_lightgray')} color="text-disabled" />
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args: React.ComponentProps<typeof Blockquote>) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-2xl)"
    }}>
        <Blockquote {...args} content={t('story.quote_default')} color="primary" />
        <Blockquote {...args} content={t('story.quote_work')} color="success" />
        <Blockquote {...args} content={t('story.quote_simple')} color="warning" />
        <Blockquote {...args} content={t('story.quote_design')} color="danger" />
        <Blockquote {...args} content={t('story.quote_measure')} color="info" />
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_default')} asChild>
        <div style={{
        padding: "20px",
        background: "var(--wim-color-surface-variant)"
      }}>
          {t('story.quote_default')}
        </div>
      </Blockquote>;
  },
  args: {}
}`,...b.parameters?.docs?.source}}}})))()}export{_ as a,m as c,h as i,S as l,u as n,g as o,y as r,v as s,b as t};