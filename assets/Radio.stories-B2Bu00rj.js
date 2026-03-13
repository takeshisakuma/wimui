import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as e}from"./Radio-fyAoKoVL.js";import{u as i}from"./useTranslation-BsF8P6HZ.js";const _={title:"Components/Selection Controls/Radio",component:e,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},n={render:function(o){const{t:s}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,label:s("story_radio_option1"),value:"option1"})}},c={render:function(o){const{t:s}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,label:s("story_radio_checked"),checked:!0,value:"checked"})}},d={render:function(o){const{t:s}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,label:s("story_radio_disabled"),disabled:!0,value:"disabled"})}},a={render:function(o){const{t:s}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,label:s("story_radio_dis_checked"),disabled:!0,checked:!0,value:"disabled-checked"})}},r={render:function(o){const{t:s}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,label:s("story_radio_long_label"),value:"long"})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Radio {...args} label={t("story_radio_option1")} value="option1" />;
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Radio {...args} label={t("story_radio_checked")} checked={true} value="checked" />;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Radio {...args} label={t("story_radio_disabled")} disabled={true} value="disabled" />;
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Radio {...args} label={t("story_radio_dis_checked")} disabled={true} checked={true} value="disabled-checked" />;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Radio {...args} label={t("story_radio_long_label")} value="long" />;
  }
}`,...r.parameters?.docs?.source}}};const u=["Default","Checked","Disabled","DisabledChecked","LongLabel"],y=Object.freeze(Object.defineProperty({__proto__:null,Checked:c,Default:n,Disabled:d,DisabledChecked:a,LongLabel:r,__namedExportsOrder:u,default:_},Symbol.toStringTag,{value:"Module"}));export{c as C,n as D,y as R,d as a};
