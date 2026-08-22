"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{Ur as c,h as l,t as u,ti as d}from"./src-Ssuy8lr7.js";import{a as f}from"./FieldTemplate-D3hWbscu.js";import{t as p}from"./Input-BY9GcYwo.js";var m=e({Default:()=>_,Disabled:()=>y,WithCheckboxGroup:()=>v,__namedExportsOrder:()=>b,default:()=>g}),h,g,_,v,y,b,x=t((()=>{n(),o(),i(),u(),h=a(),g={title:`Components/Form Layout/Fieldset`,component:c,parameters:{layout:`padded`}},_={render:function(e){let{t}=r(s);return(0,h.jsxs)(c,{...e,children:[(0,h.jsx)(l,{label:t(`story.fieldset_basic`)}),(0,h.jsx)(f,{label:t(`story.fieldset_name`),children:(0,h.jsx)(p,{placeholder:t(`story.fieldset_name_placeholder`)})}),(0,h.jsx)(f,{label:t(`story.header_contact`),children:(0,h.jsx)(p,{type:`email`,placeholder:`example@wim.ui`})})]})}},v={render:function(e){let{t}=r(s);return(0,h.jsxs)(c,{...e,children:[(0,h.jsx)(l,{label:t(`story.fieldset_notif`)}),(0,h.jsx)(d,{options:[{label:t(`story.fieldset_notif_email`),value:`email`},{label:t(`story.fieldset_notif_push`),value:`push`},{label:t(`story.fieldset_notif_sms`),value:`sms`}],defaultValue:[`email`]})]})}},y={args:{disabled:!0},render:function(e){let{t}=r(s);return(0,h.jsxs)(c,{...e,children:[(0,h.jsx)(l,{label:t(`story.fieldset_disabled_sec`)}),(0,h.jsx)(f,{label:t(`story.fieldset_name`),children:(0,h.jsx)(p,{placeholder:t(`story.fieldset_disabled_placeholder`)})}),(0,h.jsx)(d,{options:[{label:t(`story.fieldset_opt1`),value:`1`},{label:t(`story.fieldset_opt2`),value:`2`}]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithCheckboxGroup`,`Disabled`]}));x();export{_ as Default,y as Disabled,v as WithCheckboxGroup,b as __namedExportsOrder,g as default,x as n,m as t};