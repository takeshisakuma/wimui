import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as c}from"./Grid-ve8PDx8Q.js";const a={title:"Component/Layout/Grid",component:c,tags:[],argTypes:{cols:{control:"text"},rows:{control:"text"},gap:{control:"text"},align:{control:"select",options:["start","center","end","stretch"]},justify:{control:"select",options:["start","center","end","between","around","stretch"]},flow:{control:"select",options:["row","column","dense","row dense","column dense"]}}},o=({children:s,color:t="#3b82f6"})=>r.jsx("div",{style:{backgroundColor:t,color:"white",padding:"20px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},children:s}),e={args:{cols:3,gap:16,children:r.jsxs(r.Fragment,{children:[r.jsx(o,{children:"1"}),r.jsx(o,{children:"2"}),r.jsx(o,{children:"3"}),r.jsx(o,{children:"4"}),r.jsx(o,{children:"5"}),r.jsx(o,{children:"6"})]})}},n={args:{cols:"1fr 2fr 1fr",gap:"1rem",children:r.jsxs(r.Fragment,{children:[r.jsx(o,{children:"1fr"}),r.jsx(o,{children:"2fr"}),r.jsx(o,{children:"1fr"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: 16,
    children: <>\r
                <Box>1</Box>\r
                <Box>2</Box>\r
                <Box>3</Box>\r
                <Box>4</Box>\r
                <Box>5</Box>\r
                <Box>6</Box>\r
            </>
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    cols: "1fr 2fr 1fr",
    gap: "1rem",
    children: <>\r
                <Box>1fr</Box>\r
                <Box>2fr</Box>\r
                <Box>1fr</Box>\r
            </>
  }
}`,...n.parameters?.docs?.source}}};const l=["Basic","CustomColumns"],x=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,CustomColumns:n,__namedExportsOrder:l,default:a},Symbol.toStringTag,{value:"Module"}));export{e as B,n as C,x as G};
