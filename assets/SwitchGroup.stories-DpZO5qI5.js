"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,Sr as i,Tr as a,ur as o,xr as s}from"./iframe-wf1-Tomv.js";import{fr as c,t as l}from"./src--JUR9phw.js";var u=e({Default:()=>m,Horizontal:()=>h,WithDisabledOption:()=>g,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_,v=t((()=>{n(),r(),i(),l(),d=o(),f={title:`Components/Selection Controls/SwitchGroup`,component:c,parameters:{layout:`centered`},argTypes:{disabled:{control:`boolean`},direction:{control:`radio`,options:[`vertical`,`horizontal`]}}},p=()=>{let{t:e}=a(s);return[{label:e(`story.switch_wifi`),value:`wifi`},{label:e(`story.switch_bluetooth`),value:`bluetooth`},{label:e(`story.switch_airplane`),value:`airplane`}]},m={render:function(e){let t=p();return(0,d.jsx)(c,{...e,options:t,defaultValue:[`wifi`]})}},h={render:function(e){let t=p();return(0,d.jsx)(c,{...e,options:t,direction:`horizontal`,defaultValue:[`wifi`]})}},g={render:function(e){let{t}=a(s),n=p();return(0,d.jsx)(c,{...e,options:[...n,{label:`${t(`story.mobile_data`)} ${t(`story.option_disabled`)}`,value:`mobile_data`,disabled:!0}],defaultValue:[`wifi`]})}},_=[`Default`,`Horizontal`,`WithDisabledOption`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}}));v();export{m as Default,h as Horizontal,g as WithDisabledOption,_ as __namedExportsOrder,f as default,v as n,u as t};