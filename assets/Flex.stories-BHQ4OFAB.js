import{j as r}from"./jsx-runtime-u17CrQMm.js";import{F as l}from"./Flex-BWfZwsuO.js";const d={title:"Component/Layout/Flex",component:l,tags:[],argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"]},align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly","stretch"]},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},gap:{control:"text"},inline:{control:"boolean"}}},e=({children:t,color:a="#3b82f6"})=>r.jsx("div",{style:{backgroundColor:a,color:"white",padding:"20px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",minWidth:"60px"},children:t}),o={args:{direction:"row",gap:16,children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"1"}),r.jsx(e,{color:"#10b981",children:"2"}),r.jsx(e,{color:"#f59e0b",children:"3"})]})}},n={args:{direction:"column",gap:"1rem",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Item 1"}),r.jsx(e,{color:"#10b981",children:"Item 2"}),r.jsx(e,{color:"#ef4444",children:"Item 3"})]})}},s={args:{justify:"between",gap:16,style:{width:"100%",border:"1px solid #ddd",padding:"10px"},children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Left"}),r.jsx(e,{color:"#8b5cf6",children:"Middle"}),r.jsx(e,{color:"#ec4899",children:"Right"})]})}},c={args:{wrap:"wrap",gap:16,style:{width:"200px",padding:"10px",border:"1px solid #ccc"},children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"1"}),r.jsx(e,{color:"#10b981",children:"2"}),r.jsx(e,{color:"#f59e0b",children:"3"}),r.jsx(e,{color:"#ef4444",children:"4"}),r.jsx(e,{color:"#8b5cf6",children:"5"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "row",
    gap: 16,
    children: <>\r
                <Box>1</Box>\r
                <Box color="#10b981">2</Box>\r
                <Box color="#f59e0b">3</Box>\r
            </>
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "column",
    gap: "1rem",
    children: <>\r
                <Box>Item 1</Box>\r
                <Box color="#10b981">Item 2</Box>\r
                <Box color="#ef4444">Item 3</Box>\r
            </>
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    justify: "between",
    gap: 16,
    style: {
      width: "100%",
      border: "1px solid #ddd",
      padding: "10px"
    },
    children: <>\r
                <Box>Left</Box>\r
                <Box color="#8b5cf6">Middle</Box>\r
                <Box color="#ec4899">Right</Box>\r
            </>
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    wrap: "wrap",
    gap: 16,
    style: {
      width: "200px",
      padding: "10px",
      border: "1px solid #ccc"
    },
    children: <>\r
                <Box>1</Box>\r
                <Box color="#10b981">2</Box>\r
                <Box color="#f59e0b">3</Box>\r
                <Box color="#ef4444">4</Box>\r
                <Box color="#8b5cf6">5</Box>\r
            </>
  }
}`,...c.parameters?.docs?.source}}};const i=["Basic","Column","JustifyBetween","Wrapped"],m=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Column:n,JustifyBetween:s,Wrapped:c,__namedExportsOrder:i,default:d},Symbol.toStringTag,{value:"Module"}));export{o as B,n as C,m as F,s as J,c as W};
