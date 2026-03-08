import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as c}from"./Container-_HCZiROa.js";import{B as a}from"./Box-BHNdfOJv.js";import{u as i}from"./useTranslation-DspkRMCK.js";const f={title:"Components/Layout/Container",component:c,tags:[],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]}}},o={render:function(r){const{t:n}=i(["docs","common","components"]);return e.jsx(c,{...r,children:e.jsx(a,{bg:"#f0f0f0",p:20,style:{border:"1px solid #ccc"},children:n("story_container_content")})})},args:{bg:"#f9f9f9"}},t={render:function(){const{t:r}=i(["docs","common","components"]);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:["xs","sm","md","lg","xl"].map(n=>e.jsx(c,{size:n,bg:"#f8fafc",p:10,children:e.jsxs(a,{bg:"#eff6ff",p:10,style:{textAlign:"center",border:"1px dashed #3b82f6"},children:[r("story_container_size"),": ",n]})},n))})}},s={render:function(r){const{t:n}=i(["docs","common","components"]);return e.jsx(c,{...r,fluid:!0,children:e.jsx(a,{bg:"#eff6ff",p:20,style:{textAlign:"center",border:"1px dashed #3b82f6"},children:n("story_container_fluid")})})},args:{bg:"#f8fafc"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...s.parameters?.docs?.source}}};const l=["Default","Sizes","Fluid"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Fluid:s,Sizes:t,__namedExportsOrder:l,default:f},Symbol.toStringTag,{value:"Module"}));export{g as C,o as D,s as F,t as S};
