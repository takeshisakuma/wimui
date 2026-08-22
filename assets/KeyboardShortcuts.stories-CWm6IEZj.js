"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-F5Up1IQq.js";import{n as s,t as c}from"./KeyboardShortcuts-BhkhA8yu.js";var l=e({Default:()=>f,Large:()=>h,MacStyle:()=>g,Small:()=>m,WithTitle:()=>p,__namedExportsOrder:()=>_,default:()=>d}),u,d,f,p,m,h,g,_,v=t((()=>{a(),r(),s(),u=i(),d={title:`Components/Navigation Utilities/KeyboardShortcuts`,component:c,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},separator:{control:`text`}}},f={render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,size:`md`,shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},p={render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,size:`md`,title:t(`story.ks_general`),shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},m={render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,size:`sm`,shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},h={render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,size:`lg`,shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},g={render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,size:`md`,title:t(`story.ks_editing`),shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`⌘`,`K`]},{label:t(`story.ks_save`),keys:[`⌘`,`S`]},{label:t(`story.ks_undo`),keys:[`⌘`,`Z`]},{label:t(`story.ks_redo`),keys:[`⌘`,`⇧`,`Z`]},{label:t(`story.ks_select_all`),keys:[`⌘`,`A`]}]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <KeyboardShortcuts {...args} size="md" shortcuts={[{
      label: t("story.ks_open_cmd_palette"),
      keys: ["Ctrl", "K"]
    }, {
      label: t("story.ks_save"),
      keys: ["Ctrl", "S"]
    }, {
      label: t("story.ks_undo"),
      keys: ["Ctrl", "Z"]
    }, {
      label: t("story.ks_redo"),
      keys: ["Ctrl", "Shift", "Z"]
    }, {
      label: t("story.ks_find"),
      keys: ["Ctrl", "F"]
    }]} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <KeyboardShortcuts {...args} size="md" title={t("story.ks_general")} shortcuts={[{
      label: t("story.ks_open_cmd_palette"),
      keys: ["Ctrl", "K"]
    }, {
      label: t("story.ks_save"),
      keys: ["Ctrl", "S"]
    }, {
      label: t("story.ks_undo"),
      keys: ["Ctrl", "Z"]
    }, {
      label: t("story.ks_redo"),
      keys: ["Ctrl", "Shift", "Z"]
    }, {
      label: t("story.ks_find"),
      keys: ["Ctrl", "F"]
    }]} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <KeyboardShortcuts {...args} size="sm" shortcuts={[{
      label: t("story.ks_open_cmd_palette"),
      keys: ["Ctrl", "K"]
    }, {
      label: t("story.ks_save"),
      keys: ["Ctrl", "S"]
    }, {
      label: t("story.ks_undo"),
      keys: ["Ctrl", "Z"]
    }, {
      label: t("story.ks_redo"),
      keys: ["Ctrl", "Shift", "Z"]
    }, {
      label: t("story.ks_find"),
      keys: ["Ctrl", "F"]
    }]} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <KeyboardShortcuts {...args} size="lg" shortcuts={[{
      label: t("story.ks_open_cmd_palette"),
      keys: ["Ctrl", "K"]
    }, {
      label: t("story.ks_save"),
      keys: ["Ctrl", "S"]
    }, {
      label: t("story.ks_undo"),
      keys: ["Ctrl", "Z"]
    }, {
      label: t("story.ks_redo"),
      keys: ["Ctrl", "Shift", "Z"]
    }, {
      label: t("story.ks_find"),
      keys: ["Ctrl", "F"]
    }]} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <KeyboardShortcuts {...args} size="md" title={t("story.ks_editing")} shortcuts={[{
      label: t("story.ks_open_cmd_palette"),
      keys: ["⌘", "K"]
    }, {
      label: t("story.ks_save"),
      keys: ["⌘", "S"]
    }, {
      label: t("story.ks_undo"),
      keys: ["⌘", "Z"]
    }, {
      label: t("story.ks_redo"),
      keys: ["⌘", "⇧", "Z"]
    }, {
      label: t("story.ks_select_all"),
      keys: ["⌘", "A"]
    }]} />;
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithTitle`,`Small`,`Large`,`MacStyle`]}));v();export{f as Default,h as Large,g as MacStyle,m as Small,p as WithTitle,_ as __namedExportsOrder,d as default,v as n,l as t};