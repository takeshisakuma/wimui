"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./InlineEdit-B-QTtzDr.js";var d=n({Controlled:()=>y,Default:()=>h,Disabled:()=>_,Empty:()=>g,FullWidth:()=>v,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b;function x(){return(x=t((()=>{f=e(r(),1),a(),o(),l(),p=c(),m={title:`Components/Basic Inputs/InlineEdit`,component:u,parameters:{layout:`padded`},argTypes:{defaultValue:{control:`text`},placeholder:{control:`text`},disabled:{control:`boolean`},fullWidth:{control:`boolean`}}},h={render:e=>{let{t}=i(s);return(0,p.jsx)(u,{...e,defaultValue:t(`story.inlineedit_default_value`),placeholder:t(`story.inlineedit_placeholder_edit`)})}},g={render:e=>{let{t}=i(s);return(0,p.jsx)(u,{...e,placeholder:t(`story.inlineedit_placeholder_enter`)})}},_={render:e=>{let{t}=i(s);return(0,p.jsx)(u,{...e,defaultValue:t(`story.inlineedit_disabled_value`),disabled:!0})}},v={render:e=>{let{t}=i(s);return(0,p.jsx)(u,{...e,defaultValue:t(`story.inlineedit_fullwidth_value`),fullWidth:!0})},parameters:{layout:`padded`}},y={render:e=>{let{t}=i(s),[n,r]=(0,f.useState)(t(`story.inlineedit_controlled_value`));return(0,p.jsx)(u,{...e,value:n,onChange:r,onSave:e=>console.log(`Saved:`,e)})}},b=[`Default`,`Empty`,`Disabled`,`FullWidth`,`Controlled`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InlineEdit {...args} defaultValue={t("story.inlineedit_default_value")} placeholder={t("story.inlineedit_placeholder_edit")} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InlineEdit {...args} placeholder={t("story.inlineedit_placeholder_enter")} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InlineEdit {...args} defaultValue={t("story.inlineedit_disabled_value")} disabled />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InlineEdit {...args} defaultValue={t("story.inlineedit_fullwidth_value")} fullWidth />;
  },
  parameters: {
    layout: "padded"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState(t("story.inlineedit_controlled_value"));
    return <InlineEdit {...args} value={value} onChange={setValue} onSave={val => console.log("Saved:", val)} />;
  }
}`,...y.parameters?.docs?.source}}}})))()}export{d as n,x as r,h as t};