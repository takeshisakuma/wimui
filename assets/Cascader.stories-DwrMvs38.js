"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-F5Up1IQq.js";import{n as s,t as c}from"./Cascader-Cit8m6tx.js";var l=e({CustomSeparator:()=>g,Default:()=>f,Disabled:()=>h,HoverExpand:()=>m,WithLabel:()=>p,__namedExportsOrder:()=>_,default:()=>d}),u,d,f,p,m,h,g,_,v=t((()=>{a(),s(),r(),u=i(),d={title:`Components/Advanced Inputs/Cascader`,component:c,parameters:{layout:`centered`},argTypes:{disabled:{control:`boolean`}}},f={render:e=>{let{t}=n(o),r=[{label:t(`story.cascader_tokyo`),value:`tokyo`,children:[{label:t(`story.cascader_shibuya`),value:`shibuya`,children:[{label:t(`story.cascader_dogenzaka`),value:`dogenzaka`}]}]},{label:t(`story.cascader_osaka`),value:`osaka`,children:[{label:t(`story.cascader_osaka_city`),value:`osaka_city`,children:[{label:t(`story.cascader_umeda`),value:`umeda`}]}]}];return(0,u.jsx)(c,{...e,options:r,placeholder:t(`story.cascader_placeholder`),"aria-label":t(`story.cascader_placeholder`)})}},p={render:e=>{let{t}=n(o),r=[{label:t(`story.cascader_tokyo`),value:`tokyo`,children:[{label:t(`story.cascader_shibuya`),value:`shibuya`,children:[{label:t(`story.cascader_dogenzaka`),value:`dogenzaka`}]}]},{label:t(`story.cascader_osaka`),value:`osaka`,children:[{label:t(`story.cascader_osaka_city`),value:`osaka_city`,children:[{label:t(`story.cascader_umeda`),value:`umeda`}]}]}];return(0,u.jsx)(c,{...e,options:r,label:t(`story.cascader_placeholder`),placeholder:t(`story.cascader_placeholder`)})}},m={render:e=>{let{t}=n(o),r=[{label:t(`story.cascader_tokyo`),value:`tokyo`,children:[{label:t(`story.cascader_shibuya`),value:`shibuya`,children:[{label:t(`story.cascader_dogenzaka`),value:`dogenzaka`}]}]}];return(0,u.jsx)(c,{...e,options:r,expandTrigger:`hover`,placeholder:t(`story.cascader_placeholder`),"aria-label":t(`story.cascader_placeholder`)})}},h={render:e=>{let{t}=n(o),r=[{label:t(`story.cascader_tokyo`),value:`tokyo`,children:[{label:t(`story.cascader_shibuya`),value:`shibuya`,children:[{label:t(`story.cascader_dogenzaka`),value:`dogenzaka`}]}]}];return(0,u.jsx)(c,{...e,options:r,disabled:!0,defaultValue:[`tokyo`,`shibuya`],placeholder:t(`story.cascader_placeholder`),"aria-label":t(`story.cascader_placeholder`)})}},g={render:e=>{let{t}=n(o),r=[{label:t(`story.cascader_tokyo`),value:`tokyo`,children:[{label:t(`story.cascader_shibuya`),value:`shibuya`,children:[{label:t(`story.cascader_dogenzaka`),value:`dogenzaka`}]}]}];return(0,u.jsx)(c,{...e,options:r,separator:` > `,defaultValue:[`tokyo`,`shibuya`,`dogenzaka`],"aria-label":t(`story.cascader_location`)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    }];
    return <Cascader {...args} options={options} disabled defaultValue={["tokyo", "shibuya"]} placeholder={t("story.cascader_placeholder")} aria-label={t("story.cascader_placeholder")} />;
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
    return <Cascader {...args} options={options} separator=" > " defaultValue={["tokyo", "shibuya", "dogenzaka"]} aria-label={t("story.cascader_location")} />;
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithLabel`,`HoverExpand`,`Disabled`,`CustomSeparator`]}));v();export{g as CustomSeparator,f as Default,h as Disabled,m as HoverExpand,p as WithLabel,_ as __namedExportsOrder,d as default,v as n,l as t};