import{j as a}from"./jsx-runtime-u17CrQMm.js";import{A as t}from"./Avatar-CuhPWn_E.js";import{A as p}from"./iframe-B6UUHjqT.js";import{u as m}from"./useTranslation-CvEZa3qJ.js";const u={title:"Components/Data Indicators/Avatar",component:t,parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["sm","md","lg"]},shape:{control:"radio",options:["circle","rounded"]},intent:{control:"select",options:["primary","secondary","neutral","error","success"]}}},e={render:function(c){const{t:d}=m(p);return a.jsx(t,{...c,src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120",alt:d("story.avatar_alt")})},args:{}},s={args:{initials:"JD",intent:"primary"}},n={render:r=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(t,{...r,size:"sm",initials:"SM",intent:"neutral"}),a.jsx(t,{...r,size:"md",initials:"MD",intent:"neutral"}),a.jsx(t,{...r,size:"lg",initials:"LG",intent:"neutral"})]})},i={render:r=>a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(t,{...r,shape:"circle",initials:"C",intent:"secondary"}),a.jsx(t,{...r,shape:"rounded",initials:"R",intent:"secondary"})]})},o={render:function(c){const{t:d}=m(p);return a.jsx(t,{...c,src:"https://invalid-image-url.com",initials:"FB",alt:d("story.avatar_alt")})},args:{}},l={render:r=>a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(t,{...r,initials:"P",intent:"primary"}),a.jsx(t,{...r,initials:"S",intent:"secondary"}),a.jsx(t,{...r,initials:"N",intent:"neutral"}),a.jsx(t,{...r,initials:"E",intent:"error"}),a.jsx(t,{...r,initials:"SU",intent:"success"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Avatar {...args} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120" alt={t("story.avatar_alt")} />;
  },
  args: {}
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initials: "JD",
    intent: "primary"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Avatar {...args} size="sm" initials="SM" intent="neutral" />
      <Avatar {...args} size="md" initials="MD" intent="neutral" />
      <Avatar {...args} size="lg" initials="LG" intent="neutral" />
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Avatar {...args} shape="circle" initials="C" intent="secondary" />
      <Avatar {...args} shape="rounded" initials="R" intent="secondary" />
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Avatar {...args} src="https://invalid-image-url.com" initials="FB" alt={t("story.avatar_alt")} />;
  },
  args: {}
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Avatar {...args} initials="P" intent="primary" />
      <Avatar {...args} initials="S" intent="secondary" />
      <Avatar {...args} initials="N" intent="neutral" />
      <Avatar {...args} initials="E" intent="error" />
      <Avatar {...args} initials="SU" intent="success" />
    </div>
}`,...l.parameters?.docs?.source}}};const g=["Default","Initials","Sizes","Shapes","Fallback","Colors"],A=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:e,Fallback:o,Initials:s,Shapes:i,Sizes:n,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{A,l as C,o as F,n as S,i as a};
