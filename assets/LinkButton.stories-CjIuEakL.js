import{j as t}from"./react-D-G-yZ1o.js";import{I as r}from"./Icon-CjB8TZ2o.js";import"./prop-types-CamVAYe7.js";const i=({className:u="",size:s="medium",priority:m="secondary",role:c="default",backgroundColor:n,label:a,iconName:e,iconPosition:l="left",...d})=>{const f=`wim-button--${{small:"sm",medium:"md",large:"lg"}[s]}`,p=`wim-button--${m}`,g=`wim-button--${c}`,h=!a&&e?"wim-button--icon-only":"";return t.jsx("a",{className:["wim-button",f,p,g,h,u].filter(Boolean).join(" "),style:n?{backgroundColor:n}:void 0,...d,children:t.jsxs("span",{className:"wim-button__inner",children:[e&&l==="left"&&t.jsx(r,{name:e,size:s}),a&&t.jsx("span",{className:"wim-button__label",children:a}),e&&l==="right"&&t.jsx(r,{name:e,size:s})]})})};i.__docgenInfo={description:"ボタンの見た目をしたアンカー（リンク）コンポーネント。",methods:[],displayName:"LinkButton",props:{className:{defaultValue:{value:'""',computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1},priority:{defaultValue:{value:'"secondary"',computed:!1},required:!1},role:{defaultValue:{value:'"default"',computed:!1},required:!1},iconPosition:{defaultValue:{value:'"left"',computed:!1},required:!1}}};const y={title:"Component/Buttons & Actions/LinkButton",component:i,tags:["autodocs"]},o={args:{label:"Googleへ移動",href:"https://google.com",target:"_blank",iconName:"ExternalLinkIcon",iconPosition:"right"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Googleへ移動",
    href: "https://google.com",
    target: "_blank",
    iconName: "ExternalLinkIcon",
    iconPosition: "right"
  }
}`,...o.parameters?.docs?.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,y as default};
