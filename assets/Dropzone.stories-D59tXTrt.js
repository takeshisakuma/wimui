import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-OlV4UgK7.js";import{c as k}from"./index-Dj-MT3vJ.js";import{I as A}from"./Icon-OHntu2hx.js";import{I as L}from"./InteractiveArea-6naEVTVA.js";import{F as O}from"./FieldTemplate-DX5m6Pme.js";import{u as d}from"./useTranslation-CLFZhCB5.js";const t=({label:r,description:o,accept:e,multiple:x=!1,disabled:a=!1,onChange:y,className:j,iconName:z="UploadIcon",error:R,required:h,layout:N="vertical"})=>{const{t:b}=d("common"),D=v.useRef(null),[q,f]=v.useState(!1),[g,I]=v.useState(null),S=o??b("dropzone_description"),T=()=>{a||D.current?.click()},w=n=>{n.preventDefault(),!a&&f(!0)},C=()=>{f(!1)},F=n=>{if(n.preventDefault(),f(!1),a)return;const c=n.dataTransfer.files;I(c),y&&y(c)},V=n=>{const c=n.target.files;I(c),y&&y(c)};return s.jsx(O,{label:r?b(r):void 0,error:R,required:h,layout:N,className:k("wim-dropzone-container",j),children:s.jsxs(L,{className:"wim-dropzone",isDragging:q,disabled:a,isClickable:!a,onClick:T,onDragOver:w,onDragLeave:C,onDrop:F,onKeyDown:n=>{(n.key==="Enter"||n.key===" ")&&T()},icon:z&&s.jsx(A,{name:z,size:"large",color:a?"disabled":"primary"}),description:S,children:[s.jsx("input",{type:"file",ref:D,accept:e,multiple:x,disabled:a,onChange:V,className:"wim-dropzone__input",style:{display:"none"},"aria-hidden":"true",tabIndex:-1}),g&&g.length>0&&s.jsx("div",{className:"wim-dropzone__file-list",children:Array.from(g).map((n,c)=>s.jsx("span",{className:"wim-dropzone__file-name",children:n.name},c))})]})})};t.__docgenInfo={description:"ユーザーがファイルをドラッグ＆ドロップまたはクリックでアップロードするためのコンポーネント。",methods:[],displayName:"Dropzone",props:{label:{required:!1,tsType:{name:"string"},description:"コンポーネントのラベル。"},description:{required:!1,tsType:{name:"string"},description:"ドラッグ＆ドロップエリアに表示する説明テキスト。"},accept:{required:!1,tsType:{name:"string"},description:'受け付けるファイル形式（例: ".jpg,.png"）。'},multiple:{required:!1,tsType:{name:"boolean"},description:"複数のファイル選択を許可するかどうか。",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"無効状態にするかどうか。",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"ファイルが選択された時に呼ばれるコールバック。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。"},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"アイコンの名前。",defaultValue:{value:'"UploadIcon"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:"エラーメッセージ"},required:{required:!1,tsType:{name:"boolean"},description:"必須表示にするかどうか"},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"レイアウト方向",defaultValue:{value:'"vertical"',computed:!1}}}};const P={title:"Components/Advanced Inputs/Dropzone",component:t,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},i={render:function(o){const{t:e}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(t,{...o,label:e("story_dropzone_label_file"),description:e("story_dropzone_default_desc")})}},l={render:function(o){const{t:e}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(t,{...o,label:e("story_dropzone_label_multi"),multiple:!0,description:e("story_dropzone_desc_multi")})}},p={render:function(o){const{t:e}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(t,{...o,label:e("story_dropzone_label_image_only"),accept:"image/*",iconName:"ImageIcon",description:e("story_dropzone_desc_image")})}},_={render:function(o){const{t:e}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(t,{...o,label:e("story_dropzone_label_disabled"),disabled:!0,description:e("story_dropzone_desc_disabled")})}},u={render:function(o){const{t:e}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(t,{...o,label:e("story_dropzone_label_pdf"),iconName:"PdfIcon",accept:".pdf",description:e("story_dropzone_desc_pdf")})}},m={render:function(o){const{t:e}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(t,{...o,label:e("story_dropzone_label_video"),iconName:"VideoIcon",accept:"video/*",description:e("story_dropzone_desc_video")})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_file")} description={t("story_dropzone_default_desc")} />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_multi")} multiple={true} description={t("story_dropzone_desc_multi")} />;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_image_only")} accept="image/*" iconName="ImageIcon" description={t("story_dropzone_desc_image")} />;
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_disabled")} disabled={true} description={t("story_dropzone_desc_disabled")} />;
  }
}`,..._.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_pdf")} iconName="PdfIcon" accept=".pdf" description={t("story_dropzone_desc_pdf")} />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Dropzone {...args} label={t("story_dropzone_label_video")} iconName="VideoIcon" accept="video/*" description={t("story_dropzone_desc_video")} />;
  }
}`,...m.parameters?.docs?.source}}};const E=["Default","Multiple","AcceptImages","Disabled","CustomIcon","VideoUpload"],Q=Object.freeze(Object.defineProperty({__proto__:null,AcceptImages:p,CustomIcon:u,Default:i,Disabled:_,Multiple:l,VideoUpload:m,__namedExportsOrder:E,default:P},Symbol.toStringTag,{value:"Module"}));export{p as A,Q as D,l as M,i as a,_ as b};
