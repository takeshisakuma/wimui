import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "@/components/feedback/Alert/Alert";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Alert> = {
  title: "Components/Alerts & Notifications/Alert",
  component: Alert,
  tags: [],
  argTypes: {
    onClose: { action: "closed" },
    intent: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

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

export const ErrorStatus: Story = {
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
    intent: "error",
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
