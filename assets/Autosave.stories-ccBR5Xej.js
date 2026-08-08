"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{n as s,t as c}from"./Autosave-BhjMVLTt.js";var l=e({Error:()=>h,ErrorCustomMessage:()=>g,Saved:()=>p,SavedWithTime:()=>m,Saving:()=>f,__namedExportsOrder:()=>_,default:()=>d}),u,d,f,p,m,h,g,_,v=t((()=>{a(),r(),s(),u=i(),d={title:`Components/Alerts & Notifications/Autosave`,component:c,parameters:{layout:`centered`},argTypes:{status:{control:`select`,options:[`idle`,`saving`,`saved`,`error`]}}},f={args:{status:`saving`}},p={args:{status:`saved`}},m={args:{status:`saved`,savedAt:new Date}},h={args:{status:`error`}},g={render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,status:`error`,errorMessage:t(`story.autosave_error_connection`)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Saving`,`Saved`,`SavedWithTime`,`Error`,`ErrorCustomMessage`]}));v();export{h as Error,g as ErrorCustomMessage,p as Saved,m as SavedWithTime,f as Saving,_ as __namedExportsOrder,d as default,v as n,l as t};