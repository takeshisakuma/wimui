"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{Cr as t,br as n,cr as r,xr as i,yr as a}from"./iframe-F5Up1IQq.js";import{t as o}from"./src-Ssuy8lr7.js";import{t as s}from"./Box--bAE-pUN.js";import{t as c}from"./SpeedDial-CqIO82V2.js";import{t as l}from"./Text-DzblcqZm.js";var u,d,f,p=e((()=>{u=`_page_3iecp_2`,d=`_fabDock_3iecp_6`,f={page:u,fabDock:d}})),m,h,g,_;e((()=>{i(),n(),o(),p(),m=r(),h={title:`Components/Navigation Utilities/SpeedDial`,component:c,parameters:{layout:`fullscreen`,docs:{description:{component:`単体の Default は短いラベルを中央の箱に置いている。
実際の置き場は画面の隅で、ラベルは文になり、削除は danger。`}}}},g={render:function(){let{t:e}=t(a);return(0,m.jsxs)(`div`,{className:f.page,children:[(0,m.jsx)(s,{p:`xl`,children:(0,m.jsx)(l,{children:e(`story.speeddial_long_page`)})}),(0,m.jsx)(`div`,{className:f.fabDock,children:(0,m.jsx)(c,{open:!0,trigger:`click`,direction:`up`,"aria-label":e(`story.speeddial_long_aria`),actions:[{icon:`DownloadIcon`,label:e(`story.speeddial_long_print`),onClick:()=>void 0},{icon:`ShareIcon`,label:e(`story.speeddial_long_forward`),onClick:()=>void 0},{icon:`AlertTriangleIcon`,label:e(`story.speeddial_long_wrong`),intent:`danger`,onClick:()=>void 0}]})})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`LongLabels`]}))();export{g as LongLabels,_ as __namedExportsOrder,h as default};