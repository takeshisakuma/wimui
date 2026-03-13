import{j as o}from"./jsx-runtime-u17CrQMm.js";import{c as g}from"./index-K_u7tV9x.js";import{s as l}from"./imagesanple-VDI2Kzk_.js";import{u as m}from"./useTranslation-D80Uyf_x.js";const a=({src:n,alt:s,width:e,height:p,radius:u="none",shadow:y=!1,border:f=!1,fit:v="cover",loading:h,caption:_,className:w,style:T,...I})=>{const b={width:"100%",height:p||"auto",objectFit:v,...T};return o.jsxs("figure",{className:g("wim-image-container",w),style:{maxWidth:e||"100%",width:"100%"},children:[o.jsx("div",{className:g("wim-image-inner",u!=="none"&&`wim-image--radius-${u}`,y&&"wim-image--shadow",f&&"wim-image--border"),children:o.jsx("img",{src:n,alt:s,className:"wim-image",style:b,loading:h,...I})}),_&&o.jsx("figcaption",{className:"wim-image__caption",children:_})]})};a.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fit:{required:!1,tsType:{name:"union",raw:'"contain" | "cover" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"contain"'},{name:"literal",value:'"cover"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"",defaultValue:{value:'"cover"',computed:!1}},loading:{required:!1,tsType:{name:"union",raw:'"eager" | "lazy"',elements:[{name:"literal",value:'"eager"'},{name:"literal",value:'"lazy"'}]},description:""},caption:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Components/Media/Image",component:a,parameters:{layout:"centered"},argTypes:{radius:{control:"select",options:["none","small","medium","large","full"]},fit:{control:"select",options:["contain","cover","fill","none","scale-down"]}}},t={render:function(s){const{t:e}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,alt:e("story_image_alt")})},args:{src:l,width:400}},r={render:function(s){const{t:e}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,alt:e("story_image_alt"),caption:e("story_image_caption")})},args:{src:l,width:400}},i={render:function(s){const{t:e}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,alt:e("story_image_alt")})},args:{src:l,width:200,height:200,radius:"large",fit:"cover"}},c={render:function(s){const{t:e}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,alt:e("story_image_alt")})},args:{src:l,width:150,height:150,radius:"full",fit:"cover",border:!0}},d={render:function(s){const{t:e}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(a,{...s,alt:e("story_image_alt")})},args:{src:l,width:400,shadow:!0,radius:"medium"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: sampleImage,
    width: 400
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} caption={t("story_image_caption")} />;
  },
  args: {
    src: sampleImage,
    width: 400
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: sampleImage,
    width: 200,
    height: 200,
    radius: "large",
    fit: "cover"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: sampleImage,
    width: 400,
    shadow: true,
    radius: "medium"
  }
}`,...d.parameters?.docs?.source}}};const x=["Default","WithCaption","Rounded","Circular","WithShadow"],N=Object.freeze(Object.defineProperty({__proto__:null,Circular:c,Default:t,Rounded:i,WithCaption:r,WithShadow:d,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{c as C,t as D,N as I,i as R,r as W,d as a};
