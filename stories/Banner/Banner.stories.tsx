import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner } from "@/components/feedback/Banner/Banner";
import { Button } from "@/components/form/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Banner> = {
  title: "Components/Alerts & Notifications/Banner",
  component: Banner,
  tags: [],
  argTypes: {
    onClose: { action: "closed" },
    icon: { control: "boolean" },
    intent: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Banner
        {...args}
        title={args.title || t("story.banner_update_title")}
        description={args.description || t("story.banner_update_desc")}
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
      <Banner
        {...args}
        title={args.title || t("story.alert_success_title")}
        description={args.description || t("story.banner_update_desc")}
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
      <Banner
        {...args}
        title={args.title || t("story.banner_maint_title")}
        description={args.description || t("story.banner_maint_desc")}
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
      <Banner
        {...args}
        title={args.title || t("story.banner_conn_error_title")}
        description={args.description || t("story.banner_conn_error_desc")}
        onClose={args.onClose ?? (() => {})}
      />
    );
  },
  args: {
    intent: "error",
  },
};

export const WithAction: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Banner
        {...args}
        title={args.title || t("story.banner_cookie_title")}
        description={args.description || t("story.banner_cookie_desc")}
        extra={
          <Button size="sm"
            variant="outline">{t("story.banner_btn_accept")}</Button>
        }
      />
    );
  },
  args: {
    intent: "info",
  },
};

export const WithCloseAndAction: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Banner
        {...args}
        title={args.title || t("story.banner_trial_title")}
        description={args.description || t("story.banner_trial_desc")}
        extra={
          <Button size="sm"
            variant="filled">{t("story.banner_btn_upgrade")}</Button>
        }
        onClose={args.onClose ?? (() => {})}
      />
    );
  },
  args: {
    intent: "warning",
  },
};

export const DescriptionOnly: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Banner
        {...args}
        description={args.description || t("story.banner_no_title_desc")}
      />
    );
  },
  args: {
    intent: "info",
  },
};

export const NoIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Banner
        {...args}
        title={args.title || t("story.banner_simple_title")}
        description={args.description || t("story.banner_simple_desc")}
        icon={false}
      />
    );
  },
  args: {
    intent: "info",
  },
};
