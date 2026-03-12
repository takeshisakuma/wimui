import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { Snackbar } from "@/components/Snackbar/Snackbar";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Snackbar> = {
  title: "Components/Alerts & Notifications/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "error", "info"],
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
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story_snackbar_message")}
      />
    );
  },
  args: {
    open: true,
    variant: "default",
    position: "bottom-center",
  },
};

export const WithAction: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story_snackbar_deleted")}
        actionLabel={args.actionLabel || t("story_snackbar_undo")}
        onAction={() => alert(t("story_snackbar_undo_clicked"))}
      />
    );
  },
  args: {
    open: true,
  },
};

export const WithCloseButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story_snackbar_persistent")}
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
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story_snackbar_saved")}
      />
    );
  },
  args: {
    open: true,
    variant: "success",
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story_snackbar_failed")}
      />
    );
  },
  args: {
    open: true,
    variant: "error",
  },
};

export const Warning: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story_snackbar_storage_full")}
      />
    );
  },
  args: {
    open: true,
    variant: "warning",
  },
};

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Snackbar
        {...args}
        message={args.message || t("story_snackbar_update_available")}
      />
    );
  },
  args: {
    open: true,
    variant: "info",
  },
};

export const InteractiveDemo: Story = {
  render: function Render() {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: "40px" }}>
        <Button
          onClick={() => setOpen(true)}
          label={t("story_snackbar_show")}
          priority="primary"
        />
        <Snackbar
          message={t("story_snackbar_interactive")}
          open={open}
          onClose={() => setOpen(false)}
          actionLabel={t("story_snackbar_retry")}
          showCloseButton
        />
      </div>
    );
  },
};
