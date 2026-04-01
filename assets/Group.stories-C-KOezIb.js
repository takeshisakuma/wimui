import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as i}from"./Group-CQOVJp2Y.js";import{B as s}from"./Button-WhULyPrs.js";import{A as l}from"./iframe-BJM4gxzT.js";import{u as d}from"./useTranslation-lqMBbyXx.js";const c={title:"Components/Layout/Group",component:i,tags:[],argTypes:{align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},gap:{control:"text"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},grow:{control:"boolean"}}},t={render:function(a){const{t:n}=d(l);return r.jsxs(i,{...a,children:[r.jsx(s,{label:n("story.group_first","First"),variant:"filled"}),r.jsx(s,{label:n("story.group_second","Second"),variant:"outlined"}),r.jsx(s,{label:n("story.group_third","Third"),variant:"ghost"})]})},args:{gap:16}},o={render:function(a){const{t:n}=d(l);return r.jsxs(i,{...a,children:[r.jsx(s,{label:n("story.group_first","First"),variant:"filled"}),r.jsx(s,{label:n("story.group_second","Second"),variant:"outlined"})]})},args:{grow:!0,gap:16}},e={args:{align:"end",children:r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{height:"40px",width:"40px",backgroundColor:"#3b82f6"}}),r.jsx("div",{style:{height:"80px",width:"40px",backgroundColor:"#10b981"}}),r.jsx("div",{style:{height:"60px",width:"40px",backgroundColor:"#ef4444"}})]}),gap:16}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Group {...args}>
        <Button label={t("story.group_first", "First")} variant="filled" />
        <Button label={t("story.group_second", "Second")} variant="outlined" />
        <Button label={t("story.group_third", "Third")} variant="ghost" />
      </Group>;
  },
  args: {
    gap: 16
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Group {...args}>
        <Button label={t("story.group_first", "First")} variant="filled" />
        <Button label={t("story.group_second", "Second")} variant="outlined" />
      </Group>;
  },
  args: {
    grow: true,
    gap: 16
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const u=["Basic","Grow","AlignEnd"],f=Object.freeze(Object.defineProperty({__proto__:null,AlignEnd:e,Basic:t,Grow:o,__namedExportsOrder:u,default:c},Symbol.toStringTag,{value:"Module"}));export{e as A,t as B,f as G,o as a};
