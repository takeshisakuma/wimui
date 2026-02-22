import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as a}from"./Stack-6KfB6lDJ.js";import{B as r}from"./Box-Bk2y8sgS.js";const d={title:"Component/Layout/Stack",component:a,tags:[],argTypes:{direction:{control:"radio",options:["row","column"]},gap:{control:"select",options:["xs","sm","md","lg","xl",10,20,40]}}},o={args:{direction:"column",gap:"md",children:[e.jsx(r,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:"Item 1"},"1"),e.jsx(r,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:"Item 2"},"2"),e.jsx(r,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:"Item 3"},"3")]}},s={args:{direction:"row",gap:"lg",children:[e.jsx(r,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:"Item 1"},"1"),e.jsx(r,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:"Item 2"},"2"),e.jsx(r,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:"Item 3"},"3")]}},f={render:()=>e.jsxs(a,{gap:"xl",children:[e.jsx(r,{bg:"#f8fafc",p:10,children:"Gap: xl"}),e.jsxs(a,{direction:"row",gap:"xs",children:[e.jsx(r,{bg:"#eff6ff",p:10,children:"Gap: xs"}),e.jsx(r,{bg:"#eff6ff",p:10,children:"Gap: xs"}),e.jsx(r,{bg:"#eff6ff",p:10,children:"Gap: xs"})]}),e.jsxs(a,{direction:"row",gap:"lg",children:[e.jsx(r,{bg:"#f0fdf4",p:10,children:"Gap: lg"}),e.jsx(r,{bg:"#f0fdf4",p:10,children:"Gap: lg"}),e.jsx(r,{bg:"#f0fdf4",p:10,children:"Gap: lg"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "column",
    gap: "md",
    children: [<Box key="1" bg="#eff6ff" p={20} radius={8} style={{
      border: "1px solid #3b82f6"
    }}>Item 1</Box>, <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{
      border: "1px solid #22c55e"
    }}>Item 2</Box>, <Box key="3" bg="#fff7ed" p={20} radius={8} style={{
      border: "1px solid #f97316"
    }}>Item 3</Box>]
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "row",
    gap: "lg",
    children: [<Box key="1" bg="#eff6ff" p={20} radius={8} style={{
      border: "1px solid #3b82f6"
    }}>Item 1</Box>, <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{
      border: "1px solid #22c55e"
    }}>Item 2</Box>, <Box key="3" bg="#fff7ed" p={20} radius={8} style={{
      border: "1px solid #f97316"
    }}>Item 3</Box>]
  }
}`,...s.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="xl">\r
            <Box bg="#f8fafc" p={10}>Gap: xl</Box>\r
            <Stack direction="row" gap="xs">\r
                <Box bg="#eff6ff" p={10}>Gap: xs</Box>\r
                <Box bg="#eff6ff" p={10}>Gap: xs</Box>\r
                <Box bg="#eff6ff" p={10}>Gap: xs</Box>\r
            </Stack>\r
            <Stack direction="row" gap="lg">\r
                <Box bg="#f0fdf4" p={10}>Gap: lg</Box>\r
                <Box bg="#f0fdf4" p={10}>Gap: lg</Box>\r
                <Box bg="#f0fdf4" p={10}>Gap: lg</Box>\r
            </Stack>\r
        </Stack>
}`,...f.parameters?.docs?.source}}};const n=["Default","Row","SpacingTokens"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Row:s,SpacingTokens:f,__namedExportsOrder:n,default:d},Symbol.toStringTag,{value:"Module"}));export{o as D,s as R,c as S,f as a};
