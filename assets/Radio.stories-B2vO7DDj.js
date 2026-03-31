import{j as c}from"./jsx-runtime-u17CrQMm.js";import{R as n}from"./Radio-DZ4_BIiK.js";import{A as l}from"./iframe-BIyQwIaN.js";import{u as i}from"./useTranslation-C6_B5Ynz.js";const p={title:"Components/Selection Controls/Radio",component:n,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},a={render:function(e){const{t:r}=i(l);return c.jsx(n,{...e,label:r("story.radio_option1"),value:"option1"})}},o={render:function(e){const{t:r}=i(l);return c.jsx(n,{...e,label:r("story.radio_checked"),value:"checked"})},args:{checked:!0}},s={render:function(e){const{t:r}=i(l);return c.jsx(n,{...e,label:r("story.radio_disabled"),value:"disabled"})},args:{disabled:!0}},t={render:function(e){const{t:r}=i(l);return c.jsx(n,{...e,label:r("story.radio_dis_checked"),value:"disabled-checked"})},args:{disabled:!0,checked:!0}},d={render:function(e){const{t:r}=i(l);return c.jsx(n,{...e,label:r("story.radio_long_label"),value:"long"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story.radio_option1")} value="option1" />;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story.radio_checked")} value="checked" />;
  },
  args: {
    checked: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story.radio_disabled")} value="disabled" />;
  },
  args: {
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story.radio_dis_checked")} value="disabled-checked" />;
  },
  args: {
    disabled: true,
    checked: true
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story.radio_long_label")} value="long" />;
  }
}`,...d.parameters?.docs?.source}}};const b=["Default","Checked","Disabled","DisabledChecked","LongLabel"],S=Object.freeze(Object.defineProperty({__proto__:null,Checked:o,Default:a,Disabled:s,DisabledChecked:t,LongLabel:d,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{o as C,a as D,S as R,s as a};
