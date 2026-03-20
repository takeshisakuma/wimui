import{j as c}from"./jsx-runtime-u17CrQMm.js";import{R as n}from"./Radio-b6D5-9B3.js";import{A as l}from"./i18nConstants-BpHxieg5.js";import{u as i}from"./useTranslation-CrQtSC0V.js";const p={title:"Components/Selection Controls/Radio",component:n,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},o={render:function(e){const{t:r}=i(l);return c.jsx(n,{...e,label:r("story_radio_option1"),value:"option1"})}},a={render:function(e){const{t:r}=i(l);return c.jsx(n,{...e,label:r("story_radio_checked"),checked:!0,value:"checked"})}},s={render:function(e){const{t:r}=i(l);return c.jsx(n,{...e,label:r("story_radio_disabled"),disabled:!0,value:"disabled"})}},t={render:function(e){const{t:r}=i(l);return c.jsx(n,{...e,label:r("story_radio_dis_checked"),disabled:!0,checked:!0,value:"disabled-checked"})}},d={render:function(e){const{t:r}=i(l);return c.jsx(n,{...e,label:r("story_radio_long_label"),value:"long"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story_radio_option1")} value="option1" />;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story_radio_checked")} checked={true} value="checked" />;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story_radio_disabled")} disabled={true} value="disabled" />;
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story_radio_dis_checked")} disabled={true} checked={true} value="disabled-checked" />;
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story_radio_long_label")} value="long" />;
  }
}`,...d.parameters?.docs?.source}}};const _=["Default","Checked","Disabled","DisabledChecked","LongLabel"],S=Object.freeze(Object.defineProperty({__proto__:null,Checked:a,Default:o,Disabled:s,DisabledChecked:t,LongLabel:d,__namedExportsOrder:_,default:p},Symbol.toStringTag,{value:"Module"}));export{a as C,o as D,S as R,s as a};
