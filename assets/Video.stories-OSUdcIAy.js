import{j as l}from"./jsx-runtime-u17CrQMm.js";import{P as e}from"./index-DZRgfITU.js";const s=({src:d,width:i,height:p,autoPlay:c=!1,loop:f=!1,muted:v=!1,controls:y=!0,poster:g,radius:u="none",shadow:b=!1,border:w=!1,fit:h="cover",caption:m,className:T,style:V,...q})=>{const P=["wim-video-inner",u!=="none"&&`wim-video--radius-${u}`,b&&"wim-video--shadow",w&&"wim-video--border"].filter(Boolean).join(" "),j={width:i||"100%",height:p||"auto",objectFit:h,...V};return l.jsxs("figure",{className:`wim-video-container ${T||""}`,style:{width:i||"100%"},children:[l.jsx("div",{className:P,children:l.jsx("video",{src:d,className:"wim-video",style:j,autoPlay:c,loop:f,muted:v,controls:y,poster:g,playsInline:!0,...q})}),m&&l.jsx("figcaption",{className:"wim-video__caption",children:m})]})};s.propTypes={src:e.string.isRequired,width:e.oneOfType([e.string,e.number]),height:e.oneOfType([e.string,e.number]),autoPlay:e.bool,loop:e.bool,muted:e.bool,controls:e.bool,poster:e.string,radius:e.oneOf(["none","small","medium","large","full"]),shadow:e.bool,border:e.bool,fit:e.oneOf(["contain","cover","fill","none","scale-down"]),caption:e.string};s.__docgenInfo={description:"",methods:[],displayName:"Video",props:{src:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},muted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},controls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},poster:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1},type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"full"',computed:!1}]}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},fit:{required:!1,tsType:{name:"union",raw:'"contain" | "cover" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"",defaultValue:{value:'"cover"',computed:!1},type:{name:"enum",value:[{value:'"contain"',computed:!1},{value:'"cover"',computed:!1},{value:'"fill"',computed:!1},{value:'"none"',computed:!1},{value:'"scale-down"',computed:!1}]}},caption:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const t=""+new URL("videosample-j4XSMn77.mp4",import.meta.url).href,r=""+new URL("imagesanple-j58eW6sL.webp",import.meta.url).href,_={title:"Component/Media/Video",component:s,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]},fit:{control:"select",options:["contain","cover","fill","none","scale-down"]}}},a={args:{src:t,poster:r,width:600}},o={args:{src:t,poster:r,width:600,autoPlay:!0,muted:!0,loop:!0,controls:!1,caption:"自動再生＆ループ設定（ミュート必須）"}},n={args:{src:t,poster:r,width:400,radius:"large",shadow:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 600
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 600,
    autoPlay: true,
    muted: true,
    loop: true,
    controls: false,
    caption: "自動再生＆ループ設定（ミュート必須）"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 400,
    radius: "large",
    shadow: true
  }
}`,...n.parameters?.docs?.source}}};const x=["Default","AutoPlay","Rounded"],R=Object.freeze(Object.defineProperty({__proto__:null,AutoPlay:o,Default:a,Rounded:n,__namedExportsOrder:x,default:_},Symbol.toStringTag,{value:"Module"}));export{o as A,a as D,n as R,R as V};
