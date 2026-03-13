const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jsmediatags-C034HI1-.js","./iframe-BFeRKT7x.js","./preload-helper-PPVm8Dsz.js","./iframe-BSoGuKj3.css"])))=>i.map(i=>d[i]);
import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as lt}from"./iframe-BFeRKT7x.js";import{_ as ct}from"./preload-helper-PPVm8Dsz.js";import{c as B}from"./index-CP8jozY9.js";import{I as k}from"./Icon-D4ZM1Mba.js";import{u as dt}from"./useMediaLoader-BHssDu2E.js";import{u as _e}from"./useTranslation-DVQ5refS.js";import{B as mt}from"./Button-TACQNaJI.js";const ae=({src:j,autoPlay:N=!1,loop:S=!1,muted:ne=!1,controls:se=!0,radius:Q="none",shadow:ze=!1,border:De=!1,preload:Be,caption:ke,className:Le,style:Fe,customControls:b=!1,visualizer:q=!1,showMetadata:oe=!1,fadeIn:L=!1,fadeOut:ie=!1,crossfade:ue=!1,playbackRate:Ue=!1,hotkeys:Ce=!1,presets:We=!1,sleepTimer:Oe=!1,loading:Ke="lazy",demoDelay:$e,...X})=>{const{t:x}=_e(),c=a.useMemo(()=>j?(Array.isArray(j)?j:[j]).map(t=>typeof t=="string"?{src:t}:t):[],[j]),[h,je]=a.useState(0),v=c[h]||null,{containerRef:Ge,isLoaded:He,isIntersecting:Je,notifyLoaded:le,shouldShowSkeleton:Qe}=dt({loading:Ke,demoDelay:$e,src:v?.src}),[u,M]=a.useState(!1),[ce,Se]=a.useState(0),[de,Xe]=a.useState(0),[d,me]=a.useState(1),[T,fe]=a.useState(ne),[m,Ye]=a.useState(S?1:0),[pe,Ze]=a.useState(!1),[Re,Ae]=a.useState(""),[Ie,Ne]=a.useState(""),[ye,qe]=a.useState(""),[Y,et]=a.useState(1),[F,tt]=a.useState(!1),[Z,ge]=a.useState(null),n=a.useRef(null),f=a.useRef(null),l=a.useRef(null),be=a.useRef(null),_=a.useRef(null),p=a.useRef(null),he=a.useRef(null),ve=a.useRef(null),R=a.useRef(null),V=a.useRef(null),P=a.useRef(!1),we=typeof L=="number"?L:L?1e3:0,ee=typeof ie=="number"?ie:ie?1e3:0,A=typeof ue=="number"?ue:ue?3e3:0,E=a.useCallback(()=>{if(l.current)return;const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;if(l.current=t,!n.current||!f.current)return;const s=t.createMediaElementSource(n.current),o=t.createGain(),w=t.createMediaElementSource(f.current),y=t.createGain(),i=t.createBiquadFilter();i.type="lowshelf",i.frequency.value=200,i.gain.value=F?10:0,be.current=i,s.connect(i),i.connect(o),w.connect(y);const g=t.createAnalyser();g.fftSize=256,ve.current=g,o.connect(g),y.connect(g),g.connect(t.destination),p.current=o,he.current=y},[]);a.useEffect(()=>{be.current&&l.current&&be.current.gain.setTargetAtTime(F?10:0,l.current.currentTime||0,.1)},[F]),a.useEffect(()=>{n.current&&(n.current.playbackRate=Y)},[Y]);const I=a.useCallback((e,t,s,o)=>{if(!l.current)return;const w=l.current;e.gain.cancelScheduledValues(w.currentTime),e.gain.setValueAtTime(t,w.currentTime),e.gain.linearRampToValueAtTime(s,w.currentTime+o/1e3)},[]),z=a.useCallback(()=>{if(!n.current)return;E();const e=n.current.play();e!==void 0&&e.then(()=>{l.current&&p.current&&we>0?I(p.current,0,d,we):p.current&&(p.current.gain.value=d),M(!0)}).catch(t=>{console.warn("Playback prevented",t),M(!1)})},[we,d,I,E]),xe=a.useCallback(()=>{n.current&&(l.current&&p.current&&ee>0?(I(p.current,p.current.gain.value,0,ee),setTimeout(()=>{n.current?.pause(),M(!1)},ee)):(n.current.pause(),M(!1)))},[ee,I]),Me=a.useCallback(()=>{if(!q||!R.current||!ve.current)return;const e=R.current,t=e.getContext("2d");if(!t)return;const s=ve.current,o=s.frequencyBinCount,w=new Uint8Array(o),y=()=>{V.current=requestAnimationFrame(y),s.getByteFrequencyData(w),t.clearRect(0,0,e.width,e.height);const i=e.width/o*2.5;let g=0;for(let U=0;U<o;U++){const D=w[U];t.fillStyle=`rgb(${D+100}, 100, 255)`,t.fillRect(g,e.height-D/2,i,D/2),g+=i+1}};y()},[q]);a.useEffect(()=>{if(u&&q)E(),Me(),l.current&&l.current.state==="suspended"&&l.current.resume();else if(V.current&&(cancelAnimationFrame(V.current),V.current=null),!u&&R.current){const e=R.current.getContext("2d");e&&e.clearRect(0,0,R.current.width,R.current.height)}return()=>{V.current&&cancelAnimationFrame(V.current)}},[u,q,Me,E]),a.useEffect(()=>{if(!v)return;let e=v.title||"",t=v.artist||"",s=v.coverArt||"";oe&&!e&&!t&&!s&&ct(()=>import("./jsmediatags-C034HI1-.js").then(o=>o.j),__vite__mapDeps([0,1,2,3]),import.meta.url).then(o=>{(o.default||o).read(v.src,{onSuccess:y=>{const i=y.tags;if(i.title&&Ae(i.title),i.artist&&Ne(i.artist),i.picture){const{data:g,format:U}=i.picture;let D="";g.forEach(ut=>{D+=String.fromCharCode(ut)});const it=btoa(D);qe(`data:${U};base64,${it}`)}},onError:y=>{console.warn("jsmediatags parse error:",y)}})}).catch(o=>{console.warn("Failed to load jsmediatags dynamically:",o)}),Ae(e),Ne(t),qe(s),n.current&&(n.current.src=v.src,(N||u)&&z())},[h,v,oe,N,u,z]);const Ve=a.useCallback(()=>{n.current&&(n.current.volume=d,n.current.muted=T),f.current&&(f.current.volume=d,f.current.muted=T)},[d,T]);a.useEffect(()=>{Ve()},[Ve]);const Te=a.useCallback(()=>{E(),u?xe():z()},[u,xe,z,E]);a.useEffect(()=>{if(!Ce)return;const e=t=>{if(!(t.target instanceof HTMLInputElement||t.target instanceof HTMLTextAreaElement))switch(t.code){case"Space":t.preventDefault(),Te();break;case"ArrowRight":n.current&&(n.current.currentTime+=5);break;case"ArrowLeft":n.current&&(n.current.currentTime-=5);break;case"ArrowUp":t.preventDefault(),me(s=>Math.min(1,Math.round((s+.1)*10)/10));break;case"ArrowDown":t.preventDefault(),me(s=>Math.max(0,Math.round((s-.1)*10)/10));break;case"KeyM":fe(s=>!s);break}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Ce,Te]);const rt=()=>{Z!==null?(ge(null),_.current&&(clearInterval(_.current),_.current=null)):(ge(900),_.current=setInterval(()=>{ge(e=>e===null||e<=1?(xe(),_.current&&clearInterval(_.current),null):e-1)},1e3))};a.useEffect(()=>()=>{_.current&&clearInterval(_.current)},[]);const te=a.useCallback((e=1)=>{if(!c.length)return 0;if(pe&&e===1){let s=Math.floor(Math.random()*c.length);return s===h&&c.length>1&&(s=(s+1)%c.length),s}let t=h+e;return t>=c.length?t=m>=1?0:-1:t<0&&(t=m>=1?c.length-1:0),t},[h,c.length,m,pe]),re=a.useCallback((e=1)=>{n.current&&!P.current&&(n.current.pause(),n.current.currentTime=0);const t=te(e);if(t===-1){M(!1),n.current&&(n.current.currentTime=0);return}if(m===1&&e===1&&h===t){n.current&&(n.current.currentTime=0,z());return}je(t),M(!0)},[te,m,h,z]),Pe=a.useCallback(e=>{!n.current||!f.current||!l.current||!p.current||!he.current||(P.current=!0,f.current.src=c[e].src,f.current.currentTime=0,f.current.play().then(()=>{const t=p.current,s=he.current;I(t,t.gain.value,0,A),I(s,0,d,A),setTimeout(()=>{n.current&&n.current.pause(),je(e),P.current=!1},A)}).catch(t=>{console.warn("Crossfade prevented",t),P.current=!1}))},[c,d,A,I]),at=a.useCallback(()=>{if(!n.current||P.current)return;const e=n.current.currentTime,t=n.current.duration||0;if(Se(e),A>0&&t>0&&t-e<=A/1e3&&u){const s=te(1);s!==-1&&s!==h&&Pe(s)}},[A,u,h,te,Pe]),nt=a.useCallback(()=>{P.current||re(1)},[re]),st=e=>{const t=parseFloat(e.target.value);n.current&&(n.current.currentTime=t,Se(t))},ot=e=>{const t=parseFloat(e.target.value);me(t),t>0&&fe(!1)},Ee=e=>{const t=Math.floor(e/60)||0,s=Math.floor(e%60)||0;return`${t}:${s.toString().padStart(2,"0")}`};return r.jsxs("figure",{className:B("wim-audio-container",Le),style:Fe,children:[r.jsxs("div",{ref:Ge,className:B("wim-audio-inner",Q!=="none"&&`wim-audio--radius-${Q}`,b&&ze&&"wim-audio--shadow",b&&De&&"wim-audio--border",b&&"wim-audio--custom",q&&b&&"wim-audio--has-visualizer",L&&"wim-audio--fade-in",L&&He&&"wim-audio--is-loaded",Qe&&"wim-audio--loading"),children:[q&&b&&r.jsx("canvas",{ref:R,className:"wim-audio-visualizer-canvas"}),b&&oe&&(Re||Ie||ye)&&r.jsxs("div",{className:"wim-audio-metadata",style:{position:"relative",zIndex:2},children:[ye&&r.jsx("img",{src:ye,alt:"Cover",className:"wim-audio-cover"}),r.jsxs("div",{className:"wim-audio-info",children:[r.jsx("div",{className:"wim-audio-title",children:Re||"Unknown Title"}),r.jsx("div",{className:"wim-audio-artist",children:Ie||"Unknown Artist"})]})]}),r.jsxs("div",{style:{display:b?"none":"block",width:"100%"},children:[Je&&r.jsx("audio",{ref:n,src:v?.src,className:"wim-audio",loop:m===1&&c.length===1,muted:T,controls:!b&&se,preload:Be,crossOrigin:"anonymous",onTimeUpdate:at,onEnded:nt,...X,onLoadedMetadata:e=>{Xe(e.currentTarget.duration),le(),X.onLoadedMetadata?.(e)},onLoadedData:e=>{le(),X.onLoadedData?.(e)},onCanPlay:e=>{le(),X.onCanPlay?.(e)}}),r.jsx("audio",{ref:f,muted:T,preload:"auto",crossOrigin:"anonymous"})]}),b&&r.jsxs("div",{className:"wim-audio-custom-controls",children:[r.jsxs("div",{className:"wim-audio-time",children:[r.jsx("span",{className:"wim-audio-time__current",children:Ee(ce)}),r.jsxs("div",{className:"wim-audio-progress-container",children:[r.jsx("input",{type:"range",min:"0",max:de||0,value:ce,step:"0.1",onChange:st,className:"wim-audio-progress","aria-label":x("a11y_seek")}),r.jsx("div",{className:"wim-audio-progress-fill",style:{width:`${ce/(de||1)*100}%`}})]}),r.jsx("span",{className:"wim-audio-time__total",children:Ee(de)})]}),r.jsxs("div",{className:"wim-audio-controls-row",children:[r.jsxs("div",{className:"wim-audio-controls-group",children:[r.jsxs("button",{type:"button",className:B("wim-audio-btn",m>0&&"active"),onClick:()=>Ye(e=>(e+1)%3),title:`Repeat ${m===0?"Off":m===1?"One":"All"}`,children:[r.jsx(k,{name:"RepeatIcon",size:"small"}),m===1&&r.jsx("span",{className:"wim-audio-badge",children:"1"})]}),r.jsx("button",{type:"button",className:B("wim-audio-btn",pe&&"active"),onClick:()=>Ze(e=>!e),title:"Shuffle",children:r.jsx(k,{name:"ShuffleIcon",size:"small"})}),Ue&&r.jsxs("button",{type:"button",className:"wim-audio-btn wim-audio-btn--text",onClick:()=>{const e=[.5,1,1.5,2],t=e[(e.indexOf(Y)+1)%e.length];et(t)},title:"Playback Speed",children:[Y,"x"]})]}),r.jsxs("div",{className:"wim-audio-controls-group",children:[We&&r.jsx("button",{type:"button",className:B("wim-audio-btn",F&&"active"),onClick:()=>tt(!F),title:"Bass Boost",children:r.jsx(k,{name:"ChartIcon",size:"small"})}),Oe&&r.jsxs("button",{type:"button",className:B("wim-audio-btn",Z!==null&&"active"),onClick:rt,title:"Sleep Timer (15m)",children:[r.jsx(k,{name:"ClockIcon",size:"small"}),Z!==null&&r.jsx("span",{className:"wim-audio-badge",style:{fontSize:"7px"},children:Math.ceil(Z/60)})]}),r.jsxs("div",{className:"wim-audio-volume-container",children:[r.jsx("button",{type:"button",className:"wim-audio-btn wim-audio-btn--volume",onClick:()=>fe(e=>!e),"aria-label":x(T?"a11y_unmute":"a11y_mute"),children:r.jsx(k,{name:T||d===0?"MuteIcon":"VolumeIcon",size:"small"})}),r.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:T?0:d,onChange:ot,className:"wim-audio-volume","aria-label":x("a11y_volume")})]})]})]}),r.jsx("div",{className:"wim-audio-controls-row",style:{justifyContent:"center",marginTop:"0.2rem"},children:r.jsxs("div",{className:"wim-audio-controls-group",children:[r.jsx("button",{type:"button",className:"wim-audio-btn",onClick:()=>re(-1),title:"Previous",children:r.jsx(k,{name:"ChevronLeftIcon",size:"small"})}),r.jsx("button",{type:"button",className:"wim-audio-btn wim-audio-btn--play",onClick:Te,title:x(u?"a11y_pause":"a11y_play"),"aria-label":x(u?"a11y_pause":"a11y_play"),children:r.jsx(k,{name:u?"PauseIcon":"PlayIcon",size:"small"})}),r.jsx("button",{type:"button",className:"wim-audio-btn",onClick:()=>re(1),title:"Next",children:r.jsx(k,{name:"ChevronRightIcon",size:"small"})})]})})]})]}),ke&&r.jsx("figcaption",{className:"wim-audio__caption",children:ke})]})};ae.__docgenInfo={description:"",methods:[],displayName:"Audio",props:{src:{required:!1,tsType:{name:"union",raw:"string | string[] | AudioTrack | AudioTrack[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"signature",type:"object",raw:`{\r
  src: string;\r
  title?: string;\r
  artist?: string;\r
  coverArt?: string;\r
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!1}},{key:"artist",value:{name:"string",required:!1}},{key:"coverArt",value:{name:"string",required:!1}}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  src: string;\r
  title?: string;\r
  artist?: string;\r
  coverArt?: string;\r
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!1}},{key:"artist",value:{name:"string",required:!1}},{key:"coverArt",value:{name:"string",required:!1}}]}}],raw:"AudioTrack[]"}]},description:""},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},muted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},controls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},preload:{required:!1,tsType:{name:"union",raw:'"auto" | "metadata" | "none"',elements:[{name:"literal",value:'"auto"'},{name:"literal",value:'"metadata"'},{name:"literal",value:'"none"'}]},description:""},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},caption:{required:!1,tsType:{name:"string"},description:""},customControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualizer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showMetadata:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fadeIn:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"",defaultValue:{value:"false",computed:!1}},fadeOut:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"",defaultValue:{value:"false",computed:!1}},crossfade:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"",defaultValue:{value:"false",computed:!1}},playbackRate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hotkeys:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},presets:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sleepTimer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"union",raw:'"eager" | "lazy"',elements:[{name:"literal",value:'"eager"'},{name:"literal",value:'"lazy"'}]},description:'読み込み設定。"lazy" の場合に Intersection Observer が有効化されます',defaultValue:{value:'"lazy"',computed:!1}},demoDelay:{required:!1,tsType:{name:"number"},description:"デモ用：読み込み完了を意図的に遅らせるミリ秒"}}};const C=""+new URL("audiosample-CblkpeR1.mp3",import.meta.url).href,ft={title:"Components/Media/Audio",component:ae,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]}}},W={args:{src:C,controls:!0,radius:"none"}},O={render:function(N){const{t:S}=_e(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(ae,{...N,caption:S("story_audio_caption")})},args:{src:C,controls:!0,radius:"none"}},K={args:{src:C,controls:!0,autoPlay:!0,muted:!0}},$={args:{src:C,customControls:!0,controls:!1,radius:"full",shadow:!0,border:!0}},G={name:"Custom Design",args:{src:{src:C,title:"Custom Player",artist:"Wim UI"},customControls:!0,showMetadata:!0,radius:"medium",shadow:!0,border:!0}},H={args:{src:[{src:C,title:"Sample Web Audio API",artist:"Wim UI"},{src:C,title:"Track 2",artist:"Wim UI"}],customControls:!0,radius:"medium",shadow:!0,border:!0,visualizer:!0,showMetadata:!0,fadeIn:1500,fadeOut:1500,crossfade:2e3,playbackRate:!0,hotkeys:!0,presets:!0,sleepTimer:!0}},J={render:function(N){const{t:S}=_e(["docs","common","components"]),[ne,se]=lt.useState(0);return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:r.jsxs("div",{children:[r.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:S("story_audio_premium_features_lazy_load")}),r.jsx("div",{style:{marginBottom:"1rem"},children:r.jsx(mt,{priority:"primary",onClick:()=>se(Q=>Q+1),label:S("story_audio_premium_features_reload"),icon:"RefreshIcon"})}),a.createElement(ae,{...N,key:ne,src:C,customControls:!0,showMetadata:!0,demoDelay:2e3,radius:"medium",shadow:!0,caption:S("story_audio_premium_features_caption")})]})})}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    radius: "none"
  }
}`,...W.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Audio {...args} caption={t("story_audio_caption")} />;
  },
  args: {
    src: audioSample,
    controls: true,
    radius: "none"
  }
}`,...O.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    autoPlay: true,
    muted: true
  }
}`,...K.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    customControls: true,
    controls: false,
    radius: "full",
    shadow: true,
    border: true
  }
}`,...$.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Custom Design",
  args: {
    src: {
      src: audioSample,
      title: "Custom Player",
      artist: "Wim UI"
    },
    customControls: true,
    showMetadata: true,
    radius: "medium",
    shadow: true,
    border: true
  }
}`,...G.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    src: [{
      src: audioSample,
      title: "Sample Web Audio API",
      artist: "Wim UI"
    }, {
      src: audioSample,
      title: "Track 2",
      artist: "Wim UI"
    }],
    customControls: true,
    radius: "medium",
    shadow: true,
    border: true,
    visualizer: true,
    showMetadata: true,
    fadeIn: 1500,
    fadeOut: 1500,
    crossfade: 2000,
    playbackRate: true,
    hotkeys: true,
    presets: true,
    sleepTimer: true
  }
}`,...H.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [audioKey, setAudioKey] = React.useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem"
    }}>\r
        <div>\r
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story_audio_premium_features_lazy_load")}</p>\r
          <div style={{
          marginBottom: "1rem"
        }}>\r
            <Button priority="primary" onClick={() => setAudioKey(prev => prev + 1)} label={t("story_audio_premium_features_reload")} icon="RefreshIcon" />\r
          </div>\r
          <Audio {...args} key={audioKey} src={audioSample} customControls showMetadata demoDelay={2000} radius="medium" shadow caption={t("story_audio_premium_features_caption")} />\r
        </div>\r
      </div>;
  }
}`,...J.parameters?.docs?.source}}};const pt=["Default","WithCaption","AutoPlay","Rounded","CustomControls","FullFeatured","PremiumFeatures"],_t=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:K,CustomControls:G,Default:W,FullFeatured:H,PremiumFeatures:J,Rounded:$,WithCaption:O,__namedExportsOrder:pt,default:ft},Symbol.toStringTag,{value:"Module"}));export{_t as A,G as C,W as D,$ as R};
