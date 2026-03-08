import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Notification } from "@/components/Notification/Notification";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Notification
        {...args}
        title={args.title || t("story_notification_title")}
        description={args.description || t("story_notification_desc")}
      />
    );
  },
};

export const Success: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Notification
        {...args}
        title={args.title || t("story_notification_success_title")}
        description={args.description || t("story_notification_success_desc")}
      />
    );
  },
  args: {
    type: "success",
  },
};

export const Warning: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Notification
        {...args}
        title={args.title || t("story_notification_warning_title")}
        description={args.description || t("story_notification_warning_desc")}
      />
    );
  },
  args: {
    type: "warning",
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Notification
        {...args}
        title={args.title || t("story_notification_error_title")}
        description={args.description || t("story_notification_error_desc")}
      />
    );
  },
  args: {
    type: "error",
  },
};

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Notification
        {...args}
        title={args.title || t("story_notification_info_title")}
        description={args.description || t("story_notification_info_desc")}
      />
    );
  },
  args: {
    type: "info",
  },
};

export const Trigger: Story = {
  render: function Render() {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div style={{ padding: "24px" }}>
        <button
          className="wim-button wim-button--primary"
          onClick={() => setVisible(true)}
        >
          {t("story_notification_show")}
        </button>
        {visible && (
          <div style={{ marginTop: "24px" }}>
            <Notification
              type="success"
              title={t("story_notification_success_title")}
              description={t("story_notification_triggered_desc")}
              onClose={() => setVisible(false)}
            />
          </div>
        )}
      </div>
    );
  },
};
