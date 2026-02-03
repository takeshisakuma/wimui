import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-DtjAbtKF.js";import{P as e}from"./index-CraEdGmZ.js";const i=({src:p,autoPlay:n=!1,loop:f=!1,muted:y=!1,controls:g=!0,radius:d="full",shadow:b=!1,border:v=!1,caption:m,className:w,style:h,...T})=>{const u=c.useRef(null);c.useEffect(()=>{n&&u.current&&u.current.play().catch(q=>{console.warn("Autoplay was prevented:",q)})},[n]);const S=["wim-audio-inner",d!=="none"&&`wim-audio--radius-${d}`,b&&"wim-audio--shadow",v&&"wim-audio--border"].filter(Boolean).join(" ");return l.jsxs("figure",{className:`wim-audio-container ${w||""}`,style:h,children:[l.jsx("div",{className:S,children:l.jsx("audio",{ref:u,src:p,className:"wim-audio",autoPlay:n,loop:f,muted:y,controls:g,...T})}),m&&l.jsx("figcaption",{className:"wim-audio__caption",children:m})]})};i.propTypes={src:e.string.isRequired,autoPlay:e.bool,loop:e.bool,muted:e.bool,controls:e.bool,radius:e.oneOf(["none","small","medium","large","full"]),shadow:e.bool,border:e.bool,caption:e.string};i.__docgenInfo={description:"",methods:[],displayName:"Audio",props:{src:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},muted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},controls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"full"',computed:!1},type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"full"',computed:!1}]}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},caption:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const t=""+new URL("audiosample-CblkpeR1.mp3",import.meta.url).href,_={title:"Component/Media/Audio",component:i,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]}}},a={args:{src:t,controls:!0,radius:"none"}},o={args:{src:t,controls:!0,radius:"none",caption:"オーディオサンプルのキャプション"}},r={args:{src:t,controls:!0,radius:"full",shadow:!0,border:!0}},s={args:{src:t,controls:!0,autoPlay:!0,muted:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: audioSample,
    controls: true,
    autoPlay: true,
    muted: true
  }
}`,...s.parameters?.docs?.source}}};const j=["Default","WithCaption","Rounded","AutoPlay"],P=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:s,Default:a,Rounded:r,WithCaption:o,__namedExportsOrder:j,default:_},Symbol.toStringTag,{value:"Module"}));export{P as A,a as D,r as R,o as W};
