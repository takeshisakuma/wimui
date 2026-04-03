import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as b,A as l}from"./iframe-Ce8V-Zu8.js";import{c as q}from"./index-CWJxLETi.js";import{I as w}from"./Icon-BGsqoidF.js";import{I as P}from"./InteractiveArea-3L4z2Zp9.js";import{F as M}from"./FieldTemplate-CDDqQExq.js";import{u as c}from"./useTranslation-CZV_GknJ.js";const a=({label:t,description:r="Drag and drop files here, or click to select",accept:e,multiple:R=!1,disabled:s=!1,onChange:g,className:S,iconName:v="UploadIcon",error:I,required:T,layout:L="vertical"})=>{const A=b.useRef(null),[h,y]=b.useState(!1),[z,D]=b.useState(null),N=()=>{s||A.current?.click()},x=o=>{o.preventDefault(),!s&&y(!0)},E=()=>{y(!1)},j=o=>{if(o.preventDefault(),y(!1),s)return;const i=o.dataTransfer.files;D(i),g&&g(i)},C=o=>{const i=o.target.files;D(i),g&&g(i)};return n.jsx(M,{label:t,error:I,required:T,layout:L,className:q("wim-dropzone-container",S),children:n.jsxs(P,{className:"wim-dropzone",isDragging:h,disabled:s,isClickable:!s,onClick:N,onDragOver:x,onDragLeave:E,onDrop:j,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&N()},icon:v&&n.jsx(w,{name:v,size:"lg",color:s?"disabled":"primary"}),description:r,children:[n.jsx("input",{type:"file",ref:A,accept:e,multiple:R,disabled:s,onChange:C,className:"wim-dropzone__input",style:{display:"none"},"aria-hidden":"true",tabIndex:-1}),z&&z.length>0&&n.jsx("div",{className:"wim-dropzone__file-list",children:Array.from(z).map((o,i)=>n.jsx("span",{className:"wim-dropzone__file-name",children:o.name},i))})]})})};a.__docgenInfo={description:"ユーザーがファイルをドラッグ＆ドロップまたはクリックでアップロードするためのコンポーネント。",methods:[],displayName:"Dropzone",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"コンポーネントのラベル。"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"ドラッグ＆ドロップエリアに表示する説明テキスト。",defaultValue:{value:'"Drag and drop files here, or click to select"',computed:!1}},accept:{required:!1,tsType:{name:"string"},description:'受け付けるファイル形式（例: ".jpg,.png"）。'},multiple:{required:!1,tsType:{name:"boolean"},description:"複数のファイル選択を許可するかどうか。",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか。",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"ファイルが選択された時に呼ばれるコールバック。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。"},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"アイコンの名前。",defaultValue:{value:'"UploadIcon"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}}}};const F={title:"Components/Advanced Inputs/Dropzone",component:a,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},d={render:function(r){const{t:e}=c(l);return n.jsx(a,{...r,label:e("story.dropzone_label_file"),description:e("story.dropzone_default_desc")})}},p={render:function(r){const{t:e}=c(l);return n.jsx(a,{...r,label:e("story.dropzone_label_multi"),multiple:!0,description:e("story.dropzone_desc_multi")})}},u={render:function(r){const{t:e}=c(l);return n.jsx(a,{...r,label:e("story.dropzone_label_image_only"),accept:"image/*",iconName:"ImageIcon",description:e("story.dropzone_desc_image")})}},m={render:function(r){const{t:e}=c(l);return n.jsx(a,{...r,label:e("story.dropzone_label_disabled"),disabled:!0,description:e("story.dropzone_desc_disabled")})}},f={render:function(r){const{t:e}=c(l);return n.jsx(a,{...r,label:e("story.dropzone_label_pdf"),iconName:"PdfIcon",accept:".pdf",description:e("story.dropzone_desc_pdf")})}},_={render:function(r){const{t:e}=c(l);return n.jsx(a,{...r,label:e("story.dropzone_label_video"),iconName:"VideoIcon",accept:"video/*",description:e("story.dropzone_desc_video")})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_file")} description={t("story.dropzone_default_desc")} />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_multi")} multiple={true} description={t("story.dropzone_desc_multi")} />;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_image_only")} accept="image/*" iconName="ImageIcon" description={t("story.dropzone_desc_image")} />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_disabled")} disabled={true} description={t("story.dropzone_desc_disabled")} />;
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_pdf")} iconName="PdfIcon" accept=".pdf" description={t("story.dropzone_desc_pdf")} />;
  }
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_video")} iconName="VideoIcon" accept="video/*" description={t("story.dropzone_desc_video")} />;
  }
}`,..._.parameters?.docs?.source}}};const V=["Default","Multiple","AcceptImages","Disabled","CustomIcon","VideoUpload"],J=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:u,CustomIcon:f,Default:d,Disabled:m,Multiple:p,VideoUpload:_,__namedExportsOrder:V,default:F},Symbol.toStringTag,{value:"Module"}));export{u as A,J as D,p as M,d as a,m as b};
