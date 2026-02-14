import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as N}from"./iframe-CLXnzuMj.js";import{c as j}from"./index-DIcffr0b.js";import{I as u}from"./Icon-CfK0pkXv.js";import{u as C}from"./useTranslation-C0TmU-R_.js";import{B as y}from"./Button-C2YkOmvP.js";const h=({title:m,description:l,variant:g="info",icon:d=!0,action:f,onClose:v,className:w,children:p,..._})=>{const{t:b}=C(),x=()=>d?N.isValidElement(d)?d:g==="success"?e.jsx(u,{name:"CheckIcon",size:"small"}):e.jsx(u,{name:"CircleIcon",size:"small"}):null;return e.jsx("div",{className:j("wim-banner",`wim-banner--${g}`,w),role:"banner",..._,children:e.jsxs("div",{className:"wim-banner__container",children:[e.jsxs("div",{className:"wim-banner__content",children:[d&&e.jsx("div",{className:"wim-banner__icon",children:x()}),e.jsxs("div",{className:"wim-banner__text",children:[m&&e.jsx("span",{className:"wim-banner__title",children:b(m)}),m&&(l||p)&&e.jsx("span",{className:"wim-banner__separator",children:" - "}),(l||p)&&e.jsx("span",{className:"wim-banner__description",children:l?b(l):p})]})]}),e.jsxs("div",{className:"wim-banner__actions",children:[f&&e.jsx("div",{className:"wim-banner__action",children:f}),v&&e.jsx("button",{type:"button",className:"wim-banner__close",onClick:v,"aria-label":"Close",children:e.jsx(u,{name:"CloseIcon",size:"small"})})]})]})})};h.__docgenInfo={description:`重要なメッセージやアクションをユーザーに提示するためのバナーコンポーネント。\r
通常、ページの上部に表示されます。`,methods:[],displayName:"Banner",props:{title:{required:!1,tsType:{name:"string"},description:"バナーのタイトル"},description:{required:!1,tsType:{name:"string"},description:"バナーの説明文"},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"バナーのバリアント",defaultValue:{value:'"info"',computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"アイコンを表示するかどうか、またはカスタムアイコン",defaultValue:{value:"true",computed:!1}},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクションボタン要素（例：Buttonコンポーネント）"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素"}}};const S={title:"Component/Feedback/Banner",component:h,tags:[],argTypes:{onClose:{action:"closed"},icon:{control:"boolean"}},parameters:{layout:"fullscreen"}},n={args:{variant:"info",title:"Update Available",description:"A new version 2.0.0 is available."}},r={args:{variant:"success",title:"Success",description:"Your account has been successfully created."}},a={args:{variant:"warning",title:"Maintenance",description:"Scheduled maintenance will occur tonight at 00:00 UTC."}},s={args:{variant:"error",title:"Connection Error",description:"Failed to connect to the server. Please check your internet connection.",onClose:()=>{}}},i={args:{variant:"info",title:"Cookie Policy",description:"We use cookies to improve your experience.",action:e.jsx(y,{size:"small",priority:"secondary",label:"Accept"})}},o={args:{variant:"warning",title:"Trial Expiring",description:"Your trial expires in 3 days.",action:e.jsx(y,{size:"small",priority:"primary",label:"Upgrade"}),onClose:()=>{}}},t={args:{variant:"info",description:"This banner has no title, only a description."}},c={args:{variant:"info",title:"Simple Banner",description:"This banner has no icon.",icon:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Update Available",
    description: "A new version 2.0.0 is available."
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    description: "Your account has been successfully created."
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Maintenance",
    description: "Scheduled maintenance will occur tonight at 00:00 UTC."
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Connection Error",
    description: "Failed to connect to the server. Please check your internet connection.",
    onClose: () => {}
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Cookie Policy",
    description: "We use cookies to improve your experience.",
    action: <Button size="small" priority="secondary" label="Accept" />
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Trial Expiring",
    description: "Your trial expires in 3 days.",
    action: <Button size="small" priority="primary" label="Upgrade" />,
    onClose: () => {}
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    description: "This banner has no title, only a description."
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Simple Banner",
    description: "This banner has no icon.",
    icon: false
  }
}`,...c.parameters?.docs?.source}}};const T=["Info","Success","Warning","Error","WithAction","WithCloseAndAction","DescriptionOnly","NoIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,DescriptionOnly:t,Error:s,Info:n,NoIcon:c,Success:r,Warning:a,WithAction:i,WithCloseAndAction:o,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{q as B};
