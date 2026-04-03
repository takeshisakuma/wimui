import{j as t}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./Switch-Gu3XLDmY.js";import{A as l}from"./iframe-DsTXv44w.js";import{u as m}from"./useTranslation-BJ9oq-Jr.js";const h={title:"Components/Selection Controls/Switch",component:n,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"},size:{control:"radio",options:["sm","md","lg"]}}},o={render:function(e){const{t:r}=m(l);return t.jsx(n,{...e,children:r("story.switch_notif")})}},a={render:function(e){const{t:r}=m(l);return t.jsx(n,{...e,children:r("story.switch_wifi")})},args:{defaultChecked:!0}},c={render:function(e){const{t:r}=m(l);return t.jsx(n,{...e,children:r("story.switch_airplane")})},args:{size:"sm"}},i={render:function(e){const{t:r}=m(l);return t.jsx(n,{...e,children:r("story.switch_bluetooth")})},args:{disabled:!0}},d={render:function(e){const{t:r}=m(l);return t.jsx(n,{...e,children:r("story.switch_bluetooth")})},args:{disabled:!0,defaultChecked:!0}},u={render:function(e){return t.jsx(n,{...e,"aria-label":"Toggle"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args}>{t("story.switch_notif")}</Switch>;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args}>{t("story.switch_wifi")}</Switch>;
  },
  args: {
    defaultChecked: true
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args}>{t("story.switch_airplane")}</Switch>;
  },
  args: {
    size: "sm"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args}>{t("story.switch_bluetooth")}</Switch>;
  },
  args: {
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args}>
        {t("story.switch_bluetooth")}
      </Switch>;
  },
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Switch {...args} aria-label="Toggle" />;
  }
}`,...u.parameters?.docs?.source}}};const p=["Default","Checked","Small","Disabled","DisabledChecked","NoLabel"],_=Object.freeze(Object.defineProperty({__proto__:null,Checked:a,Default:o,Disabled:i,DisabledChecked:d,NoLabel:u,Small:c,__namedExportsOrder:p,default:h},Symbol.toStringTag,{value:"Module"}));export{a as C,i as D,_ as S,c as a};
