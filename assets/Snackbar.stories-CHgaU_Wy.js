"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{gn as l,t as u}from"./src-BE5jBQ9L.js";import{t as d}from"./Button-d-SlSJ4S.js";var f=e({Danger:()=>b,Default:()=>g,Info:()=>S,InteractiveDemo:()=>C,Success:()=>y,Warning:()=>x,WithAction:()=>_,WithCloseButton:()=>v,__namedExportsOrder:()=>w,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{p=n(r(),1),s(),a(),u(),m=o(),h={title:`Components/Alerts & Notifications/Snackbar`,component:l,parameters:{layout:`centered`},tags:[`!autodocs`],argTypes:{intent:{control:`select`,options:[`default`,`success`,`warning`,`danger`,`info`]},position:{control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`]}}},g={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_message`)})},args:{open:!0,intent:`default`,position:`bottom-center`}},_={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_deleted`),actionLabel:e.actionLabel||t(`story.snackbar_undo`),onAction:()=>alert(t(`story.snackbar_undo_clicked`))})},args:{open:!0}},v={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_persistent`)})},args:{open:!0,showCloseButton:!0,autoHideDuration:0}},y={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_saved`)})},args:{open:!0,intent:`success`}},b={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_failed`)})},args:{open:!0,intent:`danger`}},x={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_storage_full`)})},args:{open:!0,intent:`warning`}},S={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_update_available`)})},args:{open:!0,intent:`info`}},C={render:function(){let{t:e}=i(c),[t,n]=(0,p.useState)(!1);return(0,m.jsxs)(`div`,{style:{padding:`40px`},children:[(0,m.jsx)(d,{onClick:()=>n(!0),variant:`solid`,children:e(`story.snackbar_show`)}),(0,m.jsx)(l,{message:e(`story.snackbar_interactive`),open:t,onClose:()=>n(!1),actionLabel:e(`story.snackbar_retry`),showCloseButton:!0})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_message")} />;
  },
  args: {
    open: true,
    intent: "default",
    position: "bottom-center"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_deleted")} actionLabel={args.actionLabel || t("story.snackbar_undo")} onAction={() => alert(t("story.snackbar_undo_clicked"))} />;
  },
  args: {
    open: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_persistent")} />;
  },
  args: {
    open: true,
    showCloseButton: true,
    autoHideDuration: 0
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_saved")} />;
  },
  args: {
    open: true,
    intent: "success"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_failed")} />;
  },
  args: {
    open: true,
    intent: "danger"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_storage_full")} />;
  },
  args: {
    open: true,
    intent: "warning"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_update_available")} />;
  },
  args: {
    open: true,
    intent: "info"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: "40px"
    }}>
        <Button onClick={() => setOpen(true)} variant="solid">{t("story.snackbar_show")}</Button>
        <Snackbar message={t("story.snackbar_interactive")} open={open} onClose={() => setOpen(false)} actionLabel={t("story.snackbar_retry")} showCloseButton />
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithAction`,`WithCloseButton`,`Success`,`Danger`,`Warning`,`Info`,`InteractiveDemo`]}));T();export{b as Danger,g as Default,S as Info,C as InteractiveDemo,y as Success,x as Warning,_ as WithAction,v as WithCloseButton,w as __namedExportsOrder,h as default,T as n,f as t};