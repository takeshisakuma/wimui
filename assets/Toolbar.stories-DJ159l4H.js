"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{n as r,t as i}from"./useTranslation-CpMdOj2B.js";import{n as a,t as o}from"./i18nConstants-DbPgW6Wr.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./Button-Drq-Mw-h.js";import{n as u,t as d}from"./Toolbar-B0NZayez.js";import{n as f,t as p}from"./ToggleGroup-DJHodnfz.js";import{n as m,t as h}from"./IconButton-DxQRDsKK.js";var g=t({Collapsed:()=>C,Default:()=>b,Sizes:()=>x,Vertical:()=>S,__namedExportsOrder:()=>w,default:()=>y}),_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{_=n(),i(),u(),m(),c(),f(),a(),v=s(),y={title:`Components/Layout/Toolbar`,component:d,parameters:{layout:`centered`},argTypes:{asChild:{control:`boolean`},size:{control:`radio`,options:[`sm`,`md`,`lg`]},orientation:{control:`radio`,options:[`horizontal`,`vertical`]},overflow:{control:`radio`,options:[`wrap`,`collapse`]}},args:{size:`md`,orientation:`horizontal`}},b={render:e=>{let{t}=r(o);return(0,v.jsxs)(d,{...e,"aria-label":t(`story.toolbar_formatting`),children:[(0,v.jsxs)(d.Group,{"aria-label":t(`story.toolbar_text_style`),children:[(0,v.jsx)(h,{iconName:`EditIcon`,"aria-label":t(`story.dropdown_edit`),variant:`ghost`,size:`sm`}),(0,v.jsx)(h,{iconName:`CopyIcon`,"aria-label":t(`story.toolbar_copy`),variant:`ghost`,size:`sm`}),(0,v.jsx)(h,{iconName:`TrashIcon`,"aria-label":t(`story.dropdown_delete`),variant:`ghost`,size:`sm`})]}),(0,v.jsx)(d.Separator,{}),(0,v.jsx)(d.Group,{"aria-label":t(`story.toolbar_view`),children:(0,v.jsx)(p,{size:`sm`,selectionMode:`single`,"aria-label":t(`story.toolbar_view_mode`),options:[{value:`list`,iconName:`AlignJustifyIcon`,label:t(`story.toolbar_list`)},{value:`grid`,iconName:`ColumnsIcon`,label:t(`story.toolbar_columns`)},{value:`focus`,iconName:`MaximizeIcon`,label:t(`story.toolbar_focus`)}],defaultValue:`list`})}),(0,v.jsx)(d.Separator,{}),(0,v.jsx)(d.Group,{children:(0,v.jsx)(l,{size:`sm`,variant:`ghost`,children:t(`story.toolbar_clear`)})})]})}},x={render:()=>{let{t:e}=r(o);return(0,v.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-md)`},children:[`sm`,`md`,`lg`].map(t=>(0,v.jsxs)(d,{size:t,"aria-label":e(`story.toolbar_size`,{size:t}),children:[(0,v.jsx)(h,{iconName:`EditIcon`,"aria-label":e(`story.dropdown_edit`),variant:`ghost`,size:`sm`}),(0,v.jsx)(h,{iconName:`CopyIcon`,"aria-label":e(`story.toolbar_copy`),variant:`ghost`,size:`sm`}),(0,v.jsx)(d.Separator,{}),(0,v.jsx)(l,{size:`sm`,variant:`ghost`,children:t})]},t))})}},S={args:{orientation:`vertical`},render:e=>{let{t}=r(o);return(0,v.jsxs)(d,{...e,"aria-label":t(`story.toolbar_sidebar_actions`),children:[(0,v.jsx)(h,{iconName:`EditIcon`,"aria-label":t(`story.dropdown_edit`),variant:`ghost`,size:`sm`}),(0,v.jsx)(h,{iconName:`CopyIcon`,"aria-label":t(`story.toolbar_copy`),variant:`ghost`,size:`sm`}),(0,v.jsx)(d.Separator,{}),(0,v.jsx)(h,{iconName:`ExternalLinkIcon`,"aria-label":t(`story.toolbar_open`),variant:`ghost`,size:`sm`})]})}},C={args:{overflow:`collapse`},render:e=>{let{t}=r(o),[n,i]=(0,_.useState)(`list`);return(0,v.jsx)(`div`,{style:{width:`min(var(--wim-width-md), 100vw - 2rem)`},children:(0,v.jsxs)(d,{...e,"aria-label":t(`story.toolbar_formatting`),children:[(0,v.jsxs)(d.Group,{"aria-label":t(`story.toolbar_text_style`),children:[(0,v.jsx)(h,{iconName:`EditIcon`,"aria-label":t(`story.dropdown_edit`),variant:`ghost`,size:`sm`}),(0,v.jsx)(h,{iconName:`CopyIcon`,"aria-label":t(`story.toolbar_copy`),variant:`ghost`,size:`sm`}),(0,v.jsx)(h,{iconName:`TrashIcon`,"aria-label":t(`story.dropdown_delete`),variant:`ghost`,size:`sm`})]}),(0,v.jsx)(d.Separator,{}),(0,v.jsx)(d.Group,{"aria-label":t(`story.toolbar_view`),children:(0,v.jsx)(p,{size:`sm`,selectionMode:`single`,"aria-label":t(`story.toolbar_view_mode`),options:[{value:`list`,iconName:`AlignJustifyIcon`,label:t(`story.toolbar_list`)},{value:`grid`,iconName:`ColumnsIcon`,label:t(`story.toolbar_columns`)},{value:`focus`,iconName:`MaximizeIcon`,label:t(`story.toolbar_focus`)}],value:n,onChange:i})}),(0,v.jsx)(d.Separator,{}),(0,v.jsx)(h,{iconName:`ExternalLinkIcon`,"aria-label":t(`story.toolbar_open`),variant:`ghost`,size:`sm`}),(0,v.jsx)(l,{size:`sm`,variant:`ghost`,children:t(`story.toolbar_clear`)})]})})}},w=[`Default`,`Sizes`,`Vertical`,`Collapsed`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    overflow: "collapse"
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [view, setView] = useState<string | string[]>("list");
    return <div style={{
      width: "min(var(--wim-width-md), 100vw - 2rem)"
    }}>
        <Toolbar {...args} aria-label={t("story.toolbar_formatting")}>
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
          }]} value={view} onChange={setView} />
          </Toolbar.Group>
          <Toolbar.Separator />
          <IconButton iconName="ExternalLinkIcon" aria-label={t("story.toolbar_open")} variant="ghost" size="sm" />
          <Button size="sm" variant="ghost">
            {t("story.toolbar_clear")}
          </Button>
        </Toolbar>
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:`器（320px の狭いエディタのペイン）に入るだけを並べ、残りは「…」から同じコントロールを開く。
ToggleGroup は面へ移るときに作り直されるので、値は制御で持つ`,...C.parameters?.docs?.description}}}})))()}export{T as i,b as n,g as r,C as t};