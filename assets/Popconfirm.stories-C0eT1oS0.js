"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-DrO46Brn.js";import{n as u,t as d}from"./Popconfirm-BTT5FBSY.js";import{n as f,t as p}from"./playOpen-D3Z82aS-.js";var m=t({Danger:()=>v,Default:()=>_,Disabled:()=>b,Open:()=>x,WithDescription:()=>y,__namedExportsOrder:()=>S,default:()=>g}),h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{i(),n(),a(),c(),u(),p(),h=s(),g={title:`Components/Alerts & Notifications/Popconfirm`,component:d,tags:[],argTypes:{onConfirm:{action:`confirmed`},onCancel:{action:`cancelled`}}},_={render:function(e){let{t}=r(o);return(0,h.jsx)(d,{...e,title:t(`story.popconfirm_delete_title`),okText:t(`story.popconfirm_yes`),cancelText:t(`story.popconfirm_no`),children:(0,h.jsx)(l,{variant:`solid`,children:t(`story.popconfirm_delete_btn`)})})}},v={render:function(e){let{t}=r(o);return(0,h.jsx)(d,{...e,title:t(`story.popconfirm_delete_title`),okText:t(`story.popconfirm_yes`),cancelText:t(`story.popconfirm_no`),okType:`danger`,children:(0,h.jsx)(l,{variant:`solid`,intent:`danger`,children:t(`story.popconfirm_delete_btn`)})})}},y={render:function(e){let{t}=r(o);return(0,h.jsx)(d,{...e,title:t(`story.popconfirm_delete_btn`),description:t(`story.popconfirm_delete_desc`),okText:t(`story.popconfirm_yes`),cancelText:t(`story.popconfirm_no`),children:(0,h.jsx)(l,{children:t(`story.popconfirm_delete_btn`)})})}},b={render:function(e){let{t}=r(o);return(0,h.jsx)(d,{...e,title:t(`story.popconfirm_yes`),disabled:!0,children:(0,h.jsx)(l,{children:t(`story.popconfirm_disabled_btn`)})})}},x={..._,play:f},S=[`Default`,`Danger`,`WithDescription`,`Disabled`,`Open`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story.popconfirm_delete_title")} okText={t("story.popconfirm_yes")} cancelText={t("story.popconfirm_no")}>
        <Button variant="solid">{t("story.popconfirm_delete_btn")}</Button>
      </Popconfirm>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story.popconfirm_delete_btn")} description={t("story.popconfirm_delete_desc")} okText={t("story.popconfirm_yes")} cancelText={t("story.popconfirm_no")}>
        <Button>{t("story.popconfirm_delete_btn")}</Button>
      </Popconfirm>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story.popconfirm_yes")} disabled>
        <Button>{t("story.popconfirm_disabled_btn")}</Button>
      </Popconfirm>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: openFirstPopup
}`,...x.parameters?.docs?.source}}}})))()}export{y as a,m as i,_ as n,C as o,b as r,v as t};