"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{n as l,t as u}from"./PromptInput-B23kPIFQ.js";var d=e({Default:()=>g,Disabled:()=>y,Loading:()=>b,WithAttachment:()=>_,WithCharCount:()=>v,__namedExportsOrder:()=>x,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S=t((()=>{f=n(r(),1),s(),a(),l(),p=o(),m={title:`Components/AI/PromptInput`,component:u,parameters:{layout:`padded`},argTypes:{disabled:{control:`boolean`},loading:{control:`boolean`},showAttach:{control:`boolean`},maxRows:{control:{type:`number`,min:2,max:20}},maxLength:{control:`number`},placeholder:{control:`text`}}},h=e=>{let{t}=i(c),[n,r]=(0,f.useState)([]),[a,o]=(0,f.useState)(null),s=f.useRef(null);return(0,p.jsxs)(`div`,{style:{width:`100%`,maxWidth:800,margin:`0 auto`,display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-md)`},children:[(0,p.jsx)(`input`,{type:`file`,ref:s,style:{display:`none`},onChange:e=>{let t=e.target.files?.[0];t&&o(t.name)}}),n.length>0&&(0,p.jsxs)(`div`,{style:{padding:`var(--wim-spacing-sm)`,background:`var(--wim-color-ghost-bg)`,borderRadius:`var(--wim-radius-md)`,fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:[t(`story.promptinput_submitted`),n[n.length-1]]}),a&&(0,p.jsxs)(`div`,{style:{padding:`var(--wim-spacing-sm)`,background:`var(--wim-color-primary-subtle)`,border:`1px solid var(--wim-color-primary)`,borderRadius:`var(--wim-radius-md)`,fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-accent)`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,p.jsxs)(`span`,{children:[t(`story.promptinput_attached`),`: `,(0,p.jsx)(`strong`,{children:a})]}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>o(null),style:{background:`transparent`,border:`none`,color:`inherit`,cursor:`pointer`,fontSize:`1.2em`,lineHeight:1},children:`×`})]}),(0,p.jsx)(u,{...e,onSubmit:e=>{r(t=>[...t,e]),o(null)},onAttach:()=>s.current?.click()})]})},g={render:function(e){let{t}=i(c);return(0,p.jsx)(h,{...e,placeholder:e.placeholder??t(`story.promptinput_placeholder`)})},args:{}},_={render:function(e){let{t}=i(c);return(0,p.jsx)(h,{...e,placeholder:e.placeholder??t(`story.promptinput_placeholder_attach`)})},args:{showAttach:!0}},v={render:function(e){let{t}=i(c);return(0,p.jsx)(h,{...e,placeholder:e.placeholder??t(`story.promptinput_placeholder_char`)})},args:{maxLength:500}},y={render:function(e){let{t}=i(c);return(0,p.jsx)(h,{...e,defaultValue:e.defaultValue??t(`story.promptinput_disabled_val`)})},args:{disabled:!0}},b={render:function(e){let{t}=i(c);return(0,p.jsx)(h,{...e,defaultValue:e.defaultValue??t(`story.promptinput_loading_val`)})},args:{loading:!0}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveDemo {...args} placeholder={args.placeholder ?? t("story.promptinput_placeholder")} />;
  },
  args: {}
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveDemo {...args} placeholder={args.placeholder ?? t("story.promptinput_placeholder_attach")} />;
  },
  args: {
    showAttach: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveDemo {...args} placeholder={args.placeholder ?? t("story.promptinput_placeholder_char")} />;
  },
  args: {
    maxLength: 500
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveDemo {...args} defaultValue={args.defaultValue ?? t("story.promptinput_disabled_val")} />;
  },
  args: {
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveDemo {...args} defaultValue={args.defaultValue ?? t("story.promptinput_loading_val")} />;
  },
  args: {
    loading: true
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithAttachment`,`WithCharCount`,`Disabled`,`Loading`]}));S();export{g as Default,y as Disabled,b as Loading,_ as WithAttachment,v as WithCharCount,x as __namedExportsOrder,m as default,S as n,d as t};