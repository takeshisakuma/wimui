import{j as t}from"./jsx-runtime-u17CrQMm.js";import{S as e}from"./Switch-B46iJ2Hs.js";import{u as l}from"./useTranslation-BONq47qB.js";const u={title:"Components/Selection Controls/Switch",component:e,parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["small","medium"]}}},c={render:function(s){const{t:o}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...s,label:o("story_switch_notif")})}},r={render:function(s){const{t:o}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...s,label:o("story_switch_wifi"),defaultChecked:!0})}},a={render:function(s){const{t:o}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...s,label:o("story_switch_airplane"),size:"small"})}},d={render:function(s){const{t:o}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...s,label:o("story_switch_bluetooth"),disabled:!0})}},i={render:function(s){const{t:o}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...s,label:o("story_switch_bluetooth"),disabled:!0,defaultChecked:!0})}},_={render:function(s){return t.jsx(e,{...s})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Switch {...args} label={t("story_switch_notif")} />;
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Switch {...args} label={t("story_switch_wifi")} defaultChecked={true} />;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Switch {...args} label={t("story_switch_airplane")} size="small" />;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Switch {...args} label={t("story_switch_bluetooth")} disabled={true} />;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Switch {...args} label={t("story_switch_bluetooth")} disabled={true} defaultChecked={true} />;
  }
}`,...i.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Switch {...args} />;
  }
}`,..._.parameters?.docs?.source}}};const m=["Default","Checked","Small","Disabled","DisabledChecked","NoLabel"],h=Object.freeze(Object.defineProperty({__proto__:null,Checked:r,Default:c,Disabled:d,DisabledChecked:i,NoLabel:_,Small:a,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{r as C,d as D,h as S,a};
