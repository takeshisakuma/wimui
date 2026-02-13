import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h,R as n}from"./iframe-BpxzmZ_b.js";import{c as N}from"./index-CdxShSER.js";import{I as V}from"./Icon-HQ9_rTer.js";const _=({src:P,autoPlay:y=!1,loop:q=!1,muted:b=!1,controls:M=!0,radius:x="full",shadow:R=!1,border:I=!1,preload:A,caption:S,className:D,style:E,customControls:t=!1,...k})=>{const a=h.useRef(null),[p,f]=n.useState(!1),[v,j]=n.useState(0),[w,z]=n.useState(0),[g,U]=n.useState(1),[o,T]=n.useState(b);h.useEffect(()=>{y&&a.current&&a.current.play().catch(s=>{console.warn("Autoplay was prevented:",s)})},[y]),h.useEffect(()=>{a.current&&(a.current.volume=g,a.current.muted=o)},[g,o]);const $=()=>{a.current&&(p?a.current.pause():a.current.play(),f(!p))},L=()=>{a.current&&j(a.current.currentTime)},O=()=>{a.current&&z(a.current.duration)},F=s=>{const r=parseFloat(s.target.value);a.current&&(a.current.currentTime=r,j(r))},W=s=>{const r=parseFloat(s.target.value);U(r),r>0&&T(!1)},B=()=>{T(!o)},C=s=>{const r=Math.floor(s/60),G=Math.floor(s%60);return`${r}:${G.toString().padStart(2,"0")}`};return e.jsxs("figure",{className:N("wim-audio-container",D),style:E,children:[e.jsxs("div",{className:N("wim-audio-inner",t&&x!=="none"&&`wim-audio--radius-${x}`,t&&R&&"wim-audio--shadow",t&&I&&"wim-audio--border",t&&"wim-audio--custom"),children:[e.jsx("audio",{ref:a,src:P,className:"wim-audio",autoPlay:y,loop:q,muted:b,controls:t?!1:M,preload:A,onTimeUpdate:L,onLoadedMetadata:O,onEnded:()=>f(!1),onPlay:()=>f(!0),onPause:()=>f(!1),...k}),t&&e.jsxs("div",{className:"wim-audio-custom-controls",children:[e.jsx("button",{type:"button",className:"wim-audio-btn wim-audio-btn--play",onClick:$,"aria-label":p?"Pause":"Play",children:e.jsx(V,{name:p?"PauseIcon":"PlayIcon",size:"small"})}),e.jsxs("div",{className:"wim-audio-time",children:[e.jsx("span",{className:"wim-audio-time__current",children:C(v)}),e.jsxs("div",{className:"wim-audio-progress-container",children:[e.jsx("input",{type:"range",min:"0",max:w||0,value:v,onChange:F,className:"wim-audio-progress","aria-label":"Seek"}),e.jsx("div",{className:"wim-audio-progress-fill",style:{width:`${v/(w||1)*100}%`}})]}),e.jsx("span",{className:"wim-audio-time__total",children:C(w)})]}),e.jsxs("div",{className:"wim-audio-volume-container",children:[e.jsx("button",{type:"button",className:"wim-audio-btn wim-audio-btn--volume",onClick:B,"aria-label":o?"Unmute":"Mute",children:e.jsx(V,{name:o||g===0?"MuteIcon":"VolumeIcon",size:"small"})}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:o?0:g,onChange:W,className:"wim-audio-volume","aria-label":"Volume"})]})]})]}),S&&e.jsx("figcaption",{className:"wim-audio__caption",children:S})]})};_.__docgenInfo={description:"",methods:[],displayName:"Audio",props:{src:{required:!0,tsType:{name:"string"},description:""},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},muted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},controls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"full"',computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preload:{required:!1,tsType:{name:"union",raw:'"auto" | "metadata" | "none"',elements:[{name:"literal",value:'"auto"'},{name:"literal",value:'"metadata"'},{name:"literal",value:'"none"'}]},description:""},caption:{required:!1,tsType:{name:"string"},description:""},customControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const m=""+new URL("audiosample-CblkpeR1.mp3",import.meta.url).href,H={title:"Component/Media & Viz/Audio",component:_,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]}}},l={args:{src:m,controls:!0,radius:"none"}},u={args:{src:m,controls:!0,radius:"none",caption:"オーディオサンプルのキャプション"}},i={args:{src:m,customControls:!0,controls:!1,radius:"full",shadow:!0,border:!0}},c={args:{src:m,controls:!0,autoPlay:!0,muted:!0}},d={name:"Custom Design",args:{src:m,customControls:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    radius: "none"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    radius: "none",
    caption: "オーディオサンプルのキャプション"
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    customControls: true,
    controls: false,
    radius: "full",
    shadow: true,
    border: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const J=["Default","WithCaption","Rounded","AutoPlay","CustomControls"],Z=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:c,CustomControls:d,Default:l,Rounded:i,WithCaption:u,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{Z as A,d as C,l as D,i as R};
