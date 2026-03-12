import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner } from "@/components/Banner/Banner";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Banner> = {
  title: "Components/Alerts & Notifications/Banner",
  component: Banner,
  tags: [],
  argTypes: {
    onClose: { action: "closed" },
    icon: { control: "boolean" },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Banner
        {...args}
        status="info"
        title={t("story_banner_update_title")}
        description={t("story_banner_update_desc")}
      />
    );
  },
};

export const Success: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Banner
        {...args}
        status="success"
        title={t("story_alert_success_title")}
        description={t("story_banner_update_desc")}
      />
    );
  },
};

export const Warning: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Banner
        {...args}
        status="warning"
        title={t("story_banner_maint_title")}
        description={t("story_banner_maint_desc")}
      />
    );
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Banner
        {...args}
        status="error"
        title={t("story_banner_conn_error_title")}
        description={t("story_banner_conn_error_desc")}
        onClose={() => {}}
      />
    );
  },
};

export const WithAction: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Banner
        {...args}
        status="info"
        title={t("story_banner_cookie_title")}
        description={t("story_banner_cookie_desc")}
        extra={
          <Button
            size="small"
            priority="secondary"
            label={t("story_banner_btn_accept")}
          />
        }
      />
    );
  },
};

export const WithCloseAndAction: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Banner
        {...args}
        status="warning"
        title={t("story_banner_trial_title")}
        description={t("story_banner_trial_desc")}
        extra={
          <Button
            size="small"
            priority="primary"
            label={t("story_banner_btn_upgrade")}
          />
        }
        onClose={() => {}}
      />
    );
  },
};

export const DescriptionOnly: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Banner
        {...args}
        status="info"
        description={t("story_banner_no_title_desc")}
      />
    );
  },
};

export const NoIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Banner
        {...args}
        status="info"
        title={t("story_banner_simple_title")}
        description={t("story_banner_simple_desc")}
        icon={false}
      />
    );
  },
};
