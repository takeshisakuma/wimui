import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as s}from"./Loader-D6xDBKa8.js";const l={title:"Components/Loading States/Loader",component:s,tags:[],argTypes:{variant:{control:"select",options:["bars","dots","pulse"]},color:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},size:{control:"select",options:["small","medium","large"]}}},a={args:{variant:"bars",color:"primary",size:"medium"},render:r=>e.jsx(s,{...r})},n={render:r=>e.jsxs("div",{style:{display:"flex",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(s,{...r,variant:"bars"}),e.jsx("span",{style:{fontSize:"12px",color:"var(--wim-color-text-secondary)"},children:"bars"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(s,{...r,variant:"dots"}),e.jsx("span",{style:{fontSize:"12px",color:"var(--wim-color-text-secondary)"},children:"dots"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(s,{...r,variant:"pulse"}),e.jsx("span",{style:{fontSize:"12px",color:"var(--wim-color-text-secondary)"},children:"pulse"})]})]})},o={render:r=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{...r,color:"primary"}),e.jsx(s,{...r,color:"secondary"}),e.jsx(s,{...r,color:"success"}),e.jsx(s,{...r,color:"warning"}),e.jsx(s,{...r,color:"error"}),e.jsx(s,{...r,color:"neutral"})]})},i={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{...r,variant:"bars",size:"small"}),e.jsx(s,{...r,variant:"bars",size:"medium"}),e.jsx(s,{...r,variant:"bars",size:"large"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{...r,variant:"dots",size:"small"}),e.jsx(s,{...r,variant:"dots",size:"medium"}),e.jsx(s,{...r,variant:"dots",size:"large"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",height:"48px"},children:[e.jsx(s,{...r,variant:"pulse",size:"small"}),e.jsx(s,{...r,variant:"pulse",size:"medium"}),e.jsx(s,{...r,variant:"pulse",size:"large"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>
        <Loader {...args} variant="bars" />
        <span style={{
        fontSize: "12px",
        color: "var(--wim-color-text-secondary)"
      }}>bars</span>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>
        <Loader {...args} variant="dots" />
        <span style={{
        fontSize: "12px",
        color: "var(--wim-color-text-secondary)"
      }}>dots</span>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>
        <Loader {...args} variant="pulse" />
        <span style={{
        fontSize: "12px",
        color: "var(--wim-color-text-secondary)"
      }}>pulse</span>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>
      <Loader {...args} color="primary" />
      <Loader {...args} color="secondary" />
      <Loader {...args} color="success" />
      <Loader {...args} color="warning" />
      <Loader {...args} color="error" />
      <Loader {...args} color="neutral" />
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center"
    }}>
        <Loader {...args} variant="bars" size="small" />
        <Loader {...args} variant="bars" size="medium" />
        <Loader {...args} variant="bars" size="large" />
      </div>
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center"
    }}>
        <Loader {...args} variant="dots" size="small" />
        <Loader {...args} variant="dots" size="medium" />
        <Loader {...args} variant="dots" size="large" />
      </div>
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center",
      height: "48px"
    }}>
        <Loader {...args} variant="pulse" size="small" />
        <Loader {...args} variant="pulse" size="medium" />
        <Loader {...args} variant="pulse" size="large" />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const t=["Default","Variants","Colors","Sizes"],p=Object.freeze(Object.defineProperty({__proto__:null,Colors:o,Default:a,Sizes:i,Variants:n,__namedExportsOrder:t,default:l},Symbol.toStringTag,{value:"Module"}));export{o as C,a as D,p as L,i as S,n as V};
