import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as i}from"./Group-CSCq7BxT.js";import{B as s}from"./Button-D9t59Z9X.js";import{u as p}from"./useTranslation-DspkRMCK.js";const d={title:"Components/Layout/Group",component:i,tags:[],argTypes:{align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},gap:{control:"text"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},grow:{control:"boolean"}}},n={render:function(a){const{t:o}=p(["docs","common","components"]);return r.jsxs(i,{...a,children:[r.jsx(s,{label:o("story_group_first","First"),priority:"primary"}),r.jsx(s,{label:o("story_group_second","Second"),priority:"secondary"}),r.jsx(s,{label:o("story_group_third","Third"),priority:"tertiary"})]})},args:{gap:16}},t={render:function(a){const{t:o}=p(["docs","common","components"]);return r.jsxs(i,{...a,children:[r.jsx(s,{label:o("story_group_first","First"),priority:"primary"}),r.jsx(s,{label:o("story_group_second","Second"),priority:"secondary"})]})},args:{grow:!0,gap:16}},e={args:{align:"end",children:r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{height:"40px",width:"40px",backgroundColor:"#3b82f6"}}),r.jsx("div",{style:{height:"80px",width:"40px",backgroundColor:"#10b981"}}),r.jsx("div",{style:{height:"60px",width:"40px",backgroundColor:"#ef4444"}})]}),gap:16}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Group {...args}>\r
        <Button label={t("story_group_first", "First")} priority="primary" />\r
        <Button label={t("story_group_second", "Second")} priority="secondary" />\r
        <Button label={t("story_group_third", "Third")} priority="tertiary" />\r
      </Group>;
  },
  args: {
    gap: 16
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Group {...args}>\r
        <Button label={t("story_group_first", "First")} priority="primary" />\r
        <Button label={t("story_group_second", "Second")} priority="secondary" />\r
      </Group>;
  },
  args: {
    grow: true,
    gap: 16
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    align: "end",
    children: <>\r
        <div style={{
        height: "40px",
        width: "40px",
        backgroundColor: "#3b82f6"
      }} />\r
        <div style={{
        height: "80px",
        width: "40px",
        backgroundColor: "#10b981"
      }} />\r
        <div style={{
        height: "60px",
        width: "40px",
        backgroundColor: "#ef4444"
      }} />\r
      </>,
    gap: 16
  }
}`,...e.parameters?.docs?.source}}};const l=["Basic","Grow","AlignEnd"],h=Object.freeze(Object.defineProperty({__proto__:null,AlignEnd:e,Basic:n,Grow:t,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{e as A,n as B,h as G,t as a};
