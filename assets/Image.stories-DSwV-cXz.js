import{j as l}from"./jsx-runtime-u17CrQMm.js";import{c}from"./index-DIcffr0b.js";import{s as t}from"./imagesanple-VDI2Kzk_.js";const d=({src:u,alt:p,width:i,height:g,radius:o="none",shadow:f=!1,border:h=!1,fit:w="cover",loading:v,caption:m,className:b,style:I,...S})=>{const y={width:i||"100%",height:g||"auto",objectFit:w,...I};return l.jsxs("figure",{className:c("wim-image-container",b),style:{width:i||"100%"},children:[l.jsx("div",{className:c("wim-image-inner",o!=="none"&&`wim-image--radius-${o}`,f&&"wim-image--shadow",h&&"wim-image--border"),children:l.jsx("img",{src:u,alt:p,className:"wim-image",style:y,loading:v,...S})}),m&&l.jsx("figcaption",{className:"wim-image__caption",children:m})]})};d.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fit:{required:!1,tsType:{name:"union",raw:'"contain" | "cover" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"",defaultValue:{value:'"cover"',computed:!1}},loading:{required:!1,tsType:{name:"union",raw:'"eager" | "lazy"',elements:[{name:"literal",value:'"eager"'},{name:"literal",value:'"lazy"'}]},description:""},caption:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Component/Media & Viz/Image",component:d,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]},fit:{control:"select",options:["contain","cover","fill","none","scale-down"]}}},e={args:{src:t,alt:"Sample WebP Image",width:400}},a={args:{src:t,alt:"Sample WebP Image",width:400,caption:"これはサンプルのキャプションです。"}},r={args:{src:t,alt:"Sample WebP Image",width:200,height:200,radius:"large",fit:"cover"}},s={args:{src:t,alt:"Sample WebP Image",width:150,height:150,radius:"full",fit:"cover",border:!0}},n={args:{src:t,alt:"Sample WebP Image",width:400,shadow:!0,radius:"medium"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Sample WebP Image",
    width: 400
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Sample WebP Image",
    width: 400,
    caption: "これはサンプルのキャプションです。"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Sample WebP Image",
    width: 200,
    height: 200,
    radius: "large",
    fit: "cover"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Sample WebP Image",
    width: 150,
    height: 150,
    radius: "full",
    fit: "cover",
    border: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Sample WebP Image",
    width: 400,
    shadow: true,
    radius: "medium"
  }
}`,...n.parameters?.docs?.source}}};const T=["Default","WithCaption","Rounded","Circular","WithShadow"],j=Object.freeze(Object.defineProperty({__proto__:null,Circular:s,Default:e,Rounded:r,WithCaption:a,WithShadow:n,__namedExportsOrder:T,default:W},Symbol.toStringTag,{value:"Module"}));export{s as C,e as D,j as I,r as R,a as W,n as a};
