import{j as n}from"./jsx-runtime-u17CrQMm.js";import{A as r}from"./Alert-CXoUKBR2.js";import{u as o}from"./useTranslation-gsjwUuWZ.js";const u={title:"Components/Alerts & Notifications/Alert",component:r,tags:[],argTypes:{onClose:{action:"closed"}}},a={render:function(e){const{t}=o(["docs","common","components"]);return n.jsx(r,{...e,variant:"info",title:t("story_alert_info_title"),description:t("story_alert_info_desc")})}},c={render:function(e){const{t}=o(["docs","common","components"]);return n.jsx(r,{...e,variant:"success",title:t("story_alert_success_title"),description:t("story_alert_success_desc")})}},i={render:function(e){const{t}=o(["docs","common","components"]);return n.jsx(r,{...e,variant:"warning",title:t("story_alert_warning_title"),description:t("story_alert_warning_desc")})}},d={render:function(e){const{t}=o(["docs","common","components"]);return n.jsx(r,{...e,variant:"error",title:t("story_alert_error_title"),description:t("story_alert_error_desc")})}},l={render:function(e){const{t}=o(["docs","common","components"]);return n.jsx(r,{...e,variant:"info",description:t("story_alert_no_title_desc")})}},m={render:function(e){const{t}=o(["docs","common","components"]);return n.jsx(r,{...e,variant:"success",title:t("story_alert_dismiss_title"),description:t("story_alert_dismiss_desc"),onClose:()=>console.log("Alert closed")})}},_={render:function(e){const{t}=o(["docs","common","components"]);return n.jsx(r,{...e,variant:"info",title:t("story_alert_update_title"),description:t("story_alert_update_desc"),onClose:()=>{}})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} variant="info" title={t("story_alert_info_title")} description={t("story_alert_info_desc")} />;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} variant="success" title={t("story_alert_success_title")} description={t("story_alert_success_desc")} />;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} variant="warning" title={t("story_alert_warning_title")} description={t("story_alert_warning_desc")} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} variant="error" title={t("story_alert_error_title")} description={t("story_alert_error_desc")} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} variant="info" description={t("story_alert_no_title_desc")} />;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} variant="success" title={t("story_alert_dismiss_title")} description={t("story_alert_dismiss_desc")} onClose={() => console.log("Alert closed")} />;
  }
}`,...m.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Alert {...args} variant="info" title={t("story_alert_update_title")} description={t("story_alert_update_desc")} onClose={() => {}} />;
  }
}`,..._.parameters?.docs?.source}}};const p=["Info","Success","Warning","ErrorStatus","WithoutTitle","WithCloseButton","LongContent"],v=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:d,Info:a,LongContent:_,Success:c,Warning:i,WithCloseButton:m,WithoutTitle:l,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{v as A,d as E,a as I,c as S,i as W,l as a,m as b};
