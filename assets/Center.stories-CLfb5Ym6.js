"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{Pi as c,t as l}from"./src-BE5jBQ9L.js";import{t as u}from"./Icon-Bz8kwOgZ.js";import{r as d,t as f}from"./DemoCell-BGw1L_9W.js";var p=e({Default:()=>g,Icons:()=>v,Inline:()=>_,__namedExportsOrder:()=>y,default:()=>h}),m,h,g,_,v,y,b=t((()=>{n(),o(),i(),l(),d(),m=a(),h={title:`Components/Layout/Center`,component:c,tags:[],argTypes:{inline:{control:`boolean`}}},g={render:function(e){let{t}=r(s);return(0,m.jsx)(c,{...e,children:(0,m.jsx)(f,{intent:`primary`,p:`xl`,children:t(`story.center_content`)})})},args:{h:200,bg:`var(--wim-color-surface-variant)`}},_={render:function(){let{t:e}=r(s);return(0,m.jsxs)(`div`,{style:{border:`1px solid var(--wim-color-border)`,padding:`10px`},children:[`Text before`,(0,m.jsx)(c,{inline:!0,bg:`var(--wim-color-danger-subtle)`,px:10,mx:5,radius:4,children:e(`story.center_inline`)}),e(`story.center_text_after`)]})}},v={render:()=>(0,m.jsx)(c,{w:40,h:40,bg:`primary`,color:`text-on-primary`,radius:`full`,children:(0,m.jsx)(u,{name:`PlusIcon`})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Center w={40} h={40} bg="primary" color="text-on-primary" radius="full">
      <Icon name="PlusIcon" />
    </Center>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Inline`,`Icons`]}));b();export{g as Default,v as Icons,_ as Inline,y as __namedExportsOrder,h as default,b as n,p as t};