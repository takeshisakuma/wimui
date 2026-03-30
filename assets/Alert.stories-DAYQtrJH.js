import{j as s}from"./jsx-runtime-u17CrQMm.js";import{A as e}from"./Alert-Yq06Hh7T.js";import{A as n}from"./iframe-BCt2Cqzi.js";import{u as o}from"./useTranslation-iqmbh8MZ.js";const g={title:"Components/Alerts & Notifications/Alert",component:e,tags:[],argTypes:{onClose:{action:"closed"},status:{control:"select",options:["info","success","warning","error"]}}},i={render:function(t){const{t:r}=o(n);return s.jsx(e,{...t,title:t.title||r("story.alert_info_title"),description:t.description||r("story.alert_info_desc")})},args:{status:"info"}},c={render:function(t){const{t:r}=o(n);return s.jsx(e,{...t,title:t.title||r("story.alert_success_title"),description:t.description||r("story.alert_success_desc")})},args:{status:"success"}},l={render:function(t){const{t:r}=o(n);return s.jsx(e,{...t,title:t.title||r("story.alert_warning_title"),description:t.description||r("story.alert_warning_desc")})},args:{status:"warning"}},d={render:function(t){const{t:r}=o(n);return s.jsx(e,{...t,title:t.title||r("story.alert_error_title"),description:t.description||r("story.alert_error_desc")})},args:{status:"error"}},u={render:function(t){const{t:r}=o(n);return s.jsx(e,{...t,description:t.description||r("story.alert_no_title_desc")})},args:{status:"info"}},p={render:function(t){const{t:r}=o(n);return s.jsx(e,{...t,title:t.title||r("story.alert_dismiss_title"),description:t.description||r("story.alert_dismiss_desc"),onClose:t.onClose??(()=>console.log("Alert closed"))})},args:{status:"success"}},_={render:function(t){const{t:r}=o(n);return s.jsx(e,{...t,title:t.title||r("story.alert_update_title"),description:t.description||r("story.alert_update_desc"),onClose:t.onClose??(()=>{})})},args:{status:"info"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_info_title")} description={args.description || t("story.alert_info_desc")} />;
  },
  args: {
    status: "info"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_success_title")} description={args.description || t("story.alert_success_desc")} />;
  },
  args: {
    status: "success"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_warning_title")} description={args.description || t("story.alert_warning_desc")} />;
  },
  args: {
    status: "warning"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_error_title")} description={args.description || t("story.alert_error_desc")} />;
  },
  args: {
    status: "error"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} description={args.description || t("story.alert_no_title_desc")} />;
  },
  args: {
    status: "info"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_dismiss_title")} description={args.description || t("story.alert_dismiss_desc")} onClose={args.onClose ?? (() => console.log("Alert closed"))} />;
  },
  args: {
    status: "success"
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_update_title")} description={args.description || t("story.alert_update_desc")} onClose={args.onClose ?? (() => {})} />;
  },
  args: {
    status: "info"
  }
}`,..._.parameters?.docs?.source}}};const m=["Info","Success","Warning","ErrorStatus","WithoutTitle","WithCloseButton","LongContent"],C=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:d,Info:i,LongContent:_,Success:c,Warning:l,WithCloseButton:p,WithoutTitle:u,__namedExportsOrder:m,default:g},Symbol.toStringTag,{value:"Module"}));export{C as A,d as E,c as S,l as W,u as a,p as b};
