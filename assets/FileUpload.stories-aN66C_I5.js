import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe-DucY8PCr.js";import{c as g}from"./index-CYKEKBJn.js";import{B as j}from"./Button-Bu6XmuGh.js";const b=({label:c,buttonLabel:y="ファイルを選択",accept:_,multiple:h=!1,disabled:o=!1,onChange:m,className:I,iconName:v,iconPosition:N,size:r="medium"})=>{const u=f.useRef(null),[p,L]=f.useState(null),w=()=>{u.current?.click()},x=i=>{const d=i.target.files;L(d),m&&m(d)},T=p?Array.from(p).map(i=>i.name).join(", "):"選択されていません";return e.jsxs("div",{className:g("wim-file-upload",`wim-file-upload--${r}`,I),children:[c&&e.jsx("span",{className:"wim-file-upload__label",children:c}),e.jsxs("div",{className:"wim-file-upload__controls",children:[e.jsx("input",{type:"file",ref:u,accept:_,multiple:h,disabled:o,onChange:x,className:"wim-file-upload__input","aria-hidden":"true",tabIndex:-1}),e.jsx(j,{label:y,onClick:w,state:o?"disabled":"abled",priority:"secondary",iconName:v,iconPosition:N,size:r}),e.jsx("span",{className:g("wim-file-upload__file-names",`wim-file-upload__file-names--${r}`,o&&"wim-file-upload__file-names--disabled"),children:T})]})]})};b.__docgenInfo={description:"ユーザーがファイルを選択・アップロードするためのコンポーネント。",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:""},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"ファイルを選択"',computed:!1}},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}}}};const F={title:"Components/Advanced Inputs/FileUpload",component:b,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},iconName:{control:"select",options:["UploadIcon","CheckIcon","CopyIcon","SearchIcon"]},iconPosition:{control:"radio",options:["left","right"]},size:{control:"select",options:["small","medium","large"]}}},a={args:{label:"プロフィール画像",buttonLabel:"画像を選択"}},l={args:{label:"ドキュメントアップロード",buttonLabel:"ファイルを選択",multiple:!0}},s={args:{label:"画像のみアップロード",buttonLabel:"画像を選択",accept:"image/*",iconName:"ImageIcon",size:"large"}},n={args:{label:"無効なアップロード",buttonLabel:"ファイルを選択",disabled:!0}},t={args:{label:"アイコン付き",buttonLabel:"アップロード",iconName:"UploadIcon",iconPosition:"left",size:"large"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "プロフィール画像",
    buttonLabel: "画像を選択"
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "ドキュメントアップロード",
    buttonLabel: "ファイルを選択",
    multiple: true
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "画像のみアップロード",
    buttonLabel: "画像を選択",
    accept: "image/*",
    iconName: "ImageIcon",
    size: "large"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "無効なアップロード",
    buttonLabel: "ファイルを選択",
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "アイコン付き",
    buttonLabel: "アップロード",
    iconName: "UploadIcon",
    iconPosition: "left",
    size: "large"
  }
}`,...t.parameters?.docs?.source}}};const S=["Default","Multiple","AcceptImages","Disabled","WithIcon"],z=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:s,Default:a,Disabled:n,Multiple:l,WithIcon:t,__namedExportsOrder:S,default:F},Symbol.toStringTag,{value:"Module"}));export{s as A,a as D,z as F,l as M,t as W,n as a};
