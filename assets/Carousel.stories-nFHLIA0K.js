import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as se}from"./iframe-DQwmcauy.js";import{c as $}from"./index-Bk7p5LNu.js";import{I as X}from"./Icon-BSJg9_bB.js";import{u as p}from"./useTranslation-CZ9vchf1.js";import{s as B}from"./imagesanple-VDI2Kzk_.js";const oe=(n,o)=>typeof n=="number"?n:n?o>=1280&&n.xl?n.xl:o>=1024&&n.lg?n.lg:o>=768&&n.md?n.md:o>=640&&n.sm?n.sm:n.base||1:1,u=({children:n,autoPlay:o=!1,interval:t=5e3,showIndicators:c=!0,showControls:i=!0,loop:r=!0,slidesToShow:W=1,aspectRatio:q,objectFit:D="cover",className:O})=>{const{t:z}=p(),h=l.useMemo(()=>se.Children.toArray(n),[n]),a=h.length,[F,K]=l.useState(typeof window<"u"?window.innerWidth:0),[m,f]=l.useState(r?a:0),[y,k]=l.useState(!1),[_,G]=l.useState(1),[L,I]=l.useState(!1),E=l.useRef(null),H=l.useRef(null),A=l.useRef(null),N=l.useRef(null);l.useEffect(()=>{const s=()=>K(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),l.useEffect(()=>{G(oe(W,F))},[W,F]);const J=l.useMemo(()=>!r||a===0?h:[...h,...h,...h],[h,r,a]),g=l.useCallback(()=>{if(!y){if(!r){f(s=>Math.min(s+1,a-_));return}k(!0),f(s=>s+1)}},[y,r,a,_]),P=l.useCallback(()=>{if(!y){if(!r){f(s=>Math.max(s-1,0));return}k(!0),f(s=>s-1)}},[y,r]),Q=s=>{y||(r?(k(!0),f(s+a)):f(s))},U=()=>{r&&(k(!1),m>=a*2?f(m-a):m<a&&f(m+a))};l.useEffect(()=>(o&&!L&&a>_&&(E.current=window.setInterval(g,t)),()=>{E.current&&window.clearInterval(E.current)}),[o,t,g,a,_,L]);const Y=s=>{s.key==="ArrowLeft"?P():s.key==="ArrowRight"&&g()},Z=s=>{A.current=s.targetTouches[0].clientX},ee=s=>{N.current=s.targetTouches[0].clientX},re=()=>{if(!A.current||!N.current)return;const s=A.current-N.current,d=50;s>d?g():s<-d&&P(),A.current=null,N.current=null};if(a===0)return null;const M=100/_,ne=-m*M;return e.jsxs("div",{className:$("wim-carousel",O),onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1),onFocus:()=>I(!0),onBlur:()=>I(!1),onKeyDown:Y,tabIndex:0,role:"region","aria-roledescription":"carousel",children:[e.jsx("div",{className:"wim-carousel__viewport",children:e.jsx("div",{ref:H,className:$("wim-carousel__track",y&&"wim-carousel__track--transition"),style:{transform:`translateX(${ne}%)`},onTransitionEnd:U,onTouchStart:Z,onTouchMove:ee,onTouchEnd:re,children:J.map((s,d)=>e.jsx("div",{className:$("wim-carousel__item",q&&"wim-carousel__item--has-aspect-ratio"),style:{flex:`0 0 ${M}%`,width:`${M}%`,...q?{aspectRatio:q,"--wim-carousel-object-fit":D}:{}},role:"group","aria-roledescription":"slide",children:s},d))})}),i&&a>_&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"wim-carousel__control wim-carousel__control--prev",onClick:P,"aria-label":z("a11y_prev_slide"),disabled:!r&&m===0,tabIndex:-1,children:e.jsx(X,{name:"ChevronLeftIcon",size:"medium"})}),e.jsx("button",{className:"wim-carousel__control wim-carousel__control--next",onClick:g,"aria-label":z("a11y_next_slide"),disabled:!r&&m>=a-_,tabIndex:-1,children:e.jsx(X,{name:"ChevronRightIcon",size:"medium"})})]}),c&&a>1&&e.jsx("div",{className:"wim-carousel__indicators",children:h.map((s,d)=>{const V=r?m%a===d:m===d;return e.jsx("button",{className:$("wim-carousel__indicator",V&&"wim-carousel__indicator--active"),onClick:()=>Q(d),"aria-label":`Go to slide ${d+1}`,"aria-current":V?"true":"false"},d)})})]})};u.__docgenInfo={description:"`Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。",methods:[],displayName:"Carousel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カルーセル内のコンテンツ"},autoPlay:{required:!1,tsType:{name:"boolean"},description:"自動再生するかどうか",defaultValue:{value:"false",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"自動再生の間隔（ミリ秒）",defaultValue:{value:"5000",computed:!1}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"インジケーターを表示するかどうか",defaultValue:{value:"true",computed:!1}},showControls:{required:!1,tsType:{name:"boolean"},description:"前後ボタンを表示するかどうか",defaultValue:{value:"true",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"無限ループするかどうか（シームレスな切り替え）",defaultValue:{value:"true",computed:!1}},slidesToShow:{required:!1,tsType:{name:"union",raw:"number | Breakpoints",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。",defaultValue:{value:"1",computed:!1}},aspectRatio:{required:!1,tsType:{name:"string"},description:"アスペクト比（例: '16/9', '4/3', '1/1'）を指定します。"},objectFit:{required:!1,tsType:{name:"union",raw:'"fill" | "contain" | "cover" | "none" | "scale-down"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"画像のフィット方法を指定します。aspectRatioが指定されている場合に有効です。（デフォルト: 'cover'）",defaultValue:{value:'"cover"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"}}};const te={title:"Components/Media/Carousel",component:u,parameters:{layout:"fullscreen"},args:{loop:!0},argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"},showIndicators:{control:"boolean"},showControls:{control:"boolean"},loop:{control:"boolean"},slidesToShow:{control:"number"},aspectRatio:{control:"text"},objectFit:{control:"select",options:["fill","contain","cover","none","scale-down"]}}},S=({index:n,label:o})=>e.jsxs("div",{style:{width:"100%",height:"300px",backgroundColor:["#f44336","#2196f3","#4caf50","#ff9800","#9c27b0","#3f51b5"][n%6],display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"32px",fontWeight:"bold",border:"4px solid rgba(255,255,255,0.2)",boxSizing:"border-box"},children:[o," ",n+1]}),x={render:function(o){const{t}=p(["docs","common","components"]),c=Array.from({length:4}).map((i,r)=>e.jsx(S,{index:r,label:t("story_carousel_slide")},r));return e.jsx(u,{...o,children:c})}},b={render:function(o){const{t}=p(["docs","common","components"]),c=Array.from({length:6}).map((i,r)=>e.jsx(S,{index:r,label:t("story_carousel_slide")},r));return e.jsx(u,{...o,slidesToShow:3,children:c})},parameters:{layout:"padded"}},v={render:function(o){const{t}=p(["docs","common","components"]),c=Array.from({length:6}).map((i,r)=>e.jsx(S,{index:r,label:t("story_carousel_slide")},r));return e.jsx(u,{...o,slidesToShow:{base:1,sm:2,md:3,lg:4},children:c})},parameters:{layout:"fullscreen"}},w={render:function(o){const{t}=p(["docs","common","components"]),c=Array.from({length:4}).map((i,r)=>e.jsx(S,{index:r,label:t("story_carousel_slide")},r));return e.jsx(u,{...o,autoPlay:!0,interval:3e3,children:c})}},j={render:function(o){const{t}=p(["docs","common","components"]);return e.jsxs(u,{...o,children:[e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsxs("h3",{children:[t("story_carousel_card")," 1"]}),e.jsx("p",{children:t("story_carousel_msg_loop")})]})}),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsxs("h3",{children:[t("story_carousel_card")," 2"]}),e.jsx("p",{children:t("story_carousel_msg_multiple")})]})}),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsxs("h3",{children:[t("story_carousel_card")," 3"]}),e.jsx("p",{children:t("story_carousel_msg_smooth")})]})})]})}},R={render:function(o){const{t}=p(["docs","common","components"]),c=Array.from({length:3}).map((i,r)=>e.jsx(S,{index:r,label:t("story_carousel_slide")},r));return e.jsx(u,{...o,loop:!1,children:c})}},C={render:function(o){const{t}=p(["docs","common","components"]);return e.jsx(u,{...o,children:Array.from({length:4}).map((c,i)=>e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx("img",{src:B,alt:`${t("story_carousel_sample_alt")} ${i+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})},`img-${i}`))})}},T={render:function(o){const{t}=p(["docs","common","components"]);return e.jsx(u,{...o,aspectRatio:"16/9",objectFit:"cover",children:Array.from({length:4}).map((c,i)=>e.jsx("img",{src:B,alt:`${t("story_carousel_sample_alt")} ${i+1}`},`img-${i}`))})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const slides = Array.from({
      length: 4
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story_carousel_slide")} />);
    return <Carousel {...args}>{slides}</Carousel>;
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const slides = Array.from({
      length: 6
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story_carousel_slide")} />);
    return <Carousel {...args} slidesToShow={3}>\r
        {slides}\r
      </Carousel>;
  },
  parameters: {
    layout: "padded"
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const slides = Array.from({
      length: 6
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story_carousel_slide")} />);
    return <Carousel {...args} slidesToShow={{
      base: 1,
      sm: 2,
      md: 3,
      lg: 4
    }}>\r
        {slides}\r
      </Carousel>;
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const slides = Array.from({
      length: 4
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story_carousel_slide")} />);
    return <Carousel {...args} autoPlay={true} interval={3000}>\r
        {slides}\r
      </Carousel>;
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Carousel {...args}>\r
        <div style={{
        padding: "0 10px",
        width: "100%"
      }}>\r
          <div style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "#f9f9f9"
        }}>\r
            <h3>\r
              {t("story_carousel_card")} 1\r
            </h3>\r
            <p>{t("story_carousel_msg_loop")}</p>\r
          </div>\r
        </div>\r
        <div style={{
        padding: "0 10px",
        width: "100%"
      }}>\r
          <div style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "#f9f9f9"
        }}>\r
            <h3>\r
              {t("story_carousel_card")} 2\r
            </h3>\r
            <p>{t("story_carousel_msg_multiple")}</p>\r
          </div>\r
        </div>\r
        <div style={{
        padding: "0 10px",
        width: "100%"
      }}>\r
          <div style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "#f9f9f9"
        }}>\r
            <h3>\r
              {t("story_carousel_card")} 3\r
            </h3>\r
            <p>{t("story_carousel_msg_smooth")}</p>\r
          </div>\r
        </div>\r
      </Carousel>;
  }
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const slides = Array.from({
      length: 3
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story_carousel_slide")} />);
    return <Carousel {...args} loop={false}>\r
        {slides}\r
      </Carousel>;
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Carousel {...args}>\r
        {Array.from({
        length: 4
      }).map((_, i) => <div key={\`img-\${i}\`} style={{
        width: "100%",
        height: "300px"
      }}>\r
            <img src={SampleImage} alt={\`\${t("story_carousel_sample_alt")} \${i + 1}\`} style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }} />\r
          </div>)}\r
      </Carousel>;
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Carousel {...args} aspectRatio="16/9" objectFit="cover">\r
        {Array.from({
        length: 4
      }).map((_, i) => <img key={\`img-\${i}\`} src={SampleImage} alt={\`\${t("story_carousel_sample_alt")} \${i + 1}\`} />)}\r
      </Carousel>;
  }
}`,...T.parameters?.docs?.source}}};const ae=["Basic","MultipleItems","Responsive","AutoPlay","CustomContent","NoLoop","WithImage","AspectRatioCheck"],pe=Object.freeze(Object.defineProperty({__proto__:null,AspectRatioCheck:T,AutoPlay:w,Basic:x,CustomContent:j,MultipleItems:b,NoLoop:R,Responsive:v,WithImage:C,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{w as A,x as B,pe as C,b as M,R as N,v as R,C as W,T as a};
