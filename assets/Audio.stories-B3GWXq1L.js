import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h,R as l}from"./iframe-B3-mQT4Z.js";import{P as o}from"./index-DGne___x.js";import{I as V}from"./Icon-NlU0jZY1.js";const x=({src:_,autoPlay:v=!1,loop:q=!1,muted:S=!1,controls:M=!0,radius:j="full",shadow:R=!1,border:I=!1,preload:A,caption:T,className:D,style:E,customControls:r=!1,...k})=>{const a=h.useRef(null),[f,g]=l.useState(!1),[b,C]=l.useState(0),[w,O]=l.useState(0),[y,$]=l.useState(1),[n,N]=l.useState(S);h.useEffect(()=>{v&&a.current&&a.current.play().catch(s=>{console.warn("Autoplay was prevented:",s)})},[v]),h.useEffect(()=>{a.current&&(a.current.volume=y,a.current.muted=n)},[y,n]);const z=()=>{a.current&&(f?a.current.pause():a.current.play(),g(!f))},U=()=>{a.current&&C(a.current.currentTime)},L=()=>{a.current&&O(a.current.duration)},F=s=>{const t=parseFloat(s.target.value);a.current&&(a.current.currentTime=t,C(t))},W=s=>{const t=parseFloat(s.target.value);$(t),t>0&&N(!1)},B=()=>{N(!n)},P=s=>{const t=Math.floor(s/60),H=Math.floor(s%60);return`${t}:${H.toString().padStart(2,"0")}`},G=["wim-audio-inner",r&&j!=="none"&&`wim-audio--radius-${j}`,r&&R&&"wim-audio--shadow",r&&I&&"wim-audio--border",r&&"wim-audio--custom"].filter(Boolean).join(" ");return e.jsxs("figure",{className:`wim-audio-container ${D||""}`,style:E,children:[e.jsxs("div",{className:G,children:[e.jsx("audio",{ref:a,src:_,className:"wim-audio",autoPlay:v,loop:q,muted:S,controls:r?!1:M,preload:A,onTimeUpdate:U,onLoadedMetadata:L,onEnded:()=>g(!1),onPlay:()=>g(!0),onPause:()=>g(!1),...k}),r&&e.jsxs("div",{className:"wim-audio-custom-controls",children:[e.jsx("button",{type:"button",className:"wim-audio-btn wim-audio-btn--play",onClick:z,"aria-label":f?"Pause":"Play",children:e.jsx(V,{name:f?"PauseIcon":"PlayIcon",size:"small"})}),e.jsxs("div",{className:"wim-audio-time",children:[e.jsx("span",{className:"wim-audio-time__current",children:P(b)}),e.jsxs("div",{className:"wim-audio-progress-container",children:[e.jsx("input",{type:"range",min:"0",max:w||0,value:b,onChange:F,className:"wim-audio-progress","aria-label":"Seek"}),e.jsx("div",{className:"wim-audio-progress-fill",style:{width:`${b/(w||1)*100}%`}})]}),e.jsx("span",{className:"wim-audio-time__total",children:P(w)})]}),e.jsxs("div",{className:"wim-audio-volume-container",children:[e.jsx("button",{type:"button",className:"wim-audio-btn wim-audio-btn--volume",onClick:B,"aria-label":n?"Unmute":"Mute",children:e.jsx(V,{name:n||y===0?"MuteIcon":"VolumeIcon",size:"small"})}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:n?0:y,onChange:W,className:"wim-audio-volume","aria-label":"Volume"})]})]})]}),T&&e.jsx("figcaption",{className:"wim-audio__caption",children:T})]})};x.propTypes={src:o.string.isRequired,autoPlay:o.bool,loop:o.bool,muted:o.bool,controls:o.bool,radius:o.oneOf(["none","small","medium","large","full"]),shadow:o.bool,border:o.bool,preload:o.oneOf(["auto","metadata","none"]),caption:o.string,customControls:o.bool};x.__docgenInfo={description:"",methods:[],displayName:"Audio",props:{src:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},muted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},controls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"full"',computed:!1},type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"full"',computed:!1}]}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},preload:{required:!1,tsType:{name:"union",raw:'"auto" | "metadata" | "none"',elements:[{name:"literal",value:'"auto"'},{name:"literal",value:'"metadata"'},{name:"literal",value:'"none"'}]},description:"",type:{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"metadata"',computed:!1},{value:'"none"',computed:!1}]}},caption:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},customControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const p=""+new URL("audiosample-CblkpeR1.mp3",import.meta.url).href,J={title:"Component/Media & Viz/Audio",component:x,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]}}},u={args:{src:p,controls:!0,radius:"none"}},i={args:{src:p,controls:!0,radius:"none",caption:"オーディオサンプルのキャプション"}},m={args:{src:p,customControls:!0,controls:!1,radius:"full",shadow:!0,border:!0}},c={args:{src:p,controls:!0,autoPlay:!0,muted:!0}},d={name:"Custom Design",args:{src:p,customControls:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    radius: "none"
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    radius: "none",
    caption: "オーディオサンプルのキャプション"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    customControls: true,
    controls: false,
    radius: "full",
    shadow: true,
    border: true
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    autoPlay: true,
    muted: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Custom Design",
  args: {
    src: audioSample,
    customControls: true
  }
}`,...d.parameters?.docs?.source}}};const K=["Default","WithCaption","Rounded","AutoPlay","CustomControls"],ee=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:c,CustomControls:d,Default:u,Rounded:m,WithCaption:i,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{ee as A,d as C,u as D,m as R};
