import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, Combobox, DatePicker, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Label, Link, MultiSelect, Select } from "wimui";


const meta: Meta<typeof Dialog> = {
  title: "Components/Overlays/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  args: {
    closeOnOverlayClick: true,
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Controlled open state of the dialog.",
    },
    defaultOpen: {
      control: "boolean",
      description: "Default open state when uncontrolled.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Event handler called when the open state changes.",
    },
    closeOnOverlayClick: {
      control: "boolean",
      description: "Whether clicking the overlay backdrop closes the dialog.",
    },
    role: {
      control: "inline-radio",
      options: ["dialog", "alertdialog"],
      description: "ARIA role of the dialog content.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    closeOnOverlayClick: true,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="solid">{t("story.dialog_open")}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("story.dialog_edit_title")}</DialogTitle>
            <DialogDescription>{t("story.dialog_edit_desc")}</DialogDescription>
          </DialogHeader>
          <div style={{ display: "grid", gap: "1.5rem", padding: "1rem 0" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <Label htmlFor="name" label={t("story.dialog_name")} />
              <Input id="name" defaultValue="Pedro Duarte" fullWidth />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
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
      </Dialog>
    );
  },
};

export const Uncontrolled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dialog closeOnOverlayClick={args.closeOnOverlayClick}>
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
            <Button
              variant="solid"
              onClick={() => alert(t("story.dialog_confirmed_msg"))}

          >{t("story.dialog_confirm")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <p>
          {t("story.dialog_curr_state")}: {open ? t("story.dialog_open_state") : t("story.dialog_closed_state")}
        </p>
        <Button
          variant="solid"
          onClick={() => setOpen(true)}

        >{t("story.dialog_state_open")}</Button>

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
              <Button
                variant="outline"
                onClick={() => setOpen(false)}

              >{t("story.dialog_cancel")}</Button>
              <Button
                variant="solid"
                onClick={() => setOpen(false)}

              >{t("story.dialog_state_close")}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const Stacked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dialog {...args}>
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
          <p style={{ padding: "1rem 0" }}>{t("story.dialog_stacked_body")}</p>
          <DialogFooter layout="column">
            <DialogClose asChild>
              <Button variant="outline">{t("story.dialog_cancel")}</Button>
            </DialogClose>
            <Button variant="solid">{t("story.dialog_confirm")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

/**
 * 中で一覧や暦を開くダイアログ（T408）。Escape を押したとき閉じるのは一番上の面だけ ── 開いた
 * 一覧・暦・メニュー・削除の確認のダイアログが先に閉じ、外側のダイアログは残る。閉じた引き金に
 * フォーカスがあるときの Escape は、外側のダイアログを閉じる。E2E（`vrt/escape-layers.e2e.spec.ts`）が
 * このストーリーを開いて確かめる。
 */
export const WithPopupsInside: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="solid">{t("story.dialog_event_open")}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("story.dialog_event_title")}</DialogTitle>
            <DialogDescription>{t("story.dialog_event_desc")}</DialogDescription>
          </DialogHeader>
          <div style={{ display: "grid", gap: "var(--wim-spacing-lg)", padding: "var(--wim-spacing-md) 0" }}>
            <DatePicker label={t("story.dialog_event_date")} defaultValue={new Date(2026, 10, 24)} fullWidth />
            <Select
              label={t("story.dialog_event_repeat")}
              defaultValue="weekly"
              fullWidth
              options={[
                { label: t("story.dialog_event_repeat_none"), value: "none" },
                { label: t("story.dialog_event_repeat_weekly"), value: "weekly" },
                { label: t("story.dialog_event_repeat_monthly"), value: "monthly" },
              ]}
            />
            <Combobox
              label={t("story.dialog_event_room")}
              placeholder={t("story.dialog_event_room_placeholder")}
              fullWidth
              options={[
                { label: "Atlas (6F)", value: "atlas" },
                { label: "Borealis (6F)", value: "borealis" },
                { label: "Cove (3F)", value: "cove" },
              ]}
            />
            <MultiSelect
              label={t("story.dialog_event_guests")}
              defaultValue={["ana", "kenji"]}
              fullWidth
              options={[
                { label: "Ana Souza", value: "ana" },
                { label: "Kenji Mori", value: "kenji" },
                { label: "Lucas Pereira", value: "lucas" },
                { label: "Yui Tanaka", value: "yui" },
              ]}
            />
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
      </Dialog>
    );
  },
};

