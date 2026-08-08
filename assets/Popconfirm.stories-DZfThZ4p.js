"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c,x as l}from"./src-BE5jBQ9L.js";import{t as u}from"./Button-d-SlSJ4S.js";var d=e({Danger:()=>h,Default:()=>m,Disabled:()=>_,WithDescription:()=>g,__namedExportsOrder:()=>v,default:()=>p}),f,p,m,h,g,_,v,y=t((()=>{o(),n(),i(),c(),f=a(),p={title:`Components/Alerts & Notifications/Popconfirm`,component:l,tags:[],argTypes:{onConfirm:{action:`confirmed`},onCancel:{action:`cancelled`}}},m={render:function(e){let{t}=r(s);return(0,f.jsx)(l,{...e,title:t(`story.popconfirm_delete_title`),okText:t(`story.popconfirm_yes`),cancelText:t(`story.popconfirm_no`),children:(0,f.jsx)(u,{variant:`solid`,children:t(`story.popconfirm_delete_btn`)})})}},h={render:function(e){let{t}=r(s);return(0,f.jsx)(l,{...e,title:t(`story.popconfirm_delete_title`),okText:t(`story.popconfirm_yes`),cancelText:t(`story.popconfirm_no`),okType:`danger`,children:(0,f.jsx)(u,{variant:`solid`,intent:`danger`,children:t(`story.popconfirm_delete_btn`)})})}},g={render:function(e){let{t}=r(s);return(0,f.jsx)(l,{...e,title:t(`story.popconfirm_delete_btn`),description:t(`story.popconfirm_delete_desc`),okText:t(`story.popconfirm_yes`),cancelText:t(`story.popconfirm_no`),children:(0,f.jsx)(u,{children:t(`story.popconfirm_delete_btn`)})})}},_={render:function(e){let{t}=r(s);return(0,f.jsx)(l,{...e,title:t(`story.popconfirm_yes`),disabled:!0,children:(0,f.jsx)(u,{children:t(`story.popconfirm_disabled_btn`)})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story.popconfirm_delete_title")} okText={t("story.popconfirm_yes")} cancelText={t("story.popconfirm_no")}>
        <Button variant="solid">{t("story.popconfirm_delete_btn")}</Button>
      </Popconfirm>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story.popconfirm_delete_title")} okText={t("story.popconfirm_yes")} cancelText={t("story.popconfirm_no")} okType="danger">
        <Button variant="solid" intent="danger">
          {t("story.popconfirm_delete_btn")}
        </Button>
      </Popconfirm>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story.popconfirm_delete_btn")} description={t("story.popconfirm_delete_desc")} okText={t("story.popconfirm_yes")} cancelText={t("story.popconfirm_no")}>
        <Button>{t("story.popconfirm_delete_btn")}</Button>
      </Popconfirm>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story.popconfirm_yes")} disabled>
        <Button>{t("story.popconfirm_disabled_btn")}</Button>
      </Popconfirm>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Danger`,`WithDescription`,`Disabled`]}));y();export{h as Danger,m as Default,_ as Disabled,g as WithDescription,v as __namedExportsOrder,p as default,y as n,d as t};