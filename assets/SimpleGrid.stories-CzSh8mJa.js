import{j as o}from"./jsx-runtime-u17CrQMm.js";import{S as c}from"./SimpleGrid-C66We7Ue.js";import{u as _}from"./useTranslation-CLFZhCB5.js";const a={title:"Components/Layout/SimpleGrid",component:c,tags:[],argTypes:{cols:{control:"object"},spacing:{control:"text"},minChildWidth:{control:"text"}}},r=({children:d})=>o.jsx("div",{style:{backgroundColor:"#10b981",color:"white",padding:"20px",borderRadius:"8px",textAlign:"center",fontWeight:"bold"},children:d}),i={render:function(n){const{t:s}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(c,{...n,children:[o.jsx(r,{children:s("story_grid_item","1")}),o.jsx(r,{children:s("story_grid_item","2")}),o.jsx(r,{children:s("story_grid_item","3")}),o.jsx(r,{children:s("story_grid_item","4")}),o.jsx(r,{children:s("story_grid_item","5")})]})},args:{cols:3,spacing:"md"}},t={render:function(n){const{t:s}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(c,{...n,children:[o.jsx(r,{children:s("story_grid_min_width")}),o.jsx(r,{children:s("story_grid_min_width")}),o.jsx(r,{children:s("story_grid_min_width")}),o.jsx(r,{children:s("story_grid_min_width")}),o.jsx(r,{children:s("story_grid_min_width")})]})},args:{minChildWidth:200,spacing:16}},e={render:function(n){const{t:s}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(c,{...n,children:[o.jsx(r,{children:s("story_grid_item","1")}),o.jsx(r,{children:s("story_grid_item","2")}),o.jsx(r,{children:s("story_grid_item","3")}),o.jsx(r,{children:s("story_grid_item","4")}),o.jsx(r,{children:s("story_grid_item","5")}),o.jsx(r,{children:s("story_grid_item","6")}),o.jsx(r,{children:s("story_grid_item","7")}),o.jsx(r,{children:s("story_grid_item","8")})]})},args:{cols:{base:1,sm:2,md:3,lg:4},spacing:16}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <SimpleGrid {...args}>\r
        <Box>{t("story_grid_item", "1")}</Box>\r
        <Box>{t("story_grid_item", "2")}</Box>\r
        <Box>{t("story_grid_item", "3")}</Box>\r
        <Box>{t("story_grid_item", "4")}</Box>\r
        <Box>{t("story_grid_item", "5")}</Box>\r
      </SimpleGrid>;
  },
  args: {
    cols: 3,
    spacing: "md"
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <SimpleGrid {...args}>\r
        <Box>{t("story_grid_min_width")}</Box>\r
        <Box>{t("story_grid_min_width")}</Box>\r
        <Box>{t("story_grid_min_width")}</Box>\r
        <Box>{t("story_grid_min_width")}</Box>\r
        <Box>{t("story_grid_min_width")}</Box>\r
      </SimpleGrid>;
  },
  args: {
    minChildWidth: 200,
    spacing: 16
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <SimpleGrid {...args}>\r
        <Box>{t("story_grid_item", "1")}</Box>\r
        <Box>{t("story_grid_item", "2")}</Box>\r
        <Box>{t("story_grid_item", "3")}</Box>\r
        <Box>{t("story_grid_item", "4")}</Box>\r
        <Box>{t("story_grid_item", "5")}</Box>\r
        <Box>{t("story_grid_item", "6")}</Box>\r
        <Box>{t("story_grid_item", "7")}</Box>\r
        <Box>{t("story_grid_item", "8")}</Box>\r
      </SimpleGrid>;
  },
  args: {
    cols: {
      base: 1,
      sm: 2,
      md: 3,
      lg: 4
    },
    spacing: 16
  }
}`,...e.parameters?.docs?.source}}};const m=["FixedColumns","ResponsiveAuto","ResponsiveBreakpoints"],p=Object.freeze(Object.defineProperty({__proto__:null,FixedColumns:i,ResponsiveAuto:t,ResponsiveBreakpoints:e,__namedExportsOrder:m,default:a},Symbol.toStringTag,{value:"Module"}));export{i as F,t as R,p as S,e as a};
