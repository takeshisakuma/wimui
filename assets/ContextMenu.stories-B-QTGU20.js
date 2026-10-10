"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Icon-TGLZuM2d.js";import{a as u,i as d,n as f,r as p,t as m}from"./ContextMenu-DNuPD18H.js";import{r as h,t as g}from"./playOpen-BfHmRBb6.js";var _=t({Basic:()=>b,Disabled:()=>x,OnImage:()=>T,Open:()=>E,WithDisabledItems:()=>w,WithGroups:()=>C,WithIcons:()=>S,__namedExportsOrder:()=>D,default:()=>y}),v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),i(),a(),g(),u(),c(),v=s(),y={title:`Components/Overlays/ContextMenu`,component:m,parameters:{layout:`centered`},argTypes:{disabled:{control:`boolean`}}},b={args:{disabled:!1},render:e=>{let{t}=r(o);return(0,v.jsx)(m,{...e,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{onClick:()=>console.log(`Edit clicked`),children:t(`story.contextmenu_edit`)}),(0,v.jsx)(d,{onClick:()=>console.log(`Copy clicked`),children:t(`story.contextmenu_copy`)}),(0,v.jsx)(d,{onClick:()=>console.log(`Paste clicked`),children:t(`story.contextmenu_paste`)}),(0,v.jsx)(f,{}),(0,v.jsx)(d,{onClick:()=>console.log(`Delete clicked`),danger:!0,children:t(`story.contextmenu_delete`)})]}),children:(0,v.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-surface-variant)`,border:`2px dashed var(--wim-color-border)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_right_click`)})})}},x={args:{disabled:!0},render:e=>{let{t}=r(o);return(0,v.jsx)(m,{...e,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{children:t(`story.contextmenu_edit`)}),(0,v.jsx)(d,{children:t(`story.contextmenu_copy`)}),(0,v.jsx)(d,{children:t(`story.contextmenu_paste`)})]}),children:(0,v.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-surface-variant)`,border:`2px dashed var(--wim-color-border)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_disabled_menu`)})})}},S={render:e=>{let{t}=r(o);return(0,v.jsx)(m,{...e,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{icon:(0,v.jsx)(l,{name:`CheckIcon`,size:`sm`}),onClick:()=>console.log(`Edit clicked`),children:t(`story.contextmenu_edit`)}),(0,v.jsx)(d,{icon:(0,v.jsx)(l,{name:`CopyIcon`,size:`sm`}),onClick:()=>console.log(`Copy clicked`),children:t(`story.contextmenu_copy`)}),(0,v.jsx)(d,{icon:(0,v.jsx)(l,{name:`CheckIcon`,size:`sm`}),onClick:()=>console.log(`Paste clicked`),children:t(`story.contextmenu_paste`)}),(0,v.jsx)(f,{}),(0,v.jsx)(d,{icon:(0,v.jsx)(l,{name:`CloseIcon`,size:`sm`}),onClick:()=>console.log(`Delete clicked`),danger:!0,children:t(`story.contextmenu_delete`)})]}),children:(0,v.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-info-subtle)`,border:`2px dashed var(--wim-color-info)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_with_icons`)})})}},C={render:e=>{let{t}=r(o);return(0,v.jsx)(m,{...e,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(p,{title:t(`story.contextmenu_edit_actions`),children:[(0,v.jsx)(d,{children:t(`story.contextmenu_cut`)}),(0,v.jsx)(d,{children:t(`story.contextmenu_copy`)}),(0,v.jsx)(d,{children:t(`story.contextmenu_paste`)})]}),(0,v.jsx)(f,{}),(0,v.jsxs)(p,{title:t(`story.contextmenu_file_actions`),children:[(0,v.jsx)(d,{children:t(`story.contextmenu_rename`)}),(0,v.jsx)(d,{children:t(`story.contextmenu_move`)}),(0,v.jsx)(d,{danger:!0,children:t(`story.contextmenu_delete`)})]})]}),children:(0,v.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-warning-subtle)`,border:`2px dashed var(--wim-color-warning)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_with_groups`)})})}},w={render:e=>{let{t}=r(o);return(0,v.jsx)(m,{...e,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{children:t(`story.contextmenu_cut`)}),(0,v.jsx)(d,{children:t(`story.contextmenu_copy`)}),(0,v.jsxs)(d,{disabled:!0,children:[t(`story.contextmenu_paste`),` (disabled)`]}),(0,v.jsx)(f,{}),(0,v.jsx)(d,{children:t(`story.contextmenu_select_all`)})]}),children:(0,v.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-success-subtle)`,border:`2px dashed var(--wim-color-success)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_disabled`)})})}},T={render:e=>{let{t}=r(o);return(0,v.jsx)(m,{...e,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{icon:(0,v.jsx)(l,{name:`CheckIcon`,size:`sm`}),children:t(`story.contextmenu_open_new_tab`)}),(0,v.jsx)(d,{icon:(0,v.jsx)(l,{name:`CopyIcon`,size:`sm`}),children:t(`story.contextmenu_copy_image`)}),(0,v.jsx)(d,{icon:(0,v.jsx)(l,{name:`CopyIcon`,size:`sm`}),children:t(`story.contextmenu_copy_image_address`)}),(0,v.jsx)(f,{}),(0,v.jsx)(d,{icon:(0,v.jsx)(l,{name:`CheckIcon`,size:`sm`}),children:t(`story.contextmenu_save_image_as`)})]}),children:(0,v.jsx)(`div`,{style:{width:`300px`,height:`200px`,background:`var(--wim-color-primary)`,borderRadius:`8px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--wim-color-text-on-primary)`,fontSize:`18px`,fontWeight:`bold`,cursor:`pointer`},children:t(`story.contextmenu_on_image`)})})}},E={...S,play:h(`contextmenu`,`.wim-context-menu`,`[role="menu"]`)},D=[`Basic`,`Disabled`,`WithIcons`,`WithGroups`,`WithDisabledItems`,`OnImage`,`Open`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuItem onClick={() => console.log("Edit clicked")}>
              {t("story.contextmenu_edit")}
            </ContextMenuItem>
            <ContextMenuItem onClick={() => console.log("Copy clicked")}>
              {t("story.contextmenu_copy")}
            </ContextMenuItem>
            <ContextMenuItem onClick={() => console.log("Paste clicked")}>
              {t("story.contextmenu_paste")}
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem onClick={() => console.log("Delete clicked")} danger>
              {t("story.contextmenu_delete")}
            </ContextMenuItem>
          </>}>
        <div style={{
        padding: "60px 100px",
        backgroundColor: "var(--wim-color-surface-variant)",
        border: "2px dashed var(--wim-color-border)",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>
          {t("story.contextmenu_right_click")}
        </div>
      </ContextMenu>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuItem>{t("story.contextmenu_edit")}</ContextMenuItem>
            <ContextMenuItem>{t("story.contextmenu_copy")}</ContextMenuItem>
            <ContextMenuItem>{t("story.contextmenu_paste")}</ContextMenuItem>
          </>}>
        <div style={{
        padding: "60px 100px",
        backgroundColor: "var(--wim-color-surface-variant)",
        border: "2px dashed var(--wim-color-border)",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>
          {t("story.contextmenu_disabled_menu")}
        </div>
      </ContextMenu>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuItem icon={<Icon name="CheckIcon" size="sm" />} onClick={() => console.log("Edit clicked")}>
              {t("story.contextmenu_edit")}
            </ContextMenuItem>
            <ContextMenuItem icon={<Icon name="CopyIcon" size="sm" />} onClick={() => console.log("Copy clicked")}>
              {t("story.contextmenu_copy")}
            </ContextMenuItem>
            <ContextMenuItem icon={<Icon name="CheckIcon" size="sm" />} onClick={() => console.log("Paste clicked")}>
              {t("story.contextmenu_paste")}
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem icon={<Icon name="CloseIcon" size="sm" />} onClick={() => console.log("Delete clicked")} danger>
              {t("story.contextmenu_delete")}
            </ContextMenuItem>
          </>}>
        <div style={{
        padding: "60px 100px",
        backgroundColor: "var(--wim-color-info-subtle)",
        border: "2px dashed var(--wim-color-info)",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>
          {t("story.contextmenu_with_icons")}
        </div>
      </ContextMenu>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuGroup title={t("story.contextmenu_edit_actions")}>
              <ContextMenuItem>{t("story.contextmenu_cut")}</ContextMenuItem>
              <ContextMenuItem>{t("story.contextmenu_copy")}</ContextMenuItem>
              <ContextMenuItem>{t("story.contextmenu_paste")}</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuDivider />
            <ContextMenuGroup title={t("story.contextmenu_file_actions")}>
              <ContextMenuItem>{t("story.contextmenu_rename")}</ContextMenuItem>
              <ContextMenuItem>{t("story.contextmenu_move")}</ContextMenuItem>
              <ContextMenuItem danger>
                {t("story.contextmenu_delete")}
              </ContextMenuItem>
            </ContextMenuGroup>
          </>}>
        <div style={{
        padding: "60px 100px",
        backgroundColor: "var(--wim-color-warning-subtle)",
        border: "2px dashed var(--wim-color-warning)",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>
          {t("story.contextmenu_with_groups")}
        </div>
      </ContextMenu>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuItem>{t("story.contextmenu_cut")}</ContextMenuItem>
            <ContextMenuItem>{t("story.contextmenu_copy")}</ContextMenuItem>
            <ContextMenuItem disabled>
              {t("story.contextmenu_paste")} (disabled)
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem>{t("story.contextmenu_select_all")}</ContextMenuItem>
          </>}>
        <div style={{
        padding: "60px 100px",
        backgroundColor: "var(--wim-color-success-subtle)",
        border: "2px dashed var(--wim-color-success)",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>
          {t("story.contextmenu_disabled")}
        </div>
      </ContextMenu>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuItem icon={<Icon name="CheckIcon" size="sm" />}>
              {t("story.contextmenu_open_new_tab")}
            </ContextMenuItem>
            <ContextMenuItem icon={<Icon name="CopyIcon" size="sm" />}>
              {t("story.contextmenu_copy_image")}
            </ContextMenuItem>
            <ContextMenuItem icon={<Icon name="CopyIcon" size="sm" />}>
              {t("story.contextmenu_copy_image_address")}
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem icon={<Icon name="CheckIcon" size="sm" />}>
              {t("story.contextmenu_save_image_as")}
            </ContextMenuItem>
          </>}>
        <div style={{
        width: "300px",
        height: "200px",
        background: "var(--wim-color-primary)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--wim-color-text-on-primary)",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer"
      }}>
          {t("story.contextmenu_on_image")}
        </div>
      </ContextMenu>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...WithIcons,
  play: openWith("contextmenu", ".wim-context-menu", '[role="menu"]')
}`,...E.parameters?.docs?.source}}}})))()}export{S as a,C as i,T as n,O as o,w as r,_ as t};