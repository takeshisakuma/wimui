"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,t as d}from"./useWimTranslation-DkW6YDva.js";import{n as f,t as p}from"./common-BvPUqJnw.js";var m,h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{m=`_root_1rt0b_3`,h=`_bar_1rt0b_12`,g=`_primary_1rt0b_22`,_=`_success_1rt0b_25`,v=`_warning_1rt0b_28`,y=`_danger_1rt0b_31`,b=`_info_1rt0b_34`,x=`_neutral_1rt0b_37`,S={root:m,bar:h,primary:g,success:_,warning:v,danger:y,info:b,neutral:x}})))()}var w,T,E,D;function O(){return(O=t((()=>{w=e(r(),1),T=e(l(),1),d(),f(),C(),E=c(),D=({intent:e=`primary`,target:t,className:n,"aria-label":r,...i})=>{let{t:a}=u(p),[o,s]=(0,w.useState)(0);return(0,w.useEffect)(()=>{let e=()=>{let e=0;if(t&&t.current){let n=t.current,r=n.scrollHeight-n.clientHeight;r>0&&(e=n.scrollTop/r*100)}else{let t=document.documentElement.scrollHeight-window.innerHeight;t>0&&(e=window.scrollY/t*100)}s(e)},n=t&&t.current?t.current:window;return n.addEventListener(`scroll`,e),e(),()=>{n.removeEventListener(`scroll`,e)}},[t]),(0,E.jsx)(`div`,{className:(0,T.default)(`wim-scroll-progress`,S.root,S[e],n),role:`progressbar`,"aria-valuenow":Math.round(o),"aria-valuemin":0,"aria-valuemax":100,"aria-label":r??a(`a11y.scroll_progress`),...i,children:(0,E.jsx)(`div`,{className:S.bar,style:{width:`${o}%`}})})},D.__docgenInfo={description:`Visualizes reading progress or scroll position as a bar.`,methods:[],displayName:`ScrollProgress`,props:{intent:{required:!1,tsType:{name:`IndicatorIntent`},description:"意味の軸。兄弟の `Progress` / `ProgressRing` と同じ語彙にそろえてある。\n\n以前は `color` という名前で、値も独自（`secondary` を含む）だった。\n塗っているものは `Progress.intent` と構造まで同一だったので、prop 名だけが\nずれていた（T114）。",defaultValue:{value:`"primary"`,computed:!1}},target:{required:!1,tsType:{name:`ReactRefObject`,raw:`React.RefObject<HTMLElement | null>`,elements:[{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]}]},description:"Element whose scroll position is tracked. Defaults to `window`."}}}})))()}var k=n({CustomContainer:()=>P,Default:()=>N,__namedExportsOrder:()=>F,default:()=>M}),A,j,M,N,P,F;function I(){return(I=t((()=>{A=e(r(),1),a(),o(),O(),j=c(),M={title:`Components/Utilities/ScrollProgress`,component:D,parameters:{layout:`fullscreen`}},N={render:e=>{let{t}=i(s);return(0,j.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,j.jsx)(D,{...e}),(0,j.jsx)(`h1`,{children:t(`story.scrollprogress_h1`)}),(0,j.jsx)(`div`,{style:{marginTop:`100vh`},children:(0,j.jsx)(`p`,{children:t(`story.scrollprogress_middle`)})}),(0,j.jsx)(`div`,{style:{marginTop:`100vh`},children:(0,j.jsx)(`p`,{children:t(`story.scrollprogress_end`)})})]})}},P={render:e=>{let t=A.useRef(null),{t:n}=i(s);return(0,j.jsx)(`div`,{style:{padding:`20px`},children:(0,j.jsxs)(`div`,{ref:t,tabIndex:0,style:{height:`300px`,overflowY:`auto`,border:`1px solid var(--wim-color-border)`,position:`relative`},children:[(0,j.jsx)(D,{...e,target:t,style:{position:`sticky`,top:0}}),(0,j.jsx)(`div`,{style:{height:`1000px`,padding:`10px`},children:(0,j.jsx)(`p`,{children:n(`story.scrollprogress_inside`)})})]})})}},F=[`Default`,`CustomContainer`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}}})))()}export{k as n,I as r,N as t};