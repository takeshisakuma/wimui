import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, Snackbar } from "wimui";


const meta: Meta<typeof Snackbar> = {
  title: "Components/Alerts & Notifications/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["default", "success", "warning", "danger", "info"],
    },
    position: {
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story.snackbar_message")}
      />
    );
  },
  args: {
    open: true,
    intent: "default",
    position: "bottom-center",
  },
};

export const WithAction: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story.snackbar_deleted")}
        actionLabel={args.actionLabel || t("story.snackbar_undo")}
        onAction={() => alert(t("story.snackbar_undo_clicked"))}
      />
    );
  },
  args: {
    open: true,
  },
};

export const WithCloseButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story.snackbar_persistent")}
      />
    );
  },
  args: {
    open: true,
    showCloseButton: true,
    autoHideDuration: 0,
  },
};

export const Success: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story.snackbar_saved")}
      />
    );
  },
  args: {
    open: true,
    intent: "success",
  },
};

export const Danger: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story.snackbar_failed")}
      />
    );
  },
  args: {
    open: true,
    intent: "danger",
  },
};

export const Warning: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story.snackbar_storage_full")}
      />
    );
  },
  args: {
    open: true,
    intent: "warning",
  },
};

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story.snackbar_update_available")}
      />
    );
  },
  args: {
    open: true,
    intent: "info",
  },
};

// T90: Snackbar は title を持たないので、ずれは「アイコン対 message の 1 行目」で見る。
// 既存ストーリーの message はどれも 1 行に収まるため、折り返す長さの文言を用意した。
export const LongContent: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story.snackbar_long_message")}
      />
    );
  },
  args: {
    open: true,
    intent: "warning",
  },
};

export const InteractiveDemo: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: "40px" }}>
        <Button
          onClick={() => setOpen(true)}
          variant="solid"

        >{t("story.snackbar_show")}</Button>
        <Snackbar
          message={t("story.snackbar_interactive")}
          open={open}
          onClose={() => setOpen(false)}
          actionLabel={t("story.snackbar_retry")}
          showCloseButton
        />
      </div>
    );
  },
};
