import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as t}from"./Alert-BiDk1VM8.js";import{u as n}from"./useTranslation-CHJ-TYb-.js";const p={title:"Components/Alerts & Notifications/Alert",component:t,tags:[],argTypes:{onClose:{action:"closed"}}},c={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(t,{...o,status:"info",title:s("story_alert_info_title"),description:s("story_alert_info_desc")})}},a={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(t,{...o,status:"success",title:s("story_alert_success_title"),description:s("story_alert_success_desc")})}},d={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(t,{...o,status:"warning",title:s("story_alert_warning_title"),description:s("story_alert_warning_desc")})}},i={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(t,{...o,status:"error",title:s("story_alert_error_title"),description:s("story_alert_error_desc")})}},_={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(t,{...o,status:"info",description:s("story_alert_no_title_desc")})}},l={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(t,{...o,status:"success",title:s("story_alert_dismiss_title"),description:s("story_alert_dismiss_desc"),onClose:()=>console.log("Alert closed")})}},u={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(t,{...o,status:"info",title:s("story_alert_update_title"),description:s("story_alert_update_desc"),onClose:()=>{}})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Alert {...args} status="info" title={t("story_alert_info_title")} description={t("story_alert_info_desc")} />;
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Alert {...args} status="success" title={t("story_alert_success_title")} description={t("story_alert_success_desc")} />;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Alert {...args} status="warning" title={t("story_alert_warning_title")} description={t("story_alert_warning_desc")} />;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Alert {...args} status="error" title={t("story_alert_error_title")} description={t("story_alert_error_desc")} />;
  }
}`,...i.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Alert {...args} status="info" description={t("story_alert_no_title_desc")} />;
  }
}`,..._.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Alert {...args} status="success" title={t("story_alert_dismiss_title")} description={t("story_alert_dismiss_desc")} onClose={() => console.log("Alert closed")} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Alert {...args} status="info" title={t("story_alert_update_title")} description={t("story_alert_update_desc")} onClose={() => {}} />;
  }
}`,...u.parameters?.docs?.source}}};const m=["Info","Success","Warning","ErrorStatus","WithoutTitle","WithCloseButton","LongContent"],v=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:i,Info:c,LongContent:u,Success:a,Warning:d,WithCloseButton:l,WithoutTitle:_,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{v as A,i as E,c as I,a as S,d as W,_ as a,l as b};
