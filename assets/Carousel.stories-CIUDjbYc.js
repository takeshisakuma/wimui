import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o,R as X}from"./iframe-CgGi8QfL.js";import{P as a}from"./index-D18CoHLM.js";import{I as N}from"./Icon-DcD4NQaU.js";const Y=(r,l)=>typeof r=="number"?r:r?l>=1280&&r.xl?r.xl:l>=1024&&r.lg?r.lg:l>=768&&r.md?r.md:l>=640&&r.sm?r.sm:r.base||1:1,T=({children:r,autoPlay:l=!1,interval:k=5e3,showIndicators:P=!0,showControls:E=!0,loop:i=!0,slidesToShow:R=1,className:M=""})=>{const c=o.useMemo(()=>X.Children.toArray(r),[r]),n=c.length,[I,z]=o.useState(typeof window<"u"?window.innerWidth:0),[t,d]=o.useState(i?n:0),[p,j]=o.useState(!1),[u,V]=o.useState(1),C=o.useRef(null),W=o.useRef(null);o.useEffect(()=>{const s=()=>z(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),o.useEffect(()=>{V(Y(R,I))},[R,I]);const B=o.useMemo(()=>!i||n===0?c:[...c,...c,...c],[c,i,n]),S=o.useCallback(()=>{if(!p){if(!i){d(s=>Math.min(s+1,n-u));return}j(!0),d(s=>s+1)}},[p,i,n,u]),A=o.useCallback(()=>{if(!p){if(!i){d(s=>Math.max(s-1,0));return}j(!0),d(s=>s-1)}},[p,i]),L=s=>{p||(i?(j(!0),d(s+n)):d(s))},O=()=>{i&&(j(!1),t>=n*2?d(t-n):t<n&&d(t+n))};if(o.useEffect(()=>(l&&n>u&&(C.current=window.setInterval(S,k)),()=>{C.current&&window.clearInterval(C.current)}),[l,k,S,n,u]),n===0)return null;const _=100/u,$=-t*_;return e.jsxs("div",{className:["wim-carousel",M].filter(Boolean).join(" "),children:[e.jsx("div",{className:"wim-carousel__viewport",children:e.jsx("div",{ref:W,className:["wim-carousel__track",p?"wim-carousel__track--transition":""].join(" "),style:{transform:`translateX(${$}%)`},onTransitionEnd:O,children:B.map((s,m)=>e.jsx("div",{className:"wim-carousel__item",style:{flex:`0 0 ${_}%`,width:`${_}%`},children:s},m))})}),E&&n>u&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"wim-carousel__control wim-carousel__control--prev",onClick:A,"aria-label":"Previous slide",disabled:!i&&t===0,children:e.jsx(N,{name:"ChevronLeftIcon",size:"medium"})}),e.jsx("button",{className:"wim-carousel__control wim-carousel__control--next",onClick:S,"aria-label":"Next slide",disabled:!i&&t>=n-u,children:e.jsx(N,{name:"ChevronRightIcon",size:"medium"})})]}),P&&n>1&&e.jsx("div",{className:"wim-carousel__indicators",children:c.map((s,m)=>{const q=i?t%n===m:t===m;return e.jsx("button",{className:["wim-carousel__indicator",q?"wim-carousel__indicator--active":""].filter(Boolean).join(" "),onClick:()=>L(m),"aria-label":`Go to slide ${m+1}`,"aria-current":q},m)})})]})};T.propTypes={children:a.node,autoPlay:a.bool,interval:a.number,showIndicators:a.bool,showControls:a.bool,loop:a.bool,slidesToShow:a.oneOfType([a.number,a.shape({base:a.number,sm:a.number,md:a.number,lg:a.number,xl:a.number})]),className:a.string};T.__docgenInfo={description:"`Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。",methods:[],displayName:"Carousel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カルーセル内のコンテンツ",type:{name:"node"}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"自動再生するかどうか",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},interval:{required:!1,tsType:{name:"number"},description:"自動再生の間隔（ミリ秒）",defaultValue:{value:"5000",computed:!1},type:{name:"number"}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"インジケーターを表示するかどうか",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},showControls:{required:!1,tsType:{name:"boolean"},description:"前後ボタンを表示するかどうか",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},loop:{required:!1,tsType:{name:"boolean"},description:"無限ループするかどうか（シームレスな切り替え）",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},slidesToShow:{required:!1,tsType:{name:"union",raw:"number | Breakpoints",elements:[{name:"number"},{name:"signature",type:"object",raw:`{\r
    base?: number;\r
    sm?: number;\r
    md?: number;\r
    lg?: number;\r
    xl?: number;\r
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。",defaultValue:{value:"1",computed:!1},type:{name:"union",value:[{name:"number"},{name:"shape",value:{base:{name:"number",required:!1},sm:{name:"number",required:!1},md:{name:"number",required:!1},lg:{name:"number",required:!1},xl:{name:"number",required:!1}}}]}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const D={title:"Component/Media/Carousel",component:T,parameters:{layout:"centered"},args:{loop:!0},argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"},showIndicators:{control:"boolean"},showControls:{control:"boolean"},loop:{control:"boolean"},slidesToShow:{control:"number"}}},f=({index:r,width:l="600px"})=>e.jsxs("div",{style:{width:"100%",height:"300px",backgroundColor:["#f44336","#2196f3","#4caf50","#ff9800","#9c27b0","#3f51b5"][r%6],display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"32px",fontWeight:"bold",border:"4px solid rgba(255,255,255,0.2)",boxSizing:"border-box"},children:["Slide ",r+1]}),w=[e.jsx(f,{index:0},1),e.jsx(f,{index:1},2),e.jsx(f,{index:2},3),e.jsx(f,{index:3},4),e.jsx(f,{index:4},5),e.jsx(f,{index:5},6)],b={args:{children:w.slice(0,4)}},h={args:{slidesToShow:3,children:w},parameters:{layout:"padded"}},x={args:{slidesToShow:{base:1,sm:2,md:3,lg:4},children:w},parameters:{layout:"fullscreen"}},y={args:{autoPlay:!0,interval:3e3,children:w.slice(0,4)}},g={args:{children:[e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 1"}),e.jsx("p",{children:"Seamless infinite loop is enabled by default."})]})},1),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 2"}),e.jsx("p",{children:"You can see multiple items at once."})]})},2),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 3"}),e.jsx("p",{children:"The slider wraps around smoothly."})]})},3)]}},v={args:{loop:!1,children:w.slice(0,3)}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: slides.slice(0, 4)
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    slidesToShow: 3,
    children: slides
  },
  parameters: {
    layout: "padded"
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    slidesToShow: {
      base: 1,
      sm: 2,
      md: 3,
      lg: 4
    },
    children: slides
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    autoPlay: true,
    interval: 3000,
    children: slides.slice(0, 4)
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<div key={1} style={{
      padding: "0 10px",
      width: "100%"
    }}>\r
                <div style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#f9f9f9"
      }}>\r
                    <h3>Card 1</h3>\r
                    <p>Seamless infinite loop is enabled by default.</p>\r
                </div>\r
            </div>, <div key={2} style={{
      padding: "0 10px",
      width: "100%"
    }}>\r
                <div style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#f9f9f9"
      }}>\r
                    <h3>Card 2</h3>\r
                    <p>You can see multiple items at once.</p>\r
                </div>\r
            </div>, <div key={3} style={{
      padding: "0 10px",
      width: "100%"
    }}>\r
                <div style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#f9f9f9"
      }}>\r
                    <h3>Card 3</h3>\r
                    <p>The slider wraps around smoothly.</p>\r
                </div>\r
            </div>]
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    loop: false,
    children: slides.slice(0, 3)
  }
}`,...v.parameters?.docs?.source}}};const F=["Basic","MultipleItems","Responsive","AutoPlay","CustomContent","NoLoop"],Q=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:y,Basic:b,CustomContent:g,MultipleItems:h,NoLoop:v,Responsive:x,__namedExportsOrder:F,default:D},Symbol.toStringTag,{value:"Module"}));export{y as A,b as B,Q as C,h as M,v as N,x as R};
