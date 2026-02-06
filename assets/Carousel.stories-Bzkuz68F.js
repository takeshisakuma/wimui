import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o,R as X}from"./iframe-pw_CUlU5.js";import{P as a}from"./index-D4Yu2yBe.js";import{I as P}from"./Icon-B8_1D8E2.js";import{s as Y}from"./imagesanple-VDI2Kzk_.js";const D=(r,t)=>typeof r=="number"?r:r?t>=1280&&r.xl?r.xl:t>=1024&&r.lg?r.lg:t>=768&&r.md?r.md:t>=640&&r.sm?r.sm:r.base||1:1,k=({children:r,autoPlay:t=!1,interval:I=5e3,showIndicators:E=!0,showControls:W=!0,loop:i=!0,slidesToShow:R=1,className:M=""})=>{const c=o.useMemo(()=>X.Children.toArray(r),[r]),n=c.length,[q,z]=o.useState(typeof window<"u"?window.innerWidth:0),[l,d]=o.useState(i?n:0),[p,S]=o.useState(!1),[u,$]=o.useState(1),_=o.useRef(null),A=o.useRef(null);o.useEffect(()=>{const s=()=>z(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),o.useEffect(()=>{$(D(R,q))},[R,q]);const V=o.useMemo(()=>!i||n===0?c:[...c,...c,...c],[c,i,n]),C=o.useCallback(()=>{if(!p){if(!i){d(s=>Math.min(s+1,n-u));return}S(!0),d(s=>s+1)}},[p,i,n,u]),B=o.useCallback(()=>{if(!p){if(!i){d(s=>Math.max(s-1,0));return}S(!0),d(s=>s-1)}},[p,i]),L=s=>{p||(i?(S(!0),d(s+n)):d(s))},O=()=>{i&&(S(!1),l>=n*2?d(l-n):l<n&&d(l+n))};if(o.useEffect(()=>(t&&n>u&&(_.current=window.setInterval(C,I)),()=>{_.current&&window.clearInterval(_.current)}),[t,I,C,n,u]),n===0)return null;const T=100/u,F=-l*T;return e.jsxs("div",{className:["wim-carousel",M].filter(Boolean).join(" "),children:[e.jsx("div",{className:"wim-carousel__viewport",children:e.jsx("div",{ref:A,className:["wim-carousel__track",p?"wim-carousel__track--transition":""].join(" "),style:{transform:`translateX(${F}%)`},onTransitionEnd:O,children:V.map((s,m)=>e.jsx("div",{className:"wim-carousel__item",style:{flex:`0 0 ${T}%`,width:`${T}%`},children:s},m))})}),W&&n>u&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"wim-carousel__control wim-carousel__control--prev",onClick:B,"aria-label":"Previous slide",disabled:!i&&l===0,children:e.jsx(P,{name:"ChevronLeftIcon",size:"medium"})}),e.jsx("button",{className:"wim-carousel__control wim-carousel__control--next",onClick:C,"aria-label":"Next slide",disabled:!i&&l>=n-u,children:e.jsx(P,{name:"ChevronRightIcon",size:"medium"})})]}),E&&n>1&&e.jsx("div",{className:"wim-carousel__indicators",children:c.map((s,m)=>{const N=i?l%n===m:l===m;return e.jsx("button",{className:["wim-carousel__indicator",N?"wim-carousel__indicator--active":""].filter(Boolean).join(" "),onClick:()=>L(m),"aria-label":`Go to slide ${m+1}`,"aria-current":N},m)})})]})};k.propTypes={children:a.node,autoPlay:a.bool,interval:a.number,showIndicators:a.bool,showControls:a.bool,loop:a.bool,slidesToShow:a.oneOfType([a.number,a.shape({base:a.number,sm:a.number,md:a.number,lg:a.number,xl:a.number})]),className:a.string};k.__docgenInfo={description:"`Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。",methods:[],displayName:"Carousel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カルーセル内のコンテンツ",type:{name:"node"}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"自動再生するかどうか",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},interval:{required:!1,tsType:{name:"number"},description:"自動再生の間隔（ミリ秒）",defaultValue:{value:"5000",computed:!1},type:{name:"number"}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"インジケーターを表示するかどうか",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},showControls:{required:!1,tsType:{name:"boolean"},description:"前後ボタンを表示するかどうか",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},loop:{required:!1,tsType:{name:"boolean"},description:"無限ループするかどうか（シームレスな切り替え）",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},slidesToShow:{required:!1,tsType:{name:"union",raw:"number | Breakpoints",elements:[{name:"number"},{name:"signature",type:"object",raw:`{\r
    base?: number;\r
    sm?: number;\r
    md?: number;\r
    lg?: number;\r
    xl?: number;\r
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。",defaultValue:{value:"1",computed:!1},type:{name:"union",value:[{name:"number"},{name:"shape",value:{base:{name:"number",required:!1},sm:{name:"number",required:!1},md:{name:"number",required:!1},lg:{name:"number",required:!1},xl:{name:"number",required:!1}}}]}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const G={title:"Component/Media/Carousel",component:k,parameters:{layout:"centered"},args:{loop:!0},argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"},showIndicators:{control:"boolean"},showControls:{control:"boolean"},loop:{control:"boolean"},slidesToShow:{control:"number"}}},f=({index:r,width:t="600px"})=>e.jsxs("div",{style:{width:"100%",height:"300px",backgroundColor:["#f44336","#2196f3","#4caf50","#ff9800","#9c27b0","#3f51b5"][r%6],display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"32px",fontWeight:"bold",border:"4px solid rgba(255,255,255,0.2)",boxSizing:"border-box"},children:["Slide ",r+1]}),j=[e.jsx(f,{index:0},1),e.jsx(f,{index:1},2),e.jsx(f,{index:2},3),e.jsx(f,{index:3},4),e.jsx(f,{index:4},5),e.jsx(f,{index:5},6)],h={args:{children:j.slice(0,4)}},b={args:{slidesToShow:3,children:j},parameters:{layout:"padded"}},x={args:{slidesToShow:{base:1,sm:2,md:3,lg:4},children:j},parameters:{layout:"fullscreen"}},y={args:{autoPlay:!0,interval:3e3,children:j.slice(0,4)}},g={args:{children:[e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 1"}),e.jsx("p",{children:"Seamless infinite loop is enabled by default."})]})},1),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 2"}),e.jsx("p",{children:"You can see multiple items at once."})]})},2),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsx("h3",{children:"Card 3"}),e.jsx("p",{children:"The slider wraps around smoothly."})]})},3)]}},v={args:{loop:!1,children:j.slice(0,3)}},w={args:{children:Array.from({length:4}).map((r,t)=>e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx("img",{src:Y,alt:`Sample ${t+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})},`img-${t}`))}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: slides.slice(0, 4)
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    slidesToShow: 3,
    children: slides
  },
  parameters: {
    layout: "padded"
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const H=["Basic","MultipleItems","Responsive","AutoPlay","CustomContent","NoLoop","WithImage"],ee=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:y,Basic:h,CustomContent:g,MultipleItems:b,NoLoop:v,Responsive:x,WithImage:w,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{y as A,h as B,ee as C,b as M,v as N,x as R,w as W};
