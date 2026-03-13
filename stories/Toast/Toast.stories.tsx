import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast, ToastProvider, useToast } from "@/components/Toast/Toast";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Toast> = {
  title: "Components/Alerts & Notifications/Toast",
  component: Toast,
  tags: ["!autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story_toast_saved_title")}
        description={args.description || t("story_toast_saved_desc")}
      />
    );
  },
  args: {
    variant: "success",
  },
};

export const Success: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story_toast_success_title")}
        description={args.description || t("story_toast_success_desc")}
      />
    );
  },
  args: {
    variant: "success",
  },
};

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story_toast_update_title")}
        description={args.description || t("story_toast_update_desc")}
      />
    );
  },
  args: {
    variant: "info",
  },
};

export const Warning: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story_toast_connection_title")}
        description={args.description || t("story_toast_connection_desc")}
      />
    );
  },
  args: {
    variant: "warning",
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story_toast_upload_failed_title")}
        description={args.description || t("story_toast_upload_failed_desc")}
      />
    );
  },
  args: {
    variant: "error",
  },
};

// Interactive example using the hook
const ToastTrigger = () => {
  const { show } = useToast();
  const { t } = useTranslation(ALL_NAMESPACES);

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button
        priority="primary"
        label={t("story_toast_show_success")}
        onClick={() =>
          show({
            title: t("story_toast_success_title"),
            description: t("story_toast_success_desc"),
            variant: "success",
          })
        }
      />
      <Button
        priority="secondary"
        label={t("story_toast_show_error")}
        onClick={() =>
          show({
            title: t("story_notification_error_title"),
            description: t("story_notification_error_desc"),
            variant: "error",
          })
        }
      />
      <Button
        priority="tertiary"
        label={t("story_toast_show_5s")}
        onClick={() =>
          show({
            title: t("story_toast_system_notif"),
            description: t("story_toast_5s_desc"),
            variant: "info",
            duration: 5000,
          })
        }
      />
    </div>
  );
};

export const Interactive = {
  render: () => (
    <ToastProvider position="bottom-right">
      <ToastTrigger />
    </ToastProvider>
  ),
};
