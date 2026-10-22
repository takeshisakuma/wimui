"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./useTranslation-MNZnjzfn.js";import{n as i,t as a}from"./i18nConstants-Dz9WmqoW.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./CopyButton-BSSyGEwr.js";var l=t({Default:()=>f,Large:()=>m,Small:()=>p,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Buttons/CopyButton`,component:c,tags:[],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},f={render:e=>{let{t}=n(a);return(0,u.jsx)(c,{...e,value:t(`story.copybutton_value`)})}},p={args:{value:`Small CopyButton`,size:`sm`}},m={args:{value:`Large CopyButton`,size:`lg`}},h=[`Default`,`Small`,`Large`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <CopyButton {...args} value={t("story.copybutton_value")} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    // Copyable value naming the variant, kept verbatim. i18n-ignore-next-line
    value: "Small CopyButton",
    size: "sm"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    // Copyable value naming the variant, kept verbatim. i18n-ignore-next-line
    value: "Large CopyButton",
    size: "lg"
  }
}`,...m.parameters?.docs?.source}}}})))()}export{g as a,p as i,f as n,m as r,l as t};