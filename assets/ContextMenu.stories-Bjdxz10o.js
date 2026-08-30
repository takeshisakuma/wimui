"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{B as c,L as l,R as u,t as d,z as f}from"./src-CV0le6yM.js";import{t as p}from"./Icon-DKSRBrcV.js";var m=e({Basic:()=>_,Disabled:()=>v,OnImage:()=>S,WithDisabledItems:()=>x,WithGroups:()=>b,WithIcons:()=>y,__namedExportsOrder:()=>C,default:()=>g}),h,g,_,v,y,b,x,S,C,w=t((()=>{n(),o(),i(),d(),h=a(),g={title:`Components/Overlays/ContextMenu`,component:l,parameters:{layout:`centered`},argTypes:{disabled:{control:`boolean`}}},_={args:{disabled:!1},render:e=>{let{t}=r(s);return(0,h.jsx)(l,{...e,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{onClick:()=>console.log(`Edit clicked`),children:t(`story.contextmenu_edit`)}),(0,h.jsx)(c,{onClick:()=>console.log(`Copy clicked`),children:t(`story.contextmenu_copy`)}),(0,h.jsx)(c,{onClick:()=>console.log(`Paste clicked`),children:t(`story.contextmenu_paste`)}),(0,h.jsx)(u,{}),(0,h.jsx)(c,{onClick:()=>console.log(`Delete clicked`),danger:!0,children:t(`story.contextmenu_delete`)})]}),children:(0,h.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-surface-variant)`,border:`2px dashed var(--wim-color-border)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_right_click`)})})}},v={args:{disabled:!0},render:e=>{let{t}=r(s);return(0,h.jsx)(l,{...e,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{children:t(`story.contextmenu_edit`)}),(0,h.jsx)(c,{children:t(`story.contextmenu_copy`)}),(0,h.jsx)(c,{children:t(`story.contextmenu_paste`)})]}),children:(0,h.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-surface-variant)`,border:`2px dashed var(--wim-color-border)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_disabled_menu`)})})}},y={render:e=>{let{t}=r(s);return(0,h.jsx)(l,{...e,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{icon:(0,h.jsx)(p,{name:`CheckIcon`,size:`sm`}),onClick:()=>console.log(`Edit clicked`),children:t(`story.contextmenu_edit`)}),(0,h.jsx)(c,{icon:(0,h.jsx)(p,{name:`CopyIcon`,size:`sm`}),onClick:()=>console.log(`Copy clicked`),children:t(`story.contextmenu_copy`)}),(0,h.jsx)(c,{icon:(0,h.jsx)(p,{name:`CheckIcon`,size:`sm`}),onClick:()=>console.log(`Paste clicked`),children:t(`story.contextmenu_paste`)}),(0,h.jsx)(u,{}),(0,h.jsx)(c,{icon:(0,h.jsx)(p,{name:`CloseIcon`,size:`sm`}),onClick:()=>console.log(`Delete clicked`),danger:!0,children:t(`story.contextmenu_delete`)})]}),children:(0,h.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-info-subtle)`,border:`2px dashed var(--wim-color-info)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_with_icons`)})})}},b={render:e=>{let{t}=r(s);return(0,h.jsx)(l,{...e,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(f,{title:t(`story.contextmenu_edit_actions`),children:[(0,h.jsx)(c,{children:t(`story.contextmenu_cut`)}),(0,h.jsx)(c,{children:t(`story.contextmenu_copy`)}),(0,h.jsx)(c,{children:t(`story.contextmenu_paste`)})]}),(0,h.jsx)(u,{}),(0,h.jsxs)(f,{title:t(`story.contextmenu_file_actions`),children:[(0,h.jsx)(c,{children:t(`story.contextmenu_rename`)}),(0,h.jsx)(c,{children:t(`story.contextmenu_move`)}),(0,h.jsx)(c,{danger:!0,children:t(`story.contextmenu_delete`)})]})]}),children:(0,h.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-warning-subtle)`,border:`2px dashed var(--wim-color-warning)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_with_groups`)})})}},x={render:e=>{let{t}=r(s);return(0,h.jsx)(l,{...e,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{children:t(`story.contextmenu_cut`)}),(0,h.jsx)(c,{children:t(`story.contextmenu_copy`)}),(0,h.jsxs)(c,{disabled:!0,children:[t(`story.contextmenu_paste`),` (disabled)`]}),(0,h.jsx)(u,{}),(0,h.jsx)(c,{children:t(`story.contextmenu_select_all`)})]}),children:(0,h.jsx)(`div`,{style:{padding:`60px 100px`,backgroundColor:`var(--wim-color-success-subtle)`,border:`2px dashed var(--wim-color-success)`,borderRadius:`8px`,textAlign:`center`,cursor:`pointer`},children:t(`story.contextmenu_disabled`)})})}},S={render:e=>{let{t}=r(s);return(0,h.jsx)(l,{...e,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{icon:(0,h.jsx)(p,{name:`CheckIcon`,size:`sm`}),children:t(`story.contextmenu_open_new_tab`)}),(0,h.jsx)(c,{icon:(0,h.jsx)(p,{name:`CopyIcon`,size:`sm`}),children:t(`story.contextmenu_copy_image`)}),(0,h.jsx)(c,{icon:(0,h.jsx)(p,{name:`CopyIcon`,size:`sm`}),children:t(`story.contextmenu_copy_image_address`)}),(0,h.jsx)(u,{}),(0,h.jsx)(c,{icon:(0,h.jsx)(p,{name:`CheckIcon`,size:`sm`}),children:t(`story.contextmenu_save_image_as`)})]}),children:(0,h.jsx)(`div`,{style:{width:`300px`,height:`200px`,background:`var(--wim-color-primary)`,borderRadius:`8px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--wim-color-text-on-primary)`,fontSize:`18px`,fontWeight:`bold`,cursor:`pointer`},children:t(`story.contextmenu_on_image`)})})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Basic`,`Disabled`,`WithIcons`,`WithGroups`,`WithDisabledItems`,`OnImage`]}));w();export{_ as Basic,v as Disabled,S as OnImage,x as WithDisabledItems,b as WithGroups,y as WithIcons,C as __namedExportsOrder,g as default,w as n,m as t};