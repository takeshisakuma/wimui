import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as T}from"./iframe-UVeQVETo.js";import{P as n}from"./index-C2tr-Bdx.js";import{I as f}from"./Icon-IH6-LcI-.js";import{u as j}from"./useTranslation-Cybp-mxi.js";import{B as w}from"./Button-Cmh8kZ5V.js";const g=({title:m,description:p,variant:v="info",icon:d=!0,action:y,onClose:b,className:_="",children:u,...x})=>{const{t:h}=j(),N=()=>d?T.isValidElement(d)?d:v==="success"?e.jsx(f,{name:"CheckIcon",size:"small"}):e.jsx(f,{name:"CircleIcon",size:"small"}):null;return e.jsx("div",{className:["wim-banner",`wim-banner--${v}`,_].filter(Boolean).join(" "),role:"banner",...x,children:e.jsxs("div",{className:"wim-banner__container",children:[e.jsxs("div",{className:"wim-banner__content",children:[d&&e.jsx("div",{className:"wim-banner__icon",children:N()}),e.jsxs("div",{className:"wim-banner__text",children:[m&&e.jsx("span",{className:"wim-banner__title",children:h(m)}),m&&(p||u)&&e.jsx("span",{className:"wim-banner__separator",children:" - "}),(p||u)&&e.jsx("span",{className:"wim-banner__description",children:p?h(p):u})]})]}),e.jsxs("div",{className:"wim-banner__actions",children:[y&&e.jsx("div",{className:"wim-banner__action",children:y}),b&&e.jsx("button",{type:"button",className:"wim-banner__close",onClick:b,"aria-label":"Close",children:e.jsx(f,{name:"CloseIcon",size:"small"})})]})]})})};g.propTypes={title:n.string,description:n.string,variant:n.oneOf(["info","success","warning","error"]),icon:n.oneOfType([n.bool,n.node]),action:n.node,onClose:n.func,className:n.string,children:n.node};g.__docgenInfo={description:`重要なメッセージやアクションをユーザーに提示するためのバナーコンポーネント。\r
通常、ページの上部に表示されます。`,methods:[],displayName:"Banner",props:{title:{required:!1,tsType:{name:"string"},description:"バナーのタイトル",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"バナーの説明文",type:{name:"string"}},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"バナーのバリアント",defaultValue:{value:'"info"',computed:!1},type:{name:"enum",value:[{value:'"info"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"error"',computed:!1}]}},icon:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"アイコンを表示するかどうか、またはカスタムアイコン",defaultValue:{value:"true",computed:!1},type:{name:"union",value:[{name:"bool"},{name:"node"}]}},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクションボタン要素（例：Buttonコンポーネント）",type:{name:"node"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。",type:{name:"func"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名",defaultValue:{value:'""',computed:!1},type:{name:"string"}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素",type:{name:"node"}}}};const C={title:"Component/Feedback/Banner",component:g,tags:[],argTypes:{onClose:{action:"closed"},icon:{control:"boolean"}},parameters:{layout:"fullscreen"}},a={args:{variant:"info",title:"Update Available",description:"A new version 2.0.0 is available."}},r={args:{variant:"success",title:"Success",description:"Your account has been successfully created."}},s={args:{variant:"warning",title:"Maintenance",description:"Scheduled maintenance will occur tonight at 00:00 UTC."}},o={args:{variant:"error",title:"Connection Error",description:"Failed to connect to the server. Please check your internet connection.",onClose:()=>{}}},i={args:{variant:"info",title:"Cookie Policy",description:"We use cookies to improve your experience.",action:e.jsx(w,{size:"small",priority:"secondary",label:"Accept"})}},t={args:{variant:"warning",title:"Trial Expiring",description:"Your trial expires in 3 days.",action:e.jsx(w,{size:"small",priority:"primary",label:"Upgrade"}),onClose:()=>{}}},c={args:{variant:"info",description:"This banner has no title, only a description."}},l={args:{variant:"info",title:"Simple Banner",description:"This banner has no icon.",icon:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Update Available",
    description: "A new version 2.0.0 is available."
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    description: "Your account has been successfully created."
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Maintenance",
    description: "Scheduled maintenance will occur tonight at 00:00 UTC."
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Connection Error",
    description: "Failed to connect to the server. Please check your internet connection.",
    onClose: () => {}
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Cookie Policy",
    description: "We use cookies to improve your experience.",
    action: <Button size="small" priority="secondary" label="Accept" />
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Trial Expiring",
    description: "Your trial expires in 3 days.",
    action: <Button size="small" priority="primary" label="Upgrade" />,
    onClose: () => {}
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    description: "This banner has no title, only a description."
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Simple Banner",
    description: "This banner has no icon.",
    icon: false
  }
}`,...l.parameters?.docs?.source}}};const S=["Info","Success","Warning","Error","WithAction","WithCloseAndAction","DescriptionOnly","NoIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,DescriptionOnly:c,Error:o,Info:a,NoIcon:l,Success:r,Warning:s,WithAction:i,WithCloseAndAction:t,__namedExportsOrder:S,default:C},Symbol.toStringTag,{value:"Module"}));export{q as B};
