import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as z}from"./iframe-BisTGuVC.js";import{c as k}from"./index-Ckw0h7AD.js";import{I as A}from"./Icon-mnVo4eg5.js";import{I as L}from"./InteractiveArea-YF9HUWow.js";import{F as O}from"./FieldTemplate-DQGW8oml.js";import{u as i}from"./useTranslation-BH3LN071.js";const t=({label:s,description:o,accept:e,multiple:x=!1,disabled:a=!1,onChange:f,className:j,iconName:b="UploadIcon",error:R,required:h,layout:N="vertical"})=>{const{t:v}=i("common"),D=z.useRef(null),[q,g]=z.useState(!1),[y,I]=z.useState(null),S=o??v("dropzone_description"),T=()=>{a||D.current?.click()},w=r=>{r.preventDefault(),!a&&g(!0)},C=()=>{g(!1)},F=r=>{if(r.preventDefault(),g(!1),a)return;const c=r.dataTransfer.files;I(c),f&&f(c)},V=r=>{const c=r.target.files;I(c),f&&f(c)};return n.jsx(O,{label:s?v(s):void 0,error:R,required:h,layout:N,className:k("wim-dropzone-container",j),children:n.jsxs(L,{className:"wim-dropzone",isDragging:q,disabled:a,isClickable:!a,onClick:T,onDragOver:w,onDragLeave:C,onDrop:F,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&T()},icon:b&&n.jsx(A,{name:b,size:"large",color:a?"disabled":"primary"}),description:S,children:[n.jsx("input",{type:"file",ref:D,accept:e,multiple:x,disabled:a,onChange:V,className:"wim-dropzone__input",style:{display:"none"},"aria-hidden":"true",tabIndex:-1}),y&&y.length>0&&n.jsx("div",{className:"wim-dropzone__file-list",children:Array.from(y).map((r,c)=>n.jsx("span",{className:"wim-dropzone__file-name",children:r.name},c))})]})})};t.__docgenInfo={description:"ユーザーがファイルをドラッグ＆ドロップまたはクリックでアップロードするためのコンポーネント。",methods:[],displayName:"Dropzone",props:{label:{required:!1,tsType:{name:"string"},description:"コンポーネントのラベル。"},description:{required:!1,tsType:{name:"string"},description:"ドラッグ＆ドロップエリアに表示する説明テキスト。"},accept:{required:!1,tsType:{name:"string"},description:'受け付けるファイル形式（例: ".jpg,.png"）。'},multiple:{required:!1,tsType:{name:"boolean"},description:"複数のファイル選択を許可するかどうか。",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか。",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"ファイルが選択された時に呼ばれるコールバック。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。"},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"アイコンの名前。",defaultValue:{value:'"UploadIcon"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}}}};const P={title:"Components/Advanced Inputs/Dropzone",component:t,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},l={render:function(o){const{t:e}=i(["docs","common","components"]);return n.jsx(t,{...o,label:e("story_dropzone_label_file"),description:e("story_dropzone_default_desc")})}},d={render:function(o){const{t:e}=i(["docs","common","components"]);return n.jsx(t,{...o,label:e("story_dropzone_label_multi"),multiple:!0,description:e("story_dropzone_desc_multi")})}},p={render:function(o){const{t:e}=i(["docs","common","components"]);return n.jsx(t,{...o,label:e("story_dropzone_label_image_only"),accept:"image/*",iconName:"ImageIcon",description:e("story_dropzone_desc_image")})}},m={render:function(o){const{t:e}=i(["docs","common","components"]);return n.jsx(t,{...o,label:e("story_dropzone_label_disabled"),disabled:!0,description:e("story_dropzone_desc_disabled")})}},u={render:function(o){const{t:e}=i(["docs","common","components"]);return n.jsx(t,{...o,label:e("story_dropzone_label_pdf"),iconName:"PdfIcon",accept:".pdf",description:e("story_dropzone_desc_pdf")})}},_={render:function(o){const{t:e}=i(["docs","common","components"]);return n.jsx(t,{...o,label:e("story_dropzone_label_video"),iconName:"VideoIcon",accept:"video/*",description:e("story_dropzone_desc_video")})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_file")} description={t("story_dropzone_default_desc")} />;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_multi")} multiple={true} description={t("story_dropzone_desc_multi")} />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const E=["Default","Multiple","AcceptImages","Disabled","CustomIcon","VideoUpload"],Q=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:p,CustomIcon:u,Default:l,Disabled:m,Multiple:d,VideoUpload:_,__namedExportsOrder:E,default:P},Symbol.toStringTag,{value:"Module"}));export{p as A,Q as D,d as M,l as a,m as b};
