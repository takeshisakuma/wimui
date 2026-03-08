import{j as r}from"./jsx-runtime-u17CrQMm.js";import{T as a}from"./Textarea-B2iCmk4q.js";import{L as o}from"./Label-LWwmYpB8.js";import{F as x}from"./FieldError-B0tgqQQI.js";import{u as n}from"./useTranslation-C2tw1dPV.js";const u={title:"Components/Basic Inputs/Textarea",component:a,argTypes:{state:{control:{type:"select"},options:["default","error","disabled"]},variant:{control:{type:"select"},options:["outline","ghost"]},fullWidth:{control:{type:"boolean"}},fieldSizing:{control:{type:"select"},options:["fixed","content"]}}},l={render:function(t){const{t:e}=n(["docs","common","components"]);return r.jsx(o,{label:e("story_textarea_label_inquiry"),children:r.jsx(a,{...t,placeholder:e("story_textarea_placeholder_forgot")})})}},c={render:function(t){const{t:e}=n(["docs","common","components"]);return r.jsx(o,{label:e("story_textarea_label_feedback"),children:r.jsx(a,{...t,variant:"ghost",placeholder:e("story_textarea_placeholder_slow")})})}},i={render:function(t){const{t:e}=n(["docs","common","components"]);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(o,{label:e("story_textarea_label_details"),children:r.jsx(a,{...t,state:"error",placeholder:e("story_textarea_placeholder_error")})}),r.jsx(x,{content:e("story_textarea_error_10chars")})]})}},d={render:function(t){const{t:e}=n(["docs","common","components"]);return r.jsx(o,{label:e("story_textarea_label_remarks"),children:r.jsx(a,{...t,state:"disabled",placeholder:e("story_textarea_placeholder_asap")})})}},p={render:function(t){const{t:e}=n(["docs","common","components"]);return r.jsx(o,{label:e("story_textarea_label_message"),children:r.jsx(a,{...t,fullWidth:!0,placeholder:e("story_textarea_placeholder_thanks")})})}},_={render:function(t){const{t:e}=n(["docs","common","components"]);return r.jsx(o,{label:e("story_textarea_label_remarks"),children:r.jsx(a,{...t,fieldSizing:"content",placeholder:e("story_textarea_placeholder_urgent")})})}},m={render:function(t){const{t:e}=n(["docs","common","components"]);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"500px"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(o,{htmlFor:"description",required:!0,label:e("story_textarea_label_intro")}),r.jsx(a,{id:"description",...t,placeholder:e("story_textarea_placeholder_engineer"),rows:3,fullWidth:!0})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(o,{htmlFor:"notes",label:e("story_textarea_label_remarks"),showOptional:!0}),r.jsx(a,{id:"notes",...t,placeholder:e("story_textarea_placeholder_phone"),rows:2,fullWidth:!0})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(o,{htmlFor:"motivation",required:!0,label:e("story_textarea_label_motivation"),children:r.jsx(a,{id:"motivation",...t,state:"error",defaultValue:e("story_textarea_value_none"),rows:3,fullWidth:!0})}),r.jsx(x,{content:e("story_textarea_error_long")})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_textarea_label_inquiry")}>\r
        <Textarea {...args} placeholder={t("story_textarea_placeholder_forgot")} />\r
      </Label>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_textarea_label_feedback")}>\r
        <Textarea {...args} variant="ghost" placeholder={t("story_textarea_placeholder_slow")} />\r
      </Label>;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
        <Label label={t("story_textarea_label_details")}>\r
          <Textarea {...args} state="error" placeholder={t("story_textarea_placeholder_error")} />\r
        </Label>\r
        <FieldError content={t("story_textarea_error_10chars")} />\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_textarea_label_remarks")}>\r
        <Textarea {...args} state="disabled" placeholder={t("story_textarea_placeholder_asap")} />\r
      </Label>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_textarea_label_message")}>\r
        <Textarea {...args} fullWidth={true} placeholder={t("story_textarea_placeholder_thanks")} />\r
      </Label>;
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_textarea_label_remarks")}>\r
        <Textarea {...args} fieldSizing="content" placeholder={t("story_textarea_placeholder_urgent")} />\r
      </Label>;
  }
}`,..._.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
            <Textarea id="motivation" {...args} state="error" defaultValue={t("story_textarea_value_none")} rows={3} fullWidth />\r
          </Label>\r
          <FieldError content={t("story_textarea_error_long")} />\r
        </div>\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const h=["Basic","Ghost","ErrorStatus","Disabled","FullWidth","FieldSizingContent","FormPattern"],v=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:d,ErrorStatus:i,FieldSizingContent:_,FormPattern:m,FullWidth:p,Ghost:c,__namedExportsOrder:h,default:u},Symbol.toStringTag,{value:"Module"}));export{l as B,d as D,i as E,p as F,c as G,v as T,m as a};
