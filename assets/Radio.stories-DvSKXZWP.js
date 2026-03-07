import{j as d}from"./jsx-runtime-u17CrQMm.js";import{R as n}from"./Radio-eo1i8jpd.js";import{u as l}from"./useTranslation-T6dr20_p.js";const u={title:"Components/Selection Controls/Radio",component:n,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},r={render:function(e){const{t:o}=l(["docs","common","components"]);return d.jsx(n,{...e,label:o("story_radio_option1"),value:"option1"})}},s={render:function(e){const{t:o}=l(["docs","common","components"]);return d.jsx(n,{...e,label:o("story_radio_checked"),checked:!0,value:"checked"})}},a={render:function(e){const{t:o}=l(["docs","common","components"]);return d.jsx(n,{...e,label:o("story_radio_disabled"),disabled:!0,value:"disabled"})}},t={render:function(e){const{t:o}=l(["docs","common","components"]);return d.jsx(n,{...e,label:o("story_radio_dis_checked"),disabled:!0,checked:!0,value:"disabled-checked"})}},c={render:function(e){const{t:o}=l(["docs","common","components"]);return d.jsx(n,{...e,label:o("story_radio_long_label"),value:"long"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Radio {...args} label={t("story_radio_option1")} value="option1" />;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Radio {...args} label={t("story_radio_checked")} checked={true} value="checked" />;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Radio {...args} label={t("story_radio_disabled")} disabled={true} value="disabled" />;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Radio {...args} label={t("story_radio_dis_checked")} disabled={true} checked={true} value="disabled-checked" />;
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Radio {...args} label={t("story_radio_long_label")} value="long" />;
  }
}`,...c.parameters?.docs?.source}}};const m=["Default","Checked","Disabled","DisabledChecked","LongLabel"],g=Object.freeze(Object.defineProperty({__proto__:null,Checked:s,Default:r,Disabled:a,DisabledChecked:t,LongLabel:c,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{s as C,r as D,g as R,a};
