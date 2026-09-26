"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,Sr as i,Tr as a,ur as o,xr as s}from"./iframe-DkmqI5Zh.js";import{hi as c,t as l}from"./src-BWkk1A6b.js";import{r as u,t as d}from"./DemoCell-DrY2yu05.js";var f=e({Constraints:()=>b,Horizontal:()=>g,MultiplePanels:()=>v,Nested:()=>y,Vertical:()=>_,__namedExportsOrder:()=>x,default:()=>m}),p,m,h,g,_,v,y,b,x,S=t((()=>{n(),r(),i(),l(),u(),p=o(),m={title:`Components/Layout/Splitter`,component:c,parameters:{layout:`fullscreen`}},h=({children:e,intent:t=`primary`})=>(0,p.jsx)(d,{intent:t,h:`100%`,radius:0,style:{fontSize:`var(--wim-font-size-2xl)`},children:e}),g={render:function(){let{t:e}=a(s);return(0,p.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,p.jsxs)(c,{orientation:`horizontal`,children:[(0,p.jsx)(c.Panel,{defaultSize:30,children:(0,p.jsx)(h,{intent:`primary`,children:e(`story.splitter_left`,`Left Panel`)})}),(0,p.jsx)(c.Handle,{}),(0,p.jsx)(c.Panel,{defaultSize:70,children:(0,p.jsx)(h,{intent:`neutral`,children:e(`story.splitter_right`,`Right Panel`)})})]})})}},_={render:function(){let{t:e}=a(s);return(0,p.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,p.jsxs)(c,{orientation:`vertical`,children:[(0,p.jsx)(c.Panel,{defaultSize:40,children:(0,p.jsx)(h,{intent:`primary`,children:e(`story.splitter_top`,`Top Panel`)})}),(0,p.jsx)(c.Handle,{}),(0,p.jsx)(c.Panel,{defaultSize:60,children:(0,p.jsx)(h,{intent:`neutral`,children:e(`story.splitter_bottom`,`Bottom Panel`)})})]})})}},v={render:function(){let{t:e}=a(s);return(0,p.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,p.jsxs)(c,{orientation:`horizontal`,children:[(0,p.jsx)(c.Panel,{defaultSize:20,children:(0,p.jsx)(h,{intent:`primary`,children:e(`story.splitter_panel_1`,`Files`)})}),(0,p.jsx)(c.Handle,{}),(0,p.jsx)(c.Panel,{defaultSize:60,children:(0,p.jsx)(h,{intent:`neutral`,children:e(`story.splitter_panel_2`,`Editor`)})}),(0,p.jsx)(c.Handle,{}),(0,p.jsx)(c.Panel,{defaultSize:20,children:(0,p.jsx)(h,{intent:`neutral`,children:e(`story.splitter_panel_3`,`Preview`)})})]})})}},y={render:function(){let{t:e}=a(s);return(0,p.jsx)(`div`,{style:{height:`600px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,p.jsxs)(c,{orientation:`horizontal`,children:[(0,p.jsx)(c.Panel,{defaultSize:25,children:(0,p.jsx)(h,{intent:`primary`,children:e(`story.splitter_sidebar`,`Sidebar`)})}),(0,p.jsx)(c.Handle,{}),(0,p.jsx)(c.Panel,{defaultSize:75,children:(0,p.jsxs)(c,{orientation:`vertical`,children:[(0,p.jsx)(c.Panel,{defaultSize:70,children:(0,p.jsx)(h,{intent:`neutral`,children:e(`story.splitter_main`,`Main Content`)})}),(0,p.jsx)(c.Handle,{}),(0,p.jsx)(c.Panel,{defaultSize:30,children:(0,p.jsx)(h,{intent:`neutral`,children:e(`story.splitter_logs`,`Console / Logs`)})})]})})]})})}},b={render:function(){let{t:e}=a(s);return(0,p.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,p.jsxs)(c,{orientation:`horizontal`,children:[(0,p.jsx)(c.Panel,{minSize:20,maxSize:50,defaultSize:30,children:(0,p.jsx)(h,{intent:`primary`,children:e(`story.splitter_minmax`,`Min: 20%, Max: 50%`)})}),(0,p.jsx)(c.Handle,{}),(0,p.jsx)(c.Panel,{children:(0,p.jsx)(h,{intent:`neutral`,children:e(`story.splitter_flexible`,`Flexible Panel`)})})]})})}},x=[`Horizontal`,`Vertical`,`MultiplePanels`,`Nested`,`Constraints`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border)",
      "--wim-splitter-handle-color": "var(--wim-color-border)",
      "--wim-splitter-handle-width": "1px"
    } as React.CSSProperties}>
        <Splitter orientation="horizontal">
          <Splitter.Panel defaultSize={30}>
            <PanelContent intent="primary">{t("story.splitter_left", "Left Panel")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={70}>
            <PanelContent intent="neutral">{t("story.splitter_right", "Right Panel")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border)",
      "--wim-splitter-handle-color": "var(--wim-color-border)",
      "--wim-splitter-handle-width": "1px"
    } as React.CSSProperties}>
        <Splitter orientation="vertical">
          <Splitter.Panel defaultSize={40}>
            <PanelContent intent="primary">{t("story.splitter_top", "Top Panel")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={60}>
            <PanelContent intent="neutral">{t("story.splitter_bottom", "Bottom Panel")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border)",
      "--wim-splitter-handle-color": "var(--wim-color-border)",
      "--wim-splitter-handle-width": "1px"
    } as React.CSSProperties}>
        <Splitter orientation="horizontal">
          <Splitter.Panel defaultSize={20}>
            <PanelContent intent="primary">{t("story.splitter_panel_1", "Files")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={60}>
            <PanelContent intent="neutral">{t("story.splitter_panel_2", "Editor")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={20}>
            <PanelContent intent="neutral">{t("story.splitter_panel_3", "Preview")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "600px",
      border: "1px solid",
      borderColor: "var(--wim-color-border)",
      "--wim-splitter-handle-color": "var(--wim-color-border)",
      "--wim-splitter-handle-width": "1px"
    } as React.CSSProperties}>
        <Splitter orientation="horizontal">
          <Splitter.Panel defaultSize={25}>
            <PanelContent intent="primary">{t("story.splitter_sidebar", "Sidebar")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={75}>
            <Splitter orientation="vertical">
              <Splitter.Panel defaultSize={70}>
                <PanelContent intent="neutral">{t("story.splitter_main", "Main Content")}</PanelContent>
              </Splitter.Panel>
              <Splitter.Handle />
              <Splitter.Panel defaultSize={30}>
                <PanelContent intent="neutral">{t("story.splitter_logs", "Console / Logs")}</PanelContent>
              </Splitter.Panel>
            </Splitter>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border)",
      "--wim-splitter-handle-color": "var(--wim-color-border)",
      "--wim-splitter-handle-width": "1px"
    } as React.CSSProperties}>
        <Splitter orientation="horizontal">
          <Splitter.Panel minSize={20} maxSize={50} defaultSize={30}>
            <PanelContent intent="primary">{t("story.splitter_minmax", "Min: 20%, Max: 50%")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel>
            <PanelContent intent="neutral">{t("story.splitter_flexible", "Flexible Panel")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...b.parameters?.docs?.source}}}}));S();export{b as Constraints,g as Horizontal,v as MultiplePanels,y as Nested,_ as Vertical,x as __namedExportsOrder,m as default,S as n,f as t};