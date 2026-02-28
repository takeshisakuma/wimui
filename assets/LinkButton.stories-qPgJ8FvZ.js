import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-CZyd2_qg.js";import{I as l}from"./Icon--zs9NUy0.js";const u=({className:i,size:a="medium",priority:m="secondary",role:c="default",backgroundColor:s,label:n,iconName:e,iconPosition:r="left",...d})=>t.jsx("a",{className:f("wim-button",`wim-button--${a==="small"?"sm":a==="large"?"lg":"md"}`,`wim-button--${m}`,`wim-button--${c}`,!n&&e&&"wim-button--icon-only",i),style:s?{backgroundColor:s}:void 0,...d,children:t.jsxs("span",{className:"wim-button__inner",children:[e&&r==="left"&&t.jsx(l,{name:e,size:a}),n&&t.jsx("span",{className:"wim-button__label",children:n}),e&&r==="right"&&t.jsx(l,{name:e,size:a})]})});u.__docgenInfo={description:"ボタンの見た目をしたアンカー（リンク）コンポーネント。",methods:[],displayName:"LinkButton",props:{size:{defaultValue:{value:'"medium"',computed:!1},required:!1},priority:{defaultValue:{value:'"secondary"',computed:!1},required:!1},role:{defaultValue:{value:'"default"',computed:!1},required:!1},iconPosition:{defaultValue:{value:'"left"',computed:!1},required:!1}}};const p={title:"Components/Buttons/LinkButton",component:u,tags:[]},o={args:{label:"Googleへ移動",href:"https://google.com",target:"_blank",iconName:"ExternalLinkIcon",iconPosition:"right"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Googleへ移動",
    href: "https://google.com",
    target: "_blank",
    iconName: "ExternalLinkIcon",
    iconPosition: "right"
  }
}`,...o.parameters?.docs?.source}}};const g=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{o as D,x as L};
