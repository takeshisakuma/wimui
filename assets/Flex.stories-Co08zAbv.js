import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as a}from"./Flex-BzqIj3Fo.js";import{A as x}from"./iframe-CiRA90at.js";import{u as d}from"./useTranslation-BEAd_Ta8.js";const p={title:"Components/Layout/Flex",component:a,tags:[],argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"]},align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly","stretch"]},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},gap:{control:"text"},inline:{control:"boolean"}}},o=({children:t,color:n="#3b82f6"})=>e.jsx("div",{style:{backgroundColor:n,color:"white",padding:"20px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",minWidth:"60px"},children:t}),s={render:function(n){const{t:r}=d(x);return e.jsxs(a,{...n,children:[e.jsx(o,{children:r("story.flex_item_1","1")}),e.jsx(o,{color:"#10b981",children:r("story.flex_item_2","2")}),e.jsx(o,{color:"#f59e0b",children:r("story.flex_item_3","3")})]})},args:{direction:"row",gap:16}},l={render:function(n){const{t:r}=d(x);return e.jsxs(a,{...n,children:[e.jsx(o,{children:r("story.flex_item_1","Item 1")}),e.jsx(o,{color:"#10b981",children:r("story.flex_item_2","Item 2")}),e.jsx(o,{color:"#ef4444",children:r("story.flex_item_3","Item 3")})]})},args:{direction:"column",gap:"1rem"}},c={render:function(n){const{t:r}=d(x);return e.jsxs(a,{...n,children:[e.jsx(o,{children:r("story.flex_left")}),e.jsx(o,{color:"#8b5cf6",children:r("story.flex_middle")}),e.jsx(o,{color:"#ec4899",children:r("story.flex_right")})]})},args:{justify:"between",gap:16,style:{width:"100%",border:"1px solid #ddd",padding:"10px"}}},i={render:function(n){const{t:r}=d(x);return e.jsxs(a,{...n,children:[e.jsx(o,{children:r("story.flex_item_1","1")}),e.jsx(o,{color:"#10b981",children:r("story.flex_item_2","2")}),e.jsx(o,{color:"#f59e0b",children:r("story.flex_item_3","3")}),e.jsx(o,{color:"#ef4444",children:r("story.flex_item_4","4")}),e.jsx(o,{color:"#8b5cf6",children:r("story.flex_item_5","5")})]})},args:{wrap:"wrap",gap:16,style:{width:"200px",padding:"10px",border:"1px solid #ccc"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <Box>{t("story.flex_item_1", "1")}</Box>
        <Box color="#10b981">{t("story.flex_item_2", "2")}</Box>
        <Box color="#f59e0b">{t("story.flex_item_3", "3")}</Box>
      </Flex>;
  },
  args: {
    direction: "row",
    gap: 16
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <Box>{t("story.flex_item_1", "Item 1")}</Box>
        <Box color="#10b981">{t("story.flex_item_2", "Item 2")}</Box>
        <Box color="#ef4444">{t("story.flex_item_3", "Item 3")}</Box>
      </Flex>;
  },
  args: {
    direction: "column",
    gap: "1rem"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <Box>{t("story.flex_left")}</Box>
        <Box color="#8b5cf6">{t("story.flex_middle")}</Box>
        <Box color="#ec4899">{t("story.flex_right")}</Box>
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Flex {...args}>
        <Box>{t("story.flex_item_1", "1")}</Box>
        <Box color="#10b981">{t("story.flex_item_2", "2")}</Box>
        <Box color="#f59e0b">{t("story.flex_item_3", "3")}</Box>
        <Box color="#ef4444">{t("story.flex_item_4", "4")}</Box>
        <Box color="#8b5cf6">{t("story.flex_item_5", "5")}</Box>
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
}`,...i.parameters?.docs?.source}}};const m=["Basic","Column","JustifyBetween","Wrapped"],g=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Column:l,JustifyBetween:c,Wrapped:i,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{s as B,l as C,g as F,c as J,i as W};
