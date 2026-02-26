import{j as s}from"./jsx-runtime-u17CrQMm.js";import{C as a}from"./Container-LkZE9mN0.js";import{B as o}from"./Box-Du3v5Dwr.js";const i={title:"Components/Layout/Container",component:a,tags:[],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]}}},e={args:{children:s.jsx(o,{bg:"#f0f0f0",p:20,style:{border:"1px solid #ccc"},children:"Container content"}),bg:"#f9f9f9"}},r={render:()=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:["xs","sm","md","lg","xl"].map(t=>s.jsx(a,{size:t,bg:"#f8fafc",p:10,children:s.jsxs(o,{bg:"#eff6ff",p:10,style:{textAlign:"center",border:"1px dashed #3b82f6"},children:["Size: ",t]})},t))})},n={args:{fluid:!0,bg:"#f8fafc",children:s.jsx(o,{bg:"#eff6ff",p:20,style:{textAlign:"center",border:"1px dashed #3b82f6"},children:"Fluid Container (100% width)"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Box bg="#f0f0f0" p={20} style={{
      border: "1px solid #ccc"
    }}>\r
        Container content\r
      </Box>,
    bg: "#f9f9f9"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>\r
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Container key={size} size={size} bg="#f8fafc" p={10}>\r
          <Box bg="#eff6ff" p={10} style={{
        textAlign: "center",
        border: "1px dashed #3b82f6"
      }}>\r
            Size: {size}\r
          </Box>\r
        </Container>)}\r
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fluid: true,
    bg: "#f8fafc",
    children: <Box bg="#eff6ff" p={20} style={{
      textAlign: "center",
      border: "1px dashed #3b82f6"
    }}>\r
        Fluid Container (100% width)\r
      </Box>
  }
}`,...n.parameters?.docs?.source}}};const c=["Default","Sizes","Fluid"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Fluid:n,Sizes:r,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{p as C,e as D,n as F,r as S};
