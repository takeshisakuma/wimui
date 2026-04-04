import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as oe,A as f}from"./iframe-By123agS.js";import{c as P}from"./index-DhHn5T7W.js";import{I as X}from"./Icon-jzV_n-kg.js";import{u as g}from"./useTranslation-svuQDxOH.js";const le={slideLabel:r=>`Slide ${r}`,prevSlide:"Previous slide",nextSlide:"Next slide",goToSlide:r=>`Go to slide ${r}`},ie=(r,a)=>typeof r=="number"?r:r?a>=1280&&r.xl?r.xl:a>=1024&&r.lg?r.lg:a>=768&&r.md?r.md:a>=640&&r.sm?r.sm:r.base||1:1,u=({children:r,autoPlay:a=!1,interval:t=5e3,showIndicators:i=!0,showControls:c=!0,loop:n=!0,slidesToShow:F=1,aspectRatio:M,objectFit:K="cover",labels:U,className:G})=>{const k={...le,...U},h=l.useMemo(()=>oe.Children.toArray(r),[r]),o=h.length,[z,H]=l.useState(typeof window<"u"?window.innerWidth:0),[m,p]=l.useState(n?o:0),[y,L]=l.useState(!1),[b,J]=l.useState(1),[V,E]=l.useState(!1),q=l.useRef(null),Q=l.useRef(null),I=l.useRef(null),N=l.useRef(null);l.useEffect(()=>{const s=()=>H(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),l.useEffect(()=>{J(ie(F,z))},[F,z]);const Y=l.useMemo(()=>!n||o===0?h:[...h,...h,...h],[h,n,o]),v=l.useCallback(()=>{if(!y){if(!n){p(s=>Math.min(s+1,o-b));return}L(!0),p(s=>s+1)}},[y,n,o,b]),$=l.useCallback(()=>{if(!y){if(!n){p(s=>Math.max(s-1,0));return}L(!0),p(s=>s-1)}},[y,n]),Z=s=>{y||(n?(L(!0),p(s+o)):p(s))},ee=()=>{n&&(L(!1),m>=o*2?p(m-o):m<o&&p(m+o))};l.useEffect(()=>(a&&!V&&o>b&&(q.current=window.setInterval(v,t)),()=>{q.current&&window.clearInterval(q.current)}),[a,t,v,o,b,V]);const re=s=>{s.key==="ArrowLeft"?$():s.key==="ArrowRight"&&v()},ne=s=>{I.current=s.targetTouches[0].clientX},se=s=>{N.current=s.targetTouches[0].clientX},ae=()=>{if(!I.current||!N.current)return;const s=I.current-N.current,d=50;s>d?v():s<-d&&$(),I.current=null,N.current=null};if(o===0)return null;const W=100/b,te=-m*W;return e.jsxs("div",{className:P("wim-carousel",G),onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1),onFocus:()=>E(!0),onBlur:()=>E(!1),onKeyDown:re,tabIndex:0,role:"region","aria-roledescription":"carousel",children:[e.jsx("div",{className:"wim-carousel__viewport",children:e.jsx("div",{ref:Q,className:P("wim-carousel__track",y&&"wim-carousel__track--transition"),style:{transform:`translateX(${te}%)`},onTransitionEnd:ee,onTouchStart:ne,onTouchMove:se,onTouchEnd:ae,children:Y.map((s,d)=>e.jsx("div",{className:P("wim-carousel__item",M&&"wim-carousel__item--has-aspect-ratio"),style:{flex:`0 0 ${W}%`,width:`${W}%`,...M?{aspectRatio:M,"--wim-carousel-object-fit":K}:{}},role:"group","aria-roledescription":"slide","aria-label":k.slideLabel(d%o+1),children:s},d))})}),c&&o>b&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"wim-carousel__control wim-carousel__control--prev",onClick:$,"aria-label":k.prevSlide,disabled:!n&&m===0,tabIndex:-1,children:e.jsx(X,{name:"ChevronLeftIcon",size:"md"})}),e.jsx("button",{className:"wim-carousel__control wim-carousel__control--next",onClick:v,"aria-label":k.nextSlide,disabled:!n&&m>=o-b,tabIndex:-1,children:e.jsx(X,{name:"ChevronRightIcon",size:"md"})})]}),i&&o>1&&e.jsx("div",{className:"wim-carousel__indicators",children:h.map((s,d)=>{const B=n?m%o===d:m===d;return e.jsx("button",{className:P("wim-carousel__indicator",B&&"wim-carousel__indicator--active"),onClick:()=>Z(d),"aria-label":k.goToSlide(d+1),"aria-current":B?"true":"false"},d)})})]})};u.__docgenInfo={description:"`Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。",methods:[],displayName:"Carousel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カルーセル内のコンテンツ"},autoPlay:{required:!1,tsType:{name:"boolean"},description:"自動再生するかどうか",defaultValue:{value:"false",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"自動再生の間隔（ミリ秒）",defaultValue:{value:"5000",computed:!1}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"インジケーターを表示するかどうか",defaultValue:{value:"true",computed:!1}},showControls:{required:!1,tsType:{name:"boolean"},description:"前後ボタンを表示するかどうか",defaultValue:{value:"true",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"無限ループするかどうか（シームレスな切り替え）",defaultValue:{value:"true",computed:!1}},slidesToShow:{required:!1,tsType:{name:"union",raw:"number | Breakpoints",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。",defaultValue:{value:"1",computed:!1}},aspectRatio:{required:!1,tsType:{name:"string"},description:"アスペクト比（例: '16/9', '4/3', '1/1'）を指定します。"},objectFit:{required:!1,tsType:{name:"union",raw:'"fill" | "contain" | "cover" | "none" | "scale-down"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"画像のフィット方法を指定します。aspectRatioが指定されている場合に有効です。（デフォルト: 'cover'）",defaultValue:{value:'"cover"',computed:!1}},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  slideLabel?: (number: number) => string;
  prevSlide?: string;
  nextSlide?: string;
  goToSlide?: (number: number) => string;
}`,signature:{properties:[{key:"slideLabel",value:{name:"signature",type:"function",raw:"(number: number) => string",signature:{arguments:[{type:{name:"number"},name:"number"}],return:{name:"string"}},required:!1}},{key:"prevSlide",value:{name:"string",required:!1}},{key:"nextSlide",value:{name:"string",required:!1}},{key:"goToSlide",value:{name:"signature",type:"function",raw:"(number: number) => string",signature:{arguments:[{type:{name:"number"},name:"number"}],return:{name:"string"}},required:!1}}]}},description:"手動翻訳用のラベル。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"}}};const O=""+new URL("imagesanple-j58eW6sL.webp",import.meta.url).href,ce={title:"Components/Media/Carousel",component:u,parameters:{layout:"fullscreen"},args:{loop:!0},argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"},showIndicators:{control:"boolean"},showControls:{control:"boolean"},loop:{control:"boolean"},slidesToShow:{control:"number"},aspectRatio:{control:"text"},objectFit:{control:"select",options:["fill","contain","cover","none","scale-down"]}}},D=[{bg:"var(--wim-color-destructive)",text:"var(--wim-color-text-on-destructive)"},{bg:"var(--wim-color-primary)",text:"var(--wim-color-text-on-primary)"},{bg:"var(--wim-color-positive)",text:"var(--wim-color-text-on-positive)"},{bg:"var(--wim-color-caution)",text:"var(--wim-color-text-on-caution)"},{bg:"var(--wim-color-secondary)",text:"var(--wim-color-text-on-secondary)"},{bg:"var(--wim-color-informative)",text:"var(--wim-color-text-on-informative)"}],T=({index:r,label:a})=>{const{bg:t,text:i}=D[r%D.length];return e.jsxs("div",{style:{width:"100%",height:"300px",backgroundColor:t,display:"flex",alignItems:"center",justifyContent:"center",color:i,fontSize:"32px",fontWeight:"bold",border:"4px solid rgba(255,255,255,0.2)",boxSizing:"border-box"},children:[a," ",r+1]})},x={render:function(a){const{t}=g(f),i=Array.from({length:4}).map((c,n)=>e.jsx(T,{index:n,label:t("story.carousel_slide")},n));return e.jsx(u,{...a,children:i})}},_={render:function(a){const{t}=g(f),i=Array.from({length:6}).map((c,n)=>e.jsx(T,{index:n,label:t("story.carousel_slide")},n));return e.jsx(u,{...a,slidesToShow:3,children:i})},parameters:{layout:"padded"}},w={render:function(a){const{t}=g(f),i=Array.from({length:6}).map((c,n)=>e.jsx(T,{index:n,label:t("story.carousel_slide")},n));return e.jsx(u,{...a,slidesToShow:{base:1,sm:2,md:3,lg:4},children:i})},parameters:{layout:"fullscreen"}},S={render:function(a){const{t}=g(f),i=Array.from({length:4}).map((c,n)=>e.jsx(T,{index:n,label:t("story.carousel_slide")},n));return e.jsx(u,{...a,autoPlay:!0,interval:3e3,children:i})}},j={render:function(a){const{t}=g(f);return e.jsxs(u,{...a,children:[e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid var(--wim-color-border)",borderRadius:"8px",background:"var(--wim-color-surface-variant)"},children:[e.jsxs("h3",{children:[t("story.carousel_card")," 1"]}),e.jsx("p",{children:t("story.carousel_msg_loop")})]})}),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid var(--wim-color-border)",borderRadius:"8px",background:"var(--wim-color-surface-variant)"},children:[e.jsxs("h3",{children:[t("story.carousel_card")," 2"]}),e.jsx("p",{children:t("story.carousel_msg_multiple")})]})}),e.jsx("div",{style:{padding:"0 10px",width:"100%"},children:e.jsxs("div",{style:{padding:"20px",border:"1px solid var(--wim-color-border)",borderRadius:"8px",background:"var(--wim-color-surface-variant)"},children:[e.jsxs("h3",{children:[t("story.carousel_card")," 3"]}),e.jsx("p",{children:t("story.carousel_msg_smooth")})]})})]})}},A={render:function(a){const{t}=g(f),i=Array.from({length:3}).map((c,n)=>e.jsx(T,{index:n,label:t("story.carousel_slide")},n));return e.jsx(u,{...a,loop:!1,children:i})}},C={render:function(a){const{t}=g(f);return e.jsx(u,{...a,children:Array.from({length:4}).map((i,c)=>e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx("img",{src:O,alt:`${t("story.carousel_sample_alt")} ${c+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})},`img-${c}`))})}},R={render:function(a){const{t}=g(f);return e.jsx(u,{...a,aspectRatio:"16/9",objectFit:"cover",children:Array.from({length:4}).map((i,c)=>e.jsx("img",{src:O,alt:`${t("story.carousel_sample_alt")} ${c+1}`},`img-${c}`))})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({
      length: 4
    }).map((_, i) => <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />);
    return <Carousel {...args}>{slides}</Carousel>;
  }
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};const de=["Basic","MultipleItems","Responsive","AutoPlay","CustomContent","NoLoop","WithImage","AspectRatioCheck"],he=Object.freeze(Object.defineProperty({__proto__:null,AspectRatioCheck:R,AutoPlay:S,Basic:x,CustomContent:j,MultipleItems:_,NoLoop:A,Responsive:w,WithImage:C,__namedExportsOrder:de,default:ce},Symbol.toStringTag,{value:"Module"}));export{S as A,x as B,he as C,_ as M,A as N,w as R,C as W,R as a};
