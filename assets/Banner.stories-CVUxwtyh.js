import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as R}from"./index-C7Nj9VOz.js";import{F as j}from"./FeedbackIcon-BvHpdOAL.js";import{F as w}from"./FeedbackCloseButton-2f8FC2to.js";import{u as a}from"./useTranslation-OwuDKqc3.js";import{B as A}from"./Button-D7gyTprq.js";import{A as o}from"./iframe-DhNyLLHC.js";const s=({title:t,description:e,status:n="info",icon:b=!0,extra:f,onClose:N,className:S,children:g,...x})=>{const{t:y}=a();return r.jsx("div",{className:R("wim-banner",`wim-banner--${n}`,S),role:"banner",...x,children:r.jsxs("div",{className:"wim-banner__container",children:[r.jsxs("div",{className:"wim-banner__content",children:[b!==!1&&r.jsx("div",{className:"wim-banner__icon",children:r.jsx(j,{status:n,icon:typeof b=="boolean"?void 0:b,size:"small"})}),r.jsxs("div",{className:"wim-banner__text",children:[t&&r.jsx("span",{className:"wim-banner__title",children:y(t)}),t&&(e||g)&&r.jsx("span",{className:"wim-banner__separator",children:" - "}),(e||g)&&r.jsx("span",{className:"wim-banner__description",children:e?y(e):g})]})]}),r.jsxs("div",{className:"wim-banner__actions",children:[f&&r.jsx("div",{className:"wim-banner__action",children:f}),r.jsx(w,{onClose:N,className:"wim-banner__close",size:"small"})]})]})})};s.__docgenInfo={description:`重要なメッセージやアクションをユーザーに提示するためのバナーコンポーネント。
通常、ページの上部に表示されます。`,methods:[],displayName:"Banner",props:{title:{required:!1,tsType:{name:"string"},description:"バナーのタイトル"},description:{required:!1,tsType:{name:"string"},description:"バナーの説明文"},status:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"バナーのステータス",defaultValue:{value:'"info"',computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"アイコンを表示するかどうか、またはカスタムアイコン",defaultValue:{value:"true",computed:!1}},extra:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクションボタン要素（例：Buttonコンポーネント）"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素"}}};const C={title:"Components/Alerts & Notifications/Banner",component:s,tags:[],argTypes:{onClose:{action:"closed"},icon:{control:"boolean"},status:{control:"select",options:["info","success","warning","error"]}},parameters:{layout:"fullscreen"}},i={render:function(e){const{t:n}=a(o);return r.jsx(s,{...e,title:e.title||n("story_banner_update_title"),description:e.description||n("story_banner_update_desc")})},args:{status:"info"}},c={render:function(e){const{t:n}=a(o);return r.jsx(s,{...e,title:e.title||n("story_alert_success_title"),description:e.description||n("story_banner_update_desc")})},args:{status:"success"}},l={render:function(e){const{t:n}=a(o);return r.jsx(s,{...e,title:e.title||n("story_banner_maint_title"),description:e.description||n("story_banner_maint_desc")})},args:{status:"warning"}},d={render:function(e){const{t:n}=a(o);return r.jsx(s,{...e,title:e.title||n("story_banner_conn_error_title"),description:e.description||n("story_banner_conn_error_desc"),onClose:e.onClose??(()=>{})})},args:{status:"error"}},_={render:function(e){const{t:n}=a(o);return r.jsx(s,{...e,title:e.title||n("story_banner_cookie_title"),description:e.description||n("story_banner_cookie_desc"),extra:r.jsx(A,{size:"small",priority:"secondary",label:n("story_banner_btn_accept")})})},args:{status:"info"}},u={render:function(e){const{t:n}=a(o);return r.jsx(s,{...e,title:e.title||n("story_banner_trial_title"),description:e.description||n("story_banner_trial_desc"),extra:r.jsx(A,{size:"small",priority:"primary",label:n("story_banner_btn_upgrade")}),onClose:e.onClose??(()=>{})})},args:{status:"warning"}},p={render:function(e){const{t:n}=a(o);return r.jsx(s,{...e,description:e.description||n("story_banner_no_title_desc")})},args:{status:"info"}},m={render:function(e){const{t:n}=a(o);return r.jsx(s,{...e,title:e.title||n("story_banner_simple_title"),description:e.description||n("story_banner_simple_desc"),icon:!1})},args:{status:"info"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story_banner_update_title")} description={args.description || t("story_banner_update_desc")} />;
  },
  args: {
    status: "info"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story_alert_success_title")} description={args.description || t("story_banner_update_desc")} />;
  },
  args: {
    status: "success"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story_banner_maint_title")} description={args.description || t("story_banner_maint_desc")} />;
  },
  args: {
    status: "warning"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story_banner_conn_error_title")} description={args.description || t("story_banner_conn_error_desc")} onClose={args.onClose ?? (() => {})} />;
  },
  args: {
    status: "error"
  }
}`,...d.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story_banner_cookie_title")} description={args.description || t("story_banner_cookie_desc")} extra={<Button size="small" priority="secondary" label={t("story_banner_btn_accept")} />} />;
  },
  args: {
    status: "info"
  }
}`,..._.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story_banner_trial_title")} description={args.description || t("story_banner_trial_desc")} extra={<Button size="small" priority="primary" label={t("story_banner_btn_upgrade")} />} onClose={args.onClose ?? (() => {})} />;
  },
  args: {
    status: "warning"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} description={args.description || t("story_banner_no_title_desc")} />;
  },
  args: {
    status: "info"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story_banner_simple_title")} description={args.description || t("story_banner_simple_desc")} icon={false} />;
  },
  args: {
    status: "info"
  }
}`,...m.parameters?.docs?.source}}};const E=["Info","Success","Warning","ErrorStatus","WithAction","WithCloseAndAction","DescriptionOnly","NoIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,DescriptionOnly:p,ErrorStatus:d,Info:i,NoIcon:m,Success:c,Warning:l,WithAction:_,WithCloseAndAction:u,__namedExportsOrder:E,default:C},Symbol.toStringTag,{value:"Module"}));export{q as B};
