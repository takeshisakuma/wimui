"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Button-DrO46Brn.js";import{n as l,t as u}from"./Toolbar-vDSsboiJ.js";import{n as d,t as f}from"./ToggleGroup-bCYBqjmw.js";import{n as p,t as m}from"./IconButton-Vaooi49W.js";var h=t({Default:()=>v,Sizes:()=>y,Vertical:()=>b,__namedExportsOrder:()=>x,default:()=>_}),g,_,v,y,b,x;function S(){return(S=e((()=>{r(),l(),p(),s(),d(),i(),g=o(),_={title:`Components/Layout/Toolbar`,component:u,parameters:{layout:`centered`},argTypes:{asChild:{control:`boolean`},size:{control:`radio`,options:[`sm`,`md`,`lg`]},orientation:{control:`radio`,options:[`horizontal`,`vertical`]}},args:{size:`md`,orientation:`horizontal`}},v={render:e=>{let{t}=n(a);return(0,g.jsxs)(u,{...e,"aria-label":t(`story.toolbar_formatting`),children:[(0,g.jsxs)(u.Group,{"aria-label":t(`story.toolbar_text_style`),children:[(0,g.jsx)(m,{iconName:`EditIcon`,"aria-label":t(`story.dropdown_edit`),variant:`ghost`,size:`sm`}),(0,g.jsx)(m,{iconName:`CopyIcon`,"aria-label":t(`story.toolbar_copy`),variant:`ghost`,size:`sm`}),(0,g.jsx)(m,{iconName:`TrashIcon`,"aria-label":t(`story.dropdown_delete`),variant:`ghost`,size:`sm`})]}),(0,g.jsx)(u.Separator,{}),(0,g.jsx)(u.Group,{"aria-label":t(`story.toolbar_view`),children:(0,g.jsx)(f,{size:`sm`,selectionMode:`single`,"aria-label":t(`story.toolbar_view_mode`),options:[{value:`list`,iconName:`AlignJustifyIcon`,label:t(`story.toolbar_list`)},{value:`grid`,iconName:`ColumnsIcon`,label:t(`story.toolbar_columns`)},{value:`focus`,iconName:`MaximizeIcon`,label:t(`story.toolbar_focus`)}],defaultValue:`list`})}),(0,g.jsx)(u.Separator,{}),(0,g.jsx)(u.Group,{children:(0,g.jsx)(c,{size:`sm`,variant:`ghost`,children:t(`story.toolbar_clear`)})})]})}},y={render:()=>{let{t:e}=n(a);return(0,g.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-md)`},children:[`sm`,`md`,`lg`].map(t=>(0,g.jsxs)(u,{size:t,"aria-label":e(`story.toolbar_size`,{size:t}),children:[(0,g.jsx)(m,{iconName:`EditIcon`,"aria-label":e(`story.dropdown_edit`),variant:`ghost`,size:`sm`}),(0,g.jsx)(m,{iconName:`CopyIcon`,"aria-label":e(`story.toolbar_copy`),variant:`ghost`,size:`sm`}),(0,g.jsx)(u.Separator,{}),(0,g.jsx)(c,{size:`sm`,variant:`ghost`,children:t})]},t))})}},b={args:{orientation:`vertical`},render:e=>{let{t}=n(a);return(0,g.jsxs)(u,{...e,"aria-label":t(`story.toolbar_sidebar_actions`),children:[(0,g.jsx)(m,{iconName:`EditIcon`,"aria-label":t(`story.dropdown_edit`),variant:`ghost`,size:`sm`}),(0,g.jsx)(m,{iconName:`CopyIcon`,"aria-label":t(`story.toolbar_copy`),variant:`ghost`,size:`sm`}),(0,g.jsx)(u.Separator,{}),(0,g.jsx)(m,{iconName:`ExternalLinkIcon`,"aria-label":t(`story.toolbar_open`),variant:`ghost`,size:`sm`})]})}},x=[`Default`,`Sizes`,`Vertical`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toolbar {...args} aria-label={t("story.toolbar_formatting")}>
        <Toolbar.Group aria-label={t("story.toolbar_text_style")}>
          <IconButton iconName="EditIcon" aria-label={t("story.dropdown_edit")} variant="ghost" size="sm" />
          <IconButton iconName="CopyIcon" aria-label={t("story.toolbar_copy")} variant="ghost" size="sm" />
          <IconButton iconName="TrashIcon" aria-label={t("story.dropdown_delete")} variant="ghost" size="sm" />
        </Toolbar.Group>
        <Toolbar.Separator />
        <Toolbar.Group aria-label={t("story.toolbar_view")}>
          <ToggleGroup size="sm" selectionMode="single" aria-label={t("story.toolbar_view_mode")} options={[{
          value: "list",
          iconName: "AlignJustifyIcon",
          label: t("story.toolbar_list")
        }, {
          value: "grid",
          iconName: "ColumnsIcon",
          label: t("story.toolbar_columns")
        }, {
          value: "focus",
          iconName: "MaximizeIcon",
          label: t("story.toolbar_focus")
        }]} defaultValue="list" />
        </Toolbar.Group>
        <Toolbar.Separator />
        <Toolbar.Group>
          <Button size="sm" variant="ghost">
            {t("story.toolbar_clear")}
          </Button>
        </Toolbar.Group>
      </Toolbar>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-md)"
    }}>
        {(["sm", "md", "lg"] as const).map(size => <Toolbar key={size} size={size} aria-label={t("story.toolbar_size", {
        size
      })}>
            <IconButton iconName="EditIcon" aria-label={t("story.dropdown_edit")} variant="ghost" size="sm" />
            <IconButton iconName="CopyIcon" aria-label={t("story.toolbar_copy")} variant="ghost" size="sm" />
            <Toolbar.Separator />
            <Button size="sm" variant="ghost">
              {size}
            </Button>
          </Toolbar>)}
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "vertical"
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toolbar {...args} aria-label={t("story.toolbar_sidebar_actions")}>
        <IconButton iconName="EditIcon" aria-label={t("story.dropdown_edit")} variant="ghost" size="sm" />
        <IconButton iconName="CopyIcon" aria-label={t("story.toolbar_copy")} variant="ghost" size="sm" />
        <Toolbar.Separator />
        <IconButton iconName="ExternalLinkIcon" aria-label={t("story.toolbar_open")} variant="ghost" size="sm" />
      </Toolbar>;
  }
}`,...b.parameters?.docs?.source}}}})))()}export{h as n,S as r,v as t};