import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { ColorPicker, Label } from "../../../src";


const meta: Meta<typeof ColorPicker> = {
  title: "Components/Pickers & Sliders/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["default", "danger"],
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.colorpicker_label")}>
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.colorpicker_outline")}>
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.colorpicker_ghost")}>
        <ColorPicker {...args} variant="ghost" />
      </Label>
    );
  },
  args: {
    defaultValue: "#f59e0b",
  },
};

export const Danger: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.colorpicker_error")}>
        <ColorPicker {...args} intent="danger" />
      </Label>
    );
  },
  args: {
    defaultValue: "#ef4444",
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.colorpicker_disabled")}>
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.colorpicker_fullwidth")} style={{ width: "100%" }}>
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

export const Swatches: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      // 見本のボタンは <label> の中に置かない（入力欄の名前に見本の名前が混ざる）。label prop で渡す
      <ColorPicker
        {...args}
        label={t("story.colorpicker_swatches")}
        swatches={[
          { value: "#3b82f6", label: t("story.colorpicker_swatch_blue") },
          { value: "#10b981", label: t("story.colorpicker_swatch_green") },
          { value: "#f59e0b", label: t("story.colorpicker_swatch_amber") },
          { value: "#ef4444", label: t("story.colorpicker_swatch_red") },
          { value: "#8b5cf6", label: t("story.colorpicker_swatch_violet") },
          { value: "#6b7280", label: t("story.colorpicker_swatch_gray") },
        ]}
      />
    );
  },
  args: {
    defaultValue: "#10b981",
  },
};
