"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Select-DCLSdcqg.js";import{n as u,t as d}from"./playOpen-D3Z82aS-.js";var f=t({AdvancedSearch:()=>C,Default:()=>h,Disabled:()=>v,Grouped:()=>S,Open:()=>w,Preselected:()=>_,Searchable:()=>x,WithClearButton:()=>b,WithLabel:()=>g,WithSeparator:()=>y,__namedExportsOrder:()=>T,default:()=>m}),p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),i(),a(),c(),d(),p=s(),m={title:`Components/Selection Controls/Select`,component:l,parameters:{layout:`centered`},args:{disabled:!1},argTypes:{disabled:{control:`boolean`},onChange:{action:`changed`}}},h={render:function(e){let{t}=r(o),n=[{label:t(`story.select_opt1`),value:`opt1`},{label:t(`story.select_opt2`),value:`opt2`},{label:t(`story.select_opt3`),value:`opt3`},{label:t(`story.select_opt4`),value:`opt4`,disabled:!0},{label:t(`story.select_opt5`),value:`opt5`}];return(0,p.jsx)(l,{...e,options:n,placeholder:t(`story.select_placeholder`)})}},g={render:function(e){let{t}=r(o),n=[{label:t(`story.select_opt1`),value:`opt1`},{label:t(`story.select_opt2`),value:`opt2`},{label:t(`story.select_opt3`),value:`opt3`},{label:t(`story.select_opt4`),value:`opt4`,disabled:!0},{label:t(`story.select_opt5`),value:`opt5`}];return(0,p.jsx)(l,{...e,label:t(`story.select_label`),options:n,placeholder:t(`story.select_placeholder`)})}},_={render:function(e){let{t}=r(o),n=[{label:t(`story.select_opt1`),value:`opt1`},{label:t(`story.select_opt2`),value:`opt2`},{label:t(`story.select_opt3`),value:`opt3`},{label:t(`story.select_opt4`),value:`opt4`,disabled:!0},{label:t(`story.select_opt5`),value:`opt5`}];return(0,p.jsx)(l,{...e,options:n,label:t(`story.select_label`),defaultValue:`opt2`})}},v={render:function(e){let{t}=r(o),n=[{label:t(`story.select_opt1`),value:`opt1`},{label:t(`story.select_opt2`),value:`opt2`},{label:t(`story.select_opt3`),value:`opt3`},{label:t(`story.select_opt4`),value:`opt4`,disabled:!0},{label:t(`story.select_opt5`),value:`opt5`}];return(0,p.jsx)(l,{...e,options:n,label:t(`story.select_label`),disabled:!0,defaultValue:`opt1`})}},y={render:function(e){let{t}=r(o),n=[{label:t(`story.select_settings`),value:`settings`},{label:t(`story.select_profile`),value:`profile`},{type:`separator`},{label:t(`story.select_help`),value:`help`},{label:t(`story.select_about`),value:`about`},{type:`separator`},{label:t(`story.select_logout`),value:`logout`}];return(0,p.jsx)(l,{...e,options:n,placeholder:t(`story.select_placeholder`)})}},b={render:function(e){let{t}=r(o),n=[{label:t(`story.select_opt1`),value:`opt1`},{label:t(`story.select_opt2`),value:`opt2`},{label:t(`story.select_opt3`),value:`opt3`},{label:t(`story.select_opt4`),value:`opt4`,disabled:!0},{label:t(`story.select_opt5`),value:`opt5`}];return(0,p.jsx)(l,{...e,options:n,allowClear:!0,defaultValue:`opt1`,placeholder:t(`story.select_placeholder`)})}},x={render:function(e){let{t}=r(o),n=[{label:t(`story.select_opt_apple`),value:`apple`},{label:t(`story.select_opt_banana`),value:`banana`},{label:t(`story.select_opt_cherry`),value:`cherry`},{label:t(`story.select_opt_grape`),value:`grape`},{label:t(`story.select_opt_orange`),value:`orange`}];return(0,p.jsx)(l,{...e,options:n,searchable:!0,searchPlaceholder:t(`story.select_placeholder`),placeholder:t(`story.select_placeholder`)})}},S={render:function(e){let{t}=r(o),n=[{label:t(`story.select_group_fruits`),options:[{label:t(`story.select_opt_apple`),value:`apple`},{label:t(`story.select_opt_banana`),value:`banana`}]},{label:t(`story.select_group_veggies`),options:[{label:t(`story.select_opt_carrot`),value:`carrot`},{label:t(`story.select_opt_potato`),value:`potato`}]}];return(0,p.jsx)(l,{...e,options:n,grouped:!0,placeholder:t(`story.select_placeholder`)})}},C={render:function(e){let{t}=r(o),n=[{label:t(`story.select_group_fruits`),options:[{label:t(`story.select_opt_apple`),value:`apple`},{label:t(`story.select_opt_banana`),value:`banana`}]},{label:t(`story.select_group_veggies`),options:[{label:t(`story.select_opt_carrot`),value:`carrot`},{label:t(`story.select_opt_potato`),value:`potato`}]}];return(0,p.jsx)(l,{...e,options:n,grouped:!0,searchable:!0,searchPlaceholder:t(`story.select_placeholder`),allowClear:!0,placeholder:t(`story.select_placeholder`)})}},w={...h,play:u},T=[`Default`,`WithLabel`,`Preselected`,`Disabled`,`WithSeparator`,`WithClearButton`,`Searchable`,`Grouped`,`AdvancedSearch`,`Open`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.select_opt1"),
      value: "opt1"
    }, {
      label: t("story.select_opt2"),
      value: "opt2"
    }, {
      label: t("story.select_opt3"),
      value: "opt3"
    }, {
      label: t("story.select_opt4"),
      value: "opt4",
      disabled: true
    }, {
      label: t("story.select_opt5"),
      value: "opt5"
    }];
    return <Select {...args} options={options} placeholder={t("story.select_placeholder")} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.select_opt1"),
      value: "opt1"
    }, {
      label: t("story.select_opt2"),
      value: "opt2"
    }, {
      label: t("story.select_opt3"),
      value: "opt3"
    }, {
      label: t("story.select_opt4"),
      value: "opt4",
      disabled: true
    }, {
      label: t("story.select_opt5"),
      value: "opt5"
    }];
    return <Select {...args} label={t("story.select_label")} options={options} placeholder={t("story.select_placeholder")} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.select_opt1"),
      value: "opt1"
    }, {
      label: t("story.select_opt2"),
      value: "opt2"
    }, {
      label: t("story.select_opt3"),
      value: "opt3"
    }, {
      label: t("story.select_opt4"),
      value: "opt4",
      disabled: true
    }, {
      label: t("story.select_opt5"),
      value: "opt5"
    }];
    return <Select {...args} options={options} label={t("story.select_label")} defaultValue="opt2" />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.select_opt1"),
      value: "opt1"
    }, {
      label: t("story.select_opt2"),
      value: "opt2"
    }, {
      label: t("story.select_opt3"),
      value: "opt3"
    }, {
      label: t("story.select_opt4"),
      value: "opt4",
      disabled: true
    }, {
      label: t("story.select_opt5"),
      value: "opt5"
    }];
    return <Select {...args} options={options} label={t("story.select_label")} disabled={true} defaultValue="opt1" />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const optionsWithSeparators: SelectOption[] = [{
      label: t("story.select_settings"),
      value: "settings"
    }, {
      label: t("story.select_profile"),
      value: "profile"
    }, {
      type: "separator"
    }, {
      label: t("story.select_help"),
      value: "help"
    }, {
      label: t("story.select_about"),
      value: "about"
    }, {
      type: "separator"
    }, {
      label: t("story.select_logout"),
      value: "logout"
    }];
    return <Select {...args} options={optionsWithSeparators} placeholder={t("story.select_placeholder")} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.select_opt1"),
      value: "opt1"
    }, {
      label: t("story.select_opt2"),
      value: "opt2"
    }, {
      label: t("story.select_opt3"),
      value: "opt3"
    }, {
      label: t("story.select_opt4"),
      value: "opt4",
      disabled: true
    }, {
      label: t("story.select_opt5"),
      value: "opt5"
    }];
    return <Select {...args} options={options} allowClear={true} defaultValue="opt1" placeholder={t("story.select_placeholder")} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.select_opt_apple"),
      value: "apple"
    }, {
      label: t("story.select_opt_banana"),
      value: "banana"
    }, {
      label: t("story.select_opt_cherry"),
      value: "cherry"
    }, {
      label: t("story.select_opt_grape"),
      value: "grape"
    }, {
      label: t("story.select_opt_orange"),
      value: "orange"
    }];
    return <Select {...args} options={options} searchable={true} searchPlaceholder={t("story.select_placeholder")} placeholder={t("story.select_placeholder")} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const groupedOptions = [{
      label: t("story.select_group_fruits"),
      options: [{
        label: t("story.select_opt_apple"),
        value: "apple"
      }, {
        label: t("story.select_opt_banana"),
        value: "banana"
      }]
    }, {
      label: t("story.select_group_veggies"),
      options: [{
        label: t("story.select_opt_carrot"),
        value: "carrot"
      }, {
        label: t("story.select_opt_potato"),
        value: "potato"
      }]
    }];
    return <Select {...args} options={groupedOptions} grouped={true} placeholder={t("story.select_placeholder")} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const groupedOptions = [{
      label: t("story.select_group_fruits"),
      options: [{
        label: t("story.select_opt_apple"),
        value: "apple"
      }, {
        label: t("story.select_opt_banana"),
        value: "banana"
      }]
    }, {
      label: t("story.select_group_veggies"),
      options: [{
        label: t("story.select_opt_carrot"),
        value: "carrot"
      }, {
        label: t("story.select_opt_potato"),
        value: "potato"
      }]
    }];
    return <Select {...args} options={groupedOptions} grouped={true} searchable={true} searchPlaceholder={t("story.select_placeholder")} allowClear={true} placeholder={t("story.select_placeholder")} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: openFirstPopup
}`,...w.parameters?.docs?.source}}}})))()}export{_ as a,g as c,S as i,y as l,h as n,x as o,v as r,f as s,C as t,E as u};