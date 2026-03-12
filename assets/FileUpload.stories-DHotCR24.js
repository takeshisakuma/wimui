import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as F}from"./iframe-BisTGuVC.js";import{c as L}from"./index-Ckw0h7AD.js";import{B as P}from"./Button-DcecViuG.js";import{F as A}from"./FieldTemplate-DQGW8oml.js";import{u as t}from"./useTranslation-BH3LN071.js";const n=({label:a,buttonLabel:o,noFileLabel:e,accept:T,multiple:v=!1,disabled:d=!1,onChange:_,className:h,iconName:I,iconPosition:x,size:m="medium",error:j,required:q,layout:N="vertical"})=>{const{t:p}=t("common"),b=F.useRef(null),[y,R]=F.useState(null),w=o??p("fileupload_button"),U=e??p("fileupload_no_file"),S=()=>{b.current?.click()},C=f=>{const g=f.target.files;R(g),_&&_(g)},z=y?Array.from(y).map(f=>f.name).join(", "):U;return l.jsx(A,{label:a?p(a):void 0,error:j,required:q,layout:N,className:L("wim-file-upload",`wim-file-upload--${m}`,h),children:l.jsxs("div",{className:"wim-file-upload__controls",children:[l.jsx("input",{type:"file",ref:b,accept:T,multiple:v,disabled:d,onChange:C,className:"wim-file-upload__input","aria-hidden":"true",tabIndex:-1}),l.jsx(P,{label:w,onClick:S,disabled:d,priority:"secondary",iconName:I,iconPosition:x,size:m}),l.jsx("span",{className:L("wim-file-upload__file-names",`wim-file-upload__file-names--${m}`,d&&"wim-file-upload__file-names--disabled"),children:z})]})})};n.__docgenInfo={description:"ユーザーがファイルを選択・アップロードするためのコンポーネント。",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:""},buttonLabel:{required:!1,tsType:{name:"string"},description:""},noFileLabel:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const D={title:"Components/Advanced Inputs/FileUpload",component:n,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},iconName:{control:"select",options:["UploadIcon","CheckIcon","CopyIcon","SearchIcon"]},iconPosition:{control:"radio",options:["left","right"]},size:{control:"select",options:["small","medium","large"]}}},r={render:function(o){const{t:e}=t(["docs","common","components"]);return l.jsx(n,{...o,label:e("story_fileupload_label_profile"),buttonLabel:e("story_fileupload_btn_image"),noFileLabel:e("story_fileupload_no_file")})}},s={render:function(o){const{t:e}=t(["docs","common","components"]);return l.jsx(n,{...o,label:e("story_fileupload_label_doc"),buttonLabel:e("story_fileupload_btn_file"),noFileLabel:e("story_fileupload_no_file"),multiple:!0})}},i={render:function(o){const{t:e}=t(["docs","common","components"]);return l.jsx(n,{...o,label:e("story_fileupload_label_image_only"),buttonLabel:e("story_fileupload_btn_image"),noFileLabel:e("story_fileupload_no_file"),accept:"image/*",iconName:"ImageIcon",size:"large"})}},c={render:function(o){const{t:e}=t(["docs","common","components"]);return l.jsx(n,{...o,label:e("story_fileupload_label_disabled"),buttonLabel:e("story_fileupload_btn_file"),noFileLabel:e("story_fileupload_no_file"),disabled:!0})}},u={render:function(o){const{t:e}=t(["docs","common","components"]);return l.jsx(n,{...o,label:e("story_fileupload_label_icon"),buttonLabel:e("story_fileupload_btn_upload"),noFileLabel:e("story_fileupload_no_file"),iconName:"UploadIcon",iconPosition:"left",size:"large"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_profile")} buttonLabel={t("story_fileupload_btn_image")} noFileLabel={t("story_fileupload_no_file")} />;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_doc")} buttonLabel={t("story_fileupload_btn_file")} noFileLabel={t("story_fileupload_no_file")} multiple={true} />;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_image_only")} buttonLabel={t("story_fileupload_btn_image")} noFileLabel={t("story_fileupload_no_file")} accept="image/*" iconName="ImageIcon" size="large" />;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_disabled")} buttonLabel={t("story_fileupload_btn_file")} noFileLabel={t("story_fileupload_no_file")} disabled={true} />;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_icon")} buttonLabel={t("story_fileupload_btn_upload")} noFileLabel={t("story_fileupload_no_file")} iconName="UploadIcon" iconPosition="left" size="large" />;
  }
}`,...u.parameters?.docs?.source}}};const k=["Default","Multiple","AcceptImages","Disabled","WithIcon"],$=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:i,Default:r,Disabled:c,Multiple:s,WithIcon:u,__namedExportsOrder:k,default:D},Symbol.toStringTag,{value:"Module"}));export{i as A,r as D,$ as F,s as M,u as W,c as a};
