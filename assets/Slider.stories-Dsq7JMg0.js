"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{t as l}from"./src-CV0le6yM.js";import{r as u}from"./ImageCropper-CwKxK6bZ.js";var d=e({Controlled:()=>y,Default:()=>h,Disabled:()=>g,MinMax:()=>_,Step:()=>v,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b,x=t((()=>{f=n(r(),1),s(),a(),l(),p=o(),m={title:`Components/Pickers & Sliders/Slider`,component:u,argTypes:{onChange:{action:`changed`},onAfterChange:{action:`afterChanged`}}},h={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,label:t(`story.slider_default`)})},args:{defaultValue:50}},g={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,label:t(`story.slider_disabled`)})},args:{defaultValue:30,disabled:!0}},_={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,label:t(`story.slider_minmax`)})},args:{min:-50,max:50,defaultValue:0}},v={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,label:t(`story.slider_step`)})},args:{min:0,max:100,step:10,defaultValue:20}},y=()=>{let{t:e}=i(c),[t,n]=(0,f.useState)(25);return(0,p.jsx)(u,{label:`${e(`story.slider_default`)} (${e(`story.dialog_curr_state`)}: ${t})`,value:t,onChange:n})},y.__docgenInfo={description:``,methods:[],displayName:`Controlled`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Slider {...args} label={t("story.slider_default")} />;
  },
  args: {
    defaultValue: 50
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Slider {...args} label={t("story.slider_disabled")} />;
  },
  args: {
    defaultValue: 30,
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Slider {...args} label={t("story.slider_minmax")} />;
  },
  args: {
    min: -50,
    max: 50,
    defaultValue: 0
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Slider {...args} label={t("story.slider_step")} />;
  },
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 20
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [val, setVal] = useState(25);
  return <Slider label={\`\${t("story.slider_default")} (\${t("story.dialog_curr_state")}: \${val})\`} value={val} onChange={setVal} />;
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Disabled`,`MinMax`,`Step`,`Controlled`]}));x();export{y as Controlled,h as Default,g as Disabled,_ as MinMax,v as Step,b as __namedExportsOrder,m as default,x as n,d as t};