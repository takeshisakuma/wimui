import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TimePicker } from "@/components/form/TimePicker/TimePicker";
import { Label } from "@/components/typography/Label/Label";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof TimePicker> = {
  title: "Components/Pickers & Sliders/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    intent: {
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
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.timepicker_select")}>
        <TimePicker {...args} />
      </Label>
    );
  },
  args: {},
};

export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.timepicker_outline")}>
        <TimePicker {...args} variant="outline" />
      </Label>
    );
  },
  args: {},
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.timepicker_ghost")}>
        <TimePicker {...args} variant="ghost" />
      </Label>
    );
  },
  args: {},
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.picker_error")}>
        <TimePicker {...args} intent="error" />
      </Label>
    );
  },
  args: {},
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.picker_disabled")}>
        <TimePicker {...args} disabled />
      </Label>
    );
  },
  args: {},
};

export const FullWidth: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.picker_fullwidth")} style={{ width: "100%" }}>
        <TimePicker {...args} fullWidth />
      </Label>
    );
  },
  args: {},
  parameters: {
    layout: "padded",
  },
};
