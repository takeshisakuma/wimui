import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as l}from"./Flex-Btp2-PO2.js";import{A as x}from"./iframe-By123agS.js";import{u as d}from"./useTranslation-svuQDxOH.js";const m={title:"Components/Layout/Flex",component:l,tags:[],argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"]},align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly","stretch"]},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},gap:{control:"text"},inline:{control:"boolean"}}},p={primary:{bg:"var(--wim-color-primary)",text:"var(--wim-color-text-on-primary)"},positive:{bg:"var(--wim-color-positive)",text:"var(--wim-color-text-on-positive)"},caution:{bg:"var(--wim-color-caution)",text:"var(--wim-color-text-on-caution)"},destructive:{bg:"var(--wim-color-destructive)",text:"var(--wim-color-text-on-destructive)"},secondary:{bg:"var(--wim-color-secondary)",text:"var(--wim-color-text-on-secondary)"}},n=({children:o,intent:r="primary"})=>e.jsx("div",{style:{backgroundColor:p[r].bg,color:p[r].text,padding:"20px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",minWidth:"60px"},children:o}),s={render:function(r){const{t}=d(x);return e.jsxs(l,{...r,children:[e.jsx(n,{children:t("story.flex_item_1","1")}),e.jsx(n,{intent:"positive",children:t("story.flex_item_2","2")}),e.jsx(n,{intent:"caution",children:t("story.flex_item_3","3")})]})},args:{direction:"row",gap:16}},i={render:function(r){const{t}=d(x);return e.jsxs(l,{...r,children:[e.jsx(n,{children:t("story.flex_item_1","Item 1")}),e.jsx(n,{intent:"positive",children:t("story.flex_item_2","Item 2")}),e.jsx(n,{intent:"destructive",children:t("story.flex_item_3","Item 3")})]})},args:{direction:"column",gap:"1rem"}},a={render:function(r){const{t}=d(x);return e.jsxs(l,{...r,children:[e.jsx(n,{children:t("story.flex_left")}),e.jsx(n,{intent:"secondary",children:t("story.flex_middle")}),e.jsx(n,{intent:"secondary",children:t("story.flex_right")})]})},args:{justify:"between",gap:16,style:{width:"100%",border:"1px solid #ddd",padding:"10px"}}},c={render:function(r){const{t}=d(x);return e.jsxs(l,{...r,children:[e.jsx(n,{children:t("story.flex_item_1","1")}),e.jsx(n,{intent:"positive",children:t("story.flex_item_2","2")}),e.jsx(n,{intent:"caution",children:t("story.flex_item_3","3")}),e.jsx(n,{intent:"destructive",children:t("story.flex_item_4","4")}),e.jsx(n,{intent:"secondary",children:t("story.flex_item_5","5")})]})},args:{wrap:"wrap",gap:16,style:{width:"200px",padding:"10px",border:"1px solid #ccc"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <Box>{t("story.flex_item_1", "1")}</Box>
        <Box intent="positive">{t("story.flex_item_2", "2")}</Box>
        <Box intent="caution">{t("story.flex_item_3", "3")}</Box>
      </Flex>;
  },
  args: {
    direction: "row",
    gap: 16
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <Box>{t("story.flex_item_1", "Item 1")}</Box>
        <Box intent="positive">{t("story.flex_item_2", "Item 2")}</Box>
        <Box intent="destructive">{t("story.flex_item_3", "Item 3")}</Box>
      </Flex>;
  },
  args: {
    direction: "column",
    gap: "1rem"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <Box>{t("story.flex_left")}</Box>
        <Box intent="secondary">{t("story.flex_middle")}</Box>
        <Box intent="secondary">{t("story.flex_right")}</Box>
      </Flex>;
  },
  args: {
    justify: "between",
    gap: 16,
    style: {
      width: "100%",
      border: "1px solid #ddd",
      padding: "10px"
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <Box>{t("story.flex_item_1", "1")}</Box>
        <Box intent="positive">{t("story.flex_item_2", "2")}</Box>
        <Box intent="caution">{t("story.flex_item_3", "3")}</Box>
        <Box intent="destructive">{t("story.flex_item_4", "4")}</Box>
        <Box intent="secondary">{t("story.flex_item_5", "5")}</Box>
      </Flex>;
  },
  args: {
    wrap: "wrap",
    gap: 16,
    style: {
      width: "200px",
      padding: "10px",
      border: "1px solid #ccc"
    }
  }
}`,...c.parameters?.docs?.source}}};const u=["Basic","Column","JustifyBetween","Wrapped"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Column:i,JustifyBetween:a,Wrapped:c,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{s as B,i as C,B as F,a as J,c as W};
