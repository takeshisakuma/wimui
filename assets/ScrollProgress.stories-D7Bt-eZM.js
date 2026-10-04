"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,t as d}from"./useWimTranslation-akUKuRsR.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=t((()=>{f=`_root_1rt0b_3`,p=`_bar_1rt0b_12`,m=`_primary_1rt0b_22`,h=`_success_1rt0b_25`,g=`_warning_1rt0b_28`,_=`_danger_1rt0b_31`,v=`_info_1rt0b_34`,y=`_neutral_1rt0b_37`,b={root:f,bar:p,primary:m,success:h,warning:g,danger:_,info:v,neutral:y}})))()}var S,C,w,T;function E(){return(E=t((()=>{S=e(r(),1),C=e(l(),1),d(),x(),w=c(),T=({intent:e=`primary`,target:t,className:n,"aria-label":r,...i})=>{let{t:a}=u(`common`),[o,s]=(0,S.useState)(0);return(0,S.useEffect)(()=>{let e=()=>{let e=0;if(t&&t.current){let n=t.current,r=n.scrollHeight-n.clientHeight;r>0&&(e=n.scrollTop/r*100)}else{let t=document.documentElement.scrollHeight-window.innerHeight;t>0&&(e=window.scrollY/t*100)}s(e)},n=t&&t.current?t.current:window;return n.addEventListener(`scroll`,e),e(),()=>{n.removeEventListener(`scroll`,e)}},[t]),(0,w.jsx)(`div`,{className:(0,C.default)(`wim-scroll-progress`,b.root,b[e],n),role:`progressbar`,"aria-valuenow":Math.round(o),"aria-valuemin":0,"aria-valuemax":100,"aria-label":r??a(`a11y.scroll_progress`),...i,children:(0,w.jsx)(`div`,{className:b.bar,style:{width:`${o}%`}})})},T.__docgenInfo={description:`Visualizes reading progress or scroll position as a bar.`,methods:[],displayName:`ScrollProgress`,props:{intent:{required:!1,tsType:{name:`IndicatorIntent`},description:"意味の軸。兄弟の `Progress` / `ProgressRing` と同じ語彙にそろえてある。\n\n以前は `color` という名前で、値も独自（`secondary` を含む）だった。\n塗っているものは `Progress.intent` と構造まで同一だったので、prop 名だけが\nずれていた（T114）。",defaultValue:{value:`"primary"`,computed:!1}},target:{required:!1,tsType:{name:`ReactRefObject`,raw:`React.RefObject<HTMLElement | null>`,elements:[{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]}]},description:"Element whose scroll position is tracked. Defaults to `window`."}}}})))()}var D=n({CustomContainer:()=>M,Default:()=>j,__namedExportsOrder:()=>N,default:()=>A}),O,k,A,j,M,N;function P(){return(P=t((()=>{O=e(r(),1),a(),o(),E(),k=c(),A={title:`Components/Utilities/ScrollProgress`,component:T,parameters:{layout:`fullscreen`}},j={render:e=>{let{t}=i(s);return(0,k.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,k.jsx)(T,{...e}),(0,k.jsx)(`h1`,{children:t(`story.scrollprogress_h1`)}),(0,k.jsx)(`div`,{style:{marginTop:`100vh`},children:(0,k.jsx)(`p`,{children:t(`story.scrollprogress_middle`)})}),(0,k.jsx)(`div`,{style:{marginTop:`100vh`},children:(0,k.jsx)(`p`,{children:t(`story.scrollprogress_end`)})})]})}},M={render:e=>{let t=O.useRef(null),{t:n}=i(s);return(0,k.jsx)(`div`,{style:{padding:`20px`},children:(0,k.jsxs)(`div`,{ref:t,tabIndex:0,style:{height:`300px`,overflowY:`auto`,border:`1px solid var(--wim-color-border)`,position:`relative`},children:[(0,k.jsx)(T,{...e,target:t,style:{position:`sticky`,top:0}}),(0,k.jsx)(`div`,{style:{height:`1000px`,padding:`10px`},children:(0,k.jsx)(`p`,{children:n(`story.scrollprogress_inside`)})})]})})}},N=[`Default`,`CustomContainer`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}}})))()}export{D as n,P as r,j as t};