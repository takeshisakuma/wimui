import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Notification, Button } from "wimui";


const meta: Meta<typeof Notification> = {
  title: "Components/Alerts & Notifications/Notification",
  component: Notification,
  tags: [],
  argTypes: {
    onClose: { action: "closed" },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Notification
        {...args}
        title={args.title || t("story.notification_title")}
        description={args.description || t("story.notification_desc")}
      />
    );
  },
};

export const Success: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Notification
        {...args}
        title={args.title || t("story.notification_success_title")}
        description={args.description || t("story.notification_success_desc")}
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
      <Notification
        {...args}
        title={args.title || t("story.notification_warning_title")}
        description={args.description || t("story.notification_warning_desc")}
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
      <Notification
        {...args}
        title={args.title || t("story.notification_error_title")}
        description={args.description || t("story.notification_error_desc")}
      />
    );
  },
  args: {
    intent: "danger",
  },
};

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Notification
        {...args}
        title={args.title || t("story.notification_info_title")}
        description={args.description || t("story.notification_info_desc")}
      />
    );
  },
  args: {
    intent: "info",
  },
};

export const Trigger: Story = {
  render: function Render() {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ padding: "24px" }}>
        <Button onClick={() => setVisible(true)}>{t("story.notification_show")}</Button>
        {visible && (
          <div style={{ marginTop: "24px" }}>
            <Notification
              intent="success"
              title={t("story.notification_success_title")}
              description={t("story.notification_triggered_desc")}
              onClose={() => setVisible(false)}
            />
          </div>
        )}
      </div>
    );
  },
};
