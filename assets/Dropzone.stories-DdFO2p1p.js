import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-BYxLnS7Y.js";import{c as I}from"./index-CleHdb-W.js";import{I as T}from"./Icon-Bhc1gRDq.js";const _=({label:f,description:v="ここにファイルをドラッグ＆ドロップ、またはクリックして選択",accept:N,multiple:h=!1,disabled:r=!1,onChange:p,className:z,iconName:g="UploadIcon"})=>{const D=u.useRef(null),[x,d]=u.useState(!1),[m,b]=u.useState(null),y=()=>{r||D.current?.click()},w=e=>{e.preventDefault(),!r&&d(!0)},j=()=>{d(!1)},F=e=>{if(e.preventDefault(),d(!1),r)return;const s=e.dataTransfer.files;b(s),p&&p(s)},S=e=>{const s=e.target.files;b(s),p&&p(s)};return a.jsxs("div",{className:I("wim-dropzone-container",z),children:[f&&a.jsx("span",{className:"wim-dropzone__label",children:f}),a.jsxs("div",{className:I("wim-dropzone",x&&"wim-dropzone--dragging",r&&"wim-dropzone--disabled"),onClick:y,onDragOver:w,onDragLeave:j,onDrop:F,role:"button",tabIndex:r?-1:0,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&y()},children:[a.jsx("input",{type:"file",ref:D,accept:N,multiple:h,disabled:r,onChange:S,className:"wim-dropzone__input","aria-hidden":"true",tabIndex:-1}),a.jsxs("div",{className:"wim-dropzone__content",children:[g&&a.jsx(T,{name:g,size:"large",className:"wim-dropzone__icon",color:r?"disabled":"primary"}),a.jsx("p",{className:"wim-dropzone__description",children:v}),m&&m.length>0&&a.jsx("div",{className:"wim-dropzone__file-list",children:Array.from(m).map((e,s)=>a.jsx("span",{className:"wim-dropzone__file-name",children:e.name},s))})]})]})]})};_.__docgenInfo={description:"ユーザーがファイルをドラッグ＆ドロップまたはクリックでアップロードするためのコンポーネント。",methods:[],displayName:"Dropzone",props:{label:{required:!1,tsType:{name:"string"},description:"コンポーネントのラベル。"},description:{required:!1,tsType:{name:"string"},description:"ドラッグ＆ドロップエリアに表示する説明テキスト。",defaultValue:{value:'"ここにファイルをドラッグ＆ドロップ、またはクリックして選択"',computed:!1}},accept:{required:!1,tsType:{name:"string"},description:'受け付けるファイル形式（例: ".jpg,.png"）。'},multiple:{required:!1,tsType:{name:"boolean"},description:"複数のファイル選択を許可するかどうか。",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか。",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"ファイルが選択された時に呼ばれるコールバック。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。"},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"アイコンの名前。",defaultValue:{value:'"UploadIcon"',computed:!1}}}};const P={title:"Component/Advanced Inputs/Dropzone",component:_,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},n={args:{label:"ファイルアップロード"}},o={args:{label:"複数ファイルアップロード",multiple:!0,description:"複数のファイルをドラッグ＆ドロップできます"}},t={args:{label:"画像のみアップロード",accept:"image/*",iconName:"ImageIcon",description:"画像ファイルをドラッグ＆ドロップしてください"}},i={args:{label:"無効状態",disabled:!0,description:"現在はアップロードできません"}},c={args:{label:"PDFアップロード",iconName:"PdfIcon",accept:".pdf",description:"PDFファイルをドラッグ＆ドロップしてください"}},l={args:{label:"ビデオアップロード",iconName:"VideoIcon",accept:"video/*",description:"動画ファイルをドラッグ＆ドロップしてください"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "ファイルアップロード"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "複数ファイルアップロード",
    multiple: true,
    description: "複数のファイルをドラッグ＆ドロップできます"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "画像のみアップロード",
    accept: "image/*",
    iconName: "ImageIcon",
    description: "画像ファイルをドラッグ＆ドロップしてください"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "無効状態",
    disabled: true,
    description: "現在はアップロードできません"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "PDFアップロード",
    iconName: "PdfIcon",
    accept: ".pdf",
    description: "PDFファイルをドラッグ＆ドロップしてください"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "ビデオアップロード",
    iconName: "VideoIcon",
    accept: "video/*",
    description: "動画ファイルをドラッグ＆ドロップしてください"
  }
}`,...l.parameters?.docs?.source}}};const q=["Default","Multiple","AcceptImages","Disabled","CustomIcon","VideoUpload"],L=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:t,CustomIcon:c,Default:n,Disabled:i,Multiple:o,VideoUpload:l,__namedExportsOrder:q,default:P},Symbol.toStringTag,{value:"Module"}));export{t as A,L as D,o as M,n as a,i as b};
