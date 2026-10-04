"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Icon-B_89lpXW.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./Menu-DY9jz-Ud.js";var g=t({Basic:()=>y,Horizontal:()=>C,Inline:()=>w,WithDisabledItems:()=>T,WithGroups:()=>S,WithIcons:()=>b,WithSubMenu:()=>x,__namedExportsOrder:()=>E,default:()=>v}),_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),i(),a(),c(),p(),_=s(),v={title:`Components/Overlays/Menu`,component:h,parameters:{layout:`centered`}},y={render:function(e){let{t}=r(o);return(0,_.jsxs)(h,{...e,children:[(0,_.jsx)(m,{children:t(`story.menu_home`)}),(0,_.jsx)(m,{children:t(`story.menu_about`)}),(0,_.jsx)(m,{children:t(`story.menu_services`)}),(0,_.jsx)(m,{children:t(`story.menu_contact`)})]})}},b={render:function(e){let{t}=r(o);return(0,_.jsxs)(h,{...e,children:[(0,_.jsx)(m,{icon:(0,_.jsx)(l,{name:`CheckIcon`,size:`sm`}),children:t(`story.menu_dashboard`)}),(0,_.jsx)(m,{icon:(0,_.jsx)(l,{name:`CopyIcon`,size:`sm`}),children:t(`story.menu_projects`)}),(0,_.jsx)(m,{icon:(0,_.jsx)(l,{name:`CloseIcon`,size:`sm`}),children:t(`story.menu_settings`)})]})}},x={render:function(e){let{t}=r(o);return(0,_.jsxs)(h,{...e,defaultOpenKeys:[`sub1`],children:[(0,_.jsx)(m,{icon:(0,_.jsx)(l,{name:`CheckIcon`,size:`sm`}),children:t(`story.menu_dashboard`)}),(0,_.jsxs)(u,{itemKey:`sub1`,title:t(`story.menu_products`),icon:(0,_.jsx)(l,{name:`CopyIcon`,size:`sm`}),children:[(0,_.jsx)(m,{children:t(`story.menu_product_cards`)}),(0,_.jsx)(m,{children:t(`story.menu_product_posters`)}),(0,_.jsx)(m,{children:t(`story.menu_product_stickers`)})]}),(0,_.jsxs)(u,{itemKey:`sub2`,title:t(`story.menu_services`),icon:(0,_.jsx)(l,{name:`CloseIcon`,size:`sm`}),children:[(0,_.jsx)(m,{children:t(`story.menu_service_same_day`)}),(0,_.jsx)(m,{children:t(`story.menu_service_file_check`)})]}),(0,_.jsx)(m,{children:t(`story.menu_contact`)})]})}},S={render:function(e){let{t}=r(o);return(0,_.jsxs)(h,{...e,children:[(0,_.jsxs)(d,{title:t(`story.menu_main_pages`),children:[(0,_.jsx)(m,{children:t(`story.menu_home`)}),(0,_.jsx)(m,{children:t(`story.menu_about`)}),(0,_.jsx)(m,{children:t(`story.menu_contact`)})]}),(0,_.jsx)(f,{}),(0,_.jsxs)(d,{title:t(`story.menu_user_actions`),children:[(0,_.jsx)(m,{children:t(`story.menu_profile`)}),(0,_.jsx)(m,{children:t(`story.menu_settings`)}),(0,_.jsx)(m,{children:t(`story.menu_logout`)})]})]})}},C={render:function(e){let{t}=r(o);return(0,_.jsxs)(h,{...e,mode:`horizontal`,children:[(0,_.jsx)(m,{children:t(`story.menu_home`)}),(0,_.jsx)(m,{children:t(`story.menu_about`)}),(0,_.jsx)(m,{children:t(`story.menu_services`)}),(0,_.jsx)(m,{children:t(`story.menu_contact`)})]})}},w={render:function(e){let{t}=r(o);return(0,_.jsxs)(h,{...e,mode:`inline`,defaultOpenKeys:[`sub1`],children:[(0,_.jsx)(m,{icon:(0,_.jsx)(l,{name:`CheckIcon`,size:`sm`}),children:t(`story.menu_dashboard`)}),(0,_.jsxs)(u,{itemKey:`sub1`,title:t(`story.menu_settings`),icon:(0,_.jsx)(l,{name:`CopyIcon`,size:`sm`}),children:[(0,_.jsx)(m,{children:t(`story.menu_profile_settings`)}),(0,_.jsx)(m,{children:t(`story.menu_account_settings`)}),(0,_.jsx)(m,{children:t(`story.menu_privacy_settings`)})]}),(0,_.jsx)(m,{icon:(0,_.jsx)(l,{name:`CloseIcon`,size:`sm`}),children:t(`story.menu_logout`)})]})}},T={render:function(e){let{t}=r(o);return(0,_.jsxs)(h,{...e,children:[(0,_.jsx)(m,{children:t(`story.menu_active_item`)}),(0,_.jsx)(m,{disabled:!0,children:t(`story.menu_disabled_item`)}),(0,_.jsx)(m,{children:t(`story.menu_another_active_item`)||`Another Active Item`})]})}},E=[`Basic`,`WithIcons`,`WithSubMenu`,`WithGroups`,`Horizontal`,`Inline`,`WithDisabledItems`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args}>
        <MenuItem>{t("story.menu_home")}</MenuItem>
        <MenuItem>{t("story.menu_about")}</MenuItem>
        <MenuItem>{t("story.menu_services")}</MenuItem>
        <MenuItem>{t("story.menu_contact")}</MenuItem>
      </Menu>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args}>
        <MenuItem icon={<Icon name="CheckIcon" size="sm" />}>
          {t("story.menu_dashboard")}
        </MenuItem>
        <MenuItem icon={<Icon name="CopyIcon" size="sm" />}>
          {t("story.menu_projects")}
        </MenuItem>
        <MenuItem icon={<Icon name="CloseIcon" size="sm" />}>
          {t("story.menu_settings")}
        </MenuItem>
      </Menu>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args} defaultOpenKeys={["sub1"]}>
        <MenuItem icon={<Icon name="CheckIcon" size="sm" />}>
          {t("story.menu_dashboard")}
        </MenuItem>
        <SubMenu itemKey="sub1" title={t("story.menu_products")} icon={<Icon name="CopyIcon" size="sm" />}>
          <MenuItem>{t("story.menu_product_cards")}</MenuItem>
          <MenuItem>{t("story.menu_product_posters")}</MenuItem>
          <MenuItem>{t("story.menu_product_stickers")}</MenuItem>
        </SubMenu>
        <SubMenu itemKey="sub2" title={t("story.menu_services")} icon={<Icon name="CloseIcon" size="sm" />}>
          <MenuItem>{t("story.menu_service_same_day")}</MenuItem>
          <MenuItem>{t("story.menu_service_file_check")}</MenuItem>
        </SubMenu>
        <MenuItem>{t("story.menu_contact")}</MenuItem>
      </Menu>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args}>
        <MenuItemGroup title={t("story.menu_main_pages")}>
          <MenuItem>{t("story.menu_home")}</MenuItem>
          <MenuItem>{t("story.menu_about")}</MenuItem>
          <MenuItem>{t("story.menu_contact")}</MenuItem>
        </MenuItemGroup>
        <MenuDivider />
        <MenuItemGroup title={t("story.menu_user_actions")}>
          <MenuItem>{t("story.menu_profile")}</MenuItem>
          <MenuItem>{t("story.menu_settings")}</MenuItem>
          <MenuItem>{t("story.menu_logout")}</MenuItem>
        </MenuItemGroup>
      </Menu>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args} mode="horizontal">
        <MenuItem>{t("story.menu_home")}</MenuItem>
        <MenuItem>{t("story.menu_about")}</MenuItem>
        <MenuItem>{t("story.menu_services")}</MenuItem>
        <MenuItem>{t("story.menu_contact")}</MenuItem>
      </Menu>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args} mode="inline" defaultOpenKeys={["sub1"]}>
        <MenuItem icon={<Icon name="CheckIcon" size="sm" />}>
          {t("story.menu_dashboard")}
        </MenuItem>
        <SubMenu itemKey="sub1" title={t("story.menu_settings")} icon={<Icon name="CopyIcon" size="sm" />}>
          <MenuItem>{t("story.menu_profile_settings")}</MenuItem>
          <MenuItem>{t("story.menu_account_settings")}</MenuItem>
          <MenuItem>{t("story.menu_privacy_settings")}</MenuItem>
        </SubMenu>
        <MenuItem icon={<Icon name="CloseIcon" size="sm" />}>
          {t("story.menu_logout")}
        </MenuItem>
      </Menu>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args}>
        <MenuItem>{t("story.menu_active_item")}</MenuItem>
        <MenuItem disabled>{t("story.menu_disabled_item")}</MenuItem>
        <MenuItem>{t("story.menu_another_active_item") || "Another Active Item"}</MenuItem>
      </Menu>;
  }
}`,...T.parameters?.docs?.source}}}})))()}export{b as a,S as i,w as n,x as o,g as r,D as s,C as t};