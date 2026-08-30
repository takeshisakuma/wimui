"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{t as c,zi as l}from"./src-CV0le6yM.js";import{t as u}from"./Box-BVB_9vOB.js";var d=e({Default:()=>m,Fluid:()=>g,Sizes:()=>h,__namedExportsOrder:()=>_,default:()=>p}),f,p,m,h,g,_,v=t((()=>{n(),o(),i(),c(),f=a(),p={title:`Components/Layout/Container`,component:l,tags:[],argTypes:{size:{control:`radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]}}},m={render:function(e){let{t}=r(s);return(0,f.jsx)(l,{...e,children:(0,f.jsx)(u,{bg:`var(--wim-color-surface)`,p:20,style:{border:`1px solid var(--wim-color-border)`},children:t(`story.container_content`)})})},args:{bg:`var(--wim-color-surface-variant)`}},h={render:function(){let{t:e}=r(s);return(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,f.jsx)(l,{size:t,bg:`var(--wim-color-surface-variant)`,p:10,children:(0,f.jsxs)(u,{bg:`var(--wim-color-surface)`,p:10,style:{textAlign:`center`,border:`1px solid var(--wim-color-border)`},children:[e(`story.container_size`),`: `,t]})},t))})}},g={render:function(e){let{t}=r(s);return(0,f.jsx)(l,{...e,fluid:!0,children:(0,f.jsx)(u,{bg:`var(--wim-color-surface)`,p:20,style:{textAlign:`center`,border:`1px solid var(--wim-color-border)`},children:t(`story.container_fluid`)})})},args:{bg:`var(--wim-color-surface-variant)`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Sizes`,`Fluid`]}));v();export{m as Default,g as Fluid,h as Sizes,_ as __namedExportsOrder,p as default,v as n,d as t};