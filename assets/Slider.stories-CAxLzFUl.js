"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Slider-BkWk7HqR.js";var u=t({Controlled:()=>v,Default:()=>m,Disabled:()=>h,MinMax:()=>g,Step:()=>_,__namedExportsOrder:()=>y,default:()=>p}),d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{d=n(),i(),a(),c(),f=s(),p={title:`Components/Pickers & Sliders/Slider`,component:l,argTypes:{onChange:{action:`changed`},onAfterChange:{action:`afterChanged`}}},m={render:function(e){let{t}=r(o);return(0,f.jsx)(l,{...e,label:t(`story.slider_default`)})},args:{defaultValue:50}},h={render:function(e){let{t}=r(o);return(0,f.jsx)(l,{...e,label:t(`story.slider_disabled`)})},args:{defaultValue:30,disabled:!0}},g={render:function(e){let{t}=r(o);return(0,f.jsx)(l,{...e,label:t(`story.slider_minmax`)})},args:{min:-50,max:50,defaultValue:0}},_={render:function(e){let{t}=r(o);return(0,f.jsx)(l,{...e,label:t(`story.slider_step`)})},args:{min:0,max:100,step:10,defaultValue:20}},v=()=>{let{t:e}=r(o),[t,n]=(0,d.useState)(25);return(0,f.jsx)(l,{label:`${e(`story.slider_default`)} (${e(`story.dialog_curr_state`)}: ${t})`,value:t,onChange:n})},v.__docgenInfo={description:``,methods:[],displayName:`Controlled`},y=[`Default`,`Disabled`,`MinMax`,`Step`,`Controlled`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Slider {...args} label={t("story.slider_default")} />;
  },
  args: {
    defaultValue: 50
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [val, setVal] = useState(25);
  return <Slider label={\`\${t("story.slider_default")} (\${t("story.dialog_curr_state")}: \${val})\`} value={val} onChange={setVal} />;
}`,...v.parameters?.docs?.source}}}})))()}export{u as a,g as i,m as n,_ as o,h as r,b as s,v as t};