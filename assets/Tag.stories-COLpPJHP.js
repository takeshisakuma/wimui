"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{t as l}from"./src-CV0le6yM.js";import{t as u}from"./Icon-DKSRBrcV.js";import{t as d}from"./Button-vRcm9ObM.js";import{a as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./Dialog-DWvm-Ogx.js";import{r as y}from"./TagInput-ELhz9K8s.js";var b=e({Colors:()=>D,Default:()=>T,Deletable:()=>j,Sizes:()=>k,SubtleIntents:()=>O,Variants:()=>E,WithIcon:()=>A,__namedExportsOrder:()=>M,default:()=>w}),x,S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{x=n(r(),1),s(),a(),l(),S=o(),C=n(r(),1),w={title:`Components/Data Indicators/Tag`,component:y,tags:[],argTypes:{intent:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`,`neutral`]},variant:{control:`select`,options:[`solid`,`outline`,`subtle`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}},parameters:{docs:{description:{component:`Data Indicators/Tag Component`}}}},T={render:function(e){let{t}=i(c);return(0,S.jsx)(y,{...e,children:t(`docs_stories_display:story.tag_content`)})},args:{intent:`primary`,variant:`solid`,size:`md`}},E={render:function(e){let{t}=i(c);return(0,S.jsxs)(`div`,{style:{display:`flex`,gap:`10px`},children:[(0,S.jsx)(y,{...e,variant:`solid`,children:t(`docs_stories_display:story.tag_solid`)}),(0,S.jsx)(y,{...e,variant:`outline`,children:t(`docs_stories_display:story.tag_outline`)}),(0,S.jsx)(y,{...e,variant:`subtle`,children:t(`docs_stories_display:story.tag_subtle`)})]})}},D={render:function(e){let{t}=i(c);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`},children:[(0,S.jsx)(y,{...e,intent:`primary`,children:t(`docs_stories_display:story.tag_primary`)}),(0,S.jsx)(y,{...e,intent:`success`,children:t(`docs_stories_display:story.tag_success`)}),(0,S.jsx)(y,{...e,intent:`warning`,children:t(`docs_stories_display:story.tag_warning`)}),(0,S.jsx)(y,{...e,intent:`danger`,children:t(`docs_stories_display:story.tag_error`)}),(0,S.jsx)(y,{...e,intent:`neutral`,children:t(`docs_stories_display:story.tag_neutral`)}),(0,S.jsx)(y,{...e,intent:`info`,children:t(`docs_stories_display:story.tag_info`)})]})}},O={render:function(e){let{t}=i(c);return(0,S.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`},children:[[`primary`,`story.tag_primary`],[`success`,`story.tag_success`],[`warning`,`story.tag_warning`],[`danger`,`story.tag_error`],[`neutral`,`story.tag_neutral`],[`info`,`story.tag_info`]].map(([n,r])=>(0,C.createElement)(y,{...e,key:n,intent:n,variant:`subtle`},t(`docs_stories_display:${r}`)))})}},k={render:function(e){let{t}=i(c);return(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,S.jsx)(y,{...e,size:`sm`,children:t(`docs_stories_display:story.tag_small`)}),(0,S.jsx)(y,{...e,size:`md`,children:t(`docs_stories_display:story.tag_medium`)})]})}},A={render:function(e){let{t}=i(c);return(0,S.jsx)(y,{...e,icon:(0,S.jsx)(u,{name:`CircleIcon`,size:`sm`}),children:t(`docs_stories_display:story.tag_with_icon`)})}},j={render:function(e){let{t}=i(c),[n,r]=(0,x.useState)(!1),[a,o]=(0,x.useState)(``);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,gap:`10px`},children:[(0,S.jsx)(y,{...e,onDelete:()=>{r(!0),o(`Solid Tag`)},children:t(`docs_stories_display:story.tag_deletable`)}),(0,S.jsx)(y,{...e,variant:`outline`,onDelete:()=>{r(!0),o(`Outline Tag`)},children:t(`docs_stories_display:story.tag_deletable`)}),(0,S.jsx)(y,{...e,variant:`subtle`,onDelete:()=>{r(!0),o(`Subtle Tag`)},children:t(`docs_stories_display:story.tag_deletable`)})]}),a&&(0,S.jsxs)(`p`,{style:{fontSize:`14px`,color:`var(--wim-color-text-secondary)`},children:[`Last action: `,a,` delete requested.`]}),(0,S.jsx)(m,{open:n,onOpenChange:r,children:(0,S.jsxs)(g,{children:[(0,S.jsxs)(h,{children:[(0,S.jsx)(_,{children:t(`docs_stories_display:story.dialog_confirm_title`)}),(0,S.jsx)(p,{children:t(`docs_stories_display:story.dialog_confirm_desc`)})]}),(0,S.jsxs)(f,{style:{flexDirection:`row`,justifyContent:`flex-end`,gap:`8px`},children:[(0,S.jsx)(v,{asChild:!0,children:(0,S.jsx)(d,{variant:`outline`,children:t(`docs_stories_display:story.dialog_cancel`)})}),(0,S.jsx)(d,{variant:`solid`,intent:`danger`,onClick:()=>r(!1),children:t(`docs_stories_display:story.dialog_confirm`)})]})]})})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const intents = [["primary", "story.tag_primary"], ["success", "story.tag_success"], ["warning", "story.tag_warning"], ["danger", "story.tag_error"], ["neutral", "story.tag_neutral"], ["info", "story.tag_info"]] as const;
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px"
    }}>
        {intents.map(([intent, key]) => <Tag {...args} key={intent} intent={intent} variant="subtle">
            {t(\`docs_stories_display:\${key}\`)}
          </Tag>)}
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args} icon={<Icon name="CircleIcon" size="sm" />}>
        {t("docs_stories_display:story.tag_with_icon")}
      </Tag>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Variants`,`Colors`,`SubtleIntents`,`Sizes`,`WithIcon`,`Deletable`]}));N();export{D as Colors,T as Default,j as Deletable,k as Sizes,O as SubtleIntents,E as Variants,A as WithIcon,M as __namedExportsOrder,w as default,N as n,b as t};