import{j as l}from"./jsx-runtime-u17CrQMm.js";import{P as e}from"./index-DOdG3W7E.js";const n=({src:d,autoPlay:m=!1,loop:c=!1,muted:p=!1,controls:f=!0,radius:u="full",shadow:y=!1,border:g=!1,caption:i,className:b,style:v,...w})=>{const T=["wim-audio-inner",u!=="none"&&`wim-audio--radius-${u}`,y&&"wim-audio--shadow",g&&"wim-audio--border"].filter(Boolean).join(" ");return l.jsxs("figure",{className:`wim-audio-container ${b||""}`,style:v,children:[l.jsx("div",{className:T,children:l.jsx("audio",{src:d,className:"wim-audio",autoPlay:m,loop:c,muted:p,controls:f,...w})}),i&&l.jsx("figcaption",{className:"wim-audio__caption",children:i})]})};n.propTypes={src:e.string.isRequired,autoPlay:e.bool,loop:e.bool,muted:e.bool,controls:e.bool,radius:e.oneOf(["none","small","medium","large","full"]),shadow:e.bool,border:e.bool,caption:e.string};n.__docgenInfo={description:"",methods:[],displayName:"Audio",props:{src:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},muted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},controls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"full"',computed:!1},type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"full"',computed:!1}]}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},caption:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const t=""+new URL("audiosample-CblkpeR1.mp3",import.meta.url).href,h={title:"Component/Media/Audio",component:n,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]}}},a={args:{src:t,controls:!0,radius:"none"}},o={args:{src:t,controls:!0,radius:"none",caption:"オーディオサンプルのキャプション"}},r={args:{src:t,controls:!0,radius:"full",shadow:!0,border:!0}},s={args:{src:t,controls:!0,autoPlay:!1,muted:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    autoPlay: false,
    // ブラウザの制限を考慮してデフォルトはオフ
    muted: true
  }
}`,...s.parameters?.docs?.source}}};const S=["Default","WithCaption","Rounded","AutoPlay"],j=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:s,Default:a,Rounded:r,WithCaption:o,__namedExportsOrder:S,default:h},Symbol.toStringTag,{value:"Module"}));export{j as A,a as D,r as R,o as W};
