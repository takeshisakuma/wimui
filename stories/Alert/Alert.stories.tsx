import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "@/components/Alert/Alert";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Alert> = {
  title: "Components/Alerts & Notifications/Alert",
  component: Alert,
  tags: [],
  argTypes: {
    onClose: { action: "closed" },
    status: {
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
        title={args.title || t("story_alert_info_title")}
        description={args.description || t("story_alert_info_desc")}
      />
    );
  },
  args: {
    status: "info",
  },
};

export const Success: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story_alert_success_title")}
        description={args.description || t("story_alert_success_desc")}
      />
    );
  },
  args: {
    status: "success",
  },
};

export const Warning: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story_alert_warning_title")}
        description={args.description || t("story_alert_warning_desc")}
      />
    );
  },
  args: {
    status: "warning",
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story_alert_error_title")}
        description={args.description || t("story_alert_error_desc")}
      />
    );
  },
  args: {
    status: "error",
  },
};

export const WithoutTitle: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        description={args.description || t("story_alert_no_title_desc")}
      />
    );
  },
  args: {
    status: "info",
  },
};

export const WithCloseButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story_alert_dismiss_title")}
        description={args.description || t("story_alert_dismiss_desc")}
        onClose={args.onClose ?? (() => console.log("Alert closed"))}
      />
    );
  },
  args: {
    status: "success",
  },
};

export const LongContent: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Alert
        {...args}
        title={args.title || t("story_alert_update_title")}
        description={args.description || t("story_alert_update_desc")}
        onClose={args.onClose ?? (() => {})}
      />
    );
  },
  args: {
    status: "info",
  },
};
