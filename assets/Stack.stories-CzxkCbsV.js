import{j as r}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./Stack-BobQ3MYu.js";import{B as s}from"./Box-8b_EmIud.js";import{A as f}from"./i18nConstants-BpHxieg5.js";import{u as d}from"./useTranslation-7X4DMM5t.js";const i={title:"Components/Layout/Stack",component:n,tags:[],argTypes:{direction:{control:"radio",options:["row","column"]},gap:{control:"select",options:["xs","sm","md","lg","xl",10,20,40]}}},o={render:function(t){const{t:e}=d(f);return r.jsxs(n,{...t,children:[r.jsx(s,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:e("story_stack_item_1","Item 1")},"1"),r.jsx(s,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:e("story_stack_item_2","Item 2")},"2"),r.jsx(s,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:e("story_stack_item_3","Item 3")},"3")]})},args:{direction:"column",gap:"md"}},a={render:function(t){const{t:e}=d(f);return r.jsxs(n,{...t,children:[r.jsx(s,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:e("story_stack_item_1","Item 1")},"1"),r.jsx(s,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:e("story_stack_item_2","Item 2")},"2"),r.jsx(s,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:e("story_stack_item_3","Item 3")},"3")]})},args:{direction:"row",gap:"lg"}},c={render:function(){const{t}=d(f);return r.jsxs(n,{gap:"xl",children:[r.jsxs(s,{bg:"#f8fafc",p:10,children:[t("story_stack_gap","Gap: "),"xl"]}),r.jsxs(n,{direction:"row",gap:"xs",children:[r.jsxs(s,{bg:"#eff6ff",p:10,children:[t("story_stack_gap","Gap: "),"xs"]}),r.jsxs(s,{bg:"#eff6ff",p:10,children:[t("story_stack_gap","Gap: "),"xs"]}),r.jsxs(s,{bg:"#eff6ff",p:10,children:[t("story_stack_gap","Gap: "),"xs"]})]}),r.jsxs(n,{direction:"row",gap:"lg",children:[r.jsxs(s,{bg:"#f0fdf4",p:10,children:[t("story_stack_gap","Gap: "),"lg"]}),r.jsxs(s,{bg:"#f0fdf4",p:10,children:[t("story_stack_gap","Gap: "),"lg"]}),r.jsxs(s,{bg:"#f0fdf4",p:10,children:[t("story_stack_gap","Gap: "),"lg"]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
    } = useTranslation(ALL_NAMESPACES);
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
}`,...c.parameters?.docs?.source}}};const l=["Default","Row","SpacingTokens"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Row:a,SpacingTokens:c,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{o as D,a as R,y as S,c as a};
