"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{A as c,D as l,O as u,j as d,k as f,t as p}from"./src-BE5jBQ9L.js";import{t as m}from"./Icon-Bz8kwOgZ.js";var h=e({Basic:()=>v,Horizontal:()=>S,Inline:()=>C,WithDisabledItems:()=>w,WithGroups:()=>x,WithIcons:()=>y,WithSubMenu:()=>b,__namedExportsOrder:()=>T,default:()=>_}),g,_,v,y,b,x,S,C,w,T,E=t((()=>{n(),o(),i(),p(),g=a(),_={title:`Components/Overlays/Menu`,component:l,parameters:{layout:`centered`}},v={render:function(e){let{t}=r(s);return(0,g.jsxs)(l,{...e,children:[(0,g.jsx)(f,{children:t(`story.menu_home`)}),(0,g.jsx)(f,{children:t(`story.menu_about`)}),(0,g.jsx)(f,{children:t(`story.menu_services`)}),(0,g.jsx)(f,{children:t(`story.menu_contact`)})]})}},y={render:function(e){let{t}=r(s);return(0,g.jsxs)(l,{...e,children:[(0,g.jsx)(f,{icon:(0,g.jsx)(m,{name:`CheckIcon`,size:`sm`}),children:t(`story.menu_dashboard`)}),(0,g.jsx)(f,{icon:(0,g.jsx)(m,{name:`CopyIcon`,size:`sm`}),children:t(`story.menu_projects`)}),(0,g.jsx)(f,{icon:(0,g.jsx)(m,{name:`CloseIcon`,size:`sm`}),children:t(`story.menu_settings`)})]})}},b={render:function(e){let{t}=r(s);return(0,g.jsxs)(l,{...e,defaultOpenKeys:[`sub1`],children:[(0,g.jsx)(f,{icon:(0,g.jsx)(m,{name:`CheckIcon`,size:`sm`}),children:t(`story.menu_dashboard`)}),(0,g.jsxs)(d,{itemKey:`sub1`,title:t(`story.menu_products`),icon:(0,g.jsx)(m,{name:`CopyIcon`,size:`sm`}),children:[(0,g.jsxs)(f,{children:[t(`story.menu_product`),` 1`]}),(0,g.jsxs)(f,{children:[t(`story.menu_product`),` 2`]}),(0,g.jsxs)(f,{children:[t(`story.menu_product`),` 3`]})]}),(0,g.jsxs)(d,{itemKey:`sub2`,title:t(`story.menu_services`),icon:(0,g.jsx)(m,{name:`CloseIcon`,size:`sm`}),children:[(0,g.jsxs)(f,{children:[t(`story.menu_service`),` A`]}),(0,g.jsxs)(f,{children:[t(`story.menu_service`),` B`]})]}),(0,g.jsx)(f,{children:t(`story.menu_contact`)})]})}},x={render:function(e){let{t}=r(s);return(0,g.jsxs)(l,{...e,children:[(0,g.jsxs)(c,{title:t(`story.menu_main_pages`),children:[(0,g.jsx)(f,{children:t(`story.menu_home`)}),(0,g.jsx)(f,{children:t(`story.menu_about`)}),(0,g.jsx)(f,{children:t(`story.menu_contact`)})]}),(0,g.jsx)(u,{}),(0,g.jsxs)(c,{title:t(`story.menu_user_actions`),children:[(0,g.jsx)(f,{children:t(`story.menu_profile`)}),(0,g.jsx)(f,{children:t(`story.menu_settings`)}),(0,g.jsx)(f,{children:t(`story.menu_logout`)})]})]})}},S={render:function(e){let{t}=r(s);return(0,g.jsxs)(l,{...e,mode:`horizontal`,children:[(0,g.jsx)(f,{children:t(`story.menu_home`)}),(0,g.jsx)(f,{children:t(`story.menu_about`)}),(0,g.jsx)(f,{children:t(`story.menu_services`)}),(0,g.jsx)(f,{children:t(`story.menu_contact`)})]})}},C={render:function(e){let{t}=r(s);return(0,g.jsxs)(l,{...e,mode:`inline`,defaultOpenKeys:[`sub1`],children:[(0,g.jsx)(f,{icon:(0,g.jsx)(m,{name:`CheckIcon`,size:`sm`}),children:t(`story.menu_dashboard`)}),(0,g.jsxs)(d,{itemKey:`sub1`,title:t(`story.menu_settings`),icon:(0,g.jsx)(m,{name:`CopyIcon`,size:`sm`}),children:[(0,g.jsx)(f,{children:t(`story.menu_profile_settings`)}),(0,g.jsx)(f,{children:t(`story.menu_account_settings`)}),(0,g.jsx)(f,{children:t(`story.menu_privacy_settings`)})]}),(0,g.jsx)(f,{icon:(0,g.jsx)(m,{name:`CloseIcon`,size:`sm`}),children:t(`story.menu_logout`)})]})}},w={render:function(e){let{t}=r(s);return(0,g.jsxs)(l,{...e,children:[(0,g.jsx)(f,{children:t(`story.menu_active_item`)}),(0,g.jsx)(f,{disabled:!0,children:t(`story.menu_disabled_item`)}),(0,g.jsx)(f,{children:t(`story.menu_another_active_item`)||`Another Active Item`})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args} defaultOpenKeys={["sub1"]}>
        <MenuItem icon={<Icon name="CheckIcon" size="sm" />}>
          {t("story.menu_dashboard")}
        </MenuItem>
        <SubMenu itemKey="sub1" title={t("story.menu_products")} icon={<Icon name="CopyIcon" size="sm" />}>
          <MenuItem>{t("story.menu_product")} 1</MenuItem>
          <MenuItem>{t("story.menu_product")} 2</MenuItem>
          <MenuItem>{t("story.menu_product")} 3</MenuItem>
        </SubMenu>
        <SubMenu itemKey="sub2" title={t("story.menu_services")} icon={<Icon name="CloseIcon" size="sm" />}>
          <MenuItem>{t("story.menu_service")} A</MenuItem>
          <MenuItem>{t("story.menu_service")} B</MenuItem>
        </SubMenu>
        <MenuItem>{t("story.menu_contact")}</MenuItem>
      </Menu>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Basic`,`WithIcons`,`WithSubMenu`,`WithGroups`,`Horizontal`,`Inline`,`WithDisabledItems`]}));E();export{v as Basic,S as Horizontal,C as Inline,w as WithDisabledItems,x as WithGroups,y as WithIcons,b as WithSubMenu,T as __namedExportsOrder,_ as default,E as n,h as t};