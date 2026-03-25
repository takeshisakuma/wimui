import{j as s}from"./jsx-runtime-u17CrQMm.js";import{A as e}from"./Alert-B9pLNuPz.js";import{A as n}from"./iframe-DZKUwcAF.js";import{u as o}from"./useTranslation-D3JcAmfq.js";const m={title:"Components/Alerts & Notifications/Alert",component:e,tags:[],argTypes:{onClose:{action:"closed"}}},c={render:function(r){const{t}=o(n);return s.jsx(e,{...r,status:"info",title:t("story_alert_info_title"),description:t("story_alert_info_desc")})}},i={render:function(r){const{t}=o(n);return s.jsx(e,{...r,status:"success",title:t("story_alert_success_title"),description:t("story_alert_success_desc")})}},l={render:function(r){const{t}=o(n);return s.jsx(e,{...r,status:"warning",title:t("story_alert_warning_title"),description:t("story_alert_warning_desc")})}},u={render:function(r){const{t}=o(n);return s.jsx(e,{...r,status:"error",title:t("story_alert_error_title"),description:t("story_alert_error_desc")})}},_={render:function(r){const{t}=o(n);return s.jsx(e,{...r,status:"info",description:t("story_alert_no_title_desc")})}},d={render:function(r){const{t}=o(n);return s.jsx(e,{...r,status:"success",title:t("story_alert_dismiss_title"),description:t("story_alert_dismiss_desc"),onClose:()=>console.log("Alert closed")})}},p={render:function(r){const{t}=o(n);return s.jsx(e,{...r,status:"info",title:t("story_alert_update_title"),description:t("story_alert_update_desc"),onClose:()=>{}})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} status="info" title={t("story_alert_info_title")} description={t("story_alert_info_desc")} />;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} status="success" title={t("story_alert_success_title")} description={t("story_alert_success_desc")} />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} status="warning" title={t("story_alert_warning_title")} description={t("story_alert_warning_desc")} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} status="error" title={t("story_alert_error_title")} description={t("story_alert_error_desc")} />;
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} status="info" description={t("story_alert_no_title_desc")} />;
  }
}`,..._.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} status="success" title={t("story_alert_dismiss_title")} description={t("story_alert_dismiss_desc")} onClose={() => console.log("Alert closed")} />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} status="info" title={t("story_alert_update_title")} description={t("story_alert_update_desc")} onClose={() => {}} />;
  }
}`,...p.parameters?.docs?.source}}};const A=["Info","Success","Warning","ErrorStatus","WithoutTitle","WithCloseButton","LongContent"],E=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:u,Info:c,LongContent:p,Success:i,Warning:l,WithCloseButton:d,WithoutTitle:_,__namedExportsOrder:A,default:m},Symbol.toStringTag,{value:"Module"}));export{E as A,u as E,i as S,l as W,_ as a,d as b};
