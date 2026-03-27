import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as F,A as c}from"./iframe-tWK6G2pl.js";import{c as A}from"./index-noBToutl.js";import{B as U}from"./Button-BKBA0sIz.js";import{F as M}from"./FieldTemplate-C4YKNPWS.js";import{u as t}from"./useTranslation-C9hYRQzo.js";const n=({label:o,buttonLabel:l,noFileLabel:e,accept:S,multiple:T=!1,disabled:p=!1,onChange:b,className:v,iconName:N,iconPosition:h,size:m="medium",error:I,required:x,layout:C="vertical"})=>{const{t:f}=t("common"),y=F.useRef(null),[g,j]=F.useState(null),q=l??f("fileupload_button"),E=e??f("fileupload_no_file"),R=()=>{y.current?.click()},w=_=>{const L=_.target.files;j(L),b&&b(L)},P=g?Array.from(g).map(_=>_.name).join(", "):E;return a.jsx(M,{label:o?f(o):void 0,error:I,required:x,layout:C,className:A("wim-file-upload",`wim-file-upload--${m}`,v),children:a.jsxs("div",{className:"wim-file-upload__controls",children:[a.jsx("input",{type:"file",ref:y,accept:S,multiple:T,disabled:p,onChange:w,className:"wim-file-upload__input","aria-hidden":"true",tabIndex:-1}),a.jsx(U,{label:q,onClick:R,disabled:p,priority:"secondary",iconName:N,iconPosition:h,size:m}),a.jsx("span",{className:A("wim-file-upload__file-names",`wim-file-upload__file-names--${m}`,p&&"wim-file-upload__file-names--disabled"),children:P})]})})};n.__docgenInfo={description:"ユーザーがファイルを選択・アップロードするためのコンポーネント。",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:""},buttonLabel:{required:!1,tsType:{name:"string"},description:""},noFileLabel:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const z={title:"Components/Advanced Inputs/FileUpload",component:n,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},iconName:{control:"select",options:["UploadIcon","CheckIcon","CopyIcon","SearchIcon"]},iconPosition:{control:"radio",options:["left","right"]},size:{control:"select",options:["small","medium","large"]}}},r={render:function(l){const{t:e}=t(c);return a.jsx(n,{...l,label:e("story_fileupload_label_profile"),buttonLabel:e("story_fileupload_btn_image"),noFileLabel:e("story_fileupload_no_file")})}},i={render:function(l){const{t:e}=t(c);return a.jsx(n,{...l,label:e("story_fileupload_label_doc"),buttonLabel:e("story_fileupload_btn_file"),noFileLabel:e("story_fileupload_no_file"),multiple:!0})}},s={render:function(l){const{t:e}=t(c);return a.jsx(n,{...l,label:e("story_fileupload_label_image_only"),buttonLabel:e("story_fileupload_btn_image"),noFileLabel:e("story_fileupload_no_file"),accept:"image/*",iconName:"ImageIcon",size:"large"})}},u={render:function(l){const{t:e}=t(c);return a.jsx(n,{...l,label:e("story_fileupload_label_disabled"),buttonLabel:e("story_fileupload_btn_file"),noFileLabel:e("story_fileupload_no_file"),disabled:!0})}},d={render:function(l){const{t:e}=t(c);return a.jsx(n,{...l,label:e("story_fileupload_label_icon"),buttonLabel:e("story_fileupload_btn_upload"),noFileLabel:e("story_fileupload_no_file"),iconName:"UploadIcon",iconPosition:"left",size:"large"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story_fileupload_label_profile")} buttonLabel={t("story_fileupload_btn_image")} noFileLabel={t("story_fileupload_no_file")} />;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story_fileupload_label_doc")} buttonLabel={t("story_fileupload_btn_file")} noFileLabel={t("story_fileupload_no_file")} multiple={true} />;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story_fileupload_label_image_only")} buttonLabel={t("story_fileupload_btn_image")} noFileLabel={t("story_fileupload_no_file")} accept="image/*" iconName="ImageIcon" size="large" />;
  }
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story_fileupload_label_disabled")} buttonLabel={t("story_fileupload_btn_file")} noFileLabel={t("story_fileupload_no_file")} disabled={true} />;
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story_fileupload_label_icon")} buttonLabel={t("story_fileupload_btn_upload")} noFileLabel={t("story_fileupload_no_file")} iconName="UploadIcon" iconPosition="left" size="large" />;
  }
}`,...d.parameters?.docs?.source}}};const D=["Default","Multiple","AcceptImages","Disabled","WithIcon"],G=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:s,Default:r,Disabled:u,Multiple:i,WithIcon:d,__namedExportsOrder:D,default:z},Symbol.toStringTag,{value:"Module"}));export{s as A,r as D,G as F,i as M,d as W,u as a};
