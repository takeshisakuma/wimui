"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{t as c}from"./src-CV0le6yM.js";import{t as l}from"./Blockquote-CsVFCPEU.js";var u=e({AsChild:()=>v,Default:()=>p,Large:()=>h,NoBorder:()=>g,VariousColors:()=>_,WithCite:()=>m,__namedExportsOrder:()=>y,default:()=>f}),d,f,p,m,h,g,_,v,y,b=t((()=>{n(),o(),i(),c(),d=a(),f={title:`Components/Typography & Icons/Blockquote`,component:l,parameters:{layout:`centered`},tags:[],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`black`,`deepgray`,`gray`,`lightgray`,`white`,`primary`,`success`,`warning`,`danger`,`info`]}}},p={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.quote_default`)})},args:{}},m={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.quote_design`),cite:`Steve Jobs`})},args:{}},h={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.quote_work`),cite:`Steve Jobs`})},args:{size:`lg`}},g={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.quote_simple`),cite:`Leonardo da Vinci`})},args:{border:!1}},_={render:function(e){let{t}=r(s);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,d.jsx)(l,{...e,content:t(`story.quote_black`),color:`text-primary`}),(0,d.jsx)(l,{...e,content:t(`story.quote_deepgray`),color:`text-secondary`}),(0,d.jsx)(l,{...e,content:t(`story.quote_gray`),color:`text-tertiary`}),(0,d.jsx)(`div`,{"data-theme":`dark`,style:{backgroundColor:`var(--wim-color-surface-void)`,padding:`12px`,borderRadius:`4px`},children:(0,d.jsx)(l,{...e,content:t(`story.quote_lightgray`),color:`text-disabled`})})]})}},v={render:e=>{let{t}=r(s);return(0,d.jsx)(l,{...e,content:t(`story.quote_default`),asChild:!0,children:(0,d.jsx)(`div`,{style:{padding:`20px`,background:`var(--wim-color-surface-variant)`},children:t(`story.quote_default`)})})},args:{}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    return <Blockquote {...args} content={t('story.quote_simple')} cite="Leonardo da Vinci" />;
  },
  args: {
    border: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithCite`,`Large`,`NoBorder`,`VariousColors`,`AsChild`]}));b();export{v as AsChild,p as Default,h as Large,g as NoBorder,_ as VariousColors,m as WithCite,y as __namedExportsOrder,f as default,b as n,u as t};