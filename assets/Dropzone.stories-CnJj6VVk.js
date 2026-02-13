import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-BpxzmZ_b.js";import{c as b}from"./index-CdxShSER.js";import{I as S}from"./Icon-HQ9_rTer.js";const D=({label:u,description:z="ここにファイルをドラッグ＆ドロップ、またはクリックして選択",accept:x,multiple:h=!1,disabled:r=!1,onChange:c,className:v,iconName:f="UploadIcon"})=>{const g=d.useRef(null),[I,p]=d.useState(!1),[m,y]=d.useState(null),_=()=>{r||g.current?.click()},w=e=>{e.preventDefault(),!r&&p(!0)},j=()=>{p(!1)},N=e=>{if(e.preventDefault(),p(!1),r)return;const s=e.dataTransfer.files;y(s),c&&c(s)},T=e=>{const s=e.target.files;y(s),c&&c(s)};return a.jsxs("div",{className:b("wim-dropzone-container",v),children:[u&&a.jsx("span",{className:"wim-dropzone__label",children:u}),a.jsxs("div",{className:b("wim-dropzone",I&&"wim-dropzone--dragging",r&&"wim-dropzone--disabled"),onClick:_,onDragOver:w,onDragLeave:j,onDrop:N,role:"button",tabIndex:r?-1:0,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&_()},children:[a.jsx("input",{type:"file",ref:g,accept:x,multiple:h,disabled:r,onChange:T,className:"wim-dropzone__input","aria-hidden":"true",tabIndex:-1}),a.jsxs("div",{className:"wim-dropzone__content",children:[f&&a.jsx(S,{name:f,size:"large",className:"wim-dropzone__icon",color:r?"disabled":"primary"}),a.jsx("p",{className:"wim-dropzone__description",children:z}),m&&m.length>0&&a.jsx("div",{className:"wim-dropzone__file-list",children:Array.from(m).map((e,s)=>a.jsx("span",{className:"wim-dropzone__file-name",children:e.name},s))})]})]})]})};D.__docgenInfo={description:"ユーザーがファイルをドラッグ＆ドロップまたはクリックでアップロードするためのコンポーネント。",methods:[],displayName:"Dropzone",props:{label:{required:!1,tsType:{name:"string"},description:"コンポーネントのラベル。"},description:{required:!1,tsType:{name:"string"},description:"ドラッグ＆ドロップエリアに表示する説明テキスト。",defaultValue:{value:'"ここにファイルをドラッグ＆ドロップ、またはクリックして選択"',computed:!1}},accept:{required:!1,tsType:{name:"string"},description:'受け付けるファイル形式（例: ".jpg,.png"）。'},multiple:{required:!1,tsType:{name:"boolean"},description:"複数のファイル選択を許可するかどうか。",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか。",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"ファイルが選択された時に呼ばれるコールバック。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。"},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"アイコンの名前。",defaultValue:{value:'"UploadIcon"',computed:!1}}}};const q={title:"Component/Form Inputs/Dropzone",component:D,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},n={args:{label:"ファイルアップロード"}},o={args:{label:"複数ファイルアップロード",multiple:!0,description:"複数のファイルをドラッグ＆ドロップできます"}},t={args:{label:"画像のみアップロード",accept:"image/*",description:"画像ファイルをドラッグ＆ドロップしてください"}},i={args:{label:"無効状態",disabled:!0,description:"現在はアップロードできません"}},l={args:{label:"カスタムアイコン",iconName:"MaximizeIcon",description:"カスタムアイコンを使用したドロップゾーン"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    description: "画像ファイルをドラッグ＆ドロップしてください"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "無効状態",
    disabled: true,
    description: "現在はアップロードできません"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "カスタムアイコン",
    iconName: "MaximizeIcon",
    description: "カスタムアイコンを使用したドロップゾーン"
  }
}`,...l.parameters?.docs?.source}}};const C=["Default","Multiple","AcceptImages","Disabled","CustomIcon"],O=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:t,CustomIcon:l,Default:n,Disabled:i,Multiple:o,__namedExportsOrder:C,default:q},Symbol.toStringTag,{value:"Module"}));export{t as A,O as D,o as M,n as a,i as b};
