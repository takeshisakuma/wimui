"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{n as s,t as c}from"./Icon-Bz8kwOgZ.js";import{n as l,t as u}from"./Menubar-BHN8kz9G.js";var d=e({Default:()=>m,__namedExportsOrder:()=>h,default:()=>p}),f,p,m,h,g=t((()=>{a(),l(),s(),r(),f=i(),p={title:`Components/Navigation Elements/Menubar`,component:u,parameters:{layout:`centered`},argTypes:{asChild:{control:`boolean`}}},m={render:e=>{let{t}=n(o);return(0,f.jsxs)(u,{...e,"aria-label":t(`story.menubar_application`),children:[(0,f.jsxs)(u.Menu,{value:`file`,children:[(0,f.jsx)(u.Trigger,{children:t(`story.menubar_file`)}),(0,f.jsxs)(u.Content,{children:[(0,f.jsx)(u.Item,{icon:(0,f.jsx)(c,{name:`DocumentIcon`,size:`sm`}),children:t(`story.menubar_new`)}),(0,f.jsx)(u.Item,{icon:(0,f.jsx)(c,{name:`ProjectIcon`,size:`sm`}),children:t(`story.menubar_open`)}),(0,f.jsx)(u.Separator,{}),(0,f.jsx)(u.Item,{children:t(`story.ks_save`)}),(0,f.jsx)(u.Item,{disabled:!0,children:t(`story.menubar_save_as`)})]})]}),(0,f.jsxs)(u.Menu,{value:`edit`,children:[(0,f.jsx)(u.Trigger,{children:t(`story.dropdown_edit`)}),(0,f.jsxs)(u.Content,{children:[(0,f.jsx)(u.Item,{children:t(`story.ks_undo`)}),(0,f.jsx)(u.Item,{children:t(`story.ks_redo`)}),(0,f.jsx)(u.Separator,{}),(0,f.jsx)(u.Item,{icon:(0,f.jsx)(c,{name:`CopyIcon`,size:`sm`}),children:t(`story.toolbar_copy`)}),(0,f.jsx)(u.Item,{children:t(`story.menubar_paste`)})]})]}),(0,f.jsxs)(u.Menu,{value:`view`,children:[(0,f.jsx)(u.Trigger,{children:t(`story.toolbar_view`)}),(0,f.jsxs)(u.Content,{align:`end`,children:[(0,f.jsx)(u.Item,{children:t(`story.menubar_zoom_in`)}),(0,f.jsx)(u.Item,{children:t(`story.menubar_zoom_out`)}),(0,f.jsx)(u.Separator,{}),(0,f.jsx)(u.Item,{children:t(`story.menubar_fullscreen`)})]})]}),(0,f.jsxs)(u.Menu,{value:`help`,disabled:!0,children:[(0,f.jsx)(u.Trigger,{disabled:!0,children:t(`story.menubar_help`)}),(0,f.jsx)(u.Content,{children:(0,f.jsx)(u.Item,{children:t(`story.menubar_docs`)})})]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menubar {...args} aria-label={t("story.menubar_application")}>
        <Menubar.Menu value="file">
          <Menubar.Trigger>{t("story.menubar_file")}</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item icon={<Icon name="DocumentIcon" size="sm" />}>
              {t("story.menubar_new")}
            </Menubar.Item>
            <Menubar.Item icon={<Icon name="ProjectIcon" size="sm" />}>
              {t("story.menubar_open")}
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>{t("story.ks_save")}</Menubar.Item>
            <Menubar.Item disabled>{t("story.menubar_save_as")}</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="edit">
          <Menubar.Trigger>{t("story.dropdown_edit")}</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>{t("story.ks_undo")}</Menubar.Item>
            <Menubar.Item>{t("story.ks_redo")}</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item icon={<Icon name="CopyIcon" size="sm" />}>
              {t("story.toolbar_copy")}
            </Menubar.Item>
            <Menubar.Item>{t("story.menubar_paste")}</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="view">
          <Menubar.Trigger>{t("story.toolbar_view")}</Menubar.Trigger>
          <Menubar.Content align="end">
            <Menubar.Item>{t("story.menubar_zoom_in")}</Menubar.Item>
            <Menubar.Item>{t("story.menubar_zoom_out")}</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>{t("story.menubar_fullscreen")}</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="help" disabled>
          <Menubar.Trigger disabled>{t("story.menubar_help")}</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>{t("story.menubar_docs")}</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`]}));g();export{m as Default,h as __namedExportsOrder,p as default,g as n,d as t};