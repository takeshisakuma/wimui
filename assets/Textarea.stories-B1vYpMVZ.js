import{j as r}from"./jsx-runtime-u17CrQMm.js";import{T as a}from"./Textarea-B--fUdQ1.js";import{L as n}from"./FieldTemplate-X5NluK2C.js";import{F as m}from"./FieldError-DvcVxAcr.js";import{A as o}from"./iframe-BCt2Cqzi.js";import{u as l}from"./useTranslation-iqmbh8MZ.js";const h={title:"Components/Basic Inputs/Textarea",component:a,args:{disabled:!1},argTypes:{disabled:{control:"boolean"},status:{control:"select",options:["default","error"]},variant:{control:"select",options:["outline","ghost"]},fullWidth:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]}}},i={render:function(t){const{t:e}=l(o);return r.jsx(n,{label:e("story.textarea_label_inquiry"),children:r.jsx(a,{...t,placeholder:e("story.textarea_placeholder_forgot")})})}},d={render:function(t){const{t:e}=l(o);return r.jsx(n,{label:e("story.textarea_label_feedback"),children:r.jsx(a,{...t,placeholder:e("story.textarea_placeholder_slow")})})},args:{variant:"ghost"}},c={render:function(t){const{t:e}=l(o);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(n,{label:e("story.textarea_label_details"),children:r.jsx(a,{...t,placeholder:e("story.textarea_placeholder_error")})}),r.jsx(m,{content:e("story.textarea_error_10chars")})]})},args:{status:"error"}},p={render:function(t){const{t:e}=l(o);return r.jsx(n,{label:e("story.textarea_label_remarks"),children:r.jsx(a,{...t,placeholder:e("story.textarea_placeholder_asap")})})},args:{disabled:!0}},u={render:function(t){const{t:e}=l(o);return r.jsx(n,{label:e("story.textarea_label_message"),children:r.jsx(a,{...t,placeholder:e("story.textarea_placeholder_thanks")})})},args:{fullWidth:!0}},x={render:function(t){const{t:e}=l(o);return r.jsx(n,{label:e("story.textarea_label_remarks"),children:r.jsx(a,{...t,placeholder:e("story.textarea_placeholder_urgent")})})},args:{fieldSizing:"content"}},_={render:function(t){const{t:e}=l(o);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"500px"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(n,{htmlFor:"description",required:!0,label:e("story.textarea_label_intro")}),r.jsx(a,{id:"description",...t,placeholder:e("story.textarea_placeholder_engineer"),rows:3,fullWidth:!0})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(n,{htmlFor:"notes",label:e("story.textarea_label_remarks"),showOptional:!0}),r.jsx(a,{id:"notes",...t,placeholder:e("story.textarea_placeholder_phone"),rows:2,fullWidth:!0})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(n,{htmlFor:"motivation",required:!0,label:e("story.textarea_label_motivation"),children:r.jsx(a,{id:"motivation",...t,status:"error",defaultValue:e("story.textarea_value_none"),rows:3,fullWidth:!0})}),r.jsx(m,{content:e("story.textarea_error_long")})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.textarea_label_inquiry")}>
        <Textarea {...args} placeholder={t("story.textarea_placeholder_forgot")} />
      </Label>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.textarea_label_feedback")}>
        <Textarea {...args} placeholder={t("story.textarea_placeholder_slow")} />
      </Label>;
  },
  args: {
    variant: "ghost"
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
        <Label label={t("story.textarea_label_details")}>
          <Textarea {...args} placeholder={t("story.textarea_placeholder_error")} />
        </Label>
        <FieldError content={t("story.textarea_error_10chars")} />
      </div>;
  },
  args: {
    status: "error"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.textarea_label_remarks")}>
        <Textarea {...args} placeholder={t("story.textarea_placeholder_asap")} />
      </Label>;
  },
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.textarea_label_message")}>
        <Textarea {...args} placeholder={t("story.textarea_placeholder_thanks")} />
      </Label>;
  },
  args: {
    fullWidth: true
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.textarea_label_remarks")}>
        <Textarea {...args} placeholder={t("story.textarea_placeholder_urgent")} />
      </Label>;
  },
  args: {
    fieldSizing: "content"
  }
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
          <Label htmlFor="description" required label={t("story.textarea_label_intro")} />
          <Textarea id="description" {...args} placeholder={t("story.textarea_placeholder_engineer")} rows={3} fullWidth />
        </div>

        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
          <Label htmlFor="notes" label={t("story.textarea_label_remarks")} showOptional />
          <Textarea id="notes" {...args} placeholder={t("story.textarea_placeholder_phone")} rows={2} fullWidth />
        </div>

        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
          <Label htmlFor="motivation" required label={t("story.textarea_label_motivation")}>
            <Textarea id="motivation" {...args} status="error" defaultValue={t("story.textarea_value_none")} rows={3} fullWidth />
          </Label>
          <FieldError content={t("story.textarea_error_long")} />
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}};const b=["Basic","Ghost","ErrorStatus","Disabled","FullWidth","FieldSizingContent","FormPattern"],v=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:p,ErrorStatus:c,FieldSizingContent:x,FormPattern:_,FullWidth:u,Ghost:d,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{i as B,p as D,c as E,u as F,d as G,v as T};
