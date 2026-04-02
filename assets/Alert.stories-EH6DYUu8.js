import{j as n}from"./jsx-runtime-u17CrQMm.js";import{A as r}from"./Alert-D8I1TUAt.js";import{A as s}from"./iframe-Dh8ZUv-I.js";import{u as o}from"./useTranslation-CdCoNx2v.js";const g={title:"Components/Alerts & Notifications/Alert",component:r,tags:[],argTypes:{onClose:{action:"closed"},intent:{control:"select",options:["info","success","warning","error"]}}},a={render:function(t){const{t:e}=o(s);return n.jsx(r,{...t,title:t.title||e("story.alert_info_title"),description:t.description||e("story.alert_info_desc")})},args:{intent:"info"}},c={render:function(t){const{t:e}=o(s);return n.jsx(r,{...t,title:t.title||e("story.alert_success_title"),description:t.description||e("story.alert_success_desc")})},args:{intent:"success"}},l={render:function(t){const{t:e}=o(s);return n.jsx(r,{...t,title:t.title||e("story.alert_warning_title"),description:t.description||e("story.alert_warning_desc")})},args:{intent:"warning"}},d={render:function(t){const{t:e}=o(s);return n.jsx(r,{...t,title:t.title||e("story.alert_error_title"),description:t.description||e("story.alert_error_desc")})},args:{intent:"error"}},u={render:function(t){const{t:e}=o(s);return n.jsx(r,{...t,description:t.description||e("story.alert_no_title_desc")})},args:{intent:"info"}},p={render:function(t){const{t:e}=o(s);return n.jsx(r,{...t,title:t.title||e("story.alert_dismiss_title"),description:t.description||e("story.alert_dismiss_desc"),onClose:t.onClose??(()=>console.log("Alert closed"))})},args:{intent:"success"}},_={render:function(t){const{t:e}=o(s);return n.jsx(r,{...t,title:t.title||e("story.alert_update_title"),description:t.description||e("story.alert_update_desc"),onClose:t.onClose??(()=>{})})},args:{intent:"info"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_info_title")} description={args.description || t("story.alert_info_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_success_title")} description={args.description || t("story.alert_success_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_warning_title")} description={args.description || t("story.alert_warning_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_error_title")} description={args.description || t("story.alert_error_desc")} />;
  },
  args: {
    intent: "error"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} description={args.description || t("story.alert_no_title_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_dismiss_title")} description={args.description || t("story.alert_dismiss_desc")} onClose={args.onClose ?? (() => console.log("Alert closed"))} />;
  },
  args: {
    intent: "success"
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_update_title")} description={args.description || t("story.alert_update_desc")} onClose={args.onClose ?? (() => {})} />;
  },
  args: {
    intent: "info"
  }
}`,..._.parameters?.docs?.source}}};const m=["Info","Success","Warning","ErrorStatus","WithoutTitle","WithCloseButton","LongContent"],C=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:d,Info:a,LongContent:_,Success:c,Warning:l,WithCloseButton:p,WithoutTitle:u,__namedExportsOrder:m,default:g},Symbol.toStringTag,{value:"Module"}));export{C as A,d as E,c as S,l as W,u as a,p as b};
