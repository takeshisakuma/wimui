import{j as s}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./Stack-0p7_UX1-.js";import{B as o}from"./Box-BUtJO7vg.js";import{u as d}from"./useTranslation-BsF8P6HZ.js";const p={title:"Components/Layout/Stack",component:n,tags:[],argTypes:{direction:{control:"radio",options:["row","column"]},gap:{control:"select",options:["xs","sm","md","lg","xl",10,20,40]}}},e={render:function(r){const{t}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsxs(n,{...r,children:[s.jsx(o,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:t("story_stack_item_1","Item 1")},"1"),s.jsx(o,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:t("story_stack_item_2","Item 2")},"2"),s.jsx(o,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:t("story_stack_item_3","Item 3")},"3")]})},args:{direction:"column",gap:"md"}},a={render:function(r){const{t}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsxs(n,{...r,children:[s.jsx(o,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:t("story_stack_item_1","Item 1")},"1"),s.jsx(o,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:t("story_stack_item_2","Item 2")},"2"),s.jsx(o,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:t("story_stack_item_3","Item 3")},"3")]})},args:{direction:"row",gap:"lg"}},c={render:function(){const{t:r}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsxs(n,{gap:"xl",children:[s.jsxs(o,{bg:"#f8fafc",p:10,children:[r("story_stack_gap","Gap: "),"xl"]}),s.jsxs(n,{direction:"row",gap:"xs",children:[s.jsxs(o,{bg:"#eff6ff",p:10,children:[r("story_stack_gap","Gap: "),"xs"]}),s.jsxs(o,{bg:"#eff6ff",p:10,children:[r("story_stack_gap","Gap: "),"xs"]}),s.jsxs(o,{bg:"#eff6ff",p:10,children:[r("story_stack_gap","Gap: "),"xs"]})]}),s.jsxs(n,{direction:"row",gap:"lg",children:[s.jsxs(o,{bg:"#f0fdf4",p:10,children:[r("story_stack_gap","Gap: "),"lg"]}),s.jsxs(o,{bg:"#f0fdf4",p:10,children:[r("story_stack_gap","Gap: "),"lg"]}),s.jsxs(o,{bg:"#f0fdf4",p:10,children:[r("story_stack_gap","Gap: "),"lg"]})]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Stack {...args}>\r
        <Box key="1" bg="#eff6ff" p={20} radius={8} style={{
        border: "1px solid #3b82f6"
      }}>\r
          {t("story_stack_item_1", "Item 1")}\r
        </Box>\r
        <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{
        border: "1px solid #22c55e"
      }}>\r
          {t("story_stack_item_2", "Item 2")}\r
        </Box>\r
        <Box key="3" bg="#fff7ed" p={20} radius={8} style={{
        border: "1px solid #f97316"
      }}>\r
          {t("story_stack_item_3", "Item 3")}\r
        </Box>\r
      </Stack>;
  },
  args: {
    direction: "column",
    gap: "md"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Stack {...args}>\r
        <Box key="1" bg="#eff6ff" p={20} radius={8} style={{
        border: "1px solid #3b82f6"
      }}>\r
          {t("story_stack_item_1", "Item 1")}\r
        </Box>\r
        <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{
        border: "1px solid #22c55e"
      }}>\r
          {t("story_stack_item_2", "Item 2")}\r
        </Box>\r
        <Box key="3" bg="#fff7ed" p={20} radius={8} style={{
        border: "1px solid #f97316"
      }}>\r
          {t("story_stack_item_3", "Item 3")}\r
        </Box>\r
      </Stack>;
  },
  args: {
    direction: "row",
    gap: "lg"
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Stack gap="xl">\r
        <Box bg="#f8fafc" p={10}>\r
          {t("story_stack_gap", "Gap: ")}xl\r
        </Box>\r
        <Stack direction="row" gap="xs">\r
          <Box bg="#eff6ff" p={10}>\r
            {t("story_stack_gap", "Gap: ")}xs\r
          </Box>\r
          <Box bg="#eff6ff" p={10}>\r
            {t("story_stack_gap", "Gap: ")}xs\r
          </Box>\r
          <Box bg="#eff6ff" p={10}>\r
            {t("story_stack_gap", "Gap: ")}xs\r
          </Box>\r
        </Stack>\r
        <Stack direction="row" gap="lg">\r
          <Box bg="#f0fdf4" p={10}>\r
            {t("story_stack_gap", "Gap: ")}lg\r
          </Box>\r
          <Box bg="#f0fdf4" p={10}>\r
            {t("story_stack_gap", "Gap: ")}lg\r
          </Box>\r
          <Box bg="#f0fdf4" p={10}>\r
            {t("story_stack_gap", "Gap: ")}lg\r
          </Box>\r
        </Stack>\r
      </Stack>;
  }
}`,...c.parameters?.docs?.source}}};const _=["Default","Row","SpacingTokens"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Row:a,SpacingTokens:c,__namedExportsOrder:_,default:p},Symbol.toStringTag,{value:"Module"}));export{e as D,a as R,x as S,c as a};
