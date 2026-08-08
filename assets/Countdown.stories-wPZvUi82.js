"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{cr as n}from"./iframe-DiXuc7DI.js";import{n as r,t as i}from"./Countdown-BicA-kIr.js";var a=e({Completed:()=>_,Default:()=>p,LocaleOverride:()=>v,OtpResend:()=>g,Paused:()=>b,Sizes:()=>h,StaticSnapshot:()=>y,UnitsVariant:()=>m,__namedExportsOrder:()=>x,default:()=>f}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{r(),o=n(),s=new Date(`2024-01-01T00:00:00Z`),c=()=>typeof window<`u`&&!!window.__VRT__,l=e=>{let t=c()?s.getTime():Date.now();return new Date(t+e*1e3)},u=()=>c()?{baseDate:s,paused:!0}:{},d=3600,f={title:`Components/Data Indicators/Countdown`,component:i,parameters:{layout:`centered`},argTypes:{target:{control:`date`},baseDate:{control:`date`},variant:{control:`radio`,options:[`digital`,`units`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]},locale:{control:`select`,options:[void 0,`en`,`ja`,`pt-BR`]},unitDisplay:{control:`radio`,options:[`long`,`short`,`narrow`]},paused:{control:`boolean`},asChild:{control:`boolean`}}},p={args:{target:l(15153),...u()}},m={name:`Units variant`,args:{target:l(187953),variant:`units`,...u()}},h={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-md)`,alignItems:`flex-start`},children:[(0,o.jsx)(i,{target:l(4*d),size:`sm`,...u()}),(0,o.jsx)(i,{target:l(4*d),size:`md`,...u()}),(0,o.jsx)(i,{target:l(4*d),size:`lg`,...u()})]})},g={name:`OTP resend wait`,render:()=>(0,o.jsxs)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`},children:[`Resend code in `,(0,o.jsx)(i,{target:l(45),size:`sm`,...u()})]})},_={args:{target:new Date(`2026-01-01T00:00:00Z`),baseDate:new Date(`2026-01-01T00:00:10Z`),completedContent:`Sale ended`,variant:`units`}},v={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-md)`},children:[(0,o.jsx)(i,{target:l(187200),variant:`units`,locale:`en`,...u()}),(0,o.jsx)(i,{target:l(187200),variant:`units`,locale:`ja`,...u()}),(0,o.jsx)(i,{target:l(187200),variant:`units`,locale:`pt-BR`,...u()})]})},y={name:`Static (baseDate)`,args:{target:new Date(`2026-07-14T09:00:00Z`),baseDate:new Date(`2026-07-12T04:47:27Z`),variant:`units`}},b={args:{target:l(900),paused:!0,...c()?{baseDate:s}:{}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    target: secondsLater(4 * HOUR + 12 * 60 + 33),
    ...vrtBase()
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Units variant",
  args: {
    target: secondsLater(2 * DAY + 4 * HOUR + 12 * 60 + 33),
    variant: "units",
    ...vrtBase()
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--wim-spacing-md)",
    alignItems: "flex-start"
  }}>
      <Countdown target={secondsLater(4 * HOUR)} size="sm" {...vrtBase()} />
      <Countdown target={secondsLater(4 * HOUR)} size="md" {...vrtBase()} />
      <Countdown target={secondsLater(4 * HOUR)} size="lg" {...vrtBase()} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "OTP resend wait",
  render: () => <p style={{
    margin: 0,
    color: "var(--wim-color-text-secondary)"
  }}>
      Resend code in <Countdown target={secondsLater(45)} size="sm" {...vrtBase()} />
    </p>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    target: new Date("2026-01-01T00:00:00Z"),
    baseDate: new Date("2026-01-01T00:00:10Z"),
    completedContent: "Sale ended",
    variant: "units"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--wim-spacing-md)"
  }}>
      <Countdown target={secondsLater(2 * DAY + 4 * HOUR)} variant="units" locale="en" {...vrtBase()} />
      <Countdown target={secondsLater(2 * DAY + 4 * HOUR)} variant="units" locale="ja" {...vrtBase()} />
      <Countdown target={secondsLater(2 * DAY + 4 * HOUR)} variant="units" locale="pt-BR" {...vrtBase()} />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Static (baseDate)",
  args: {
    target: new Date("2026-07-14T09:00:00Z"),
    baseDate: new Date("2026-07-12T04:47:27Z"),
    variant: "units"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    target: secondsLater(15 * 60),
    paused: true,
    ...(isVrt() ? {
      baseDate: VRT_NOW
    } : {})
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`UnitsVariant`,`Sizes`,`OtpResend`,`Completed`,`LocaleOverride`,`StaticSnapshot`,`Paused`]}));S();export{_ as Completed,p as Default,v as LocaleOverride,g as OtpResend,b as Paused,h as Sizes,y as StaticSnapshot,m as UnitsVariant,x as __namedExportsOrder,f as default,S as n,a as t};