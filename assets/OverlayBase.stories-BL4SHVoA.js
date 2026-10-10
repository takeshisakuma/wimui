"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./OverlayBase-BRn0qDzz.js";import{n as d,t as f}from"./Button-DSrkNfg0.js";var p,m,h,g;function _(){return(_=t((()=>{p=`_overlay_1drt3_2`,m=`_content_1drt3_9`,h=`_actions_1drt3_19`,g={overlay:p,content:m,actions:h}})))()}var v=n({Default:()=>S,__namedExportsOrder:()=>C,default:()=>x}),y,b,x,S,C;function w(){return(w=t((()=>{y=e(r(),1),a(),l(),d(),o(),_(),b=c(),x={title:`Components/Internal/OverlayBase`,component:u,parameters:{layout:`centered`}},S={render:function(){let{t:e}=i(s),[t,n]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{onClick:()=>n(!0),children:e(`story.overlaybase_open`)}),(0,b.jsxs)(u,{open:t,onOpenChange:n,overlayClassName:g.overlay,contentClassName:g.content,children:[(0,b.jsx)(`h3`,{style:{margin:`0 0 var(--wim-spacing-sm) 0`},children:e(`story.overlaybase_title`)}),(0,b.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`},children:e(`story.overlaybase_desc`)}),(0,b.jsx)(`div`,{className:g.actions,children:(0,b.jsx)(f,{variant:`outline`,onClick:()=>n(!1),children:e(`story.iconbutton_close`)})})]})]})}},C=[`Default`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>{t("story.overlaybase_open")}</Button>
        <OverlayBase open={open} onOpenChange={setOpen} overlayClassName={demoStyles.overlay} contentClassName={demoStyles.content}>
          <h3 style={{
          margin: "0 0 var(--wim-spacing-sm) 0"
        }}>
            {t("story.overlaybase_title")}
          </h3>
          <p style={{
          margin: 0,
          color: "var(--wim-color-text-secondary)"
        }}>
            {t("story.overlaybase_desc")}
          </p>
          <div className={demoStyles.actions}>
            <Button variant="outline" onClick={() => setOpen(false)}>
              {t("story.iconbutton_close")}
            </Button>
          </div>
        </OverlayBase>
      </>;
  }
}`,...S.parameters?.docs?.source}}}})))()}export{v as n,w as r,S as t};