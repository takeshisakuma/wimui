import{j as s}from"./jsx-runtime-u17CrQMm.js";import{A as r}from"./Avatar-_ID6qzt7.js";import{A as d}from"./iframe-BKE1Tr9u.js";import{u as p}from"./useTranslation-B4UNbNY1.js";const m={title:"Components/Data Indicators/Avatar",component:r,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]},shape:{control:"radio",options:["circle","rounded"]},status:{control:"select",options:["primary","secondary","neutral","error","success"]}}},t={render:function(c){const{t:u}=p(d);return s.jsx(r,{...c,src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120",alt:u("story_avatar_alt")})},args:{}},e={args:{initials:"JD",status:"primary"}},n={render:a=>s.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[s.jsx(r,{...a,size:"small",initials:"SM",status:"neutral"}),s.jsx(r,{...a,size:"medium",initials:"MD",status:"neutral"}),s.jsx(r,{...a,size:"large",initials:"LG",status:"neutral"})]})},i={render:a=>s.jsxs("div",{style:{display:"flex",gap:"16px"},children:[s.jsx(r,{...a,shape:"circle",initials:"C",status:"secondary"}),s.jsx(r,{...a,shape:"rounded",initials:"R",status:"secondary"})]})},o={render:function(c){const{t:u}=p(d);return s.jsx(r,{...c,src:"https://invalid-image-url.com",initials:"FB",alt:u("story_avatar_alt")})},args:{}},l={render:a=>s.jsxs("div",{style:{display:"flex",gap:"16px"},children:[s.jsx(r,{...a,initials:"P",status:"primary"}),s.jsx(r,{...a,initials:"S",status:"secondary"}),s.jsx(r,{...a,initials:"N",status:"neutral"}),s.jsx(r,{...a,initials:"E",status:"error"}),s.jsx(r,{...a,initials:"SU",status:"success"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Avatar {...args} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120" alt={t("story_avatar_alt")} />;
  },
  args: {}
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    initials: "JD",
    status: "primary"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Avatar {...args} size="small" initials="SM" status="neutral" />
      <Avatar {...args} size="medium" initials="MD" status="neutral" />
      <Avatar {...args} size="large" initials="LG" status="neutral" />
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Avatar {...args} shape="circle" initials="C" status="secondary" />
      <Avatar {...args} shape="rounded" initials="R" status="secondary" />
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Avatar {...args} src="https://invalid-image-url.com" initials="FB" alt={t("story_avatar_alt")} />;
  },
  args: {}
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Avatar {...args} initials="P" status="primary" />
      <Avatar {...args} initials="S" status="secondary" />
      <Avatar {...args} initials="N" status="neutral" />
      <Avatar {...args} initials="E" status="error" />
      <Avatar {...args} initials="SU" status="success" />
    </div>
}`,...l.parameters?.docs?.source}}};const g=["Default","Initials","Sizes","Shapes","Fallback","Colors"],A=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:t,Fallback:o,Initials:e,Shapes:i,Sizes:n,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{A,l as C,o as F,n as S,i as a};
