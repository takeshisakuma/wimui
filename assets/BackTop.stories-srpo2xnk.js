"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{n as l,t as u}from"./BackTop-DrZldHvq.js";var d=e({Basic:()=>h,CustomElement:()=>g,SpecificTarget:()=>v,__namedExportsOrder:()=>y,default:()=>m}),f,p,m,h,g,_,v,y,b=t((()=>{l(),f=n(r(),1),s(),a(),p=o(),m={title:`Components/Navigation Utilities/BackTop`,component:u,parameters:{layout:`fullscreen`}},h={render:e=>{let{t}=i(c);return(0,p.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,p.jsx)(`p`,{children:t(`story.backtop_scroll`)}),(0,p.jsx)(`p`,{children:t(`story.backtop_visible_400`)}),(0,p.jsx)(u,{...e,visibilityHeight:400})]})}},g={render:e=>{let{t}=i(c);return(0,p.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,p.jsx)(`p`,{children:t(`story.backtop_custom_scroll`)}),(0,p.jsx)(`p`,{children:t(`story.backtop_visible_200`)}),(0,p.jsx)(u,{...e,visibilityHeight:200,children:(0,p.jsx)(`div`,{style:{height:40,width:40,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:4,backgroundColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-on-primary)`,fontSize:14},children:t(`story.backtop_up`)})})]})}},_=()=>{let[e,t]=f.useState(null),{t:n}=i(c);return(0,p.jsxs)(`div`,{style:{padding:`20px`},children:[(0,p.jsx)(`p`,{children:n(`story.backtop_target_msg`)}),(0,p.jsx)(`div`,{ref:e=>t(e),tabIndex:0,style:{height:`300px`,overflowY:`scroll`,border:`1px solid var(--wim-color-primary)`,padding:`20px`,position:`relative`},children:(0,p.jsxs)(`div`,{style:{height:`1000px`},children:[(0,p.jsx)(`p`,{children:n(`story.backtop_inside_box`)}),(0,p.jsx)(u,{target:()=>e,visibilityHeight:100,style:{position:`absolute`,right:20,bottom:20}})]})})]})},v={render:()=>(0,p.jsx)(_,{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>
        <p>{t("story.backtop_scroll")}</p>
        <p>{t("story.backtop_visible_400")}</p>
        <BackTop {...args} visibilityHeight={400} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>
        <p>{t("story.backtop_custom_scroll")}</p>
        <p>{t("story.backtop_visible_200")}</p>
        <BackTop {...args} visibilityHeight={200}>
          <div style={{
          height: 40,
          width: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          backgroundColor: "var(--wim-color-primary)",
          color: "var(--wim-color-text-on-primary)",
          fontSize: 14
        }}>
            {t("story.backtop_up")}
          </div>
        </BackTop>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <SpecificTargetStory />
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`CustomElement`,`SpecificTarget`]}));b();export{h as Basic,g as CustomElement,v as SpecificTarget,y as __namedExportsOrder,m as default,b as n,d as t};