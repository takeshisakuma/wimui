"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./SwitchGroup-BgPngDb-.js";var u=t({Default:()=>m,Horizontal:()=>h,WithDisabledOption:()=>g,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Selection Controls/SwitchGroup`,component:l,parameters:{layout:`centered`},argTypes:{disabled:{control:`boolean`},direction:{control:`radio`,options:[`vertical`,`horizontal`]}}},p=()=>{let{t:e}=r(o);return[{label:e(`story.switch_wifi`),value:`wifi`},{label:e(`story.switch_bluetooth`),value:`bluetooth`},{label:e(`story.switch_airplane`),value:`airplane`}]},m={render:function(e){let t=p();return(0,d.jsx)(l,{...e,options:t,defaultValue:[`wifi`]})}},h={render:function(e){let t=p();return(0,d.jsx)(l,{...e,options:t,direction:`horizontal`,defaultValue:[`wifi`]})}},g={render:function(e){let{t}=r(o),n=p();return(0,d.jsx)(l,{...e,options:[...n,{label:`${t(`story.mobile_data`)} ${t(`story.option_disabled`)}`,value:`mobile_data`,disabled:!0}],defaultValue:[`wifi`]})}},_=[`Default`,`Horizontal`,`WithDisabledOption`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <SwitchGroup {...args} options={options} defaultValue={["wifi"]} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <SwitchGroup {...args} options={options} direction="horizontal" defaultValue={["wifi"]} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = useOptions();
    return <SwitchGroup {...args} options={[...options, {
      label: \`\${t("story.mobile_data")} \${t("story.option_disabled")}\`,
      value: "mobile_data",
      disabled: true
    }]} defaultValue={["wifi"]} />;
  }
}`,...g.parameters?.docs?.source}}}})))()}export{v as a,g as i,h as n,u as r,m as t};