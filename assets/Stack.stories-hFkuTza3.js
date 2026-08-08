"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c}from"./src-BE5jBQ9L.js";import{i as l}from"./List-C4WUy_aA.js";import{r as u,t as d}from"./DemoCell-BGw1L_9W.js";var f=e({Default:()=>h,Row:()=>g,SpacingTokens:()=>_,__namedExportsOrder:()=>v,default:()=>m}),p,m,h,g,_,v,y=t((()=>{n(),o(),i(),c(),u(),p=a(),m={title:`Components/Layout/Stack`,component:l,tags:[],argTypes:{direction:{control:`radio`,options:[`row`,`column`]},gap:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,10,20,40]}}},h={render:function(e){let{t}=r(s);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.stack_item_1`,`Item 1`)}),(0,p.jsx)(d,{intent:`success`,children:t(`story.stack_item_2`,`Item 2`)}),(0,p.jsx)(d,{intent:`warning`,children:t(`story.stack_item_3`,`Item 3`)})]})},args:{direction:`column`,gap:`md`}},g={render:function(e){let{t}=r(s);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.stack_item_1`,`Item 1`)}),(0,p.jsx)(d,{intent:`success`,children:t(`story.stack_item_2`,`Item 2`)}),(0,p.jsx)(d,{intent:`warning`,children:t(`story.stack_item_3`,`Item 3`)})]})},args:{direction:`row`,gap:`lg`}},_={render:function(){let{t:e}=r(s);return(0,p.jsxs)(l,{gap:`xl`,children:[(0,p.jsxs)(d,{intent:`neutral`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`xl`]}),(0,p.jsxs)(l,{direction:`row`,gap:`xs`,children:[(0,p.jsxs)(d,{intent:`primary`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`xs`]}),(0,p.jsxs)(d,{intent:`primary`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`xs`]}),(0,p.jsxs)(d,{intent:`primary`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`xs`]})]}),(0,p.jsxs)(l,{direction:`row`,gap:`lg`,children:[(0,p.jsxs)(d,{intent:`success`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`lg`]}),(0,p.jsxs)(d,{intent:`success`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`lg`]}),(0,p.jsxs)(d,{intent:`success`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`lg`]})]})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack {...args}>
        <DemoCell intent="primary">{t("story.stack_item_1", "Item 1")}</DemoCell>
        <DemoCell intent="success">{t("story.stack_item_2", "Item 2")}</DemoCell>
        <DemoCell intent="warning">{t("story.stack_item_3", "Item 3")}</DemoCell>
      </Stack>;
  },
  args: {
    direction: "column",
    gap: "md"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack {...args}>
        <DemoCell intent="primary">{t("story.stack_item_1", "Item 1")}</DemoCell>
        <DemoCell intent="success">{t("story.stack_item_2", "Item 2")}</DemoCell>
        <DemoCell intent="warning">{t("story.stack_item_3", "Item 3")}</DemoCell>
      </Stack>;
  },
  args: {
    direction: "row",
    gap: "lg"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack gap="xl">
        <DemoCell intent="neutral" p="sm">
          {t("story.stack_gap", "Gap: ")}xl
        </DemoCell>
        <Stack direction="row" gap="xs">
          <DemoCell intent="primary" p="sm">{t("story.stack_gap", "Gap: ")}xs</DemoCell>
          <DemoCell intent="primary" p="sm">{t("story.stack_gap", "Gap: ")}xs</DemoCell>
          <DemoCell intent="primary" p="sm">{t("story.stack_gap", "Gap: ")}xs</DemoCell>
        </Stack>
        <Stack direction="row" gap="lg">
          <DemoCell intent="success" p="sm">{t("story.stack_gap", "Gap: ")}lg</DemoCell>
          <DemoCell intent="success" p="sm">{t("story.stack_gap", "Gap: ")}lg</DemoCell>
          <DemoCell intent="success" p="sm">{t("story.stack_gap", "Gap: ")}lg</DemoCell>
        </Stack>
      </Stack>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Row`,`SpacingTokens`]}));y();export{h as Default,g as Row,_ as SpacingTokens,v as __namedExportsOrder,m as default,y as n,f as t};