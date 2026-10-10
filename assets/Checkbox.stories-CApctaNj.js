"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Checkbox-B9BICLMX.js";var u=t({Checked:()=>h,Controlled:()=>y,Default:()=>m,Disabled:()=>g,DisabledChecked:()=>_,Indeterminate:()=>v,LongLabel:()=>b,__namedExportsOrder:()=>x,default:()=>p}),d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),d=n(),i(),a(),c(),f=s(),p={title:`Components/Selection Controls/Checkbox`,component:l,argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},indeterminate:{control:`boolean`}}},m={render:function(e){let{t}=r(o);return(0,f.jsx)(l,{...e,children:t(`story.checkbox_accept`)})}},h={render:function(e){let{t}=r(o);return(0,f.jsx)(l,{...e,onChange:e.onChange??(()=>{}),children:t(`story.checkbox_newsletter`)})},args:{checked:!0}},g={render:function(e){let{t}=r(o);return(0,f.jsx)(l,{...e,children:t(`story.checkbox_disabled`)})},args:{disabled:!0}},_={render:function(e){let{t}=r(o);return(0,f.jsx)(l,{...e,onChange:e.onChange??(()=>{}),children:t(`story.checkbox_dis_checked`)})},args:{disabled:!0,checked:!0}},v={render:function(e){let{t}=r(o);return(0,f.jsx)(l,{...e,onChange:e.onChange??(()=>{}),children:t(`story.checkbox_indeterminate`)})},args:{indeterminate:!0,checked:!0}},y=()=>{let{t:e}=r(o),[t,n]=(0,d.useState)(!1);return(0,f.jsx)(l,{checked:t,onChange:e=>n(e.target.checked),children:`${e(`story.checkbox_controlled`)}: ${e(t?`story.checkbox_on`:`story.checkbox_off`)}`})},b={render:function(e){let{t}=r(o);return(0,f.jsx)(l,{...e,children:t(`story.checkbox_long_label`)})}},y.__docgenInfo={description:``,methods:[],displayName:`Controlled`},x=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`Indeterminate`,`Controlled`,`LongLabel`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args}>{t("story.checkbox_accept")}</Checkbox>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} onChange={args.onChange ?? (() => {})}>
        {t("story.checkbox_newsletter")}
      </Checkbox>;
  },
  args: {
    checked: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args}>{t("story.checkbox_disabled")}</Checkbox>;
  },
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} onChange={args.onChange ?? (() => {})}>
        {t("story.checkbox_dis_checked")}
      </Checkbox>;
  },
  args: {
    disabled: true,
    checked: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} onChange={args.onChange ?? (() => {})}>
        {t("story.checkbox_indeterminate")}
      </Checkbox>;
  },
  args: {
    indeterminate: true,
    checked: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>
      {\`\${t("story.checkbox_controlled")}: \${checked ? t("story.checkbox_on") : t("story.checkbox_off")}\`}
    </Checkbox>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args}>{t("story.checkbox_long_label")}</Checkbox>;
  }
}`,...b.parameters?.docs?.source}}}})))()}export{v as a,_ as i,h as n,S as o,g as r,u as t};