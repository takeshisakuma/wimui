import{j as o}from"./jsx-runtime-u17CrQMm.js";import{F as a}from"./Flex-C4mfDaM3.js";import{u as l}from"./useTranslation-BsF8P6HZ.js";const _={title:"Components/Layout/Flex",component:a,tags:[],argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"]},align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly","stretch"]},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},gap:{control:"text"},inline:{control:"boolean"}}},s=({children:n,color:r="#3b82f6"})=>o.jsx("div",{style:{backgroundColor:r,color:"white",padding:"20px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",minWidth:"60px"},children:n}),t={render:function(r){const{t:e}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(a,{...r,children:[o.jsx(s,{children:e("story_flex_item_1","1")}),o.jsx(s,{color:"#10b981",children:e("story_flex_item_2","2")}),o.jsx(s,{color:"#f59e0b",children:e("story_flex_item_3","3")})]})},args:{direction:"row",gap:16}},c={render:function(r){const{t:e}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(a,{...r,children:[o.jsx(s,{children:e("story_flex_item_1","Item 1")}),o.jsx(s,{color:"#10b981",children:e("story_flex_item_2","Item 2")}),o.jsx(s,{color:"#ef4444",children:e("story_flex_item_3","Item 3")})]})},args:{direction:"column",gap:"1rem"}},d={render:function(r){const{t:e}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(a,{...r,children:[o.jsx(s,{children:e("story_flex_left")}),o.jsx(s,{color:"#8b5cf6",children:e("story_flex_middle")}),o.jsx(s,{color:"#ec4899",children:e("story_flex_right")})]})},args:{justify:"between",gap:16,style:{width:"100%",border:"1px solid #ddd",padding:"10px"}}},i={render:function(r){const{t:e}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(a,{...r,children:[o.jsx(s,{children:e("story_flex_item_1","1")}),o.jsx(s,{color:"#10b981",children:e("story_flex_item_2","2")}),o.jsx(s,{color:"#f59e0b",children:e("story_flex_item_3","3")}),o.jsx(s,{color:"#ef4444",children:e("story_flex_item_4","4")}),o.jsx(s,{color:"#8b5cf6",children:e("story_flex_item_5","5")})]})},args:{wrap:"wrap",gap:16,style:{width:"200px",padding:"10px",border:"1px solid #ccc"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...i.parameters?.docs?.source}}};const x=["Basic","Column","JustifyBetween","Wrapped"],y=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,Column:c,JustifyBetween:d,Wrapped:i,__namedExportsOrder:x,default:_},Symbol.toStringTag,{value:"Module"}));export{t as B,c as C,y as F,d as J,i as W};
