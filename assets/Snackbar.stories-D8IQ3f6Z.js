"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{_n as l,t as u}from"./src-Ssuy8lr7.js";import{t as d}from"./Button-Dps1MPAd.js";var f=e({Danger:()=>S,Default:()=>v,Info:()=>w,InteractiveDemo:()=>E,LongContent:()=>T,Success:()=>x,Warning:()=>C,WithAction:()=>y,WithCloseButton:()=>b,__namedExportsOrder:()=>D,default:()=>_}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{p=n(r(),1),s(),a(),u(),m=o(),h=()=>typeof window<`u`&&!!window.__VRT__,g=()=>h()?{autoHideDuration:0}:{},_={title:`Components/Alerts & Notifications/Snackbar`,component:l,parameters:{layout:`centered`},args:{...g()},tags:[`!autodocs`],argTypes:{intent:{control:`select`,options:[`default`,`success`,`warning`,`danger`,`info`]},position:{control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`]}}},v={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_message`)})},args:{open:!0,intent:`default`,position:`bottom-center`}},y={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_deleted`),actionLabel:e.actionLabel||t(`story.snackbar_undo`),onAction:()=>alert(t(`story.snackbar_undo_clicked`))})},args:{open:!0}},b={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_persistent`)})},args:{open:!0,showCloseButton:!0,autoHideDuration:0}},x={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_saved`)})},args:{open:!0,intent:`success`}},S={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_failed`)})},args:{open:!0,intent:`danger`}},C={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_storage_full`)})},args:{open:!0,intent:`warning`}},w={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_update_available`)})},args:{open:!0,intent:`info`}},T={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,message:e.message||t(`story.snackbar_long_message`)})},args:{open:!0,intent:`warning`}},E={render:function(){let{t:e}=i(c),[t,n]=(0,p.useState)(!1);return(0,m.jsxs)(`div`,{style:{padding:`40px`},children:[(0,m.jsx)(d,{onClick:()=>n(!0),variant:`solid`,children:e(`story.snackbar_show`)}),(0,m.jsx)(l,{message:e(`story.snackbar_interactive`),open:t,onClose:()=>n(!1),actionLabel:e(`story.snackbar_retry`),showCloseButton:!0})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_deleted")} actionLabel={args.actionLabel || t("story.snackbar_undo")} onAction={() => alert(t("story.snackbar_undo_clicked"))} />;
  },
  args: {
    open: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_long_message")} />;
  },
  args: {
    open: true,
    intent: "warning"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithAction`,`WithCloseButton`,`Success`,`Danger`,`Warning`,`Info`,`LongContent`,`InteractiveDemo`]}));O();export{S as Danger,v as Default,w as Info,E as InteractiveDemo,T as LongContent,x as Success,C as Warning,y as WithAction,b as WithCloseButton,D as __namedExportsOrder,_ as default,O as n,f as t};