import{j as r}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./Stack-CuPvpxxw.js";import{B as o}from"./Box-BolIhvCT.js";import{A as c}from"./iframe-By123agS.js";import{u as p}from"./useTranslation-svuQDxOH.js";const m={title:"Components/Layout/Stack",component:n,tags:[],argTypes:{direction:{control:"radio",options:["row","column"]},gap:{control:"select",options:["xs","sm","md","lg","xl",10,20,40]}}},s={render:function(a){const{t}=p(c);return r.jsxs(n,{...a,children:[r.jsx(o,{bg:"var(--wim-color-primary-container-alpha)",p:20,radius:8,style:{border:"1px solid var(--wim-color-primary)"},children:t("story.stack_item_1","Item 1")},"1"),r.jsx(o,{bg:"color-mix(in srgb, var(--wim-color-positive) 15%, transparent)",p:20,radius:8,style:{border:"1px solid var(--wim-color-positive)"},children:t("story.stack_item_2","Item 2")},"2"),r.jsx(o,{bg:"color-mix(in srgb, var(--wim-color-caution) 15%, transparent)",p:20,radius:8,style:{border:"1px solid var(--wim-color-caution)"},children:t("story.stack_item_3","Item 3")},"3")]})},args:{direction:"column",gap:"md"}},i={render:function(a){const{t}=p(c);return r.jsxs(n,{...a,children:[r.jsx(o,{bg:"var(--wim-color-primary-container-alpha)",p:20,radius:8,style:{border:"1px solid var(--wim-color-primary)"},children:t("story.stack_item_1","Item 1")},"1"),r.jsx(o,{bg:"color-mix(in srgb, var(--wim-color-positive) 15%, transparent)",p:20,radius:8,style:{border:"1px solid var(--wim-color-positive)"},children:t("story.stack_item_2","Item 2")},"2"),r.jsx(o,{bg:"color-mix(in srgb, var(--wim-color-caution) 15%, transparent)",p:20,radius:8,style:{border:"1px solid var(--wim-color-caution)"},children:t("story.stack_item_3","Item 3")},"3")]})},args:{direction:"row",gap:"lg"}},e={render:function(){const{t:a}=p(c);return r.jsxs(n,{gap:"xl",children:[r.jsxs(o,{bg:"var(--wim-color-bg-secondary)",p:10,children:[a("story.stack_gap","Gap: "),"xl"]}),r.jsxs(n,{direction:"row",gap:"xs",children:[r.jsxs(o,{bg:"var(--wim-color-primary-container-alpha)",p:10,children:[a("story.stack_gap","Gap: "),"xs"]}),r.jsxs(o,{bg:"var(--wim-color-primary-container-alpha)",p:10,children:[a("story.stack_gap","Gap: "),"xs"]}),r.jsxs(o,{bg:"var(--wim-color-primary-container-alpha)",p:10,children:[a("story.stack_gap","Gap: "),"xs"]})]}),r.jsxs(n,{direction:"row",gap:"lg",children:[r.jsxs(o,{bg:"color-mix(in srgb, var(--wim-color-positive) 15%, transparent)",p:10,children:[a("story.stack_gap","Gap: "),"lg"]}),r.jsxs(o,{bg:"color-mix(in srgb, var(--wim-color-positive) 15%, transparent)",p:10,children:[a("story.stack_gap","Gap: "),"lg"]}),r.jsxs(o,{bg:"color-mix(in srgb, var(--wim-color-positive) 15%, transparent)",p:10,children:[a("story.stack_gap","Gap: "),"lg"]})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack {...args}>
        <Box key="1" bg="var(--wim-color-primary-container-alpha)" p={20} radius={8} style={{
        border: "1px solid var(--wim-color-primary)"
      }}>
          {t("story.stack_item_1", "Item 1")}
        </Box>
        <Box key="2" bg="color-mix(in srgb, var(--wim-color-positive) 15%, transparent)" p={20} radius={8} style={{
        border: "1px solid var(--wim-color-positive)"
      }}>
          {t("story.stack_item_2", "Item 2")}
        </Box>
        <Box key="3" bg="color-mix(in srgb, var(--wim-color-caution) 15%, transparent)" p={20} radius={8} style={{
        border: "1px solid var(--wim-color-caution)"
      }}>
          {t("story.stack_item_3", "Item 3")}
        </Box>
      </Stack>;
  },
  args: {
    direction: "column",
    gap: "md"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack {...args}>
        <Box key="1" bg="var(--wim-color-primary-container-alpha)" p={20} radius={8} style={{
        border: "1px solid var(--wim-color-primary)"
      }}>
          {t("story.stack_item_1", "Item 1")}
        </Box>
        <Box key="2" bg="color-mix(in srgb, var(--wim-color-positive) 15%, transparent)" p={20} radius={8} style={{
        border: "1px solid var(--wim-color-positive)"
      }}>
          {t("story.stack_item_2", "Item 2")}
        </Box>
        <Box key="3" bg="color-mix(in srgb, var(--wim-color-caution) 15%, transparent)" p={20} radius={8} style={{
        border: "1px solid var(--wim-color-caution)"
      }}>
          {t("story.stack_item_3", "Item 3")}
        </Box>
      </Stack>;
  },
  args: {
    direction: "row",
    gap: "lg"
  }
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack gap="xl">
        <Box bg="var(--wim-color-bg-secondary)" p={10}>
          {t("story.stack_gap", "Gap: ")}xl
        </Box>
        <Stack direction="row" gap="xs">
          <Box bg="var(--wim-color-primary-container-alpha)" p={10}>
            {t("story.stack_gap", "Gap: ")}xs
          </Box>
          <Box bg="var(--wim-color-primary-container-alpha)" p={10}>
            {t("story.stack_gap", "Gap: ")}xs
          </Box>
          <Box bg="var(--wim-color-primary-container-alpha)" p={10}>
            {t("story.stack_gap", "Gap: ")}xs
          </Box>
        </Stack>
        <Stack direction="row" gap="lg">
          <Box bg="color-mix(in srgb, var(--wim-color-positive) 15%, transparent)" p={10}>
            {t("story.stack_gap", "Gap: ")}lg
          </Box>
          <Box bg="color-mix(in srgb, var(--wim-color-positive) 15%, transparent)" p={10}>
            {t("story.stack_gap", "Gap: ")}lg
          </Box>
          <Box bg="color-mix(in srgb, var(--wim-color-positive) 15%, transparent)" p={10}>
            {t("story.stack_gap", "Gap: ")}lg
          </Box>
        </Stack>
      </Stack>;
  }
}`,...e.parameters?.docs?.source}}};const d=["Default","Row","SpacingTokens"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Row:i,SpacingTokens:e,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{s as D,i as R,v as S,e as a};
