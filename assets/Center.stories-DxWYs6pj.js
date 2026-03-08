import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./Center-C6uQ6LWJ.js";import{B as d}from"./Box-B8PXs6oF.js";import{u as c}from"./useTranslation-CZ9vchf1.js";const l={title:"Components/Layout/Center",component:t,tags:[],argTypes:{inline:{control:"boolean"}}},r={render:function(s){const{t:i}=c(["docs","common","components"]);return e.jsx(t,{...s,children:e.jsx(d,{bg:"#eff6ff",p:40,radius:8,style:{border:"1px solid #3b82f6"},children:i("story_center_content")})})},args:{h:200,bg:"#f8fafc"}},n={render:function(){const{t:s}=c(["docs","common","components"]);return e.jsxs("div",{style:{border:"1px solid #ccc",padding:"10px"},children:["Text before",e.jsx(t,{inline:!0,bg:"#fecaca",px:10,mx:5,radius:4,children:s("story_center_inline")}),"Text after"]})}},o={render:()=>e.jsx(t,{w:40,h:40,bg:"#3b82f6",color:"white",radius:"full",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Center {...args}>\r
        <Box bg="#eff6ff" p={40} radius={8} style={{
        border: "1px solid #3b82f6"
      }}>\r
          {t("story_center_content")}\r
        </Box>\r
      </Center>;
  },
  args: {
    h: 200,
    bg: "#f8fafc"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      border: "1px solid #ccc",
      padding: "10px"
    }}>\r
        Text before\r
        <Center inline bg="#fecaca" px={10} mx={5} radius={4}>\r
          {t("story_center_inline")}\r
        </Center>\r
        Text after\r
      </div>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Center w={40} h={40} bg="#3b82f6" color="white" radius="full">\r
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
        <path d="M12 5v14M5 12h14" />\r
      </svg>\r
    </Center>
}`,...o.parameters?.docs?.source}}};const p=["Default","Inline","Icons"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Icons:o,Inline:n,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{g as C,r as D,n as I,o as a};
