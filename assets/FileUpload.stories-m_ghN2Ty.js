import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as F}from"./iframe-SL2HqV3D.js";import{c as L}from"./index-30w8ikAG.js";import{B as S}from"./Button-DhroN8PM.js";import{u as t}from"./useTranslation-ZF4WB21B.js";const a=({label:n,buttonLabel:o,noFileLabel:e,accept:h,multiple:T=!1,disabled:u=!1,onChange:_,className:I,iconName:x,iconPosition:j,size:p="medium"})=>{const{t:m}=t("common"),b=F.useRef(null),[y,N]=F.useState(null),R=o??m("fileupload_button"),v=e??m("fileupload_no_file"),w=()=>{b.current?.click()},U=f=>{const g=f.target.files;N(g),_&&_(g)},q=y?Array.from(y).map(f=>f.name).join(", "):v;return l.jsxs("div",{className:L("wim-file-upload",`wim-file-upload--${p}`,I),children:[n&&l.jsx("span",{className:"wim-file-upload__label",children:m(n)}),l.jsxs("div",{className:"wim-file-upload__controls",children:[l.jsx("input",{type:"file",ref:b,accept:h,multiple:T,disabled:u,onChange:U,className:"wim-file-upload__input","aria-hidden":"true",tabIndex:-1}),l.jsx(S,{label:R,onClick:w,disabled:u,priority:"secondary",iconName:x,iconPosition:j,size:p}),l.jsx("span",{className:L("wim-file-upload__file-names",`wim-file-upload__file-names--${p}`,u&&"wim-file-upload__file-names--disabled"),children:q})]})]})};a.__docgenInfo={description:"ユーザーがファイルを選択・アップロードするためのコンポーネント。",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:""},buttonLabel:{required:!1,tsType:{name:"string"},description:""},noFileLabel:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}}}};const C={title:"Components/Advanced Inputs/FileUpload",component:a,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},iconName:{control:"select",options:["UploadIcon","CheckIcon","CopyIcon","SearchIcon"]},iconPosition:{control:"radio",options:["left","right"]},size:{control:"select",options:["small","medium","large"]}}},s={render:function(o){const{t:e}=t(["docs","common","components"]);return l.jsx(a,{...o,label:e("story_fileupload_label_profile"),buttonLabel:e("story_fileupload_btn_image"),noFileLabel:e("story_fileupload_no_file")})}},r={render:function(o){const{t:e}=t(["docs","common","components"]);return l.jsx(a,{...o,label:e("story_fileupload_label_doc"),buttonLabel:e("story_fileupload_btn_file"),noFileLabel:e("story_fileupload_no_file"),multiple:!0})}},i={render:function(o){const{t:e}=t(["docs","common","components"]);return l.jsx(a,{...o,label:e("story_fileupload_label_image_only"),buttonLabel:e("story_fileupload_btn_image"),noFileLabel:e("story_fileupload_no_file"),accept:"image/*",iconName:"ImageIcon",size:"large"})}},c={render:function(o){const{t:e}=t(["docs","common","components"]);return l.jsx(a,{...o,label:e("story_fileupload_label_disabled"),buttonLabel:e("story_fileupload_btn_file"),noFileLabel:e("story_fileupload_no_file"),disabled:!0})}},d={render:function(o){const{t:e}=t(["docs","common","components"]);return l.jsx(a,{...o,label:e("story_fileupload_label_icon"),buttonLabel:e("story_fileupload_btn_upload"),noFileLabel:e("story_fileupload_no_file"),iconName:"UploadIcon",iconPosition:"left",size:"large"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_profile")} buttonLabel={t("story_fileupload_btn_image")} noFileLabel={t("story_fileupload_no_file")} />;
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_doc")} buttonLabel={t("story_fileupload_btn_file")} noFileLabel={t("story_fileupload_no_file")} multiple={true} />;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <FileUpload {...args} label={t("story_fileupload_label_icon")} buttonLabel={t("story_fileupload_btn_upload")} noFileLabel={t("story_fileupload_no_file")} iconName="UploadIcon" iconPosition="left" size="large" />;
  }
}`,...d.parameters?.docs?.source}}};const P=["Default","Multiple","AcceptImages","Disabled","WithIcon"],B=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:i,Default:s,Disabled:c,Multiple:r,WithIcon:d,__namedExportsOrder:P,default:C},Symbol.toStringTag,{value:"Module"}));export{i as A,s as D,B as F,r as M,d as W,c as a};
