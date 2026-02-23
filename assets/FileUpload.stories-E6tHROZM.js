import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-Bvmj2LPw.js";import{c as f}from"./index-BwPY9p3m.js";import{B as F}from"./Button-B4F5BIgK.js";const b=({label:i,buttonLabel:g="ファイルを選択",accept:y,multiple:h=!1,disabled:l=!1,onChange:c,className:I,iconName:_,iconPosition:N})=>{const p=d.useRef(null),[m,L]=d.useState(null),x=()=>{p.current?.click()},j=r=>{const u=r.target.files;L(u),c&&c(u)},v=m?Array.from(m).map(r=>r.name).join(", "):"選択されていません";return e.jsxs("div",{className:f("wim-file-upload",I),children:[i&&e.jsx("span",{className:"wim-file-upload__label",children:i}),e.jsxs("div",{className:"wim-file-upload__controls",children:[e.jsx("input",{type:"file",ref:p,accept:y,multiple:h,disabled:l,onChange:j,className:"wim-file-upload__input","aria-hidden":"true",tabIndex:-1}),e.jsx(F,{label:g,onClick:x,state:l?"disabled":"abled",priority:"secondary",iconName:_,iconPosition:N}),e.jsx("span",{className:f("wim-file-upload__file-names",l&&"wim-file-upload__file-names--disabled"),children:v})]})]})};b.__docgenInfo={description:"ユーザーがファイルを選択・アップロードするためのコンポーネント。",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:""},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"ファイルを選択"',computed:!1}},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""}}};const S={title:"Component/Advanced Inputs/FileUpload",component:b,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},iconName:{control:"select",options:["UploadIcon","CheckIcon","CopyIcon","SearchIcon"]},iconPosition:{control:"radio",options:["left","right"]}}},a={args:{label:"プロフィール画像",buttonLabel:"画像を選択"}},s={args:{label:"ドキュメントアップロード",buttonLabel:"ファイルを選択",multiple:!0}},n={args:{label:"画像のみアップロード",buttonLabel:"画像を選択",accept:"image/*",iconName:"ImageIcon"}},t={args:{label:"無効なアップロード",buttonLabel:"ファイルを選択",disabled:!0}},o={args:{label:"アイコン付き",buttonLabel:"アップロード",iconName:"UploadIcon",iconPosition:"left"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "プロフィール画像",
    buttonLabel: "画像を選択"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "ドキュメントアップロード",
    buttonLabel: "ファイルを選択",
    multiple: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "画像のみアップロード",
    buttonLabel: "画像を選択",
    accept: "image/*",
    iconName: "ImageIcon"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "無効なアップロード",
    buttonLabel: "ファイルを選択",
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "アイコン付き",
    buttonLabel: "アップロード",
    iconName: "UploadIcon",
    iconPosition: "left"
  }
}`,...o.parameters?.docs?.source}}};const T=["Default","Multiple","AcceptImages","Disabled","WithIcon"],U=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:n,Default:a,Disabled:t,Multiple:s,WithIcon:o,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{n as A,a as D,U as F,s as M,o as W,t as a};
