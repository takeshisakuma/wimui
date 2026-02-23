import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as se}from"./iframe-hgUaHlXL.js";import{c as R}from"./index-CZvm72Ag.js";import{I as z}from"./Icon-rBf354tB.js";import{s as F}from"./imagesanple-VDI2Kzk_.js";const ne=(s,t)=>typeof s=="number"?s:s?t>=1280&&s.xl?s.xl:t>=1024&&s.lg?s.lg:t>=768&&s.md?s.md:t>=640&&s.sm?s.sm:s.base||1:1,L=({children:s,autoPlay:t=!1,interval:A=5e3,showIndicators:V=!0,showControls:X=!0,loop:o=!0,slidesToShow:M=1,aspectRatio:I,objectFit:B="cover",className:D})=>{const d=a.useMemo(()=>se.Children.toArray(s),[s]),n=d.length,[$,O]=a.useState(typeof window<"u"?window.innerWidth:0),[l,c]=a.useState(o?n:0),[m,_]=a.useState(!1),[u,K]=a.useState(1),[P,C]=a.useState(!1),N=a.useRef(null),Y=a.useRef(null),T=a.useRef(null),k=a.useRef(null);a.useEffect(()=>{const r=()=>O(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),a.useEffect(()=>{K(ne(M,$))},[M,$]);const G=a.useMemo(()=>!o||n===0?d:[...d,...d,...d],[d,o,n]),f=a.useCallback(()=>{if(!m){if(!o){c(r=>Math.min(r+1,n-u));return}_(!0),c(r=>r+1)}},[m,o,n,u]),q=a.useCallback(()=>{if(!m){if(!o){c(r=>Math.max(r-1,0));return}_(!0),c(r=>r-1)}},[m,o]),H=r=>{m||(o?(_(!0),c(r+n)):c(r))},J=()=>{o&&(_(!1),l>=n*2?c(l-n):l<n&&c(l+n))};a.useEffect(()=>(t&&!P&&n>u&&(N.current=window.setInterval(f,A)),()=>{N.current&&window.clearInterval(N.current)}),[t,A,f,n,u,P]);const Q=r=>{r.key==="ArrowLeft"?q():r.key==="ArrowRight"&&f()},U=r=>{T.current=r.targetTouches[0].clientX},Z=r=>{k.current=r.targetTouches[0].clientX},ee=()=>{if(!T.current||!k.current)return;const r=T.current-k.current,i=50;r>i?f():r<-i&&q(),T.current=null,k.current=null};if(n===0)return null;const E=100/u,re=-l*E;return e.jsxs("div",{className:R("wim-carousel",D),onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),onFocus:()=>C(!0),onBlur:()=>C(!1),onKeyDown:Q,tabIndex:0,role:"region","aria-roledescription":"carousel",children:[e.jsx("div",{className:"wim-carousel__viewport",children:e.jsx("div",{ref:Y,className:R("wim-carousel__track",m&&"wim-carousel__track--transition"),style:{transform:`translateX(${re}%)`},onTransitionEnd:J,onTouchStart:U,onTouchMove:Z,onTouchEnd:ee,children:G.map((r,i)=>e.jsx("div",{className:R("wim-carousel__item",I&&"wim-carousel__item--has-aspect-ratio"),style:{flex:`0 0 ${E}%`,width:`${E}%`,...I?{aspectRatio:I,"--wim-carousel-object-fit":B}:{}},role:"group","aria-roledescription":"slide",children:r},i))})}),X&&n>u&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"wim-carousel__control wim-carousel__control--prev",onClick:q,"aria-label":"Previous slide",disabled:!o&&l===0,tabIndex:-1,children:e.jsx(z,{name:"ChevronLeftIcon",size:"medium"})}),e.jsx("button",{className:"wim-carousel__control wim-carousel__control--next",onClick:f,"aria-label":"Next slide",disabled:!o&&l>=n-u,tabIndex:-1,children:e.jsx(z,{name:"ChevronRightIcon",size:"medium"})})]}),V&&n>1&&e.jsx("div",{className:"wim-carousel__indicators",children:d.map((r,i)=>{const W=o?l%n===i:l===i;return e.jsx("button",{className:R("wim-carousel__indicator",W&&"wim-carousel__indicator--active"),onClick:()=>H(i),"aria-label":`Go to slide ${i+1}`,"aria-current":W?"true":"false"},i)})})]})};L.__docgenInfo={description:"`Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。",methods:[],displayName:"Carousel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カルーセル内のコンテンツ"},autoPlay:{required:!1,tsType:{name:"boolean"},description:"自動再生するかどうか",defaultValue:{value:"false",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"自動再生の間隔（ミリ秒）",defaultValue:{value:"5000",computed:!1}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"インジケーターを表示するかどうか",defaultValue:{value:"true",computed:!1}},showControls:{required:!1,tsType:{name:"boolean"},description:"前後ボタンを表示するかどうか",defaultValue:{value:"true",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"無限ループするかどうか（シームレスな切り替え）",defaultValue:{value:"true",computed:!1}},slidesToShow:{required:!1,tsType:{name:"union",raw:"number | Breakpoints",elements:[{name:"number"},{name:"signature",type:"object",raw:`{\r
    base?: number;\r
    sm?: number;\r
    md?: number;\r
    lg?: number;\r
    xl?: number;\r
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。",defaultValue:{value:"1",computed:!1}},aspectRatio:{required:!1,tsType:{name:"string"},description:"アスペクト比（例: '16/9', '4/3', '1/1'）を指定します。"},objectFit:{required:!1,tsType:{name:"union",raw:'"fill" | "contain" | "cover" | "none" | "scale-down"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"画像のフィット方法を指定します。aspectRatioが指定されている場合に有効です。（デフォルト: 'cover'）",defaultValue:{value:'"cover"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"}}};const ae={title:"Component/Media/Carousel",component:L,parameters:{layout:"fullscreen"},args:{loop:!0},argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"},showIndicators:{control:"boolean"},showControls:{control:"boolean"},loop:{control:"boolean"},slidesToShow:{control:"number"},aspectRatio:{control:"text"},objectFit:{control:"select",options:["fill","contain","cover","none","scale-down"]}}},p=({index:s,width:t="600px"})=>e.jsxs("div",{style:{width:"100%",height:"300px",backgroundColor:["#f44336","#2196f3","#4caf50","#ff9800","#9c27b0","#3f51b5"][s%6],display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"32px",fontWeight:"bold",border:"4px solid rgba(255,255,255,0.2)",boxSizing:"border-box"},children:["Slide ",s+1]}),S=[e.jsx(p,{index:0},1),e.jsx(p,{index:1},2),e.jsx(p,{index:2},3),e.jsx(p,{index:3},4),e.jsx(p,{index:4},5),e.jsx(p,{index:5},6)],h={args:{children:S.slice(0,4)}},g={args:{slidesToShow:3,children:S},parameters:{layout:"padded"}},x={args:{slidesToShow:{base:1,sm:2,md:3,lg:4},children:S},parameters:{layout:"fullscreen"}},b={args:{autoPlay:!0,interval:3e3,children:S.slice(0,4)}},v={args:{children:[e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 1"}),e.jsx("p",{children:"Seamless infinite loop is enabled by default."})]})},1),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 2"}),e.jsx("p",{children:"You can see multiple items at once."})]})},2),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 3"}),e.jsx("p",{children:"The slider wraps around smoothly."})]})},3)]}},y={args:{loop:!1,children:S.slice(0,3)}},w={args:{children:Array.from({length:4}).map((s,t)=>e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx("img",{src:F,alt:`Sample ${t+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})},`img-${t}`))}},j={args:{aspectRatio:"16/9",objectFit:"cover",children:Array.from({length:4}).map((s,t)=>e.jsx("img",{src:F,alt:`Sample ${t+1}`},`img-${t}`))}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: slides.slice(0, 4)
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    slidesToShow: 3,
    children: slides
  },
  parameters: {
    layout: "padded"
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    loop: false,
    children: slides.slice(0, 3)
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    aspectRatio: "16/9",
    objectFit: "cover",
    children: Array.from({
      length: 4
    }).map((_, i) => <img key={\`img-\${i}\`} src={SampleImage} alt={\`Sample \${i + 1}\`} />)
  }
}`,...j.parameters?.docs?.source}}};const te=["Basic","MultipleItems","Responsive","AutoPlay","CustomContent","NoLoop","WithImage","AspectRatioCheck"],ue=Object.freeze(Object.defineProperty({__proto__:null,AspectRatioCheck:j,AutoPlay:b,Basic:h,CustomContent:v,MultipleItems:g,NoLoop:y,Responsive:x,WithImage:w,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{b as A,h as B,ue as C,g as M,y as N,x as R,w as W,j as a};
