import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast, ToastProvider, useToast } from "@/components/feedback/Toast/Toast";
import { Button } from "@/components/form/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Toast> = {
  title: "Components/Alerts & Notifications/Toast",
  component: Toast,
  tags: ["!autodocs"],
  argTypes: {
    intent: {
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
        title={args.title || t("story.toast_saved_title")}
        description={args.description || t("story.toast_saved_desc")}
      />
    );
  },
  args: {
    intent: "success",
  },
};

export const Success: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story.toast_success_title")}
        description={args.description || t("story.toast_success_desc")}
      />
    );
  },
  args: {
    intent: "success",
  },
};

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story.toast_update_title")}
        description={args.description || t("story.toast_update_desc")}
      />
    );
  },
  args: {
    intent: "info",
  },
};

export const Warning: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toast
        {...args}
        title={args.title || t("story.toast_connection_title")}
        description={args.description || t("story.toast_connection_desc")}
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
      <Toast
        {...args}
        title={args.title || t("story.toast_upload_failed_title")}
        description={args.description || t("story.toast_upload_failed_desc")}
      />
    );
  },
  args: {
    intent: "error",
  },
};

// Interactive example using the hook
const ToastTrigger = () => {
  const { show } = useToast();
  const { t } = useTranslation(ALL_NAMESPACES);

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button
        variant="filled"
        onClick={() =>
          show({
            title: t("story.toast_success_title"),
            description: t("story.toast_success_desc"),
            intent: "success",
          })
        }

      >{t("story.toast_show_success")}</Button>
      <Button
        variant="outline"
        onClick={() =>
          show({
            title: t("story.notification_error_title"),
            description: t("story.notification_error_desc"),
            intent: "error",
          })
        }

      >{t("story.toast_show_error")}</Button>
      <Button
        variant="ghost"
        onClick={() =>
          show({
            title: t("story.toast_system_notif"),
            description: t("story.toast_5s_desc"),
            intent: "info",
            duration: 5000,
          })
        }

      >{t("story.toast_show_5s")}</Button>
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
