"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-DrO46Brn.js";import{n as u,t as d}from"./Label-BlSd2eBr.js";import{n as f,t as p}from"./Input-Cx7cDmF1.js";import{a as m,c as h,i as g,l as _,n as v,o as y,r as b,s as x,t as S}from"./Dialog-CCxekzaR.js";var C=t({Controlled:()=>k,Default:()=>D,Stacked:()=>A,Uncontrolled:()=>O,__namedExportsOrder:()=>j,default:()=>E}),w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{n(),w=n(),i(),a(),c(),_(),f(),u(),T=s(),E={title:`Components/Overlays/Dialog`,component:v,parameters:{layout:`centered`},args:{closeOnOverlayClick:!0},argTypes:{open:{control:`boolean`,description:`Controlled open state of the dialog.`},defaultOpen:{control:`boolean`,description:`Default open state when uncontrolled.`},onOpenChange:{action:`onOpenChange`,description:`Event handler called when the open state changes.`},closeOnOverlayClick:{control:`boolean`,description:`Whether clicking the overlay backdrop closes the dialog.`}}},D={args:{closeOnOverlayClick:!0},render:function(e){let{t}=r(o);return(0,T.jsxs)(v,{...e,children:[(0,T.jsx)(h,{asChild:!0,children:(0,T.jsx)(l,{variant:`solid`,children:t(`story.dialog_open`)})}),(0,T.jsxs)(b,{children:[(0,T.jsxs)(y,{children:[(0,T.jsx)(x,{children:t(`story.dialog_edit_title`)}),(0,T.jsx)(g,{children:t(`story.dialog_edit_desc`)})]}),(0,T.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`,padding:`1rem 0`},children:[(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,T.jsx)(d,{htmlFor:`name`,label:t(`story.dialog_name`)}),(0,T.jsx)(p,{id:`name`,defaultValue:`Pedro Duarte`,fullWidth:!0})]}),(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,T.jsx)(d,{htmlFor:`username`,label:t(`story.dialog_username`)}),(0,T.jsx)(p,{id:`username`,defaultValue:`@peduarte`,fullWidth:!0})]})]}),(0,T.jsxs)(m,{children:[(0,T.jsx)(S,{asChild:!0,children:(0,T.jsx)(l,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,T.jsx)(l,{variant:`solid`,children:t(`story.dialog_save`)})]})]})]})}},O={render:function(e){let{t}=r(o);return(0,T.jsxs)(v,{closeOnOverlayClick:e.closeOnOverlayClick,children:[(0,T.jsx)(h,{asChild:!0,children:(0,T.jsx)(l,{variant:`outline`,children:t(`story.dialog_uncontrolled`)})}),(0,T.jsxs)(b,{children:[(0,T.jsxs)(y,{children:[(0,T.jsx)(x,{children:t(`story.dialog_uncontrolled_title`)}),(0,T.jsx)(g,{children:t(`story.dialog_uncontrolled_desc`)})]}),(0,T.jsx)(`p`,{children:t(`story.dialog_uncontrolled_body`)}),(0,T.jsxs)(m,{children:[(0,T.jsx)(S,{asChild:!0,children:(0,T.jsx)(l,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,T.jsx)(l,{variant:`solid`,onClick:()=>alert(t(`story.dialog_confirmed_msg`)),children:t(`story.dialog_confirm`)})]})]})]})}},k={render:function(e){let{t}=r(o),[n,i]=(0,w.useState)(!1);return(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`center`},children:[(0,T.jsxs)(`p`,{children:[t(`story.dialog_curr_state`),`: `,t(n?`story.dialog_open_state`:`story.dialog_closed_state`)]}),(0,T.jsx)(l,{variant:`solid`,onClick:()=>i(!0),children:t(`story.dialog_state_open`)}),(0,T.jsx)(v,{open:n,onOpenChange:i,closeOnOverlayClick:e.closeOnOverlayClick,children:(0,T.jsxs)(b,{children:[(0,T.jsxs)(y,{children:[(0,T.jsx)(x,{children:t(`story.dialog_controlled_title`)}),(0,T.jsx)(g,{children:t(`story.dialog_controlled_desc`)})]}),(0,T.jsx)(`p`,{children:t(`story.dialog_controlled_body`)}),(0,T.jsxs)(m,{children:[(0,T.jsx)(l,{variant:`outline`,onClick:()=>i(!1),children:t(`story.dialog_cancel`)}),(0,T.jsx)(l,{variant:`solid`,onClick:()=>i(!1),children:t(`story.dialog_state_close`)})]})]})})]})}},A={render:function(e){let{t}=r(o);return(0,T.jsxs)(v,{...e,children:[(0,T.jsx)(h,{asChild:!0,children:(0,T.jsx)(l,{variant:`solid`,children:t(`story.dialog_stacked_trigger`)})}),(0,T.jsxs)(b,{children:[(0,T.jsxs)(y,{children:[(0,T.jsx)(x,{children:t(`story.dialog_stacked_title`)}),(0,T.jsx)(g,{children:t(`story.dialog_stacked_desc`)})]}),(0,T.jsx)(`p`,{style:{padding:`1rem 0`},children:t(`story.dialog_stacked_body`)}),(0,T.jsxs)(m,{layout:`column`,children:[(0,T.jsx)(S,{asChild:!0,children:(0,T.jsx)(l,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,T.jsx)(l,{variant:`solid`,children:t(`story.dialog_confirm`)})]})]})]})}},j=[`Default`,`Uncontrolled`,`Controlled`,`Stacked`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnOverlayClick: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="solid">{t("story.dialog_open")}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("story.dialog_edit_title")}</DialogTitle>
            <DialogDescription>{t("story.dialog_edit_desc")}</DialogDescription>
          </DialogHeader>
          <div style={{
          display: "grid",
          gap: "1.5rem",
          padding: "1rem 0"
        }}>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>
              <Label htmlFor="name" label={t("story.dialog_name")} />
              <Input id="name" defaultValue="Pedro Duarte" fullWidth />
            </div>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>
              <Label htmlFor="username" label={t("story.dialog_username")} />
              <Input id="username" defaultValue="@peduarte" fullWidth />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DialogClose>
            <Button variant="solid">{t("story.dialog_save")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dialog closeOnOverlayClick={args.closeOnOverlayClick}>
        <DialogTrigger asChild>
          <Button variant="outline">{t("story.dialog_uncontrolled")}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("story.dialog_uncontrolled_title")}</DialogTitle>
            <DialogDescription>
              {t("story.dialog_uncontrolled_desc")}
            </DialogDescription>
          </DialogHeader>
          <p>{t("story.dialog_uncontrolled_body")}</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DialogClose>
            <Button variant="solid" onClick={() => alert(t("story.dialog_confirmed_msg"))}>{t("story.dialog_confirm")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center"
    }}>
        <p>
          {t("story.dialog_curr_state")}: {open ? t("story.dialog_open_state") : t("story.dialog_closed_state")}
        </p>
        <Button variant="solid" onClick={() => setOpen(true)}>{t("story.dialog_state_open")}</Button>

        <Dialog open={open} onOpenChange={setOpen} closeOnOverlayClick={args.closeOnOverlayClick}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("story.dialog_controlled_title")}</DialogTitle>
              <DialogDescription>
                {t("story.dialog_controlled_desc")}
              </DialogDescription>
            </DialogHeader>
            <p>{t("story.dialog_controlled_body")}</p>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>{t("story.dialog_cancel")}</Button>
              <Button variant="solid" onClick={() => setOpen(false)}>{t("story.dialog_state_close")}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="solid">{t("story.dialog_stacked_trigger")}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("story.dialog_stacked_title")}</DialogTitle>
            <DialogDescription>
              {t("story.dialog_stacked_desc")}
            </DialogDescription>
          </DialogHeader>
          <p style={{
          padding: "1rem 0"
        }}>{t("story.dialog_stacked_body")}</p>
          <DialogFooter layout="column">
            <DialogClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DialogClose>
            <Button variant="solid">{t("story.dialog_confirm")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...A.parameters?.docs?.source}}}})))()}export{M as n,C as t};