import{j as o}from"./jsx-runtime-u17CrQMm.js";import{P as e}from"./index-st-jTvzg.js";const i=({src:d,alt:p,width:m,height:g,radius:u="none",shadow:f=!1,border:h=!1,fit:v="cover",caption:c,className:w,style:b,...y})=>{const I=["wim-image-inner",u!=="none"&&`wim-image--radius-${u}`,f&&"wim-image--shadow",h&&"wim-image--border"].filter(Boolean).join(" "),S={width:m||"100%",height:g||"auto",objectFit:v,...b};return o.jsxs("figure",{className:`wim-image-container ${w||""}`,style:{width:m||"100%"},children:[o.jsx("div",{className:I,children:o.jsx("img",{src:d,alt:p,className:"wim-image",style:S,...y})}),c&&o.jsx("figcaption",{className:"wim-image__caption",children:c})]})};i.propTypes={src:e.string.isRequired,alt:e.string.isRequired,width:e.oneOfType([e.string,e.number]),height:e.oneOfType([e.string,e.number]),radius:e.oneOf(["none","small","medium","large","full"]),shadow:e.bool,border:e.bool,fit:e.oneOf(["contain","cover","fill","none","scale-down"]),caption:e.string};i.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},alt:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1},type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"full"',computed:!1}]}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},fit:{required:!1,tsType:{name:"union",raw:'"contain" | "cover" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"",defaultValue:{value:'"cover"',computed:!1},type:{name:"enum",value:[{value:'"contain"',computed:!1},{value:'"cover"',computed:!1},{value:'"fill"',computed:!1},{value:'"none"',computed:!1},{value:'"scale-down"',computed:!1}]}},caption:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const l=""+new URL("imagesanple-j58eW6sL.webp",import.meta.url).href,W={title:"Component/Media/Image",component:i,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]},fit:{control:"select",options:["contain","cover","fill","none","scale-down"]}}},a={args:{src:l,alt:"Sample WebP Image",width:400}},r={args:{src:l,alt:"Sample WebP Image",width:400,caption:"これはサンプルのキャプションです。"}},n={args:{src:l,alt:"Sample WebP Image",width:200,height:200,radius:"large",fit:"cover"}},s={args:{src:l,alt:"Sample WebP Image",width:150,height:150,radius:"full",fit:"cover",border:!0}},t={args:{src:l,alt:"Sample WebP Image",width:400,shadow:!0,radius:"medium"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Sample WebP Image",
    width: 400,
    shadow: true,
    radius: "medium"
  }
}`,...t.parameters?.docs?.source}}};const T=["Default","WithCaption","Rounded","Circular","WithShadow"],q=Object.freeze(Object.defineProperty({__proto__:null,Circular:s,Default:a,Rounded:n,WithCaption:r,WithShadow:t,__namedExportsOrder:T,default:W},Symbol.toStringTag,{value:"Module"}));export{s as C,a as D,q as I,n as R,r as W,t as a};
