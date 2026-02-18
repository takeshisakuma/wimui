import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as U}from"./iframe-Wrf-g223.js";import{c as N}from"./index-CreZn8t3.js";import{I as A}from"./Icon-CoEWLwf6.js";import{s as Z}from"./imagesanple-VDI2Kzk_.js";const ee=(s,o)=>typeof s=="number"?s:s?o>=1280&&s.xl?s.xl:o>=1024&&s.lg?s.lg:o>=768&&s.md?s.md:o>=640&&s.sm?s.sm:s.base||1:1,z=({children:s,autoPlay:o=!1,interval:E=5e3,showIndicators:$=!0,showControls:L=!0,loop:t=!0,slidesToShow:q=1,className:V})=>{const c=a.useMemo(()=>U.Children.toArray(s),[s]),n=c.length,[M,X]=a.useState(typeof window<"u"?window.innerWidth:0),[l,d]=a.useState(t?n:0),[m,S]=a.useState(!1),[u,B]=a.useState(1),[P,_]=a.useState(!1),k=a.useRef(null),D=a.useRef(null),C=a.useRef(null),T=a.useRef(null);a.useEffect(()=>{const r=()=>X(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),a.useEffect(()=>{B(ee(q,M))},[q,M]);const F=a.useMemo(()=>!t||n===0?c:[...c,...c,...c],[c,t,n]),f=a.useCallback(()=>{if(!m){if(!t){d(r=>Math.min(r+1,n-u));return}S(!0),d(r=>r+1)}},[m,t,n,u]),I=a.useCallback(()=>{if(!m){if(!t){d(r=>Math.max(r-1,0));return}S(!0),d(r=>r-1)}},[m,t]),O=r=>{m||(t?(S(!0),d(r+n)):d(r))},K=()=>{t&&(S(!1),l>=n*2?d(l-n):l<n&&d(l+n))};a.useEffect(()=>(o&&!P&&n>u&&(k.current=window.setInterval(f,E)),()=>{k.current&&window.clearInterval(k.current)}),[o,E,f,n,u,P]);const Y=r=>{r.key==="ArrowLeft"?I():r.key==="ArrowRight"&&f()},G=r=>{C.current=r.targetTouches[0].clientX},H=r=>{T.current=r.targetTouches[0].clientX},J=()=>{if(!C.current||!T.current)return;const r=C.current-T.current,i=50;r>i?f():r<-i&&I(),C.current=null,T.current=null};if(n===0)return null;const R=100/u,Q=-l*R;return e.jsxs("div",{className:N("wim-carousel",V),onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),onFocus:()=>_(!0),onBlur:()=>_(!1),onKeyDown:Y,tabIndex:0,role:"region","aria-roledescription":"carousel",children:[e.jsx("div",{className:"wim-carousel__viewport",children:e.jsx("div",{ref:D,className:N("wim-carousel__track",m&&"wim-carousel__track--transition"),style:{transform:`translateX(${Q}%)`},onTransitionEnd:K,onTouchStart:G,onTouchMove:H,onTouchEnd:J,children:F.map((r,i)=>e.jsx("div",{className:"wim-carousel__item",style:{flex:`0 0 ${R}%`,width:`${R}%`},role:"group","aria-roledescription":"slide",children:r},i))})}),L&&n>u&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"wim-carousel__control wim-carousel__control--prev",onClick:I,"aria-label":"Previous slide",disabled:!t&&l===0,tabIndex:-1,children:e.jsx(A,{name:"ChevronLeftIcon",size:"medium"})}),e.jsx("button",{className:"wim-carousel__control wim-carousel__control--next",onClick:f,"aria-label":"Next slide",disabled:!t&&l>=n-u,tabIndex:-1,children:e.jsx(A,{name:"ChevronRightIcon",size:"medium"})})]}),$&&n>1&&e.jsx("div",{className:"wim-carousel__indicators",children:c.map((r,i)=>{const W=t?l%n===i:l===i;return e.jsx("button",{className:N("wim-carousel__indicator",W&&"wim-carousel__indicator--active"),onClick:()=>O(i),"aria-label":`Go to slide ${i+1}`,"aria-current":W?"true":"false"},i)})})]})};z.__docgenInfo={description:"`Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。",methods:[],displayName:"Carousel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カルーセル内のコンテンツ"},autoPlay:{required:!1,tsType:{name:"boolean"},description:"自動再生するかどうか",defaultValue:{value:"false",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"自動再生の間隔（ミリ秒）",defaultValue:{value:"5000",computed:!1}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"インジケーターを表示するかどうか",defaultValue:{value:"true",computed:!1}},showControls:{required:!1,tsType:{name:"boolean"},description:"前後ボタンを表示するかどうか",defaultValue:{value:"true",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"無限ループするかどうか（シームレスな切り替え）",defaultValue:{value:"true",computed:!1}},slidesToShow:{required:!1,tsType:{name:"union",raw:"number | Breakpoints",elements:[{name:"number"},{name:"signature",type:"object",raw:`{\r
    base?: number;\r
    sm?: number;\r
    md?: number;\r
    lg?: number;\r
    xl?: number;\r
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"}}};const re={title:"Component/Media/Carousel",component:z,parameters:{layout:"centered"},args:{loop:!0},argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"},showIndicators:{control:"boolean"},showControls:{control:"boolean"},loop:{control:"boolean"},slidesToShow:{control:"number"}}},p=({index:s,width:o="600px"})=>e.jsxs("div",{style:{width:"100%",height:"300px",backgroundColor:["#f44336","#2196f3","#4caf50","#ff9800","#9c27b0","#3f51b5"][s%6],display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"32px",fontWeight:"bold",border:"4px solid rgba(255,255,255,0.2)",boxSizing:"border-box"},children:["Slide ",s+1]}),j=[e.jsx(p,{index:0},1),e.jsx(p,{index:1},2),e.jsx(p,{index:2},3),e.jsx(p,{index:3},4),e.jsx(p,{index:4},5),e.jsx(p,{index:5},6)],h={args:{children:j.slice(0,4)}},x={args:{slidesToShow:3,children:j},parameters:{layout:"padded"}},b={args:{slidesToShow:{base:1,sm:2,md:3,lg:4},children:j},parameters:{layout:"fullscreen"}},g={args:{autoPlay:!0,interval:3e3,children:j.slice(0,4)}},y={args:{children:[e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 1"}),e.jsx("p",{children:"Seamless infinite loop is enabled by default."})]})},1),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 2"}),e.jsx("p",{children:"You can see multiple items at once."})]})},2),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 3"}),e.jsx("p",{children:"The slider wraps around smoothly."})]})},3)]}},v={args:{loop:!1,children:j.slice(0,3)}},w={args:{children:Array.from({length:4}).map((s,o)=>e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx("img",{src:Z,alt:`Sample ${o+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})},`img-${o}`))}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: slides.slice(0, 4)
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    slidesToShow: 3,
    children: slides
  },
  parameters: {
    layout: "padded"
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    autoPlay: true,
    interval: 3000,
    children: slides.slice(0, 4)
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    loop: false,
    children: slides.slice(0, 3)
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const se=["Basic","MultipleItems","Responsive","AutoPlay","CustomContent","NoLoop","WithImage"],le=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:g,Basic:h,CustomContent:y,MultipleItems:x,NoLoop:v,Responsive:b,WithImage:w,__namedExportsOrder:se,default:re},Symbol.toStringTag,{value:"Module"}));export{g as A,h as B,le as C,x as M,v as N,b as R,w as W};
