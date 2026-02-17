import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as a}from"./Group-ClDoGbh_.js";import{B as t}from"./Button-CtoyR0Qr.js";const s={title:"Component/Layout/Group",component:a,tags:[],argTypes:{align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},gap:{control:"text"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},grow:{control:"boolean"}}},e={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(t,{label:"First",priority:"primary"}),r.jsx(t,{label:"Second",priority:"secondary"}),r.jsx(t,{label:"Third",priority:"tertiary"})]}),gap:16}},o={args:{grow:!0,children:r.jsxs(r.Fragment,{children:[r.jsx(t,{label:"First",priority:"primary"}),r.jsx(t,{label:"Second",priority:"secondary"})]}),gap:16}},n={args:{align:"end",children:r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{height:"40px",width:"40px",backgroundColor:"#3b82f6"}}),r.jsx("div",{style:{height:"80px",width:"40px",backgroundColor:"#10b981"}}),r.jsx("div",{style:{height:"60px",width:"40px",backgroundColor:"#ef4444"}})]}),gap:16}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <Button label="First" priority="primary" />\r
                <Button label="Second" priority="secondary" />\r
                <Button label="Third" priority="tertiary" />\r
            </>,
    gap: 16
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    grow: true,
    children: <>\r
                <Button label="First" priority="primary" />\r
                <Button label="Second" priority="secondary" />\r
            </>,
    gap: 16
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const i=["Basic","Grow","AlignEnd"],d=Object.freeze(Object.defineProperty({__proto__:null,AlignEnd:n,Basic:e,Grow:o,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{n as A,e as B,d as G,o as a};
