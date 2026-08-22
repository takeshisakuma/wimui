"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{t as c}from"./src-Ssuy8lr7.js";import{r as l}from"./QueryBuilder-CGAN_DO-.js";var u=e({Checked:()=>m,Default:()=>p,Disabled:()=>g,DisabledChecked:()=>_,NoLabel:()=>v,Small:()=>h,__namedExportsOrder:()=>y,default:()=>f}),d,f,p,m,h,g,_,v,y,b=t((()=>{n(),o(),i(),c(),d=a(),f={title:`Components/Selection Controls/Switch`,component:l,parameters:{layout:`centered`},argTypes:{disabled:{control:`boolean`},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},p={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,children:t(`story.switch_notif`)})}},m={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,children:t(`story.switch_wifi`)})},args:{defaultChecked:!0}},h={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,children:t(`story.switch_airplane`)})},args:{size:`sm`}},g={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,children:t(`story.switch_bluetooth`)})},args:{disabled:!0}},_={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,children:t(`story.switch_bluetooth`)})},args:{disabled:!0,defaultChecked:!0}},v={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,"aria-label":t(`story.switch_toggle_label`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    return <Switch {...args}>{t("story.switch_bluetooth")}</Switch>;
  },
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args} aria-label={t("story.switch_toggle_label")} />;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Checked`,`Small`,`Disabled`,`DisabledChecked`,`NoLabel`]}));b();export{m as Checked,p as Default,g as Disabled,_ as DisabledChecked,v as NoLabel,h as Small,y as __namedExportsOrder,f as default,b as n,u as t};