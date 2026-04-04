import{j as c}from"./jsx-runtime-u17CrQMm.js";import{R as n}from"./Radio-DBLrTL7C.js";import{A as i}from"./iframe-Bn5mqC8Q.js";import{u}from"./useTranslation-Cn4N2seM.js";const p={title:"Components/Selection Controls/Radio",component:n,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}}},o={render:function(e){const{t:r}=u(i);return c.jsx(n,{...e,value:"option1",children:r("story.radio_option1")})}},a={render:function(e){const{t:r}=u(i);return c.jsx(n,{...e,value:"checked",children:r("story.radio_checked")})},args:{checked:!0}},s={render:function(e){const{t:r}=u(i);return c.jsx(n,{...e,value:"disabled",children:r("story.radio_disabled")})},args:{disabled:!0}},t={render:function(e){const{t:r}=u(i);return c.jsx(n,{...e,value:"disabled-checked",children:r("story.radio_dis_checked")})},args:{disabled:!0,checked:!0}},d={render:function(e){const{t:r}=u(i);return c.jsx(n,{...e,value:"long",children:r("story.radio_long_label")})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} value="option1">{t("story.radio_option1")}</Radio>;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} value="checked">
        {t("story.radio_checked")}
      </Radio>;
  },
  args: {
    checked: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} value="disabled">
        {t("story.radio_disabled")}
      </Radio>;
  },
  args: {
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} value="disabled-checked">
        {t("story.radio_dis_checked")}
      </Radio>;
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
    return <Radio {...args} value="long">{t("story.radio_long_label")}</Radio>;
  }
}`,...d.parameters?.docs?.source}}};const m=["Default","Checked","Disabled","DisabledChecked","LongLabel"],h=Object.freeze(Object.defineProperty({__proto__:null,Checked:a,Default:o,Disabled:s,DisabledChecked:t,LongLabel:d,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{a as C,o as D,h as R,s as a};
