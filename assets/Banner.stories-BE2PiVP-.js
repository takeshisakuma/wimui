import{j as n}from"./jsx-runtime-u17CrQMm.js";import{c as R}from"./index-m1osOdcM.js";import{F as j}from"./FeedbackIcon-xBjFkYcD.js";import{F as w}from"./FeedbackCloseButton-CyPaHzcS.js";import{u as a}from"./useTranslation-Bpq4v_el.js";import{B as A}from"./Button-DkatEzWi.js";import{A as o}from"./i18nConstants-BpHxieg5.js";const s=({title:t,description:r,status:e="info",icon:b=!0,extra:y,onClose:N,className:S,children:f,...x})=>{const{t:g}=a();return n.jsx("div",{className:R("wim-banner",`wim-banner--${e}`,S),role:"banner",...x,children:n.jsxs("div",{className:"wim-banner__container",children:[n.jsxs("div",{className:"wim-banner__content",children:[b!==!1&&n.jsx("div",{className:"wim-banner__icon",children:n.jsx(j,{status:e,icon:typeof b=="boolean"?void 0:b,size:"small"})}),n.jsxs("div",{className:"wim-banner__text",children:[t&&n.jsx("span",{className:"wim-banner__title",children:g(t)}),t&&(r||f)&&n.jsx("span",{className:"wim-banner__separator",children:" - "}),(r||f)&&n.jsx("span",{className:"wim-banner__description",children:r?g(r):f})]})]}),n.jsxs("div",{className:"wim-banner__actions",children:[y&&n.jsx("div",{className:"wim-banner__action",children:y}),n.jsx(w,{onClose:N,className:"wim-banner__close",size:"small"})]})]})})};s.__docgenInfo={description:`重要なメッセージやアクションをユーザーに提示するためのバナーコンポーネント。\r
通常、ページの上部に表示されます。`,methods:[],displayName:"Banner",props:{title:{required:!1,tsType:{name:"string"},description:"バナーのタイトル"},description:{required:!1,tsType:{name:"string"},description:"バナーの説明文"},status:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"バナーのステータス",defaultValue:{value:'"info"',computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"アイコンを表示するかどうか、またはカスタムアイコン",defaultValue:{value:"true",computed:!1}},extra:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクションボタン要素（例：Buttonコンポーネント）"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素"}}};const E={title:"Components/Alerts & Notifications/Banner",component:s,tags:[],argTypes:{onClose:{action:"closed"},icon:{control:"boolean"}},parameters:{layout:"fullscreen"}},i={render:function(r){const{t:e}=a(o);return n.jsx(s,{...r,status:"info",title:e("story_banner_update_title"),description:e("story_banner_update_desc")})}},c={render:function(r){const{t:e}=a(o);return n.jsx(s,{...r,status:"success",title:e("story_alert_success_title"),description:e("story_banner_update_desc")})}},l={render:function(r){const{t:e}=a(o);return n.jsx(s,{...r,status:"warning",title:e("story_banner_maint_title"),description:e("story_banner_maint_desc")})}},d={render:function(r){const{t:e}=a(o);return n.jsx(s,{...r,status:"error",title:e("story_banner_conn_error_title"),description:e("story_banner_conn_error_desc"),onClose:()=>{}})}},_={render:function(r){const{t:e}=a(o);return n.jsx(s,{...r,status:"info",title:e("story_banner_cookie_title"),description:e("story_banner_cookie_desc"),extra:n.jsx(A,{size:"small",priority:"secondary",label:e("story_banner_btn_accept")})})}},u={render:function(r){const{t:e}=a(o);return n.jsx(s,{...r,status:"warning",title:e("story_banner_trial_title"),description:e("story_banner_trial_desc"),extra:n.jsx(A,{size:"small",priority:"primary",label:e("story_banner_btn_upgrade")}),onClose:()=>{}})}},m={render:function(r){const{t:e}=a(o);return n.jsx(s,{...r,status:"info",description:e("story_banner_no_title_desc")})}},p={render:function(r){const{t:e}=a(o);return n.jsx(s,{...r,status:"info",title:e("story_banner_simple_title"),description:e("story_banner_simple_desc"),icon:!1})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} status="info" title={t("story_banner_update_title")} description={t("story_banner_update_desc")} />;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} status="success" title={t("story_alert_success_title")} description={t("story_banner_update_desc")} />;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} status="warning" title={t("story_banner_maint_title")} description={t("story_banner_maint_desc")} />;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} status="error" title={t("story_banner_conn_error_title")} description={t("story_banner_conn_error_desc")} onClose={() => {}} />;
  }
}`,...d.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} status="info" title={t("story_banner_cookie_title")} description={t("story_banner_cookie_desc")} extra={<Button size="small" priority="secondary" label={t("story_banner_btn_accept")} />} />;
  }
}`,..._.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} status="warning" title={t("story_banner_trial_title")} description={t("story_banner_trial_desc")} extra={<Button size="small" priority="primary" label={t("story_banner_btn_upgrade")} />} onClose={() => {}} />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} status="info" description={t("story_banner_no_title_desc")} />;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} status="info" title={t("story_banner_simple_title")} description={t("story_banner_simple_desc")} icon={false} />;
  }
}`,...p.parameters?.docs?.source}}};const B=["Info","Success","Warning","ErrorStatus","WithAction","WithCloseAndAction","DescriptionOnly","NoIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,DescriptionOnly:m,ErrorStatus:d,Info:i,NoIcon:p,Success:c,Warning:l,WithAction:_,WithCloseAndAction:u,__namedExportsOrder:B,default:E},Symbol.toStringTag,{value:"Module"}));export{q as B};
