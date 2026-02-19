import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m,R as v}from"./iframe-ylVohT6i.js";import{c as x}from"./index-C6pZpGhD.js";const l=({color:s="primary",target:r,className:u,...h})=>{const[c,g]=m.useState(0);return m.useEffect(()=>{const i=()=>{let a=0;if(r&&r.current){const n=r.current,p=n.scrollHeight-n.clientHeight;p>0&&(a=n.scrollTop/p*100)}else{const n=document.documentElement.scrollHeight-window.innerHeight;n>0&&(a=window.scrollY/n*100)}g(a)},d=r&&r.current?r.current:window;return d.addEventListener("scroll",i),i(),()=>{d.removeEventListener("scroll",i)}},[r]),e.jsx("div",{className:x("wim-scroll-progress",`wim-scroll-progress--${s}`,u),role:"progressbar","aria-valuenow":Math.round(c),"aria-valuemin":0,"aria-valuemax":100,...h,children:e.jsx("div",{className:"wim-scroll-progress__bar",style:{width:`${c}%`}})})};l.__docgenInfo={description:"読み込みの進捗やスクロール位置を視覚的に表示するためのコンポーネント。",methods:[],displayName:"ScrollProgress",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"進捗バーの色。",defaultValue:{value:'"primary"',computed:!1}},target:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement | null>",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}]},description:"スクロールを検知するターゲット要素。デフォルトは `window`。"}}};const f={title:"Component/Feedback/ScrollProgress",component:l,parameters:{layout:"fullscreen"}},t={render:s=>e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx(l,{...s}),e.jsx("h1",{children:"Scroll down to see the progress bar at the top"}),e.jsx("div",{style:{marginTop:"100vh"},children:e.jsx("p",{children:"Reached the middle"})}),e.jsx("div",{style:{marginTop:"100vh"},children:e.jsx("p",{children:"Reached the end"})})]})},o={render:s=>{const r=v.useRef(null);return e.jsx("div",{style:{padding:"20px"},children:e.jsxs("div",{ref:r,style:{height:"300px",overflowY:"auto",border:"1px solid #ccc",position:"relative"},children:[e.jsx(l,{...s,target:r,style:{position:"sticky",top:0}}),e.jsx("div",{style:{height:"1000px",padding:"10px"},children:e.jsx("p",{children:"Scroll inside this container"})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    height: "200vh",
    padding: "20px"
  }}>\r
            <ScrollProgress {...args} />\r
            <h1>Scroll down to see the progress bar at the top</h1>\r
            <div style={{
      marginTop: "100vh"
    }}>\r
                <p>Reached the middle</p>\r
            </div>\r
            <div style={{
      marginTop: "100vh"
    }}>\r
                <p>Reached the end</p>\r
            </div>\r
        </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const containerRef = React.useRef<HTMLDivElement>(null);
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
                        <p>Scroll inside this container</p>\r
                    </div>\r
                </div>\r
            </div>;
  }
}`,...o.parameters?.docs?.source}}};const y=["Default","CustomContainer"],S=Object.freeze(Object.defineProperty({__proto__:null,CustomContainer:o,Default:t,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{t as D,S};
