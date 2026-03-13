import{j as r}from"./jsx-runtime-u17CrQMm.js";import{S as _}from"./SimpleGrid-Drb3fIpf.js";import{A as m}from"./i18nConstants-BpHxieg5.js";import{u as c}from"./useTranslation-Cpo6ITo8.js";const a={title:"Components/Layout/SimpleGrid",component:_,tags:[],argTypes:{cols:{control:"object"},spacing:{control:"text"},minChildWidth:{control:"text"}}},n=({children:d})=>r.jsx("div",{style:{backgroundColor:"#10b981",color:"white",padding:"20px",borderRadius:"8px",textAlign:"center",fontWeight:"bold"},children:d}),o={render:function(i){const{t}=c(m);return r.jsxs(_,{...i,children:[r.jsx(n,{children:t("story_grid_item","1")}),r.jsx(n,{children:t("story_grid_item","2")}),r.jsx(n,{children:t("story_grid_item","3")}),r.jsx(n,{children:t("story_grid_item","4")}),r.jsx(n,{children:t("story_grid_item","5")})]})},args:{cols:3,spacing:"md"}},e={render:function(i){const{t}=c(m);return r.jsxs(_,{...i,children:[r.jsx(n,{children:t("story_grid_min_width")}),r.jsx(n,{children:t("story_grid_min_width")}),r.jsx(n,{children:t("story_grid_min_width")}),r.jsx(n,{children:t("story_grid_min_width")}),r.jsx(n,{children:t("story_grid_min_width")})]})},args:{minChildWidth:200,spacing:16}},s={render:function(i){const{t}=c(m);return r.jsxs(_,{...i,children:[r.jsx(n,{children:t("story_grid_item","1")}),r.jsx(n,{children:t("story_grid_item","2")}),r.jsx(n,{children:t("story_grid_item","3")}),r.jsx(n,{children:t("story_grid_item","4")}),r.jsx(n,{children:t("story_grid_item","5")}),r.jsx(n,{children:t("story_grid_item","6")}),r.jsx(n,{children:t("story_grid_item","7")}),r.jsx(n,{children:t("story_grid_item","8")})]})},args:{cols:{base:1,sm:2,md:3,lg:4},spacing:16}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...s.parameters?.docs?.source}}};const x=["FixedColumns","ResponsiveAuto","ResponsiveBreakpoints"],h=Object.freeze(Object.defineProperty({__proto__:null,FixedColumns:o,ResponsiveAuto:e,ResponsiveBreakpoints:s,__namedExportsOrder:x,default:a},Symbol.toStringTag,{value:"Module"}));export{o as F,e as R,h as S,s as a};
