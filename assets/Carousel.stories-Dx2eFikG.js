import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as ae}from"./iframe-Dqv4ZIoz.js";import{c as N}from"./index-COgXasq6.js";import{I as B}from"./Icon-CGDg_qrx.js";import{u as p}from"./useTranslation-7X4DMM5t.js";import{A as h}from"./i18nConstants-BpHxieg5.js";const te=(n,a)=>typeof n=="number"?n:n?a>=1280&&n.xl?n.xl:a>=1024&&n.lg?n.lg:a>=768&&n.md?n.md:a>=640&&n.sm?n.sm:n.base||1:1,u=({children:n,autoPlay:a=!1,interval:t=5e3,showIndicators:i=!0,showControls:c=!0,loop:r=!0,slidesToShow:W=1,aspectRatio:P,objectFit:O="cover",className:K})=>{const{t:z}=p(),_=l.useMemo(()=>ae.Children.toArray(n),[n]),o=_.length,[F,G]=l.useState(typeof window<"u"?window.innerWidth:0),[m,f]=l.useState(r?o:0),[y,k]=l.useState(!1),[g,U]=l.useState(1),[V,E]=l.useState(!1),M=l.useRef(null),H=l.useRef(null),I=l.useRef(null),L=l.useRef(null);l.useEffect(()=>{const s=()=>G(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),l.useEffect(()=>{U(te(W,F))},[W,F]);const J=l.useMemo(()=>!r||o===0?_:[..._,..._,..._],[_,r,o]),x=l.useCallback(()=>{if(!y){if(!r){f(s=>Math.min(s+1,o-g));return}k(!0),f(s=>s+1)}},[y,r,o,g]),$=l.useCallback(()=>{if(!y){if(!r){f(s=>Math.max(s-1,0));return}k(!0),f(s=>s-1)}},[y,r]),Q=s=>{y||(r?(k(!0),f(s+o)):f(s))},Y=()=>{r&&(k(!1),m>=o*2?f(m-o):m<o&&f(m+o))};l.useEffect(()=>(a&&!V&&o>g&&(M.current=window.setInterval(x,t)),()=>{M.current&&window.clearInterval(M.current)}),[a,t,x,o,g,V]);const Z=s=>{s.key==="ArrowLeft"?$():s.key==="ArrowRight"&&x()},ee=s=>{I.current=s.targetTouches[0].clientX},re=s=>{L.current=s.targetTouches[0].clientX},ne=()=>{if(!I.current||!L.current)return;const s=I.current-L.current,d=50;s>d?x():s<-d&&$(),I.current=null,L.current=null};if(o===0)return null;const q=100/g,se=-m*q;return e.jsxs("div",{className:N("wim-carousel",K),onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1),onFocus:()=>E(!0),onBlur:()=>E(!1),onKeyDown:Z,tabIndex:0,role:"region","aria-roledescription":"carousel",children:[e.jsx("div",{className:"wim-carousel__viewport",children:e.jsx("div",{ref:H,className:N("wim-carousel__track",y&&"wim-carousel__track--transition"),style:{transform:`translateX(${se}%)`},onTransitionEnd:Y,onTouchStart:ee,onTouchMove:re,onTouchEnd:ne,children:J.map((s,d)=>e.jsx("div",{className:N("wim-carousel__item",P&&"wim-carousel__item--has-aspect-ratio"),style:{flex:`0 0 ${q}%`,width:`${q}%`,...P?{aspectRatio:P,"--wim-carousel-object-fit":O}:{}},role:"group","aria-roledescription":"slide",children:s},d))})}),c&&o>g&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"wim-carousel__control wim-carousel__control--prev",onClick:$,"aria-label":z("a11y_prev_slide"),disabled:!r&&m===0,tabIndex:-1,children:e.jsx(B,{name:"ChevronLeftIcon",size:"medium"})}),e.jsx("button",{className:"wim-carousel__control wim-carousel__control--next",onClick:x,"aria-label":z("a11y_next_slide"),disabled:!r&&m>=o-g,tabIndex:-1,children:e.jsx(B,{name:"ChevronRightIcon",size:"medium"})})]}),i&&o>1&&e.jsx("div",{className:"wim-carousel__indicators",children:_.map((s,d)=>{const X=r?m%o===d:m===d;return e.jsx("button",{className:N("wim-carousel__indicator",X&&"wim-carousel__indicator--active"),onClick:()=>Q(d),"aria-label":`Go to slide ${d+1}`,"aria-current":X?"true":"false"},d)})})]})};u.__docgenInfo={description:"`Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。",methods:[],displayName:"Carousel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カルーセル内のコンテンツ"},autoPlay:{required:!1,tsType:{name:"boolean"},description:"自動再生するかどうか",defaultValue:{value:"false",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"自動再生の間隔（ミリ秒）",defaultValue:{value:"5000",computed:!1}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"インジケーターを表示するかどうか",defaultValue:{value:"true",computed:!1}},showControls:{required:!1,tsType:{name:"boolean"},description:"前後ボタンを表示するかどうか",defaultValue:{value:"true",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"無限ループするかどうか（シームレスな切り替え）",defaultValue:{value:"true",computed:!1}},slidesToShow:{required:!1,tsType:{name:"union",raw:"number | Breakpoints",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。",defaultValue:{value:"1",computed:!1}},aspectRatio:{required:!1,tsType:{name:"string"},description:"アスペクト比（例: '16/9', '4/3', '1/1'）を指定します。"},objectFit:{required:!1,tsType:{name:"union",raw:'"fill" | "contain" | "cover" | "none" | "scale-down"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"画像のフィット方法を指定します。aspectRatioが指定されている場合に有効です。（デフォルト: 'cover'）",defaultValue:{value:'"cover"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"}}};const D=""+new URL("imagesanple-j58eW6sL.webp",import.meta.url).href,oe={title:"Components/Media/Carousel",component:u,parameters:{layout:"fullscreen"},args:{loop:!0},argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"},showIndicators:{control:"boolean"},showControls:{control:"boolean"},loop:{control:"boolean"},slidesToShow:{control:"number"},aspectRatio:{control:"text"},objectFit:{control:"select",options:["fill","contain","cover","none","scale-down"]}}},T=({index:n,label:a})=>e.jsxs("div",{style:{width:"100%",height:"300px",backgroundColor:["#f44336","#2196f3","#4caf50","#ff9800","#9c27b0","#3f51b5"][n%6],display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"32px",fontWeight:"bold",border:"4px solid rgba(255,255,255,0.2)",boxSizing:"border-box"},children:[a," ",n+1]}),b={render:function(a){const{t}=p(h),i=Array.from({length:4}).map((c,r)=>e.jsx(T,{index:r,label:t("story_carousel_slide")},r));return e.jsx(u,{...a,children:i})}},v={render:function(a){const{t}=p(h),i=Array.from({length:6}).map((c,r)=>e.jsx(T,{index:r,label:t("story_carousel_slide")},r));return e.jsx(u,{...a,slidesToShow:3,children:i})},parameters:{layout:"padded"}},w={render:function(a){const{t}=p(h),i=Array.from({length:6}).map((c,r)=>e.jsx(T,{index:r,label:t("story_carousel_slide")},r));return e.jsx(u,{...a,slidesToShow:{base:1,sm:2,md:3,lg:4},children:i})},parameters:{layout:"fullscreen"}},S={render:function(a){const{t}=p(h),i=Array.from({length:4}).map((c,r)=>e.jsx(T,{index:r,label:t("story_carousel_slide")},r));return e.jsx(u,{...a,autoPlay:!0,interval:3e3,children:i})}},j={render:function(a){const{t}=p(h);return e.jsxs(u,{...a,children:[e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsxs("h3",{children:[t("story_carousel_card")," 1"]}),e.jsx("p",{children:t("story_carousel_msg_loop")})]})}),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsxs("h3",{children:[t("story_carousel_card")," 2"]}),e.jsx("p",{children:t("story_carousel_msg_multiple")})]})}),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",background:"#f9f9f9"},children:[e.jsxs("h3",{children:[t("story_carousel_card")," 3"]}),e.jsx("p",{children:t("story_carousel_msg_smooth")})]})})]})}},C={render:function(a){const{t}=p(h),i=Array.from({length:3}).map((c,r)=>e.jsx(T,{index:r,label:t("story_carousel_slide")},r));return e.jsx(u,{...a,loop:!1,children:i})}},A={render:function(a){const{t}=p(h);return e.jsx(u,{...a,children:Array.from({length:4}).map((i,c)=>e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx("img",{src:D,alt:`${t("story_carousel_sample_alt")} ${c+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})},`img-${c}`))})}},R={render:function(a){const{t}=p(h);return e.jsx(u,{...a,aspectRatio:"16/9",objectFit:"cover",children:Array.from({length:4}).map((i,c)=>e.jsx("img",{src:D,alt:`${t("story_carousel_sample_alt")} ${c+1}`},`img-${c}`))})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 4
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story_carousel_slide")} />);
    return <Carousel {...args}>{slides}</Carousel>;
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 4
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story_carousel_slide")} />);
    return <Carousel {...args} autoPlay={true} interval={3000}>\r
        {slides}\r
      </Carousel>;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 3
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story_carousel_slide")} />);
    return <Carousel {...args} loop={false}>\r
        {slides}\r
      </Carousel>;
  }
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Carousel {...args} aspectRatio="16/9" objectFit="cover">\r
        {Array.from({
        length: 4
      }).map((_, i) => <img key={\`img-\${i}\`} src={SampleImage} alt={\`\${t("story_carousel_sample_alt")} \${i + 1}\`} />)}\r
      </Carousel>;
  }
}`,...R.parameters?.docs?.source}}};const le=["Basic","MultipleItems","Responsive","AutoPlay","CustomContent","NoLoop","WithImage","AspectRatioCheck"],fe=Object.freeze(Object.defineProperty({__proto__:null,AspectRatioCheck:R,AutoPlay:S,Basic:b,CustomContent:j,MultipleItems:v,NoLoop:C,Responsive:w,WithImage:A,__namedExportsOrder:le,default:oe},Symbol.toStringTag,{value:"Module"}));export{S as A,b as B,fe as C,v as M,C as N,w as R,A as W,R as a};
