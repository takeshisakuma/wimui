"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Autosave-CLL7ZRXu.js";var l=t({Error:()=>h,ErrorCustomMessage:()=>g,Saved:()=>p,SavedWithTime:()=>m,Saving:()=>f,__namedExportsOrder:()=>_,default:()=>d}),u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Alerts & Notifications/Autosave`,component:c,parameters:{layout:`centered`},argTypes:{status:{control:`select`,options:[`idle`,`saving`,`saved`,`error`]}}},f={args:{status:`saving`}},p={args:{status:`saved`}},m={args:{status:`saved`,savedAt:new Date}},h={args:{status:`error`}},g={render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,status:`error`,errorMessage:t(`story.autosave_error_connection`)})}},_=[`Saving`,`Saved`,`SavedWithTime`,`Error`,`ErrorCustomMessage`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    status: "saving"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: "saved"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: "saved",
    savedAt: new Date()
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Autosave {...args} status="error" errorMessage={t("story.autosave_error_connection")} />;
  }
}`,...g.parameters?.docs?.source}}}})))()}export{m as a,p as i,h as n,f as o,g as r,v as s,l as t};