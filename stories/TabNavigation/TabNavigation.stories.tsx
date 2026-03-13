import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import TabNavigation from "@/components/TabNavigation/TabNavigation";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof TabNavigation> = {
  title: "Components/Navigation Elements/TabNavigation",
  component: TabNavigation,
  parameters: {
    layout: "padded",
  },

  argTypes: {
    variant: { control: "select", options: ["underline", "pill", "contained"] },
    align: {
      control: "select",
      options: ["start", "center", "end", "justify"],
    },
    size: { control: "select", options: ["small", "medium", "large"] },
  },
};

export default meta;
type Story = StoryObj<typeof TabNavigation>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("overview");
    return (
      <TabNavigation {...args}>
        <TabNavigation.Item
          active={active === "overview"}
          onClick={() => setActive("overview")}
          href="#"
        >
          {t("story_tabnav_overview")}
        </TabNavigation.Item>
        <TabNavigation.Item
          active={active === "integrations"}
          onClick={() => setActive("integrations")}
          href="#"
        >
          {t("story_tabnav_integrations")}
        </TabNavigation.Item>
        <TabNavigation.Item
          active={active === "activity"}
          onClick={() => setActive("activity")}
          href="#"
        >
          {t("story_tabnav_activity")}
        </TabNavigation.Item>
        <TabNavigation.Item
          active={active === "settings"}
          onClick={() => setActive("settings")}
          href="#"
        >
          {t("story_tabnav_settings")}
        </TabNavigation.Item>
      </TabNavigation>
    );
  },
};

export const Pills: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("all");
    return (
      <TabNavigation {...args} variant="pill">
        <TabNavigation.Item
          active={active === "all"}
          onClick={() => setActive("all")}
        >
          {t("story_tabnav_all")}
        </TabNavigation.Item>
        <TabNavigation.Item
          active={active === "unread"}
          onClick={() => setActive("unread")}
        >
          {t("story_tabnav_unread")}
        </TabNavigation.Item>
        <TabNavigation.Item
          active={active === "archived"}
          onClick={() => setActive("archived")}
        >
          {t("story_tabnav_archived")}
        </TabNavigation.Item>
      </TabNavigation>
    );
  },
};

export const Contained: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("daily");
    return (
      <TabNavigation {...args} variant="contained">
        <TabNavigation.Item
          active={active === "daily"}
          onClick={() => setActive("daily")}
        >
          {t("story_tabnav_daily")}
        </TabNavigation.Item>
        <TabNavigation.Item
          active={active === "weekly"}
          onClick={() => setActive("weekly")}
        >
          {t("story_tabnav_weekly")}
        </TabNavigation.Item>
        <TabNavigation.Item
          active={active === "monthly"}
          onClick={() => setActive("monthly")}
        >
          {t("story_tabnav_monthly")}
        </TabNavigation.Item>
      </TabNavigation>
    );
  },
};

export const WithIcons: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("code");
    return (
      <TabNavigation {...args}>
        <TabNavigation.Item
          active={active === "code"}
          onClick={() => setActive("code")}
          icon={<Icon name="ChevronRightIcon" />}
        >
          {t("story_tabnav_code")}
        </TabNavigation.Item>
        <TabNavigation.Item
          active={active === "issues"}
          onClick={() => setActive("issues")}
          icon={<Icon name="CircleIcon" />}
        >
          {t("story_tabnav_issues")}
        </TabNavigation.Item>
        <TabNavigation.Item
          active={active === "pulls"}
          onClick={() => setActive("pulls")}
          icon={<Icon name="CopyIcon" />}
        >
          {t("story_tabnav_pull_requests")}
        </TabNavigation.Item>
      </TabNavigation>
    );
  },
};
