"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{t as c}from"./src-Ssuy8lr7.js";import{a as l}from"./QueryBuilder-CGAN_DO-.js";var u=e({AdvancedSearch:()=>x,Default:()=>p,Disabled:()=>g,Grouped:()=>b,Preselected:()=>h,Searchable:()=>y,WithClearButton:()=>v,WithLabel:()=>m,WithSeparator:()=>_,__namedExportsOrder:()=>S,default:()=>f}),d,f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{n(),o(),i(),c(),d=a(),f={title:`Components/Selection Controls/Select`,component:l,parameters:{layout:`centered`},args:{disabled:!1},argTypes:{disabled:{control:`boolean`},onChange:{action:`changed`}}},p={render:function(e){let{t}=r(s),n=[{label:t(`story.select_opt1`),value:`opt1`},{label:t(`story.select_opt2`),value:`opt2`},{label:t(`story.select_opt3`),value:`opt3`},{label:t(`story.select_opt4`),value:`opt4`,disabled:!0},{label:t(`story.select_opt5`),value:`opt5`}];return(0,d.jsx)(l,{...e,options:n,placeholder:t(`story.select_placeholder`)})}},m={render:function(e){let{t}=r(s),n=[{label:t(`story.select_opt1`),value:`opt1`},{label:t(`story.select_opt2`),value:`opt2`},{label:t(`story.select_opt3`),value:`opt3`},{label:t(`story.select_opt4`),value:`opt4`,disabled:!0},{label:t(`story.select_opt5`),value:`opt5`}];return(0,d.jsx)(l,{...e,label:t(`story.select_label`),options:n,placeholder:t(`story.select_placeholder`)})}},h={render:function(e){let{t}=r(s),n=[{label:t(`story.select_opt1`),value:`opt1`},{label:t(`story.select_opt2`),value:`opt2`},{label:t(`story.select_opt3`),value:`opt3`},{label:t(`story.select_opt4`),value:`opt4`,disabled:!0},{label:t(`story.select_opt5`),value:`opt5`}];return(0,d.jsx)(l,{...e,options:n,label:t(`story.select_label`),defaultValue:`opt2`})}},g={render:function(e){let{t}=r(s),n=[{label:t(`story.select_opt1`),value:`opt1`},{label:t(`story.select_opt2`),value:`opt2`},{label:t(`story.select_opt3`),value:`opt3`},{label:t(`story.select_opt4`),value:`opt4`,disabled:!0},{label:t(`story.select_opt5`),value:`opt5`}];return(0,d.jsx)(l,{...e,options:n,label:t(`story.select_label`),disabled:!0,defaultValue:`opt1`})}},_={render:function(e){let{t}=r(s),n=[{label:t(`story.select_settings`),value:`settings`},{label:t(`story.select_profile`),value:`profile`},{type:`separator`},{label:t(`story.select_help`),value:`help`},{label:t(`story.select_about`),value:`about`},{type:`separator`},{label:t(`story.select_logout`),value:`logout`}];return(0,d.jsx)(l,{...e,options:n,placeholder:t(`story.select_placeholder`)})}},v={render:function(e){let{t}=r(s),n=[{label:t(`story.select_opt1`),value:`opt1`},{label:t(`story.select_opt2`),value:`opt2`},{label:t(`story.select_opt3`),value:`opt3`},{label:t(`story.select_opt4`),value:`opt4`,disabled:!0},{label:t(`story.select_opt5`),value:`opt5`}];return(0,d.jsx)(l,{...e,options:n,allowClear:!0,defaultValue:`opt1`,placeholder:t(`story.select_placeholder`)})}},y={render:function(e){let{t}=r(s),n=[{label:t(`story.select_opt_apple`),value:`apple`},{label:t(`story.select_opt_banana`),value:`banana`},{label:t(`story.select_opt_cherry`),value:`cherry`},{label:t(`story.select_opt_grape`),value:`grape`},{label:t(`story.select_opt_orange`),value:`orange`}];return(0,d.jsx)(l,{...e,options:n,searchable:!0,searchPlaceholder:t(`story.select_placeholder`),placeholder:t(`story.select_placeholder`)})}},b={render:function(e){let{t}=r(s),n=[{label:t(`story.select_group_fruits`),options:[{label:t(`story.select_opt_apple`),value:`apple`},{label:t(`story.select_opt_banana`),value:`banana`}]},{label:t(`story.select_group_veggies`),options:[{label:t(`story.select_opt_carrot`),value:`carrot`},{label:t(`story.select_opt_potato`),value:`potato`}]}];return(0,d.jsx)(l,{...e,options:n,grouped:!0,placeholder:t(`story.select_placeholder`)})}},x={render:function(e){let{t}=r(s),n=[{label:t(`story.select_group_fruits`),options:[{label:t(`story.select_opt_apple`),value:`apple`},{label:t(`story.select_opt_banana`),value:`banana`}]},{label:t(`story.select_group_veggies`),options:[{label:t(`story.select_opt_carrot`),value:`carrot`},{label:t(`story.select_opt_potato`),value:`potato`}]}];return(0,d.jsx)(l,{...e,options:n,grouped:!0,searchable:!0,searchPlaceholder:t(`story.select_placeholder`),allowClear:!0,placeholder:t(`story.select_placeholder`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    return <Select {...args} options={options} label={t("story.select_label")} disabled={true} defaultValue="opt1" />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    return <Select {...args} options={options} allowClear={true} defaultValue="opt1" placeholder={t("story.select_placeholder")} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithLabel`,`Preselected`,`Disabled`,`WithSeparator`,`WithClearButton`,`Searchable`,`Grouped`,`AdvancedSearch`]}));C();export{x as AdvancedSearch,p as Default,g as Disabled,b as Grouped,h as Preselected,y as Searchable,v as WithClearButton,m as WithLabel,_ as WithSeparator,S as __namedExportsOrder,f as default,C as n,u as t};