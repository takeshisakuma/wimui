"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{cr as r}from"./iframe-splidnB2.js";import{n as i,t as a}from"./Sparkline-ODcYwvDv.js";var o=e({Default:()=>f,Inline:()=>g,Trends:()=>h,Types:()=>p,WithLastDot:()=>m,__namedExportsOrder:()=>_,default:()=>d}),s,c,l,u,d,f,p,m,h,g,_,v=t((()=>{n(),i(),s=r(),c=[4,6,5,8,7,10,9,12,11,14],l=[8,3,9,2,7,4,10,5,8,6],u=[14,13,15,11,12,9,10,7,8,5],d={title:`Components/Visualization/Sparkline`,component:a,parameters:{layout:`centered`},args:{data:c,type:`line`,width:120,height:32}},f={},p={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,s.jsx)(a,{...e,type:`line`}),(0,s.jsx)(a,{...e,type:`area`}),(0,s.jsx)(a,{...e,type:`bar`})]})},m={args:{type:`area`,showLastDot:!0,width:160,height:40}},h={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,s.jsx)(a,{...e,data:c,color:`var(--wim-color-success)`,showLastDot:!0}),(0,s.jsx)(a,{...e,data:u,color:`var(--wim-color-danger)`,showLastDot:!0}),(0,s.jsx)(a,{...e,data:l,color:`var(--wim-color-info)`})]})},g={render:e=>(0,s.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,fontSize:`14px`},children:[`1,248`,(0,s.jsx)(a,{...e,data:c,width:80,height:20,color:`var(--wim-color-success)`}),`+12%`]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Sparkline {...args} type="line" />
      <Sparkline {...args} type="area" />
      <Sparkline {...args} type="bar" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: "area",
    showLastDot: true,
    width: 160,
    height: 40
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Sparkline {...args} data={TREND} color="var(--wim-color-success)" showLastDot />
      <Sparkline {...args} data={DECLINE} color="var(--wim-color-danger)" showLastDot />
      <Sparkline {...args} data={VOLATILE} color="var(--wim-color-info)" />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <span style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px"
  }}>
      1,248
      <Sparkline {...args} data={TREND} width={80} height={20} color="var(--wim-color-success)" />
      +12%
    </span>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Types`,`WithLastDot`,`Trends`,`Inline`]}));v();export{f as Default,g as Inline,h as Trends,p as Types,m as WithLastDot,_ as __namedExportsOrder,d as default,v as n,o as t};