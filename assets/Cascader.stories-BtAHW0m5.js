"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Cascader-BTMoJlPq.js";import{n as l,t as u}from"./playOpen-BfHmRBb6.js";var d=t({CustomSeparator:()=>v,Default:()=>m,Disabled:()=>_,HoverExpand:()=>g,Open:()=>y,WithLabel:()=>h,__namedExportsOrder:()=>b,default:()=>p}),f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),s(),i(),u(),f=o(),p={title:`Components/Advanced Inputs/Cascader`,component:c,parameters:{layout:`centered`},argTypes:{disabled:{control:`boolean`}}},m={render:e=>{let{t}=n(a),r=[{label:t(`story.cascader_tokyo`),value:`tokyo`,children:[{label:t(`story.cascader_shibuya`),value:`shibuya`,children:[{label:t(`story.cascader_dogenzaka`),value:`dogenzaka`}]}]},{label:t(`story.cascader_osaka`),value:`osaka`,children:[{label:t(`story.cascader_osaka_city`),value:`osaka_city`,children:[{label:t(`story.cascader_umeda`),value:`umeda`}]}]}];return(0,f.jsx)(c,{...e,options:r,placeholder:t(`story.cascader_placeholder`),"aria-label":t(`story.cascader_placeholder`)})}},h={render:e=>{let{t}=n(a),r=[{label:t(`story.cascader_tokyo`),value:`tokyo`,children:[{label:t(`story.cascader_shibuya`),value:`shibuya`,children:[{label:t(`story.cascader_dogenzaka`),value:`dogenzaka`}]}]},{label:t(`story.cascader_osaka`),value:`osaka`,children:[{label:t(`story.cascader_osaka_city`),value:`osaka_city`,children:[{label:t(`story.cascader_umeda`),value:`umeda`}]}]}];return(0,f.jsx)(c,{...e,options:r,label:t(`story.cascader_placeholder`),placeholder:t(`story.cascader_placeholder`)})}},g={render:e=>{let{t}=n(a),r=[{label:t(`story.cascader_tokyo`),value:`tokyo`,children:[{label:t(`story.cascader_shibuya`),value:`shibuya`,children:[{label:t(`story.cascader_dogenzaka`),value:`dogenzaka`}]}]}];return(0,f.jsx)(c,{...e,options:r,expandTrigger:`hover`,placeholder:t(`story.cascader_placeholder`),"aria-label":t(`story.cascader_placeholder`)})}},_={render:e=>{let{t}=n(a),r=[{label:t(`story.cascader_tokyo`),value:`tokyo`,children:[{label:t(`story.cascader_shibuya`),value:`shibuya`,children:[{label:t(`story.cascader_dogenzaka`),value:`dogenzaka`}]}]}];return(0,f.jsx)(c,{...e,options:r,disabled:!0,defaultValue:[`tokyo`,`shibuya`],placeholder:t(`story.cascader_placeholder`),"aria-label":t(`story.cascader_placeholder`)})}},v={render:e=>{let{t}=n(a),r=[{label:t(`story.cascader_tokyo`),value:`tokyo`,children:[{label:t(`story.cascader_shibuya`),value:`shibuya`,children:[{label:t(`story.cascader_dogenzaka`),value:`dogenzaka`}]}]}];return(0,f.jsx)(c,{...e,options:r,separator:` > `,defaultValue:[`tokyo`,`shibuya`,`dogenzaka`],"aria-label":t(`story.cascader_location`)})}},y={...m,play:l},b=[`Default`,`WithLabel`,`HoverExpand`,`Disabled`,`CustomSeparator`,`Open`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story.cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story.cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story.cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }, {
      label: t("story.cascader_osaka"),
      value: "osaka",
      children: [{
        label: t("story.cascader_osaka_city"),
        value: "osaka_city",
        children: [{
          label: t("story.cascader_umeda"),
          value: "umeda"
        }]
      }]
    }];
    return <Cascader {...args} options={options} placeholder={t("story.cascader_placeholder")} aria-label={t("story.cascader_placeholder")} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story.cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story.cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story.cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }, {
      label: t("story.cascader_osaka"),
      value: "osaka",
      children: [{
        label: t("story.cascader_osaka_city"),
        value: "osaka_city",
        children: [{
          label: t("story.cascader_umeda"),
          value: "umeda"
        }]
      }]
    }];
    return <Cascader {...args} options={options} label={t("story.cascader_placeholder")} placeholder={t("story.cascader_placeholder")} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story.cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story.cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story.cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }];
    return <Cascader {...args} options={options} expandTrigger="hover" placeholder={t("story.cascader_placeholder")} aria-label={t("story.cascader_placeholder")} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story.cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story.cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story.cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }];
    return <Cascader {...args} options={options} disabled defaultValue={["tokyo", "shibuya"]} placeholder={t("story.cascader_placeholder")} aria-label={t("story.cascader_placeholder")} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [{
      label: t("story.cascader_tokyo"),
      value: "tokyo",
      children: [{
        label: t("story.cascader_shibuya"),
        value: "shibuya",
        children: [{
          label: t("story.cascader_dogenzaka"),
          value: "dogenzaka"
        }]
      }]
    }];
    return <Cascader {...args} options={options} separator=" > " defaultValue={["tokyo", "shibuya", "dogenzaka"]} aria-label={t("story.cascader_location")} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: openFirstPopup
}`,...y.parameters?.docs?.source}}}})))()}export{g as a,_ as i,v as n,h as o,m as r,x as s,d as t};