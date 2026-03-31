import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as ae,A as h}from"./iframe-BIyQwIaN.js";import{c as N}from"./index-6KFIEf95.js";import{I as B}from"./Icon-BQyMRfQe.js";import{u as p}from"./useTranslation-C6_B5Ynz.js";const oe=(n,a)=>typeof n=="number"?n:n?a>=1280&&n.xl?n.xl:a>=1024&&n.lg?n.lg:a>=768&&n.md?n.md:a>=640&&n.sm?n.sm:n.base||1:1,u=({children:n,autoPlay:a=!1,interval:o=5e3,showIndicators:i=!0,showControls:c=!0,loop:r=!0,slidesToShow:z=1,aspectRatio:P,objectFit:O="cover",className:K})=>{const{t:M}=p(),y=l.useMemo(()=>ae.Children.toArray(n),[n]),t=y.length,[F,G]=l.useState(typeof window<"u"?window.innerWidth:0),[m,f]=l.useState(r?t:0),[b,k]=l.useState(!1),[g,U]=l.useState(1),[V,E]=l.useState(!1),$=l.useRef(null),H=l.useRef(null),I=l.useRef(null),L=l.useRef(null);l.useEffect(()=>{const s=()=>G(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),l.useEffect(()=>{U(oe(z,F))},[z,F]);const J=l.useMemo(()=>!r||t===0?y:[...y,...y,...y],[y,r,t]),x=l.useCallback(()=>{if(!b){if(!r){f(s=>Math.min(s+1,t-g));return}k(!0),f(s=>s+1)}},[b,r,t,g]),q=l.useCallback(()=>{if(!b){if(!r){f(s=>Math.max(s-1,0));return}k(!0),f(s=>s-1)}},[b,r]),Q=s=>{b||(r?(k(!0),f(s+t)):f(s))},Y=()=>{r&&(k(!1),m>=t*2?f(m-t):m<t&&f(m+t))};l.useEffect(()=>(a&&!V&&t>g&&($.current=window.setInterval(x,o)),()=>{$.current&&window.clearInterval($.current)}),[a,o,x,t,g,V]);const Z=s=>{s.key==="ArrowLeft"?q():s.key==="ArrowRight"&&x()},ee=s=>{I.current=s.targetTouches[0].clientX},re=s=>{L.current=s.targetTouches[0].clientX},ne=()=>{if(!I.current||!L.current)return;const s=I.current-L.current,d=50;s>d?x():s<-d&&q(),I.current=null,L.current=null};if(t===0)return null;const W=100/g,se=-m*W;return e.jsxs("div",{className:N("wim-carousel",K),onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1),onFocus:()=>E(!0),onBlur:()=>E(!1),onKeyDown:Z,tabIndex:0,role:"region","aria-roledescription":"carousel",children:[e.jsx("div",{className:"wim-carousel__viewport",children:e.jsx("div",{ref:H,className:N("wim-carousel__track",b&&"wim-carousel__track--transition"),style:{transform:`translateX(${se}%)`},onTransitionEnd:Y,onTouchStart:ee,onTouchMove:re,onTouchEnd:ne,children:J.map((s,d)=>e.jsx("div",{className:N("wim-carousel__item",P&&"wim-carousel__item--has-aspect-ratio"),style:{flex:`0 0 ${W}%`,width:`${W}%`,...P?{aspectRatio:P,"--wim-carousel-object-fit":O}:{}},role:"group","aria-roledescription":"slide","aria-label":M("story.carousel_slide_label",{number:d%t+1}),children:s},d))})}),c&&t>g&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"wim-carousel__control wim-carousel__control--prev",onClick:q,"aria-label":M("a11y.prev_slide"),disabled:!r&&m===0,tabIndex:-1,children:e.jsx(B,{name:"ChevronLeftIcon",size:"md"})}),e.jsx("button",{className:"wim-carousel__control wim-carousel__control--next",onClick:x,"aria-label":M("a11y.next_slide"),disabled:!r&&m>=t-g,tabIndex:-1,children:e.jsx(B,{name:"ChevronRightIcon",size:"md"})})]}),i&&t>1&&e.jsx("div",{className:"wim-carousel__indicators",children:y.map((s,d)=>{const X=r?m%t===d:m===d;return e.jsx("button",{className:N("wim-carousel__indicator",X&&"wim-carousel__indicator--active"),onClick:()=>Q(d),"aria-label":`Go to slide ${d+1}`,"aria-current":X?"true":"false"},d)})})]})};u.__docgenInfo={description:"`Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。",methods:[],displayName:"Carousel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カルーセル内のコンテンツ"},autoPlay:{required:!1,tsType:{name:"boolean"},description:"自動再生するかどうか",defaultValue:{value:"false",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"自動再生の間隔（ミリ秒）",defaultValue:{value:"5000",computed:!1}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"インジケーターを表示するかどうか",defaultValue:{value:"true",computed:!1}},showControls:{required:!1,tsType:{name:"boolean"},description:"前後ボタンを表示するかどうか",defaultValue:{value:"true",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"無限ループするかどうか（シームレスな切り替え）",defaultValue:{value:"true",computed:!1}},slidesToShow:{required:!1,tsType:{name:"union",raw:"number | Breakpoints",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。",defaultValue:{value:"1",computed:!1}},aspectRatio:{required:!1,tsType:{name:"string"},description:"アスペクト比（例: '16/9', '4/3', '1/1'）を指定します。"},objectFit:{required:!1,tsType:{name:"union",raw:'"fill" | "contain" | "cover" | "none" | "scale-down"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"画像のフィット方法を指定します。aspectRatioが指定されている場合に有効です。（デフォルト: 'cover'）",defaultValue:{value:'"cover"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"}}};const D=""+new URL("imagesanple-j58eW6sL.webp",import.meta.url).href,te={title:"Components/Media/Carousel",component:u,parameters:{layout:"fullscreen"},args:{loop:!0},argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"},showIndicators:{control:"boolean"},showControls:{control:"boolean"},loop:{control:"boolean"},slidesToShow:{control:"number"},aspectRatio:{control:"text"},objectFit:{control:"select",options:["fill","contain","cover","none","scale-down"]}}},T=({index:n,label:a})=>e.jsxs("div",{style:{width:"100%",height:"300px",backgroundColor:["#f44336","#2196f3","#4caf50","#ff9800","#9c27b0","#3f51b5"][n%6],display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"32px",fontWeight:"bold",border:"4px solid rgba(255,255,255,0.2)",boxSizing:"border-box"},children:[a," ",n+1]}),_={render:function(a){const{t:o}=p(h),i=Array.from({length:4}).map((c,r)=>e.jsx(T,{index:r,label:o("story.carousel_slide")},r));return e.jsx(u,{...a,children:i})}},v={render:function(a){const{t:o}=p(h),i=Array.from({length:6}).map((c,r)=>e.jsx(T,{index:r,label:o("story.carousel_slide")},r));return e.jsx(u,{...a,slidesToShow:3,children:i})},parameters:{layout:"padded"}},w={render:function(a){const{t:o}=p(h),i=Array.from({length:6}).map((c,r)=>e.jsx(T,{index:r,label:o("story.carousel_slide")},r));return e.jsx(u,{...a,slidesToShow:{base:1,sm:2,md:3,lg:4},children:i})},parameters:{layout:"fullscreen"}},S={render:function(a){const{t:o}=p(h),i=Array.from({length:4}).map((c,r)=>e.jsx(T,{index:r,label:o("story.carousel_slide")},r));return e.jsx(u,{...a,autoPlay:!0,interval:3e3,children:i})}},j={render:function(a){const{t:o}=p(h);return e.jsxs(u,{...a,children:[e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid var(--wim-color-border)",borderRadius:"8px",background:"var(--wim-color-surface-variant)"},children:[e.jsxs("h3",{children:[o("story.carousel_card")," 1"]}),e.jsx("p",{children:o("story.carousel_msg_loop")})]})}),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid var(--wim-color-border)",borderRadius:"8px",background:"var(--wim-color-surface-variant)"},children:[e.jsxs("h3",{children:[o("story.carousel_card")," 2"]}),e.jsx("p",{children:o("story.carousel_msg_multiple")})]})}),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid var(--wim-color-border)",borderRadius:"8px",background:"var(--wim-color-surface-variant)"},children:[e.jsxs("h3",{children:[o("story.carousel_card")," 3"]}),e.jsx("p",{children:o("story.carousel_msg_smooth")})]})})]})}},C={render:function(a){const{t:o}=p(h),i=Array.from({length:3}).map((c,r)=>e.jsx(T,{index:r,label:o("story.carousel_slide")},r));return e.jsx(u,{...a,loop:!1,children:i})}},A={render:function(a){const{t:o}=p(h);return e.jsx(u,{...a,children:Array.from({length:4}).map((i,c)=>e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx("img",{src:D,alt:`${o("story.carousel_sample_alt")} ${c+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})},`img-${c}`))})}},R={render:function(a){const{t:o}=p(h);return e.jsx(u,{...a,aspectRatio:"16/9",objectFit:"cover",children:Array.from({length:4}).map((i,c)=>e.jsx("img",{src:D,alt:`${o("story.carousel_sample_alt")} ${c+1}`},`img-${c}`))})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 4
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />);
    return <Carousel {...args}>{slides}</Carousel>;
  }
}`,..._.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 6
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />);
    return <Carousel {...args} slidesToShow={3}>
        {slides}
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
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />);
    return <Carousel {...args} slidesToShow={{
      base: 1,
      sm: 2,
      md: 3,
      lg: 4
    }}>
        {slides}
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
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />);
    return <Carousel {...args} autoPlay={true} interval={3000}>
        {slides}
      </Carousel>;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Carousel {...args}>
        <div style={{
        padding: "0 10px",
        width: "100%"
      }}>
          <div style={{
          padding: "20px",
          border: "1px solid var(--wim-color-border)",
          borderRadius: "8px",
          background: "var(--wim-color-surface-variant)"
        }}>
            <h3>
              {t("story.carousel_card")} 1
            </h3>
            <p>{t("story.carousel_msg_loop")}</p>
          </div>
        </div>
        <div style={{
        padding: "0 10px",
        width: "100%"
      }}>
          <div style={{
          padding: "20px",
          border: "1px solid var(--wim-color-border)",
          borderRadius: "8px",
          background: "var(--wim-color-surface-variant)"
        }}>
            <h3>
              {t("story.carousel_card")} 2
            </h3>
            <p>{t("story.carousel_msg_multiple")}</p>
          </div>
        </div>
        <div style={{
        padding: "0 10px",
        width: "100%"
      }}>
          <div style={{
          padding: "20px",
          border: "1px solid var(--wim-color-border)",
          borderRadius: "8px",
          background: "var(--wim-color-surface-variant)"
        }}>
            <h3>
              {t("story.carousel_card")} 3
            </h3>
            <p>{t("story.carousel_msg_smooth")}</p>
          </div>
        </div>
      </Carousel>;
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 3
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />);
    return <Carousel {...args} loop={false}>
        {slides}
      </Carousel>;
  }
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Carousel {...args}>
        {Array.from({
        length: 4
      }).map((_, i) => <div key={\`img-\${i}\`} style={{
        width: "100%",
        height: "300px"
      }}>
            <img src={SampleImage} alt={\`\${t("story.carousel_sample_alt")} \${i + 1}\`} style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }} />
          </div>)}
      </Carousel>;
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Carousel {...args} aspectRatio="16/9" objectFit="cover">
        {Array.from({
        length: 4
      }).map((_, i) => <img key={\`img-\${i}\`} src={SampleImage} alt={\`\${t("story.carousel_sample_alt")} \${i + 1}\`} />)}
      </Carousel>;
  }
}`,...R.parameters?.docs?.source}}};const le=["Basic","MultipleItems","Responsive","AutoPlay","CustomContent","NoLoop","WithImage","AspectRatioCheck"],pe=Object.freeze(Object.defineProperty({__proto__:null,AspectRatioCheck:R,AutoPlay:S,Basic:_,CustomContent:j,MultipleItems:v,NoLoop:C,Responsive:w,WithImage:A,__namedExportsOrder:le,default:te},Symbol.toStringTag,{value:"Module"}));export{S as A,_ as B,pe as C,v as M,C as N,w as R,A as W,R as a};
