import{j as o}from"./jsx-runtime-u17CrQMm.js";import{G as d}from"./Grid-DEq0P2AZ.js";import{u as a}from"./useTranslation-CHJ-TYb-.js";const l={title:"Components/Layout/Grid",component:d,tags:[],argTypes:{cols:{control:"object"},rows:{control:"text"},gap:{control:"text"},align:{control:"select",options:["start","center","end","stretch"]},justify:{control:"select",options:["start","center","end","between","around","stretch"]},flow:{control:"select",options:["row","column","dense","row dense","column dense"]}}},r=({children:i,color:e="#3b82f6"})=>o.jsx("div",{style:{backgroundColor:e,color:"white",padding:"20px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},children:i}),t={render:function(e){const{t:s}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(d,{...e,children:[o.jsx(r,{children:s("story_grid_item","1")}),o.jsx(r,{color:"#10b981",children:s("story_grid_item","2")}),o.jsx(r,{color:"#f59e0b",children:s("story_grid_item","3")}),o.jsx(r,{color:"#ef4444",children:s("story_grid_item","4")}),o.jsx(r,{color:"#8b5cf6",children:s("story_grid_item","5")}),o.jsx(r,{color:"#ec4899",children:s("story_grid_item","6")})]})},args:{cols:3,gap:16}},n={render:function(e){return o.jsxs(d,{...e,children:[o.jsx(r,{children:"1fr"}),o.jsx(r,{color:"#10b981",children:"2fr"}),o.jsx(r,{color:"#f59e0b",children:"1fr"})]})},args:{cols:"1fr 2fr 1fr",gap:"1rem"}},c={render:function(e){const{t:s}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(d,{...e,children:[o.jsx(r,{children:s("story_grid_item","1")}),o.jsx(r,{color:"#10b981",children:s("story_grid_item","2")}),o.jsx(r,{color:"#f59e0b",children:s("story_grid_item","3")}),o.jsx(r,{color:"#ef4444",children:s("story_grid_item","4")}),o.jsx(r,{color:"#8b5cf6",children:s("story_grid_item","5")}),o.jsx(r,{color:"#ec4899",children:s("story_grid_item","6")}),o.jsx(r,{color:"#6366f1",children:s("story_grid_item","7")}),o.jsx(r,{color:"#14b8a6",children:s("story_grid_item","8")})]})},args:{cols:{base:1,sm:2,md:3,lg:4},gap:16}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};const _=["Basic","CustomColumns","Responsive"],u=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,CustomColumns:n,Responsive:c,__namedExportsOrder:_,default:l},Symbol.toStringTag,{value:"Module"}));export{t as B,n as C,u as G,c as R};
