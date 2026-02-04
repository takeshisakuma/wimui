import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe-Dv7uN4wz.js";import{P as e}from"./index-2o_Xs7SK.js";import{B as F}from"./Button-CE79wNHm.js";const i=({label:p,buttonLabel:b="ファイルを選択",accept:g,multiple:y=!1,disabled:r=!1,onChange:c,className:_=""})=>{const u=f.useRef(null),[m,h]=f.useState(null),L=()=>{u.current?.click()},j=o=>{const d=o.target.files;h(d),c&&c(d)},x=m?Array.from(m).map(o=>o.name).join(", "):"選択されていません";return a.jsxs("div",{className:`wim-file-upload ${_}`,children:[p&&a.jsx("span",{className:"wim-file-upload__label",children:p}),a.jsxs("div",{className:"wim-file-upload__controls",children:[a.jsx("input",{type:"file",ref:u,accept:g,multiple:y,disabled:r,onChange:j,className:"wim-file-upload__input","aria-hidden":"true",tabIndex:-1}),a.jsx(F,{label:b,onClick:L,state:r?"disabled":"abled",priority:"secondary"}),a.jsx("span",{className:`wim-file-upload__file-names ${r?"wim-file-upload__file-names--disabled":""}`,children:x})]})]})};i.propTypes={label:e.string,buttonLabel:e.string,accept:e.string,multiple:e.bool,disabled:e.bool,onChange:e.func,className:e.string};i.__docgenInfo={description:"ユーザーがファイルを選択・アップロードするためのコンポーネント。",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:"コンポーネントのラベル。",type:{name:"string"}},buttonLabel:{required:!1,tsType:{name:"string"},description:"ボタンに表示するテキスト。",defaultValue:{value:'"ファイルを選択"',computed:!1},type:{name:"string"}},accept:{required:!1,tsType:{name:"string"},description:'受け付けるファイル形式（例: ".jpg,.png"）。',type:{name:"string"}},multiple:{required:!1,tsType:{name:"boolean"},description:"複数のファイル選択を許可するかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"ファイルが選択された時に呼ばれるコールバック。",type:{name:"func"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const T={title:"Component/Forms/FileUpload",component:i,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},s={args:{label:"プロフィール画像",buttonLabel:"画像を選択"}},t={args:{label:"ドキュメントアップロード",buttonLabel:"ファイルを選択",multiple:!0}},l={args:{label:"画像のみアップロード",buttonLabel:"画像を選択",accept:"image/*"}},n={args:{label:"無効なアップロード",buttonLabel:"ファイルを選択",disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "プロフィール画像",
    buttonLabel: "画像を選択"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "ドキュメントアップロード",
    buttonLabel: "ファイルを選択",
    multiple: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "画像のみアップロード",
    buttonLabel: "画像を選択",
    accept: "image/*"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "無効なアップロード",
    buttonLabel: "ファイルを選択",
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};const v=["Default","Multiple","AcceptImages","Disabled"],C=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:l,Default:s,Disabled:n,Multiple:t,__namedExportsOrder:v,default:T},Symbol.toStringTag,{value:"Module"}));export{l as A,s as D,C as F,t as M,n as a};
