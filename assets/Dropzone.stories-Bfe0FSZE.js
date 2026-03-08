import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as z}from"./iframe-DUo8Bj02.js";import{c as I}from"./index-CI1dtVTQ.js";import{I as q}from"./Icon-C5_8LwyI.js";import{u as d}from"./useTranslation-C2tw1dPV.js";const t=({label:s,description:n="ここにファイルをドラッグ＆ドロップ、またはクリックして選択",accept:e,multiple:j=!1,disabled:a=!1,onChange:f,className:N,iconName:b="UploadIcon"})=>{const D=z.useRef(null),[T,g]=z.useState(!1),[y,v]=z.useState(null),x=()=>{a||D.current?.click()},h=r=>{r.preventDefault(),!a&&g(!0)},R=()=>{g(!1)},w=r=>{if(r.preventDefault(),g(!1),a)return;const c=r.dataTransfer.files;v(c),f&&f(c)},S=r=>{const c=r.target.files;v(c),f&&f(c)};return o.jsxs("div",{className:I("wim-dropzone-container",N),children:[s&&o.jsx("span",{className:"wim-dropzone__label",children:s}),o.jsxs("div",{className:I("wim-dropzone",T&&"wim-dropzone--dragging",a&&"wim-dropzone--disabled"),onClick:x,onDragOver:h,onDragLeave:R,onDrop:w,role:"button",tabIndex:a?-1:0,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&x()},children:[o.jsx("input",{type:"file",ref:D,accept:e,multiple:j,disabled:a,onChange:S,className:"wim-dropzone__input","aria-hidden":"true",tabIndex:-1}),o.jsxs("div",{className:"wim-dropzone__content",children:[b&&o.jsx(q,{name:b,size:"large",className:"wim-dropzone__icon",color:a?"disabled":"primary"}),o.jsx("p",{className:"wim-dropzone__description",children:n}),y&&y.length>0&&o.jsx("div",{className:"wim-dropzone__file-list",children:Array.from(y).map((r,c)=>o.jsx("span",{className:"wim-dropzone__file-name",children:r.name},c))})]})]})]})};t.__docgenInfo={description:"ユーザーがファイルをドラッグ＆ドロップまたはクリックでアップロードするためのコンポーネント。",methods:[],displayName:"Dropzone",props:{label:{required:!1,tsType:{name:"string"},description:"コンポーネントのラベル。"},description:{required:!1,tsType:{name:"string"},description:"ドラッグ＆ドロップエリアに表示する説明テキスト。",defaultValue:{value:'"ここにファイルをドラッグ＆ドロップ、またはクリックして選択"',computed:!1}},accept:{required:!1,tsType:{name:"string"},description:'受け付けるファイル形式（例: ".jpg,.png"）。'},multiple:{required:!1,tsType:{name:"boolean"},description:"複数のファイル選択を許可するかどうか。",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか。",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"ファイルが選択された時に呼ばれるコールバック。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。"},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"アイコンの名前。",defaultValue:{value:'"UploadIcon"',computed:!1}}}};const C={title:"Components/Advanced Inputs/Dropzone",component:t,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},i={render:function(n){const{t:e}=d(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_file"),description:e("story_dropzone_default_desc")})}},l={render:function(n){const{t:e}=d(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_multi"),multiple:!0,description:e("story_dropzone_desc_multi")})}},p={render:function(n){const{t:e}=d(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_image_only"),accept:"image/*",iconName:"ImageIcon",description:e("story_dropzone_desc_image")})}},m={render:function(n){const{t:e}=d(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_disabled"),disabled:!0,description:e("story_dropzone_desc_disabled")})}},u={render:function(n){const{t:e}=d(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_pdf"),iconName:"PdfIcon",accept:".pdf",description:e("story_dropzone_desc_pdf")})}},_={render:function(n){const{t:e}=d(["docs","common","components"]);return o.jsx(t,{...n,label:e("story_dropzone_label_video"),iconName:"VideoIcon",accept:"video/*",description:e("story_dropzone_desc_video")})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_file")} description={t("story_dropzone_default_desc")} />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const V=["Default","Multiple","AcceptImages","Disabled","CustomIcon","VideoUpload"],P=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:p,CustomIcon:u,Default:i,Disabled:m,Multiple:l,VideoUpload:_,__namedExportsOrder:V,default:C},Symbol.toStringTag,{value:"Module"}));export{p as A,P as D,l as M,i as a,m as b};
