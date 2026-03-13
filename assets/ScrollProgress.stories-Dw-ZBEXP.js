import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as u,R as y}from"./iframe-D4gOfWnt.js";import{c as h}from"./index-Cl0yRb9X.js";import{u as g}from"./useTranslation-BONq47qB.js";const l=({color:o="primary",target:e,className:i,..._})=>{const[d,v]=u.useState(0);return u.useEffect(()=>{const c=()=>{let a=0;if(e&&e.current){const r=e.current,m=r.scrollHeight-r.clientHeight;m>0&&(a=r.scrollTop/m*100)}else{const r=document.documentElement.scrollHeight-window.innerHeight;r>0&&(a=window.scrollY/r*100)}v(a)},p=e&&e.current?e.current:window;return p.addEventListener("scroll",c),c(),()=>{p.removeEventListener("scroll",c)}},[e]),s.jsx("div",{className:h("wim-scroll-progress",`wim-scroll-progress--${o}`,i),role:"progressbar","aria-valuenow":Math.round(d),"aria-valuemin":0,"aria-valuemax":100,..._,children:s.jsx("div",{className:"wim-scroll-progress__bar",style:{width:`${d}%`}})})};l.__docgenInfo={description:"読み込みの進捗やスクロール位置を視覚的に表示するためのコンポーネント。",methods:[],displayName:"ScrollProgress",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"進捗バーの色。",defaultValue:{value:'"primary"',computed:!1}},target:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement | null>",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}]},description:"スクロールを検知するターゲット要素。デフォルトは `window`。"}}};const f={title:"Components/Utilities/ScrollProgress",component:l,parameters:{layout:"fullscreen"}},n={render:o=>{const{t:e}=g(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[s.jsx(l,{...o}),s.jsx("h1",{children:e("story_scrollprogress_h1")}),s.jsx("div",{style:{marginTop:"100vh"},children:s.jsx("p",{children:e("story_scrollprogress_middle")})}),s.jsx("div",{style:{marginTop:"100vh"},children:s.jsx("p",{children:e("story_scrollprogress_end")})})]})}},t={render:o=>{const e=y.useRef(null),{t:i}=g(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx("div",{style:{padding:"20px"},children:s.jsxs("div",{ref:e,style:{height:"300px",overflowY:"auto",border:"1px solid #ccc",position:"relative"},children:[s.jsx(l,{...o,target:e,style:{position:"sticky",top:0}}),s.jsx("div",{style:{height:"1000px",padding:"10px"},children:s.jsx("p",{children:i("story_scrollprogress_inside")})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>\r
        <ScrollProgress {...args} />\r
        <h1>{t("story_scrollprogress_h1")}</h1>\r
        <div style={{
        marginTop: "100vh"
      }}>\r
          <p>{t("story_scrollprogress_middle")}</p>\r
        </div>\r
        <div style={{
        marginTop: "100vh"
      }}>\r
          <p>{t("story_scrollprogress_end")}</p>\r
        </div>\r
      </div>;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      padding: "20px"
    }}>\r
        <div ref={containerRef} style={{
        height: "300px",
        overflowY: "auto",
        border: "1px solid #ccc",
        position: "relative"
      }}>\r
          <ScrollProgress {...args} target={containerRef} style={{
          position: "sticky",
          top: 0
        }} />\r
          <div style={{
          height: "1000px",
          padding: "10px"
        }}>\r
            <p>{t("story_scrollprogress_inside")}</p>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const x=["Default","CustomContainer"],S=Object.freeze(Object.defineProperty({__proto__:null,CustomContainer:t,Default:n,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{n as D,S};
