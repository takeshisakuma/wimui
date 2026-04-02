import{j as r}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./Spinner-CDLmlA05.js";const t={title:"Components/Loading States/Spinner",component:n,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},size:{control:"radio",options:["sm","md","lg"]},labelPosition:{control:"radio",options:["right","bottom"]}}},s={args:{label:"Loading..."},render:e=>r.jsx(n,{...e})},o={render:e=>r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[r.jsx(n,{...e,color:"primary"}),r.jsx(n,{...e,color:"secondary"}),r.jsx(n,{...e,color:"success"}),r.jsx(n,{...e,color:"warning"}),r.jsx(n,{...e,color:"error"}),r.jsx(n,{...e,color:"neutral"})]})},a={render:e=>r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[r.jsx(n,{...e,size:"sm"}),r.jsx(n,{...e,size:"md"}),r.jsx(n,{...e,size:"lg"})]})},i={render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsx(n,{...e,label:"Loading right...",labelPosition:"right"}),r.jsx(n,{...e,label:"Loading bottom...",labelPosition:"bottom"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Loading..."
  },
  render: args => <Spinner {...args} />
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>
      <Spinner {...args} color="primary" />
      <Spinner {...args} color="secondary" />
      <Spinner {...args} color="success" />
      <Spinner {...args} color="warning" />
      <Spinner {...args} color="error" />
      <Spinner {...args} color="neutral" />
    </div>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>
      <Spinner {...args} label="Loading right..." labelPosition="right" />
      <Spinner {...args} label="Loading bottom..." labelPosition="bottom" />
    </div>
}`,...i.parameters?.docs?.source}}};const l=["Default","Colors","Sizes","WithLabel"],d=Object.freeze(Object.defineProperty({__proto__:null,Colors:o,Default:s,Sizes:a,WithLabel:i,__namedExportsOrder:l,default:t},Symbol.toStringTag,{value:"Module"}));export{o as C,s as D,d as S,i as W,a};
