"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{cr as n}from"./iframe-splidnB2.js";import{n as r,t as i}from"./RelativeTime-CEcKS_oi.js";var a=e({Default:()=>p,FutureDate:()=>h,InSentence:()=>b,LocaleOverride:()=>v,NumericAlways:()=>g,ShortFormat:()=>_,StaticSnapshot:()=>y,Units:()=>m,__namedExportsOrder:()=>x,default:()=>f}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{r(),o=n(),s=new Date(`2024-01-01T00:00:00Z`),c=()=>typeof window<`u`&&!!window.__VRT__,l=e=>{let t=c()?s.getTime():Date.now();return new Date(t-e*6e4)},u=e=>{let t=c()?s.getTime():Date.now();return new Date(t+e*6e4)},d=()=>c()?{baseDate:s,live:!1}:{},f={title:`Components/Data Indicators/RelativeTime`,component:i,parameters:{layout:`centered`},argTypes:{date:{control:`date`},baseDate:{control:`date`},locale:{control:`select`,options:[void 0,`en`,`ja`,`pt-BR`]},numeric:{control:`radio`,options:[`auto`,`always`]},format:{control:`radio`,options:[`long`,`short`,`narrow`]},live:{control:`boolean`},asChild:{control:`boolean`}}},p={args:{date:l(3),...d()}},m={render:()=>(0,o.jsxs)(`ul`,{style:{margin:0,paddingLeft:`var(--wim-spacing-lg)`},children:[(0,o.jsx)(`li`,{children:(0,o.jsx)(i,{date:l(.5),...d()})}),(0,o.jsx)(`li`,{children:(0,o.jsx)(i,{date:l(3),...d()})}),(0,o.jsx)(`li`,{children:(0,o.jsx)(i,{date:l(300),...d()})}),(0,o.jsx)(`li`,{children:(0,o.jsx)(i,{date:l(1440*3),...d()})}),(0,o.jsx)(`li`,{children:(0,o.jsx)(i,{date:l(1440*14),...d()})}),(0,o.jsx)(`li`,{children:(0,o.jsx)(i,{date:l(1440*90),...d()})}),(0,o.jsx)(`li`,{children:(0,o.jsx)(i,{date:l(1440*730),...d()})})]})},h={args:{date:u(120),...d()}},g={name:`Numeric: always`,args:{date:l(1440),numeric:`always`,...d()}},_={args:{date:l(3),format:`short`,numeric:`always`,...d()}},v={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-sm)`},children:[(0,o.jsx)(i,{date:l(3),locale:`en`,...d()}),(0,o.jsx)(i,{date:l(3),locale:`ja`,...d()}),(0,o.jsx)(i,{date:l(3),locale:`pt-BR`,...d()})]})},y={name:`Static (baseDate)`,args:{date:new Date(`2026-07-01T09:00:00Z`),baseDate:new Date(`2026-07-07T09:00:00Z`)}},b={render:()=>(0,o.jsxs)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`},children:[`Last updated `,(0,o.jsx)(i,{date:l(12),...d()})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    date: minutesAgo(3),
    ...vrtFreeze()
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ul style={{
    margin: 0,
    paddingLeft: "var(--wim-spacing-lg)"
  }}>
      <li>
        <RelativeTime date={minutesAgo(0.5)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(3)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 5)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 3)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 14)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 90)} {...vrtFreeze()} />
      </li>
      <li>
        <RelativeTime date={minutesAgo(60 * 24 * 730)} {...vrtFreeze()} />
      </li>
    </ul>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    date: minutesLater(60 * 2),
    ...vrtFreeze()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Numeric: always",
  args: {
    date: minutesAgo(60 * 24),
    numeric: "always",
    ...vrtFreeze()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    date: minutesAgo(3),
    format: "short",
    numeric: "always",
    ...vrtFreeze()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--wim-spacing-sm)"
  }}>
      <RelativeTime date={minutesAgo(3)} locale="en" {...vrtFreeze()} />
      <RelativeTime date={minutesAgo(3)} locale="ja" {...vrtFreeze()} />
      <RelativeTime date={minutesAgo(3)} locale="pt-BR" {...vrtFreeze()} />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Static (baseDate)",
  args: {
    date: new Date("2026-07-01T09:00:00Z"),
    baseDate: new Date("2026-07-07T09:00:00Z")
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <p style={{
    margin: 0,
    color: "var(--wim-color-text-secondary)"
  }}>
      Last updated <RelativeTime date={minutesAgo(12)} {...vrtFreeze()} />
    </p>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Units`,`FutureDate`,`NumericAlways`,`ShortFormat`,`LocaleOverride`,`StaticSnapshot`,`InSentence`]}));S();export{p as Default,h as FutureDate,b as InSentence,v as LocaleOverride,g as NumericAlways,_ as ShortFormat,y as StaticSnapshot,m as Units,x as __namedExportsOrder,f as default,S as n,a as t};