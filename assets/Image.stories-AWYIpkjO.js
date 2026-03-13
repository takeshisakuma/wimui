import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as I,r as pe}from"./iframe-BFeRKT7x.js";import{c as Y}from"./index-CP8jozY9.js";import{u as fe}from"./useMediaLoader-BHssDu2E.js";import{B as ye}from"./Button-TACQNaJI.js";import{u as c}from"./useTranslation-DVQ5refS.js";const u=(r,t)=>{if(t===void 0||t==="none"||t===!1)return;const n={blur:{sm:"4px",md:"8px",lg:"16px"},grayscale:{sm:"33%",md:"66%",lg:"100%",true:"100%"},brightness:{sm:"0.8",md:"0.5",lg:"0.3"},contrast:{sm:"1.2",md:"1.5",lg:"2"},sepia:{sm:"33%",md:"66%",lg:"100%"},saturate:{sm:"1.5",md:"2",lg:"3"},invert:{sm:"33%",md:"66%",lg:"100%"},opacity:{sm:"0.8",md:"0.5",lg:"0.2"}};if(r==="hueRotate")return`${t}deg`;const o=typeof t=="boolean"?"true":t;return n[r]?.[o]},U=r=>{const t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=r.replace(t,(g,m,f,y)=>m+m+f+f+y+y),o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return o?{r:parseInt(o[1],16)/255,g:parseInt(o[2],16)/255,b:parseInt(o[3],16)/255}:{r:0,g:0,b:0}},F=r=>{if(!r)return;const t=[],n=u("blur",r.blur);n&&t.push(`blur(${n})`);const o=u("grayscale",r.grayscale);o&&t.push(`grayscale(${o})`);const g=u("brightness",r.brightness);g&&t.push(`brightness(${g})`);const m=u("contrast",r.contrast);m&&t.push(`contrast(${m})`);const f=u("sepia",r.sepia);f&&t.push(`sepia(${f})`);const y=u("saturate",r.saturate);y&&t.push(`saturate(${y})`);const b=u("hueRotate",r.hueRotate);b&&t.push(`hue-rotate(${b})`);const x=u("invert",r.invert);x&&t.push(`invert(${x})`);const v=u("opacity",r.opacity);return v&&t.push(`opacity(${v})`),t.length>0?t.join(" "):"none"},a=({src:r,alt:t,width:n,height:o,radius:g="none",shadow:m=!1,border:f=!1,fit:y="cover",loading:b,caption:x,filter:v,hoverFilter:L,backdropFilter:E,hoverBackdropFilter:H,transition:A="normal",noise:h,duotone:p,overlay:d,zoom:w=!1,tilt:P=!1,fadeIn:N=!1,blendMode:G,bgColor:K,demoDelay:Q,priority:J=!1,className:ee,style:ne,...te})=>{const{containerRef:re,isLoaded:ae,isIntersecting:ie,notifyLoaded:oe,shouldShowSkeleton:se}=fe({loading:b,src:r,demoDelay:Q}),[le,Z]=I.useState({}),X=I.useId().replace(/:/g,""),de=i=>{if(!P)return;const s=i.currentTarget.getBoundingClientRect(),z=i.clientX-s.left,q=i.clientY-s.top,j=s.width/2,D=s.height/2,_=(q-D)/D*-10,O=(z-j)/j*10;Z({transform:`perspective(1000px) rotateX(${_}deg) rotateY(${O}deg)`})},ce=()=>{P&&Z({transform:"perspective(1000px) rotateX(0deg) rotateY(0deg)"})},me=I.useMemo(()=>{const i={};if(w){const _=typeof w=="number"?w:1.05;i["--wim-image-zoom-scale"]=_.toString()}const s=F(v);s&&(i["--wim-image-filter"]=s),p&&(i["--wim-image-filter"]=`${i["--wim-image-filter"]||""} url(#${X})`.trim());const z=F(E);z&&(i["--wim-image-backdrop"]=z);const q=F(L);q&&(i["--wim-image-hover-filter"]=q);const j=F(H);if(j&&(i["--wim-image-hover-backdrop"]=j),h&&h!=="none"){const _={sm:"0.05",md:"0.1",lg:"0.2"}[h];i["--wim-image-noise-opacity"]=_||"0"}if(d){const _={light:"0.3",medium:"0.6",heavy:"0.9"},O=typeof d.intensity=="number"?d.intensity.toString():_[d.intensity]||"0.5";i["--wim-image-overlay-color"]=d.color||"rgba(0,0,0,0.5)",i["--wim-image-overlay-opacity"]=d.showOnHover?"0":O,i["--wim-image-overlay-hover-opacity"]=O,d.blendMode&&(i["--wim-image-overlay-blend"]=d.blendMode)}G&&(i["--wim-image-blend-mode"]=G),K&&(i["--wim-image-bg-color"]=K);const D={none:"0s",fast:"0.2s",normal:"0.3s",slow:"0.5s"};return i["--wim-image-transition-duration"]=D[A],i},[v,L,E,H,A,h,p,d,X,w,G,K]),ue=I.useMemo(()=>{if(!p)return null;const i=U(p.light),s=U(p.dark);return`
      ${i.r-s.r} 0 0 0 ${s.r}
      ${i.g-s.g} 0 0 0 ${s.g}
      ${i.b-s.b} 0 0 0 ${s.b}
      0 0 0 1 0
    `},[p]),ge={width:"100%",height:o||"auto",objectFit:y,...ne};return e.jsxs("figure",{ref:re,className:Y("wim-image-container",ee),style:{maxWidth:n||"100%",width:"100%",...me,...le},onMouseMove:de,onMouseLeave:ce,children:[p&&e.jsx("svg",{style:{position:"absolute",width:0,height:0},children:e.jsx("filter",{id:X,colorInterpolationFilters:"sRGB",children:e.jsx("feColorMatrix",{type:"matrix",values:ue||""})})}),e.jsx("div",{className:Y("wim-image-inner",g!=="none"&&`wim-image--radius-${g}`,m&&"wim-image--shadow",f&&"wim-image--border",(E||H)&&"wim-image--has-backdrop",h&&h!=="none"&&"wim-image--has-noise",d&&"wim-image--has-overlay",w&&"wim-image--zoomable",N&&"wim-image--fade-in",N&&ae&&"wim-image--is-loaded",se&&N&&"wim-image--loading"),children:ie&&e.jsx("img",{src:r,alt:t,onLoad:oe,className:Y("wim-image",(v||L||p)&&"wim-image--has-filter"),style:ge,loading:b,fetchPriority:J?"high":void 0,...te})}),x&&e.jsx("figcaption",{className:"wim-image__caption",children:x})]})};a.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"角丸のサイズ",defaultValue:{value:'"none"',computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"シャドウ（影）を表示するか",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"枠線を表示するか",defaultValue:{value:"false",computed:!1}},fit:{required:!1,tsType:{name:"union",raw:'"contain" | "cover" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"画像のフィット感",defaultValue:{value:'"cover"',computed:!1}},loading:{required:!1,tsType:{name:"union",raw:'"eager" | "lazy"',elements:[{name:"literal",value:'"eager"'},{name:"literal",value:'"lazy"'}]},description:"遅延読み込み設定"},caption:{required:!1,tsType:{name:"string"},description:"画像の下に表示する説明文"},filter:{required:!1,tsType:{name:"ImageFilterOptions"},description:"画像自体に適用するフィルタ"},hoverFilter:{required:!1,tsType:{name:"ImageFilterOptions"},description:"ホバー時に適用するフィルタ（指定がない場合はfilterが維持されます）"},backdropFilter:{required:!1,tsType:{name:"ImageFilterOptions"},description:"背景に適用するフィルタ（透過画像などで効果的）"},hoverBackdropFilter:{required:!1,tsType:{name:"ImageFilterOptions"},description:"ホバー時に背景に適用するフィルタ"},transition:{required:!1,tsType:{name:"union",raw:'"none" | "fast" | "normal" | "slow"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"fast"'},{name:"literal",value:'"normal"'},{name:"literal",value:'"slow"'}]},description:"フィルタ切り替え時のアニメーション速度",defaultValue:{value:'"normal"',computed:!1}},noise:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"フィルムグレイン（ノイズ）の強度"},duotone:{required:!1,tsType:{name:"ImageDuotoneOptions"},description:"デュオトーン設定"},overlay:{required:!1,tsType:{name:"ImageOverlayOptions"},description:"オーバーレイ設定"},zoom:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"ホバー時の拡大倍率 (例: 1.1) または true (デフォルト1.05)",defaultValue:{value:"false",computed:!1}},tilt:{required:!1,tsType:{name:"boolean"},description:"マウスに追従するチルト（傾き）エフェクト",defaultValue:{value:"false",computed:!1}},fadeIn:{required:!1,tsType:{name:"boolean"},description:"読み込み完了時にフェードインさせるか",defaultValue:{value:"false",computed:!1}},blendMode:{required:!1,tsType:{name:'ReactCSSProperties["mixBlendMode"]',raw:'React.CSSProperties["mixBlendMode"]'},description:"画像自体のブレンドモード"},bgColor:{required:!1,tsType:{name:"string"},description:"ブレンド用の背景色"},demoDelay:{required:!1,tsType:{name:"number"},description:"デモ用：読み込み完了を意図的に遅らせるミリ秒"},priority:{required:!1,tsType:{name:"boolean"},description:'LCP候補など、読み込み優先度を上げるかどうか（fetchpriority="high"）',defaultValue:{value:"false",computed:!1}}}};const l=""+new URL("vibrant_landscape-BL-xlQBo.png",import.meta.url).href,_e={title:"Components/Media/Image",component:a,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]},fit:{control:"select",options:["contain","cover","fill","none","scale-down"]}}},B={render:function(t){const{t:n}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(a,{...t,alt:n("story_image_alt")})},args:{src:l,width:400}},T={render:function(t){const{t:n}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(a,{...t,alt:n("story_image_alt"),caption:n("story_image_caption")})},args:{src:l,width:400}},S={render:function(t){const{t:n}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(a,{...t,alt:n("story_image_alt")})},args:{src:l,width:200,height:200,radius:"large",fit:"cover"}},R={render:function(t){const{t:n}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(a,{...t,alt:n("story_image_alt")})},args:{src:l,width:150,height:150,radius:"full",fit:"cover",border:!0}},V={render:function(t){const{t:n}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(a,{...t,alt:n("story_image_alt")})},args:{src:l,width:400,shadow:!0,radius:"medium"}},M={render:function(t){const{t:n}=c(["docs","common","components"]);return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Grayscale to Color (Hover)"}),e.jsx(a,{...t,alt:n("story_image_alt"),filter:{grayscale:"lg"},hoverFilter:{grayscale:"none"},width:260})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Blur to Clear (Hover)"}),e.jsx(a,{...t,alt:n("story_image_alt"),filter:{blur:"sm"},hoverFilter:{blur:"none"},width:260})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Sepia (Fixed)"}),e.jsx(a,{...t,alt:n("story_image_alt"),filter:{sepia:"md"},width:260})]})]})},args:{src:l}},k={render:function(t){const{t:n}=c(["docs","common","components"]);return e.jsxs("div",{style:{position:"relative",width:"600px",height:"300px",overflow:"hidden",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${l})`,backgroundSize:"cover",filter:"saturate(1.5) brightness(0.8)"}}),e.jsxs("div",{style:{position:"relative",zIndex:1,textAlign:"center"},children:[e.jsx(a,{...t,alt:n("story_image_alt"),backdropFilter:{blur:"md"},hoverBackdropFilter:{blur:"none"},style:{backgroundColor:"rgba(255, 255, 255, 0.2)",padding:"20px"},width:300,radius:"large",border:!0}),e.jsx("p",{style:{color:"white",marginTop:"1rem",fontWeight:"bold"},children:n("story_image_backdrop_hover_clear",{defaultValue:"Hover to clear backdrop blur"})})]})]})},args:{src:l}},W={render:function(t){const{t:n}=c(["docs","common","components"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_advanced_noise")}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{...t,alt:"Low noise",noise:"sm",width:200,caption:`${n("common_intensity",{defaultValue:"Intensity"})}: sm`}),e.jsx(a,{...t,alt:"Medium noise",noise:"md",width:200,caption:`${n("common_intensity",{defaultValue:"Intensity"})}: md`}),e.jsx(a,{...t,alt:"High noise",noise:"lg",width:200,caption:`${n("common_intensity",{defaultValue:"Intensity"})}: lg`})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_advanced_duotone")}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{...t,alt:"Duotone gold",duotone:{light:"#f0dfaf",dark:"#3f3f3f"},width:300,caption:n("story_image_advanced_goldish")}),e.jsx(a,{...t,alt:"Duotone cyber",duotone:{light:"#00fff2",dark:"#6000ff"},width:300,caption:n("story_image_advanced_cyberpunk")})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_advanced_overlay_vignette")}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(a,{...t,alt:"Overlay",overlay:{color:"linear-gradient(to top, rgba(0,0,0,0.8), transparent)",intensity:"medium"},width:300}),e.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"20px",color:"white",zIndex:2},children:[e.jsx("h4",{style:{margin:0},children:n("story_image_advanced_text_over")}),e.jsx("p",{style:{margin:0,fontSize:"0.8rem"},children:n("story_image_advanced_overlay_readability")})]})]}),e.jsx(a,{...t,alt:"Hover overlay",overlay:{color:"rgba(100, 108, 255, 0.4)",showOnHover:!0},width:300,caption:n("story_image_advanced_hover_brand")})]})]})]})},args:{src:l,radius:"medium"}},$={render:function(t){const{t:n}=c(["docs","common","components"]),[o,g]=I.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_motion_effects_smooth_zoom")}),e.jsx(a,{...t,alt:"Zoom effect",zoom:1.1,width:300,radius:"medium",caption:n("story_image_motion_effects_zoom_caption")})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_motion_effects_3d_tilt")}),e.jsx(a,{...t,alt:"Tilt effect",tilt:!0,width:300,radius:"medium",shadow:!0,caption:n("story_image_motion_effects_tilt_caption")})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_motion_effects_fade_in")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("div",{style:{display:"flex",gap:"1rem"},children:e.jsx(ye,{priority:"primary",onClick:()=>g(m=>m+1),label:n("story_image_motion_effects_reload"),icon:"RefreshIcon"})}),pe.createElement(a,{...t,key:o,src:`${l}?k=${o}`,fadeIn:!0,demoDelay:2e3,width:400,radius:"medium",shadow:!0,caption:n("story_image_motion_effects_interactive_caption")})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:"Ultimate Combo"}),e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(a,{...t,alt:"Combo",zoom:!0,tilt:!0,noise:"sm",overlay:{color:"linear-gradient(to top, rgba(100, 108, 255, 0.6), transparent)",showOnHover:!0},filter:{grayscale:"sm"},hoverFilter:{grayscale:"none"},width:"100%",radius:"large",shadow:!0,caption:"Zoom + Tilt + Noise + Overlay + Filter"})})]})]})},args:{src:l}},C={render:function(t){const{t:n}=c(["docs","common","components","docs_stories"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_blending_overlay",{defaultValue:"Overlay Blending"})}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{...t,alt:n("story_image_alt_multiply",{defaultValue:"Multiply overlay"}),overlay:{color:"#3498db",intensity:"medium",blendMode:"multiply"},width:300,caption:n("story_image_caption_blue_multiply",{defaultValue:"Blue Multiply (Adds tint)"})}),e.jsx(a,{...t,alt:n("story_image_alt_overlay",{defaultValue:"Overlay blend"}),overlay:{color:"#e74c3c",intensity:"medium",blendMode:"overlay"},width:300,caption:n("story_image_caption_red_overlay",{defaultValue:"Red Overlay (Increases contrast)"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_blending_image",{defaultValue:"Image Blending with Background"})}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{padding:"20px",background:"linear-gradient(45deg, #f3f3f3, #ddd)"},children:e.jsx(a,{...t,alt:n("story_image_alt_multiply_bg",{defaultValue:"Multiply image"}),blendMode:"multiply",bgColor:"#f1c40f",width:300,caption:n("story_image_caption_yellow_multiply",{defaultValue:"Image Multiply with Yellow BG"})})}),e.jsx("div",{style:{padding:"20px",background:"black"},children:e.jsx(a,{...t,alt:n("story_image_alt_screen",{defaultValue:"Screen image"}),blendMode:"screen",width:300,caption:n("story_image_caption_screen",{defaultValue:"Image Screen (Whitening effect)"})})})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:n("story_image_blending_difference",{defaultValue:"Creative: Difference Mode"})}),e.jsxs("div",{style:{position:"relative",width:"400px"},children:[e.jsx(a,{...t,alt:n("story_image_alt_difference",{defaultValue:"Difference"}),overlay:{color:"white",intensity:1,blendMode:"difference"},width:"100%"}),e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontSize:"2rem",fontWeight:"bold",mixBlendMode:"difference"},children:n("story_image_inverted_text",{defaultValue:"INVERTED TEXT"})})]})]})]})},args:{src:l,radius:"medium"}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 400
  }
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} caption={t("story_image_caption")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 400
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 200,
    height: 200,
    radius: "large",
    fit: "cover"
  }
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 400,
    shadow: true,
    radius: "medium"
  }
}`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...k.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...W.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...$.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components", "docs_stories"]);
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
}`,...C.parameters?.docs?.source}}};const ve=["Default","WithCaption","Rounded","Circular","WithShadow","Filters","Glassmorphism","AdvancedEffects","MotionEffects","BlendingEffects"],Be=Object.freeze(Object.defineProperty({__proto__:null,AdvancedEffects:W,BlendingEffects:C,Circular:R,Default:B,Filters:M,Glassmorphism:k,MotionEffects:$,Rounded:S,WithCaption:T,WithShadow:V,__namedExportsOrder:ve,default:_e},Symbol.toStringTag,{value:"Module"}));export{R as C,B as D,Be as I,S as R,T as W,V as a};
