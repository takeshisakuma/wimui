import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorPicker } from "@/components/ColorPicker/ColorPicker";
import { Label } from "@/components/Label/Label";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof ColorPicker> = {
  title: "Components/Pickers & Sliders/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["default", "error", "disabled"],
    },
    variant: {
      control: "select",
      options: ["outline", "ghost"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_colorpicker_label")}>
        <ColorPicker {...args} />
      </Label>
    );
  },
  args: {
    defaultValue: "#3b82f6",
  },
};

export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_colorpicker_outline")}>
        <ColorPicker {...args} variant="outline" />
      </Label>
    );
  },
  args: {
    defaultValue: "#10b981",
  },
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_colorpicker_ghost")}>
        <ColorPicker {...args} variant="ghost" />
      </Label>
    );
  },
  args: {
    defaultValue: "#f59e0b",
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_colorpicker_error")}>
        <ColorPicker {...args} status="error" />
      </Label>
    );
  },
  args: {
    defaultValue: "#ef4444",
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_colorpicker_disabled")}>
        <ColorPicker {...args} disabled />
      </Label>
    );
  },
  args: {
    defaultValue: "#6b7280",
  },
};

export const FullWidth: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_colorpicker_fullwidth")} style={{ width: "100%" }}>
        <ColorPicker {...args} fullWidth />
      </Label>
    );
  },
  args: {
    defaultValue: "#8b5cf6",
  },
  parameters: {
    layout: "padded",
  },
};
