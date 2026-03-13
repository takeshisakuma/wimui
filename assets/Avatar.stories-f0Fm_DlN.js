import{j as s}from"./jsx-runtime-u17CrQMm.js";import{A as r}from"./Avatar-DbRAkOU0.js";import{u}from"./useTranslation-DVQ5refS.js";const p={title:"Components/Data Indicators/Avatar",component:r,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]},shape:{control:"radio",options:["circle","rounded"]},status:{control:"select",options:["primary","secondary","neutral","error","success"]}}},t={render:function(d){const{t:l}=u(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(r,{...d,src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120",alt:l("story_avatar_alt")})},args:{}},e={args:{initials:"JD",status:"primary"}},o={render:a=>s.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[s.jsx(r,{...a,size:"small",initials:"SM",status:"neutral"}),s.jsx(r,{...a,size:"medium",initials:"MD",status:"neutral"}),s.jsx(r,{...a,size:"large",initials:"LG",status:"neutral"})]})},n={render:a=>s.jsxs("div",{style:{display:"flex",gap:"16px"},children:[s.jsx(r,{...a,shape:"circle",initials:"C",status:"secondary"}),s.jsx(r,{...a,shape:"rounded",initials:"R",status:"secondary"})]})},i={render:function(d){const{t:l}=u(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(r,{...d,src:"https://invalid-image-url.com",initials:"FB",alt:l("story_avatar_alt")})},args:{}},c={render:a=>s.jsxs("div",{style:{display:"flex",gap:"16px"},children:[s.jsx(r,{...a,initials:"P",status:"primary"}),s.jsx(r,{...a,initials:"S",status:"secondary"}),s.jsx(r,{...a,initials:"N",status:"neutral"}),s.jsx(r,{...a,initials:"E",status:"error"}),s.jsx(r,{...a,initials:"SU",status:"success"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Avatar {...args} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120" alt={t("story_avatar_alt")} />;
  },
  args: {}
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    initials: "JD",
    status: "primary"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <Avatar {...args} size="small" initials="SM" status="neutral" />\r
      <Avatar {...args} size="medium" initials="MD" status="neutral" />\r
      <Avatar {...args} size="large" initials="LG" status="neutral" />\r
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>\r
      <Avatar {...args} shape="circle" initials="C" status="secondary" />\r
      <Avatar {...args} shape="rounded" initials="R" status="secondary" />\r
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Avatar {...args} src="https://invalid-image-url.com" initials="FB" alt={t("story_avatar_alt")} />;
  },
  args: {}
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>\r
      <Avatar {...args} initials="P" status="primary" />\r
      <Avatar {...args} initials="S" status="secondary" />\r
      <Avatar {...args} initials="N" status="neutral" />\r
      <Avatar {...args} initials="E" status="error" />\r
      <Avatar {...args} initials="SU" status="success" />\r
    </div>
}`,...c.parameters?.docs?.source}}};const m=["Default","Initials","Sizes","Shapes","Fallback","Colors"],v=Object.freeze(Object.defineProperty({__proto__:null,Colors:c,Default:t,Fallback:i,Initials:e,Shapes:n,Sizes:o,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{v as A,c as C,i as F,o as S,n as a};
