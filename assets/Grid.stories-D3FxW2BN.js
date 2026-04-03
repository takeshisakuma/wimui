import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as d}from"./Grid-DtO73e4g.js";import{A as l}from"./iframe-Ce8V-Zu8.js";import{u as a}from"./useTranslation-CZV_GknJ.js";const m={title:"Components/Layout/Grid",component:d,tags:[],argTypes:{cols:{control:"object"},rows:{control:"text"},gap:{control:"text"},align:{control:"select",options:["start","center","end","stretch"]},justify:{control:"select",options:["start","center","end","between","around","stretch"]},flow:{control:"select",options:["row","column","dense","row dense","column dense"]}}},o=({children:c,color:t="#3b82f6"})=>r.jsx("div",{style:{backgroundColor:t,color:"white",padding:"20px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},children:c}),n={render:function(t){const{t:e}=a(l);return r.jsxs(d,{...t,children:[r.jsx(o,{children:e("story.grid_item","1")}),r.jsx(o,{color:"#10b981",children:e("story.grid_item","2")}),r.jsx(o,{color:"#f59e0b",children:e("story.grid_item","3")}),r.jsx(o,{color:"#ef4444",children:e("story.grid_item","4")}),r.jsx(o,{color:"#8b5cf6",children:e("story.grid_item","5")}),r.jsx(o,{color:"#ec4899",children:e("story.grid_item","6")})]})},args:{cols:3,gap:16}},s={render:function(t){return r.jsxs(d,{...t,children:[r.jsx(o,{children:"1fr"}),r.jsx(o,{color:"#10b981",children:"2fr"}),r.jsx(o,{color:"#f59e0b",children:"1fr"})]})},args:{cols:"1fr 2fr 1fr",gap:"1rem"}},i={render:function(t){const{t:e}=a(l);return r.jsxs(d,{...t,children:[r.jsx(o,{children:e("story.grid_item","1")}),r.jsx(o,{color:"#10b981",children:e("story.grid_item","2")}),r.jsx(o,{color:"#f59e0b",children:e("story.grid_item","3")}),r.jsx(o,{color:"#ef4444",children:e("story.grid_item","4")}),r.jsx(o,{color:"#8b5cf6",children:e("story.grid_item","5")}),r.jsx(o,{color:"#ec4899",children:e("story.grid_item","6")}),r.jsx(o,{color:"#6366f1",children:e("story.grid_item","7")}),r.jsx(o,{color:"#14b8a6",children:e("story.grid_item","8")})]})},args:{cols:{base:1,sm:2,md:3,lg:4},gap:16}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Grid {...args}>
        <Box>{t("story.grid_item", "1")}</Box>
        <Box color="#10b981">{t("story.grid_item", "2")}</Box>
        <Box color="#f59e0b">{t("story.grid_item", "3")}</Box>
        <Box color="#ef4444">{t("story.grid_item", "4")}</Box>
        <Box color="#8b5cf6">{t("story.grid_item", "5")}</Box>
        <Box color="#ec4899">{t("story.grid_item", "6")}</Box>
      </Grid>;
  },
  args: {
    cols: 3,
    gap: 16
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Grid {...args}>
        <Box>1fr</Box>
        <Box color="#10b981">2fr</Box>
        <Box color="#f59e0b">1fr</Box>
      </Grid>;
  },
  args: {
    cols: "1fr 2fr 1fr",
    gap: "1rem"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Grid {...args}>
        <Box>{t("story.grid_item", "1")}</Box>
        <Box color="#10b981">{t("story.grid_item", "2")}</Box>
        <Box color="#f59e0b">{t("story.grid_item", "3")}</Box>
        <Box color="#ef4444">{t("story.grid_item", "4")}</Box>
        <Box color="#8b5cf6">{t("story.grid_item", "5")}</Box>
        <Box color="#ec4899">{t("story.grid_item", "6")}</Box>
        <Box color="#6366f1">{t("story.grid_item", "7")}</Box>
        <Box color="#14b8a6">{t("story.grid_item", "8")}</Box>
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
}`,...i.parameters?.docs?.source}}};const x=["Basic","CustomColumns","Responsive"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,CustomColumns:s,Responsive:i,__namedExportsOrder:x,default:m},Symbol.toStringTag,{value:"Module"}));export{n as B,s as C,B as G,i as R};
