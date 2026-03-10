import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "@/components/Alert/Alert";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Alert> = {
  title: "Components/Alerts & Notifications/Alert",
  component: Alert,
  tags: [],
  argTypes: {
    onClose: { action: "closed" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Alert
        {...args}
        status="info"
        title={t("story_alert_info_title")}
        description={t("story_alert_info_desc")}
      />
    );
  },
};

export const Success: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Alert
        {...args}
        status="success"
        title={t("story_alert_success_title")}
        description={t("story_alert_success_desc")}
      />
    );
  },
};

export const Warning: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Alert
        {...args}
        status="warning"
        title={t("story_alert_warning_title")}
        description={t("story_alert_warning_desc")}
      />
    );
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Alert
        {...args}
        status="error"
        title={t("story_alert_error_title")}
        description={t("story_alert_error_desc")}
      />
    );
  },
};

export const WithoutTitle: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Alert
        {...args}
        status="info"
        description={t("story_alert_no_title_desc")}
      />
    );
  },
};

export const WithCloseButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Alert
        {...args}
        status="success"
        title={t("story_alert_dismiss_title")}
        description={t("story_alert_dismiss_desc")}
        onClose={() => console.log("Alert closed")}
      />
    );
  },
};

export const LongContent: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Alert
        {...args}
        status="info"
        title={t("story_alert_update_title")}
        description={t("story_alert_update_desc")}
        onClose={() => {}}
      />
    );
  },
};
