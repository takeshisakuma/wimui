import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as b}from"./index-Bp4MVLTo.js";import{I as l}from"./Icon-WrtMB1dj.js";import{u as T}from"./useTranslation-mAu--V_r.js";const h=({title:m,description:c,variant:d="info",icon:u,onClose:p,className:v,children:g,...w})=>{const{t:f}=T(),y=()=>u||(d==="success"?e.jsx(l,{name:"CheckIcon",size:"small"}):e.jsx(l,{name:"CircleIcon",size:"small"}));return e.jsxs("div",{className:b("wim-alert",`wim-alert--${d}`,v),role:"alert",...w,children:[e.jsx("div",{className:"wim-alert__icon",children:y()}),e.jsxs("div",{className:"wim-alert__content",children:[m&&e.jsx("h4",{className:"wim-alert__title",children:f(m)}),(c||g)&&e.jsx("div",{className:"wim-alert__description",children:c?f(c):g})]}),p&&e.jsx("button",{type:"button",className:"wim-alert__close",onClick:p,"aria-label":"Close",children:e.jsx(l,{name:"CloseIcon",size:"small"})})]})};h.__docgenInfo={description:"ユーザーに重要な情報を伝えるためのアラートコンポーネント。",methods:[],displayName:"Alert",props:{title:{required:!1,tsType:{name:"string"},description:"アラートのタイトル"},description:{required:!1,tsType:{name:"string"},description:"アラートの説明文"},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"アラートのバリアント",defaultValue:{value:'"info"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カスタムアイコン。指定しない場合はバリアントに応じたデフォルトアイコンが表示されます。"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素（説明文として扱われます）"}}};const _={title:"Component/Feedback/Alert",component:h,tags:[],argTypes:{onClose:{action:"closed"}}},s={args:{variant:"info",title:"Information",description:"This is an informative message for the user."}},a={args:{variant:"success",title:"Success",description:"Your action has been completed successfully."}},r={args:{variant:"warning",title:"Warning",description:"Please be careful with this action."}},t={args:{variant:"error",title:"Error",description:"Something went wrong. Please try again later."}},n={args:{variant:"info",description:"This alert only has a description and no title."}},o={args:{variant:"success",title:"Dismissible Alert",description:"You can close this alert by clicking the button on the right.",onClose:()=>console.log("Alert closed")}},i={args:{variant:"info",title:"Update Available",description:"A new version of the software is available. Please update to get the latest features and security improvements. The update will take approximately 5 minutes to install.",onClose:()=>{}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Information",
    description: "This is an informative message for the user."
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    description: "Your action has been completed successfully."
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    description: "Please be careful with this action."
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Error",
    description: "Something went wrong. Please try again later."
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    description: "This alert only has a description and no title."
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Dismissible Alert",
    description: "You can close this alert by clicking the button on the right.",
    onClose: () => console.log("Alert closed")
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Update Available",
    description: "A new version of the software is available. Please update to get the latest features and security improvements. The update will take approximately 5 minutes to install.",
    onClose: () => {}
  }
}`,...i.parameters?.docs?.source}}};const S=["Info","Success","Warning","Error","WithoutTitle","WithCloseButton","LongContent"],N=Object.freeze(Object.defineProperty({__proto__:null,Error:t,Info:s,LongContent:i,Success:a,Warning:r,WithCloseButton:o,WithoutTitle:n,__namedExportsOrder:S,default:_},Symbol.toStringTag,{value:"Module"}));export{N as A,t as E,s as I,a as S,r as W,n as a,o as b};
