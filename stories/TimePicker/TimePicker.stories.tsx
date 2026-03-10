import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TimePicker } from "@/components/TimePicker/TimePicker";
import { Label } from "@/components/Label/Label";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof TimePicker> = {
  title: "Components/Pickers & Sliders/TimePicker",
  component: TimePicker,
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
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_timepicker_select")}>
        <TimePicker {...args} />
      </Label>
    );
  },
  args: {},
};

export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_timepicker_outline")}>
        <TimePicker {...args} variant="outline" />
      </Label>
    );
  },
  args: {},
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_timepicker_ghost")}>
        <TimePicker {...args} variant="ghost" />
      </Label>
    );
  },
  args: {},
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_picker_error")}>
        <TimePicker {...args} status="error" />
      </Label>
    );
  },
  args: {},
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_picker_disabled")}>
        <TimePicker {...args} disabled />
      </Label>
    );
  },
  args: {},
};

export const FullWidth: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_picker_fullwidth")} style={{ width: "100%" }}>
        <TimePicker {...args} fullWidth />
      </Label>
    );
  },
  args: {},
  parameters: {
    layout: "padded",
  },
};
