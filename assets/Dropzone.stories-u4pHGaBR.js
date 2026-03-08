import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as z}from"./iframe-DQwmcauy.js";import{c as I}from"./index-Bk7p5LNu.js";import{I as F}from"./Icon-BSJg9_bB.js";import{u as i}from"./useTranslation-CZ9vchf1.js";const t=({label:s,description:n,accept:e,multiple:j=!1,disabled:a=!1,onChange:f,className:N,iconName:b="UploadIcon"})=>{const{t:T}=i("common"),D=z.useRef(null),[h,g]=z.useState(!1),[y,v]=z.useState(null),R=n??T("dropzone_description"),x=()=>{a||D.current?.click()},w=r=>{r.preventDefault(),!a&&g(!0)},S=()=>{g(!1)},q=r=>{if(r.preventDefault(),g(!1),a)return;const c=r.dataTransfer.files;v(c),f&&f(c)},C=r=>{const c=r.target.files;v(c),f&&f(c)};return o.jsxs("div",{className:I("wim-dropzone-container",N),children:[s&&o.jsx("span",{className:"wim-dropzone__label",children:s}),o.jsxs("div",{className:I("wim-dropzone",h&&"wim-dropzone--dragging",a&&"wim-dropzone--disabled"),onClick:x,onDragOver:w,onDragLeave:S,onDrop:q,role:"button",tabIndex:a?-1:0,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&x()},children:[o.jsx("input",{type:"file",ref:D,accept:e,multiple:j,disabled:a,onChange:C,className:"wim-dropzone__input","aria-hidden":"true",tabIndex:-1}),o.jsxs("div",{className:"wim-dropzone__content",children:[b&&o.jsx(F,{name:b,size:"large",className:"wim-dropzone__icon",color:a?"disabled":"primary"}),o.jsx("p",{className:"wim-dropzone__description",children:R}),y&&y.length>0&&o.jsx("div",{className:"wim-dropzone__file-list",children:Array.from(y).map((r,c)=>o.jsx("span",{className:"wim-dropzone__file-name",children:r.name},c))})]})]})]})};t.__docgenInfo={description:"ユーザーがファイルをドラッグ＆ドロップまたはクリックでアップロードするためのコンポーネント。",methods:[],displayName:"Dropzone",props:{label:{required:!1,tsType:{name:"string"},description:"コンポーネントのラベル。"},description:{required:!1,tsType:{name:"string"},description:"ドラッグ＆ドロップエリアに表示する説明テキスト。"},accept:{required:!1,tsType:{name:"string"},description:'受け付けるファイル形式（例: ".jpg,.png"）。'},multiple:{required:!1,tsType:{name:"boolean"},description:"複数のファイル選択を許可するかどうか。",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか。",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"ファイルが選択された時に呼ばれるコールバック。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。"},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"アイコンの名前。",defaultValue:{value:'"UploadIcon"',computed:!1}}}};const V={title:"Components/Advanced Inputs/Dropzone",component:t,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},d={render:function(n){const{t:e}=i(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_file"),description:e("story_dropzone_default_desc")})}},l={render:function(n){const{t:e}=i(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_multi"),multiple:!0,description:e("story_dropzone_desc_multi")})}},p={render:function(n){const{t:e}=i(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_image_only"),accept:"image/*",iconName:"ImageIcon",description:e("story_dropzone_desc_image")})}},m={render:function(n){const{t:e}=i(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_disabled"),disabled:!0,description:e("story_dropzone_desc_disabled")})}},u={render:function(n){const{t:e}=i(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_pdf"),iconName:"PdfIcon",accept:".pdf",description:e("story_dropzone_desc_pdf")})}},_={render:function(n){const{t:e}=i(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_video"),iconName:"VideoIcon",accept:"video/*",description:e("story_dropzone_desc_video")})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_file")} description={t("story_dropzone_default_desc")} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_multi")} multiple={true} description={t("story_dropzone_desc_multi")} />;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_image_only")} accept="image/*" iconName="ImageIcon" description={t("story_dropzone_desc_image")} />;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_disabled")} disabled={true} description={t("story_dropzone_desc_disabled")} />;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_pdf")} iconName="PdfIcon" accept=".pdf" description={t("story_dropzone_desc_pdf")} />;
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_video")} iconName="VideoIcon" accept="video/*" description={t("story_dropzone_desc_video")} />;
  }
}`,..._.parameters?.docs?.source}}};const k=["Default","Multiple","AcceptImages","Disabled","CustomIcon","VideoUpload"],M=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:p,CustomIcon:u,Default:d,Disabled:m,Multiple:l,VideoUpload:_,__namedExportsOrder:k,default:V},Symbol.toStringTag,{value:"Module"}));export{p as A,M as D,l as M,d as a,m as b};
