import{j as r}from"./jsx-runtime-u17CrQMm.js";import{S as f}from"./Stack-CCwEgsbi.js";import{B as e}from"./Box-C8N8GqpT.js";const a={title:"Components/Layout/Stack",component:f,tags:[],argTypes:{direction:{control:"radio",options:["row","column"]},gap:{control:"select",options:["xs","sm","md","lg","xl",10,20,40]}}},o={args:{direction:"column",gap:"md",children:[r.jsx(e,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:"Item 1"},"1"),r.jsx(e,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:"Item 2"},"2"),r.jsx(e,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:"Item 3"},"3")]}},n={args:{direction:"row",gap:"lg",children:[r.jsx(e,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:"Item 1"},"1"),r.jsx(e,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:"Item 2"},"2"),r.jsx(e,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:"Item 3"},"3")]}},s={render:()=>r.jsxs(f,{gap:"xl",children:[r.jsx(e,{bg:"#f8fafc",p:10,children:"Gap: xl"}),r.jsxs(f,{direction:"row",gap:"xs",children:[r.jsx(e,{bg:"#eff6ff",p:10,children:"Gap: xs"}),r.jsx(e,{bg:"#eff6ff",p:10,children:"Gap: xs"}),r.jsx(e,{bg:"#eff6ff",p:10,children:"Gap: xs"})]}),r.jsxs(f,{direction:"row",gap:"lg",children:[r.jsx(e,{bg:"#f0fdf4",p:10,children:"Gap: lg"}),r.jsx(e,{bg:"#f0fdf4",p:10,children:"Gap: lg"}),r.jsx(e,{bg:"#f0fdf4",p:10,children:"Gap: lg"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "column",
    gap: "md",
    children: [<Box key="1" bg="#eff6ff" p={20} radius={8} style={{
      border: "1px solid #3b82f6"
    }}>\r
        Item 1\r
      </Box>, <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{
      border: "1px solid #22c55e"
    }}>\r
        Item 2\r
      </Box>, <Box key="3" bg="#fff7ed" p={20} radius={8} style={{
      border: "1px solid #f97316"
    }}>\r
        Item 3\r
      </Box>]
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "row",
    gap: "lg",
    children: [<Box key="1" bg="#eff6ff" p={20} radius={8} style={{
      border: "1px solid #3b82f6"
    }}>\r
        Item 1\r
      </Box>, <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{
      border: "1px solid #22c55e"
    }}>\r
        Item 2\r
      </Box>, <Box key="3" bg="#fff7ed" p={20} radius={8} style={{
      border: "1px solid #f97316"
    }}>\r
        Item 3\r
      </Box>]
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="xl">\r
      <Box bg="#f8fafc" p={10}>\r
        Gap: xl\r
      </Box>\r
      <Stack direction="row" gap="xs">\r
        <Box bg="#eff6ff" p={10}>\r
          Gap: xs\r
        </Box>\r
        <Box bg="#eff6ff" p={10}>\r
          Gap: xs\r
        </Box>\r
        <Box bg="#eff6ff" p={10}>\r
          Gap: xs\r
        </Box>\r
      </Stack>\r
      <Stack direction="row" gap="lg">\r
        <Box bg="#f0fdf4" p={10}>\r
          Gap: lg\r
        </Box>\r
        <Box bg="#f0fdf4" p={10}>\r
          Gap: lg\r
        </Box>\r
        <Box bg="#f0fdf4" p={10}>\r
          Gap: lg\r
        </Box>\r
      </Stack>\r
    </Stack>
}`,...s.parameters?.docs?.source}}};const d=["Default","Row","SpacingTokens"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Row:n,SpacingTokens:s,__namedExportsOrder:d,default:a},Symbol.toStringTag,{value:"Module"}));export{o as D,n as R,c as S,s as a};
