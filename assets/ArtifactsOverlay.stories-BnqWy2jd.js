"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,Sr as a,Tr as o,ur as s,xr as c}from"./iframe-wf1-Tomv.js";import{n as l,t as u}from"./ArtifactsOverlay-C7Ir88Vu.js";import{n as d,t as f}from"./Button-BgC4JuQN.js";import{n as p,t as m}from"./MarkdownRenderer-B8QufTBk.js";var h=e({Default:()=>y,__namedExportsOrder:()=>b,default:()=>v}),g,_,v,y,b,x=t((()=>{g=n(r(),1),l(),p(),d(),i(),a(),_=s(),v={title:`Components/AI/ArtifactsOverlay`,component:u,parameters:{layout:`fullscreen`}},y={render:function(){let{t:e}=o(c),[t,n]=(0,g.useState)(!1);return(0,_.jsxs)(`div`,{style:{display:`grid`,placeItems:`center`,height:`100vh`},children:[(0,_.jsx)(f,{onClick:()=>n(!0),children:e(`story.artifacts_overlay_open_btn`)}),(0,_.jsx)(u,{open:t,onOpenChange:n,title:e(`story.artifacts_overlay_title`),subtitle:e(`story.artifacts_overlay_subtitle`),showFullscreenToggle:!0,children:(0,_.jsx)(m,{content:e(`story.artifacts_overlay_content`)})})]})}},b=[`Default`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    return <div style={{
      display: "grid",
      placeItems: "center",
      height: "100vh"
    }}>
        <Button onClick={() => setOpen(true)}>{t("story.artifacts_overlay_open_btn")}</Button>
        <ArtifactsOverlay open={open} onOpenChange={setOpen} title={t("story.artifacts_overlay_title")} subtitle={t("story.artifacts_overlay_subtitle")} showFullscreenToggle>
          <MarkdownRenderer content={t("story.artifacts_overlay_content")} />
        </ArtifactsOverlay>
      </div>;
  }
}`,...y.parameters?.docs?.source}}}}));x();export{y as Default,b as __namedExportsOrder,v as default,x as n,h as t};