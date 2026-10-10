"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Label-CaPgujqk.js";import{n as u,t as d}from"./CheckboxGroup-BXpgnYpj.js";import{n as f,t as p}from"./Input-D4uyP0D5.js";import{n as m,t as h}from"./Fieldset-BTSOmOYa.js";import{n as g,t as _}from"./Legend-BXPYExLe.js";var v=t({Default:()=>x,Disabled:()=>w,FullWidth:()=>S,WithCheckboxGroup:()=>C,__namedExportsOrder:()=>T,default:()=>b}),y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),i(),a(),u(),m(),f(),c(),g(),y=s(),b={title:`Components/Form Layout/Fieldset`,component:h,parameters:{layout:`padded`}},x={render:function(e){let{t}=r(o);return(0,y.jsxs)(h,{...e,children:[(0,y.jsx)(_,{label:t(`story.fieldset_basic`)}),(0,y.jsx)(l,{label:t(`story.fieldset_name`),children:(0,y.jsx)(p,{placeholder:t(`story.fieldset_name_placeholder`)})}),(0,y.jsx)(l,{label:t(`story.header_contact`),children:(0,y.jsx)(p,{type:`email`,placeholder:`example@wim.ui`})})]})}},S={render:function(e){let{t}=r(o);return(0,y.jsxs)(h,{...e,children:[(0,y.jsx)(_,{label:t(`story.fieldset_basic`)}),(0,y.jsx)(l,{label:t(`story.fieldset_name`),children:(0,y.jsx)(p,{placeholder:t(`story.fieldset_name_placeholder`)})}),(0,y.jsx)(l,{label:t(`story.header_contact`),children:(0,y.jsx)(p,{type:`email`,placeholder:`example@wim.ui`})})]})},args:{variant:`full-width`}},C={render:function(e){let{t}=r(o);return(0,y.jsxs)(h,{...e,children:[(0,y.jsx)(_,{label:t(`story.fieldset_notif`)}),(0,y.jsx)(d,{options:[{label:t(`story.fieldset_notif_email`),value:`email`},{label:t(`story.fieldset_notif_push`),value:`push`},{label:t(`story.fieldset_notif_sms`),value:`sms`}],defaultValue:[`email`]})]})}},w={args:{disabled:!0},render:function(e){let{t}=r(o);return(0,y.jsxs)(h,{...e,children:[(0,y.jsx)(_,{label:t(`story.fieldset_disabled_sec`)}),(0,y.jsx)(l,{label:t(`story.fieldset_name`),children:(0,y.jsx)(p,{placeholder:t(`story.fieldset_disabled_placeholder`)})}),(0,y.jsx)(d,{options:[{label:t(`story.fieldset_opt1`),value:`1`},{label:t(`story.fieldset_opt2`),value:`2`}]})]})}},T=[`Default`,`FullWidth`,`WithCheckboxGroup`,`Disabled`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset {...args}>
        <Legend label={t("story.fieldset_basic")} />
        <Label label={t("story.fieldset_name")}>
          <Input placeholder={t("story.fieldset_name_placeholder")} />
        </Label>
        <Label label={t("story.header_contact")}>
          <Input type="email" placeholder="example@wim.ui" />
        </Label>
      </Fieldset>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset {...args}>
        <Legend label={t("story.fieldset_basic")} />
        <Label label={t("story.fieldset_name")}>
          <Input placeholder={t("story.fieldset_name_placeholder")} />
        </Label>
        <Label label={t("story.header_contact")}>
          <Input type="email" placeholder="example@wim.ui" />
        </Label>
      </Fieldset>;
  },
  args: {
    variant: "full-width"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset {...args}>
        <Legend label={t("story.fieldset_notif")} />
        <CheckboxGroup options={[{
        label: t("story.fieldset_notif_email"),
        value: "email"
      }, {
        label: t("story.fieldset_notif_push"),
        value: "push"
      }, {
        label: t("story.fieldset_notif_sms"),
        value: "sms"
      }]} defaultValue={["email"]} />
      </Fieldset>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset {...args}>
        <Legend label={t("story.fieldset_disabled_sec")} />
        <Label label={t("story.fieldset_name")}>
          <Input placeholder={t("story.fieldset_disabled_placeholder")} />
        </Label>
        <CheckboxGroup options={[{
        label: t("story.fieldset_opt1"),
        value: "1"
      }, {
        label: t("story.fieldset_opt2"),
        value: "2"
      }]} />
      </Fieldset>;
  }
}`,...w.parameters?.docs?.source}}}})))()}export{C as a,S as i,w as n,E as o,v as r,x as t};