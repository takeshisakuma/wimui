import{j as o}from"./jsx-runtime-u17CrQMm.js";import{P as e}from"./index-BxUS1-Uu.js";import{s as t}from"./imagesanple-VDI2Kzk_.js";const i=({src:d,alt:p,width:m,height:g,radius:u="none",shadow:f=!1,border:v=!1,fit:h="cover",loading:w,caption:c,className:y,style:b,...I})=>{const S=["wim-image-inner",u!=="none"&&`wim-image--radius-${u}`,f&&"wim-image--shadow",v&&"wim-image--border"].filter(Boolean).join(" "),T={width:m||"100%",height:g||"auto",objectFit:h,...b};return o.jsxs("figure",{className:`wim-image-container ${y||""}`,style:{width:m||"100%"},children:[o.jsx("div",{className:S,children:o.jsx("img",{src:d,alt:p,className:"wim-image",style:T,loading:w,...I})}),c&&o.jsx("figcaption",{className:"wim-image__caption",children:c})]})};i.propTypes={src:e.string.isRequired,alt:e.string.isRequired,width:e.oneOfType([e.string,e.number]),height:e.oneOfType([e.string,e.number]),radius:e.oneOf(["none","small","medium","large","full"]),shadow:e.bool,border:e.bool,fit:e.oneOf(["contain","cover","fill","none","scale-down"]),loading:e.oneOf(["eager","lazy"]),caption:e.string};i.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},alt:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1},type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"full"',computed:!1}]}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},fit:{required:!1,tsType:{name:"union",raw:'"contain" | "cover" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"",defaultValue:{value:'"cover"',computed:!1},type:{name:"enum",value:[{value:'"contain"',computed:!1},{value:'"cover"',computed:!1},{value:'"fill"',computed:!1},{value:'"none"',computed:!1},{value:'"scale-down"',computed:!1}]}},loading:{required:!1,tsType:{name:"union",raw:'"eager" | "lazy"',elements:[{name:"literal",value:'"eager"'},{name:"literal",value:'"lazy"'}]},description:"",type:{name:"enum",value:[{value:'"eager"',computed:!1},{value:'"lazy"',computed:!1}]}},caption:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const W={title:"Component/Media & Viz/Image",component:i,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]},fit:{control:"select",options:["contain","cover","fill","none","scale-down"]}}},a={args:{src:t,alt:"Sample WebP Image",width:400}},r={args:{src:t,alt:"Sample WebP Image",width:400,caption:"これはサンプルのキャプションです。"}},n={args:{src:t,alt:"Sample WebP Image",width:200,height:200,radius:"large",fit:"cover"}},s={args:{src:t,alt:"Sample WebP Image",width:150,height:150,radius:"full",fit:"cover",border:!0}},l={args:{src:t,alt:"Sample WebP Image",width:400,shadow:!0,radius:"medium"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Sample WebP Image",
    width: 400
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Sample WebP Image",
    width: 400,
    caption: "これはサンプルのキャプションです。"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Sample WebP Image",
    width: 200,
    height: 200,
    radius: "large",
    fit: "cover"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Sample WebP Image",
    width: 150,
    height: 150,
    radius: "full",
    fit: "cover",
    border: true
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Sample WebP Image",
    width: 400,
    shadow: true,
    radius: "medium"
  }
}`,...l.parameters?.docs?.source}}};const P=["Default","WithCaption","Rounded","Circular","WithShadow"],x=Object.freeze(Object.defineProperty({__proto__:null,Circular:s,Default:a,Rounded:n,WithCaption:r,WithShadow:l,__namedExportsOrder:P,default:W},Symbol.toStringTag,{value:"Module"}));export{s as C,a as D,x as I,n as R,r as W,l as a};
