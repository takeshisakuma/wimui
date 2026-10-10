"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./PhoneInput-C_4-6-5K.js";import{n as d,t as f}from"./playOpen-BfHmRBb6.js";var p=n({Default:()=>_,Disabled:()=>y,Open:()=>b,WithError:()=>v,__namedExportsOrder:()=>x,default:()=>g}),m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{m=e(r(),1),a(),o(),l(),f(),h=c(),g={title:`Components/Basic Inputs/PhoneInput`,component:u,args:{disabled:!1},argTypes:{disabled:{control:`boolean`}},tags:[]},_={render:function(e){let{t}=i(s),[n,r]=(0,m.useState)(``),[a,o]=(0,m.useState)(`US`);return(0,h.jsx)(u,{...e,label:t(`story.phoneinput_label`),placeholder:t(`story.phoneinput_placeholder`),value:n,onChange:r,countryCode:a,onCountryChange:o})}},v={render:function(e){let{t}=i(s),[n,r]=(0,m.useState)(`abc`),[a,o]=(0,m.useState)(`US`);return(0,h.jsx)(u,{...e,label:t(`story.phoneinput_label`),placeholder:t(`story.phoneinput_placeholder`),value:n,onChange:r,countryCode:a,onCountryChange:o,error:t(`story.phoneinput_error`)})}},y={render:function(e){let{t}=i(s);return(0,h.jsx)(u,{...e,label:t(`story.phoneinput_label`),placeholder:t(`story.phoneinput_placeholder`),value:`090-1234-5678`,countryCode:`JP`,disabled:!0})}},b={..._,play:d},x=[`Default`,`WithError`,`Disabled`,`Open`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("");
    const [countryCode, setCountryCode] = useState("US");
    return <PhoneInput {...args} label={t("story.phoneinput_label")} placeholder={t("story.phoneinput_placeholder")} value={value} onChange={setValue} countryCode={countryCode} onCountryChange={setCountryCode} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("abc");
    const [countryCode, setCountryCode] = useState("US");
    return <PhoneInput {...args} label={t("story.phoneinput_label")} placeholder={t("story.phoneinput_placeholder")} value={value} onChange={setValue} countryCode={countryCode} onCountryChange={setCountryCode} error={t("story.phoneinput_error")} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <PhoneInput {...args} label={t("story.phoneinput_label")} placeholder={t("story.phoneinput_placeholder")} value="090-1234-5678" countryCode="JP" disabled />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: openFirstPopup
}`,...b.parameters?.docs?.source}}}})))()}export{S as n,p as t};