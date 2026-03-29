import{j as n}from"./jsx-runtime-u17CrQMm.js";import{S as t}from"./Switch-D-0LBNkV.js";import{A as u}from"./iframe-DD-5vQ8N.js";import{u as m}from"./useTranslation-BGm1MMYI.js";const p={title:"Components/Selection Controls/Switch",component:t,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"},size:{control:"radio",options:["small","medium","large"]}}},a={render:function(e){const{t:r}=m(u);return n.jsx(t,{...e,label:r("story_switch_notif")})}},o={render:function(e){const{t:r}=m(u);return n.jsx(t,{...e,label:r("story_switch_wifi")})},args:{defaultChecked:!0}},c={render:function(e){const{t:r}=m(u);return n.jsx(t,{...e,label:r("story_switch_airplane")})},args:{size:"small"}},l={render:function(e){const{t:r}=m(u);return n.jsx(t,{...e,label:r("story_switch_bluetooth")})},args:{disabled:!0}},i={render:function(e){const{t:r}=m(u);return n.jsx(t,{...e,label:r("story_switch_bluetooth")})},args:{disabled:!0,defaultChecked:!0}},d={render:function(e){return n.jsx(t,{...e,"aria-label":"Toggle"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args} label={t("story_switch_notif")} />;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args} label={t("story_switch_wifi")} />;
  },
  args: {
    defaultChecked: true
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args} label={t("story_switch_airplane")} />;
  },
  args: {
    size: "small"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args} label={t("story_switch_bluetooth")} />;
  },
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args} label={t("story_switch_bluetooth")} />;
  },
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Switch {...args} aria-label="Toggle" />;
  }
}`,...d.parameters?.docs?.source}}};const S=["Default","Checked","Small","Disabled","DisabledChecked","NoLabel"],f=Object.freeze(Object.defineProperty({__proto__:null,Checked:o,Default:a,Disabled:l,DisabledChecked:i,NoLabel:d,Small:c,__namedExportsOrder:S,default:p},Symbol.toStringTag,{value:"Module"}));export{o as C,l as D,f as S,c as a};