// 開いた姿。ほかのストーリーは閉じたまま撮られるので、開いた中身を変えても VRT と a11y の CI が
// 動かなかった（T293）。docs ページには載せない（play は docs では走らず、defaultOpen はページを開いた瞬間に開く）。
const AlertDialogBody = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{t("story.dialog_alert_title")}</DialogTitle>
        <DialogDescription>{t("story.dialog_alert_desc")}</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">{t("story.dialog_cancel")}</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="solid" intent="danger">{t("story.dialog_alert_confirm")}</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

/**
 * 応答するまで先へ進めないダイアログ。`role="alertdialog"` を渡すと、外側のクリックでは
 * 閉じなくなる（Escape と取り消しのボタンでは閉じる）。
 */
export const AlertDialog: Story = {
  args: {
    role: "alertdialog",
    // meta の `closeOnOverlayClick: true` を外して、alertdialog の既定（閉じない）を見せる
    closeOnOverlayClick: undefined,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline" intent="danger">{t("story.dialog_alert_open")}</Button>
        </DialogTrigger>
        <AlertDialogBody />
      </Dialog>
    );
  },
};

/**
 * 開いた姿（自動検査用）。**引き金を中央に置かない**（`layout: "padded"`）── このダイアログは
 * 背が低く、中央に置いた引き金がちょうど説明文の真裏に来る。axe は背後の要素が重なると背景色を
 * 決められず、説明文のコントラストを「判定不能」にする（引き金を消すと判定でき、合格する。
 * 2026-10-10 に実測）。引き金そのものは消せない ── 検査は `#storybook-root` に中身が入るのを
 * 待つので、ポータルに出るダイアログだけだと、描画を待ち切れずに落ちる。
 */
export const AlertDialogOpen: Story = {
  ...AlertDialog,
  // docs ページは <Stories /> で全ストーリーを並べる。載せると、ページを開いた瞬間に開いてしまう。
  // MDX の docs ページでは `!autodocs` の印は効かない（自動生成の docs ページ用）ので、docs.disable で外す
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    docs: { disable: true },
  },
  args: {
    ...AlertDialog.args,
    defaultOpen: true,
  },
};

export const Open: Story = {
  ...Default,
  // docs ページは <Stories /> で全ストーリーを並べる。載せると、ページを開いた瞬間に開いてしまう。
  // MDX の docs ページでは `!autodocs` の印は効かない（自動生成の docs ページ用）ので、docs.disable で外す
  tags: ["!autodocs"],
  parameters: { docs: { disable: true } },
  args: {
    ...Default.args,
    defaultOpen: true,
  },
};

/**
 * 最初のフォーカス先を選ぶ（T399）。説明文の中のリンクが DOM で先に来るが、開いたら名前の欄に
 * 置きたい ── 置きたい要素に `data-autofocus` を付ける。印が無ければ、DOM の最初の要素（ここでは
 * リンク）へ置かれる。破壊的な操作の確認で、取り消しのボタンへ置くときも同じ書き方。
 */
export const InitialFocusTarget: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dialog {...args}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "1rem 0" }}>
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
      </Dialog>
    );
  },
};

export const InitialFocusTargetOpen: Story = {
  ...InitialFocusTarget,
  // docs ページは <Stories /> で全ストーリーを並べる。載せると、ページを開いた瞬間に開いてしまう。
  // MDX の docs ページでは `!autodocs` の印は効かない（自動生成の docs ページ用）ので、docs.disable で外す
  tags: ["!autodocs"],
  parameters: { docs: { disable: true } },
  args: {
    defaultOpen: true,
  },
};
