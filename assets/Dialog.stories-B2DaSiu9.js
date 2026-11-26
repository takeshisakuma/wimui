"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-YD8z3mm4.js";import{t as ee}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./Button-BZJbe9C-.js";import{n as u,t as d}from"./Label-CyxCZ7Fk.js";import{n as f,t as p}from"./Input-DdAacezo.js";import{n as te,t as m}from"./Combobox-Da0D_O0P.js";import{n as h,t as g}from"./DatePicker-AQUzvYUm.js";import{n as _,t as v}from"./MultiSelect-BF-IxHWS.js";import{n as y,t as b}from"./Select-vESggt9m.js";import{a as x,c as S,i as C,l as w,n as T,o as E,r as D,s as O,t as k}from"./Dialog-MLzHYwEX.js";import{a as A,i as j,n as M,r as N,t as P}from"./Dropdown-Fbe1NbVw.js";import{n as F,t as I}from"./Link-CeY1MoVs.js";var L=n({AlertDialog:()=>q,AlertDialogOpen:()=>J,Controlled:()=>U,Default:()=>V,InitialFocusTarget:()=>X,InitialFocusTargetOpen:()=>Z,Open:()=>Y,Stacked:()=>W,Uncontrolled:()=>H,WithPopupsInside:()=>G,__namedExportsOrder:()=>Q,default:()=>B}),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{R=e(r(),1),a(),o(),c(),te(),h(),w(),A(),f(),u(),F(),_(),y(),z=ee(),B={title:`Components/Overlays/Dialog`,component:T,parameters:{layout:`centered`},args:{closeOnOverlayClick:!0},argTypes:{open:{control:`boolean`,description:`Controlled open state of the dialog.`},defaultOpen:{control:`boolean`,description:`Default open state when uncontrolled.`},onOpenChange:{action:`onOpenChange`,description:`Event handler called when the open state changes.`},closeOnOverlayClick:{control:`boolean`,description:`Whether clicking the overlay backdrop closes the dialog.`},role:{control:`inline-radio`,options:[`dialog`,`alertdialog`],description:`ARIA role of the dialog content.`}}},V={args:{closeOnOverlayClick:!0},render:function(e){let{t}=i(s);return(0,z.jsxs)(T,{...e,children:[(0,z.jsx)(S,{asChild:!0,children:(0,z.jsx)(l,{variant:`solid`,children:t(`story.dialog_open`)})}),(0,z.jsxs)(D,{children:[(0,z.jsxs)(E,{children:[(0,z.jsx)(O,{children:t(`story.dialog_edit_title`)}),(0,z.jsx)(C,{children:t(`story.dialog_edit_desc`)})]}),(0,z.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`,padding:`1rem 0`},children:[(0,z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,z.jsx)(d,{htmlFor:`name`,label:t(`story.dialog_name`)}),(0,z.jsx)(p,{id:`name`,defaultValue:`Pedro Duarte`,fullWidth:!0})]}),(0,z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,z.jsx)(d,{htmlFor:`username`,label:t(`story.dialog_username`)}),(0,z.jsx)(p,{id:`username`,defaultValue:`@peduarte`,fullWidth:!0})]})]}),(0,z.jsxs)(x,{children:[(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(l,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,z.jsx)(l,{variant:`solid`,children:t(`story.dialog_save`)})]})]})]})}},H={render:function(e){let{t}=i(s);return(0,z.jsxs)(T,{closeOnOverlayClick:e.closeOnOverlayClick,children:[(0,z.jsx)(S,{asChild:!0,children:(0,z.jsx)(l,{variant:`outline`,children:t(`story.dialog_uncontrolled`)})}),(0,z.jsxs)(D,{children:[(0,z.jsxs)(E,{children:[(0,z.jsx)(O,{children:t(`story.dialog_uncontrolled_title`)}),(0,z.jsx)(C,{children:t(`story.dialog_uncontrolled_desc`)})]}),(0,z.jsx)(`p`,{children:t(`story.dialog_uncontrolled_body`)}),(0,z.jsxs)(x,{children:[(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(l,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,z.jsx)(l,{variant:`solid`,onClick:()=>alert(t(`story.dialog_confirmed_msg`)),children:t(`story.dialog_confirm`)})]})]})]})}},U={render:function(e){let{t}=i(s),[n,r]=(0,R.useState)(!1);return(0,z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`center`},children:[(0,z.jsxs)(`p`,{children:[t(`story.dialog_curr_state`),`: `,t(n?`story.dialog_open_state`:`story.dialog_closed_state`)]}),(0,z.jsx)(l,{variant:`solid`,onClick:()=>r(!0),children:t(`story.dialog_state_open`)}),(0,z.jsx)(T,{open:n,onOpenChange:r,closeOnOverlayClick:e.closeOnOverlayClick,children:(0,z.jsxs)(D,{children:[(0,z.jsxs)(E,{children:[(0,z.jsx)(O,{children:t(`story.dialog_controlled_title`)}),(0,z.jsx)(C,{children:t(`story.dialog_controlled_desc`)})]}),(0,z.jsx)(`p`,{children:t(`story.dialog_controlled_body`)}),(0,z.jsxs)(x,{children:[(0,z.jsx)(l,{variant:`outline`,onClick:()=>r(!1),children:t(`story.dialog_cancel`)}),(0,z.jsx)(l,{variant:`solid`,onClick:()=>r(!1),children:t(`story.dialog_state_close`)})]})]})})]})}},W={render:function(e){let{t}=i(s);return(0,z.jsxs)(T,{...e,children:[(0,z.jsx)(S,{asChild:!0,children:(0,z.jsx)(l,{variant:`solid`,children:t(`story.dialog_stacked_trigger`)})}),(0,z.jsxs)(D,{children:[(0,z.jsxs)(E,{children:[(0,z.jsx)(O,{children:t(`story.dialog_stacked_title`)}),(0,z.jsx)(C,{children:t(`story.dialog_stacked_desc`)})]}),(0,z.jsx)(`p`,{style:{padding:`1rem 0`},children:t(`story.dialog_stacked_body`)}),(0,z.jsxs)(x,{layout:`column`,children:[(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(l,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,z.jsx)(l,{variant:`solid`,children:t(`story.dialog_confirm`)})]})]})]})}},G={render:function(e){let{t}=i(s);return(0,z.jsxs)(T,{...e,children:[(0,z.jsx)(S,{asChild:!0,children:(0,z.jsx)(l,{variant:`solid`,children:t(`story.dialog_event_open`)})}),(0,z.jsxs)(D,{children:[(0,z.jsxs)(E,{children:[(0,z.jsx)(O,{children:t(`story.dialog_event_title`)}),(0,z.jsx)(C,{children:t(`story.dialog_event_desc`)})]}),(0,z.jsxs)(`div`,{style:{display:`grid`,gap:`var(--wim-spacing-lg)`,padding:`var(--wim-spacing-md) 0`},children:[(0,z.jsx)(g,{label:t(`story.dialog_event_date`),defaultValue:new Date(2026,10,24),fullWidth:!0}),(0,z.jsx)(b,{label:t(`story.dialog_event_repeat`),defaultValue:`weekly`,fullWidth:!0,options:[{label:t(`story.dialog_event_repeat_none`),value:`none`},{label:t(`story.dialog_event_repeat_weekly`),value:`weekly`},{label:t(`story.dialog_event_repeat_monthly`),value:`monthly`}]}),(0,z.jsx)(m,{label:t(`story.dialog_event_room`),placeholder:t(`story.dialog_event_room_placeholder`),fullWidth:!0,options:[{label:`Atlas (6F)`,value:`atlas`},{label:`Borealis (6F)`,value:`borealis`},{label:`Cove (3F)`,value:`cove`}]}),(0,z.jsx)(v,{label:t(`story.dialog_event_guests`),defaultValue:[`ana`,`kenji`],fullWidth:!0,options:[{label:`Ana Souza`,value:`ana`},{label:`Kenji Mori`,value:`kenji`},{label:`Lucas Pereira`,value:`lucas`},{label:`Yui Tanaka`,value:`yui`}]})]}),(0,z.jsxs)(x,{children:[(0,z.jsxs)(P,{children:[(0,z.jsx)(j,{asChild:!0,children:(0,z.jsx)(l,{variant:`ghost`,children:t(`story.dialog_event_more`)})}),(0,z.jsxs)(N,{children:[(0,z.jsx)(M,{children:t(`story.dialog_event_duplicate`)}),(0,z.jsx)(M,{children:t(`story.dialog_event_export`)})]})]}),(0,z.jsxs)(T,{role:`alertdialog`,children:[(0,z.jsx)(S,{asChild:!0,children:(0,z.jsx)(l,{variant:`outline`,intent:`danger`,children:t(`story.dialog_event_delete`)})}),(0,z.jsxs)(D,{children:[(0,z.jsxs)(E,{children:[(0,z.jsx)(O,{children:t(`story.dialog_event_delete_title`)}),(0,z.jsx)(C,{children:t(`story.dialog_event_delete_desc`)})]}),(0,z.jsxs)(x,{children:[(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(l,{variant:`outline`,"data-autofocus":!0,children:t(`story.dialog_cancel`)})}),(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(l,{variant:`solid`,intent:`danger`,children:t(`story.dialog_event_delete_confirm`)})})]})]})]}),(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(l,{variant:`solid`,children:t(`story.dialog_save`)})})]})]})]})}},K=()=>{let{t:e}=i(s);return(0,z.jsxs)(D,{children:[(0,z.jsxs)(E,{children:[(0,z.jsx)(O,{children:e(`story.dialog_alert_title`)}),(0,z.jsx)(C,{children:e(`story.dialog_alert_desc`)})]}),(0,z.jsxs)(x,{children:[(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(l,{variant:`outline`,children:e(`story.dialog_cancel`)})}),(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(l,{variant:`solid`,intent:`danger`,children:e(`story.dialog_alert_confirm`)})})]})]})},q={args:{role:`alertdialog`,closeOnOverlayClick:void 0},render:function(e){let{t}=i(s);return(0,z.jsxs)(T,{...e,children:[(0,z.jsx)(S,{asChild:!0,children:(0,z.jsx)(l,{variant:`outline`,intent:`danger`,children:t(`story.dialog_alert_open`)})}),(0,z.jsx)(K,{})]})}},J={...q,tags:[`!autodocs`],parameters:{layout:`padded`,docs:{disable:!0}},args:{...q.args,defaultOpen:!0}},Y={...V,tags:[`!autodocs`],parameters:{docs:{disable:!0}},args:{...V.args,defaultOpen:!0}},X={render:function(e){let{t}=i(s);return(0,z.jsxs)(T,{...e,children:[(0,z.jsx)(S,{asChild:!0,children:(0,z.jsx)(l,{variant:`outline`,children:t(`story.dialog_rename_open`)})}),(0,z.jsxs)(D,{children:[(0,z.jsxs)(E,{children:[(0,z.jsx)(O,{children:t(`story.dialog_rename_title`)}),(0,z.jsxs)(C,{children:[t(`story.dialog_rename_desc`),` `,(0,z.jsx)(I,{href:`#naming-rules`,children:t(`story.dialog_rename_rules`)})]})]}),(0,z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`,padding:`1rem 0`},children:[(0,z.jsx)(d,{htmlFor:`project-name`,label:t(`story.dialog_rename_label`)}),(0,z.jsx)(p,{id:`project-name`,defaultValue:t(`story.dialog_rename_value`),fullWidth:!0,"data-autofocus":!0})]}),(0,z.jsxs)(x,{children:[(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(l,{variant:`outline`,children:t(`story.dialog_cancel`)})}),(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(l,{variant:`solid`,children:t(`story.dialog_rename_save`)})})]})]})]})}},Z={...X,tags:[`!autodocs`],parameters:{docs:{disable:!0}},args:{defaultOpen:!0}},Q=[`Default`,`Uncontrolled`,`Controlled`,`Stacked`,`WithPopupsInside`,`AlertDialog`,`AlertDialogOpen`,`Open`,`InitialFocusTarget`,`InitialFocusTargetOpen`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="solid">{t("story.dialog_event_open")}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("story.dialog_event_title")}</DialogTitle>
            <DialogDescription>{t("story.dialog_event_desc")}</DialogDescription>
          </DialogHeader>
          <div style={{
          display: "grid",
          gap: "var(--wim-spacing-lg)",
          padding: "var(--wim-spacing-md) 0"
        }}>
            <DatePicker label={t("story.dialog_event_date")} defaultValue={new Date(2026, 10, 24)} fullWidth />
            <Select label={t("story.dialog_event_repeat")} defaultValue="weekly" fullWidth options={[{
            label: t("story.dialog_event_repeat_none"),
            value: "none"
          }, {
            label: t("story.dialog_event_repeat_weekly"),
            value: "weekly"
          }, {
            label: t("story.dialog_event_repeat_monthly"),
            value: "monthly"
          }]} />
            <Combobox label={t("story.dialog_event_room")} placeholder={t("story.dialog_event_room_placeholder")} fullWidth options={[{
            label: "Atlas (6F)",
            value: "atlas"
          }, {
            label: "Borealis (6F)",
            value: "borealis"
          }, {
            label: "Cove (3F)",
            value: "cove"
          }]} />
            <MultiSelect label={t("story.dialog_event_guests")} defaultValue={["ana", "kenji"]} fullWidth options={[{
            label: "Ana Souza",
            value: "ana"
          }, {
            label: "Kenji Mori",
            value: "kenji"
          }, {
            label: "Lucas Pereira",
            value: "lucas"
          }, {
            label: "Yui Tanaka",
            value: "yui"
          }]} />
          </div>
          <DialogFooter>
            <Dropdown>
              <DropdownTrigger asChild>
                <Button variant="ghost">{t("story.dialog_event_more")}</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>{t("story.dialog_event_duplicate")}</DropdownItem>
                <DropdownItem>{t("story.dialog_event_export")}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dialog role="alertdialog">
              <DialogTrigger asChild>
                <Button variant="outline" intent="danger">{t("story.dialog_event_delete")}</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t("story.dialog_event_delete_title")}</DialogTitle>
                  <DialogDescription>{t("story.dialog_event_delete_desc")}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" data-autofocus>{t("story.dialog_cancel")}</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button variant="solid" intent="danger">{t("story.dialog_event_delete_confirm")}</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <DialogClose asChild>
              <Button variant="solid">{t("story.dialog_save")}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...G.parameters?.docs?.source},description:{story:`中で一覧や暦を開くダイアログ（T408）。Escape を押したとき閉じるのは一番上の面だけ ── 開いた
一覧・暦・メニュー・削除の確認のダイアログが先に閉じ、外側のダイアログは残る。閉じた引き金に
フォーカスがあるときの Escape は、外側のダイアログを閉じる。E2E（\`vrt/escape-layers.e2e.spec.ts\`）が
このストーリーを開いて確かめる。`,...G.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:'応答するまで先へ進めないダイアログ。`role="alertdialog"` を渡すと、外側のクリックでは\n閉じなくなる（Escape と取り消しのボタンでは閉じる）。',...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  ...AlertDialog,
  // docs ページは <Stories /> で全ストーリーを並べる。載せると、ページを開いた瞬間に開いてしまう。
  // MDX の docs ページでは \`!autodocs\` の印は効かない（自動生成の docs ページ用）ので、docs.disable で外す
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      disable: true
    }
  },
  args: {
    ...AlertDialog.args,
    defaultOpen: true
  }
}`,...J.parameters?.docs?.source},description:{story:`開いた姿（自動検査用）。**引き金を中央に置かない**（\`layout: "padded"\`）── このダイアログは
背が低く、中央に置いた引き金がちょうど説明文の真裏に来る。axe は背後の要素が重なると背景色を
決められず、説明文のコントラストを「判定不能」にする（引き金を消すと判定でき、合格する。
2026-10-10 に実測）。引き金そのものは消せない ── 検査は \`#storybook-root\` に中身が入るのを
待つので、ポータルに出るダイアログだけだと、描画を待ち切れずに落ちる。`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  ...Default,
  // docs ページは <Stories /> で全ストーリーを並べる。載せると、ページを開いた瞬間に開いてしまう。
  // MDX の docs ページでは \`!autodocs\` の印は効かない（自動生成の docs ページ用）ので、docs.disable で外す
  tags: ["!autodocs"],
  parameters: {
    docs: {
      disable: true
    }
  },
  args: {
    ...Default.args,
    defaultOpen: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline">{t("story.dialog_rename_open")}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("story.dialog_rename_title")}</DialogTitle>
            <DialogDescription>
              {t("story.dialog_rename_desc")} <Link href="#naming-rules">{t("story.dialog_rename_rules")}</Link>
            </DialogDescription>
          </DialogHeader>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          padding: "1rem 0"
        }}>
            <Label htmlFor="project-name" label={t("story.dialog_rename_label")} />
            <Input id="project-name" defaultValue={t("story.dialog_rename_value")} fullWidth data-autofocus />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="solid">{t("story.dialog_rename_save")}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...X.parameters?.docs?.source},description:{story:`最初のフォーカス先を選ぶ（T399）。説明文の中のリンクが DOM で先に来るが、開いたら名前の欄に
置きたい ── 置きたい要素に \`data-autofocus\` を付ける。印が無ければ、DOM の最初の要素（ここでは
リンク）へ置かれる。破壊的な操作の確認で、取り消しのボタンへ置くときも同じ書き方。`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  ...InitialFocusTarget,
  // docs ページは <Stories /> で全ストーリーを並べる。載せると、ページを開いた瞬間に開いてしまう。
  // MDX の docs ページでは \`!autodocs\` の印は効かない（自動生成の docs ページ用）ので、docs.disable で外す
  tags: ["!autodocs"],
  parameters: {
    docs: {
      disable: true
    }
  },
  args: {
    defaultOpen: true
  }
}`,...Z.parameters?.docs?.source}}}})))()}export{X as n,$ as r,L as t};