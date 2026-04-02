const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jsmediatags-Ddtr_Giu.js","./iframe-DKmwcFSw.js","./preload-helper-PPVm8Dsz.js","./iframe-C7_g8T9d.css"])))=>i.map(i=>d[i]);
import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r,R as Ie,A as Re}from"./iframe-DKmwcFSw.js";import{c as ae}from"./index-DF_nXgT0.js";import{u as _e}from"./useMediaLoader-C1mjzo9g.js";import{_ as Ne}from"./preload-helper-PPVm8Dsz.js";import{I as $}from"./Icon-BlFN6n3q.js";import{B as Pe}from"./Button-BKQogAGJ.js";import{u as qe}from"./useTranslation-cHJIwR7k.js";function Ee({playlist:i,loop:p,muted:f,fadeIn:h,fadeOut:w,crossfade:d,visualizer:M,hotkeys:j,autoPlay:F}){const[o,T]=r.useState(!1),[R,g]=r.useState(0),[I,k]=r.useState(0),[c,_]=r.useState(1),[q,V]=r.useState(f),[S,ne]=r.useState(p?1:0),[O,se]=r.useState(!1),[y,Q]=r.useState(0),[N,ie]=r.useState(1),[U,X]=r.useState(!1),[Y,W]=r.useState(null),ue=i[y]||null,s=r.useRef(null),v=r.useRef(null),n=r.useRef(null),H=r.useRef(null),m=r.useRef(null),b=r.useRef(null),B=r.useRef(null),Z=r.useRef(null),A=r.useRef(null),l=r.useRef(null),P=r.useRef(!1),oe=typeof h=="number"?h:h?1e3:0,te=typeof w=="number"?w:w?1e3:0,E=typeof d=="number"?d:d?3e3:0,L=r.useCallback(()=>{if(n.current)return;const a=window.AudioContext||window.webkitAudioContext;if(!a)return;const t=new a;if(n.current=t,!s.current||!v.current)return;const u=t.createMediaElementSource(s.current),D=t.createGain(),K=t.createMediaElementSource(v.current),re=t.createGain(),z=t.createBiquadFilter();z.type="lowshelf",z.frequency.value=200,z.gain.value=U?10:0,H.current=z,u.connect(z),z.connect(D),K.connect(re);const G=t.createAnalyser();G.fftSize=256,Z.current=G,D.connect(G),re.connect(G),G.connect(t.destination),b.current=D,B.current=re},[]);r.useEffect(()=>{H.current&&n.current&&H.current.gain.setTargetAtTime(U?10:0,n.current.currentTime||0,.1)},[U]),r.useEffect(()=>{s.current&&(s.current.playbackRate=N)},[N]);const C=r.useCallback((a,t,u,D)=>{if(!n.current)return;const K=n.current;a.gain.cancelScheduledValues(K.currentTime),a.gain.setValueAtTime(t,K.currentTime),a.gain.linearRampToValueAtTime(u,K.currentTime+D/1e3)},[]),x=r.useCallback(()=>{if(!s.current)return;L();const a=s.current.play();a!==void 0&&a.then(()=>{n.current&&b.current&&oe>0?C(b.current,0,c,oe):b.current&&(b.current.gain.value=c),T(!0)}).catch(t=>{T(!1)})},[oe,c,C,L]),ee=r.useCallback(()=>{s.current&&(n.current&&b.current&&te>0?(C(b.current,b.current.gain.value,0,te),setTimeout(()=>{s.current?.pause(),T(!1)},te)):(s.current.pause(),T(!1)))},[te,C]),ke=r.useCallback(()=>{if(!M||!A.current||!Z.current)return;const a=A.current,t=a.getContext("2d");if(!t)return;const u=Z.current,D=u.frequencyBinCount,K=new Uint8Array(D),re=()=>{l.current=requestAnimationFrame(re),u.getByteFrequencyData(K),t.clearRect(0,0,a.width,a.height);const z=a.width/D*2.5;let G=0;for(let we=0;we<D;we++){const Te=K[we];t.fillStyle=`rgb(${Te+100}, 100, 255)`,t.fillRect(G,a.height-Te/2,z,Te/2),G+=z+1}};re()},[M]);r.useEffect(()=>{if(o&&M)L(),ke(),n.current&&n.current.state==="suspended"&&n.current.resume();else if(l.current&&(cancelAnimationFrame(l.current),l.current=null),!o&&A.current){const a=A.current.getContext("2d");a&&a.clearRect(0,0,A.current.width,A.current.height)}return()=>{l.current&&cancelAnimationFrame(l.current)}},[o,M,ke,L]);const xe=r.useCallback(()=>{s.current&&(s.current.volume=c,s.current.muted=q),v.current&&(v.current.volume=c,v.current.muted=q)},[c,q]);r.useEffect(()=>{xe()},[xe]);const be=r.useCallback(()=>{L(),o?ee():x()},[o,ee,x,L]);r.useEffect(()=>{if(!j)return;const a=t=>{if(!(t.target instanceof HTMLInputElement||t.target instanceof HTMLTextAreaElement))switch(t.code){case"Space":t.preventDefault(),be();break;case"ArrowRight":s.current&&(s.current.currentTime+=5);break;case"ArrowLeft":s.current&&(s.current.currentTime-=5);break;case"ArrowUp":t.preventDefault(),_(u=>Math.min(1,Math.round((u+.1)*10)/10));break;case"ArrowDown":t.preventDefault(),_(u=>Math.max(0,Math.round((u-.1)*10)/10));break;case"KeyM":V(u=>!u);break}};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[j,be]);const Ce=()=>{Y!==null?(W(null),m.current&&(clearInterval(m.current),m.current=null)):(W(900),m.current=setInterval(()=>{W(a=>a===null||a<=1?(ee(),m.current&&clearInterval(m.current),null):a-1)},1e3))};r.useEffect(()=>()=>{m.current&&clearInterval(m.current)},[]);const ye=r.useCallback((a=1)=>{if(!i.length)return 0;if(O&&a===1){let u=Math.floor(Math.random()*i.length);return u===y&&i.length>1&&(u=(u+1)%i.length),u}let t=y+a;return t>=i.length?t=S>=1?0:-1:t<0&&(t=S>=1?i.length-1:0),t},[y,i.length,S,O]),he=r.useCallback((a=1)=>{s.current&&!P.current&&(s.current.pause(),s.current.currentTime=0);const t=ye(a);if(t===-1){T(!1),s.current&&(s.current.currentTime=0);return}if(S===1&&a===1&&y===t){s.current&&(s.current.currentTime=0,x());return}Q(t),T(!0)},[ye,S,y,x]),Se=r.useCallback(a=>{!s.current||!v.current||!n.current||!b.current||!B.current||(P.current=!0,v.current.src=i[a].src,v.current.currentTime=0,v.current.play().then(()=>{const t=b.current,u=B.current;C(t,t.gain.value,0,E),C(u,0,c,E),setTimeout(()=>{s.current&&s.current.pause(),Q(a),P.current=!1},E)}).catch(t=>{P.current=!1}))},[i,c,E,C]),Me=r.useCallback(()=>{if(!s.current||P.current)return;const a=s.current.currentTime,t=s.current.duration||0;if(g(a),E>0&&t>0&&t-a<=E/1e3&&o){const u=ye(1);u!==-1&&u!==y&&Se(u)}},[E,o,y,ye,Se]),je=r.useCallback(()=>{P.current||he(1)},[he]);return{isPlaying:o,currentTime:R,duration:I,volume:c,isMuted:q,repeatMode:S,shuffleMode:O,currentTrackIndex:y,currentPlaybackRate:N,isBassBoost:U,remainingSleepTime:Y,currentTrack:ue,setVolume:_,setIsMuted:V,setRepeatMode:ne,setShuffleMode:se,setCurrentPlaybackRate:ie,setIsBassBoost:X,setDuration:k,activeAudioRef:s,nextAudioRef:v,canvasRef:A,togglePlay:be,handleSeek:a=>{const t=parseFloat(a.target.value);s.current&&(s.current.currentTime=t,g(t))},handleVolumeChange:a=>{const t=parseFloat(a.target.value);_(t),t>0&&V(!1)},handleTimeUpdate:Me,handleEnded:je,playNext:he,toggleSleepTimer:Ce,playActivePlayer:x,formatTime:a=>{const t=Math.floor(a/60)||0,u=Math.floor(a%60)||0;return`${t}:${u.toString().padStart(2,"0")}`}}}function Ve({currentTrack:i,showMetadata:p}){const[f,h]=r.useState(""),[w,d]=r.useState(""),[M,j]=r.useState("");return r.useEffect(()=>{if(!i)return;const F=i.title||"",o=i.artist||"",T=i.coverArt||"";p&&!F&&!o&&!T&&Ne(()=>import("./jsmediatags-Ddtr_Giu.js").then(R=>R.j),__vite__mapDeps([0,1,2,3]),import.meta.url).then(R=>{(R.default||R).read(i.src,{onSuccess:I=>{const k=I.tags;if(k.title&&h(k.title),k.artist&&d(k.artist),k.picture){const{data:c,format:_}=k.picture;let q="";c.forEach(S=>{q+=String.fromCharCode(S)});const V=btoa(q);j(`data:${_};base64,${V}`)}},onError:I=>{}})}).catch(R=>{}),h(F),d(o),j(T)},[i,p]),{metaTitle:f,metaArtist:w,metaCover:M}}function Ae({isPlaying:i,currentTime:p,duration:f,volume:h,isMuted:w,repeatMode:d,shuffleMode:M,currentPlaybackRate:j,isBassBoost:F,remainingSleepTime:o,playbackRate:T,presets:R,sleepTimer:g,setRepeatMode:I,setShuffleMode:k,setCurrentPlaybackRate:c,setIsBassBoost:_,setIsMuted:q,togglePlay:V,handleSeek:S,handleVolumeChange:ne,playNext:O,toggleSleepTimer:se,formatTime:y,labels:Q={}}){const{seek:N="Seek",mute:ie="Mute",unmute:U="Unmute",volume:X="Volume",play:Y="Play",pause:W="Pause",next:ue="Next",prev:s="Previous",repeatMode0:v="Repeat Off",repeatMode1:n="Repeat One",repeatMode2:H="Repeat All",shuffle:m="Shuffle",playbackSpeed:b="Playback Speed",bassBoost:B="Bass Boost",sleepTimer:Z="Sleep Timer (15m)"}=Q,A=d===0?v:d===1?n:H;return e.jsxs("div",{className:"wim-audio-custom-controls",children:[e.jsxs("div",{className:"wim-audio-time",children:[e.jsx("span",{className:"wim-audio-time__current",children:y(p)}),e.jsxs("div",{className:"wim-audio-progress-container",children:[e.jsx("input",{type:"range",min:"0",max:f||0,value:p,step:"0.1",onChange:S,className:"wim-audio-progress","aria-label":N}),e.jsx("div",{className:"wim-audio-progress-fill",style:{width:`${p/(f||1)*100}%`}})]}),e.jsx("span",{className:"wim-audio-time__total",children:y(f)})]}),e.jsxs("div",{className:"wim-audio-controls-row",children:[e.jsxs("div",{className:"wim-audio-controls-group",children:[e.jsxs("button",{type:"button",className:ae("wim-audio-btn",d>0&&"active"),onClick:()=>I(l=>(l+1)%3),title:A,children:[e.jsx($,{name:"RepeatIcon",size:"sm"}),d===1&&e.jsx("span",{className:"wim-audio-badge",children:"1"})]}),e.jsx("button",{type:"button",className:ae("wim-audio-btn",M&&"active"),onClick:()=>k(l=>!l),title:m,children:e.jsx($,{name:"ShuffleIcon",size:"sm"})}),T&&e.jsxs("button",{type:"button",className:"wim-audio-btn wim-audio-btn--text",onClick:()=>{const l=[.5,1,1.5,2],P=l[(l.indexOf(j)+1)%l.length];c(P)},title:b,children:[j,"x"]})]}),e.jsxs("div",{className:"wim-audio-controls-group",children:[R&&e.jsx("button",{type:"button",className:ae("wim-audio-btn",F&&"active"),onClick:()=>_(!F),title:B,children:e.jsx($,{name:"ChartIcon",size:"sm"})}),g&&e.jsxs("button",{type:"button",className:ae("wim-audio-btn",o!==null&&"active"),onClick:se,title:Z,children:[e.jsx($,{name:"ClockIcon",size:"sm"}),o!==null&&e.jsx("span",{className:"wim-audio-badge",style:{fontSize:"7px"},children:Math.ceil(o/60)})]}),e.jsxs("div",{className:"wim-audio-volume-container",children:[e.jsx("button",{type:"button",className:"wim-audio-btn wim-audio-btn--volume",onClick:()=>q(l=>!l),"aria-label":w?U:ie,children:e.jsx($,{name:w||h===0?"MuteIcon":"VolumeIcon",size:"sm"})}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:w?0:h,onChange:ne,className:"wim-audio-volume","aria-label":X})]})]})]}),e.jsx("div",{className:"wim-audio-controls-row",style:{justifyContent:"center",marginTop:"0.2rem"},children:e.jsxs("div",{className:"wim-audio-controls-group",children:[e.jsx("button",{type:"button",className:"wim-audio-btn",onClick:()=>O(-1),title:s,children:e.jsx($,{name:"ChevronLeftIcon",size:"sm"})}),e.jsx("button",{type:"button",className:"wim-audio-btn wim-audio-btn--play",onClick:V,title:i?W:Y,"aria-label":i?W:Y,children:e.jsx($,{name:i?"PauseIcon":"PlayIcon",size:"sm"})}),e.jsx("button",{type:"button",className:"wim-audio-btn",onClick:()=>O(1),title:ue,children:e.jsx($,{name:"ChevronRightIcon",size:"sm"})})]})})]})}Ae.__docgenInfo={description:"",methods:[],displayName:"AudioCustomControls",props:{isPlaying:{required:!0,tsType:{name:"boolean"},description:""},currentTime:{required:!0,tsType:{name:"number"},description:""},duration:{required:!0,tsType:{name:"number"},description:""},volume:{required:!0,tsType:{name:"number"},description:""},isMuted:{required:!0,tsType:{name:"boolean"},description:""},repeatMode:{required:!0,tsType:{name:"union",raw:"0 | 1 | 2",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:""},shuffleMode:{required:!0,tsType:{name:"boolean"},description:""},currentPlaybackRate:{required:!0,tsType:{name:"number"},description:""},isBassBoost:{required:!0,tsType:{name:"boolean"},description:""},remainingSleepTime:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},playbackRate:{required:!0,tsType:{name:"boolean"},description:""},presets:{required:!0,tsType:{name:"boolean"},description:""},sleepTimer:{required:!0,tsType:{name:"boolean"},description:""},setRepeatMode:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<0 | 1 | 2>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<0 | 1 | 2>",elements:[{name:"union",raw:"0 | 1 | 2",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"}]}]}]},description:""},setShuffleMode:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""},setCurrentPlaybackRate:{required:!0,tsType:{name:"signature",type:"function",raw:"(rate: number) => void",signature:{arguments:[{type:{name:"number"},name:"rate"}],return:{name:"void"}}},description:""},setIsBassBoost:{required:!0,tsType:{name:"signature",type:"function",raw:"(boost: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"boost"}],return:{name:"void"}}},description:""},setIsMuted:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""},togglePlay:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleSeek:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},handleVolumeChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},playNext:{required:!0,tsType:{name:"signature",type:"function",raw:"(dir: 1 | -1) => void",signature:{arguments:[{type:{name:"union",raw:"1 | -1",elements:[{name:"literal",value:"1"},{name:"literal",value:"-1"}]},name:"dir"}],return:{name:"void"}}},description:""},toggleSleepTimer:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},formatTime:{required:!0,tsType:{name:"signature",type:"function",raw:"(time: number) => string",signature:{arguments:[{type:{name:"number"},name:"time"}],return:{name:"string"}}},description:""},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  seek?: string;
  mute?: string;
  unmute?: string;
  volume?: string;
  play?: string;
  pause?: string;
  next?: string;
  prev?: string;
  repeatMode0?: string; // Off
  repeatMode1?: string; // One
  repeatMode2?: string; // All
  shuffle?: string;
  playbackSpeed?: string;
  bassBoost?: string;
  sleepTimer?: string;
  unknownTitle?: string;
  unknownArtist?: string;
}`,signature:{properties:[{key:"seek",value:{name:"string",required:!1}},{key:"mute",value:{name:"string",required:!1}},{key:"unmute",value:{name:"string",required:!1}},{key:"volume",value:{name:"string",required:!1}},{key:"play",value:{name:"string",required:!1}},{key:"pause",value:{name:"string",required:!1}},{key:"next",value:{name:"string",required:!1}},{key:"prev",value:{name:"string",required:!1}},{key:"repeatMode0",value:{name:"string",required:!1}},{key:"repeatMode1",value:{name:"string",required:!1}},{key:"repeatMode2",value:{name:"string",required:!1}},{key:"shuffle",value:{name:"string",required:!1}},{key:"playbackSpeed",value:{name:"string",required:!1}},{key:"bassBoost",value:{name:"string",required:!1}},{key:"sleepTimer",value:{name:"string",required:!1}},{key:"unknownTitle",value:{name:"string",required:!1}},{key:"unknownArtist",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}};const ve=({src:i,autoPlay:p=!1,loop:f=!1,muted:h=!1,controls:w=!0,radius:d="none",shadow:M=!1,border:j=!1,preload:F,caption:o,className:T,style:R,customControls:g=!1,visualizer:I=!1,showMetadata:k=!1,fadeIn:c=!1,fadeOut:_=!1,crossfade:q=!1,playbackRate:V=!1,hotkeys:S=!1,presets:ne=!1,sleepTimer:O=!1,loading:se="lazy",demoDelay:y,labels:Q={},...N})=>{const{unknownTitle:ie="Unknown Title",unknownArtist:U="Unknown Artist"}=Q,X=r.useMemo(()=>i?(Array.isArray(i)?i:[i]).map(ee=>typeof ee=="string"?{src:ee}:ee):[],[i]),{containerRef:Y,isLoaded:W,isIntersecting:ue,notifyLoaded:s,shouldShowSkeleton:v}=_e({loading:se,demoDelay:y,src:X[0]?.src}),n=Ee({playlist:X,loop:f,muted:h,fadeIn:c,fadeOut:_,crossfade:q,visualizer:I,hotkeys:S,autoPlay:p}),{isPlaying:H,currentTrack:m,currentTrackIndex:b,activeAudioRef:B,nextAudioRef:Z,canvasRef:A,handleTimeUpdate:l,handleEnded:P,setDuration:oe,playActivePlayer:te}=n,{metaTitle:E,metaArtist:L,metaCover:C}=Ve({currentTrack:m,showMetadata:k});return r.useEffect(()=>{!m||!B.current||(B.current.src=m.src,(p||H)&&te())},[b,m]),e.jsxs("figure",{className:ae("wim-audio-container",T),style:R,children:[e.jsxs("div",{ref:Y,className:ae("wim-audio-inner",d!=="none"&&`wim-audio--radius-${d}`,g&&M&&"wim-audio--shadow",g&&j&&"wim-audio--border",g&&"wim-audio--custom",I&&g&&"wim-audio--has-visualizer",c&&"wim-audio--fade-in",c&&W&&"wim-audio--is-loaded",v&&"wim-audio--loading"),children:[I&&g&&e.jsx("canvas",{ref:A,className:"wim-audio-visualizer-canvas"}),g&&k&&(E||L||C)&&e.jsxs("div",{className:"wim-audio-metadata",style:{position:"relative",zIndex:2},children:[C&&e.jsx("img",{src:C,alt:"Cover",className:"wim-audio-cover"}),e.jsxs("div",{className:"wim-audio-info",children:[e.jsx("div",{className:"wim-audio-title",children:E||ie}),e.jsx("div",{className:"wim-audio-artist",children:L||U})]})]}),e.jsxs("div",{style:{display:g?"none":"block",width:"100%"},children:[ue&&e.jsx("audio",{ref:B,src:m?.src,className:"wim-audio",loop:n.repeatMode===1&&X.length===1,muted:n.isMuted,controls:!g&&w,preload:F,crossOrigin:"anonymous",onTimeUpdate:l,onEnded:P,...N,onLoadedMetadata:x=>{oe(x.currentTarget.duration),s(),N.onLoadedMetadata?.(x)},onLoadedData:x=>{s(),N.onLoadedData?.(x)},onCanPlay:x=>{s(),N.onCanPlay?.(x)}}),e.jsx("audio",{ref:Z,muted:n.isMuted,preload:"auto",crossOrigin:"anonymous"})]}),g&&e.jsx(Ae,{isPlaying:H,currentTime:n.currentTime,duration:n.duration,volume:n.volume,isMuted:n.isMuted,repeatMode:n.repeatMode,shuffleMode:n.shuffleMode,currentPlaybackRate:n.currentPlaybackRate,isBassBoost:n.isBassBoost,remainingSleepTime:n.remainingSleepTime,playbackRate:V,presets:ne,sleepTimer:O,setRepeatMode:n.setRepeatMode,setShuffleMode:n.setShuffleMode,setCurrentPlaybackRate:n.setCurrentPlaybackRate,setIsBassBoost:n.setIsBassBoost,setIsMuted:n.setIsMuted,togglePlay:n.togglePlay,handleSeek:n.handleSeek,handleVolumeChange:n.handleVolumeChange,playNext:n.playNext,toggleSleepTimer:n.toggleSleepTimer,formatTime:n.formatTime,labels:Q})]}),o&&e.jsx("figcaption",{className:"wim-audio__caption",children:o})]})};ve.__docgenInfo={description:"",methods:[],displayName:"Audio",props:{src:{required:!1,tsType:{name:"union",raw:"string | string[] | AudioTrack | AudioTrack[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"signature",type:"object",raw:`{
  src: string;
  title?: string;
  artist?: string;
  coverArt?: string;
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!1}},{key:"artist",value:{name:"string",required:!1}},{key:"coverArt",value:{name:"string",required:!1}}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  src: string;
  title?: string;
  artist?: string;
  coverArt?: string;
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!1}},{key:"artist",value:{name:"string",required:!1}},{key:"coverArt",value:{name:"string",required:!1}}]}}],raw:"AudioTrack[]"}]},description:""},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},muted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},controls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},preload:{required:!1,tsType:{name:"union",raw:'"auto" | "metadata" | "none"',elements:[{name:"literal",value:'"auto"'},{name:"literal",value:'"metadata"'},{name:"literal",value:'"none"'}]},description:""},radius:{required:!1,tsType:{name:"union",raw:'WimRadiusKey | "none"',elements:[{name:"union",raw:'"sm" | "md" | "lg" | "full"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"full"'}]},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},customControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualizer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showMetadata:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fadeIn:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"",defaultValue:{value:"false",computed:!1}},fadeOut:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"",defaultValue:{value:"false",computed:!1}},crossfade:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"",defaultValue:{value:"false",computed:!1}},playbackRate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hotkeys:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},presets:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sleepTimer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"union",raw:'"eager" | "lazy"',elements:[{name:"literal",value:'"eager"'},{name:"literal",value:'"lazy"'}]},description:'読み込み設定。"lazy" の場合に Intersection Observer が有効化されます',defaultValue:{value:'"lazy"',computed:!1}},demoDelay:{required:!1,tsType:{name:"number"},description:"デモ用：読み込み完了を意図的に遅らせるミリ秒"},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  seek?: string;
  mute?: string;
  unmute?: string;
  volume?: string;
  play?: string;
  pause?: string;
  next?: string;
  prev?: string;
  repeatMode0?: string; // Off
  repeatMode1?: string; // One
  repeatMode2?: string; // All
  shuffle?: string;
  playbackSpeed?: string;
  bassBoost?: string;
  sleepTimer?: string;
  unknownTitle?: string;
  unknownArtist?: string;
}`,signature:{properties:[{key:"seek",value:{name:"string",required:!1}},{key:"mute",value:{name:"string",required:!1}},{key:"unmute",value:{name:"string",required:!1}},{key:"volume",value:{name:"string",required:!1}},{key:"play",value:{name:"string",required:!1}},{key:"pause",value:{name:"string",required:!1}},{key:"next",value:{name:"string",required:!1}},{key:"prev",value:{name:"string",required:!1}},{key:"repeatMode0",value:{name:"string",required:!1}},{key:"repeatMode1",value:{name:"string",required:!1}},{key:"repeatMode2",value:{name:"string",required:!1}},{key:"shuffle",value:{name:"string",required:!1}},{key:"playbackSpeed",value:{name:"string",required:!1}},{key:"bassBoost",value:{name:"string",required:!1}},{key:"sleepTimer",value:{name:"string",required:!1}},{key:"unknownTitle",value:{name:"string",required:!1}},{key:"unknownArtist",value:{name:"string",required:!1}}]}},description:"手動翻訳用のラベル",defaultValue:{value:"{}",computed:!1}}}};const J=""+new URL("audiosample-CblkpeR1.mp3",import.meta.url).href,Be={title:"Components/Media/Audio",component:ve,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","sm","md","lg","full"]}}},le={args:{src:J,controls:!0,radius:"none"}},ce={render:function(p){const{t:f}=qe(Re);return e.jsx(ve,{...p,caption:f("story.audio_caption")})},args:{src:J,controls:!0,radius:"none"}},de={args:{src:J,controls:!0,autoPlay:!0,muted:!0}},me={args:{src:J,customControls:!0,controls:!1,radius:"full",shadow:!0,border:!0}},pe={name:"Custom Design",args:{src:{src:J,title:"Custom Player",artist:"Wim UI"},customControls:!0,showMetadata:!0,radius:"md",shadow:!0,border:!0}},fe={args:{src:[{src:J,title:"Sample Web Audio API",artist:"Wim UI"},{src:J,title:"Track 2",artist:"Wim UI"}],customControls:!0,radius:"md",shadow:!0,border:!0,visualizer:!0,showMetadata:!0,fadeIn:1500,fadeOut:1500,crossfade:2e3,playbackRate:!0,hotkeys:!0,presets:!0,sleepTimer:!0}},ge={render:function(p){const{t:f}=qe(Re),[h,w]=Ie.useState(0);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",fontWeight:"bold"},children:f("story.audio_premium_features_lazy_load")}),e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx(Pe,{variant:"filled",onClick:()=>w(d=>d+1),icon:"RefreshIcon",children:f("story.audio_premium_features_reload")})}),r.createElement(ve,{...p,key:h,src:J,customControls:!0,showMetadata:!0,demoDelay:2e3,radius:"md",shadow:!0,caption:f("story.audio_premium_features_caption")})]})})}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    radius: "none"
  }
}`,...le.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Audio {...args} caption={t("story.audio_caption")} />;
  },
  args: {
    src: audioSample,
    controls: true,
    radius: "none"
  }
}`,...ce.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    autoPlay: true,
    muted: true
  }
}`,...de.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    customControls: true,
    controls: false,
    radius: "full",
    shadow: true,
    border: true
  }
}`,...me.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  name: "Custom Design",
  args: {
    src: {
      src: audioSample,
      title: "Custom Player",
      artist: "Wim UI"
    },
    customControls: true,
    showMetadata: true,
    radius: "md",
    shadow: true,
    border: true
  }
}`,...pe.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
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
    radius: "md",
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
}`,...fe.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [audioKey, setAudioKey] = React.useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem"
    }}>
        <div>
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story.audio_premium_features_lazy_load")}</p>
          <div style={{
          marginBottom: "1rem"
        }}>
            <Button variant="filled" onClick={() => setAudioKey(prev => prev + 1)} icon="RefreshIcon">{t("story.audio_premium_features_reload")}</Button>
          </div>
          <Audio {...args} key={audioKey} src={audioSample} customControls showMetadata demoDelay={2000} radius="md" shadow caption={t("story.audio_premium_features_caption")} />
        </div>
      </div>;
  }
}`,...ge.parameters?.docs?.source}}};const Le=["Default","WithCaption","AutoPlay","Rounded","CustomControls","FullFeatured","PremiumFeatures"],Qe=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:de,CustomControls:pe,Default:le,FullFeatured:fe,PremiumFeatures:ge,Rounded:me,WithCaption:ce,__namedExportsOrder:Le,default:Be},Symbol.toStringTag,{value:"Module"}));export{Qe as A,pe as C,le as D,fe as F,ge as P,me as R,de as a};
