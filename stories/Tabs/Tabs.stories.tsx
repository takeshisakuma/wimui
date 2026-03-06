import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Tabs from "@/components/Tabs/Tabs";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Tabs> = {
  title: "Components/Navigation Elements/Tabs",
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: function Render() {
    const { t } = useTranslation();
    return (
      <Tabs defaultValue="1">
        <Tabs.List>
          <Tabs.Trigger value="1">{t("story_tabs_gen_settings")}</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story_tabs_user_profile")}</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story_tabs_notif_center")}</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story_tabs_sec_privacy")}</Tabs.Trigger>
          <Tabs.Trigger value="5">{t("story_tabs_app_integ")}</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">{t("story_tabs_gen_desc")}</Tabs.Content>
        <Tabs.Content value="2">{t("story_tabs_user_desc")}</Tabs.Content>
        <Tabs.Content value="3">{t("story_tabs_notif_desc")}</Tabs.Content>
        <Tabs.Content value="4">{t("story_tabs_sec_desc")}</Tabs.Content>
        <Tabs.Content value="5">{t("story_tabs_app_desc")}</Tabs.Content>
      </Tabs>
    );
  },
};

export const Vertical: Story = {
  render: function Render() {
    const { t } = useTranslation();
    return (
      <Tabs
        defaultValue="1"
        orientation="vertical"
        style={{ minHeight: "200px" }}
      >
        <Tabs.List>
          <Tabs.Trigger value="1">{t("story_tabs_dash_v")}</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story_tabs_ana_v")}</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story_tabs_sys_logs")}</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story_tabs_help_doc")}</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">
          <h3 style={{ marginTop: 0 }}>{t("story_tabs_dash_title")}</h3>
          <p>{t("story_tabs_dash_desc")}</p>
        </Tabs.Content>
        <Tabs.Content value="2">{t("story_tabs_ana_desc")}</Tabs.Content>
        <Tabs.Content value="3">{t("story_tabs_sys_desc")}</Tabs.Content>
        <Tabs.Content value="4">{t("story_tabs_help_desc")}</Tabs.Content>
      </Tabs>
    );
  },
};

export const Scrolling: Story = {
  render: function Render() {
    const { t } = useTranslation();
    return (
      <Tabs defaultValue="1" style={{ width: "800px" }}>
        <Tabs.List>
          <Tabs.Trigger value="1">{t("story_tabs_long_tab")} 1</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story_tabs_long_tab")} 2</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story_tabs_long_tab")} 3</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story_tabs_long_tab")} 4</Tabs.Trigger>
          <Tabs.Trigger value="5">{t("story_tabs_long_tab")} 5</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">Content 1</Tabs.Content>
        <Tabs.Content value="2">Content 2</Tabs.Content>
        <Tabs.Content value="3">Content 3</Tabs.Content>
        <Tabs.Content value="4">Content 4</Tabs.Content>
        <Tabs.Content value="5">Content 5</Tabs.Content>
      </Tabs>
    );
  },
};
