"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Label-CaPgujqk.js";import{n as u,t as d}from"./CounterTextarea-DAxJg3uL.js";var f=t({Default:()=>h,Variants:()=>g,__namedExportsOrder:()=>_,default:()=>m}),p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),a(),u(),c(),p=s(),m={title:`Components/Basic Inputs/CounterTextarea`,component:d,parameters:{layout:`padded`}},h={render:function(e){let{t}=r(o);return(0,p.jsx)(`div`,{style:{width:`100%`,maxWidth:800,margin:`0 auto`},children:(0,p.jsx)(l,{label:t(`story.counter_textarea_label`),children:(0,p.jsx)(d,{...e,placeholder:t(`story.counter_textarea_placeholder`),maxLength:100})})})}},g={render:function(e){let{t}=r(o);return(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-lg)`,width:`100%`,maxWidth:800,margin:`0 auto`},children:[`outline`,`ghost`].map(n=>(0,p.jsx)(l,{label:t(`story.counter_textarea_label`),children:(0,p.jsx)(d,{...e,variant:n,placeholder:t(`story.counter_textarea_placeholder`),maxLength:100})},n))})}},_=[`Default`,`Variants`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      width: "100%",
      maxWidth: 800,
      margin: "0 auto"
    }}>
        <Label label={t("story.counter_textarea_label")}>
          <CounterTextarea {...args} placeholder={t("story.counter_textarea_placeholder")} maxLength={100} />
        </Label>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-lg)",
      width: "100%",
      maxWidth: 800,
      margin: "0 auto"
    }}>
        {(["outline", "ghost"] as const).map(variant => <Label key={variant} label={t("story.counter_textarea_label")}>
            <CounterTextarea {...args} variant={variant} placeholder={t("story.counter_textarea_placeholder")} maxLength={100} />
          </Label>)}
      </div>;
  }
}`,...g.parameters?.docs?.source}}}})))()}export{g as n,v as r,f as t};