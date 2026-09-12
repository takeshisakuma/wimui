"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,Sr as a,Tr as o,ur as s,xr as c}from"./iframe-CIRVVv_5.js";import{t as l}from"./src-C35woejG.js";import{n as u,t as d}from"./OverlayBase-BJts6SR5.js";import{t as f}from"./Button-pR3L55SU.js";var p,m,h,g,_=t((()=>{p=`_overlay_1drt3_2`,m=`_content_1drt3_9`,h=`_actions_1drt3_19`,g={overlay:p,content:m,actions:h}})),v=e({Default:()=>S,__namedExportsOrder:()=>C,default:()=>x}),y,b,x,S,C,w=t((()=>{y=n(r(),1),i(),u(),l(),a(),_(),b=s(),x={title:`Components/Internal/OverlayBase`,component:d,parameters:{layout:`centered`}},S={render:function(){let{t:e}=o(c),[t,n]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{onClick:()=>n(!0),children:e(`story.overlaybase_open`)}),(0,b.jsxs)(d,{open:t,onOpenChange:n,overlayClassName:g.overlay,contentClassName:g.content,children:[(0,b.jsx)(`h3`,{style:{margin:`0 0 var(--wim-spacing-sm) 0`},children:e(`story.overlaybase_title`)}),(0,b.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`},children:e(`story.overlaybase_desc`)}),(0,b.jsx)(`div`,{className:g.actions,children:(0,b.jsx)(f,{variant:`outline`,onClick:()=>n(!1),children:e(`story.iconbutton_close`)})})]})]})}},C=[`Default`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}}));w();export{S as Default,C as __namedExportsOrder,x as default,w as n,v as t};