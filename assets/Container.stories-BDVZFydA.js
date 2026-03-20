import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as a}from"./Container-jUaGVa2A.js";import{B as i}from"./Box-CiJ_W8lM.js";import{A as c}from"./i18nConstants-BpHxieg5.js";import{u as f}from"./useTranslation-CrQtSC0V.js";const l={title:"Components/Layout/Container",component:a,tags:[],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]}}},t={render:function(r){const{t:n}=f(c);return e.jsx(a,{...r,children:e.jsx(i,{bg:"#f0f0f0",p:20,style:{border:"1px solid #ccc"},children:n("story_container_content")})})},args:{bg:"#f9f9f9"}},s={render:function(){const{t:r}=f(c);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:["xs","sm","md","lg","xl"].map(n=>e.jsx(a,{size:n,bg:"#f8fafc",p:10,children:e.jsxs(i,{bg:"#eff6ff",p:10,style:{textAlign:"center",border:"1px dashed #3b82f6"},children:[r("story_container_size"),": ",n]})},n))})}},o={render:function(r){const{t:n}=f(c);return e.jsx(a,{...r,fluid:!0,children:e.jsx(i,{bg:"#eff6ff",p:20,style:{textAlign:"center",border:"1px dashed #3b82f6"},children:n("story_container_fluid")})})},args:{bg:"#f8fafc"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...o.parameters?.docs?.source}}};const p=["Default","Sizes","Fluid"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Fluid:o,Sizes:s,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{_ as C,t as D,o as F,s as S};
