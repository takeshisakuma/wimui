"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{t as l}from"./src-BE5jBQ9L.js";import{t as u}from"./Button-d-SlSJ4S.js";import{a as d}from"./FieldTemplate-C0nkiaIz.js";import{t as f}from"./Input-Bi6gYF1O.js";import{a as p,c as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./Dialog-BM_5u5j_.js";var x=e({Controlled:()=>D,Default:()=>T,Stacked:()=>O,Uncontrolled:()=>E,__namedExportsOrder:()=>k,default:()=>w}),S,C,w,T,E,D,O,k,A=t((()=>{r(),S=n(r(),1),s(),a(),l(),C=o(),w={title:`Components/Overlays/Dialog`,component:g,parameters:{layout:`centered`},args:{closeOnOverlayClick:!0},argTypes:{open:{control:`boolean`,description:`Controlled open state of the dialog.`},defaultOpen:{control:`boolean`,description:`Default open state when uncontrolled.`},onOpenChange:{action:`onOpenChange`,description:`Event handler called when the open state changes.`},closeOnOverlayClick:{control:`boolean`,description:`Whether clicking the overlay backdrop closes the dialog.`}}},T={args:{closeOnOverlayClick:!0},render:function(e){let{t}=i(c);return(0,C.jsxs)(g,{...e,children:[(0,C.jsx)(m,{asChild:!0,children:(0,C.jsx)(u,{variant:`solid`,children:t(`story.dialog_open`)})}),(0,C.jsxs)(v,{children:[(0,C.jsxs)(_,{children:[(0,C.jsx)(y,{children:t(`story.dialog_edit_title`)}),(0,C.jsx)(h,{children:t(`story.dialog_edit_desc`)})]}),(0,C.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`,padding:`1rem 0`},children:[(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,C.jsx)(d,{htmlFor:`name`,label:t(`story.dialog_name`)}),(0,C.jsx)(f,{id:`name`,defaultValue:`Pedro Duarte`,fullWidth:!0})]}),(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,C.jsx)(d,{htmlFor:`username`,label:t(`story.dialog_username`)}),(0,C.jsx)(f,{id:`username`,defaultValue:`@peduarte`,fullWidth:!0})]})]}),(0,C.jsxs)(p,{children:[(0,C.jsx)(b,{asChild:!0,children:(0,C.jsx)(u,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,C.jsx)(u,{variant:`solid`,children:t(`story.dialog_save`)})]})]})]})}},E={render:function(e){let{t}=i(c);return(0,C.jsxs)(g,{closeOnOverlayClick:e.closeOnOverlayClick,children:[(0,C.jsx)(m,{asChild:!0,children:(0,C.jsx)(u,{variant:`outline`,children:t(`story.dialog_uncontrolled`)})}),(0,C.jsxs)(v,{children:[(0,C.jsxs)(_,{children:[(0,C.jsx)(y,{children:t(`story.dialog_uncontrolled_title`)}),(0,C.jsx)(h,{children:t(`story.dialog_uncontrolled_desc`)})]}),(0,C.jsx)(`p`,{children:t(`story.dialog_uncontrolled_body`)}),(0,C.jsxs)(p,{children:[(0,C.jsx)(b,{asChild:!0,children:(0,C.jsx)(u,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,C.jsx)(u,{variant:`solid`,onClick:()=>alert(t(`story.dialog_confirmed_msg`)),children:t(`story.dialog_confirm`)})]})]})]})}},D={render:function(e){let{t}=i(c),[n,r]=(0,S.useState)(!1);return(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`center`},children:[(0,C.jsxs)(`p`,{children:[t(`story.dialog_curr_state`),`: `,t(n?`story.dialog_open_state`:`story.dialog_closed_state`)]}),(0,C.jsx)(u,{variant:`solid`,onClick:()=>r(!0),children:t(`story.dialog_state_open`)}),(0,C.jsx)(g,{open:n,onOpenChange:r,closeOnOverlayClick:e.closeOnOverlayClick,children:(0,C.jsxs)(v,{children:[(0,C.jsxs)(_,{children:[(0,C.jsx)(y,{children:t(`story.dialog_controlled_title`)}),(0,C.jsx)(h,{children:t(`story.dialog_controlled_desc`)})]}),(0,C.jsx)(`p`,{children:t(`story.dialog_controlled_body`)}),(0,C.jsxs)(p,{children:[(0,C.jsx)(u,{variant:`outline`,onClick:()=>r(!1),children:t(`story.dialog_cancel`)}),(0,C.jsx)(u,{variant:`solid`,onClick:()=>r(!1),children:t(`story.dialog_state_close`)})]})]})})]})}},O={render:function(e){let{t}=i(c);return(0,C.jsxs)(g,{...e,children:[(0,C.jsx)(m,{asChild:!0,children:(0,C.jsx)(u,{variant:`solid`,children:t(`story.dialog_stacked_trigger`)})}),(0,C.jsxs)(v,{children:[(0,C.jsxs)(_,{children:[(0,C.jsx)(y,{children:t(`story.dialog_stacked_title`)}),(0,C.jsx)(h,{children:t(`story.dialog_stacked_desc`)})]}),(0,C.jsx)(`p`,{style:{padding:`1rem 0`},children:t(`story.dialog_stacked_body`)}),(0,C.jsxs)(p,{layout:`column`,children:[(0,C.jsx)(b,{asChild:!0,children:(0,C.jsx)(u,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,C.jsx)(u,{variant:`solid`,children:t(`story.dialog_confirm`)})]})]})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Uncontrolled`,`Controlled`,`Stacked`]}));A();export{D as Controlled,T as Default,O as Stacked,E as Uncontrolled,k as __namedExportsOrder,w as default,A as n,x as t};