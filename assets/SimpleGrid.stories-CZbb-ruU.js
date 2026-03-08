import{j as r}from"./jsx-runtime-u17CrQMm.js";import{S as c}from"./SimpleGrid-DHZkjPTK.js";import{u as m}from"./useTranslation-DLjll_Fb.js";const _={title:"Components/Layout/SimpleGrid",component:c,tags:[],argTypes:{cols:{control:"object"},spacing:{control:"text"},minChildWidth:{control:"text"}}},n=({children:d})=>r.jsx("div",{style:{backgroundColor:"#10b981",color:"white",padding:"20px",borderRadius:"8px",textAlign:"center",fontWeight:"bold"},children:d}),s={render:function(t){const{t:o}=m(["docs","common","components"]);return r.jsxs(c,{...t,children:[r.jsx(n,{children:o("story_grid_item","1")}),r.jsx(n,{children:o("story_grid_item","2")}),r.jsx(n,{children:o("story_grid_item","3")}),r.jsx(n,{children:o("story_grid_item","4")}),r.jsx(n,{children:o("story_grid_item","5")})]})},args:{cols:3,spacing:"md"}},i={render:function(t){const{t:o}=m(["docs","common","components"]);return r.jsxs(c,{...t,children:[r.jsx(n,{children:o("story_grid_min_width")}),r.jsx(n,{children:o("story_grid_min_width")}),r.jsx(n,{children:o("story_grid_min_width")}),r.jsx(n,{children:o("story_grid_min_width")}),r.jsx(n,{children:o("story_grid_min_width")})]})},args:{minChildWidth:200,spacing:16}},e={render:function(t){const{t:o}=m(["docs","common","components"]);return r.jsxs(c,{...t,children:[r.jsx(n,{children:o("story_grid_item","1")}),r.jsx(n,{children:o("story_grid_item","2")}),r.jsx(n,{children:o("story_grid_item","3")}),r.jsx(n,{children:o("story_grid_item","4")}),r.jsx(n,{children:o("story_grid_item","5")}),r.jsx(n,{children:o("story_grid_item","6")}),r.jsx(n,{children:o("story_grid_item","7")}),r.jsx(n,{children:o("story_grid_item","8")})]})},args:{cols:{base:1,sm:2,md:3,lg:4},spacing:16}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...e.parameters?.docs?.source}}};const a=["FixedColumns","ResponsiveAuto","ResponsiveBreakpoints"],p=Object.freeze(Object.defineProperty({__proto__:null,FixedColumns:s,ResponsiveAuto:i,ResponsiveBreakpoints:e,__namedExportsOrder:a,default:_},Symbol.toStringTag,{value:"Module"}));export{s as F,i as R,p as S,e as a};
