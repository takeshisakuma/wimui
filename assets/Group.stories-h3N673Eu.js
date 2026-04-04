import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as i}from"./Group-BGPhISSW.js";import{B as s}from"./Button-DpdSyJ8P.js";import{A as d}from"./iframe-9NEVSgmA.js";import{u as c}from"./useTranslation-7ChDnO1a.js";const p={title:"Components/Layout/Group",component:i,tags:[],argTypes:{align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},gap:{control:"text"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},grow:{control:"boolean"}}},t={render:function(a){const{t:n}=c(d);return r.jsxs(i,{...a,children:[r.jsx(s,{variant:"filled",children:n("story.group_first","First")}),r.jsx(s,{variant:"outline",children:n("story.group_second","Second")}),r.jsx(s,{variant:"ghost",children:n("story.group_third","Third")})]})},args:{gap:16}},o={render:function(a){const{t:n}=c(d);return r.jsxs(i,{...a,children:[r.jsx(s,{variant:"filled",children:n("story.group_first","First")}),r.jsx(s,{variant:"outline",children:n("story.group_second","Second")})]})},args:{grow:!0,gap:16}},e={args:{align:"end",children:r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{height:"40px",width:"40px",backgroundColor:"#3b82f6"}}),r.jsx("div",{style:{height:"80px",width:"40px",backgroundColor:"#10b981"}}),r.jsx("div",{style:{height:"60px",width:"40px",backgroundColor:"#ef4444"}})]}),gap:16}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Group {...args}>
        <Button variant="filled">{t("story.group_first", "First")}</Button>
        <Button variant="outline">{t("story.group_second", "Second")}</Button>
        <Button variant="ghost">{t("story.group_third", "Third")}</Button>
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
        <Button variant="filled">{t("story.group_first", "First")}</Button>
        <Button variant="outline">{t("story.group_second", "Second")}</Button>
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
}`,...e.parameters?.docs?.source}}};const l=["Basic","Grow","AlignEnd"],y=Object.freeze(Object.defineProperty({__proto__:null,AlignEnd:e,Basic:t,Grow:o,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{e as A,t as B,y as G,o as a};
