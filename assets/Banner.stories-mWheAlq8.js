import{j as n}from"./jsx-runtime-u17CrQMm.js";import{c as w}from"./index-Ckw0h7AD.js";import{F as N}from"./FeedbackIcon-XA-Kb3pa.js";import{F as B}from"./FeedbackCloseButton-CGsOHOCU.js";import{u as o}from"./useTranslation-BH3LN071.js";import{B as g}from"./Button-DcecViuG.js";const s=({title:t,description:r,status:e="info",icon:p=!0,extra:f,onClose:x,className:R,children:b,...j})=>{const{t:y}=o();return n.jsx("div",{className:w("wim-banner",`wim-banner--${e}`,R),role:"banner",...j,children:n.jsxs("div",{className:"wim-banner__container",children:[n.jsxs("div",{className:"wim-banner__content",children:[p!==!1&&n.jsx("div",{className:"wim-banner__icon",children:n.jsx(N,{status:e,icon:typeof p=="boolean"?void 0:p,size:"small"})}),n.jsxs("div",{className:"wim-banner__text",children:[t&&n.jsx("span",{className:"wim-banner__title",children:y(t)}),t&&(r||b)&&n.jsx("span",{className:"wim-banner__separator",children:" - "}),(r||b)&&n.jsx("span",{className:"wim-banner__description",children:r?y(r):b})]})]}),n.jsxs("div",{className:"wim-banner__actions",children:[f&&n.jsx("div",{className:"wim-banner__action",children:f}),n.jsx(B,{onClose:x,className:"wim-banner__close",size:"small"})]})]})})};s.__docgenInfo={description:`重要なメッセージやアクションをユーザーに提示するためのバナーコンポーネント。
通常、ページの上部に表示されます。`,methods:[],displayName:"Banner",props:{title:{required:!1,tsType:{name:"string"},description:"バナーのタイトル"},description:{required:!1,tsType:{name:"string"},description:"バナーの説明文"},status:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"バナーのステータス",defaultValue:{value:'"info"',computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"アイコンを表示するかどうか、またはカスタムアイコン",defaultValue:{value:"true",computed:!1}},extra:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクションボタン要素（例：Buttonコンポーネント）"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素"}}};const T={title:"Components/Alerts & Notifications/Banner",component:s,tags:[],argTypes:{onClose:{action:"closed"},icon:{control:"boolean"}},parameters:{layout:"fullscreen"}},a={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,status:"info",title:e("story_banner_update_title"),description:e("story_banner_update_desc")})}},c={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,status:"success",title:e("story_alert_success_title"),description:e("story_banner_update_desc")})}},i={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,status:"warning",title:e("story_banner_maint_title"),description:e("story_banner_maint_desc")})}},d={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,status:"error",title:e("story_banner_conn_error_title"),description:e("story_banner_conn_error_desc"),onClose:()=>{}})}},l={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,status:"info",title:e("story_banner_cookie_title"),description:e("story_banner_cookie_desc"),extra:n.jsx(g,{size:"small",priority:"secondary",label:e("story_banner_btn_accept")})})}},m={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,status:"warning",title:e("story_banner_trial_title"),description:e("story_banner_trial_desc"),extra:n.jsx(g,{size:"small",priority:"primary",label:e("story_banner_btn_upgrade")}),onClose:()=>{}})}},u={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,status:"info",description:e("story_banner_no_title_desc")})}},_={render:function(r){const{t:e}=o(["docs","common","components"]);return n.jsx(s,{...r,status:"info",title:e("story_banner_simple_title"),description:e("story_banner_simple_desc"),icon:!1})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} status="info" title={t("story_banner_update_title")} description={t("story_banner_update_desc")} />;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} status="success" title={t("story_alert_success_title")} description={t("story_banner_update_desc")} />;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} status="warning" title={t("story_banner_maint_title")} description={t("story_banner_maint_desc")} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} status="error" title={t("story_banner_conn_error_title")} description={t("story_banner_conn_error_desc")} onClose={() => {}} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} status="info" title={t("story_banner_cookie_title")} description={t("story_banner_cookie_desc")} extra={<Button size="small" priority="secondary" label={t("story_banner_btn_accept")} />} />;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} status="warning" title={t("story_banner_trial_title")} description={t("story_banner_trial_desc")} extra={<Button size="small" priority="primary" label={t("story_banner_btn_upgrade")} />} onClose={() => {}} />;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} status="info" description={t("story_banner_no_title_desc")} />;
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Banner {...args} status="info" title={t("story_banner_simple_title")} description={t("story_banner_simple_desc")} icon={false} />;
  }
}`,..._.parameters?.docs?.source}}};const v=["Info","Success","Warning","ErrorStatus","WithAction","WithCloseAndAction","DescriptionOnly","NoIcon"],k=Object.freeze(Object.defineProperty({__proto__:null,DescriptionOnly:u,ErrorStatus:d,Info:a,NoIcon:_,Success:c,Warning:i,WithAction:l,WithCloseAndAction:m,__namedExportsOrder:v,default:T},Symbol.toStringTag,{value:"Module"}));export{k as B};
