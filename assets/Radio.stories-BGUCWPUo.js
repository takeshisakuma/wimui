"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Or as c,t as l}from"./src-CV0le6yM.js";var u=e({Checked:()=>m,Default:()=>p,Disabled:()=>h,DisabledChecked:()=>g,LongLabel:()=>_,__namedExportsOrder:()=>v,default:()=>f}),d,f,p,m,h,g,_,v,y=t((()=>{n(),o(),i(),l(),d=a(),f={title:`Components/Selection Controls/Radio`,component:c,argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`}}},p={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,value:`option1`,children:t(`story.radio_option1`)})}},m={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,value:`checked`,children:t(`story.radio_checked`)})},args:{checked:!0}},h={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,value:`disabled`,children:t(`story.radio_disabled`)})},args:{disabled:!0}},g={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,value:`disabled-checked`,children:t(`story.radio_dis_checked`)})},args:{disabled:!0,checked:!0}},_={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,value:`long`,children:t(`story.radio_long_label`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} value="option1">{t("story.radio_option1")}</Radio>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} value="checked">
        {t("story.radio_checked")}
      </Radio>;
  },
  args: {
    checked: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} value="disabled">
        {t("story.radio_disabled")}
      </Radio>;
  },
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} value="disabled-checked">
        {t("story.radio_dis_checked")}
      </Radio>;
  },
  args: {
    disabled: true,
    checked: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} value="long">{t("story.radio_long_label")}</Radio>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`LongLabel`]}));y();export{m as Checked,p as Default,h as Disabled,g as DisabledChecked,_ as LongLabel,v as __namedExportsOrder,f as default,y as n,u as t};