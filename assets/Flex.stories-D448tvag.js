import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as a}from"./Flex-DCHVlt0u.js";import{u as d}from"./useTranslation-2PVo7Ynq.js";const x={title:"Components/Layout/Flex",component:a,tags:[],argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"]},align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly","stretch"]},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},gap:{control:"text"},inline:{control:"boolean"}}},r=({children:t,color:n="#3b82f6"})=>e.jsx("div",{style:{backgroundColor:n,color:"white",padding:"20px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",minWidth:"60px"},children:t}),s={render:function(n){const{t:o}=d(["docs","common","components"]);return e.jsxs(a,{...n,children:[e.jsx(r,{children:o("story_flex_item_1","1")}),e.jsx(r,{color:"#10b981",children:o("story_flex_item_2","2")}),e.jsx(r,{color:"#f59e0b",children:o("story_flex_item_3","3")})]})},args:{direction:"row",gap:16}},c={render:function(n){const{t:o}=d(["docs","common","components"]);return e.jsxs(a,{...n,children:[e.jsx(r,{children:o("story_flex_item_1","Item 1")}),e.jsx(r,{color:"#10b981",children:o("story_flex_item_2","Item 2")}),e.jsx(r,{color:"#ef4444",children:o("story_flex_item_3","Item 3")})]})},args:{direction:"column",gap:"1rem"}},l={render:function(n){const{t:o}=d(["docs","common","components"]);return e.jsxs(a,{...n,children:[e.jsx(r,{children:o("story_flex_left")}),e.jsx(r,{color:"#8b5cf6",children:o("story_flex_middle")}),e.jsx(r,{color:"#ec4899",children:o("story_flex_right")})]})},args:{justify:"between",gap:16,style:{width:"100%",border:"1px solid #ddd",padding:"10px"}}},i={render:function(n){const{t:o}=d(["docs","common","components"]);return e.jsxs(a,{...n,children:[e.jsx(r,{children:o("story_flex_item_1","1")}),e.jsx(r,{color:"#10b981",children:o("story_flex_item_2","2")}),e.jsx(r,{color:"#f59e0b",children:o("story_flex_item_3","3")}),e.jsx(r,{color:"#ef4444",children:o("story_flex_item_4","4")}),e.jsx(r,{color:"#8b5cf6",children:o("story_flex_item_5","5")})]})},args:{wrap:"wrap",gap:16,style:{width:"200px",padding:"10px",border:"1px solid #ccc"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Flex {...args}>\r
        <Box>{t("story_flex_item_1", "1")}</Box>\r
        <Box color="#10b981">{t("story_flex_item_2", "2")}</Box>\r
        <Box color="#f59e0b">{t("story_flex_item_3", "3")}</Box>\r
      </Flex>;
  },
  args: {
    direction: "row",
    gap: 16
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Flex {...args}>\r
        <Box>{t("story_flex_item_1", "Item 1")}</Box>\r
        <Box color="#10b981">{t("story_flex_item_2", "Item 2")}</Box>\r
        <Box color="#ef4444">{t("story_flex_item_3", "Item 3")}</Box>\r
      </Flex>;
  },
  args: {
    direction: "column",
    gap: "1rem"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Flex {...args}>\r
        <Box>{t("story_flex_left")}</Box>\r
        <Box color="#8b5cf6">{t("story_flex_middle")}</Box>\r
        <Box color="#ec4899">{t("story_flex_right")}</Box>\r
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Flex {...args}>\r
        <Box>{t("story_flex_item_1", "1")}</Box>\r
        <Box color="#10b981">{t("story_flex_item_2", "2")}</Box>\r
        <Box color="#f59e0b">{t("story_flex_item_3", "3")}</Box>\r
        <Box color="#ef4444">{t("story_flex_item_4", "4")}</Box>\r
        <Box color="#8b5cf6">{t("story_flex_item_5", "5")}</Box>\r
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
}`,...i.parameters?.docs?.source}}};const m=["Basic","Column","JustifyBetween","Wrapped"],u=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Column:c,JustifyBetween:l,Wrapped:i,__namedExportsOrder:m,default:x},Symbol.toStringTag,{value:"Module"}));export{s as B,c as C,u as F,l as J,i as W};
