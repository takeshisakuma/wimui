import{j as a}from"./jsx-runtime-u17CrQMm.js";import{P as e}from"./index-BrRgPHkV.js";import{I as h}from"./Icon-CgVB5YcA.js";import{u as _}from"./useTranslation-G0nqYNnN.js";const d=({label:y,size:p="medium",priority:I="primary",iconName:m,iconPosition:f="left",external:u=!1,className:v,children:L,target:k,...b})=>{const{t:S}=_(),x=`wim-link--${{small:"sm",medium:"md",large:"lg"}[p]}`,T=`wim-link--${I}`,g=m?a.jsx(h,{name:m,size:p}):null,w=u?a.jsx(h,{name:"ExternalIcon",size:p,className:"wim-link__external-icon"}):null;return a.jsx("a",{className:["wim-link",x,T,u?"wim-link--external":"",v].filter(Boolean).join(" "),target:u?"_blank":k,...b,children:a.jsxs("span",{className:"wim-link__inner",children:[m&&f==="left"&&g,a.jsx("span",{className:"wim-link__label",children:y?S(y):L}),m&&f==="right"&&g,w]})})};d.propTypes={label:e.string,size:e.oneOf(["small","medium","large"]),priority:e.oneOf(["primary","secondary","tertiary"]),iconName:e.oneOf(["CircleIcon","SquareIcon","LoadingIcon","ExternalIcon"]),iconPosition:e.oneOf(["left","right"]),external:e.bool};d.__docgenInfo={description:"",methods:[],displayName:"Link",props:{label:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},priority:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"tertiary"',computed:!1}]}},iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalIcon"'}]},description:"",type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1},{value:'"LoadingIcon"',computed:!1},{value:'"ExternalIcon"',computed:!1}]}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}},external:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const P={title:"Component/Typography & Action/Link",component:d,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},priority:{control:{type:"select"},options:["primary","secondary","tertiary"]},iconName:{control:{type:"select"},options:[void 0,"CircleIcon","SquareIcon","LoadingIcon"]},iconPosition:{control:{type:"radio"},options:["left","right"]},external:{control:{type:"boolean"}}}},r={args:{label:"Primary Link",priority:"primary",href:"#"}},n={args:{label:"External Link",external:!0,href:"https://storybook.js.org/"}},o={args:{label:"Secondary Link",priority:"secondary",href:"#"}},l={args:{label:"Tertiary Link",priority:"tertiary",href:"#"}},t={args:{label:"Link with Icon",iconName:"CircleIcon",iconPosition:"left",href:"#"}},s={args:{label:"Link with Icon",iconName:"SquareIcon",iconPosition:"right",href:"#"}},i={args:{label:"Small Link",size:"small",href:"#"}},c={args:{label:"Large Link",size:"large",href:"#"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Primary Link",
    priority: "primary",
    href: "#"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "External Link",
    external: true,
    href: "https://storybook.js.org/"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Secondary Link",
    priority: "secondary",
    href: "#"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Tertiary Link",
    priority: "tertiary",
    href: "#"
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Link with Icon",
    iconName: "CircleIcon",
    iconPosition: "left",
    href: "#"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Link with Icon",
    iconName: "SquareIcon",
    iconPosition: "right",
    href: "#"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Small Link",
    size: "small",
    href: "#"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Large Link",
    size: "large",
    href: "#"
  }
}`,...c.parameters?.docs?.source}}};const q=["Primary","External","Secondary","Tertiary","WithIconLeft","WithIconRight","Small","Large"],O=Object.freeze(Object.defineProperty({__proto__:null,External:n,Large:c,Primary:r,Secondary:o,Small:i,Tertiary:l,WithIconLeft:t,WithIconRight:s,__namedExportsOrder:q,default:P},Symbol.toStringTag,{value:"Module"}));export{O as L,r as P,o as S,l as T,t as W,s as a,i as b,c};
