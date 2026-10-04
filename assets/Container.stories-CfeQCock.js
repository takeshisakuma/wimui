"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Box-lSx-_C-t.js";import{n as u,t as d}from"./Container-DJnhfdv_.js";var f=t({Default:()=>h,Fluid:()=>_,Sizes:()=>g,__namedExportsOrder:()=>v,default:()=>m}),p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),a(),c(),u(),p=s(),m={title:`Components/Layout/Container`,component:d,tags:[],argTypes:{size:{control:`radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]}}},h={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,children:(0,p.jsx)(l,{bg:`var(--wim-color-surface)`,p:20,style:{border:`1px solid var(--wim-color-border)`},children:t(`story.container_content`)})})},args:{bg:`var(--wim-color-surface-variant)`}},g={render:function(){let{t:e}=r(o);return(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,p.jsx)(d,{size:t,bg:`var(--wim-color-surface-variant)`,p:10,children:(0,p.jsxs)(l,{bg:`var(--wim-color-surface)`,p:10,style:{textAlign:`center`,border:`1px solid var(--wim-color-border)`},children:[e(`story.container_size`),`: `,t]})},t))})}},_={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,fluid:!0,children:(0,p.jsx)(l,{bg:`var(--wim-color-surface)`,p:20,style:{textAlign:`center`,border:`1px solid var(--wim-color-border)`},children:t(`story.container_fluid`)})})},args:{bg:`var(--wim-color-surface-variant)`}},v=[`Default`,`Sizes`,`Fluid`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container {...args}>
        <Box bg="var(--wim-color-surface)" p={20} style={{
        border: "1px solid var(--wim-color-border)"
      }}>
          {t("story.container_content")}
        </Box>
      </Container>;
  },
  args: {
    bg: "var(--wim-color-surface-variant)"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Container key={size} size={size} bg="var(--wim-color-surface-variant)" p={10}>
            <Box bg="var(--wim-color-surface)" p={10} style={{
          textAlign: "center",
          border: "1px solid var(--wim-color-border)"
        }}>
              {t("story.container_size")}: {size}
            </Box>
          </Container>)}
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container {...args} fluid>
        <Box bg="var(--wim-color-surface)" p={20} style={{
        textAlign: "center",
        border: "1px solid var(--wim-color-border)"
      }}>
          {t("story.container_fluid")}
        </Box>
      </Container>;
  },
  args: {
    bg: "var(--wim-color-surface-variant)"
  }
}`,..._.parameters?.docs?.source}}}})))()}export{y as a,g as i,h as n,_ as r,f as t};