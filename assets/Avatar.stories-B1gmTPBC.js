import{j as r}from"./jsx-runtime-u17CrQMm.js";import{A as a}from"./Avatar-lgjxmfDB.js";const c={title:"Component/Data Indicators/Avatar",component:a,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},shape:{control:"radio",options:["circle","rounded"]},color:{control:"select",options:["primary","secondary","neutral","error","success"]}}},e={args:{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120",alt:"User"}},o={args:{initials:"JD",color:"primary"}},i={render:s=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(a,{...s,size:"sm",initials:"SM",color:"neutral"}),r.jsx(a,{...s,size:"md",initials:"MD",color:"neutral"}),r.jsx(a,{...s,size:"lg",initials:"LG",color:"neutral"})]})},t={render:s=>r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(a,{...s,shape:"circle",initials:"C",color:"secondary"}),r.jsx(a,{...s,shape:"rounded",initials:"R",color:"secondary"})]})},n={args:{src:"https://invalid-image-url.com",initials:"FB"}},l={render:s=>r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(a,{...s,initials:"P",color:"primary"}),r.jsx(a,{...s,initials:"S",color:"secondary"}),r.jsx(a,{...s,initials:"N",color:"neutral"}),r.jsx(a,{...s,initials:"E",color:"error"}),r.jsx(a,{...s,initials:"SU",color:"success"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120",
    alt: "User"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initials: "JD",
    color: "primary"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
            <Avatar {...args} size="sm" initials="SM" color="neutral" />\r
            <Avatar {...args} size="md" initials="MD" color="neutral" />\r
            <Avatar {...args} size="lg" initials="LG" color="neutral" />\r
        </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>\r
            <Avatar {...args} shape="circle" initials="C" color="secondary" />\r
            <Avatar {...args} shape="rounded" initials="R" color="secondary" />\r
        </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://invalid-image-url.com",
    initials: "FB"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>\r
            <Avatar {...args} initials="P" color="primary" />\r
            <Avatar {...args} initials="S" color="secondary" />\r
            <Avatar {...args} initials="N" color="neutral" />\r
            <Avatar {...args} initials="E" color="error" />\r
            <Avatar {...args} initials="SU" color="success" />\r
        </div>
}`,...l.parameters?.docs?.source}}};const p=["Default","Initials","Sizes","Shapes","Fallback","Colors"],u=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:e,Fallback:n,Initials:o,Shapes:t,Sizes:i,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{u as A,l as C,n as F,i as S,t as a};
