import{L as c}from"./Link-BuKJovRM.js";const l={title:"Component/Typography & Icons/Link",component:c,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},priority:{control:{type:"select"},options:["primary","secondary","tertiary"]},iconName:{control:{type:"select"},options:[void 0,"CircleIcon","SquareIcon","LoadingIcon","ExternalLinkIcon"]},iconPosition:{control:{type:"radio"},options:["left","right"]},external:{control:{type:"boolean"}}}},r={args:{label:"Primary Link",priority:"primary",href:"#"}},e={args:{label:"External Link",external:!0,href:"https://storybook.js.org/"}},a={args:{label:"Secondary Link",priority:"secondary",href:"#"}},o={args:{label:"Tertiary Link",priority:"tertiary",href:"#"}},n={args:{label:"Link with Icon",iconName:"CircleIcon",iconPosition:"left",href:"#"}},s={args:{label:"Link with Icon",iconName:"SquareIcon",iconPosition:"right",href:"#"}},t={args:{label:"Small Link",size:"small",href:"#"}},i={args:{label:"Large Link",size:"large",href:"#"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Primary Link",
    priority: "primary",
    href: "#"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "External Link",
    external: true,
    href: "https://storybook.js.org/"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Secondary Link",
    priority: "secondary",
    href: "#"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Tertiary Link",
    priority: "tertiary",
    href: "#"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Link with Icon",
    iconName: "CircleIcon",
    iconPosition: "left",
    href: "#"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Link with Icon",
    iconName: "SquareIcon",
    iconPosition: "right",
    href: "#"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Small Link",
    size: "small",
    href: "#"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Large Link",
    size: "large",
    href: "#"
  }
}`,...i.parameters?.docs?.source}}};const p=["Primary","External","Secondary","Tertiary","WithIconLeft","WithIconRight","Small","Large"],g=Object.freeze(Object.defineProperty({__proto__:null,External:e,Large:i,Primary:r,Secondary:a,Small:t,Tertiary:o,WithIconLeft:n,WithIconRight:s,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{g as L,r as P,a as S,o as T,n as W,s as a,t as b,i as c};
