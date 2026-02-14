import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as X}from"./iframe-BMpY0rva.js";import{c as k}from"./index-DfrzlIWo.js";import{I as q}from"./Icon-BB7G6E1S.js";import{s as Y}from"./imagesanple-VDI2Kzk_.js";const D=(r,t)=>typeof r=="number"?r:r?t>=1280&&r.xl?r.xl:t>=1024&&r.lg?r.lg:t>=768&&r.md?r.md:t>=640&&r.sm?r.sm:r.base||1:1,E=({children:r,autoPlay:t=!1,interval:T=5e3,showIndicators:W=!0,showControls:z=!0,loop:i=!0,slidesToShow:I=1,className:M})=>{const d=a.useMemo(()=>X.Children.toArray(r),[r]),s=d.length,[R,P]=a.useState(typeof window<"u"?window.innerWidth:0),[o,l]=a.useState(i?s:0),[m,j]=a.useState(!1),[c,$]=a.useState(1),S=a.useRef(null),A=a.useRef(null);a.useEffect(()=>{const n=()=>P(window.innerWidth);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),a.useEffect(()=>{$(D(I,R))},[I,R]);const V=a.useMemo(()=>!i||s===0?d:[...d,...d,...d],[d,i,s]),_=a.useCallback(()=>{if(!m){if(!i){l(n=>Math.min(n+1,s-c));return}j(!0),l(n=>n+1)}},[m,i,s,c]),L=a.useCallback(()=>{if(!m){if(!i){l(n=>Math.max(n-1,0));return}j(!0),l(n=>n-1)}},[m,i]),B=n=>{m||(i?(j(!0),l(n+s)):l(n))},F=()=>{i&&(j(!1),o>=s*2?l(o-s):o<s&&l(o+s))};if(a.useEffect(()=>(t&&s>c&&(S.current=window.setInterval(_,T)),()=>{S.current&&window.clearInterval(S.current)}),[t,T,_,s,c]),s===0)return null;const C=100/c,O=-o*C;return e.jsxs("div",{className:k("wim-carousel",M),children:[e.jsx("div",{className:"wim-carousel__viewport",children:e.jsx("div",{ref:A,className:k("wim-carousel__track",m&&"wim-carousel__track--transition"),style:{transform:`translateX(${O}%)`},onTransitionEnd:F,children:V.map((n,u)=>e.jsx("div",{className:"wim-carousel__item",style:{flex:`0 0 ${C}%`,width:`${C}%`},children:n},u))})}),z&&s>c&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"wim-carousel__control wim-carousel__control--prev",onClick:L,"aria-label":"Previous slide",disabled:!i&&o===0,children:e.jsx(q,{name:"ChevronLeftIcon",size:"medium"})}),e.jsx("button",{className:"wim-carousel__control wim-carousel__control--next",onClick:_,"aria-label":"Next slide",disabled:!i&&o>=s-c,children:e.jsx(q,{name:"ChevronRightIcon",size:"medium"})})]}),W&&s>1&&e.jsx("div",{className:"wim-carousel__indicators",children:d.map((n,u)=>{const N=i?o%s===u:o===u;return e.jsx("button",{className:k("wim-carousel__indicator",N&&"wim-carousel__indicator--active"),onClick:()=>B(u),"aria-label":`Go to slide ${u+1}`,"aria-current":N},u)})})]})};E.__docgenInfo={description:"`Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。",methods:[],displayName:"Carousel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カルーセル内のコンテンツ"},autoPlay:{required:!1,tsType:{name:"boolean"},description:"自動再生するかどうか",defaultValue:{value:"false",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"自動再生の間隔（ミリ秒）",defaultValue:{value:"5000",computed:!1}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"インジケーターを表示するかどうか",defaultValue:{value:"true",computed:!1}},showControls:{required:!1,tsType:{name:"boolean"},description:"前後ボタンを表示するかどうか",defaultValue:{value:"true",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"無限ループするかどうか（シームレスな切り替え）",defaultValue:{value:"true",computed:!1}},slidesToShow:{required:!1,tsType:{name:"union",raw:"number | Breakpoints",elements:[{name:"number"},{name:"signature",type:"object",raw:`{\r
    base?: number;\r
    sm?: number;\r
    md?: number;\r
    lg?: number;\r
    xl?: number;\r
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"}}};const G={title:"Component/Media & Viz/Carousel",component:E,parameters:{layout:"centered"},args:{loop:!0},argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"},showIndicators:{control:"boolean"},showControls:{control:"boolean"},loop:{control:"boolean"},slidesToShow:{control:"number"}}},p=({index:r,width:t="600px"})=>e.jsxs("div",{style:{width:"100%",height:"300px",backgroundColor:["#f44336","#2196f3","#4caf50","#ff9800","#9c27b0","#3f51b5"][r%6],display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"32px",fontWeight:"bold",border:"4px solid rgba(255,255,255,0.2)",boxSizing:"border-box"},children:["Slide ",r+1]}),w=[e.jsx(p,{index:0},1),e.jsx(p,{index:1},2),e.jsx(p,{index:2},3),e.jsx(p,{index:3},4),e.jsx(p,{index:4},5),e.jsx(p,{index:5},6)],f={args:{children:w.slice(0,4)}},h={args:{slidesToShow:3,children:w},parameters:{layout:"padded"}},x={args:{slidesToShow:{base:1,sm:2,md:3,lg:4},children:w},parameters:{layout:"fullscreen"}},b={args:{autoPlay:!0,interval:3e3,children:w.slice(0,4)}},g={args:{children:[e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 1"}),e.jsx("p",{children:"Seamless infinite loop is enabled by default."})]})},1),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 2"}),e.jsx("p",{children:"You can see multiple items at once."})]})},2),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 3"}),e.jsx("p",{children:"The slider wraps around smoothly."})]})},3)]}},y={args:{loop:!1,children:w.slice(0,3)}},v={args:{children:Array.from({length:4}).map((r,t)=>e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx("img",{src:Y,alt:`Sample ${t+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})},`img-${t}`))}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: slides.slice(0, 4)
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    autoPlay: true,
    interval: 3000,
    children: slides.slice(0, 4)
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    loop: false,
    children: slides.slice(0, 3)
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: Array.from({
      length: 4
    }).map((_, i) => <div key={\`img-\${i}\`} style={{
      width: "100%",
      height: "300px"
    }}>\r
                <img src={SampleImage} alt={\`Sample \${i + 1}\`} style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }} />\r
            </div>)
  }
}`,...v.parameters?.docs?.source}}};const H=["Basic","MultipleItems","Responsive","AutoPlay","CustomContent","NoLoop","WithImage"],ee=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:b,Basic:f,CustomContent:g,MultipleItems:h,NoLoop:y,Responsive:x,WithImage:v,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{b as A,f as B,ee as C,h as M,y as N,x as R,v as W};
