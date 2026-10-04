"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Icon-B_89lpXW.js";import{n as d,t as f}from"./Button-DrO46Brn.js";import{a as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b}from"./Dialog-CCxekzaR.js";import{n as x,t as S}from"./Tag-XSlQ-8jJ.js";var C=n({Colors:()=>A,Default:()=>O,Deletable:()=>P,Sizes:()=>M,SubtleIntents:()=>j,Variants:()=>k,WithIcon:()=>N,__namedExportsOrder:()=>F,default:()=>D}),w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{w=e(r(),1),a(),o(),l(),x(),h(),d(),T=c(),E=r(),D={title:`Components/Data Indicators/Tag`,component:S,tags:[],argTypes:{intent:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`,`neutral`]},variant:{control:`select`,options:[`solid`,`outline`,`subtle`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}},parameters:{docs:{description:{component:`Data Indicators/Tag Component`}}}},O={render:function(e){let{t}=i(s);return(0,T.jsx)(S,{...e,children:t(`docs_stories_display:story.tag_content`)})},args:{intent:`primary`,variant:`solid`,size:`md`}},k={render:function(e){let{t}=i(s);return(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`10px`},children:[(0,T.jsx)(S,{...e,variant:`solid`,children:t(`docs_stories_display:story.tag_solid`)}),(0,T.jsx)(S,{...e,variant:`outline`,children:t(`docs_stories_display:story.tag_outline`)}),(0,T.jsx)(S,{...e,variant:`subtle`,children:t(`docs_stories_display:story.tag_subtle`)})]})}},A={render:function(e){let{t}=i(s);return(0,T.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`},children:[(0,T.jsx)(S,{...e,intent:`primary`,children:t(`docs_stories_display:story.tag_primary`)}),(0,T.jsx)(S,{...e,intent:`success`,children:t(`docs_stories_display:story.tag_success`)}),(0,T.jsx)(S,{...e,intent:`warning`,children:t(`docs_stories_display:story.tag_warning`)}),(0,T.jsx)(S,{...e,intent:`danger`,children:t(`docs_stories_display:story.tag_error`)}),(0,T.jsx)(S,{...e,intent:`neutral`,children:t(`docs_stories_display:story.tag_neutral`)}),(0,T.jsx)(S,{...e,intent:`info`,children:t(`docs_stories_display:story.tag_info`)})]})}},j={render:function(e){let{t}=i(s);return(0,T.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`},children:[[`primary`,`story.tag_primary`],[`success`,`story.tag_success`],[`warning`,`story.tag_warning`],[`danger`,`story.tag_error`],[`neutral`,`story.tag_neutral`],[`info`,`story.tag_info`]].map(([n,r])=>(0,E.createElement)(S,{...e,key:n,intent:n,variant:`subtle`},t(`docs_stories_display:${r}`)))})}},M={render:function(e){let{t}=i(s);return(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,T.jsx)(S,{...e,size:`sm`,children:t(`docs_stories_display:story.tag_small`)}),(0,T.jsx)(S,{...e,size:`md`,children:t(`docs_stories_display:story.tag_medium`)}),(0,T.jsx)(S,{...e,size:`lg`,children:t(`docs_stories_display:story.tag_large`)})]})}},N={render:function(e){let{t}=i(s);return(0,T.jsx)(S,{...e,icon:(0,T.jsx)(u,{name:`CircleIcon`,size:`sm`}),children:t(`docs_stories_display:story.tag_with_icon`)})}},P={render:function(e){let{t}=i(s),[n,r]=(0,w.useState)(!1),[a,o]=(0,w.useState)(``);return(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`10px`},children:[(0,T.jsx)(S,{...e,onDelete:()=>{r(!0),o(`Solid Tag`)},children:t(`docs_stories_display:story.tag_deletable`)}),(0,T.jsx)(S,{...e,variant:`outline`,onDelete:()=>{r(!0),o(`Outline Tag`)},children:t(`docs_stories_display:story.tag_deletable`)}),(0,T.jsx)(S,{...e,variant:`subtle`,onDelete:()=>{r(!0),o(`Subtle Tag`)},children:t(`docs_stories_display:story.tag_deletable`)})]}),a&&(0,T.jsxs)(`p`,{style:{fontSize:`14px`,color:`var(--wim-color-text-secondary)`},children:[`Last action: `,a,` delete requested.`]}),(0,T.jsx)(g,{open:n,onOpenChange:r,children:(0,T.jsxs)(v,{children:[(0,T.jsxs)(_,{children:[(0,T.jsx)(y,{children:t(`docs_stories_display:story.dialog_confirm_title`)}),(0,T.jsx)(m,{children:t(`docs_stories_display:story.dialog_confirm_desc`)})]}),(0,T.jsxs)(p,{style:{flexDirection:`row`,justifyContent:`flex-end`,gap:`8px`},children:[(0,T.jsx)(b,{asChild:!0,children:(0,T.jsx)(f,{variant:`outline`,children:t(`docs_stories_display:story.dialog_cancel`)})}),(0,T.jsx)(f,{variant:`solid`,intent:`danger`,onClick:()=>r(!1),children:t(`docs_stories_display:story.dialog_confirm`)})]})]})})]})}},F=[`Default`,`Variants`,`Colors`,`SubtleIntents`,`Sizes`,`WithIcon`,`Deletable`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
        <Tag {...args} size="lg">
          {t("docs_stories_display:story.tag_large")}
        </Tag>
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args} icon={<Icon name="CircleIcon" size="sm" />}>
        {t("docs_stories_display:story.tag_with_icon")}
      </Tag>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}}})))()}export{C as a,I as c,M as i,O as n,k as o,P as r,N as s,A as t};