"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{At as c,t as l}from"./src-Ssuy8lr7.js";import{n as u,t as d}from"./avatar_1-DjxHreQB.js";var f=e({Colors:()=>b,Default:()=>h,Fallback:()=>y,Initials:()=>g,Shapes:()=>v,Sizes:()=>_,__namedExportsOrder:()=>x,default:()=>m}),p,m,h,g,_,v,y,b,x,S=t((()=>{o(),n(),i(),l(),u(),p=a(),m={title:`Components/Data Indicators/Avatar`,component:c,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},shape:{control:`radio`,options:[`circle`,`rounded`]},intent:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`,`neutral`]}}},h={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,src:d,alt:t(`story.avatar_alt`)})},args:{}},g={args:{initials:`JD`,intent:`primary`}},_={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,p.jsx)(c,{...e,size:`sm`,initials:`SM`,intent:`neutral`}),(0,p.jsx)(c,{...e,size:`md`,initials:`MD`,intent:`neutral`}),(0,p.jsx)(c,{...e,size:`lg`,initials:`LG`,intent:`neutral`})]})},v={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,p.jsx)(c,{...e,shape:`circle`,initials:`C`,intent:`neutral`}),(0,p.jsx)(c,{...e,shape:`rounded`,initials:`R`,intent:`neutral`})]})},y={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,src:`https://invalid-image-url.com`,initials:`FB`,alt:t(`story.avatar_alt`)})},args:{}},b={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,p.jsx)(c,{...e,initials:`P`,intent:`primary`}),(0,p.jsx)(c,{...e,initials:`S`,intent:`neutral`}),(0,p.jsx)(c,{...e,initials:`N`,intent:`neutral`}),(0,p.jsx)(c,{...e,initials:`E`,intent:`danger`}),(0,p.jsx)(c,{...e,initials:`SU`,intent:`success`})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Avatar {...args} src={avatar1} alt={t("story.avatar_alt")} />;
  },
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    initials: "JD",
    intent: "primary"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Avatar {...args} size="sm" initials="SM" intent="neutral" />
      <Avatar {...args} size="md" initials="MD" intent="neutral" />
      <Avatar {...args} size="lg" initials="LG" intent="neutral" />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Avatar {...args} shape="circle" initials="C" intent="neutral" />
      <Avatar {...args} shape="rounded" initials="R" intent="neutral" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Avatar {...args} src="https://invalid-image-url.com" initials="FB" alt={t("story.avatar_alt")} />;
  },
  args: {}
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Avatar {...args} initials="P" intent="primary" />
      <Avatar {...args} initials="S" intent="neutral" />
      <Avatar {...args} initials="N" intent="neutral" />
      <Avatar {...args} initials="E" intent="danger" />
      <Avatar {...args} initials="SU" intent="success" />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Initials`,`Sizes`,`Shapes`,`Fallback`,`Colors`]}));S();export{b as Colors,h as Default,y as Fallback,g as Initials,v as Shapes,_ as Sizes,x as __namedExportsOrder,m as default,S as n,f as t};