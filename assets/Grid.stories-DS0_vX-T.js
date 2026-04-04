import{j as t}from"./jsx-runtime-u17CrQMm.js";import{G as c}from"./Grid-HFJCYDSa.js";import{A as l}from"./iframe-By123agS.js";import{u as p}from"./useTranslation-svuQDxOH.js";const g={title:"Components/Layout/Grid",component:c,tags:[],argTypes:{cols:{control:"object"},rows:{control:"text"},gap:{control:"text"},align:{control:"select",options:["start","center","end","stretch"]},justify:{control:"select",options:["start","center","end","between","around","stretch"]},flow:{control:"select",options:["row","column","dense","row dense","column dense"]}}},m={primary:{bg:"var(--wim-color-primary)",text:"var(--wim-color-text-on-primary)"},positive:{bg:"var(--wim-color-positive)",text:"var(--wim-color-text-on-positive)"},caution:{bg:"var(--wim-color-caution)",text:"var(--wim-color-text-on-caution)"},destructive:{bg:"var(--wim-color-destructive)",text:"var(--wim-color-text-on-destructive)"},secondary:{bg:"var(--wim-color-secondary)",text:"var(--wim-color-text-on-secondary)"},informative:{bg:"var(--wim-color-informative)",text:"var(--wim-color-text-on-informative)"}},r=({children:a,intent:e="primary"})=>t.jsx("div",{style:{backgroundColor:m[e].bg,color:m[e].text,padding:"20px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},children:a}),o={render:function(e){const{t:n}=p(l);return t.jsxs(c,{...e,children:[t.jsx(r,{children:n("story.grid_item","1")}),t.jsx(r,{intent:"positive",children:n("story.grid_item","2")}),t.jsx(r,{intent:"caution",children:n("story.grid_item","3")}),t.jsx(r,{intent:"destructive",children:n("story.grid_item","4")}),t.jsx(r,{intent:"secondary",children:n("story.grid_item","5")}),t.jsx(r,{intent:"informative",children:n("story.grid_item","6")})]})},args:{cols:3,gap:16}},i={render:function(e){return t.jsxs(c,{...e,children:[t.jsx(r,{children:"1fr"}),t.jsx(r,{intent:"positive",children:"2fr"}),t.jsx(r,{intent:"caution",children:"1fr"})]})},args:{cols:"1fr 2fr 1fr",gap:"1rem"}},s={render:function(e){const{t:n}=p(l),u=["primary","positive","caution","destructive","secondary","informative","secondary","positive"];return t.jsx(c,{...e,children:u.map((x,d)=>t.jsx(r,{intent:x,children:n("story.grid_item",String(d+1))},d))})},args:{cols:{base:1,sm:2,md:3,lg:4},gap:16}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Grid {...args}>
        <Box>{t("story.grid_item", "1")}</Box>
        <Box intent="positive">{t("story.grid_item", "2")}</Box>
        <Box intent="caution">{t("story.grid_item", "3")}</Box>
        <Box intent="destructive">{t("story.grid_item", "4")}</Box>
        <Box intent="secondary">{t("story.grid_item", "5")}</Box>
        <Box intent="informative">{t("story.grid_item", "6")}</Box>
      </Grid>;
  },
  args: {
    cols: 3,
    gap: 16
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Grid {...args}>
        <Box>1fr</Box>
        <Box intent="positive">2fr</Box>
        <Box intent="caution">1fr</Box>
      </Grid>;
  },
  args: {
    cols: "1fr 2fr 1fr",
    gap: "1rem"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const intents: BoxIntent[] = ["primary", "positive", "caution", "destructive", "secondary", "informative", "secondary", "positive"];
    return <Grid {...args}>
        {intents.map((intent, i) => <Box key={i} intent={intent}>{t("story.grid_item", String(i + 1))}</Box>)}
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
}`,...s.parameters?.docs?.source}}};const v=["Basic","CustomColumns","Responsive"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,CustomColumns:i,Responsive:s,__namedExportsOrder:v,default:g},Symbol.toStringTag,{value:"Module"}));export{o as B,i as C,j as G,s as R};
