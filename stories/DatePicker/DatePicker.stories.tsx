import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "@/components/DatePicker/DatePicker";
import { Label } from "@/components/Label/Label";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof DatePicker> = {
  title: "Components/Pickers & Sliders/DatePicker",
  component: DatePicker,
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
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_datepicker_select")}>
        <DatePicker {...args} />
      </Label>
    );
  },
  args: {},
};

export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_datepicker_outline")}>
        <DatePicker {...args} variant="outline" />
      </Label>
    );
  },
  args: {},
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_datepicker_ghost")}>
        <DatePicker {...args} variant="ghost" />
      </Label>
    );
  },
  args: {},
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_picker_error")}>
        <DatePicker {...args} status="error" />
      </Label>
    );
  },
  args: {},
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_picker_disabled")}>
        <DatePicker {...args} disabled />
      </Label>
    );
  },
  args: {},
};

export const FullWidth: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Label label={t("story_picker_fullwidth")} style={{ width: "100%" }}>
        <DatePicker {...args} fullWidth />
      </Label>
    );
  },
  args: {},
  parameters: {
    layout: "padded",
  },
};
