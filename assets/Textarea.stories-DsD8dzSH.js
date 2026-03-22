import{j as r}from"./jsx-runtime-u17CrQMm.js";import{T as a}from"./Textarea-BEH40P36.js";import{L as n}from"./FieldTemplate-Dy-pQOzT.js";import{F as m}from"./FieldError-NuE6z-H2.js";import{A as o}from"./iframe-B7RtKuM4.js";import{u as l}from"./useTranslation-BRrcRHvL.js";const h={title:"Components/Basic Inputs/Textarea",component:a,argTypes:{status:{control:{type:"select"},options:["default","error","disabled"]},variant:{control:{type:"select"},options:["outline","ghost"]},fullWidth:{control:{type:"boolean"}},fieldSizing:{control:{type:"select"},options:["fixed","content"]}}},i={render:function(t){const{t:e}=l(o);return r.jsx(n,{label:e("story_textarea_label_inquiry"),children:r.jsx(a,{...t,placeholder:e("story_textarea_placeholder_forgot")})})}},d={render:function(t){const{t:e}=l(o);return r.jsx(n,{label:e("story_textarea_label_feedback"),children:r.jsx(a,{...t,variant:"ghost",placeholder:e("story_textarea_placeholder_slow")})})}},c={render:function(t){const{t:e}=l(o);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(n,{label:e("story_textarea_label_details"),children:r.jsx(a,{...t,status:"error",placeholder:e("story_textarea_placeholder_error")})}),r.jsx(m,{content:e("story_textarea_error_10chars")})]})}},_={render:function(t){const{t:e}=l(o);return r.jsx(n,{label:e("story_textarea_label_remarks"),children:r.jsx(a,{...t,disabled:!0,placeholder:e("story_textarea_placeholder_asap")})})}},p={render:function(t){const{t:e}=l(o);return r.jsx(n,{label:e("story_textarea_label_message"),children:r.jsx(a,{...t,fullWidth:!0,placeholder:e("story_textarea_placeholder_thanks")})})}},u={render:function(t){const{t:e}=l(o);return r.jsx(n,{label:e("story_textarea_label_remarks"),children:r.jsx(a,{...t,fieldSizing:"content",placeholder:e("story_textarea_placeholder_urgent")})})}},x={render:function(t){const{t:e}=l(o);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"500px"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(n,{htmlFor:"description",required:!0,label:e("story_textarea_label_intro")}),r.jsx(a,{id:"description",...t,placeholder:e("story_textarea_placeholder_engineer"),rows:3,fullWidth:!0})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(n,{htmlFor:"notes",label:e("story_textarea_label_remarks"),showOptional:!0}),r.jsx(a,{id:"notes",...t,placeholder:e("story_textarea_placeholder_phone"),rows:2,fullWidth:!0})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(n,{htmlFor:"motivation",required:!0,label:e("story_textarea_label_motivation"),children:r.jsx(a,{id:"motivation",...t,status:"error",defaultValue:e("story_textarea_value_none"),rows:3,fullWidth:!0})}),r.jsx(m,{content:e("story_textarea_error_long")})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_textarea_label_inquiry")}>
        <Textarea {...args} placeholder={t("story_textarea_placeholder_forgot")} />
      </Label>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_textarea_label_feedback")}>
        <Textarea {...args} variant="ghost" placeholder={t("story_textarea_placeholder_slow")} />
      </Label>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
        <Label label={t("story_textarea_label_details")}>
          <Textarea {...args} status="error" placeholder={t("story_textarea_placeholder_error")} />
        </Label>
        <FieldError content={t("story_textarea_error_10chars")} />
      </div>;
  }
}`,...c.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_textarea_label_remarks")}>
        <Textarea {...args} disabled placeholder={t("story_textarea_placeholder_asap")} />
      </Label>;
  }
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_textarea_label_message")}>
        <Textarea {...args} fullWidth={true} placeholder={t("story_textarea_placeholder_thanks")} />
      </Label>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_textarea_label_remarks")}>
        <Textarea {...args} fieldSizing="content" placeholder={t("story_textarea_placeholder_urgent")} />
      </Label>;
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      maxWidth: "500px"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
          <Label htmlFor="description" required label={t("story_textarea_label_intro")} />
          <Textarea id="description" {...args} placeholder={t("story_textarea_placeholder_engineer")} rows={3} fullWidth />
        </div>

        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
          <Label htmlFor="notes" label={t("story_textarea_label_remarks")} showOptional />
          <Textarea id="notes" {...args} placeholder={t("story_textarea_placeholder_phone")} rows={2} fullWidth />
        </div>

        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
          <Label htmlFor="motivation" required label={t("story_textarea_label_motivation")}>
            <Textarea id="motivation" {...args} status="error" defaultValue={t("story_textarea_value_none")} rows={3} fullWidth />
          </Label>
          <FieldError content={t("story_textarea_error_long")} />
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};const y=["Basic","Ghost","ErrorStatus","Disabled","FullWidth","FieldSizingContent","FormPattern"],v=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:_,ErrorStatus:c,FieldSizingContent:u,FormPattern:x,FullWidth:p,Ghost:d,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{i as B,_ as D,c as E,p as F,d as G,v as T};
