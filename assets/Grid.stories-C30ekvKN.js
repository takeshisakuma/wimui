import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as d}from"./Grid-BDiZ3hf6.js";import{u as l}from"./useTranslation-gsjwUuWZ.js";const a={title:"Components/Layout/Grid",component:d,tags:[],argTypes:{cols:{control:"object"},rows:{control:"text"},gap:{control:"text"},align:{control:"select",options:["start","center","end","stretch"]},justify:{control:"select",options:["start","center","end","between","around","stretch"]},flow:{control:"select",options:["row","column","dense","row dense","column dense"]}}},o=({children:i,color:n="#3b82f6"})=>r.jsx("div",{style:{backgroundColor:n,color:"white",padding:"20px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},children:i}),t={render:function(n){const{t:e}=l(["docs","common","components"]);return r.jsxs(d,{...n,children:[r.jsx(o,{children:e("story_grid_item","1")}),r.jsx(o,{color:"#10b981",children:e("story_grid_item","2")}),r.jsx(o,{color:"#f59e0b",children:e("story_grid_item","3")}),r.jsx(o,{color:"#ef4444",children:e("story_grid_item","4")}),r.jsx(o,{color:"#8b5cf6",children:e("story_grid_item","5")}),r.jsx(o,{color:"#ec4899",children:e("story_grid_item","6")})]})},args:{cols:3,gap:16}},s={render:function(n){const{t:e}=l(["docs","common","components"]);return r.jsxs(d,{...n,children:[r.jsx(o,{children:"1fr"}),r.jsx(o,{color:"#10b981",children:"2fr"}),r.jsx(o,{color:"#f59e0b",children:"1fr"})]})},args:{cols:"1fr 2fr 1fr",gap:"1rem"}},c={render:function(n){const{t:e}=l(["docs","common","components"]);return r.jsxs(d,{...n,children:[r.jsx(o,{children:e("story_grid_item","1")}),r.jsx(o,{color:"#10b981",children:e("story_grid_item","2")}),r.jsx(o,{color:"#f59e0b",children:e("story_grid_item","3")}),r.jsx(o,{color:"#ef4444",children:e("story_grid_item","4")}),r.jsx(o,{color:"#8b5cf6",children:e("story_grid_item","5")}),r.jsx(o,{color:"#ec4899",children:e("story_grid_item","6")}),r.jsx(o,{color:"#6366f1",children:e("story_grid_item","7")}),r.jsx(o,{color:"#14b8a6",children:e("story_grid_item","8")})]})},args:{cols:{base:1,sm:2,md:3,lg:4},gap:16}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Grid {...args}>\r
        <Box>{t("story_grid_item", "1")}</Box>\r
        <Box color="#10b981">{t("story_grid_item", "2")}</Box>\r
        <Box color="#f59e0b">{t("story_grid_item", "3")}</Box>\r
        <Box color="#ef4444">{t("story_grid_item", "4")}</Box>\r
        <Box color="#8b5cf6">{t("story_grid_item", "5")}</Box>\r
        <Box color="#ec4899">{t("story_grid_item", "6")}</Box>\r
      </Grid>;
  },
  args: {
    cols: 3,
    gap: 16
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Grid {...args}>\r
        <Box>1fr</Box>\r
        <Box color="#10b981">2fr</Box>\r
        <Box color="#f59e0b">1fr</Box>\r
      </Grid>;
  },
  args: {
    cols: "1fr 2fr 1fr",
    gap: "1rem"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Grid {...args}>\r
        <Box>{t("story_grid_item", "1")}</Box>\r
        <Box color="#10b981">{t("story_grid_item", "2")}</Box>\r
        <Box color="#f59e0b">{t("story_grid_item", "3")}</Box>\r
        <Box color="#ef4444">{t("story_grid_item", "4")}</Box>\r
        <Box color="#8b5cf6">{t("story_grid_item", "5")}</Box>\r
        <Box color="#ec4899">{t("story_grid_item", "6")}</Box>\r
        <Box color="#6366f1">{t("story_grid_item", "7")}</Box>\r
        <Box color="#14b8a6">{t("story_grid_item", "8")}</Box>\r
      </Grid>;
  },
  args: {
    cols: {
      base: 1,
      sm: 2,
      md: 3,
      lg: 4
    },
    gap: 16
  }
}`,...c.parameters?.docs?.source}}};const m=["Basic","CustomColumns","Responsive"],f=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,CustomColumns:s,Responsive:c,__namedExportsOrder:m,default:a},Symbol.toStringTag,{value:"Module"}));export{t as B,s as C,f as G,c as R};
