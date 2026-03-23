import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as i}from"./Group-DNkpMdfM.js";import{B as s}from"./Button-BWV7Wbvh.js";import{A as p}from"./iframe-D6EUhd-6.js";import{u as c}from"./useTranslation-DLjPp_oZ.js";const l={title:"Components/Layout/Group",component:i,tags:[],argTypes:{align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},gap:{control:"text"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},grow:{control:"boolean"}}},t={render:function(a){const{t:o}=c(p);return r.jsxs(i,{...a,children:[r.jsx(s,{label:o("story_group_first","First"),priority:"primary"}),r.jsx(s,{label:o("story_group_second","Second"),priority:"secondary"}),r.jsx(s,{label:o("story_group_third","Third"),priority:"tertiary"})]})},args:{gap:16}},n={render:function(a){const{t:o}=c(p);return r.jsxs(i,{...a,children:[r.jsx(s,{label:o("story_group_first","First"),priority:"primary"}),r.jsx(s,{label:o("story_group_second","Second"),priority:"secondary"})]})},args:{grow:!0,gap:16}},e={args:{align:"end",children:r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{height:"40px",width:"40px",backgroundColor:"#3b82f6"}}),r.jsx("div",{style:{height:"80px",width:"40px",backgroundColor:"#10b981"}}),r.jsx("div",{style:{height:"60px",width:"40px",backgroundColor:"#ef4444"}})]}),gap:16}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Group {...args}>
        <Button label={t("story_group_first", "First")} priority="primary" />
        <Button label={t("story_group_second", "Second")} priority="secondary" />
        <Button label={t("story_group_third", "Third")} priority="tertiary" />
      </Group>;
  },
  args: {
    gap: 16
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Group {...args}>
        <Button label={t("story_group_first", "First")} priority="primary" />
        <Button label={t("story_group_second", "Second")} priority="secondary" />
      </Group>;
  },
  args: {
    grow: true,
    gap: 16
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    align: "end",
    children: <>
        <div style={{
        height: "40px",
        width: "40px",
        backgroundColor: "#3b82f6"
      }} />
        <div style={{
        height: "80px",
        width: "40px",
        backgroundColor: "#10b981"
      }} />
        <div style={{
        height: "60px",
        width: "40px",
        backgroundColor: "#ef4444"
      }} />
      </>,
    gap: 16
  }
}`,...e.parameters?.docs?.source}}};const u=["Basic","Grow","AlignEnd"],x=Object.freeze(Object.defineProperty({__proto__:null,AlignEnd:e,Basic:t,Grow:n,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{e as A,t as B,x as G,n as a};
