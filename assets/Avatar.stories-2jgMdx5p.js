"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Avatar-BfxkKreA.js";import{n as u,t as d}from"./avatar_1-CKjoO8cS.js";var f=t({Colors:()=>b,Default:()=>h,Fallback:()=>y,Initials:()=>g,Shapes:()=>v,Sizes:()=>_,__namedExportsOrder:()=>x,default:()=>m}),p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{i(),n(),a(),c(),u(),p=s(),m={title:`Components/Data Indicators/Avatar`,component:l,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},shape:{control:`radio`,options:[`circle`,`rounded`]},intent:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`,`neutral`]}}},h={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{...e,src:d,alt:t(`story.avatar_alt`)})},args:{}},g={args:{initials:`JD`,intent:`primary`}},_={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,p.jsx)(l,{...e,size:`sm`,initials:`SM`,intent:`neutral`}),(0,p.jsx)(l,{...e,size:`md`,initials:`MD`,intent:`neutral`}),(0,p.jsx)(l,{...e,size:`lg`,initials:`LG`,intent:`neutral`})]})},v={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,p.jsx)(l,{...e,shape:`circle`,initials:`C`,intent:`neutral`}),(0,p.jsx)(l,{...e,shape:`rounded`,initials:`R`,intent:`neutral`})]})},y={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{...e,src:`https://invalid-image-url.com`,initials:`FB`,alt:t(`story.avatar_alt`)})},args:{}},b={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,p.jsx)(l,{...e,initials:`P`,intent:`primary`}),(0,p.jsx)(l,{...e,initials:`S`,intent:`neutral`}),(0,p.jsx)(l,{...e,initials:`N`,intent:`neutral`}),(0,p.jsx)(l,{...e,initials:`E`,intent:`danger`}),(0,p.jsx)(l,{...e,initials:`SU`,intent:`success`})]})},x=[`Default`,`Initials`,`Sizes`,`Shapes`,`Fallback`,`Colors`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}})))()}export{_ as a,v as i,b as n,S as o,y as r,f as t};