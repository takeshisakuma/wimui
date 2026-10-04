"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Center-DWM_Hh6e.js";import{n as u,t as d}from"./Icon-B_89lpXW.js";import{r as f,t as p}from"./DemoCell-BNI7hFXS.js";var m=t({Default:()=>_,Icons:()=>y,Inline:()=>v,__namedExportsOrder:()=>b,default:()=>g}),h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i(),a(),c(),u(),f(),h=s(),g={title:`Components/Layout/Center`,component:l,tags:[],argTypes:{inline:{control:`boolean`}}},_={render:function(e){let{t}=r(o);return(0,h.jsx)(l,{...e,children:(0,h.jsx)(p,{intent:`primary`,p:`xl`,children:t(`story.center_content`)})})},args:{h:200,bg:`var(--wim-color-surface-variant)`}},v={render:function(){let{t:e}=r(o);return(0,h.jsxs)(`div`,{style:{border:`1px solid var(--wim-color-border)`,padding:`10px`},children:[`Text before`,(0,h.jsx)(l,{inline:!0,bg:`var(--wim-color-danger-subtle)`,px:10,mx:5,radius:4,children:e(`story.center_inline`)}),e(`story.center_text_after`)]})}},y={render:()=>(0,h.jsx)(l,{w:40,h:40,bg:`primary`,color:`text-on-primary`,radius:`full`,children:(0,h.jsx)(d,{name:`PlusIcon`})})},b=[`Default`,`Inline`,`Icons`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Center {...args}>
        <DemoCell intent="primary" p="xl">
          {t("story.center_content")}
        </DemoCell>
      </Center>;
  },
  args: {
    h: 200,
    bg: "var(--wim-color-surface-variant)"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      border: "1px solid var(--wim-color-border)",
      padding: "10px"
    }}>
        Text before
        <Center inline bg="var(--wim-color-danger-subtle)" px={10} mx={5} radius={4}>
          {t("story.center_inline")}
        </Center>
        {t("story.center_text_after")}
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Center w={40} h={40} bg="primary" color="text-on-primary" radius="full">
      <Icon name="PlusIcon" />
    </Center>
}`,...y.parameters?.docs?.source}}}})))()}export{x as a,v as i,_ as n,y as r,m as t};