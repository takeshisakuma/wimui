import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { DatePicker, Label } from "wimui";


const meta: Meta<typeof DatePicker> = {
  title: "Components/Pickers & Sliders/DatePicker",
  component: DatePicker,
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
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.datepicker_select")}>
        <DatePicker {...args} placeholder="2026-07-04" />
      </Label>
    );
  },
  args: {},
};

export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.datepicker_outline")}>
        <DatePicker {...args} variant="outline" placeholder="2026-07-04" />
      </Label>
    );
  },
  args: {},
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.datepicker_ghost")}>
        <DatePicker {...args} variant="ghost" placeholder="2026-07-04" />
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
        <DatePicker {...args} intent="danger" placeholder="2026-07-04" />
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
        <DatePicker {...args} disabled placeholder="2026-07-04" />
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
        <DatePicker {...args} fullWidth placeholder="2026-07-04" />
      </Label>
    );
  },
  args: {},
  parameters: {
    layout: "padded",
  },
};
