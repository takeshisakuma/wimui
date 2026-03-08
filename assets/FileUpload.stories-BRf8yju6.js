import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-DUo8Bj02.js";import{c as F}from"./index-CI1dtVTQ.js";import{B as w}from"./Button-rFGJ_NsL.js";import{u as d}from"./useTranslation-C2tw1dPV.js";const n=({label:a,buttonLabel:o="ファイルを選択",noFileLabel:e="選択されていません",accept:L,multiple:h=!1,disabled:u=!1,onChange:f,className:T,iconName:I,iconPosition:x,size:p="medium"})=>{const _=g.useRef(null),[b,j]=g.useState(null),v=()=>{_.current?.click()},N=m=>{const y=m.target.files;j(y),f&&f(y)},R=b?Array.from(b).map(m=>m.name).join(", "):e;return l.jsxs("div",{className:F("wim-file-upload",`wim-file-upload--${p}`,T),children:[a&&l.jsx("span",{className:"wim-file-upload__label",children:a}),l.jsxs("div",{className:"wim-file-upload__controls",children:[l.jsx("input",{type:"file",ref:_,accept:L,multiple:h,disabled:u,onChange:N,className:"wim-file-upload__input","aria-hidden":"true",tabIndex:-1}),l.jsx(w,{label:o,onClick:v,state:u?"disabled":"abled",priority:"secondary",iconName:I,iconPosition:x,size:p}),l.jsx("span",{className:F("wim-file-upload__file-names",`wim-file-upload__file-names--${p}`,u&&"wim-file-upload__file-names--disabled"),children:R})]})]})};n.__docgenInfo={description:"ユーザーがファイルを選択・アップロードするためのコンポーネント。",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:""},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"ファイルを選択"',computed:!1}},noFileLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"選択されていません"',computed:!1}},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}}}};const U={title:"Components/Advanced Inputs/FileUpload",component:n,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},iconName:{control:"select",options:["UploadIcon","CheckIcon","CopyIcon","SearchIcon"]},iconPosition:{control:"radio",options:["left","right"]},size:{control:"select",options:["small","medium","large"]}}},t={render:function(o){const{t:e}=d(["docs","common","components"]);return l.jsx(n,{...o,label:e("story_fileupload_label_profile"),buttonLabel:e("story_fileupload_btn_image"),noFileLabel:e("story_fileupload_no_file")})}},s={render:function(o){const{t:e}=d(["docs","common","components"]);return l.jsx(n,{...o,label:e("story_fileupload_label_doc"),buttonLabel:e("story_fileupload_btn_file"),noFileLabel:e("story_fileupload_no_file"),multiple:!0})}},r={render:function(o){const{t:e}=d(["docs","common","components"]);return l.jsx(n,{...o,label:e("story_fileupload_label_image_only"),buttonLabel:e("story_fileupload_btn_image"),noFileLabel:e("story_fileupload_no_file"),accept:"image/*",iconName:"ImageIcon",size:"large"})}},i={render:function(o){const{t:e}=d(["docs","common","components"]);return l.jsx(n,{...o,label:e("story_fileupload_label_disabled"),buttonLabel:e("story_fileupload_btn_file"),noFileLabel:e("story_fileupload_no_file"),disabled:!0})}},c={render:function(o){const{t:e}=d(["docs","common","components"]);return l.jsx(n,{...o,label:e("story_fileupload_label_icon"),buttonLabel:e("story_fileupload_btn_upload"),noFileLabel:e("story_fileupload_no_file"),iconName:"UploadIcon",iconPosition:"left",size:"large"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_profile")} buttonLabel={t("story_fileupload_btn_image")} noFileLabel={t("story_fileupload_no_file")} />;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_doc")} buttonLabel={t("story_fileupload_btn_file")} noFileLabel={t("story_fileupload_no_file")} multiple={true} />;
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_image_only")} buttonLabel={t("story_fileupload_btn_image")} noFileLabel={t("story_fileupload_no_file")} accept="image/*" iconName="ImageIcon" size="large" />;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_disabled")} buttonLabel={t("story_fileupload_btn_file")} noFileLabel={t("story_fileupload_no_file")} disabled={true} />;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_icon")} buttonLabel={t("story_fileupload_btn_upload")} noFileLabel={t("story_fileupload_no_file")} iconName="UploadIcon" iconPosition="left" size="large" />;
  }
}`,...c.parameters?.docs?.source}}};const q=["Default","Multiple","AcceptImages","Disabled","WithIcon"],D=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:r,Default:t,Disabled:i,Multiple:s,WithIcon:c,__namedExportsOrder:q,default:U},Symbol.toStringTag,{value:"Module"}));export{r as A,t as D,D as F,s as M,c as W,i as a};
