"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{Nr as c,t as l}from"./src-BE5jBQ9L.js";import{a as u,r as d}from"./FieldTemplate-C0nkiaIz.js";var f=e({Basic:()=>h,Danger:()=>_,Disabled:()=>v,FieldSizingContent:()=>b,FormPattern:()=>x,FullWidth:()=>y,Ghost:()=>g,__namedExportsOrder:()=>S,default:()=>m}),p,m,h,g,_,v,y,b,x,S,C=t((()=>{n(),o(),i(),l(),p=a(),m={title:`Components/Basic Inputs/Textarea`,component:c,args:{disabled:!1},argTypes:{disabled:{control:`boolean`},intent:{control:`select`,options:[`default`,`danger`]},variant:{control:`select`,options:[`outline`,`ghost`]},fullWidth:{control:`boolean`},fieldSizing:{control:`select`,options:[`fixed`,`content`]},width:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`100%`,`200px`,`10ch`]}}},h={render:function(e){let{t}=r(s);return(0,p.jsx)(u,{label:t(`story.textarea_label_inquiry`),children:(0,p.jsx)(c,{...e,placeholder:t(`story.textarea_placeholder_forgot`)})})}},g={render:function(e){let{t}=r(s);return(0,p.jsx)(u,{label:t(`story.textarea_label_feedback`),children:(0,p.jsx)(c,{...e,placeholder:t(`story.textarea_placeholder_slow`)})})},args:{variant:`ghost`}},_={render:function(e){let{t}=r(s);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(u,{label:t(`story.textarea_label_details`),children:(0,p.jsx)(c,{...e,placeholder:t(`story.textarea_placeholder_error`)})}),(0,p.jsx)(d,{content:t(`story.textarea_error_10chars`)})]})},args:{intent:`danger`}},v={render:function(e){let{t}=r(s);return(0,p.jsx)(u,{label:t(`story.textarea_label_remarks`),children:(0,p.jsx)(c,{...e,placeholder:t(`story.textarea_placeholder_asap`)})})},args:{disabled:!0}},y={render:function(e){let{t}=r(s);return(0,p.jsx)(u,{label:t(`story.textarea_label_message`),children:(0,p.jsx)(c,{...e,placeholder:t(`story.textarea_placeholder_thanks`)})})},args:{fullWidth:!0}},b={render:function(e){let{t}=r(s);return(0,p.jsx)(u,{label:t(`story.textarea_label_remarks`),children:(0,p.jsx)(c,{...e,placeholder:t(`story.textarea_placeholder_urgent`)})})},args:{fieldSizing:`content`}},x={render:function(e){let{t}=r(s);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`500px`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(u,{htmlFor:`description`,required:!0,label:t(`story.textarea_label_intro`)}),(0,p.jsx)(c,{id:`description`,...e,placeholder:t(`story.textarea_placeholder_engineer`),rows:3,fullWidth:!0})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(u,{htmlFor:`notes`,label:t(`story.textarea_label_remarks`),showOptional:!0}),(0,p.jsx)(c,{id:`notes`,...e,placeholder:t(`story.textarea_placeholder_phone`),rows:2,fullWidth:!0})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(u,{htmlFor:`motivation`,required:!0,label:t(`story.textarea_label_motivation`),children:(0,p.jsx)(c,{id:`motivation`,...e,intent:`danger`,defaultValue:t(`story.textarea_value_none`),rows:3,fullWidth:!0})}),(0,p.jsx)(d,{content:t(`story.textarea_error_long`)})]})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.textarea_label_inquiry")}>
        <Textarea {...args} placeholder={t("story.textarea_placeholder_forgot")} />
      </Label>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    intent: "danger"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
            <Textarea id="motivation" {...args} intent="danger" defaultValue={t("story.textarea_value_none")} rows={3} fullWidth />
          </Label>
          <FieldError content={t("story.textarea_error_long")} />
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`Ghost`,`Danger`,`Disabled`,`FullWidth`,`FieldSizingContent`,`FormPattern`]}));C();export{h as Basic,_ as Danger,v as Disabled,b as FieldSizingContent,x as FormPattern,y as FullWidth,g as Ghost,S as __namedExportsOrder,m as default,C as n,f as t};