import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./Spinner-9iIuB5nx.js";const t={title:"Component/Loading States/Spinner",component:n,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},size:{control:"select",options:["sm","md","lg","xl"]},labelPosition:{control:"radio",options:["right","bottom"]}}},s={args:{label:"Loading..."},render:r=>e.jsx(n,{...r})},o={render:r=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(n,{...r,color:"primary"}),e.jsx(n,{...r,color:"secondary"}),e.jsx(n,{...r,color:"success"}),e.jsx(n,{...r,color:"warning"}),e.jsx(n,{...r,color:"error"}),e.jsx(n,{...r,color:"neutral"})]})},a={render:r=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(n,{...r,size:"sm"}),e.jsx(n,{...r,size:"md"}),e.jsx(n,{...r,size:"lg"}),e.jsx(n,{...r,size:"xl"})]})},i={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx(n,{...r,label:"Loading right...",labelPosition:"right"}),e.jsx(n,{...r,label:"Loading bottom...",labelPosition:"bottom"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Loading..."
  },
  render: args => <Spinner {...args} />
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>\r
            <Spinner {...args} color="primary" />\r
            <Spinner {...args} color="secondary" />\r
            <Spinner {...args} color="success" />\r
            <Spinner {...args} color="warning" />\r
            <Spinner {...args} color="error" />\r
            <Spinner {...args} color="neutral" />\r
        </div>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>\r
            <Spinner {...args} size="sm" />\r
            <Spinner {...args} size="md" />\r
            <Spinner {...args} size="lg" />\r
            <Spinner {...args} size="xl" />\r
        </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>\r
            <Spinner {...args} label="Loading right..." labelPosition="right" />\r
            <Spinner {...args} label="Loading bottom..." labelPosition="bottom" />\r
        </div>
}`,...i.parameters?.docs?.source}}};const l=["Default","Colors","Sizes","WithLabel"],d=Object.freeze(Object.defineProperty({__proto__:null,Colors:o,Default:s,Sizes:a,WithLabel:i,__namedExportsOrder:l,default:t},Symbol.toStringTag,{value:"Module"}));export{o as C,s as D,d as S,i as W,a};
