import{j as d}from"./jsx-runtime-u17CrQMm.js";import{B as a}from"./Box-CG21v4Cy.js";const t={title:"Components/Layout/Box",component:a,tags:[],argTypes:{as:{control:"text"},bg:{control:"color"},display:{control:"text"},position:{control:"text"}}},r={args:{children:"This is a Box",bg:"#f0f0f0",p:20,radius:8}},o={args:{children:"Box with Shadow",bg:"white",p:40,radius:12,shadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}},e={args:{as:"button",children:"Box as Button",bg:"#eff6ff",color:"#1d4ed8",p:"10px 20px",radius:6,style:{border:"1px solid #bfdbfe",cursor:"pointer",fontWeight:600}}},s={render:()=>d.jsxs(a,{bg:"#f8fafc",p:20,radius:8,style:{border:"1px solid #e2e8f0"},children:[d.jsx(a,{bg:"#eff6ff",p:15,mb:15,color:"#1d4ed8",radius:4,style:{border:"1px solid #bfdbfe"},children:"Margin Bottom 15"}),d.jsx(a,{bg:"#f0fdf4",p:15,color:"#15803d",radius:4,style:{border:"1px solid #bbf7d0"},children:"Box 2"})]})},n={args:{children:"Box with px and py",bg:"#fdf2f8",color:"#be185d",px:40,py:10,radius:8,style:{border:"1px solid #fbcfe8",display:"inline-block"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is a Box",
    bg: "#f0f0f0",
    p: 20,
    radius: 8
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Box with Shadow",
    bg: "white",
    p: 40,
    radius: 12,
    shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    as: "button",
    children: "Box as Button",
    bg: "#eff6ff",
    color: "#1d4ed8",
    p: "10px 20px",
    radius: 6,
    style: {
      border: "1px solid #bfdbfe",
      cursor: "pointer",
      fontWeight: 600
    }
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Box bg="#f8fafc" p={20} radius={8} style={{
    border: "1px solid #e2e8f0"
  }}>\r
      <Box bg="#eff6ff" p={15} mb={15} color="#1d4ed8" radius={4} style={{
      border: "1px solid #bfdbfe"
    }}>\r
        Margin Bottom 15\r
      </Box>\r
      <Box bg="#f0fdf4" p={15} color="#15803d" radius={4} style={{
      border: "1px solid #bbf7d0"
    }}>\r
        Box 2\r
      </Box>\r
    </Box>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Box with px and py",
    bg: "#fdf2f8",
    color: "#be185d",
    px: 40,
    // 左右パディング
    py: 10,
    // 上下パディング
    radius: 8,
    style: {
      border: "1px solid #fbcfe8",
      display: "inline-block"
    }
  }
}`,...n.parameters?.docs?.source}}};const p=["Default","WithCustomShadow","AsButton","Spacing","PaddingProps"],f=Object.freeze(Object.defineProperty({__proto__:null,AsButton:e,Default:r,PaddingProps:n,Spacing:s,WithCustomShadow:o,__namedExportsOrder:p,default:t},Symbol.toStringTag,{value:"Module"}));export{f as B,r as D};
