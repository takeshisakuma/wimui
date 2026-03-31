import{L as c}from"./Link-CQPSrcdw.js";const l={title:"Components/Typography & Icons/Link",component:c,parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["sm","md","lg"]},priority:{control:"select",options:["primary","secondary","tertiary"]},iconName:{control:"select",options:[void 0,"CircleIcon","SquareIcon","LoadingIcon","ExternalLinkIcon"]},iconPosition:{control:"radio",options:["left","right"]},external:{control:"boolean"}}},r={args:{label:"Primary Link",priority:"primary",href:"#"}},e={args:{label:"External Link",external:!0,href:"https://storybook.js.org/"}},a={args:{label:"Secondary Link",priority:"secondary",href:"#"}},o={args:{label:"Tertiary Link",priority:"tertiary",href:"#"}},n={args:{label:"Link with Icon",iconName:"CircleIcon",iconPosition:"left",href:"#"}},s={args:{label:"Link with Icon",iconName:"SquareIcon",iconPosition:"right",href:"#"}},t={args:{label:"Small Link",size:"sm",href:"#"}},i={args:{label:"Large Link",size:"lg",href:"#"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    size: "sm",
    href: "#"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Large Link",
    size: "lg",
    href: "#"
  }
}`,...i.parameters?.docs?.source}}};const m=["Primary","External","Secondary","Tertiary","WithIconLeft","WithIconRight","Small","Large"],g=Object.freeze(Object.defineProperty({__proto__:null,External:e,Large:i,Primary:r,Secondary:a,Small:t,Tertiary:o,WithIconLeft:n,WithIconRight:s,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{g as L,r as P,a as S,o as T,n as W,s as a,t as b,i as c};
