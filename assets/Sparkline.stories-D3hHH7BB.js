"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Sparkline-BpjEPWI1.js";var o=t({Default:()=>f,FillContainer:()=>_,Inline:()=>g,Trends:()=>h,Types:()=>p,WithLastDot:()=>m,__namedExportsOrder:()=>v,default:()=>d}),s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),s=r(),c=[4,6,5,8,7,10,9,12,11,14],l=[8,3,9,2,7,4,10,5,8,6],u=[14,13,15,11,12,9,10,7,8,5],d={title:`Components/Visualization/Sparkline`,component:a,parameters:{layout:`centered`},args:{data:c,type:`line`,width:120,height:32}},f={},p={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,s.jsx)(a,{...e,type:`line`}),(0,s.jsx)(a,{...e,type:`area`}),(0,s.jsx)(a,{...e,type:`bar`})]})},m={args:{type:`area`,showLastDot:!0,width:160,height:40}},h={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,s.jsx)(a,{...e,data:c,color:`var(--wim-color-success)`,showLastDot:!0}),(0,s.jsx)(a,{...e,data:u,color:`var(--wim-color-danger)`,showLastDot:!0}),(0,s.jsx)(a,{...e,data:l,color:`var(--wim-color-info)`})]})},g={render:e=>(0,s.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,fontSize:`14px`},children:[`1,248`,(0,s.jsx)(a,{...e,data:c,width:80,height:20,color:`var(--wim-color-success)`}),`+12%`]})},_={args:{width:void 0},parameters:{layout:`padded`},render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-2xl)`},children:[(0,s.jsx)(`div`,{style:{width:`20rem`,padding:`var(--wim-spacing-md)`,border:`var(--wim-border-width-thin) solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`},children:(0,s.jsx)(a,{...e,data:c,type:`area`,color:`var(--wim-color-success)`,showLastDot:!0})}),(0,s.jsx)(a,{...e,data:l,type:`line`})]})},v=[`Default`,`Types`,`WithLastDot`,`Trends`,`Inline`,`FillContainer`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    width: undefined
  },
  parameters: {
    layout: "padded"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--wim-spacing-2xl)"
  }}>
      <div style={{
      width: "20rem",
      padding: "var(--wim-spacing-md)",
      border: "var(--wim-border-width-thin) solid var(--wim-color-border)",
      borderRadius: "var(--wim-radius-md)"
    }}>
        <Sparkline {...args} data={TREND} type="area" color="var(--wim-color-success)" showLastDot />
      </div>
      <Sparkline {...args} data={VOLATILE} type="line" />
    </div>
}`,..._.parameters?.docs?.source},description:{story:'既定の幅（T287）。`width` を渡さないと `width="100%"` になり、`ResponsiveContainer` が置き場の幅を測って合わせる\n（数値を渡したときとは別の経路）。この経路はほかのストーリーに写っていなかった ── 以前は撮影のときだけ 100px に\n固定されて実物と食い違っていたことがあり、壊れても赤が出ない形だった。幅の決まった置き場 2 つに置いて、潰れず\n置き場いっぱいに描かれることを絵で見せる。',..._.parameters?.docs?.description}}}})))()}export{y as n,o as t};