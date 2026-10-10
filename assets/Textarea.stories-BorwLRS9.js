"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Label-CaPgujqk.js";import{n as u,t as d}from"./FieldError-B8o8kHvz.js";import{n as f,t as p}from"./Textarea-ioORUD2t.js";var m=t({Basic:()=>_,Danger:()=>y,Disabled:()=>b,FieldSizingContent:()=>S,FormPattern:()=>C,FullWidth:()=>x,Ghost:()=>v,__namedExportsOrder:()=>w,default:()=>g}),h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),i(),a(),u(),c(),f(),h=s(),g={title:`Components/Basic Inputs/Textarea`,component:p,args:{disabled:!1},argTypes:{disabled:{control:`boolean`},intent:{control:`select`,options:[`default`,`danger`]},variant:{control:`select`,options:[`outline`,`ghost`]},fullWidth:{control:`boolean`},fieldSizing:{control:`select`,options:[`fixed`,`content`]},width:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`100%`,`200px`,`10ch`]}}},_={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.textarea_label_inquiry`),children:(0,h.jsx)(p,{...e,placeholder:t(`story.textarea_placeholder_forgot`)})})}},v={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.textarea_label_feedback`),children:(0,h.jsx)(p,{...e,placeholder:t(`story.textarea_placeholder_slow`)})})},args:{variant:`ghost`}},y={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,label:t(`story.textarea_label_details`),error:t(`story.textarea_error_10chars`),placeholder:t(`story.textarea_placeholder_error`)})}},b={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.textarea_label_remarks`),children:(0,h.jsx)(p,{...e,placeholder:t(`story.textarea_placeholder_asap`)})})},args:{disabled:!0}},x={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.textarea_label_message`),children:(0,h.jsx)(p,{...e,placeholder:t(`story.textarea_placeholder_thanks`)})})},args:{fullWidth:!0}},S={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{label:t(`story.textarea_label_remarks`),children:(0,h.jsx)(p,{...e,placeholder:t(`story.textarea_placeholder_urgent`)})})},args:{fieldSizing:`content`}},C={render:function(e){let{t}=r(o);return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`500px`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,h.jsx)(l,{htmlFor:`description`,required:!0,label:t(`story.textarea_label_intro`)}),(0,h.jsx)(p,{id:`description`,...e,placeholder:t(`story.textarea_placeholder_engineer`),rows:3,fullWidth:!0})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,h.jsx)(l,{htmlFor:`notes`,label:t(`story.textarea_label_remarks`),showOptional:!0}),(0,h.jsx)(p,{id:`notes`,...e,placeholder:t(`story.textarea_placeholder_phone`),rows:2,fullWidth:!0})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,h.jsx)(l,{htmlFor:`motivation`,required:!0,label:t(`story.textarea_label_motivation`),children:(0,h.jsx)(p,{id:`motivation`,...e,intent:`danger`,defaultValue:t(`story.textarea_value_none`),rows:3,fullWidth:!0})}),(0,h.jsx)(d,{content:t(`story.textarea_error_long`)})]})]})}},w=[`Basic`,`Ghost`,`Danger`,`Disabled`,`FullWidth`,`FieldSizingContent`,`FormPattern`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.textarea_label_inquiry")}>
        <Textarea {...args} placeholder={t("story.textarea_placeholder_forgot")} />
      </Label>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return (
      // エラー文は \`error\` で渡す（入力欄から \`aria-describedby\` で辿れる。T316）
      <Textarea {...args} label={t("story.textarea_label_details")} error={t("story.textarea_error_10chars")} placeholder={t("story.textarea_placeholder_error")} />
    );
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}}})))()}export{v as a,x as i,y as n,m as o,b as r,T as s,_ as t};