import{I as n}from"./Icon-GFlJee33.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,s={title:"Component/Typography & Icons/Icon",component:n,parameters:{layout:"centered"},argTypes:{color:{control:{type:"select"},options:["destructive","positive","caution","informative","primary","secondary","tertiary","disabled"]}},args:{onClick:c(),name:"CircleIcon",size:"medium",color:"destructive"}},e={args:{name:"SquareIcon",size:"medium",color:"primary"}},r={args:{name:"CircleIcon",size:"large",color:"destructive"}},o={args:{name:"LoadingIcon",size:"large",color:"primary"}},a={args:{name:"ExternalLinkIcon",size:"medium",color:"primary"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: "SquareIcon",
    size: "medium",
    color: "primary"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: "CircleIcon",
    size: "large",
    color: "destructive"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "LoadingIcon",
    size: "large",
    color: "primary"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: "ExternalLinkIcon",
    size: "medium",
    color: "primary"
  }
}`,...a.parameters?.docs?.source}}};const i=["MediumSquareIcon","MediumCircleIcon","MediumLoadingIcon","MediumExternalLinkIcon"],m=Object.freeze(Object.defineProperty({__proto__:null,MediumCircleIcon:r,MediumExternalLinkIcon:a,MediumLoadingIcon:o,MediumSquareIcon:e,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{m as I,e as M,a};
