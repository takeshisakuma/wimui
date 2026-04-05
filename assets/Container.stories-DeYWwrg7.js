import{j as n}from"./jsx-runtime-u17CrQMm.js";import{C as a}from"./Container-B0CIL4cm.js";import{B as i}from"./Box-ClEiILeN.js";import{A as c}from"./iframe-DKMOQHZ-.js";import{u as l}from"./useTranslation-CMEx9zdK.js";const m={title:"Components/Layout/Container",component:a,tags:[],argTypes:{size:{control:"radio",options:["xs","sm","md","lg","xl"]}}},e={render:function(o){const{t:r}=l(c);return n.jsx(a,{...o,children:n.jsx(i,{bg:"var(--wim-color-bg-component)",p:20,style:{border:"1px solid var(--wim-color-border)"},children:r("story.container_content")})})},args:{bg:"#f9f9f9"}},t={render:function(){const{t:o}=l(c);return n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:["xs","sm","md","lg","xl"].map(r=>n.jsx(a,{size:r,bg:"var(--wim-color-bg-secondary)",p:10,children:n.jsxs(i,{bg:"var(--wim-color-bg-component)",p:10,style:{textAlign:"center",border:"1px solid var(--wim-color-border)"},children:[o("story.container_size"),": ",r]})},r))})}},s={render:function(o){const{t:r}=l(c);return n.jsx(a,{...o,fluid:!0,children:n.jsx(i,{bg:"var(--wim-color-bg-component)",p:20,style:{textAlign:"center",border:"1px solid var(--wim-color-border)"},children:r("story.container_fluid")})})},args:{bg:"var(--wim-color-bg-secondary)"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container {...args}>
        <Box bg="var(--wim-color-bg-component)" p={20} style={{
        border: "1px solid var(--wim-color-border)"
      }}>
          {t("story.container_content")}
        </Box>
      </Container>;
  },
  args: {
    bg: "#f9f9f9"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Container key={size} size={size} bg="var(--wim-color-bg-secondary)" p={10}>
            <Box bg="var(--wim-color-bg-component)" p={10} style={{
          textAlign: "center",
          border: "1px solid var(--wim-color-border)"
        }}>
              {t("story.container_size")}: {size}
            </Box>
          </Container>)}
      </div>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container {...args} fluid>
        <Box bg="var(--wim-color-bg-component)" p={20} style={{
        textAlign: "center",
        border: "1px solid var(--wim-color-border)"
      }}>
          {t("story.container_fluid")}
        </Box>
      </Container>;
  },
  args: {
    bg: "var(--wim-color-bg-secondary)"
  }
}`,...s.parameters?.docs?.source}}};const p=["Default","Sizes","Fluid"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Fluid:s,Sizes:t,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{y as C,e as D,s as F,t as S};
