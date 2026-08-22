"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{n as l,t as u}from"./InlineEdit-GPyNVHjF.js";var d=e({Controlled:()=>y,Default:()=>h,Disabled:()=>_,Empty:()=>g,FullWidth:()=>v,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b,x=t((()=>{f=n(r(),1),s(),a(),l(),p=o(),m={title:`Components/Basic Inputs/InlineEdit`,component:u,parameters:{layout:`padded`},argTypes:{defaultValue:{control:`text`},placeholder:{control:`text`},disabled:{control:`boolean`},fullWidth:{control:`boolean`}}},h={render:e=>{let{t}=i(c);return(0,p.jsx)(u,{...e,defaultValue:t(`story.inlineedit_default_value`),placeholder:t(`story.inlineedit_placeholder_edit`)})}},g={render:e=>{let{t}=i(c);return(0,p.jsx)(u,{...e,placeholder:t(`story.inlineedit_placeholder_enter`)})}},_={render:e=>{let{t}=i(c);return(0,p.jsx)(u,{...e,defaultValue:t(`story.inlineedit_disabled_value`),disabled:!0})}},v={render:e=>{let{t}=i(c);return(0,p.jsx)(u,{...e,defaultValue:t(`story.inlineedit_fullwidth_value`),fullWidth:!0})},parameters:{layout:`padded`}},y={render:e=>{let{t}=i(c),[n,r]=(0,f.useState)(t(`story.inlineedit_controlled_value`));return(0,p.jsx)(u,{...e,value:n,onChange:r,onSave:e=>console.log(`Saved:`,e)})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Empty`,`Disabled`,`FullWidth`,`Controlled`]}));x();export{y as Controlled,h as Default,_ as Disabled,g as Empty,v as FullWidth,b as __namedExportsOrder,m as default,x as n,d as t};