import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Alert } from "wimui";


const meta: Meta<typeof Alert> = {
  title: "Components/Alerts & Notifications/Alert",
  component: Alert,
  tags: [],
  argTypes: {
    onClose: { action: "closed" },
    intent: {
      control: "select",
      options: ["default", "info", "success", "warning", "danger"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story.alert_update_title")}
        description={args.description || t("story.alert_update_desc")}
      />
    );
  },
  args: {
    intent: "default",
  },
};

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story.alert_info_title")}
        description={args.description || t("story.alert_info_desc")}
      />
    );
  },
  args: {
    intent: "info",
  },
};

export const Success: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story.alert_success_title")}
        description={args.description || t("story.alert_success_desc")}
      />
    );
  },
  args: {
    intent: "success",
  },
};

export const Warning: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story.alert_warning_title")}
        description={args.description || t("story.alert_warning_desc")}
      />
    );
  },
  args: {
    intent: "warning",
  },
};

export const Danger: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story.alert_error_title")}
        description={args.description || t("story.alert_error_desc")}
      />
    );
  },
  args: {
    intent: "danger",
  },
};

export const WithoutTitle: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        description={args.description || t("story.alert_no_title_desc")}
      />
    );
  },
  args: {
    intent: "info",
  },
};

export const WithCloseButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story.alert_dismiss_title")}
        description={args.description || t("story.alert_dismiss_desc")}
        onClose={args.onClose ?? (() => console.log("Alert closed"))}
      />
    );
  },
  args: {
    intent: "success",
  },
};

export const LongContent: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story.alert_update_title")}
        description={args.description || t("story.alert_update_desc")}
        onClose={args.onClose ?? (() => {})}
      />
    );
  },
  args: {
    intent: "info",
  },
};
