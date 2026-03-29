import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/Dialog/Dialog";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Label } from "@/components/Label/Label";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Dialog> = {
  title: "Components/Overlays/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
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
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button
            priority="primary"
            label={t("story.dialog_open")}

          />
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
              <Button
                priority="secondary"
                label={t("story.dialog_cancel")}

              />
            </DialogClose>
            <Button
              priority="primary"
              label={t("story.dialog_save")}

            />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const Uncontrolled: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            priority="secondary"
            label={t("story.dialog_uncontrolled")}

          />
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
              <Button
                priority="secondary"
                label={t("story.dialog_cancel")}

              />
            </DialogClose>
            <Button
              priority="primary"
              label={t("story.dialog_confirm")}
              onClick={() => alert(t("story.dialog_confirmed_msg"))}

            />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const Controlled: Story = {
  render: function Render() {
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
          priority="primary"
          label={t("story.dialog_state_open")}
          onClick={() => setOpen(true)}

        />

        <Dialog open={open} onOpenChange={setOpen}>
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
                priority="secondary"
                label={t("story.dialog_cancel")}
                onClick={() => setOpen(false)}

              />
              <Button
                priority="primary"
                label={t("story.dialog_state_close")}
                onClick={() => setOpen(false)}

              />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};
