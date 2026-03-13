import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c,R as re}from"./iframe-R-8edTSa.js";import{c as $}from"./index-BMiqMCWS.js";import{I as X}from"./Icon-QzvmdxNd.js";import{u as _}from"./useTranslation-BsF8P6HZ.js";import{s as B}from"./imagesanple-VDI2Kzk_.js";const ne=(o,n)=>typeof o=="number"?o:o?n>=1280&&o.xl?o.xl:n>=1024&&o.lg?o.lg:n>=768&&o.md?o.md:n>=640&&o.sm?o.sm:o.base||1:1,u=({children:o,autoPlay:n=!1,interval:a=5e3,showIndicators:d=!0,showControls:i=!0,loop:s=!0,slidesToShow:W=1,aspectRatio:q,objectFit:D="cover",className:O})=>{const{t:z}=_(),f=c.useMemo(()=>re.Children.toArray(o),[o]),t=f.length,[F,K]=c.useState(typeof window<"u"?window.innerWidth:0),[m,p]=c.useState(s?t:0),[g,k]=c.useState(!1),[y,G]=c.useState(1),[L,I]=c.useState(!1),E=c.useRef(null),H=c.useRef(null),A=c.useRef(null),N=c.useRef(null);c.useEffect(()=>{const r=()=>K(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),c.useEffect(()=>{G(ne(W,F))},[W,F]);const J=c.useMemo(()=>!s||t===0?f:[...f,...f,...f],[f,s,t]),h=c.useCallback(()=>{if(!g){if(!s){p(r=>Math.min(r+1,t-y));return}k(!0),p(r=>r+1)}},[g,s,t,y]),P=c.useCallback(()=>{if(!g){if(!s){p(r=>Math.max(r-1,0));return}k(!0),p(r=>r-1)}},[g,s]),Q=r=>{g||(s?(k(!0),p(r+t)):p(r))},U=()=>{s&&(k(!1),m>=t*2?p(m-t):m<t&&p(m+t))};c.useEffect(()=>(n&&!L&&t>y&&(E.current=window.setInterval(h,a)),()=>{E.current&&window.clearInterval(E.current)}),[n,a,h,t,y,L]);const Y=r=>{r.key==="ArrowLeft"?P():r.key==="ArrowRight"&&h()},Z=r=>{A.current=r.targetTouches[0].clientX},ee=r=>{N.current=r.targetTouches[0].clientX},se=()=>{if(!A.current||!N.current)return;const r=A.current-N.current,l=50;r>l?h():r<-l&&P(),A.current=null,N.current=null};if(t===0)return null;const M=100/y,oe=-m*M;return e.jsxs("div",{className:$("wim-carousel",O),onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1),onFocus:()=>I(!0),onBlur:()=>I(!1),onKeyDown:Y,tabIndex:0,role:"region","aria-roledescription":"carousel",children:[e.jsx("div",{className:"wim-carousel__viewport",children:e.jsx("div",{ref:H,className:$("wim-carousel__track",g&&"wim-carousel__track--transition"),style:{transform:`translateX(${oe}%)`},onTransitionEnd:U,onTouchStart:Z,onTouchMove:ee,onTouchEnd:se,children:J.map((r,l)=>e.jsx("div",{className:$("wim-carousel__item",q&&"wim-carousel__item--has-aspect-ratio"),style:{flex:`0 0 ${M}%`,width:`${M}%`,...q?{aspectRatio:q,"--wim-carousel-object-fit":D}:{}},role:"group","aria-roledescription":"slide",children:r},l))})}),i&&t>y&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"wim-carousel__control wim-carousel__control--prev",onClick:P,"aria-label":z("a11y_prev_slide"),disabled:!s&&m===0,tabIndex:-1,children:e.jsx(X,{name:"ChevronLeftIcon",size:"medium"})}),e.jsx("button",{className:"wim-carousel__control wim-carousel__control--next",onClick:h,"aria-label":z("a11y_next_slide"),disabled:!s&&m>=t-y,tabIndex:-1,children:e.jsx(X,{name:"ChevronRightIcon",size:"medium"})})]}),d&&t>1&&e.jsx("div",{className:"wim-carousel__indicators",children:f.map((r,l)=>{const V=s?m%t===l:m===l;return e.jsx("button",{className:$("wim-carousel__indicator",V&&"wim-carousel__indicator--active"),onClick:()=>Q(l),"aria-label":`Go to slide ${l+1}`,"aria-current":V?"true":"false"},l)})})]})};u.__docgenInfo={description:"`Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。",methods:[],displayName:"Carousel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カルーセル内のコンテンツ"},autoPlay:{required:!1,tsType:{name:"boolean"},description:"自動再生するかどうか",defaultValue:{value:"false",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"自動再生の間隔（ミリ秒）",defaultValue:{value:"5000",computed:!1}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"インジケーターを表示するかどうか",defaultValue:{value:"true",computed:!1}},showControls:{required:!1,tsType:{name:"boolean"},description:"前後ボタンを表示するかどうか",defaultValue:{value:"true",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"無限ループするかどうか（シームレスな切り替え）",defaultValue:{value:"true",computed:!1}},slidesToShow:{required:!1,tsType:{name:"union",raw:"number | Breakpoints",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。",defaultValue:{value:"1",computed:!1}},aspectRatio:{required:!1,tsType:{name:"string"},description:"アスペクト比（例: '16/9', '4/3', '1/1'）を指定します。"},objectFit:{required:!1,tsType:{name:"union",raw:'"fill" | "contain" | "cover" | "none" | "scale-down"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"画像のフィット方法を指定します。aspectRatioが指定されている場合に有効です。（デフォルト: 'cover'）",defaultValue:{value:'"cover"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"}}};const ae={title:"Components/Media/Carousel",component:u,parameters:{layout:"fullscreen"},args:{loop:!0},argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"},showIndicators:{control:"boolean"},showControls:{control:"boolean"},loop:{control:"boolean"},slidesToShow:{control:"number"},aspectRatio:{control:"text"},objectFit:{control:"select",options:["fill","contain","cover","none","scale-down"]}}},S=({index:o,label:n})=>e.jsxs("div",{style:{width:"100%",height:"300px",backgroundColor:["#f44336","#2196f3","#4caf50","#ff9800","#9c27b0","#3f51b5"][o%6],display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"32px",fontWeight:"bold",border:"4px solid rgba(255,255,255,0.2)",boxSizing:"border-box"},children:[n," ",o+1]}),v={render:function(n){const{t:a}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),d=Array.from({length:4}).map((i,s)=>e.jsx(S,{index:s,label:a("story_carousel_slide")},s));return e.jsx(u,{...n,children:d})}},x={render:function(n){const{t:a}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),d=Array.from({length:6}).map((i,s)=>e.jsx(S,{index:s,label:a("story_carousel_slide")},s));return e.jsx(u,{...n,slidesToShow:3,children:d})},parameters:{layout:"padded"}},b={render:function(n){const{t:a}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),d=Array.from({length:6}).map((i,s)=>e.jsx(S,{index:s,label:a("story_carousel_slide")},s));return e.jsx(u,{...n,slidesToShow:{base:1,sm:2,md:3,lg:4},children:d})},parameters:{layout:"fullscreen"}},w={render:function(n){const{t:a}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),d=Array.from({length:4}).map((i,s)=>e.jsx(S,{index:s,label:a("story_carousel_slide")},s));return e.jsx(u,{...n,autoPlay:!0,interval:3e3,children:d})}},j={render:function(n){const{t:a}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(u,{...n,children:[e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsxs("h3",{children:[a("story_carousel_card")," 1"]}),e.jsx("p",{children:a("story_carousel_msg_loop")})]})}),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsxs("h3",{children:[a("story_carousel_card")," 2"]}),e.jsx("p",{children:a("story_carousel_msg_multiple")})]})}),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsxs("h3",{children:[a("story_carousel_card")," 3"]}),e.jsx("p",{children:a("story_carousel_msg_smooth")})]})})]})}},R={render:function(n){const{t:a}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),d=Array.from({length:3}).map((i,s)=>e.jsx(S,{index:s,label:a("story_carousel_slide")},s));return e.jsx(u,{...n,loop:!1,children:d})}},C={render:function(n){const{t:a}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(u,{...n,children:Array.from({length:4}).map((d,i)=>e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx("img",{src:B,alt:`${a("story_carousel_sample_alt")} ${i+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})},`img-${i}`))})}},T={render:function(n){const{t:a}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(u,{...n,aspectRatio:"16/9",objectFit:"cover",children:Array.from({length:4}).map((d,i)=>e.jsx("img",{src:B,alt:`${a("story_carousel_sample_alt")} ${i+1}`},`img-${i}`))})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const slides = Array.from({
      length: 4
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story_carousel_slide")} />);
    return <Carousel {...args}>{slides}</Carousel>;
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Carousel {...args} aspectRatio="16/9" objectFit="cover">\r
        {Array.from({
        length: 4
      }).map((_, i) => <img key={\`img-\${i}\`} src={SampleImage} alt={\`\${t("story_carousel_sample_alt")} \${i + 1}\`} />)}\r
      </Carousel>;
  }
}`,...T.parameters?.docs?.source}}};const te=["Basic","MultipleItems","Responsive","AutoPlay","CustomContent","NoLoop","WithImage","AspectRatioCheck"],_e=Object.freeze(Object.defineProperty({__proto__:null,AspectRatioCheck:T,AutoPlay:w,Basic:v,CustomContent:j,MultipleItems:x,NoLoop:R,Responsive:b,WithImage:C,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{w as A,v as B,_e as C,x as M,R as N,b as R,C as W,T as a};
