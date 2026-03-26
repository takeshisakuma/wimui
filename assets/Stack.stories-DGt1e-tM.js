import{j as s}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./Stack-JWsSeE6B.js";import{B as t}from"./Box-BIAmr4aO.js";import{A as f}from"./iframe-badbAK5Z.js";import{u as d}from"./useTranslation-uxHS973M.js";const i={title:"Components/Layout/Stack",component:n,tags:[],argTypes:{direction:{control:"radio",options:["row","column"]},gap:{control:"select",options:["xs","sm","md","lg","xl",10,20,40]}}},o={render:function(r){const{t:e}=d(f);return s.jsxs(n,{...r,children:[s.jsx(t,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:e("story_stack_item_1","Item 1")},"1"),s.jsx(t,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:e("story_stack_item_2","Item 2")},"2"),s.jsx(t,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:e("story_stack_item_3","Item 3")},"3")]})},args:{direction:"column",gap:"md"}},a={render:function(r){const{t:e}=d(f);return s.jsxs(n,{...r,children:[s.jsx(t,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:e("story_stack_item_1","Item 1")},"1"),s.jsx(t,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:e("story_stack_item_2","Item 2")},"2"),s.jsx(t,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:e("story_stack_item_3","Item 3")},"3")]})},args:{direction:"row",gap:"lg"}},c={render:function(){const{t:r}=d(f);return s.jsxs(n,{gap:"xl",children:[s.jsxs(t,{bg:"#f8fafc",p:10,children:[r("story_stack_gap","Gap: "),"xl"]}),s.jsxs(n,{direction:"row",gap:"xs",children:[s.jsxs(t,{bg:"#eff6ff",p:10,children:[r("story_stack_gap","Gap: "),"xs"]}),s.jsxs(t,{bg:"#eff6ff",p:10,children:[r("story_stack_gap","Gap: "),"xs"]}),s.jsxs(t,{bg:"#eff6ff",p:10,children:[r("story_stack_gap","Gap: "),"xs"]})]}),s.jsxs(n,{direction:"row",gap:"lg",children:[s.jsxs(t,{bg:"#f0fdf4",p:10,children:[r("story_stack_gap","Gap: "),"lg"]}),s.jsxs(t,{bg:"#f0fdf4",p:10,children:[r("story_stack_gap","Gap: "),"lg"]}),s.jsxs(t,{bg:"#f0fdf4",p:10,children:[r("story_stack_gap","Gap: "),"lg"]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack {...args}>
        <Box key="1" bg="#eff6ff" p={20} radius={8} style={{
        border: "1px solid #3b82f6"
      }}>
          {t("story_stack_item_1", "Item 1")}
        </Box>
        <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{
        border: "1px solid #22c55e"
      }}>
          {t("story_stack_item_2", "Item 2")}
        </Box>
        <Box key="3" bg="#fff7ed" p={20} radius={8} style={{
        border: "1px solid #f97316"
      }}>
          {t("story_stack_item_3", "Item 3")}
        </Box>
      </Stack>;
  },
  args: {
    direction: "column",
    gap: "md"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack {...args}>
        <Box key="1" bg="#eff6ff" p={20} radius={8} style={{
        border: "1px solid #3b82f6"
      }}>
          {t("story_stack_item_1", "Item 1")}
        </Box>
        <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{
        border: "1px solid #22c55e"
      }}>
          {t("story_stack_item_2", "Item 2")}
        </Box>
        <Box key="3" bg="#fff7ed" p={20} radius={8} style={{
        border: "1px solid #f97316"
      }}>
          {t("story_stack_item_3", "Item 3")}
        </Box>
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
    } = useTranslation(ALL_NAMESPACES);
    return <Stack gap="xl">
        <Box bg="#f8fafc" p={10}>
          {t("story_stack_gap", "Gap: ")}xl
        </Box>
        <Stack direction="row" gap="xs">
          <Box bg="#eff6ff" p={10}>
            {t("story_stack_gap", "Gap: ")}xs
          </Box>
          <Box bg="#eff6ff" p={10}>
            {t("story_stack_gap", "Gap: ")}xs
          </Box>
          <Box bg="#eff6ff" p={10}>
            {t("story_stack_gap", "Gap: ")}xs
          </Box>
        </Stack>
        <Stack direction="row" gap="lg">
          <Box bg="#f0fdf4" p={10}>
            {t("story_stack_gap", "Gap: ")}lg
          </Box>
          <Box bg="#f0fdf4" p={10}>
            {t("story_stack_gap", "Gap: ")}lg
          </Box>
          <Box bg="#f0fdf4" p={10}>
            {t("story_stack_gap", "Gap: ")}lg
          </Box>
        </Stack>
      </Stack>;
  }
}`,...c.parameters?.docs?.source}}};const l=["Default","Row","SpacingTokens"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Row:a,SpacingTokens:c,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{o as D,a as R,y as S,c as a};
