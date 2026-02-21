import{j as r}from"./jsx-runtime-u17CrQMm.js";import{L as s}from"./Loader-ex48AUJf.js";const t={title:"Component/Loading States/Loader",component:s,tags:[],argTypes:{variant:{control:"select",options:["bars","dots","pulse"]},color:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},size:{control:"select",options:["sm","md","lg","xl"]}}},n={args:{variant:"bars",color:"primary",size:"md"},render:e=>r.jsx(s,{...e})},a={render:e=>r.jsxs("div",{style:{display:"flex",gap:"48px",alignItems:"center"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[r.jsx(s,{...e,variant:"bars"}),r.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"bars"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[r.jsx(s,{...e,variant:"dots"}),r.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"dots"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[r.jsx(s,{...e,variant:"pulse"}),r.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"pulse"})]})]})},i={render:e=>r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[r.jsx(s,{...e,color:"primary"}),r.jsx(s,{...e,color:"secondary"}),r.jsx(s,{...e,color:"success"}),r.jsx(s,{...e,color:"warning"}),r.jsx(s,{...e,color:"error"}),r.jsx(s,{...e,color:"neutral"})]})},o={render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[r.jsx(s,{...e,variant:"bars",size:"sm"}),r.jsx(s,{...e,variant:"bars",size:"md"}),r.jsx(s,{...e,variant:"bars",size:"lg"}),r.jsx(s,{...e,variant:"bars",size:"xl"})]}),r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[r.jsx(s,{...e,variant:"dots",size:"sm"}),r.jsx(s,{...e,variant:"dots",size:"md"}),r.jsx(s,{...e,variant:"dots",size:"lg"}),r.jsx(s,{...e,variant:"dots",size:"xl"})]}),r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",height:"48px"},children:[r.jsx(s,{...e,variant:"pulse",size:"sm"}),r.jsx(s,{...e,variant:"pulse",size:"md"}),r.jsx(s,{...e,variant:"pulse",size:"lg"}),r.jsx(s,{...e,variant:"pulse",size:"xl"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
                <Loader {...args} variant="bars" size="sm" />\r
                <Loader {...args} variant="bars" size="md" />\r
                <Loader {...args} variant="bars" size="lg" />\r
                <Loader {...args} variant="bars" size="xl" />\r
            </div>\r
            <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center"
    }}>\r
                <Loader {...args} variant="dots" size="sm" />\r
                <Loader {...args} variant="dots" size="md" />\r
                <Loader {...args} variant="dots" size="lg" />\r
                <Loader {...args} variant="dots" size="xl" />\r
            </div>\r
            <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center",
      height: "48px"
    }}>\r
                <Loader {...args} variant="pulse" size="sm" />\r
                <Loader {...args} variant="pulse" size="md" />\r
                <Loader {...args} variant="pulse" size="lg" />\r
                <Loader {...args} variant="pulse" size="xl" />\r
            </div>\r
        </div>
}`,...o.parameters?.docs?.source}}};const l=["Default","Variants","Colors","Sizes"],c=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:n,Sizes:o,Variants:a,__namedExportsOrder:l,default:t},Symbol.toStringTag,{value:"Module"}));export{i as C,n as D,c as L,o as S,a as V};
