"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{Ar as l,t as u}from"./src-CV0le6yM.js";var d=e({Default:()=>h,Disabled:()=>_,WithError:()=>g,__namedExportsOrder:()=>v,default:()=>m}),f,p,m,h,g,_,v,y=t((()=>{f=n(r(),1),s(),a(),u(),p=o(),m={title:`Components/Basic Inputs/PhoneInput`,component:l,args:{disabled:!1},argTypes:{disabled:{control:`boolean`}},tags:[]},h={render:function(e){let{t}=i(c),[n,r]=(0,f.useState)(``),[a,o]=(0,f.useState)(`US`);return(0,p.jsx)(l,{...e,label:t(`story.phoneinput_label`),placeholder:t(`story.phoneinput_placeholder`),value:n,onChange:r,countryCode:a,onCountryChange:o})}},g={render:function(e){let{t}=i(c),[n,r]=(0,f.useState)(`abc`),[a,o]=(0,f.useState)(`US`);return(0,p.jsx)(l,{...e,label:t(`story.phoneinput_label`),placeholder:t(`story.phoneinput_placeholder`),value:n,onChange:r,countryCode:a,onCountryChange:o,error:t(`story.phoneinput_error`)})}},_={render:function(e){let{t}=i(c);return(0,p.jsx)(l,{...e,label:t(`story.phoneinput_label`),placeholder:t(`story.phoneinput_placeholder`),value:`090-1234-5678`,countryCode:`JP`,disabled:!0})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("");
    const [countryCode, setCountryCode] = useState("US");
    return <PhoneInput {...args} label={t("story.phoneinput_label")} placeholder={t("story.phoneinput_placeholder")} value={value} onChange={setValue} countryCode={countryCode} onCountryChange={setCountryCode} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("abc");
    const [countryCode, setCountryCode] = useState("US");
    return <PhoneInput {...args} label={t("story.phoneinput_label")} placeholder={t("story.phoneinput_placeholder")} value={value} onChange={setValue} countryCode={countryCode} onCountryChange={setCountryCode} error={t("story.phoneinput_error")} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <PhoneInput {...args} label={t("story.phoneinput_label")} placeholder={t("story.phoneinput_placeholder")} value="090-1234-5678" countryCode="JP" disabled />;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithError`,`Disabled`]}));y();export{h as Default,_ as Disabled,g as WithError,v as __namedExportsOrder,m as default,y as n,d as t};