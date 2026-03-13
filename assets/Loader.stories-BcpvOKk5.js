import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as s}from"./Loader-CEtef1oA.js";const o={title:"Components/Loading States/Loader",component:s,tags:[],argTypes:{variant:{control:"select",options:["bars","dots","pulse"]},color:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},size:{control:"select",options:["small","medium","large","xlarge"]}}},a={args:{variant:"bars",color:"primary",size:"medium"},render:r=>e.jsx(s,{...r})},n={render:r=>e.jsxs("div",{style:{display:"flex",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(s,{...r,variant:"bars"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"bars"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(s,{...r,variant:"dots"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"dots"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(s,{...r,variant:"pulse"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"pulse"})]})]})},i={render:r=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{...r,color:"primary"}),e.jsx(s,{...r,color:"secondary"}),e.jsx(s,{...r,color:"success"}),e.jsx(s,{...r,color:"warning"}),e.jsx(s,{...r,color:"error"}),e.jsx(s,{...r,color:"neutral"})]})},l={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{...r,variant:"bars",size:"small"}),e.jsx(s,{...r,variant:"bars",size:"medium"}),e.jsx(s,{...r,variant:"bars",size:"large"}),e.jsx(s,{...r,variant:"bars",size:"xlarge"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{...r,variant:"dots",size:"small"}),e.jsx(s,{...r,variant:"dots",size:"medium"}),e.jsx(s,{...r,variant:"dots",size:"large"}),e.jsx(s,{...r,variant:"dots",size:"xlarge"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",height:"48px"},children:[e.jsx(s,{...r,variant:"pulse",size:"small"}),e.jsx(s,{...r,variant:"pulse",size:"medium"}),e.jsx(s,{...r,variant:"pulse",size:"large"}),e.jsx(s,{...r,variant:"pulse",size:"xlarge"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "bars",
    color: "primary",
    size: "medium"
  },
  render: args => <Loader {...args} />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "48px",
    alignItems: "center"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>\r
        <Loader {...args} variant="bars" />\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>bars</span>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>\r
        <Loader {...args} variant="dots" />\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>dots</span>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>\r
        <Loader {...args} variant="pulse" />\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>pulse</span>\r
      </div>\r
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>\r
      <Loader {...args} color="primary" />\r
      <Loader {...args} color="secondary" />\r
      <Loader {...args} color="success" />\r
      <Loader {...args} color="warning" />\r
      <Loader {...args} color="error" />\r
      <Loader {...args} color="neutral" />\r
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>\r
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center"
    }}>\r
        <Loader {...args} variant="bars" size="small" />\r
        <Loader {...args} variant="bars" size="medium" />\r
        <Loader {...args} variant="bars" size="large" />\r
        <Loader {...args} variant="bars" size="xlarge" />\r
      </div>\r
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center"
    }}>\r
        <Loader {...args} variant="dots" size="small" />\r
        <Loader {...args} variant="dots" size="medium" />\r
        <Loader {...args} variant="dots" size="large" />\r
        <Loader {...args} variant="dots" size="xlarge" />\r
      </div>\r
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center",
      height: "48px"
    }}>\r
        <Loader {...args} variant="pulse" size="small" />\r
        <Loader {...args} variant="pulse" size="medium" />\r
        <Loader {...args} variant="pulse" size="large" />\r
        <Loader {...args} variant="pulse" size="xlarge" />\r
      </div>\r
    </div>
}`,...l.parameters?.docs?.source}}};const t=["Default","Variants","Colors","Sizes"],c=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:a,Sizes:l,Variants:n,__namedExportsOrder:t,default:o},Symbol.toStringTag,{value:"Module"}));export{i as C,a as D,c as L,l as S,n as V};
