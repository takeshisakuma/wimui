"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./FieldTemplate-BXdA5Ohn.js";import{n as d,t as f}from"./Input-D4uyP0D5.js";var p=n({Default:()=>_,Horizontal:()=>v,NoLabel:()=>b,WithError:()=>y,__namedExportsOrder:()=>x,default:()=>g}),m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{m=e(r(),1),a(),o(),l(),d(),h=c(),g={title:`Components/Form Layout/FieldTemplate`,component:u},_={render:function(e){let{t}=i(s),n=(0,m.useId)();return(0,h.jsx)(u,{...e,label:e.label||t(`doc.ft_email_label`),htmlFor:n,children:(0,h.jsx)(f,{id:n,placeholder:`example@example.com`,fullWidth:!0})})},args:{required:!0}},v={render:function(e){let{t}=i(s),n=(0,m.useId)();return(0,h.jsx)(u,{...e,label:t(`doc.ft_email_label`),layout:`horizontal`,htmlFor:n,children:(0,h.jsx)(f,{id:n,placeholder:`example@example.com`,fullWidth:!0})})},args:{..._.args}},y={render:function(e){let{t}=i(s),n=(0,m.useId)(),r=(0,m.useId)();return(0,h.jsx)(u,{...e,label:t(`doc.ft_email_label`),error:t(`doc.ft_email_error`),htmlFor:n,errorId:r,children:(0,h.jsx)(f,{id:n,placeholder:`example@example.com`,fullWidth:!0,intent:`danger`,"aria-describedby":r})})},args:{..._.args}},b={render:function(e){let{t}=i(s);return(0,h.jsx)(u,{...e,children:(0,h.jsx)(f,{placeholder:t(`doc.ft_no_label`),fullWidth:!0})})},args:{}},x=[`Default`,`Horizontal`,`WithError`,`NoLabel`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const fieldId = useId();
    return (
      // FieldTemplate は枠だけで、中の入力欄を知らない。ラベルは \`htmlFor\` と入力欄の \`id\` で結ぶ
      // （結ばないと、入力欄の名前がプレースホルダだけになる）。
      <FieldTemplate {...args} label={args.label || t("doc.ft_email_label")} htmlFor={fieldId}>
        <Input id={fieldId} placeholder="example@example.com" fullWidth />
      </FieldTemplate>
    );
  },
  args: {
    required: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const fieldId = useId();
    return <FieldTemplate {...args} label={t("doc.ft_email_label")} layout="horizontal" htmlFor={fieldId}>
        <Input id={fieldId} placeholder="example@example.com" fullWidth />
      </FieldTemplate>;
  },
  args: {
    ...Default.args
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const fieldId = useId();
    const errorId = useId();
    return (
      // FieldTemplate は枠だけなので、中の入力欄とラベル・エラー文は自分で結ぶ: \`htmlFor\` と \`id\`、\`errorId\` を渡し、
      // 入力欄の \`aria-describedby\` に同じ id を、\`intent="danger"\`（\`aria-invalid\`）と一緒に付ける（T316）。
      <FieldTemplate {...args} label={t("doc.ft_email_label")} error={t("doc.ft_email_error")} htmlFor={fieldId} errorId={errorId}>
        <Input id={fieldId} placeholder="example@example.com" fullWidth intent="danger" aria-describedby={errorId} />
      </FieldTemplate>
    );
  },
  args: {
    ...Default.args
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldTemplate {...args}>
        <Input placeholder={t("doc.ft_no_label")} fullWidth />
      </FieldTemplate>;
  },
  args: {}
}`,...b.parameters?.docs?.source}}}})))()}export{y as a,b as i,p as n,S as o,v as r,_ as t};