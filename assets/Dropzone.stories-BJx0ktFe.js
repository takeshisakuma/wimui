import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-Dzm9idsv.js";import{c as M}from"./index-BpsP6pOz.js";import{I as w}from"./Icon-DdY3T4lx.js";import{I as F}from"./InteractiveArea-8-RYKf7X.js";import{F as V}from"./FieldTemplate-6JmiT8eB.js";import{u as l}from"./useTranslation-BfYXAya8.js";import{A as c}from"./i18nConstants-fBKvcUJT.js";const s=({label:t,description:r,accept:e,multiple:T=!1,disabled:a=!1,onChange:g,className:N,iconName:v="UploadIcon",error:L,required:x,layout:E="vertical"})=>{const{t:A}=l("common"),D=b.useRef(null),[j,y]=b.useState(!1),[z,S]=b.useState(null),R=r??A("dropzone_description"),I=()=>{a||D.current?.click()},h=o=>{o.preventDefault(),!a&&y(!0)},C=()=>{y(!1)},q=o=>{if(o.preventDefault(),y(!1),a)return;const i=o.dataTransfer.files;S(i),g&&g(i)},P=o=>{const i=o.target.files;S(i),g&&g(i)};return n.jsx(V,{label:t?A(t):void 0,error:L,required:x,layout:E,className:M("wim-dropzone-container",N),children:n.jsxs(F,{className:"wim-dropzone",isDragging:j,disabled:a,isClickable:!a,onClick:I,onDragOver:h,onDragLeave:C,onDrop:q,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&I()},icon:v&&n.jsx(w,{name:v,size:"large",color:a?"disabled":"primary"}),description:R,children:[n.jsx("input",{type:"file",ref:D,accept:e,multiple:T,disabled:a,onChange:P,className:"wim-dropzone__input",style:{display:"none"},"aria-hidden":"true",tabIndex:-1}),z&&z.length>0&&n.jsx("div",{className:"wim-dropzone__file-list",children:Array.from(z).map((o,i)=>n.jsx("span",{className:"wim-dropzone__file-name",children:o.name},i))})]})})};s.__docgenInfo={description:"ユーザーがファイルをドラッグ＆ドロップまたはクリックでアップロードするためのコンポーネント。",methods:[],displayName:"Dropzone",props:{label:{required:!1,tsType:{name:"string"},description:"コンポーネントのラベル。"},description:{required:!1,tsType:{name:"string"},description:"ドラッグ＆ドロップエリアに表示する説明テキスト。"},accept:{required:!1,tsType:{name:"string"},description:'受け付けるファイル形式（例: ".jpg,.png"）。'},multiple:{required:!1,tsType:{name:"boolean"},description:"複数のファイル選択を許可するかどうか。",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか。",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"ファイルが選択された時に呼ばれるコールバック。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。"},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"アイコンの名前。",defaultValue:{value:'"UploadIcon"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}}}};const k={title:"Components/Advanced Inputs/Dropzone",component:s,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},d={render:function(r){const{t:e}=l(c);return n.jsx(s,{...r,label:e("story_dropzone_label_file"),description:e("story_dropzone_default_desc")})}},p={render:function(r){const{t:e}=l(c);return n.jsx(s,{...r,label:e("story_dropzone_label_multi"),multiple:!0,description:e("story_dropzone_desc_multi")})}},u={render:function(r){const{t:e}=l(c);return n.jsx(s,{...r,label:e("story_dropzone_label_image_only"),accept:"image/*",iconName:"ImageIcon",description:e("story_dropzone_desc_image")})}},m={render:function(r){const{t:e}=l(c);return n.jsx(s,{...r,label:e("story_dropzone_label_disabled"),disabled:!0,description:e("story_dropzone_desc_disabled")})}},_={render:function(r){const{t:e}=l(c);return n.jsx(s,{...r,label:e("story_dropzone_label_pdf"),iconName:"PdfIcon",accept:".pdf",description:e("story_dropzone_desc_pdf")})}},f={render:function(r){const{t:e}=l(c);return n.jsx(s,{...r,label:e("story_dropzone_label_video"),iconName:"VideoIcon",accept:"video/*",description:e("story_dropzone_desc_video")})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story_dropzone_label_file")} description={t("story_dropzone_default_desc")} />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story_dropzone_label_multi")} multiple={true} description={t("story_dropzone_desc_multi")} />;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story_dropzone_label_image_only")} accept="image/*" iconName="ImageIcon" description={t("story_dropzone_desc_image")} />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story_dropzone_label_disabled")} disabled={true} description={t("story_dropzone_desc_disabled")} />;
  }
}`,...m.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story_dropzone_label_pdf")} iconName="PdfIcon" accept=".pdf" description={t("story_dropzone_desc_pdf")} />;
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story_dropzone_label_video")} iconName="VideoIcon" accept="video/*" description={t("story_dropzone_desc_video")} />;
  }
}`,...f.parameters?.docs?.source}}};const O=["Default","Multiple","AcceptImages","Disabled","CustomIcon","VideoUpload"],X=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:u,CustomIcon:_,Default:d,Disabled:m,Multiple:p,VideoUpload:f,__namedExportsOrder:O,default:k},Symbol.toStringTag,{value:"Module"}));export{u as A,X as D,p as M,d as a,m as b};
