import{j as o}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./Switch-Vnme-pxX.js";import{u as m}from"./useTranslation-BS4yh-5V.js";const u={title:"Components/Selection Controls/Switch",component:n,parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["small","medium"]}}},s={render:function(e){const{t:r}=m(["docs","common","components"]);return o.jsx(n,{...e,label:r("story_switch_notif")})}},a={render:function(e){const{t:r}=m(["docs","common","components"]);return o.jsx(n,{...e,label:r("story_switch_wifi"),defaultChecked:!0})}},c={render:function(e){const{t:r}=m(["docs","common","components"]);return o.jsx(n,{...e,label:r("story_switch_airplane"),size:"small"})}},d={render:function(e){const{t:r}=m(["docs","common","components"]);return o.jsx(n,{...e,label:r("story_switch_bluetooth"),disabled:!0})}},i={render:function(e){const{t:r}=m(["docs","common","components"]);return o.jsx(n,{...e,label:r("story_switch_bluetooth"),disabled:!0,defaultChecked:!0})}},l={render:function(e){return o.jsx(n,{...e})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Switch {...args} label={t("story_switch_notif")} />;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Switch {...args} label={t("story_switch_wifi")} defaultChecked={true} />;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Switch {...args} label={t("story_switch_airplane")} size="small" />;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Switch {...args} label={t("story_switch_bluetooth")} disabled={true} />;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Switch {...args} label={t("story_switch_bluetooth")} disabled={true} defaultChecked={true} />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Switch {...args} />;
  }
}`,...l.parameters?.docs?.source}}};const p=["Default","Checked","Small","Disabled","DisabledChecked","NoLabel"],_=Object.freeze(Object.defineProperty({__proto__:null,Checked:a,Default:s,Disabled:d,DisabledChecked:i,NoLabel:l,Small:c,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{a as C,d as D,_ as S,c as a};
