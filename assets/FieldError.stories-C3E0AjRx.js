"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./FieldError-C91ndX2s.js";var u=t({Default:()=>p,ShortMessage:()=>m,__namedExportsOrder:()=>h,default:()=>f}),d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Form Layout/FieldError`,component:l,argTypes:{content:{control:`text`}}},p={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,content:t(`story.fielderror_error`)})}},m={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,content:t(`story.fielderror_required`)})}},h=[`Default`,`ShortMessage`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldError {...args} content={t("story.fielderror_error")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldError {...args} content={t("story.fielderror_required")} />;
  }
}`,...m.parameters?.docs?.source}}}})))()}export{g as i,u as n,m as r,p as t};