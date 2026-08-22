"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{n as c,t as l}from"./UsageMeter-CA4H-bVr.js";var u=e({CounterOnly:()=>_,Default:()=>m,Percentage:()=>g,Sizes:()=>v,Thresholds:()=>h,__namedExportsOrder:()=>y,default:()=>f}),d,f,p,m,h,g,_,v,y,b=t((()=>{n(),c(),o(),i(),d=a(),f={title:`Components/AI/UsageMeter`,component:l,parameters:{layout:`padded`},args:{used:3200,max:8e3,size:`md`}},p=()=>{let{t:e}=r(s);return typeof window<`u`&&window.__VRT__?{label:`Tokens`,unit:`tokens`}:{label:e(`story.usagemeter_label`),unit:e(`story.usagemeter_unit`)}},m={render:e=>(0,d.jsx)(l,{...e,labels:p()})},h={render:e=>{let t=p();return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`,width:`320px`},children:[(0,d.jsx)(l,{...e,used:2e3,labels:t}),(0,d.jsx)(l,{...e,used:6400,labels:t}),(0,d.jsx)(l,{...e,used:7600,labels:t})]})}},g={render:e=>(0,d.jsx)(l,{...e,showPercentage:!0,labels:p()})},_={render:()=>(0,d.jsx)(l,{used:4200,labels:p()})},v={render:e=>{let t=p();return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`,width:`320px`},children:[(0,d.jsx)(l,{...e,size:`sm`,labels:t}),(0,d.jsx)(l,{...e,size:`md`,labels:t}),(0,d.jsx)(l,{...e,size:`lg`,labels:t})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <UsageMeter {...args} labels={useLabels()} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const labels = useLabels();
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "320px"
    }}>
        <UsageMeter {...args} used={2000} labels={labels} />
        <UsageMeter {...args} used={6400} labels={labels} />
        <UsageMeter {...args} used={7600} labels={labels} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <UsageMeter {...args} showPercentage labels={useLabels()} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <UsageMeter used={4200} labels={useLabels()} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const labels = useLabels();
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "320px"
    }}>
        <UsageMeter {...args} size="sm" labels={labels} />
        <UsageMeter {...args} size="md" labels={labels} />
        <UsageMeter {...args} size="lg" labels={labels} />
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Thresholds`,`Percentage`,`CounterOnly`,`Sizes`]}));b();export{_ as CounterOnly,m as Default,g as Percentage,v as Sizes,h as Thresholds,y as __namedExportsOrder,f as default,b as n,u as t};