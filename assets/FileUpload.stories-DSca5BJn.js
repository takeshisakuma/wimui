import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as L,A as d}from"./iframe-C6uXs91S.js";import{c as F}from"./index-H3n4JP4B.js";import{B as q}from"./Button-3FvXt4VH.js";import{F as E}from"./FieldTemplate-BHXWM6Xi.js";import{u as c}from"./useTranslation-C0kP2ZiX.js";const o=({label:t,buttonLabel:a="Choose File",noFileLabel:e="No file chosen",accept:N,multiple:R=!1,disabled:p=!1,onChange:_,className:h,iconName:A,iconPosition:v,size:m="md",error:S,required:T,layout:C="vertical"})=>{const b=L.useRef(null),[y,I]=L.useState(null),w=()=>{b.current?.click()},x=f=>{const g=f.target.files;I(g),_&&_(g)},j=y?Array.from(y).map(f=>f.name).join(", "):e;return l.jsx(E,{label:t,error:S,required:T,layout:C,className:F("wim-file-upload",`wim-file-upload--${m}`,h),children:l.jsxs("div",{className:"wim-file-upload__controls",children:[l.jsx("input",{type:"file",ref:b,accept:N,multiple:R,disabled:p,onChange:x,className:"wim-file-upload__input","aria-hidden":"true",tabIndex:-1}),l.jsx(q,{label:a,onClick:w,disabled:p,variant:"outlined",icon:A,iconPosition:v,size:m}),l.jsx("span",{className:F("wim-file-upload__file-names",`wim-file-upload__file-names--${m}`,p&&"wim-file-upload__file-names--disabled"),children:j})]})})};o.__docgenInfo={description:"ユーザーがファイルを選択・アップロードするためのコンポーネント。",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttonLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Choose File"',computed:!1}},noFileLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No file chosen"',computed:!1}},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const P={title:"Components/Advanced Inputs/FileUpload",component:o,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},iconName:{control:"select",options:["UploadIcon","CheckIcon","CopyIcon","SearchIcon"]},iconPosition:{control:"radio",options:["left","right"]},size:{control:"radio",options:["sm","md","lg"]}}},n={render:function(a){const{t:e}=c(d);return l.jsx(o,{...a,label:e("story.fileupload_label_profile"),buttonLabel:e("story.fileupload_btn_image"),noFileLabel:e("story.fileupload_no_file")})}},r={render:function(a){const{t:e}=c(d);return l.jsx(o,{...a,label:e("story.fileupload_label_doc"),buttonLabel:e("story.fileupload_btn_file"),noFileLabel:e("story.fileupload_no_file"),multiple:!0})}},i={render:function(a){const{t:e}=c(d);return l.jsx(o,{...a,label:e("story.fileupload_label_image_only"),buttonLabel:e("story.fileupload_btn_image"),noFileLabel:e("story.fileupload_no_file"),accept:"image/*",iconName:"ImageIcon",size:"lg"})}},s={render:function(a){const{t:e}=c(d);return l.jsx(o,{...a,label:e("story.fileupload_label_disabled"),buttonLabel:e("story.fileupload_btn_file"),noFileLabel:e("story.fileupload_no_file"),disabled:!0})}},u={render:function(a){const{t:e}=c(d);return l.jsx(o,{...a,label:e("story.fileupload_label_icon"),buttonLabel:e("story.fileupload_btn_upload"),noFileLabel:e("story.fileupload_no_file"),iconName:"UploadIcon",iconPosition:"left",size:"lg"})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_profile")} buttonLabel={t("story.fileupload_btn_image")} noFileLabel={t("story.fileupload_no_file")} />;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_doc")} buttonLabel={t("story.fileupload_btn_file")} noFileLabel={t("story.fileupload_no_file")} multiple={true} />;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_image_only")} buttonLabel={t("story.fileupload_btn_image")} noFileLabel={t("story.fileupload_no_file")} accept="image/*" iconName="ImageIcon" size="lg" />;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_disabled")} buttonLabel={t("story.fileupload_btn_file")} noFileLabel={t("story.fileupload_no_file")} disabled={true} />;
  }
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_icon")} buttonLabel={t("story.fileupload_btn_upload")} noFileLabel={t("story.fileupload_no_file")} iconName="UploadIcon" iconPosition="left" size="lg" />;
  }
}`,...u.parameters?.docs?.source}}};const U=["Default","Multiple","AcceptImages","Disabled","WithIcon"],W=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:i,Default:n,Disabled:s,Multiple:r,WithIcon:u,__namedExportsOrder:U,default:P},Symbol.toStringTag,{value:"Module"}));export{i as A,n as D,W as F,r as M,u as W,s as a};
