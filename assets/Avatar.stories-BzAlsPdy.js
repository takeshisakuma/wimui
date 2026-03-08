import{j as r}from"./jsx-runtime-u17CrQMm.js";import{A as s}from"./Avatar-BrXbYWRK.js";import{u as p}from"./useTranslation-C_sUcuQ0.js";const m={title:"Components/Data Indicators/Avatar",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},shape:{control:"radio",options:["circle","rounded"]},color:{control:"select",options:["primary","secondary","neutral","error","success"]}}},e={render:function(l){const{t:d}=p(["docs","common","components"]);return r.jsx(s,{...l,src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120",alt:d("story_avatar_alt")})},args:{}},o={args:{initials:"JD",color:"primary"}},n={render:a=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(s,{...a,size:"sm",initials:"SM",color:"neutral"}),r.jsx(s,{...a,size:"md",initials:"MD",color:"neutral"}),r.jsx(s,{...a,size:"lg",initials:"LG",color:"neutral"})]})},t={render:a=>r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(s,{...a,shape:"circle",initials:"C",color:"secondary"}),r.jsx(s,{...a,shape:"rounded",initials:"R",color:"secondary"})]})},i={render:function(l){const{t:d}=p(["docs","common","components"]);return r.jsx(s,{...l,src:"https://invalid-image-url.com",initials:"FB",alt:d("story_avatar_alt")})},args:{}},c={render:a=>r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(s,{...a,initials:"P",color:"primary"}),r.jsx(s,{...a,initials:"S",color:"secondary"}),r.jsx(s,{...a,initials:"N",color:"neutral"}),r.jsx(s,{...a,initials:"E",color:"error"}),r.jsx(s,{...a,initials:"SU",color:"success"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Avatar {...args} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120" alt={t("story_avatar_alt")} />;
  },
  args: {}
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initials: "JD",
    color: "primary"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <Avatar {...args} size="sm" initials="SM" color="neutral" />\r
      <Avatar {...args} size="md" initials="MD" color="neutral" />\r
      <Avatar {...args} size="lg" initials="LG" color="neutral" />\r
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>\r
      <Avatar {...args} shape="circle" initials="C" color="secondary" />\r
      <Avatar {...args} shape="rounded" initials="R" color="secondary" />\r
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Avatar {...args} src="https://invalid-image-url.com" initials="FB" alt={t("story_avatar_alt")} />;
  },
  args: {}
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const u=["Default","Initials","Sizes","Shapes","Fallback","Colors"],x=Object.freeze(Object.defineProperty({__proto__:null,Colors:c,Default:e,Fallback:i,Initials:o,Shapes:t,Sizes:n,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{x as A,c as C,i as F,n as S,t as a};
