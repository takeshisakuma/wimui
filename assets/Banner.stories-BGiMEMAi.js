import{j as o}from"./jsx-runtime-u17CrQMm.js";import{c as j}from"./index-EwYXZEMZ.js";import{F as w}from"./FeedbackIcon-RvmKL5Ay.js";import{F as N}from"./FeedbackCloseButton-DAnfZfcJ.js";import{u as r}from"./useTranslation-CHJ-TYb-.js";import{B as f}from"./Button-D41HbHwN.js";const t=({title:n,description:e,status:s="info",icon:p=!0,extra:g,onClose:v,className:x,children:y,...R})=>{const{t:b}=r();return o.jsx("div",{className:j("wim-banner",`wim-banner--${s}`,x),role:"banner",...R,children:o.jsxs("div",{className:"wim-banner__container",children:[o.jsxs("div",{className:"wim-banner__content",children:[p!==!1&&o.jsx("div",{className:"wim-banner__icon",children:o.jsx(w,{status:s,icon:typeof p=="boolean"?void 0:p,size:"small"})}),o.jsxs("div",{className:"wim-banner__text",children:[n&&o.jsx("span",{className:"wim-banner__title",children:b(n)}),n&&(e||y)&&o.jsx("span",{className:"wim-banner__separator",children:" - "}),(e||y)&&o.jsx("span",{className:"wim-banner__description",children:e?b(e):y})]})]}),o.jsxs("div",{className:"wim-banner__actions",children:[g&&o.jsx("div",{className:"wim-banner__action",children:g}),o.jsx(N,{onClose:v,className:"wim-banner__close",size:"small"})]})]})})};t.__docgenInfo={description:`重要なメッセージやアクションをユーザーに提示するためのバナーコンポーネント。\r
通常、ページの上部に表示されます。`,methods:[],displayName:"Banner",props:{title:{required:!1,tsType:{name:"string"},description:"バナーのタイトル"},description:{required:!1,tsType:{name:"string"},description:"バナーの説明文"},status:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"バナーのステータス",defaultValue:{value:'"info"',computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"アイコンを表示するかどうか、またはカスタムアイコン",defaultValue:{value:"true",computed:!1}},extra:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクションボタン要素（例：Buttonコンポーネント）"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素"}}};const B={title:"Components/Alerts & Notifications/Banner",component:t,tags:[],argTypes:{onClose:{action:"closed"},icon:{control:"boolean"}},parameters:{layout:"fullscreen"}},a={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{...e,status:"info",title:s("story_banner_update_title"),description:s("story_banner_update_desc")})}},c={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{...e,status:"success",title:s("story_alert_success_title"),description:s("story_banner_update_desc")})}},i={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{...e,status:"warning",title:s("story_banner_maint_title"),description:s("story_banner_maint_desc")})}},d={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{...e,status:"error",title:s("story_banner_conn_error_title"),description:s("story_banner_conn_error_desc"),onClose:()=>{}})}},_={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{...e,status:"info",title:s("story_banner_cookie_title"),description:s("story_banner_cookie_desc"),extra:o.jsx(f,{size:"small",priority:"secondary",label:s("story_banner_btn_accept")})})}},l={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{...e,status:"warning",title:s("story_banner_trial_title"),description:s("story_banner_trial_desc"),extra:o.jsx(f,{size:"small",priority:"primary",label:s("story_banner_btn_upgrade")}),onClose:()=>{}})}},u={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{...e,status:"info",description:s("story_banner_no_title_desc")})}},m={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(t,{...e,status:"info",title:s("story_banner_simple_title"),description:s("story_banner_simple_desc"),icon:!1})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Banner {...args} status="info" title={t("story_banner_update_title")} description={t("story_banner_update_desc")} />;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Banner {...args} status="success" title={t("story_alert_success_title")} description={t("story_banner_update_desc")} />;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Banner {...args} status="warning" title={t("story_banner_maint_title")} description={t("story_banner_maint_desc")} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Banner {...args} status="error" title={t("story_banner_conn_error_title")} description={t("story_banner_conn_error_desc")} onClose={() => {}} />;
  }
}`,...d.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Banner {...args} status="info" title={t("story_banner_cookie_title")} description={t("story_banner_cookie_desc")} extra={<Button size="small" priority="secondary" label={t("story_banner_btn_accept")} />} />;
  }
}`,..._.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Banner {...args} status="warning" title={t("story_banner_trial_title")} description={t("story_banner_trial_desc")} extra={<Button size="small" priority="primary" label={t("story_banner_btn_upgrade")} />} onClose={() => {}} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Banner {...args} status="info" description={t("story_banner_no_title_desc")} />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Banner {...args} status="info" title={t("story_banner_simple_title")} description={t("story_banner_simple_desc")} icon={false} />;
  }
}`,...m.parameters?.docs?.source}}};const T=["Info","Success","Warning","ErrorStatus","WithAction","WithCloseAndAction","DescriptionOnly","NoIcon"],k=Object.freeze(Object.defineProperty({__proto__:null,DescriptionOnly:u,ErrorStatus:d,Info:a,NoIcon:m,Success:c,Warning:i,WithAction:_,WithCloseAndAction:l,__namedExportsOrder:T,default:B},Symbol.toStringTag,{value:"Module"}));export{k as B};
