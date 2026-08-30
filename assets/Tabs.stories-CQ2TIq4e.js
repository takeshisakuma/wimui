"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Ht as c,t as l}from"./src-CV0le6yM.js";var u=e({Default:()=>p,Scrolling:()=>h,Vertical:()=>m,__namedExportsOrder:()=>g,default:()=>f}),d,f,p,m,h,g,_=t((()=>{n(),l(),o(),i(),d=a(),f={title:`Components/Navigation Elements/Tabs`,component:c},p={render:function(){let{t:e}=r(s);return(0,d.jsxs)(c,{defaultValue:`1`,children:[(0,d.jsxs)(c.List,{children:[(0,d.jsx)(c.Trigger,{value:`1`,children:e(`story.tabs_gen_settings`)}),(0,d.jsx)(c.Trigger,{value:`2`,children:e(`story.tabs_user_profile`)}),(0,d.jsx)(c.Trigger,{value:`3`,children:e(`story.tabs_notif_center`)}),(0,d.jsx)(c.Trigger,{value:`4`,children:e(`story.tabs_sec_privacy`)}),(0,d.jsx)(c.Trigger,{value:`5`,children:e(`story.tabs_app_integ`)})]}),(0,d.jsx)(c.Content,{value:`1`,children:e(`story.tabs_gen_desc`)}),(0,d.jsx)(c.Content,{value:`2`,children:e(`story.tabs_user_desc`)}),(0,d.jsx)(c.Content,{value:`3`,children:e(`story.tabs_notif_desc`)}),(0,d.jsx)(c.Content,{value:`4`,children:e(`story.tabs_sec_desc`)}),(0,d.jsx)(c.Content,{value:`5`,children:e(`story.tabs_app_desc`)})]})}},m={render:function(){let{t:e}=r(s);return(0,d.jsxs)(c,{defaultValue:`1`,orientation:`vertical`,style:{minHeight:`200px`},children:[(0,d.jsxs)(c.List,{children:[(0,d.jsx)(c.Trigger,{value:`1`,children:e(`story.tabs_dash_v`)}),(0,d.jsx)(c.Trigger,{value:`2`,children:e(`story.tabs_ana_v`)}),(0,d.jsx)(c.Trigger,{value:`3`,children:e(`story.tabs_sys_logs`)}),(0,d.jsx)(c.Trigger,{value:`4`,children:e(`story.tabs_help_doc`)})]}),(0,d.jsxs)(c.Content,{value:`1`,children:[(0,d.jsx)(`h3`,{style:{marginTop:0},children:e(`story.tabs_dash_title`)}),(0,d.jsx)(`p`,{children:e(`story.tabs_dash_desc`)})]}),(0,d.jsx)(c.Content,{value:`2`,children:e(`story.tabs_ana_desc`)}),(0,d.jsx)(c.Content,{value:`3`,children:e(`story.tabs_sys_desc`)}),(0,d.jsx)(c.Content,{value:`4`,children:e(`story.tabs_help_desc`)})]})}},h={render:function(){let{t:e}=r(s);return(0,d.jsxs)(c,{defaultValue:`1`,style:{width:`min(800px, 100%)`},children:[(0,d.jsxs)(c.List,{children:[(0,d.jsxs)(c.Trigger,{value:`1`,children:[e(`story.tabs_long_tab`),` 1`]}),(0,d.jsxs)(c.Trigger,{value:`2`,children:[e(`story.tabs_long_tab`),` 2`]}),(0,d.jsxs)(c.Trigger,{value:`3`,children:[e(`story.tabs_long_tab`),` 3`]}),(0,d.jsxs)(c.Trigger,{value:`4`,children:[e(`story.tabs_long_tab`),` 4`]}),(0,d.jsxs)(c.Trigger,{value:`5`,children:[e(`story.tabs_long_tab`),` 5`]})]}),(0,d.jsx)(c.Content,{value:`1`,children:`Content 1`}),(0,d.jsx)(c.Content,{value:`2`,children:`Content 2`}),(0,d.jsx)(c.Content,{value:`3`,children:`Content 3`}),(0,d.jsx)(c.Content,{value:`4`,children:`Content 4`}),(0,d.jsx)(c.Content,{value:`5`,children:`Content 5`})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tabs defaultValue="1">
        <Tabs.List>
          <Tabs.Trigger value="1">{t("story.tabs_gen_settings")}</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story.tabs_user_profile")}</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story.tabs_notif_center")}</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story.tabs_sec_privacy")}</Tabs.Trigger>
          <Tabs.Trigger value="5">{t("story.tabs_app_integ")}</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">{t("story.tabs_gen_desc")}</Tabs.Content>
        <Tabs.Content value="2">{t("story.tabs_user_desc")}</Tabs.Content>
        <Tabs.Content value="3">{t("story.tabs_notif_desc")}</Tabs.Content>
        <Tabs.Content value="4">{t("story.tabs_sec_desc")}</Tabs.Content>
        <Tabs.Content value="5">{t("story.tabs_app_desc")}</Tabs.Content>
      </Tabs>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tabs defaultValue="1" orientation="vertical" style={{
      minHeight: "200px"
    }}>
        <Tabs.List>
          <Tabs.Trigger value="1">{t("story.tabs_dash_v")}</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story.tabs_ana_v")}</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story.tabs_sys_logs")}</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story.tabs_help_doc")}</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">
          <h3 style={{
          marginTop: 0
        }}>{t("story.tabs_dash_title")}</h3>
          <p>{t("story.tabs_dash_desc")}</p>
        </Tabs.Content>
        <Tabs.Content value="2">{t("story.tabs_ana_desc")}</Tabs.Content>
        <Tabs.Content value="3">{t("story.tabs_sys_desc")}</Tabs.Content>
        <Tabs.Content value="4">{t("story.tabs_help_desc")}</Tabs.Content>
      </Tabs>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tabs defaultValue="1" style={{
      width: "min(800px, 100%)"
    }}>
        <Tabs.List>
          <Tabs.Trigger value="1">{t("story.tabs_long_tab")} 1</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story.tabs_long_tab")} 2</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story.tabs_long_tab")} 3</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story.tabs_long_tab")} 4</Tabs.Trigger>
          <Tabs.Trigger value="5">{t("story.tabs_long_tab")} 5</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">Content 1</Tabs.Content>
        <Tabs.Content value="2">Content 2</Tabs.Content>
        <Tabs.Content value="3">Content 3</Tabs.Content>
        <Tabs.Content value="4">Content 4</Tabs.Content>
        <Tabs.Content value="5">Content 5</Tabs.Content>
      </Tabs>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Vertical`,`Scrolling`]}));_();export{p as Default,h as Scrolling,m as Vertical,g as __namedExportsOrder,f as default,_ as n,u as t};