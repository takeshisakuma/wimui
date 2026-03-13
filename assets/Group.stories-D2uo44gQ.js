import{j as o}from"./jsx-runtime-u17CrQMm.js";import{G as i}from"./Group-DMCneKho.js";import{B as e}from"./Button-TACQNaJI.js";import{u as c}from"./useTranslation-DVQ5refS.js";const p={title:"Components/Layout/Group",component:i,tags:[],argTypes:{align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},gap:{control:"text"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},grow:{control:"boolean"}}},s={render:function(a){const{t:r}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(i,{...a,children:[o.jsx(e,{label:r("story_group_first","First"),priority:"primary"}),o.jsx(e,{label:r("story_group_second","Second"),priority:"secondary"}),o.jsx(e,{label:r("story_group_third","Third"),priority:"tertiary"})]})},args:{gap:16}},n={render:function(a){const{t:r}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(i,{...a,children:[o.jsx(e,{label:r("story_group_first","First"),priority:"primary"}),o.jsx(e,{label:r("story_group_second","Second"),priority:"secondary"})]})},args:{grow:!0,gap:16}},t={args:{align:"end",children:o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{height:"40px",width:"40px",backgroundColor:"#3b82f6"}}),o.jsx("div",{style:{height:"80px",width:"40px",backgroundColor:"#10b981"}}),o.jsx("div",{style:{height:"60px",width:"40px",backgroundColor:"#ef4444"}})]}),gap:16}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Group {...args}>\r
        <Button label={t("story_group_first", "First")} priority="primary" />\r
        <Button label={t("story_group_second", "Second")} priority="secondary" />\r
        <Button label={t("story_group_third", "Third")} priority="tertiary" />\r
      </Group>;
  },
  args: {
    gap: 16
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Group {...args}>\r
        <Button label={t("story_group_first", "First")} priority="primary" />\r
        <Button label={t("story_group_second", "Second")} priority="secondary" />\r
      </Group>;
  },
  args: {
    grow: true,
    gap: 16
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const l=["Basic","Grow","AlignEnd"],m=Object.freeze(Object.defineProperty({__proto__:null,AlignEnd:t,Basic:s,Grow:n,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{t as A,s as B,m as G,n as a};
