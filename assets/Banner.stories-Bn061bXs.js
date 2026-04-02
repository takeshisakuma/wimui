import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as S}from"./index-DnwyEzdG.js";import{F as v}from"./FeedbackIcon-Cfg7Pb8K.js";import{F as x}from"./FeedbackCloseButton-Po9H47Hm.js";import{B as y}from"./Button-CDhpu8wV.js";import{A as a}from"./iframe-Dh8ZUv-I.js";import{u as o}from"./useTranslation-CdCoNx2v.js";const s=({title:t,description:e,intent:n="info",icon:f=!0,extra:g,onClose:R,className:N,children:b,...A})=>r.jsx("div",{className:S("wim-banner",`wim-banner--${n}`,N),role:"banner",...A,children:r.jsxs("div",{className:"wim-banner__container",children:[r.jsxs("div",{className:"wim-banner__content",children:[f!==!1&&r.jsx("div",{className:"wim-banner__icon",children:r.jsx(v,{intent:n,icon:typeof f=="boolean"?void 0:f,size:"sm"})}),r.jsxs("div",{className:"wim-banner__text",children:[t&&r.jsx("span",{className:"wim-banner__title",children:t}),t&&(e||b)&&r.jsx("span",{className:"wim-banner__separator",children:" - "}),(e||b)&&r.jsx("span",{className:"wim-banner__description",children:e||b})]})]}),r.jsxs("div",{className:"wim-banner__actions",children:[g&&r.jsx("div",{className:"wim-banner__action",children:g}),r.jsx(x,{onClose:R,className:"wim-banner__close",size:"sm"})]})]})});s.__docgenInfo={description:`重要なメッセージやアクションをユーザーに提示するためのバナーコンポーネント。
通常、ページの上部に表示されます。`,methods:[],displayName:"Banner",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"バナーのタイトル"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"バナーの説明文"},intent:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "info"
| "neutral"
| "default"
| "destructive"
| "positive"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"バナーのインテント",defaultValue:{value:'"info"',computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"アイコンを表示するかどうか、またはカスタムアイコン",defaultValue:{value:"true",computed:!1}},extra:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクションボタン要素（例：Buttonコンポーネント）"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素"}}};const w={title:"Components/Alerts & Notifications/Banner",component:s,tags:[],argTypes:{onClose:{action:"closed"},icon:{control:"boolean"},intent:{control:"select",options:["info","success","warning","error"]}},parameters:{layout:"fullscreen"}},i={render:function(e){const{t:n}=o(a);return r.jsx(s,{...e,title:e.title||n("story.banner_update_title"),description:e.description||n("story.banner_update_desc")})},args:{intent:"info"}},c={render:function(e){const{t:n}=o(a);return r.jsx(s,{...e,title:e.title||n("story.alert_success_title"),description:e.description||n("story.banner_update_desc")})},args:{intent:"success"}},l={render:function(e){const{t:n}=o(a);return r.jsx(s,{...e,title:e.title||n("story.banner_maint_title"),description:e.description||n("story.banner_maint_desc")})},args:{intent:"warning"}},d={render:function(e){const{t:n}=o(a);return r.jsx(s,{...e,title:e.title||n("story.banner_conn_error_title"),description:e.description||n("story.banner_conn_error_desc"),onClose:e.onClose??(()=>{})})},args:{intent:"error"}},u={render:function(e){const{t:n}=o(a);return r.jsx(s,{...e,title:e.title||n("story.banner_cookie_title"),description:e.description||n("story.banner_cookie_desc"),extra:r.jsx(y,{size:"sm",variant:"outlined",label:n("story.banner_btn_accept")})})},args:{intent:"info"}},p={render:function(e){const{t:n}=o(a);return r.jsx(s,{...e,title:e.title||n("story.banner_trial_title"),description:e.description||n("story.banner_trial_desc"),extra:r.jsx(y,{size:"sm",variant:"filled",label:n("story.banner_btn_upgrade")}),onClose:e.onClose??(()=>{})})},args:{intent:"warning"}},m={render:function(e){const{t:n}=o(a);return r.jsx(s,{...e,description:e.description||n("story.banner_no_title_desc")})},args:{intent:"info"}},_={render:function(e){const{t:n}=o(a);return r.jsx(s,{...e,title:e.title||n("story.banner_simple_title"),description:e.description||n("story.banner_simple_desc"),icon:!1})},args:{intent:"info"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_update_title")} description={args.description || t("story.banner_update_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.alert_success_title")} description={args.description || t("story.banner_update_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_maint_title")} description={args.description || t("story.banner_maint_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_conn_error_title")} description={args.description || t("story.banner_conn_error_desc")} onClose={args.onClose ?? (() => {})} />;
  },
  args: {
    intent: "error"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_cookie_title")} description={args.description || t("story.banner_cookie_desc")} extra={<Button size="sm" variant="outlined" label={t("story.banner_btn_accept")} />} />;
  },
  args: {
    intent: "info"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_trial_title")} description={args.description || t("story.banner_trial_desc")} extra={<Button size="sm" variant="filled" label={t("story.banner_btn_upgrade")} />} onClose={args.onClose ?? (() => {})} />;
  },
  args: {
    intent: "warning"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} description={args.description || t("story.banner_no_title_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...m.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_simple_title")} description={args.description || t("story.banner_simple_desc")} icon={false} />;
  },
  args: {
    intent: "info"
  }
}`,..._.parameters?.docs?.source}}};const j=["Info","Success","Warning","ErrorStatus","WithAction","WithCloseAndAction","DescriptionOnly","NoIcon"],P=Object.freeze(Object.defineProperty({__proto__:null,DescriptionOnly:m,ErrorStatus:d,Info:i,NoIcon:_,Success:c,Warning:l,WithAction:u,WithCloseAndAction:p,__namedExportsOrder:j,default:w},Symbol.toStringTag,{value:"Module"}));export{P as B};
