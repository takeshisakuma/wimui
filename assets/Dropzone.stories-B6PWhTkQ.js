import{r as u,j as a}from"./react-D-G-yZ1o.js";import{P as s}from"./prop-types-CamVAYe7.js";import{I as S}from"./Icon-CjB8TZ2o.js";const g=({label:f,description:D="ここにファイルをドラッグ＆ドロップ、またはクリックして選択",accept:h,multiple:v=!1,disabled:n=!1,onChange:p,className:x="",iconName:y="UploadIcon"})=>{const b=u.useRef(null),[I,m]=u.useState(!1),[d,_]=u.useState(null),z=()=>{n||b.current?.click()},j=e=>{e.preventDefault(),!n&&m(!0)},w=()=>{m(!1)},N=e=>{if(e.preventDefault(),m(!1),n)return;const r=e.dataTransfer.files;_(r),p&&p(r)},T=e=>{const r=e.target.files;_(r),p&&p(r)},C=["wim-dropzone",I?"wim-dropzone--dragging":"",n?"wim-dropzone--disabled":""].filter(Boolean).join(" ");return a.jsxs("div",{className:`wim-dropzone-container ${x}`,children:[f&&a.jsx("span",{className:"wim-dropzone__label",children:f}),a.jsxs("div",{className:C,onClick:z,onDragOver:j,onDragLeave:w,onDrop:N,role:"button",tabIndex:n?-1:0,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&z()},children:[a.jsx("input",{type:"file",ref:b,accept:h,multiple:v,disabled:n,onChange:T,className:"wim-dropzone__input","aria-hidden":"true",tabIndex:-1}),a.jsxs("div",{className:"wim-dropzone__content",children:[y&&a.jsx(S,{name:y,size:"large",className:"wim-dropzone__icon",color:n?"disabled":"primary"}),a.jsx("p",{className:"wim-dropzone__description",children:D}),d&&d.length>0&&a.jsx("div",{className:"wim-dropzone__file-list",children:Array.from(d).map((e,r)=>a.jsx("span",{className:"wim-dropzone__file-name",children:e.name},r))})]})]})]})};g.propTypes={label:s.string,description:s.string,accept:s.string,multiple:s.bool,disabled:s.bool,onChange:s.func,className:s.string,iconName:s.string};g.__docgenInfo={description:"ユーザーがファイルをドラッグ＆ドロップまたはクリックでアップロードするためのコンポーネント。",methods:[],displayName:"Dropzone",props:{label:{required:!1,tsType:{name:"string"},description:"コンポーネントのラベル。",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"ドラッグ＆ドロップエリアに表示する説明テキスト。",defaultValue:{value:'"ここにファイルをドラッグ＆ドロップ、またはクリックして選択"',computed:!1},type:{name:"string"}},accept:{required:!1,tsType:{name:"string"},description:'受け付けるファイル形式（例: ".jpg,.png"）。',type:{name:"string"}},multiple:{required:!1,tsType:{name:"boolean"},description:"複数のファイル選択を許可するかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"ファイルが選択された時に呼ばれるコールバック。",type:{name:"func"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。",defaultValue:{value:'""',computed:!1},type:{name:"string"}},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"アイコンの名前。",defaultValue:{value:'"UploadIcon"',computed:!1},type:{name:"string"}}}};const q={title:"Component/Form Inputs/Dropzone",component:g,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},o={args:{label:"ファイルアップロード"}},t={args:{label:"複数ファイルアップロード",multiple:!0,description:"複数のファイルをドラッグ＆ドロップできます"}},i={args:{label:"画像のみアップロード",accept:"image/*",description:"画像ファイルをドラッグ＆ドロップしてください"}},l={args:{label:"無効状態",disabled:!0,description:"現在はアップロードできません"}},c={args:{label:"カスタムアイコン",iconName:"MaximizeIcon",description:"カスタムアイコンを使用したドロップゾーン"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "ファイルアップロード"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "複数ファイルアップロード",
    multiple: true,
    description: "複数のファイルをドラッグ＆ドロップできます"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "画像のみアップロード",
    accept: "image/*",
    description: "画像ファイルをドラッグ＆ドロップしてください"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "無効状態",
    disabled: true,
    description: "現在はアップロードできません"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "カスタムアイコン",
    iconName: "MaximizeIcon",
    description: "カスタムアイコンを使用したドロップゾーン"
  }
}`,...c.parameters?.docs?.source}}};const F=["Default","Multiple","AcceptImages","Disabled","CustomIcon"],O=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:i,CustomIcon:c,Default:o,Disabled:l,Multiple:t,__namedExportsOrder:F,default:q},Symbol.toStringTag,{value:"Module"}));export{i as A,O as D,t as M,o as a,l as b};
