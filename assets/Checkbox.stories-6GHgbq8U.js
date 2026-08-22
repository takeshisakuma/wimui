"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{t as l}from"./src-Ssuy8lr7.js";import{t as u}from"./Checkbox-B5hLPzl5.js";var d=e({Checked:()=>g,Controlled:()=>b,Default:()=>h,Disabled:()=>_,DisabledChecked:()=>v,Indeterminate:()=>y,LongLabel:()=>x,__namedExportsOrder:()=>S,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{r(),f=n(r(),1),s(),a(),l(),p=o(),m={title:`Components/Selection Controls/Checkbox`,component:u,argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},indeterminate:{control:`boolean`}}},h={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,children:t(`story.checkbox_accept`)})}},g={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,onChange:e.onChange??(()=>{}),children:t(`story.checkbox_newsletter`)})},args:{checked:!0}},_={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,children:t(`story.checkbox_disabled`)})},args:{disabled:!0}},v={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,onChange:e.onChange??(()=>{}),children:t(`story.checkbox_dis_checked`)})},args:{disabled:!0,checked:!0}},y={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,onChange:e.onChange??(()=>{}),children:t(`story.checkbox_indeterminate`)})},args:{indeterminate:!0,checked:!0}},b=()=>{let{t:e}=i(c),[t,n]=(0,f.useState)(!1);return(0,p.jsx)(u,{checked:t,onChange:e=>n(e.target.checked),children:`${e(`story.checkbox_controlled`)}: ${e(t?`story.checkbox_on`:`story.checkbox_off`)}`})},x={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,children:t(`story.checkbox_long_label`)})}},b.__docgenInfo={description:``,methods:[],displayName:`Controlled`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args}>{t("story.checkbox_accept")}</Checkbox>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args}>{t("story.checkbox_disabled")}</Checkbox>;
  },
  args: {
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>
      {\`\${t("story.checkbox_controlled")}: \${checked ? t("story.checkbox_on") : t("story.checkbox_off")}\`}
    </Checkbox>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args}>{t("story.checkbox_long_label")}</Checkbox>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`Indeterminate`,`Controlled`,`LongLabel`]}));C();export{g as Checked,b as Controlled,h as Default,_ as Disabled,v as DisabledChecked,y as Indeterminate,x as LongLabel,S as __namedExportsOrder,m as default,C as n,d as t};