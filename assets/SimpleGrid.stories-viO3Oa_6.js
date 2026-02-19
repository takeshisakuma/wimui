import{j as n}from"./jsx-runtime-u17CrQMm.js";import{S as x}from"./SimpleGrid-KvtCBfA5.js";const c={title:"Component/Layout/SimpleGrid",component:x,tags:[],argTypes:{cols:{control:"object"},spacing:{control:"text"},minChildWidth:{control:"text"}}},r=({children:i})=>n.jsx("div",{style:{backgroundColor:"#10b981",color:"white",padding:"20px",borderRadius:"8px",textAlign:"center",fontWeight:"bold"},children:i}),o={args:{cols:3,spacing:"md",children:n.jsxs(n.Fragment,{children:[n.jsx(r,{children:"1"}),n.jsx(r,{children:"2"}),n.jsx(r,{children:"3"}),n.jsx(r,{children:"4"}),n.jsx(r,{children:"5"})]})}},e={args:{minChildWidth:200,spacing:16,children:n.jsxs(n.Fragment,{children:[n.jsx(r,{children:"Min 200px"}),n.jsx(r,{children:"Min 200px"}),n.jsx(r,{children:"Min 200px"}),n.jsx(r,{children:"Min 200px"}),n.jsx(r,{children:"Min 200px"})]})}},s={args:{cols:{base:1,sm:2,md:3,lg:4},spacing:16,children:n.jsxs(n.Fragment,{children:[n.jsx(r,{children:"1"}),n.jsx(r,{children:"2"}),n.jsx(r,{children:"3"}),n.jsx(r,{children:"4"}),n.jsx(r,{children:"5"}),n.jsx(r,{children:"6"}),n.jsx(r,{children:"7"}),n.jsx(r,{children:"8"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    spacing: "md",
    children: <>\r
                <Box>1</Box>\r
                <Box>2</Box>\r
                <Box>3</Box>\r
                <Box>4</Box>\r
                <Box>5</Box>\r
            </>
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    minChildWidth: 200,
    spacing: 16,
    children: <>\r
                <Box>Min 200px</Box>\r
                <Box>Min 200px</Box>\r
                <Box>Min 200px</Box>\r
                <Box>Min 200px</Box>\r
                <Box>Min 200px</Box>\r
            </>
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    cols: {
      base: 1,
      sm: 2,
      md: 3,
      lg: 4
    },
    spacing: 16,
    children: <>\r
                <Box>1</Box>\r
                <Box>2</Box>\r
                <Box>3</Box>\r
                <Box>4</Box>\r
                <Box>5</Box>\r
                <Box>6</Box>\r
                <Box>7</Box>\r
                <Box>8</Box>\r
            </>
  }
}`,...s.parameters?.docs?.source}}};const a=["FixedColumns","ResponsiveAuto","ResponsiveBreakpoints"],l=Object.freeze(Object.defineProperty({__proto__:null,FixedColumns:o,ResponsiveAuto:e,ResponsiveBreakpoints:s,__namedExportsOrder:a,default:c},Symbol.toStringTag,{value:"Module"}));export{o as F,e as R,l as S,s as a};
