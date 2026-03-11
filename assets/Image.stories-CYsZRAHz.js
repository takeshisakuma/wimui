import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./index-30w8ikAG.js";import{s as c}from"./imagesanple-VDI2Kzk_.js";import{u as d}from"./useTranslation-ZF4WB21B.js";const r=({src:t,alt:n,width:e,height:f,radius:u="none",shadow:h=!1,border:w=!1,fit:_="cover",loading:y,caption:g,className:v,style:T,...I})=>{const b={width:"100%",height:f||"auto",objectFit:_,...T};return a.jsxs("figure",{className:p("wim-image-container",v),style:{maxWidth:e||"100%",width:"100%"},children:[a.jsx("div",{className:p("wim-image-inner",u!=="none"&&`wim-image--radius-${u}`,h&&"wim-image--shadow",w&&"wim-image--border"),children:a.jsx("img",{src:t,alt:n,className:"wim-image",style:b,loading:y,...I})}),g&&a.jsx("figcaption",{className:"wim-image__caption",children:g})]})};r.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fit:{required:!1,tsType:{name:"union",raw:'"contain" | "cover" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"",defaultValue:{value:'"cover"',computed:!1}},loading:{required:!1,tsType:{name:"union",raw:'"eager" | "lazy"',elements:[{name:"literal",value:'"eager"'},{name:"literal",value:'"lazy"'}]},description:""},caption:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Components/Media/Image",component:r,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]},fit:{control:"select",options:["contain","cover","fill","none","scale-down"]}}},s={render:function(n){const{t:e}=d(["docs","common","components"]);return a.jsx(r,{...n,alt:e("story_image_alt")})},args:{src:c,width:400}},o={render:function(n){const{t:e}=d(["docs","common","components"]);return a.jsx(r,{...n,alt:e("story_image_alt"),caption:e("story_image_caption")})},args:{src:c,width:400}},i={render:function(n){const{t:e}=d(["docs","common","components"]);return a.jsx(r,{...n,alt:e("story_image_alt")})},args:{src:c,width:200,height:200,radius:"large",fit:"cover"}},m={render:function(n){const{t:e}=d(["docs","common","components"]);return a.jsx(r,{...n,alt:e("story_image_alt")})},args:{src:c,width:150,height:150,radius:"full",fit:"cover",border:!0}},l={render:function(n){const{t:e}=d(["docs","common","components"]);return a.jsx(r,{...n,alt:e("story_image_alt")})},args:{src:c,width:400,shadow:!0,radius:"medium"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: sampleImage,
    width: 400
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} caption={t("story_image_caption")} />;
  },
  args: {
    src: sampleImage,
    width: 400
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: sampleImage,
    width: 200,
    height: 200,
    radius: "large",
    fit: "cover"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: sampleImage,
    width: 150,
    height: 150,
    radius: "full",
    fit: "cover",
    border: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: sampleImage,
    width: 400,
    shadow: true,
    radius: "medium"
  }
}`,...l.parameters?.docs?.source}}};const x=["Default","WithCaption","Rounded","Circular","WithShadow"],N=Object.freeze(Object.defineProperty({__proto__:null,Circular:m,Default:s,Rounded:i,WithCaption:o,WithShadow:l,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{m as C,s as D,N as I,i as R,o as W,l as a};
