import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./index-DROgmfby.js";import{I as l}from"./Icon-CjXlYNhp.js";import"./iframe-DCP7Q_DB.js";import"./preload-helper-PPVm8Dsz.js";const i=({className:m,size:o="medium",priority:u="secondary",role:c="default",backgroundColor:n,label:s,iconName:e,iconPosition:r="left",...d})=>t.jsx("a",{className:p("wim-button",`wim-button--${o==="small"?"sm":o==="large"?"lg":"md"}`,`wim-button--${u}`,`wim-button--${c}`,!s&&e&&"wim-button--icon-only",m),style:n?{backgroundColor:n}:void 0,...d,children:t.jsxs("span",{className:"wim-button__inner",children:[e&&r==="left"&&t.jsx(l,{name:e,size:o}),s&&t.jsx("span",{className:"wim-button__label",children:s}),e&&r==="right"&&t.jsx(l,{name:e,size:o})]})});i.__docgenInfo={description:"ボタンの見た目をしたアンカー（リンク）コンポーネント。",methods:[],displayName:"LinkButton",props:{size:{defaultValue:{value:'"medium"',computed:!1},required:!1},priority:{defaultValue:{value:'"secondary"',computed:!1},required:!1},role:{defaultValue:{value:'"default"',computed:!1},required:!1},iconPosition:{defaultValue:{value:'"left"',computed:!1},required:!1}}};const b={title:"Component/Buttons & Actions/LinkButton",component:i,tags:["autodocs"]},a={args:{label:"Googleへ移動",href:"https://google.com",target:"_blank",iconName:"ExternalLinkIcon",iconPosition:"right"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Googleへ移動",
    href: "https://google.com",
    target: "_blank",
    iconName: "ExternalLinkIcon",
    iconPosition: "right"
  }
}`,...a.parameters?.docs?.source}}};const j=["Default"];export{a as Default,j as __namedExportsOrder,b as default};
