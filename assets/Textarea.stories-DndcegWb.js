import{j as o}from"./jsx-runtime-u17CrQMm.js";import{T as s}from"./Textarea-CowSy2jw.js";import{L as t}from"./FieldTemplate-SwTDQt6n.js";import{F as m}from"./FieldError-CzJHlLar.js";import{u as a}from"./useTranslation-CHJ-TYb-.js";const x={title:"Components/Basic Inputs/Textarea",component:s,argTypes:{status:{control:{type:"select"},options:["default","error","disabled"]},variant:{control:{type:"select"},options:["outline","ghost"]},fullWidth:{control:{type:"boolean"}},fieldSizing:{control:{type:"select"},options:["fixed","content"]}}},l={render:function(r){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{label:e("story_textarea_label_inquiry"),children:o.jsx(s,{...r,placeholder:e("story_textarea_placeholder_forgot")})})}},c={render:function(r){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{label:e("story_textarea_label_feedback"),children:o.jsx(s,{...r,variant:"ghost",placeholder:e("story_textarea_placeholder_slow")})})}},d={render:function(r){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(t,{label:e("story_textarea_label_details"),children:o.jsx(s,{...r,status:"error",placeholder:e("story_textarea_placeholder_error")})}),o.jsx(m,{content:e("story_textarea_error_10chars")})]})}},i={render:function(r){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{label:e("story_textarea_label_remarks"),children:o.jsx(s,{...r,disabled:!0,placeholder:e("story_textarea_placeholder_asap")})})}},_={render:function(r){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{label:e("story_textarea_label_message"),children:o.jsx(s,{...r,fullWidth:!0,placeholder:e("story_textarea_placeholder_thanks")})})}},p={render:function(r){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{label:e("story_textarea_label_remarks"),children:o.jsx(s,{...r,fieldSizing:"content",placeholder:e("story_textarea_placeholder_urgent")})})}},u={render:function(r){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"500px"},children:[o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(t,{htmlFor:"description",required:!0,label:e("story_textarea_label_intro")}),o.jsx(s,{id:"description",...r,placeholder:e("story_textarea_placeholder_engineer"),rows:3,fullWidth:!0})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(t,{htmlFor:"notes",label:e("story_textarea_label_remarks"),showOptional:!0}),o.jsx(s,{id:"notes",...r,placeholder:e("story_textarea_placeholder_phone"),rows:2,fullWidth:!0})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(t,{htmlFor:"motivation",required:!0,label:e("story_textarea_label_motivation"),children:o.jsx(s,{id:"motivation",...r,status:"error",defaultValue:e("story_textarea_value_none"),rows:3,fullWidth:!0})}),o.jsx(m,{content:e("story_textarea_error_long")})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_textarea_label_inquiry")}>\r
        <Textarea {...args} placeholder={t("story_textarea_placeholder_forgot")} />\r
      </Label>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_textarea_label_feedback")}>\r
        <Textarea {...args} variant="ghost" placeholder={t("story_textarea_placeholder_slow")} />\r
      </Label>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
        <Label label={t("story_textarea_label_details")}>\r
          <Textarea {...args} status="error" placeholder={t("story_textarea_placeholder_error")} />\r
        </Label>\r
        <FieldError content={t("story_textarea_error_10chars")} />\r
      </div>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_textarea_label_remarks")}>\r
        <Textarea {...args} disabled placeholder={t("story_textarea_placeholder_asap")} />\r
      </Label>;
  }
}`,...i.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_textarea_label_message")}>\r
        <Textarea {...args} fullWidth={true} placeholder={t("story_textarea_placeholder_thanks")} />\r
      </Label>;
  }
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_textarea_label_remarks")}>\r
        <Textarea {...args} fieldSizing="content" placeholder={t("story_textarea_placeholder_urgent")} />\r
      </Label>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      maxWidth: "500px"
    }}>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>\r
          <Label htmlFor="description" required label={t("story_textarea_label_intro")} />\r
          <Textarea id="description" {...args} placeholder={t("story_textarea_placeholder_engineer")} rows={3} fullWidth />\r
        </div>\r
\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>\r
          <Label htmlFor="notes" label={t("story_textarea_label_remarks")} showOptional />\r
          <Textarea id="notes" {...args} placeholder={t("story_textarea_placeholder_phone")} rows={2} fullWidth />\r
        </div>\r
\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>\r
          <Label htmlFor="motivation" required label={t("story_textarea_label_motivation")}>\r
            <Textarea id="motivation" {...args} status="error" defaultValue={t("story_textarea_value_none")} rows={3} fullWidth />\r
          </Label>\r
          <FieldError content={t("story_textarea_error_long")} />\r
        </div>\r
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const y=["Basic","Ghost","ErrorStatus","Disabled","FullWidth","FieldSizingContent","FormPattern"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:i,ErrorStatus:d,FieldSizingContent:p,FormPattern:u,FullWidth:_,Ghost:c,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{l as B,i as D,d as E,_ as F,c as G,j as T,u as a};
