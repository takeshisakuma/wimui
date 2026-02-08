import{j as t}from"./jsx-runtime-u17CrQMm.js";import{I as r}from"./Icon-sAf_4biW.js";import"./index-BFGcS2dx.js";import"./iframe-D7BhmU8I.js";import"./preload-helper-PPVm8Dsz.js";const i=({className:u="",size:o="medium",priority:m="secondary",role:c="default",backgroundColor:l,label:s,iconName:e,iconPosition:n="left",...d})=>{const p=`wim-button--${{small:"sm",medium:"md",large:"lg"}[o]}`,f=`wim-button--${m}`,g=`wim-button--${c}`,h=!s&&e?"wim-button--icon-only":"";return t.jsx("a",{className:["wim-button",p,f,g,h,u].filter(Boolean).join(" "),style:l?{backgroundColor:l}:void 0,...d,children:t.jsxs("span",{className:"wim-button__inner",children:[e&&n==="left"&&t.jsx(r,{name:e,size:o}),s&&t.jsx("span",{className:"wim-button__label",children:s}),e&&n==="right"&&t.jsx(r,{name:e,size:o})]})})};i.__docgenInfo={description:"ボタンの見た目をしたアンカー（リンク）コンポーネント。",methods:[],displayName:"LinkButton",props:{className:{defaultValue:{value:'""',computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1},priority:{defaultValue:{value:'"secondary"',computed:!1},required:!1},role:{defaultValue:{value:'"default"',computed:!1},required:!1},iconPosition:{defaultValue:{value:'"left"',computed:!1},required:!1}}};const k={title:"General/LinkButton",component:i,tags:["autodocs"]},a={args:{label:"Googleへ移動",href:"https://google.com",target:"_blank",iconName:"ExternalLinkIcon",iconPosition:"right"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Googleへ移動",
    href: "https://google.com",
    target: "_blank",
    iconName: "ExternalLinkIcon",
    iconPosition: "right"
  }
}`,...a.parameters?.docs?.source}}};const v=["Default"];export{a as Default,v as __namedExportsOrder,k as default};
