"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Switch-DEo9w1VW.js";var u=t({Checked:()=>m,Default:()=>p,Disabled:()=>_,DisabledChecked:()=>v,Large:()=>g,NoLabel:()=>y,Small:()=>h,__namedExportsOrder:()=>b,default:()=>f}),d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Selection Controls/Switch`,component:l,parameters:{layout:`centered`},argTypes:{disabled:{control:`boolean`},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},p={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,children:t(`story.switch_notif`)})}},m={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,children:t(`story.switch_wifi`)})},args:{defaultChecked:!0}},h={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,children:t(`story.switch_airplane`)})},args:{size:`sm`}},g={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,children:t(`story.switch_airplane`)})},args:{size:`lg`}},_={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,children:t(`story.switch_bluetooth`)})},args:{disabled:!0}},v={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,children:t(`story.switch_bluetooth`)})},args:{disabled:!0,defaultChecked:!0}},y={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,"aria-label":t(`story.switch_toggle_label`)})}},b=[`Default`,`Checked`,`Small`,`Large`,`Disabled`,`DisabledChecked`,`NoLabel`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args}>{t("story.switch_notif")}</Switch>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args}>{t("story.switch_wifi")}</Switch>;
  },
  args: {
    defaultChecked: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args}>{t("story.switch_airplane")}</Switch>;
  },
  args: {
    size: "sm"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args}>{t("story.switch_airplane")}</Switch>;
  },
  args: {
    size: "lg"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args}>{t("story.switch_bluetooth")}</Switch>;
  },
  args: {
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args}>
        {t("story.switch_bluetooth")}
      </Switch>;
  },
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args} aria-label={t("story.switch_toggle_label")} />;
  }
}`,...y.parameters?.docs?.source}}}})))()}export{u as a,h as i,_ as n,x as o,g as r,m as t};