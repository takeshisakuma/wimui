import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as S,r as fe}from"./iframe-CDoE-pWf.js";import{c as X}from"./index-D0Kn6Bmw.js";import{u as ye}from"./useMediaLoader-CXklavJE.js";import{B as _e}from"./Button-kD_pJeRD.js";import{A as m}from"./i18nConstants-BpHxieg5.js";import{u as c}from"./useTranslation-DUx5r_FT.js";const g=(r,t)=>{if(t===void 0||t==="none"||t===!1)return;const n={blur:{sm:"4px",md:"8px",lg:"16px"},grayscale:{sm:"33%",md:"66%",lg:"100%",true:"100%"},brightness:{sm:"0.8",md:"0.5",lg:"0.3"},contrast:{sm:"1.2",md:"1.5",lg:"2"},sepia:{sm:"33%",md:"66%",lg:"100%"},saturate:{sm:"1.5",md:"2",lg:"3"},invert:{sm:"33%",md:"66%",lg:"100%"},opacity:{sm:"0.8",md:"0.5",lg:"0.2"}};if(r==="hueRotate")return`${t}deg`;const o=typeof t=="boolean"?"true":t;return n[r]?.[o]},Q=r=>{const t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=r.replace(t,(p,u,y,_)=>u+u+y+y+_+_),o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return o?{r:parseInt(o[1],16)/255,g:parseInt(o[2],16)/255,b:parseInt(o[3],16)/255}:{r:0,g:0,b:0}},D=r=>{if(!r)return;const t=[],n=g("blur",r.blur);n&&t.push(`blur(${n})`);const o=g("grayscale",r.grayscale);o&&t.push(`grayscale(${o})`);const p=g("brightness",r.brightness);p&&t.push(`brightness(${p})`);const u=g("contrast",r.contrast);u&&t.push(`contrast(${u})`);const y=g("sepia",r.sepia);y&&t.push(`sepia(${y})`);const _=g("saturate",r.saturate);_&&t.push(`saturate(${_})`);const x=g("hueRotate",r.hueRotate);x&&t.push(`hue-rotate(${x})`);const w=g("invert",r.invert);w&&t.push(`invert(${w})`);const h=g("opacity",r.opacity);return h&&t.push(`opacity(${h})`),t.length>0?t.join(" "):"none"},a=({src:r,alt:t,width:n,height:o,radius:p="none",shadow:u=!1,border:y=!1,fit:_="cover",loading:x,caption:w,filter:h,hoverFilter:O,backdropFilter:F,hoverBackdropFilter:N,transition:Y="normal",noise:b,duotone:f,overlay:d,zoom:j=!1,tilt:Z=!1,fadeIn:P=!1,blendMode:H,bgColor:G,demoDelay:J,priority:ee=!1,className:ne,style:te,...re})=>{const{containerRef:ae,isLoaded:ie,isIntersecting:oe,notifyLoaded:se,shouldShowSkeleton:le}=ye({loading:x,src:r,demoDelay:J}),[de,U]=S.useState({}),K=S.useId().replace(/:/g,""),me=i=>{if(!Z)return;const s=i.currentTarget.getBoundingClientRect(),W=i.clientX-s.left,$=i.clientY-s.top,I=s.width/2,z=s.height/2,v=($-z)/z*-10,q=(W-I)/I*10;U({transform:`perspective(1000px) rotateX(${v}deg) rotateY(${q}deg)`})},ce=()=>{Z&&U({transform:"perspective(1000px) rotateX(0deg) rotateY(0deg)"})},ue=S.useMemo(()=>{const i={};if(j){const v=typeof j=="number"?j:1.05;i["--wim-image-zoom-scale"]=v.toString()}const s=D(h);s&&(i["--wim-image-filter"]=s),f&&(i["--wim-image-filter"]=`${i["--wim-image-filter"]||""} url(#${K})`.trim());const W=D(F);W&&(i["--wim-image-backdrop"]=W);const $=D(O);$&&(i["--wim-image-hover-filter"]=$);const I=D(N);if(I&&(i["--wim-image-hover-backdrop"]=I),b&&b!=="none"){const v={sm:"0.05",md:"0.1",lg:"0.2"}[b];i["--wim-image-noise-opacity"]=v||"0"}if(d){const v={light:"0.3",medium:"0.6",heavy:"0.9"},q=typeof d.intensity=="number"?d.intensity.toString():v[d.intensity]||"0.5";i["--wim-image-overlay-color"]=d.color||"rgba(0,0,0,0.5)",i["--wim-image-overlay-opacity"]=d.showOnHover?"0":q,i["--wim-image-overlay-hover-opacity"]=q,d.blendMode&&(i["--wim-image-overlay-blend"]=d.blendMode)}H&&(i["--wim-image-blend-mode"]=H),G&&(i["--wim-image-bg-color"]=G);const z={none:"0s",fast:"0.2s",normal:"0.3s",slow:"0.5s"};return i["--wim-image-transition-duration"]=z[Y],i},[h,O,F,N,Y,b,f,d,K,j,H,G]),ge=S.useMemo(()=>{if(!f)return null;const i=Q(f.light),s=Q(f.dark);return`
      ${i.r-s.r} 0 0 0 ${s.r}
      ${i.g-s.g} 0 0 0 ${s.g}
      ${i.b-s.b} 0 0 0 ${s.b}
      0 0 0 1 0
    `},[f]),pe={width:"100%",height:o||"auto",objectFit:_,...te};return e.jsxs("figure",{ref:ae,className:X("wim-image-container",ne),style:{maxWidth:n||"100%",width:"100%",...ue,...de},onMouseMove:me,onMouseLeave:ce,children:[f&&e.jsx("svg",{style:{position:"absolute",width:0,height:0},children:e.jsx("filter",{id:K,colorInterpolationFilters:"sRGB",children:e.jsx("feColorMatrix",{type:"matrix",values:ge||""})})}),e.jsx("div",{className:X("wim-image-inner",p!=="none"&&`wim-image--radius-${p}`,u&&"wim-image--shadow",y&&"wim-image--border",(F||N)&&"wim-image--has-backdrop",b&&b!=="none"&&"wim-image--has-noise",d&&"wim-image--has-overlay",j&&"wim-image--zoomable",P&&"wim-image--fade-in",P&&ie&&"wim-image--is-loaded",le&&P&&"wim-image--loading"),children:oe&&e.jsx("img",{src:r,alt:t,onLoad:se,className:X("wim-image",(h||O||f)&&"wim-image--has-filter"),style:pe,loading:x,fetchPriority:ee?"high":void 0,...re})}),w&&e.jsx("figcaption",{className:"wim-image__caption",children:w})]})};a.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"角丸のサイズ",defaultValue:{value:'"none"',computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"シャドウ（影）を表示するか",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"枠線を表示するか",defaultValue:{value:"false",computed:!1}},fit:{required:!1,tsType:{name:"union",raw:'"contain" | "cover" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"画像のフィット感",defaultValue:{value:'"cover"',computed:!1}},loading:{required:!1,tsType:{name:"union",raw:'"eager" | "lazy"',elements:[{name:"literal",value:'"eager"'},{name:"literal",value:'"lazy"'}]},description:"遅延読み込み設定"},caption:{required:!1,tsType:{name:"string"},description:"画像の下に表示する説明文"},filter:{required:!1,tsType:{name:"ImageFilterOptions"},description:"画像自体に適用するフィルタ"},hoverFilter:{required:!1,tsType:{name:"ImageFilterOptions"},description:"ホバー時に適用するフィルタ（指定がない場合はfilterが維持されます）"},backdropFilter:{required:!1,tsType:{name:"ImageFilterOptions"},description:"背景に適用するフィルタ（透過画像などで効果的）"},hoverBackdropFilter:{required:!1,tsType:{name:"ImageFilterOptions"},description:"ホバー時に背景に適用するフィルタ"},transition:{required:!1,tsType:{name:"union",raw:'"none" | "fast" | "normal" | "slow"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"fast"'},{name:"literal",value:'"normal"'},{name:"literal",value:'"slow"'}]},description:"フィルタ切り替え時のアニメーション速度",defaultValue:{value:'"normal"',computed:!1}},noise:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"フィルムグレイン（ノイズ）の強度"},duotone:{required:!1,tsType:{name:"ImageDuotoneOptions"},description:"デュオトーン設定"},overlay:{required:!1,tsType:{name:"ImageOverlayOptions"},description:"オーバーレイ設定"},zoom:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"ホバー時の拡大倍率 (例: 1.1) または true (デフォルト1.05)",defaultValue:{value:"false",computed:!1}},tilt:{required:!1,tsType:{name:"boolean"},description:"マウスに追従するチルト（傾き）エフェクト",defaultValue:{value:"false",computed:!1}},fadeIn:{required:!1,tsType:{name:"boolean"},description:"読み込み完了時にフェードインさせるか",defaultValue:{value:"false",computed:!1}},blendMode:{required:!1,tsType:{name:'ReactCSSProperties["mixBlendMode"]',raw:'React.CSSProperties["mixBlendMode"]'},description:"画像自体のブレンドモード"},bgColor:{required:!1,tsType:{name:"string"},description:"ブレンド用の背景色"},demoDelay:{required:!1,tsType:{name:"number"},description:"デモ用：読み込み完了を意図的に遅らせるミリ秒"},priority:{required:!1,tsType:{name:"boolean"},description:'LCP候補など、読み込み優先度を上げるかどうか（fetchpriority="high"）',defaultValue:{value:"false",computed:!1}}}};const l=""+new URL("vibrant_landscape-BL-xlQBo.png",import.meta.url).href,ve={title:"Components/Media/Image",component:a,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]},fit:{control:"select",options:["contain","cover","fill","none","scale-down"]}}},B={render:function(t){const{t:n}=c(m);return e.jsx(a,{...t,alt:n("story_image_alt")})},args:{src:l,width:400}},M={render:function(t){const{t:n}=c(m);return e.jsx(a,{...t,alt:n("story_image_alt"),caption:n("story_image_caption")})},args:{src:l,width:400}},T={render:function(t){const{t:n}=c(m);return e.jsx(a,{...t,alt:n("story_image_alt")})},args:{src:l,width:200,height:200,radius:"large",fit:"cover"}},R={render:function(t){const{t:n}=c(m);return e.jsx(a,{...t,alt:n("story_image_alt")})},args:{src:l,width:150,height:150,radius:"full",fit:"cover",border:!0}},V={render:function(t){const{t:n}=c(m);return e.jsx(a,{...t,alt:n("story_image_alt")})},args:{src:l,width:400,shadow:!0,radius:"medium"}},L={render:function(t){const{t:n}=c(m);return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Grayscale to Color (Hover)"}),e.jsx(a,{...t,alt:n("story_image_alt"),filter:{grayscale:"lg"},hoverFilter:{grayscale:"none"},width:260})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Blur to Clear (Hover)"}),e.jsx(a,{...t,alt:n("story_image_alt"),filter:{blur:"sm"},hoverFilter:{blur:"none"},width:260})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Sepia (Fixed)"}),e.jsx(a,{...t,alt:n("story_image_alt"),filter:{sepia:"md"},width:260})]})]})},args:{src:l}},k={render:function(t){const{t:n}=c(m);return e.jsxs("div",{style:{position:"relative",width:"600px",height:"300px",overflow:"hidden",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${l})`,backgroundSize:"cover",filter:"saturate(1.5) brightness(0.8)"}}),e.jsxs("div",{style:{position:"relative",zIndex:1,textAlign:"center"},children:[e.jsx(a,{...t,alt:n("story_image_alt"),backdropFilter:{blur:"md"},hoverBackdropFilter:{blur:"none"},style:{backgroundColor:"rgba(255, 255, 255, 0.2)",padding:"20px"},width:300,radius:"large",border:!0}),e.jsx("p",{style:{color:"white",marginTop:"1rem",fontWeight:"bold"},children:n("story_image_backdrop_hover_clear",{defaultValue:"Hover to clear backdrop blur"})})]})]})},args:{src:l}},A={render:function(t){const{t:n}=c(m);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_advanced_noise")}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{...t,alt:"Low noise",noise:"sm",width:200,caption:`${n("common_intensity",{defaultValue:"Intensity"})}: sm`}),e.jsx(a,{...t,alt:"Medium noise",noise:"md",width:200,caption:`${n("common_intensity",{defaultValue:"Intensity"})}: md`}),e.jsx(a,{...t,alt:"High noise",noise:"lg",width:200,caption:`${n("common_intensity",{defaultValue:"Intensity"})}: lg`})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_advanced_duotone")}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{...t,alt:"Duotone gold",duotone:{light:"#f0dfaf",dark:"#3f3f3f"},width:300,caption:n("story_image_advanced_goldish")}),e.jsx(a,{...t,alt:"Duotone cyber",duotone:{light:"#00fff2",dark:"#6000ff"},width:300,caption:n("story_image_advanced_cyberpunk")})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_advanced_overlay_vignette")}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(a,{...t,alt:"Overlay",overlay:{color:"linear-gradient(to top, rgba(0,0,0,0.8), transparent)",intensity:"medium"},width:300}),e.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"20px",color:"white",zIndex:2},children:[e.jsx("h4",{style:{margin:0},children:n("story_image_advanced_text_over")}),e.jsx("p",{style:{margin:0,fontSize:"0.8rem"},children:n("story_image_advanced_overlay_readability")})]})]}),e.jsx(a,{...t,alt:"Hover overlay",overlay:{color:"rgba(100, 108, 255, 0.4)",showOnHover:!0},width:300,caption:n("story_image_advanced_hover_brand")})]})]})]})},args:{src:l,radius:"medium"}},C={render:function(t){const{t:n}=c(m),[o,p]=S.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_motion_effects_smooth_zoom")}),e.jsx(a,{...t,alt:"Zoom effect",zoom:1.1,width:300,radius:"medium",caption:n("story_image_motion_effects_zoom_caption")})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_motion_effects_3d_tilt")}),e.jsx(a,{...t,alt:"Tilt effect",tilt:!0,width:300,radius:"medium",shadow:!0,caption:n("story_image_motion_effects_tilt_caption")})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_motion_effects_fade_in")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("div",{style:{display:"flex",gap:"1rem"},children:e.jsx(_e,{priority:"primary",onClick:()=>p(u=>u+1),label:n("story_image_motion_effects_reload"),icon:"RefreshIcon"})}),fe.createElement(a,{...t,key:o,src:`${l}?k=${o}`,fadeIn:!0,demoDelay:2e3,width:400,radius:"medium",shadow:!0,caption:n("story_image_motion_effects_interactive_caption")})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:"Ultimate Combo"}),e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(a,{...t,alt:"Combo",zoom:!0,tilt:!0,noise:"sm",overlay:{color:"linear-gradient(to top, rgba(100, 108, 255, 0.6), transparent)",showOnHover:!0},filter:{grayscale:"sm"},hoverFilter:{grayscale:"none"},width:"100%",radius:"large",shadow:!0,caption:"Zoom + Tilt + Noise + Overlay + Filter"})})]})]})},args:{src:l}},E={render:function(t){const{t:n}=c(m);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_blending_overlay",{defaultValue:"Overlay Blending"})}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{...t,alt:n("story_image_alt_multiply",{defaultValue:"Multiply overlay"}),overlay:{color:"#3498db",intensity:"medium",blendMode:"multiply"},width:300,caption:n("story_image_caption_blue_multiply",{defaultValue:"Blue Multiply (Adds tint)"})}),e.jsx(a,{...t,alt:n("story_image_alt_overlay",{defaultValue:"Overlay blend"}),overlay:{color:"#e74c3c",intensity:"medium",blendMode:"overlay"},width:300,caption:n("story_image_caption_red_overlay",{defaultValue:"Red Overlay (Increases contrast)"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_blending_image",{defaultValue:"Image Blending with Background"})}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{padding:"20px",background:"linear-gradient(45deg, #f3f3f3, #ddd)"},children:e.jsx(a,{...t,alt:n("story_image_alt_multiply_bg",{defaultValue:"Multiply image"}),blendMode:"multiply",bgColor:"#f1c40f",width:300,caption:n("story_image_caption_yellow_multiply",{defaultValue:"Image Multiply with Yellow BG"})})}),e.jsx("div",{style:{padding:"20px",background:"black"},children:e.jsx(a,{...t,alt:n("story_image_alt_screen",{defaultValue:"Screen image"}),blendMode:"screen",width:300,caption:n("story_image_caption_screen",{defaultValue:"Image Screen (Whitening effect)"})})})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_blending_difference",{defaultValue:"Creative: Difference Mode"})}),e.jsxs("div",{style:{position:"relative",width:"400px"},children:[e.jsx(a,{...t,alt:n("story_image_alt_difference",{defaultValue:"Difference"}),overlay:{color:"white",intensity:1,blendMode:"difference"},width:"100%"}),e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontSize:"2rem",fontWeight:"bold",mixBlendMode:"difference"},children:n("story_image_inverted_text",{defaultValue:"INVERTED TEXT"})})]})]})]})},args:{src:l,radius:"medium"}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 400
  }
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story_image_alt")} caption={t("story_image_caption")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 400
  }
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 200,
    height: 200,
    radius: "large",
    fit: "cover"
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 150,
    height: 150,
    radius: "full",
    fit: "cover",
    border: true
  }
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 400,
    shadow: true,
    radius: "medium"
  }
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "2rem"
    }}>\r
        <div>\r
          <p style={{
          marginBottom: "0.5rem",
          fontSize: "0.875rem"
        }}>Grayscale to Color (Hover)</p>\r
          <Image {...args} alt={t("story_image_alt")} filter={{
          grayscale: "lg"
        }} hoverFilter={{
          grayscale: "none"
        }} width={260} />\r
        </div>\r
        <div>\r
          <p style={{
          marginBottom: "0.5rem",
          fontSize: "0.875rem"
        }}>Blur to Clear (Hover)</p>\r
          <Image {...args} alt={t("story_image_alt")} filter={{
          blur: "sm"
        }} hoverFilter={{
          blur: "none"
        }} width={260} />\r
        </div>\r
        <div>\r
          <p style={{
          marginBottom: "0.5rem",
          fontSize: "0.875rem"
        }}>Sepia (Fixed)</p>\r
          <Image {...args} alt={t("story_image_alt")} filter={{
          sepia: "md"
        }} width={260} />\r
        </div>\r
      </div>;
  },
  args: {
    src: vibrantLandscape
  }
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      position: "relative",
      width: "600px",
      height: "300px",
      overflow: "hidden",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>\r
        {/* 背景画像 */}\r
        <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: \`url(\${vibrantLandscape})\`,
        backgroundSize: "cover",
        filter: "saturate(1.5) brightness(0.8)"
      }} />\r
        {/* Backdrop Filterをかけた画像（透過素材を想定） */}\r
        <div style={{
        position: "relative",
        zIndex: 1,
        textAlign: "center"
      }}>\r
          <Image {...args} alt={t("story_image_alt")} backdropFilter={{
          blur: "md"
        }} hoverBackdropFilter={{
          blur: "none"
        }} style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          padding: "20px"
        }} width={300} radius="large" border />\r
          <p style={{
          color: "white",
          marginTop: "1rem",
          fontWeight: "bold"
        }}>\r
            {t("story_image_backdrop_hover_clear", {
            defaultValue: "Hover to clear backdrop blur"
          })}\r
          </p>\r
        </div>\r
      </div>;
  },
  args: {
    src: vibrantLandscape
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "3rem"
    }}>\r
        <div>\r
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story_image_advanced_noise")}</p>\r
          <div style={{
          display: "flex",
          gap: "1rem"
        }}>\r
            <Image {...args} alt="Low noise" noise="sm" width={200} caption={\`\${t("common_intensity", {
            defaultValue: "Intensity"
          })}: sm\`} />\r
            <Image {...args} alt="Medium noise" noise="md" width={200} caption={\`\${t("common_intensity", {
            defaultValue: "Intensity"
          })}: md\`} />\r
            <Image {...args} alt="High noise" noise="lg" width={200} caption={\`\${t("common_intensity", {
            defaultValue: "Intensity"
          })}: lg\`} />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story_image_advanced_duotone")}</p>\r
          <div style={{
          display: "flex",
          gap: "1rem"
        }}>\r
            <Image {...args} alt="Duotone gold" duotone={{
            light: "#f0dfaf",
            dark: "#3f3f3f"
          }} width={300} caption={t("story_image_advanced_goldish")} />\r
            <Image {...args} alt="Duotone cyber" duotone={{
            light: "#00fff2",
            dark: "#6000ff"
          }} width={300} caption={t("story_image_advanced_cyberpunk")} />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story_image_advanced_overlay_vignette")}</p>\r
          <div style={{
          display: "flex",
          gap: "1rem"
        }}>\r
            <div style={{
            position: "relative"
          }}>\r
              <Image {...args} alt="Overlay" overlay={{
              color: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
              intensity: "medium"
            }} width={300} />\r
              <div style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              color: "white",
              zIndex: 2
            }}>\r
                <h4 style={{
                margin: 0
              }}>{t("story_image_advanced_text_over")}</h4>\r
                <p style={{
                margin: 0,
                fontSize: "0.8rem"
              }}>{t("story_image_advanced_overlay_readability")}</p>\r
              </div>\r
            </div>\r
            \r
            <Image {...args} alt="Hover overlay" overlay={{
            color: "rgba(100, 108, 255, 0.4)",
            showOnHover: true
          }} width={300} caption={t("story_image_advanced_hover_brand")} />\r
          </div>\r
        </div>\r
      </div>;
  },
  args: {
    src: vibrantLandscape,
    radius: "medium"
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [imageKey, setImageKey] = React.useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "3rem"
    }}>\r
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem"
      }}>\r
          <div>\r
            <p style={{
            marginBottom: "1rem",
            fontWeight: "bold"
          }}>{t("story_image_motion_effects_smooth_zoom")}</p>\r
            <Image {...args} alt="Zoom effect" zoom={1.1} width={300} radius="medium" caption={t("story_image_motion_effects_zoom_caption")} />\r
          </div>\r
          <div>\r
            <p style={{
            marginBottom: "1rem",
            fontWeight: "bold"
          }}>{t("story_image_motion_effects_3d_tilt")}</p>\r
            <Image {...args} alt="Tilt effect" tilt width={300} radius="medium" shadow caption={t("story_image_motion_effects_tilt_caption")} />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story_image_motion_effects_fade_in")}</p>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>\r
            <div style={{
            display: "flex",
            gap: "1rem"
          }}>\r
              <Button priority="primary" onClick={() => setImageKey(prev => prev + 1)} label={t("story_image_motion_effects_reload")} icon="RefreshIcon" />\r
            </div>\r
            <Image {...args} key={imageKey} src={\`\${vibrantLandscape}?k=\${imageKey}\`} fadeIn demoDelay={2000} width={400} radius="medium" shadow caption={t("story_image_motion_effects_interactive_caption")} />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>Ultimate Combo</p>\r
          <div style={{
          maxWidth: "500px"
        }}>\r
            <Image {...args} alt="Combo" zoom tilt noise="sm" overlay={{
            color: "linear-gradient(to top, rgba(100, 108, 255, 0.6), transparent)",
            showOnHover: true
          }} filter={{
            grayscale: "sm"
          }} hoverFilter={{
            grayscale: "none"
          }} width="100%" radius="large" shadow caption="Zoom + Tilt + Noise + Overlay + Filter" />\r
          </div>\r
        </div>\r
      </div>;
  },
  args: {
    src: vibrantLandscape
  }
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "3rem"
    }}>\r
        <div>\r
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story_image_blending_overlay", {
            defaultValue: "Overlay Blending"
          })}</p>\r
          <div style={{
          display: "flex",
          gap: "1rem"
        }}>\r
            <Image {...args} alt={t("story_image_alt_multiply", {
            defaultValue: "Multiply overlay"
          })} overlay={{
            color: "#3498db",
            intensity: "medium",
            blendMode: "multiply"
          }} width={300} caption={t("story_image_caption_blue_multiply", {
            defaultValue: "Blue Multiply (Adds tint)"
          })} />\r
            <Image {...args} alt={t("story_image_alt_overlay", {
            defaultValue: "Overlay blend"
          })} overlay={{
            color: "#e74c3c",
            intensity: "medium",
            blendMode: "overlay"
          }} width={300} caption={t("story_image_caption_red_overlay", {
            defaultValue: "Red Overlay (Increases contrast)"
          })} />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story_image_blending_image", {
            defaultValue: "Image Blending with Background"
          })}</p>\r
          <div style={{
          display: "flex",
          gap: "1rem"
        }}>\r
            <div style={{
            padding: "20px",
            background: "linear-gradient(45deg, #f3f3f3, #ddd)"
          }}>\r
              <Image {...args} alt={t("story_image_alt_multiply_bg", {
              defaultValue: "Multiply image"
            })} blendMode="multiply" bgColor="#f1c40f" width={300} caption={t("story_image_caption_yellow_multiply", {
              defaultValue: "Image Multiply with Yellow BG"
            })} />\r
            </div>\r
            <div style={{
            padding: "20px",
            background: "black"
          }}>\r
              <Image {...args} alt={t("story_image_alt_screen", {
              defaultValue: "Screen image"
            })} blendMode="screen" width={300} caption={t("story_image_caption_screen", {
              defaultValue: "Image Screen (Whitening effect)"
            })} />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div>\r
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story_image_blending_difference", {
            defaultValue: "Creative: Difference Mode"
          })}</p>\r
          <div style={{
          position: "relative",
          width: "400px"
        }}>\r
            <Image {...args} alt={t("story_image_alt_difference", {
            defaultValue: "Difference"
          })} overlay={{
            color: "white",
            intensity: 1,
            blendMode: "difference"
          }} width="100%" />\r
            <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            mixBlendMode: "difference"
          }}>\r
              {t("story_image_inverted_text", {
              defaultValue: "INVERTED TEXT"
            })}\r
            </div>\r
          </div>\r
        </div>\r
      </div>;
  },
  args: {
    src: vibrantLandscape,
    radius: "medium"
  }
}`,...E.parameters?.docs?.source}}};const he=["Default","WithCaption","Rounded","Circular","WithShadow","Filters","Glassmorphism","AdvancedEffects","MotionEffects","BlendingEffects"],Me=Object.freeze(Object.defineProperty({__proto__:null,AdvancedEffects:A,BlendingEffects:E,Circular:R,Default:B,Filters:L,Glassmorphism:k,MotionEffects:C,Rounded:T,WithCaption:M,WithShadow:V,__namedExportsOrder:he,default:ve},Symbol.toStringTag,{value:"Module"}));export{R as C,B as D,Me as I,T as R,M as W,V as a};
