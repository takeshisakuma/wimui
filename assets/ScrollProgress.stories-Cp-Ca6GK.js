"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{t as l,xn as u}from"./src-Ssuy8lr7.js";var d=e({CustomContainer:()=>g,Default:()=>h,__namedExportsOrder:()=>_,default:()=>m}),f,p,m,h,g,_,v=t((()=>{f=n(r(),1),s(),a(),l(),p=o(),m={title:`Components/Utilities/ScrollProgress`,component:u,parameters:{layout:`fullscreen`}},h={render:e=>{let{t}=i(c);return(0,p.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,p.jsx)(u,{...e}),(0,p.jsx)(`h1`,{children:t(`story.scrollprogress_h1`)}),(0,p.jsx)(`div`,{style:{marginTop:`100vh`},children:(0,p.jsx)(`p`,{children:t(`story.scrollprogress_middle`)})}),(0,p.jsx)(`div`,{style:{marginTop:`100vh`},children:(0,p.jsx)(`p`,{children:t(`story.scrollprogress_end`)})})]})}},g={render:e=>{let t=f.useRef(null),{t:n}=i(c);return(0,p.jsx)(`div`,{style:{padding:`20px`},children:(0,p.jsxs)(`div`,{ref:t,tabIndex:0,style:{height:`300px`,overflowY:`auto`,border:`1px solid var(--wim-color-border)`,position:`relative`},children:[(0,p.jsx)(u,{...e,target:t,style:{position:`sticky`,top:0}}),(0,p.jsx)(`div`,{style:{height:`1000px`,padding:`10px`},children:(0,p.jsx)(`p`,{children:n(`story.scrollprogress_inside`)})})]})})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>
        <ScrollProgress {...args} />
        <h1>{t("story.scrollprogress_h1")}</h1>
        <div style={{
        marginTop: "100vh"
      }}>
          <p>{t("story.scrollprogress_middle")}</p>
        </div>
        <div style={{
        marginTop: "100vh"
      }}>
          <p>{t("story.scrollprogress_end")}</p>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "20px"
    }}>
        <div ref={containerRef} tabIndex={0} style={{
        height: "300px",
        overflowY: "auto",
        border: "1px solid var(--wim-color-border)",
        position: "relative"
      }}>
          <ScrollProgress {...args} target={containerRef} style={{
          position: "sticky",
          top: 0
        }} />
          <div style={{
          height: "1000px",
          padding: "10px"
        }}>
            <p>{t("story.scrollprogress_inside")}</p>
          </div>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`CustomContainer`]}));v();export{g as CustomContainer,h as Default,_ as __namedExportsOrder,m as default,v as n,d as t};