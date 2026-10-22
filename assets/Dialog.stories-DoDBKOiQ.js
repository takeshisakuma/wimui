"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-MNZnjzfn.js";import{n as o,t as s}from"./i18nConstants-Dz9WmqoW.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./Button-CjAatOxn.js";import{n as d,t as f}from"./Label-DhocI_15.js";import{n as p,t as m}from"./Input-CJD1leiH.js";import{a as h,c as g,i as _,l as v,n as y,o as b,r as x,s as S,t as C}from"./Dialog-C5OrXyQB.js";var w=n({AlertDialog:()=>N,AlertDialogOpen:()=>P,Controlled:()=>A,Default:()=>O,Open:()=>F,Stacked:()=>j,Uncontrolled:()=>k,__namedExportsOrder:()=>I,default:()=>D}),T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{T=e(r(),1),a(),o(),l(),v(),p(),d(),E=c(),D={title:`Components/Overlays/Dialog`,component:y,parameters:{layout:`centered`},args:{closeOnOverlayClick:!0},argTypes:{open:{control:`boolean`,description:`Controlled open state of the dialog.`},defaultOpen:{control:`boolean`,description:`Default open state when uncontrolled.`},onOpenChange:{action:`onOpenChange`,description:`Event handler called when the open state changes.`},closeOnOverlayClick:{control:`boolean`,description:`Whether clicking the overlay backdrop closes the dialog.`},role:{control:`inline-radio`,options:[`dialog`,`alertdialog`],description:`ARIA role of the dialog content.`}}},O={args:{closeOnOverlayClick:!0},render:function(e){let{t}=i(s);return(0,E.jsxs)(y,{...e,children:[(0,E.jsx)(g,{asChild:!0,children:(0,E.jsx)(u,{variant:`solid`,children:t(`story.dialog_open`)})}),(0,E.jsxs)(x,{children:[(0,E.jsxs)(b,{children:[(0,E.jsx)(S,{children:t(`story.dialog_edit_title`)}),(0,E.jsx)(_,{children:t(`story.dialog_edit_desc`)})]}),(0,E.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`,padding:`1rem 0`},children:[(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,E.jsx)(f,{htmlFor:`name`,label:t(`story.dialog_name`)}),(0,E.jsx)(m,{id:`name`,defaultValue:`Pedro Duarte`,fullWidth:!0})]}),(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,E.jsx)(f,{htmlFor:`username`,label:t(`story.dialog_username`)}),(0,E.jsx)(m,{id:`username`,defaultValue:`@peduarte`,fullWidth:!0})]})]}),(0,E.jsxs)(h,{children:[(0,E.jsx)(C,{asChild:!0,children:(0,E.jsx)(u,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,E.jsx)(u,{variant:`solid`,children:t(`story.dialog_save`)})]})]})]})}},k={render:function(e){let{t}=i(s);return(0,E.jsxs)(y,{closeOnOverlayClick:e.closeOnOverlayClick,children:[(0,E.jsx)(g,{asChild:!0,children:(0,E.jsx)(u,{variant:`outline`,children:t(`story.dialog_uncontrolled`)})}),(0,E.jsxs)(x,{children:[(0,E.jsxs)(b,{children:[(0,E.jsx)(S,{children:t(`story.dialog_uncontrolled_title`)}),(0,E.jsx)(_,{children:t(`story.dialog_uncontrolled_desc`)})]}),(0,E.jsx)(`p`,{children:t(`story.dialog_uncontrolled_body`)}),(0,E.jsxs)(h,{children:[(0,E.jsx)(C,{asChild:!0,children:(0,E.jsx)(u,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,E.jsx)(u,{variant:`solid`,onClick:()=>alert(t(`story.dialog_confirmed_msg`)),children:t(`story.dialog_confirm`)})]})]})]})}},A={render:function(e){let{t}=i(s),[n,r]=(0,T.useState)(!1);return(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`center`},children:[(0,E.jsxs)(`p`,{children:[t(`story.dialog_curr_state`),`: `,t(n?`story.dialog_open_state`:`story.dialog_closed_state`)]}),(0,E.jsx)(u,{variant:`solid`,onClick:()=>r(!0),children:t(`story.dialog_state_open`)}),(0,E.jsx)(y,{open:n,onOpenChange:r,closeOnOverlayClick:e.closeOnOverlayClick,children:(0,E.jsxs)(x,{children:[(0,E.jsxs)(b,{children:[(0,E.jsx)(S,{children:t(`story.dialog_controlled_title`)}),(0,E.jsx)(_,{children:t(`story.dialog_controlled_desc`)})]}),(0,E.jsx)(`p`,{children:t(`story.dialog_controlled_body`)}),(0,E.jsxs)(h,{children:[(0,E.jsx)(u,{variant:`outline`,onClick:()=>r(!1),children:t(`story.dialog_cancel`)}),(0,E.jsx)(u,{variant:`solid`,onClick:()=>r(!1),children:t(`story.dialog_state_close`)})]})]})})]})}},j={render:function(e){let{t}=i(s);return(0,E.jsxs)(y,{...e,children:[(0,E.jsx)(g,{asChild:!0,children:(0,E.jsx)(u,{variant:`solid`,children:t(`story.dialog_stacked_trigger`)})}),(0,E.jsxs)(x,{children:[(0,E.jsxs)(b,{children:[(0,E.jsx)(S,{children:t(`story.dialog_stacked_title`)}),(0,E.jsx)(_,{children:t(`story.dialog_stacked_desc`)})]}),(0,E.jsx)(`p`,{style:{padding:`1rem 0`},children:t(`story.dialog_stacked_body`)}),(0,E.jsxs)(h,{layout:`column`,children:[(0,E.jsx)(C,{asChild:!0,children:(0,E.jsx)(u,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,E.jsx)(u,{variant:`solid`,children:t(`story.dialog_confirm`)})]})]})]})}},M=()=>{let{t:e}=i(s);return(0,E.jsxs)(x,{children:[(0,E.jsxs)(b,{children:[(0,E.jsx)(S,{children:e(`story.dialog_alert_title`)}),(0,E.jsx)(_,{children:e(`story.dialog_alert_desc`)})]}),(0,E.jsxs)(h,{children:[(0,E.jsx)(C,{asChild:!0,children:(0,E.jsx)(u,{variant:`outline`,children:e(`story.dialog_cancel`)})}),(0,E.jsx)(C,{asChild:!0,children:(0,E.jsx)(u,{variant:`solid`,intent:`danger`,children:e(`story.dialog_alert_confirm`)})})]})]})},N={args:{role:`alertdialog`,closeOnOverlayClick:void 0},render:function(e){let{t}=i(s);return(0,E.jsxs)(y,{...e,children:[(0,E.jsx)(g,{asChild:!0,children:(0,E.jsx)(u,{variant:`outline`,intent:`danger`,children:t(`story.dialog_alert_open`)})}),(0,E.jsx)(M,{})]})}},P={...N,tags:[`!autodocs`],parameters:{layout:`padded`},args:{...N.args,defaultOpen:!0}},F={...O,tags:[`!autodocs`],args:{...O.args,defaultOpen:!0}},I=[`Default`,`Uncontrolled`,`Controlled`,`Stacked`,`AlertDialog`,`AlertDialogOpen`,`Open`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    role: "alertdialog",
    // meta の \`closeOnOverlayClick: true\` を外して、alertdialog の既定（閉じない）を見せる
    closeOnOverlayClick: undefined
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline" intent="danger">{t("story.dialog_alert_open")}</Button>
        </DialogTrigger>
        <AlertDialogBody />
      </Dialog>;
  }
}`,...N.parameters?.docs?.source},description:{story:'応答するまで先へ進めないダイアログ。`role="alertdialog"` を渡すと、外側のクリックでは\n閉じなくなる（Escape と取り消しのボタンでは閉じる）。',...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...AlertDialog,
  // docs ページは <Stories /> で全ストーリーを並べる。載せると、ページを開いた瞬間に開いてしまう。
  tags: ["!autodocs"],
  parameters: {
    layout: "padded"
  },
  args: {
    ...AlertDialog.args,
    defaultOpen: true
  }
}`,...P.parameters?.docs?.source},description:{story:`開いた姿（自動検査用）。**引き金を中央に置かない**（\`layout: "padded"\`）── このダイアログは
背が低く、中央に置いた引き金がちょうど説明文の真裏に来る。axe は背後の要素が重なると背景色を
決められず、説明文のコントラストを「判定不能」にする（引き金を消すと判定でき、合格する。
2026-10-10 に実測）。引き金そのものは消せない ── 検査は \`#storybook-root\` に中身が入るのを
待つので、ポータルに出るダイアログだけだと、描画を待ち切れずに落ちる。`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  ...Default,
  // docs ページは <Stories /> で全ストーリーを並べる。載せると、ページを開いた瞬間に開いてしまう。
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    defaultOpen: true
  }
}`,...F.parameters?.docs?.source}}}})))()}export{L as n,w as t};