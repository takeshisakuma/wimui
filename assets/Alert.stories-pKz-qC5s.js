import{j as r}from"./jsx-runtime-u17CrQMm.js";import{A as s}from"./Alert-B7upAjjG.js";import{u as o}from"./useTranslation-BH3LN071.js";const _={title:"Components/Alerts & Notifications/Alert",component:s,tags:[],argTypes:{onClose:{action:"closed"}}},c={render:function(e){const{t}=o(["docs","common","components"]);return r.jsx(s,{...e,status:"info",title:t("story_alert_info_title"),description:t("story_alert_info_desc")})}},a={render:function(e){const{t}=o(["docs","common","components"]);return r.jsx(s,{...e,status:"success",title:t("story_alert_success_title"),description:t("story_alert_success_desc")})}},i={render:function(e){const{t}=o(["docs","common","components"]);return r.jsx(s,{...e,status:"warning",title:t("story_alert_warning_title"),description:t("story_alert_warning_desc")})}},d={render:function(e){const{t}=o(["docs","common","components"]);return r.jsx(s,{...e,status:"error",title:t("story_alert_error_title"),description:t("story_alert_error_desc")})}},l={render:function(e){const{t}=o(["docs","common","components"]);return r.jsx(s,{...e,status:"info",description:t("story_alert_no_title_desc")})}},u={render:function(e){const{t}=o(["docs","common","components"]);return r.jsx(s,{...e,status:"success",title:t("story_alert_dismiss_title"),description:t("story_alert_dismiss_desc"),onClose:()=>console.log("Alert closed")})}},m={render:function(e){const{t}=o(["docs","common","components"]);return r.jsx(s,{...e,status:"info",title:t("story_alert_update_title"),description:t("story_alert_update_desc"),onClose:()=>{}})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} status="info" title={t("story_alert_info_title")} description={t("story_alert_info_desc")} />;
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} status="success" title={t("story_alert_success_title")} description={t("story_alert_success_desc")} />;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} status="warning" title={t("story_alert_warning_title")} description={t("story_alert_warning_desc")} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} status="error" title={t("story_alert_error_title")} description={t("story_alert_error_desc")} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} status="info" description={t("story_alert_no_title_desc")} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} status="success" title={t("story_alert_dismiss_title")} description={t("story_alert_dismiss_desc")} onClose={() => console.log("Alert closed")} />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} status="info" title={t("story_alert_update_title")} description={t("story_alert_update_desc")} onClose={() => {}} />;
  }
}`,...m.parameters?.docs?.source}}};const p=["Info","Success","Warning","ErrorStatus","WithoutTitle","WithCloseButton","LongContent"],A=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:d,Info:c,LongContent:m,Success:a,Warning:i,WithCloseButton:u,WithoutTitle:l,__namedExportsOrder:p,default:_},Symbol.toStringTag,{value:"Module"}));export{A,d as E,c as I,a as S,i as W,l as a,u as b};
