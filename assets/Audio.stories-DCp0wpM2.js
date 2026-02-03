import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-D8SaYk7p.js";import{P as e}from"./index-bAe9LTCE.js";const i=({src:p,autoPlay:n=!1,loop:f=!1,muted:y=!1,controls:g=!0,radius:d="full",shadow:v=!1,border:b=!1,preload:w,caption:m,className:T,style:h,...S})=>{const u=c.useRef(null);c.useEffect(()=>{n&&u.current&&u.current.play().catch(_=>{console.warn("Autoplay was prevented:",_)})},[n]);const q=["wim-audio-inner",d!=="none"&&`wim-audio--radius-${d}`,v&&"wim-audio--shadow",b&&"wim-audio--border"].filter(Boolean).join(" ");return s.jsxs("figure",{className:`wim-audio-container ${T||""}`,style:h,children:[s.jsx("div",{className:q,children:s.jsx("audio",{ref:u,src:p,className:"wim-audio",autoPlay:n,loop:f,muted:y,controls:g,preload:w,...S})}),m&&s.jsx("figcaption",{className:"wim-audio__caption",children:m})]})};i.propTypes={src:e.string.isRequired,autoPlay:e.bool,loop:e.bool,muted:e.bool,controls:e.bool,radius:e.oneOf(["none","small","medium","large","full"]),shadow:e.bool,border:e.bool,preload:e.oneOf(["auto","metadata","none"]),caption:e.string};i.__docgenInfo={description:"",methods:[],displayName:"Audio",props:{src:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},muted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},controls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"full"',computed:!1},type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"full"',computed:!1}]}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},preload:{required:!1,tsType:{name:"union",raw:'"auto" | "metadata" | "none"',elements:[{name:"literal",value:'"auto"'},{name:"literal",value:'"metadata"'},{name:"literal",value:'"none"'}]},description:"",type:{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"metadata"',computed:!1},{value:'"none"',computed:!1}]}},caption:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const t=""+new URL("audiosample-CblkpeR1.mp3",import.meta.url).href,j={title:"Component/Media/Audio",component:i,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]}}},a={args:{src:t,controls:!0,radius:"none"}},o={args:{src:t,controls:!0,radius:"none",caption:"オーディオサンプルのキャプション"}},r={args:{src:t,controls:!0,radius:"full",shadow:!0,border:!0}},l={args:{src:t,controls:!0,autoPlay:!0,muted:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    radius: "none"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    radius: "none",
    caption: "オーディオサンプルのキャプション"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    radius: "full",
    shadow: true,
    border: true
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    autoPlay: true,
    muted: true
  }
}`,...l.parameters?.docs?.source}}};const x=["Default","WithCaption","Rounded","AutoPlay"],V=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:l,Default:a,Rounded:r,WithCaption:o,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{V as A,a as D,r as R,o as W};
