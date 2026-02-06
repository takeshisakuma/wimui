import{j as r}from"./jsx-runtime-u17CrQMm.js";import{A as s}from"./Avatar-U0EP_PwC.js";const l={title:"Component/Data Display/Avatar",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},shape:{control:"radio",options:["circle","rounded"]},color:{control:"select",options:["primary","secondary","neutral","error","success"]}}},a={args:{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120",alt:"User"}},e={args:{initials:"JD",color:"primary"}},o={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(s,{size:"sm",initials:"SM",color:"neutral"}),r.jsx(s,{size:"md",initials:"MD",color:"neutral"}),r.jsx(s,{size:"lg",initials:"LG",color:"neutral"})]})},i={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(s,{shape:"circle",initials:"C",color:"secondary"}),r.jsx(s,{shape:"rounded",initials:"R",color:"secondary"})]})},t={args:{src:"https://invalid-image-url.com",initials:"FB"}},n={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(s,{initials:"P",color:"primary"}),r.jsx(s,{initials:"S",color:"secondary"}),r.jsx(s,{initials:"N",color:"neutral"}),r.jsx(s,{initials:"E",color:"error"}),r.jsx(s,{initials:"SU",color:"success"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120",
    alt: "User"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    initials: "JD",
    color: "primary"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
            <Avatar size="sm" initials="SM" color="neutral" />\r
            <Avatar size="md" initials="MD" color="neutral" />\r
            <Avatar size="lg" initials="LG" color="neutral" />\r
        </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px"
  }}>\r
            <Avatar shape="circle" initials="C" color="secondary" />\r
            <Avatar shape="rounded" initials="R" color="secondary" />\r
        </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://invalid-image-url.com",
    initials: "FB"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px"
  }}>\r
            <Avatar initials="P" color="primary" />\r
            <Avatar initials="S" color="secondary" />\r
            <Avatar initials="N" color="neutral" />\r
            <Avatar initials="E" color="error" />\r
            <Avatar initials="SU" color="success" />\r
        </div>
}`,...n.parameters?.docs?.source}}};const c=["Default","Initials","Sizes","Shapes","Fallback","Colors"],m=Object.freeze(Object.defineProperty({__proto__:null,Colors:n,Default:a,Fallback:t,Initials:e,Shapes:i,Sizes:o,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{m as A,n as C,t as F,o as S,i as a};
