import{j as s}from"./jsx-runtime-u17CrQMm.js";import{C as c}from"./Container-C3l55c8t.js";import{B as d}from"./Box-BIWtB4o8.js";import{u as a}from"./useTranslation-BONq47qB.js";const l={title:"Components/Layout/Container",component:c,tags:[],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]}}},e={render:function(n){const{t:o}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(c,{...n,children:s.jsx(d,{bg:"#f0f0f0",p:20,style:{border:"1px solid #ccc"},children:o("story_container_content")})})},args:{bg:"#f9f9f9"}},r={render:function(){const{t:n}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:["xs","sm","md","lg","xl"].map(o=>s.jsx(c,{size:o,bg:"#f8fafc",p:10,children:s.jsxs(d,{bg:"#eff6ff",p:10,style:{textAlign:"center",border:"1px dashed #3b82f6"},children:[n("story_container_size"),": ",o]})},o))})}},t={render:function(n){const{t:o}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(c,{...n,fluid:!0,children:s.jsx(d,{bg:"#eff6ff",p:20,style:{textAlign:"center",border:"1px dashed #3b82f6"},children:o("story_container_fluid")})})},args:{bg:"#f8fafc"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Container {...args}>\r
        <Box bg="#f0f0f0" p={20} style={{
        border: "1px solid #ccc"
      }}>\r
          {t("story_container_content")}\r
        </Box>\r
      </Container>;
  },
  args: {
    bg: "#f9f9f9"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>\r
        {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Container key={size} size={size} bg="#f8fafc" p={10}>\r
            <Box bg="#eff6ff" p={10} style={{
          textAlign: "center",
          border: "1px dashed #3b82f6"
        }}>\r
              {t("story_container_size")}: {size}\r
            </Box>\r
          </Container>)}\r
      </div>;
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Container {...args} fluid>\r
        <Box bg="#eff6ff" p={20} style={{
        textAlign: "center",
        border: "1px dashed #3b82f6"
      }}>\r
          {t("story_container_fluid")}\r
        </Box>\r
      </Container>;
  },
  args: {
    bg: "#f8fafc"
  }
}`,...t.parameters?.docs?.source}}};const f=["Default","Sizes","Fluid"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Fluid:t,Sizes:r,__namedExportsOrder:f,default:l},Symbol.toStringTag,{value:"Module"}));export{g as C,e as D,t as F,r as S};
