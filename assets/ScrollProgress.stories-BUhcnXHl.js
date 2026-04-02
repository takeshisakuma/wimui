import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as u,R as x,A as g}from"./iframe-GzHoau5L.js";import{c as f}from"./index-DP26yAW4.js";import{u as v}from"./useTranslation-Ckw9ivsw.js";const l=({color:n="primary",target:e,className:i,...h})=>{const[d,y]=u.useState(0);return u.useEffect(()=>{const a=()=>{let c=0;if(e&&e.current){const s=e.current,m=s.scrollHeight-s.clientHeight;m>0&&(c=s.scrollTop/m*100)}else{const s=document.documentElement.scrollHeight-window.innerHeight;s>0&&(c=window.scrollY/s*100)}y(c)},p=e&&e.current?e.current:window;return p.addEventListener("scroll",a),a(),()=>{p.removeEventListener("scroll",a)}},[e]),r.jsx("div",{className:f("wim-scroll-progress",`wim-scroll-progress--${n}`,i),role:"progressbar","aria-valuenow":Math.round(d),"aria-valuemin":0,"aria-valuemax":100,...h,children:r.jsx("div",{className:"wim-scroll-progress__bar",style:{width:`${d}%`}})})};l.__docgenInfo={description:"読み込みの進捗やスクロール位置を視覚的に表示するためのコンポーネント。",methods:[],displayName:"ScrollProgress",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"進捗バーの色。",defaultValue:{value:'"primary"',computed:!1}},target:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement | null>",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}]},description:"スクロールを検知するターゲット要素。デフォルトは `window`。"}}};const w={title:"Components/Utilities/ScrollProgress",component:l,parameters:{layout:"fullscreen"}},o={render:n=>{const{t:e}=v(g);return r.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[r.jsx(l,{...n}),r.jsx("h1",{children:e("story.scrollprogress_h1")}),r.jsx("div",{style:{marginTop:"100vh"},children:r.jsx("p",{children:e("story.scrollprogress_middle")})}),r.jsx("div",{style:{marginTop:"100vh"},children:r.jsx("p",{children:e("story.scrollprogress_end")})})]})}},t={render:n=>{const e=x.useRef(null),{t:i}=v(g);return r.jsx("div",{style:{padding:"20px"},children:r.jsxs("div",{ref:e,tabIndex:0,style:{height:"300px",overflowY:"auto",border:"1px solid var(--wim-color-border)",position:"relative"},children:[r.jsx(l,{...n,target:e,style:{position:"sticky",top:0}}),r.jsx("div",{style:{height:"1000px",padding:"10px"},children:r.jsx("p",{children:i("story.scrollprogress_inside")})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const _=["Default","CustomContainer"],R=Object.freeze(Object.defineProperty({__proto__:null,CustomContainer:t,Default:o,__namedExportsOrder:_,default:w},Symbol.toStringTag,{value:"Module"}));export{o as D,R as S};
