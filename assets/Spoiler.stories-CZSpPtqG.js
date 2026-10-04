"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Spoiler-BNLWjo1V.js";var u=t({CustomLabels:()=>_,CustomLines:()=>h,Default:()=>m,DefaultExpanded:()=>g,RichContent:()=>y,ShortContent:()=>v,__namedExportsOrder:()=>b,default:()=>f}),d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Typography & Icons/Spoiler`,component:l,parameters:{layout:`centered`},argTypes:{lines:{control:{type:`number`,min:1}},expanded:{control:`boolean`},defaultExpanded:{control:`boolean`},showLabel:{control:`text`},hideLabel:{control:`text`}},decorators:[e=>(0,d.jsx)(`div`,{style:{maxWidth:`480px`},children:(0,d.jsx)(e,{})})]},p=()=>{let{t:e}=r(o);return typeof window<`u`&&window.__VRT__?{review:`The build quality feels premium and the battery lasts through a full workday. Setup was painless, and the keyboard is comfortable for long writing sessions. A few software quirks remain, but nothing that blocks daily use.`,short:`Short enough to stay fully visible.`,showLabel:`Show more`,hideLabel:`Show less`,prosLabel:`Pros`,pros:`Solid materials, long battery, quiet keyboard.`,consLabel:`Cons`,cons:`Occasional software quirks; trackpad could be larger.`}:{review:e(`story.spoiler_review`),short:e(`story.spoiler_short`),showLabel:e(`story.spoiler_show_label`),hideLabel:e(`story.spoiler_hide_label`),prosLabel:e(`story.spoiler_rich_pros_label`),pros:e(`story.spoiler_rich_pros`),consLabel:e(`story.spoiler_rich_cons_label`),cons:e(`story.spoiler_rich_cons`)}},m={render:e=>{let t=p();return(0,d.jsx)(l,{...e,children:t.review})}},h={render:e=>{let t=p();return(0,d.jsx)(l,{...e,children:t.review})},args:{lines:5}},g={render:e=>{let t=p();return(0,d.jsx)(l,{...e,children:t.review})},args:{defaultExpanded:!0}},_={render:e=>{let t=p();return(0,d.jsx)(l,{...e,showLabel:t.showLabel,hideLabel:t.hideLabel,children:t.review})}},v={render:e=>{let t=p();return(0,d.jsx)(l,{...e,children:t.short})}},y={render:()=>{let e=p();return(0,d.jsxs)(l,{lines:4,children:[(0,d.jsxs)(`p`,{style:{margin:`0 0 0.5em`},children:[(0,d.jsx)(`strong`,{children:e.prosLabel}),` `,e.pros]}),(0,d.jsxs)(`p`,{style:{margin:0},children:[(0,d.jsx)(`strong`,{children:e.consLabel}),` `,e.cons]})]})}},b=[`Default`,`CustomLines`,`DefaultExpanded`,`CustomLabels`,`ShortContent`,`RichContent`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const copy = useSpoilerCopy();
    return <Spoiler {...args}>{copy.review}</Spoiler>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const copy = useSpoilerCopy();
    return <Spoiler {...args}>{copy.review}</Spoiler>;
  },
  args: {
    lines: 5
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const copy = useSpoilerCopy();
    return <Spoiler {...args}>{copy.review}</Spoiler>;
  },
  args: {
    defaultExpanded: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const copy = useSpoilerCopy();
    return <Spoiler {...args} showLabel={copy.showLabel} hideLabel={copy.hideLabel}>
        {copy.review}
      </Spoiler>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const copy = useSpoilerCopy();
    return <Spoiler {...args}>{copy.short}</Spoiler>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const copy = useSpoilerCopy();
    return <Spoiler lines={4}>
        <p style={{
        margin: "0 0 0.5em"
      }}>
          <strong>{copy.prosLabel}</strong> {copy.pros}
        </p>
        <p style={{
        margin: 0
      }}>
          <strong>{copy.consLabel}</strong> {copy.cons}
        </p>
      </Spoiler>;
  }
}`,...y.parameters?.docs?.source}}}})))()}export{y as a,x as c,g as i,h as n,v as o,m as r,u as s,_ as t};