import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as r}from"./Loader-CGa4knB7.js";const o={title:"Components/Loading States/Loader",component:r,tags:[],argTypes:{variant:{control:"select",options:["bars","dots","pulse"]},color:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},size:{control:"select",options:["small","medium","large","xlarge"]}}},a={args:{variant:"bars",color:"primary",size:"medium"},render:s=>e.jsx(r,{...s})},n={render:s=>e.jsxs("div",{style:{display:"flex",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...s,variant:"bars"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"bars"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...s,variant:"dots"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"dots"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...s,variant:"pulse"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"pulse"})]})]})},i={render:s=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{...s,color:"primary"}),e.jsx(r,{...s,color:"secondary"}),e.jsx(r,{...s,color:"success"}),e.jsx(r,{...s,color:"warning"}),e.jsx(r,{...s,color:"error"}),e.jsx(r,{...s,color:"neutral"})]})},l={render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{...s,variant:"bars",size:"small"}),e.jsx(r,{...s,variant:"bars",size:"medium"}),e.jsx(r,{...s,variant:"bars",size:"large"}),e.jsx(r,{...s,variant:"bars",size:"xlarge"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{...s,variant:"dots",size:"small"}),e.jsx(r,{...s,variant:"dots",size:"medium"}),e.jsx(r,{...s,variant:"dots",size:"large"}),e.jsx(r,{...s,variant:"dots",size:"xlarge"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",height:"48px"},children:[e.jsx(r,{...s,variant:"pulse",size:"small"}),e.jsx(r,{...s,variant:"pulse",size:"medium"}),e.jsx(r,{...s,variant:"pulse",size:"large"}),e.jsx(r,{...s,variant:"pulse",size:"xlarge"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        color: "#666"
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
        color: "#666"
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
        color: "#666"
      }}>pulse</span>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        <Loader {...args} variant="bars" size="xlarge" />
      </div>
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center"
    }}>
        <Loader {...args} variant="dots" size="small" />
        <Loader {...args} variant="dots" size="medium" />
        <Loader {...args} variant="dots" size="large" />
        <Loader {...args} variant="dots" size="xlarge" />
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
        <Loader {...args} variant="pulse" size="xlarge" />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const t=["Default","Variants","Colors","Sizes"],c=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:a,Sizes:l,Variants:n,__namedExportsOrder:t,default:o},Symbol.toStringTag,{value:"Module"}));export{i as C,a as D,c as L,l as S,n as V};
