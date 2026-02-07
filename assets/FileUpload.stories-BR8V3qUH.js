import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-fdxM1ERH.js";import{P as e}from"./index-sje0GWSz.js";import{B as x}from"./Button-DXug8p0h.js";const c=({label:p,buttonLabel:g="ファイルを選択",accept:y,multiple:h=!1,disabled:r=!1,onChange:m,className:_="",iconName:L,iconPosition:v})=>{const u=b.useRef(null),[d,N]=b.useState(null),I=()=>{u.current?.click()},T=i=>{const f=i.target.files;N(f),m&&m(f)},j=d?Array.from(d).map(i=>i.name).join(", "):"選択されていません";return a.jsxs("div",{className:`wim-file-upload ${_}`,children:[p&&a.jsx("span",{className:"wim-file-upload__label",children:p}),a.jsxs("div",{className:"wim-file-upload__controls",children:[a.jsx("input",{type:"file",ref:u,accept:y,multiple:h,disabled:r,onChange:T,className:"wim-file-upload__input","aria-hidden":"true",tabIndex:-1}),a.jsx(x,{label:g,onClick:I,state:r?"disabled":"abled",priority:"secondary",iconName:L,iconPosition:v}),a.jsx("span",{className:`wim-file-upload__file-names ${r?"wim-file-upload__file-names--disabled":""}`,children:j})]})]})};c.propTypes={label:e.string,buttonLabel:e.string,accept:e.string,multiple:e.bool,disabled:e.bool,onChange:e.func,className:e.string,iconName:e.string,iconPosition:e.oneOf(["left","right"])};c.__docgenInfo={description:"ユーザーがファイルを選択・アップロードするためのコンポーネント。",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:"コンポーネントのラベル。",type:{name:"string"}},buttonLabel:{required:!1,tsType:{name:"string"},description:"ボタンに表示するテキスト。",defaultValue:{value:'"ファイルを選択"',computed:!1},type:{name:"string"}},accept:{required:!1,tsType:{name:"string"},description:'受け付けるファイル形式（例: ".jpg,.png"）。',type:{name:"string"}},multiple:{required:!1,tsType:{name:"boolean"},description:"複数のファイル選択を許可するかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"ファイルが選択された時に呼ばれるコールバック。",type:{name:"func"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。",defaultValue:{value:'""',computed:!1},type:{name:"string"}},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"アイコンの名前。",type:{name:"string"}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"アイコンの表示位置。",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}}}};const C={title:"Component/Data Entry/FileUpload",component:c,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},iconName:{control:"select",options:["UploadIcon","CheckIcon","CopyIcon","SearchIcon"]},iconPosition:{control:"radio",options:["left","right"]}}},t={args:{label:"プロフィール画像",buttonLabel:"画像を選択"}},n={args:{label:"ドキュメントアップロード",buttonLabel:"ファイルを選択",multiple:!0}},s={args:{label:"画像のみアップロード",buttonLabel:"画像を選択",accept:"image/*"}},l={args:{label:"無効なアップロード",buttonLabel:"ファイルを選択",disabled:!0}},o={args:{label:"アイコン付き",buttonLabel:"アップロード",iconName:"UploadIcon",iconPosition:"left"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "プロフィール画像",
    buttonLabel: "画像を選択"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "ドキュメントアップロード",
    buttonLabel: "ファイルを選択",
    multiple: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "画像のみアップロード",
    buttonLabel: "画像を選択",
    accept: "image/*"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "無効なアップロード",
    buttonLabel: "ファイルを選択",
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "アイコン付き",
    buttonLabel: "アップロード",
    iconName: "UploadIcon",
    iconPosition: "left"
  }
}`,...o.parameters?.docs?.source}}};const F=["Default","Multiple","AcceptImages","Disabled","WithIcon"],U=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:s,Default:t,Disabled:l,Multiple:n,WithIcon:o,__namedExportsOrder:F,default:C},Symbol.toStringTag,{value:"Module"}));export{s as A,t as D,U as F,n as M,o as W,l as a};
