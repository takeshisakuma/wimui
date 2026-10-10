"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Radio-Bm8kxXC7.js";var u=t({Checked:()=>m,Default:()=>p,Disabled:()=>h,DisabledChecked:()=>g,LongLabel:()=>_,__namedExportsOrder:()=>v,default:()=>f}),d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Selection Controls/Radio`,component:l,argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`}}},p={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,value:`standard`,children:t(`story.radio_ship_standard`)})}},m={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,value:`checked`,children:t(`story.radio_checked`)})},args:{checked:!0}},h={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,value:`disabled`,children:t(`story.radio_disabled`)})},args:{disabled:!0}},g={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,value:`disabled-checked`,children:t(`story.radio_dis_checked`)})},args:{disabled:!0,checked:!0}},_={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,value:`long`,children:t(`story.radio_long_label`)})}},v=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`LongLabel`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} value="standard">{t("story.radio_ship_standard")}</Radio>;
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
}`,..._.parameters?.docs?.source}}}})))()}export{y as a,u as i,p as n,h as r,m as t};