"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,Sr as a,Tr as o,ur as s,xr as c}from"./iframe-wf1-Tomv.js";import{Ar as l,t as u}from"./src--JUR9phw.js";var d=e({Default:()=>h,Disabled:()=>_,WithError:()=>g,__namedExportsOrder:()=>v,default:()=>m}),f,p,m,h,g,_,v,y=t((()=>{f=n(r(),1),i(),a(),u(),p=s(),m={title:`Components/Basic Inputs/PhoneInput`,component:l,args:{disabled:!1},argTypes:{disabled:{control:`boolean`}},tags:[]},h={render:function(e){let{t}=o(c),[n,r]=(0,f.useState)(``),[i,a]=(0,f.useState)(`US`);return(0,p.jsx)(l,{...e,label:t(`story.phoneinput_label`),placeholder:t(`story.phoneinput_placeholder`),value:n,onChange:r,countryCode:i,onCountryChange:a})}},g={render:function(e){let{t}=o(c),[n,r]=(0,f.useState)(`abc`),[i,a]=(0,f.useState)(`US`);return(0,p.jsx)(l,{...e,label:t(`story.phoneinput_label`),placeholder:t(`story.phoneinput_placeholder`),value:n,onChange:r,countryCode:i,onCountryChange:a,error:t(`story.phoneinput_error`)})}},_={render:function(e){let{t}=o(c);return(0,p.jsx)(l,{...e,label:t(`story.phoneinput_label`),placeholder:t(`story.phoneinput_placeholder`),value:`090-1234-5678`,countryCode:`JP`,disabled:!0})}},v=[`Default`,`WithError`,`Disabled`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}}));y();export{h as Default,_ as Disabled,g as WithError,v as __namedExportsOrder,m as default,y as n,d as t};