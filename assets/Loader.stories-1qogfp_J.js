import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as r}from"./Loader-DK2iYCaY.js";const t={title:"Components/Loading States/Loader",component:r,tags:[],argTypes:{variant:{control:"select",options:["bars","dots","pulse"]},color:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},size:{control:"radio",options:["sm","md","lg"]}}},n={args:{variant:"bars",color:"primary",size:"md"},render:s=>e.jsx(r,{...s})},a={render:s=>e.jsxs("div",{style:{display:"flex",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...s,variant:"bars"}),e.jsx("span",{style:{fontSize:"12px",color:"var(--wim-color-text-secondary)"},children:"bars"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...s,variant:"dots"}),e.jsx("span",{style:{fontSize:"12px",color:"var(--wim-color-text-secondary)"},children:"dots"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...s,variant:"pulse"}),e.jsx("span",{style:{fontSize:"12px",color:"var(--wim-color-text-secondary)"},children:"pulse"})]})]})},o={render:s=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{...s,color:"primary"}),e.jsx(r,{...s,color:"secondary"}),e.jsx(r,{...s,color:"success"}),e.jsx(r,{...s,color:"warning"}),e.jsx(r,{...s,color:"error"}),e.jsx(r,{...s,color:"neutral"})]})},i={render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{...s,variant:"bars",size:"sm"}),e.jsx(r,{...s,variant:"bars",size:"md"}),e.jsx(r,{...s,variant:"bars",size:"lg"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{...s,variant:"dots",size:"sm"}),e.jsx(r,{...s,variant:"dots",size:"md"}),e.jsx(r,{...s,variant:"dots",size:"lg"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",height:"48px"},children:[e.jsx(r,{...s,variant:"pulse",size:"sm"}),e.jsx(r,{...s,variant:"pulse",size:"md"}),e.jsx(r,{...s,variant:"pulse",size:"lg"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "bars",
    color: "primary",
    size: "md"
  },
  render: args => <Loader {...args} />
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        <Loader {...args} variant="bars" size="sm" />
        <Loader {...args} variant="bars" size="md" />
        <Loader {...args} variant="bars" size="lg" />
      </div>
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center"
    }}>
        <Loader {...args} variant="dots" size="sm" />
        <Loader {...args} variant="dots" size="md" />
        <Loader {...args} variant="dots" size="lg" />
      </div>
      <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center",
      height: "48px"
    }}>
        <Loader {...args} variant="pulse" size="sm" />
        <Loader {...args} variant="pulse" size="md" />
        <Loader {...args} variant="pulse" size="lg" />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const l=["Default","Variants","Colors","Sizes"],p=Object.freeze(Object.defineProperty({__proto__:null,Colors:o,Default:n,Sizes:i,Variants:a,__namedExportsOrder:l,default:t},Symbol.toStringTag,{value:"Module"}));export{o as C,n as D,p as L,i as S,a as V};
