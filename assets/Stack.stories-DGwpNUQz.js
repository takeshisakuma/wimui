"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Stack-D0pTsuU-.js";import{r as u,t as d}from"./DemoCell-BNI7hFXS.js";var f=t({Default:()=>h,Row:()=>g,SpacingTokens:()=>_,__namedExportsOrder:()=>v,default:()=>m}),p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),a(),c(),u(),p=s(),m={title:`Components/Layout/Stack`,component:l,tags:[],argTypes:{direction:{control:`radio`,options:[`row`,`column`]},gap:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,10,20,40]}}},h={render:function(e){let{t}=r(o);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.stack_item_1`,`Build`)}),(0,p.jsx)(d,{intent:`success`,children:t(`story.stack_item_2`,`Tests`)}),(0,p.jsx)(d,{intent:`warning`,children:t(`story.stack_item_3`,`Publish`)})]})},args:{direction:`column`,gap:`md`}},g={render:function(e){let{t}=r(o);return(0,p.jsxs)(l,{...e,children:[(0,p.jsx)(d,{intent:`primary`,children:t(`story.stack_item_1`,`Build`)}),(0,p.jsx)(d,{intent:`success`,children:t(`story.stack_item_2`,`Tests`)}),(0,p.jsx)(d,{intent:`warning`,children:t(`story.stack_item_3`,`Publish`)})]})},args:{direction:`row`,gap:`lg`}},_={render:function(){let{t:e}=r(o);return(0,p.jsxs)(l,{gap:`xl`,children:[(0,p.jsxs)(d,{intent:`neutral`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`xl`]}),(0,p.jsxs)(l,{direction:`row`,gap:`xs`,children:[(0,p.jsxs)(d,{intent:`primary`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`xs`]}),(0,p.jsxs)(d,{intent:`primary`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`xs`]}),(0,p.jsxs)(d,{intent:`primary`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`xs`]})]}),(0,p.jsxs)(l,{direction:`row`,gap:`lg`,children:[(0,p.jsxs)(d,{intent:`success`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`lg`]}),(0,p.jsxs)(d,{intent:`success`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`lg`]}),(0,p.jsxs)(d,{intent:`success`,p:`sm`,children:[e(`story.stack_gap`,`Gap: `),`lg`]})]})]})}},v=[`Default`,`Row`,`SpacingTokens`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack {...args}>
        <DemoCell intent="primary">{t("story.stack_item_1", "Build")}</DemoCell>
        <DemoCell intent="success">{t("story.stack_item_2", "Tests")}</DemoCell>
        <DemoCell intent="warning">{t("story.stack_item_3", "Publish")}</DemoCell>
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
        <DemoCell intent="primary">{t("story.stack_item_1", "Build")}</DemoCell>
        <DemoCell intent="success">{t("story.stack_item_2", "Tests")}</DemoCell>
        <DemoCell intent="warning">{t("story.stack_item_3", "Publish")}</DemoCell>
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
}`,..._.parameters?.docs?.source}}}})))()}export{y as a,f as i,g as n,_ as r,h as t};