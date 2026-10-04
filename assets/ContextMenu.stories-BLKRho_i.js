"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Icon-B_89lpXW.js";import{a as u,i as d,n as f,r as p,t as m}from"./ContextMenu-BsGZGJin.js";var h=t({Basic:()=>v,Disabled:()=>y,OnImage:()=>C,WithDisabledItems:()=>S,WithGroups:()=>x,WithIcons:()=>b,__namedExportsOrder:()=>w,default:()=>_}),g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),i(),a(),u(),c(),g=s(),_={title:`Components/Overlays/ContextMenu`,component:m,parameters:{layout:`centered`},argTypes:{disabled:{control:`boolean`}}},v={args:{disabled:!1},render:e=>{let{t}=r(o);return(0,g.jsx)(m,{...e,menu:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{onClick:()=>console.log(`Edit clicked`),children:t(`story.contextmenu_edit`)}),(0,g.jsx)(d,{onClick:()=>console.log(`Copy clicked`),children:t(`story.contextmenu_copy`)}),(0,g.jsx)(d,{onClick:()=>console.log(`Paste clicked`),children:t(`story.contextmenu_paste`)}),(0,g.jsx)(f,{}),(0,g.jsx)(d,{onClick:()=>console.log(`Delete clicked`),danger:!0,children:t(`story.contextmenu_delete`)})]}),children:(0,g.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-surface-variant)`,border:`2px dashed var(--wim-color-border)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_right_click`)})})}},y={args:{disabled:!0},render:e=>{let{t}=r(o);return(0,g.jsx)(m,{...e,menu:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{children:t(`story.contextmenu_edit`)}),(0,g.jsx)(d,{children:t(`story.contextmenu_copy`)}),(0,g.jsx)(d,{children:t(`story.contextmenu_paste`)})]}),children:(0,g.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-surface-variant)`,border:`2px dashed var(--wim-color-border)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_disabled_menu`)})})}},b={render:e=>{let{t}=r(o);return(0,g.jsx)(m,{...e,menu:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{icon:(0,g.jsx)(l,{name:`CheckIcon`,size:`sm`}),onClick:()=>console.log(`Edit clicked`),children:t(`story.contextmenu_edit`)}),(0,g.jsx)(d,{icon:(0,g.jsx)(l,{name:`CopyIcon`,size:`sm`}),onClick:()=>console.log(`Copy clicked`),children:t(`story.contextmenu_copy`)}),(0,g.jsx)(d,{icon:(0,g.jsx)(l,{name:`CheckIcon`,size:`sm`}),onClick:()=>console.log(`Paste clicked`),children:t(`story.contextmenu_paste`)}),(0,g.jsx)(f,{}),(0,g.jsx)(d,{icon:(0,g.jsx)(l,{name:`CloseIcon`,size:`sm`}),onClick:()=>console.log(`Delete clicked`),danger:!0,children:t(`story.contextmenu_delete`)})]}),children:(0,g.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-info-subtle)`,border:`2px dashed var(--wim-color-info)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_with_icons`)})})}},x={render:e=>{let{t}=r(o);return(0,g.jsx)(m,{...e,menu:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(p,{title:t(`story.contextmenu_edit_actions`),children:[(0,g.jsx)(d,{children:t(`story.contextmenu_cut`)}),(0,g.jsx)(d,{children:t(`story.contextmenu_copy`)}),(0,g.jsx)(d,{children:t(`story.contextmenu_paste`)})]}),(0,g.jsx)(f,{}),(0,g.jsxs)(p,{title:t(`story.contextmenu_file_actions`),children:[(0,g.jsx)(d,{children:t(`story.contextmenu_rename`)}),(0,g.jsx)(d,{children:t(`story.contextmenu_move`)}),(0,g.jsx)(d,{danger:!0,children:t(`story.contextmenu_delete`)})]})]}),children:(0,g.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-warning-subtle)`,border:`2px dashed var(--wim-color-warning)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_with_groups`)})})}},S={render:e=>{let{t}=r(o);return(0,g.jsx)(m,{...e,menu:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{children:t(`story.contextmenu_cut`)}),(0,g.jsx)(d,{children:t(`story.contextmenu_copy`)}),(0,g.jsxs)(d,{disabled:!0,children:[t(`story.contextmenu_paste`),` (disabled)`]}),(0,g.jsx)(f,{}),(0,g.jsx)(d,{children:t(`story.contextmenu_select_all`)})]}),children:(0,g.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-success-subtle)`,border:`2px dashed var(--wim-color-success)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_disabled`)})})}},C={render:e=>{let{t}=r(o);return(0,g.jsx)(m,{...e,menu:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{icon:(0,g.jsx)(l,{name:`CheckIcon`,size:`sm`}),children:t(`story.contextmenu_open_new_tab`)}),(0,g.jsx)(d,{icon:(0,g.jsx)(l,{name:`CopyIcon`,size:`sm`}),children:t(`story.contextmenu_copy_image`)}),(0,g.jsx)(d,{icon:(0,g.jsx)(l,{name:`CopyIcon`,size:`sm`}),children:t(`story.contextmenu_copy_image_address`)}),(0,g.jsx)(f,{}),(0,g.jsx)(d,{icon:(0,g.jsx)(l,{name:`CheckIcon`,size:`sm`}),children:t(`story.contextmenu_save_image_as`)})]}),children:(0,g.jsx)(`div`,{style:{width:`300px`,height:`200px`,background:`var(--wim-color-primary)`,borderRadius:`8px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--wim-color-text-on-primary)`,fontSize:`18px`,fontWeight:`bold`,cursor:`pointer`},children:t(`story.contextmenu_on_image`)})})}},w=[`Basic`,`Disabled`,`WithIcons`,`WithGroups`,`WithDisabledItems`,`OnImage`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}}})))()}export{b as a,x as i,C as n,T as o,S as r,h as t};