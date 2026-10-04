"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Button-DrO46Brn.js";import{n as d,t as f}from"./Snackbar-bM-D35Lr.js";var p=n({Danger:()=>C,Default:()=>y,Info:()=>T,InteractiveDemo:()=>D,LongContent:()=>E,Success:()=>S,Warning:()=>w,WithAction:()=>b,WithCloseButton:()=>x,__namedExportsOrder:()=>O,default:()=>v}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=t((()=>{m=e(r(),1),a(),o(),l(),d(),h=c(),g=()=>typeof window<`u`&&!!window.__VRT__,_=()=>g()?{autoHideDuration:0}:{},v={title:`Components/Alerts & Notifications/Snackbar`,component:f,parameters:{layout:`centered`},args:{..._()},tags:[`!autodocs`],argTypes:{intent:{control:`select`,options:[`default`,`success`,`warning`,`danger`,`info`]},position:{control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`]}}},y={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,message:e.message||t(`story.snackbar_message`)})},args:{open:!0,intent:`default`,position:`bottom-center`}},b={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,message:e.message||t(`story.snackbar_deleted`),actionLabel:e.actionLabel||t(`story.snackbar_undo`),onAction:()=>alert(t(`story.snackbar_undo_clicked`))})},args:{open:!0}},x={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,message:e.message||t(`story.snackbar_persistent`)})},args:{open:!0,showCloseButton:!0,autoHideDuration:0}},S={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,message:e.message||t(`story.snackbar_saved`)})},args:{open:!0,intent:`success`}},C={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,message:e.message||t(`story.snackbar_failed`)})},args:{open:!0,intent:`danger`}},w={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,message:e.message||t(`story.snackbar_storage_full`)})},args:{open:!0,intent:`warning`}},T={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,message:e.message||t(`story.snackbar_update_available`)})},args:{open:!0,intent:`info`}},E={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,message:e.message||t(`story.snackbar_long_message`)})},args:{open:!0,intent:`warning`}},D={render:function(){let{t:e}=i(s),[t,n]=(0,m.useState)(!1);return(0,h.jsxs)(`div`,{style:{padding:`40px`},children:[(0,h.jsx)(u,{onClick:()=>n(!0),variant:`solid`,children:e(`story.snackbar_show`)}),(0,h.jsx)(f,{message:e(`story.snackbar_interactive`),open:t,onClose:()=>n(!1),actionLabel:e(`story.snackbar_retry`),showCloseButton:!0})]})}},O=[`Default`,`WithAction`,`WithCloseButton`,`Success`,`Danger`,`Warning`,`Info`,`LongContent`,`InteractiveDemo`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Snackbar {...args} message={args.message || t("story.snackbar_deleted")} actionLabel={args.actionLabel || t("story.snackbar_undo")} onAction={() => alert(t("story.snackbar_undo_clicked"))} />;
  },
  args: {
    open: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}}})))()}export{w as a,S as i,T as n,k as o,p as r,C as t};