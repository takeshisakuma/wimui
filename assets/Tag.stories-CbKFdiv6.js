"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{t as l}from"./src-BE5jBQ9L.js";import{t as u}from"./Icon-Bz8kwOgZ.js";import{t as d}from"./Button-d-SlSJ4S.js";import{a as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./Dialog-BM_5u5j_.js";import{r as y}from"./TagInput-Den4avVR.js";var b=e({Colors:()=>E,Default:()=>w,Deletable:()=>k,Sizes:()=>D,Variants:()=>T,WithIcon:()=>O,__namedExportsOrder:()=>A,default:()=>C}),x,S,C,w,T,E,D,O,k,A,j=t((()=>{x=n(r(),1),s(),a(),l(),S=o(),C={title:`Components/Data Indicators/Tag`,component:y,tags:[],argTypes:{intent:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`,`neutral`]},variant:{control:`select`,options:[`solid`,`outline`,`subtle`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}},parameters:{docs:{description:{component:`Data Indicators/Tag Component`}}}},w={render:function(e){let{t}=i(c);return(0,S.jsx)(y,{...e,children:t(`docs_stories_display:story.tag_content`)})},args:{intent:`primary`,variant:`solid`,size:`md`}},T={render:function(e){let{t}=i(c);return(0,S.jsxs)(`div`,{style:{display:`flex`,gap:`10px`},children:[(0,S.jsx)(y,{...e,variant:`solid`,children:t(`docs_stories_display:story.tag_solid`)}),(0,S.jsx)(y,{...e,variant:`outline`,children:t(`docs_stories_display:story.tag_outline`)}),(0,S.jsx)(y,{...e,variant:`subtle`,children:t(`docs_stories_display:story.tag_subtle`)})]})}},E={render:function(e){let{t}=i(c);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`},children:[(0,S.jsx)(y,{...e,intent:`primary`,children:t(`docs_stories_display:story.tag_primary`)}),(0,S.jsx)(y,{...e,intent:`secondary`,children:t(`docs_stories_display:story.tag_secondary`)}),(0,S.jsx)(y,{...e,intent:`success`,children:t(`docs_stories_display:story.tag_success`)}),(0,S.jsx)(y,{...e,intent:`warning`,children:t(`docs_stories_display:story.tag_warning`)}),(0,S.jsx)(y,{...e,intent:`danger`,children:t(`docs_stories_display:story.tag_error`)}),(0,S.jsx)(y,{...e,intent:`neutral`,children:t(`docs_stories_display:story.tag_neutral`)}),(0,S.jsx)(y,{...e,intent:`info`,children:t(`docs_stories_display:story.tag_info`)})]})}},D={render:function(e){let{t}=i(c);return(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,S.jsx)(y,{...e,size:`sm`,children:t(`docs_stories_display:story.tag_small`)}),(0,S.jsx)(y,{...e,size:`md`,children:t(`docs_stories_display:story.tag_medium`)})]})}},O={render:function(e){let{t}=i(c);return(0,S.jsx)(y,{...e,icon:(0,S.jsx)(u,{name:`CircleIcon`,size:`sm`}),children:t(`docs_stories_display:story.tag_with_icon`)})}},k={render:function(e){let{t}=i(c),[n,r]=(0,x.useState)(!1),[a,o]=(0,x.useState)(``);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,gap:`10px`},children:[(0,S.jsx)(y,{...e,onDelete:()=>{r(!0),o(`Solid Tag`)},children:t(`docs_stories_display:story.tag_deletable`)}),(0,S.jsx)(y,{...e,variant:`outline`,onDelete:()=>{r(!0),o(`Outline Tag`)},children:t(`docs_stories_display:story.tag_deletable`)}),(0,S.jsx)(y,{...e,variant:`subtle`,onDelete:()=>{r(!0),o(`Subtle Tag`)},children:t(`docs_stories_display:story.tag_deletable`)})]}),a&&(0,S.jsxs)(`p`,{style:{fontSize:`14px`,color:`var(--wim-color-text-secondary)`},children:[`Last action: `,a,` delete requested.`]}),(0,S.jsx)(m,{open:n,onOpenChange:r,children:(0,S.jsxs)(g,{children:[(0,S.jsxs)(h,{children:[(0,S.jsx)(_,{children:t(`docs_stories_display:story.dialog_confirm_title`)}),(0,S.jsx)(p,{children:t(`docs_stories_display:story.dialog_confirm_desc`)})]}),(0,S.jsxs)(f,{style:{flexDirection:`row`,justifyContent:`flex-end`,gap:`8px`},children:[(0,S.jsx)(v,{asChild:!0,children:(0,S.jsx)(d,{variant:`outline`,children:t(`docs_stories_display:story.dialog_cancel`)})}),(0,S.jsx)(d,{variant:`solid`,intent:`danger`,onClick:()=>r(!1),children:t(`docs_stories_display:story.dialog_confirm`)})]})]})})]})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args}>{t("docs_stories_display:story.tag_content")}</Tag>;
  },
  args: {
    intent: "primary",
    variant: "solid",
    size: "md"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      gap: "10px"
    }}>
        <Tag {...args} variant="solid">
          {t("docs_stories_display:story.tag_solid")}
        </Tag>
        <Tag {...args} variant="outline">
          {t("docs_stories_display:story.tag_outline")}
        </Tag>
        <Tag {...args} variant="subtle">
          {t("docs_stories_display:story.tag_subtle")}
        </Tag>
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px"
    }}>
        <Tag {...args} intent="primary">
          {t("docs_stories_display:story.tag_primary")}
        </Tag>
        <Tag {...args} intent="secondary">
          {t("docs_stories_display:story.tag_secondary")}
        </Tag>
        <Tag {...args} intent="success">
          {t("docs_stories_display:story.tag_success")}
        </Tag>
        <Tag {...args} intent="warning">
          {t("docs_stories_display:story.tag_warning")}
        </Tag>
        <Tag {...args} intent="danger">
          {t("docs_stories_display:story.tag_error")}
        </Tag>
        <Tag {...args} intent="neutral">
          {t("docs_stories_display:story.tag_neutral")}
        </Tag>
        <Tag {...args} intent="info">
          {t("docs_stories_display:story.tag_info")}
        </Tag>
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}>
        <Tag {...args} size="sm">
          {t("docs_stories_display:story.tag_small")}
        </Tag>
        <Tag {...args} size="md">
          {t("docs_stories_display:story.tag_medium")}
        </Tag>
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args} icon={<Icon name="CircleIcon" size="sm" />}>
        {t("docs_stories_display:story.tag_with_icon")}
      </Tag>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    const [lastAction, setLastAction] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        <div style={{
        display: "flex",
        gap: "10px"
      }}>
          <Tag {...args} onDelete={() => {
          setOpen(true);
          setLastAction("Solid Tag");
        }}>
            {t("docs_stories_display:story.tag_deletable")}
          </Tag>
          <Tag {...args} variant="outline" onDelete={() => {
          setOpen(true);
          setLastAction("Outline Tag");
        }}>
            {t("docs_stories_display:story.tag_deletable")}
          </Tag>
          <Tag {...args} variant="subtle" onDelete={() => {
          setOpen(true);
          setLastAction("Subtle Tag");
        }}>
            {t("docs_stories_display:story.tag_deletable")}
          </Tag>
        </div>

        {lastAction && <p style={{
        fontSize: "14px",
        color: "var(--wim-color-text-secondary)"
      }}>
            Last action: {lastAction} delete requested.
          </p>}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("docs_stories_display:story.dialog_confirm_title")}</DialogTitle>
              <DialogDescription>
                {t("docs_stories_display:story.dialog_confirm_desc")}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "8px"
          }}>
              <DialogClose asChild>
                <Button variant="outline">{t("docs_stories_display:story.dialog_cancel")}</Button>
              </DialogClose>
              <Button variant="solid" intent="danger" onClick={() => setOpen(false)}>
                {t("docs_stories_display:story.dialog_confirm")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Variants`,`Colors`,`Sizes`,`WithIcon`,`Deletable`]}));j();export{E as Colors,w as Default,k as Deletable,D as Sizes,T as Variants,O as WithIcon,A as __namedExportsOrder,C as default,j as n,b as t};