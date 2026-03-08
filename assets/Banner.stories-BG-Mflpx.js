import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as N}from"./iframe-Dc2Bkp14.js";import{c as T}from"./index-CrdPdL0-.js";import{I as y}from"./Icon-DtFbPp_r.js";import{u as o}from"./useTranslation-DLjll_Fb.js";import{B as v}from"./Button-DW653PuT.js";const s=({title:t,description:r,variant:e="info",icon:p=!0,action:g,onClose:R,className:x,children:b,...j})=>{const{t:f}=o(),w=()=>p?N.isValidElement(p)?p:e==="success"?n.jsx(y,{name:"CheckIcon",size:"small"}):n.jsx(y,{name:"CircleIcon",size:"small"}):null;return n.jsx("div",{className:T("wim-banner",`wim-banner--${e}`,x),role:"banner",...j,children:n.jsxs("div",{className:"wim-banner__container",children:[n.jsxs("div",{className:"wim-banner__content",children:[p&&n.jsx("div",{className:"wim-banner__icon",children:w()}),n.jsxs("div",{className:"wim-banner__text",children:[t&&n.jsx("span",{className:"wim-banner__title",children:f(t)}),t&&(r||b)&&n.jsx("span",{className:"wim-banner__separator",children:" - "}),(r||b)&&n.jsx("span",{className:"wim-banner__description",children:r?f(r):b})]})]}),n.jsxs("div",{className:"wim-banner__actions",children:[g&&n.jsx("div",{className:"wim-banner__action",children:g}),R&&n.jsx("button",{type:"button",className:"wim-banner__close",onClick:R,"aria-label":f("a11y_close"),children:n.jsx(y,{name:"CloseIcon",size:"small"})})]})]})})};s.__docgenInfo={description:`重要なメッセージやアクションをユーザーに提示するためのバナーコンポーネント。
通常、ページの上部に表示されます。`,methods:[],displayName:"Banner",props:{title:{required:!1,tsType:{name:"string"},description:"バナーのタイトル"},description:{required:!1,tsType:{name:"string"},description:"バナーの説明文"},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"バナーのバリアント",defaultValue:{value:'"info"',computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"アイコンを表示するかどうか、またはカスタムアイコン",defaultValue:{value:"true",computed:!1}},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクションボタン要素（例：Buttonコンポーネント）"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素"}}};const B={title:"Components/Alerts & Notifications/Banner",component:s,tags:[],argTypes:{onClose:{action:"closed"},icon:{control:"boolean"}},parameters:{layout:"fullscreen"}},a={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,variant:"info",title:e("story_banner_update_title"),description:e("story_banner_update_desc")})}},c={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,variant:"success",title:e("story_alert_success_title"),description:e("story_banner_update_desc")})}},i={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,variant:"warning",title:e("story_banner_maint_title"),description:e("story_banner_maint_desc")})}},d={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,variant:"error",title:e("story_banner_conn_error_title"),description:e("story_banner_conn_error_desc"),onClose:()=>{}})}},l={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,variant:"info",title:e("story_banner_cookie_title"),description:e("story_banner_cookie_desc"),action:n.jsx(v,{size:"small",priority:"secondary",label:e("story_banner_btn_accept")})})}},m={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,variant:"warning",title:e("story_banner_trial_title"),description:e("story_banner_trial_desc"),action:n.jsx(v,{size:"small",priority:"primary",label:e("story_banner_btn_upgrade")}),onClose:()=>{}})}},_={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,variant:"info",description:e("story_banner_no_title_desc")})}},u={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,variant:"info",title:e("story_banner_simple_title"),description:e("story_banner_simple_desc"),icon:!1})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} variant="info" title={t("story_banner_update_title")} description={t("story_banner_update_desc")} />;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} variant="success" title={t("story_alert_success_title")} description={t("story_banner_update_desc")} />;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} variant="warning" title={t("story_banner_maint_title")} description={t("story_banner_maint_desc")} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} variant="error" title={t("story_banner_conn_error_title")} description={t("story_banner_conn_error_desc")} onClose={() => {}} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} variant="info" title={t("story_banner_cookie_title")} description={t("story_banner_cookie_desc")} action={<Button size="small" priority="secondary" label={t("story_banner_btn_accept")} />} />;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} variant="warning" title={t("story_banner_trial_title")} description={t("story_banner_trial_desc")} action={<Button size="small" priority="primary" label={t("story_banner_btn_upgrade")} />} onClose={() => {}} />;
  }
}`,...m.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} variant="info" description={t("story_banner_no_title_desc")} />;
  }
}`,..._.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} variant="info" title={t("story_banner_simple_title")} description={t("story_banner_simple_desc")} icon={false} />;
  }
}`,...u.parameters?.docs?.source}}};const h=["Info","Success","Warning","ErrorStatus","WithAction","WithCloseAndAction","DescriptionOnly","NoIcon"],k=Object.freeze(Object.defineProperty({__proto__:null,DescriptionOnly:_,ErrorStatus:d,Info:a,NoIcon:u,Success:c,Warning:i,WithAction:l,WithCloseAndAction:m,__namedExportsOrder:h,default:B},Symbol.toStringTag,{value:"Module"}));export{k as B};
