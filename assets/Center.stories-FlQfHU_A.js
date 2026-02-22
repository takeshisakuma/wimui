import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./Center-D_jC_Wrq.js";import{B as s}from"./Box-qoYcqjSe.js";const a={title:"Component/Layout/Center",component:t,tags:[],argTypes:{inline:{control:"boolean"}}},r={args:{children:e.jsx(s,{bg:"#eff6ff",p:40,radius:8,style:{border:"1px solid #3b82f6"},children:"Centered Content"}),h:200,bg:"#f8fafc"}},n={render:()=>e.jsxs("div",{style:{border:"1px solid #ccc",padding:"10px"},children:["Text before",e.jsx(t,{inline:!0,bg:"#fecaca",px:10,mx:5,radius:4,children:"Inline Center"}),"Text after"]})},o={render:()=>e.jsx(t,{w:40,h:40,bg:"#3b82f6",color:"white",radius:"full",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Box bg="#eff6ff" p={40} radius={8} style={{
      border: "1px solid #3b82f6"
    }}>Centered Content</Box>,
    h: 200,
    bg: "#f8fafc"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    border: "1px solid #ccc",
    padding: "10px"
  }}>\r
            Text before\r
            <Center inline bg="#fecaca" px={10} mx={5} radius={4}>\r
                Inline Center\r
            </Center>\r
            Text after\r
        </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Center w={40} h={40} bg="#3b82f6" color="white" radius="full">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
                <path d="M12 5v14M5 12h14" />\r
            </svg>\r
        </Center>
}`,...o.parameters?.docs?.source}}};const i=["Default","Inline","Icons"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Icons:o,Inline:n,__namedExportsOrder:i,default:a},Symbol.toStringTag,{value:"Module"}));export{p as C,r as D,n as I,o as a};
