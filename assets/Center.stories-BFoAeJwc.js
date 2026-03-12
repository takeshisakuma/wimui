import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as s}from"./Center-gVB1jtkt.js";import{B as i}from"./Box-p0HdRDzA.js";import{u as c}from"./useTranslation-CTezHt8M.js";const l={title:"Components/Layout/Center",component:s,tags:[],argTypes:{inline:{control:"boolean"}}},o={render:function(t){const{t:a}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(s,{...t,children:e.jsx(i,{bg:"#eff6ff",p:40,radius:8,style:{border:"1px solid #3b82f6"},children:a("story_center_content")})})},args:{h:200,bg:"#f8fafc"}},n={render:function(){const{t}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{border:"1px solid #ccc",padding:"10px"},children:["Text before",e.jsx(s,{inline:!0,bg:"#fecaca",px:10,mx:5,radius:4,children:t("story_center_inline")}),"Text after"]})}},r={render:()=>e.jsx(s,{w:40,h:40,bg:"#3b82f6",color:"white",radius:"full",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Center w={40} h={40} bg="#3b82f6" color="white" radius="full">\r
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
        <path d="M12 5v14M5 12h14" />\r
      </svg>\r
    </Center>
}`,...r.parameters?.docs?.source}}};const u=["Default","Inline","Icons"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Icons:r,Inline:n,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{g as C,o as D,n as I,r as a};
