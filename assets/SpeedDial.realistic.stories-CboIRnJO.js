"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./useTranslation-BDKsuBAo.js";import{n as r,t as i}from"./i18nConstants-BhvmnjLS.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Box-BNJo1pMu.js";import{n as c,t as l}from"./Text-1X1ZsZfu.js";import{n as u,t as d}from"./SpeedDial-DAQyRlgh.js";var f,p,m;function h(){return(h=e((()=>{f=`_page_3iecp_2`,p=`_fabDock_3iecp_6`,m={page:f,fabDock:p}})))()}var g,_,v,y;function b(){return(b=e((()=>{n(),r(),o(),u(),c(),h(),g=a(),_={title:`Components/Navigation Utilities/SpeedDial`,component:d,parameters:{layout:`fullscreen`,docs:{description:{component:`単体の Default は短いラベルを中央の箱に置いている。
実際の置き場は画面の隅で、ラベルは文になり、削除は danger。`}}}},v={render:function(){let{t:e}=t(i);return(0,g.jsxs)(`div`,{className:m.page,children:[(0,g.jsx)(s,{p:`xl`,children:(0,g.jsx)(l,{children:e(`story.speeddial_long_page`)})}),(0,g.jsx)(`div`,{className:m.fabDock,children:(0,g.jsx)(d,{open:!0,trigger:`click`,direction:`up`,"aria-label":e(`story.speeddial_long_aria`),actions:[{icon:`DownloadIcon`,label:e(`story.speeddial_long_print`),onClick:()=>void 0},{icon:`ShareIcon`,label:e(`story.speeddial_long_forward`),onClick:()=>void 0},{icon:`AlertTriangleIcon`,label:e(`story.speeddial_long_wrong`),intent:`danger`,onClick:()=>void 0}]})})]})}},y=[`LongLabels`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div className={styles.page}>
        <Box p="xl">
          <Text>{t("story.speeddial_long_page")}</Text>
        </Box>
        <div className={styles.fabDock}>
          <SpeedDial open trigger="click" direction="up" aria-label={t("story.speeddial_long_aria")} actions={[{
          icon: "DownloadIcon",
          label: t("story.speeddial_long_print"),
          onClick: () => undefined
        }, {
          icon: "ShareIcon",
          label: t("story.speeddial_long_forward"),
          onClick: () => undefined
        }, {
          icon: "AlertTriangleIcon",
          label: t("story.speeddial_long_wrong"),
          intent: "danger",
          onClick: () => undefined
        }]} />
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as LongLabels,y as __namedExportsOrder,_ as default};