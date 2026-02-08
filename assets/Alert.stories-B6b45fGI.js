import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as a}from"./index-CyF2BHNT.js";import{I as m}from"./Icon-CsOAjbJY.js";import{u as T}from"./utils-02Y0UBtw.js";const u=({title:p,description:l,variant:d="info",icon:g,onClose:f,className:y="",children:h,...w})=>{const{t:v}=T(),b=()=>g||(d==="success"?e.jsx(m,{name:"CheckIcon",size:"small"}):e.jsx(m,{name:"CircleIcon",size:"small"}));return e.jsxs("div",{className:["wim-alert",`wim-alert--${d}`,y].filter(Boolean).join(" "),role:"alert",...w,children:[e.jsx("div",{className:"wim-alert__icon",children:b()}),e.jsxs("div",{className:"wim-alert__content",children:[p&&e.jsx("h4",{className:"wim-alert__title",children:v(p)}),(l||h)&&e.jsx("div",{className:"wim-alert__description",children:l?v(l):h})]}),f&&e.jsx("button",{type:"button",className:"wim-alert__close",onClick:f,"aria-label":"Close",children:e.jsx(m,{name:"CloseIcon",size:"small"})})]})};u.propTypes={title:a.string,description:a.string,variant:a.oneOf(["info","success","warning","error"]),icon:a.node,onClose:a.func,className:a.string,children:a.node};u.__docgenInfo={description:"ユーザーに重要な情報を伝えるためのアラートコンポーネント。",methods:[],displayName:"Alert",props:{title:{required:!1,tsType:{name:"string"},description:"アラートのタイトル",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"アラートの説明文",type:{name:"string"}},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"アラートのバリアント",defaultValue:{value:'"info"',computed:!1},type:{name:"enum",value:[{value:'"info"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"error"',computed:!1}]}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カスタムアイコン。指定しない場合はバリアントに応じたデフォルトアイコンが表示されます。",type:{name:"node"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。",type:{name:"func"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名",defaultValue:{value:'""',computed:!1},type:{name:"string"}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素（説明文として扱われます）",type:{name:"node"}}}};const _={title:"Component/Feedback/Alert",component:u,tags:[],argTypes:{onClose:{action:"closed"}}},s={args:{variant:"info",title:"Information",description:"This is an informative message for the user."}},r={args:{variant:"success",title:"Success",description:"Your action has been completed successfully."}},t={args:{variant:"warning",title:"Warning",description:"Please be careful with this action."}},n={args:{variant:"error",title:"Error",description:"Something went wrong. Please try again later."}},o={args:{variant:"info",description:"This alert only has a description and no title."}},i={args:{variant:"success",title:"Dismissible Alert",description:"You can close this alert by clicking the button on the right.",onClose:()=>console.log("Alert closed")}},c={args:{variant:"info",title:"Update Available",description:"A new version of the software is available. Please update to get the latest features and security improvements. The update will take approximately 5 minutes to install.",onClose:()=>{}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Information",
    description: "This is an informative message for the user."
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    description: "Your action has been completed successfully."
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    description: "Please be careful with this action."
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Error",
    description: "Something went wrong. Please try again later."
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    description: "This alert only has a description and no title."
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Dismissible Alert",
    description: "You can close this alert by clicking the button on the right.",
    onClose: () => console.log("Alert closed")
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Update Available",
    description: "A new version of the software is available. Please update to get the latest features and security improvements. The update will take approximately 5 minutes to install.",
    onClose: () => {}
  }
}`,...c.parameters?.docs?.source}}};const S=["Info","Success","Warning","Error","WithoutTitle","WithCloseButton","LongContent"],N=Object.freeze(Object.defineProperty({__proto__:null,Error:n,Info:s,LongContent:c,Success:r,Warning:t,WithCloseButton:i,WithoutTitle:o,__namedExportsOrder:S,default:_},Symbol.toStringTag,{value:"Module"}));export{N as A,n as E,s as I,r as S,t as W,o as a,i as b};
