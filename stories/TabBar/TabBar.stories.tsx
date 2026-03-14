import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import TabBar from "@/components/TabBar/TabBar";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof TabBar> = {
  title: "Components/Application Shell/TabBar",
  component: TabBar,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },

  argTypes: {
    fixed: { control: "boolean" },
    bordered: { control: "boolean" },
    glass: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TabBar>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [activeTab, setActiveTab] = React.useState("home");
    return (
      <div
        style={{ height: "100vh", background: "#f4f4f5", position: "relative" }}
      >
        <div style={{ padding: "20px" }}>
          {t("story_tabbar_content_prefix")} {activeTab} {t("story_tabbar_tab")}
        </div>
        <TabBar {...args} style={{}}>
          <TabBar.Item
            active={activeTab === "home"}
            onClick={() => setActiveTab("home")}
            icon={<Icon name="CircleIcon" />}
            label={t("story_common_home")}
          />
          <TabBar.Item
            active={activeTab === "search"}
            onClick={() => setActiveTab("search")}
            icon={<Icon name="SearchIcon" />}
            label={t("story_common_search")}
          />
          <TabBar.Item
            active={activeTab === "notifications"}
            onClick={() => setActiveTab("notifications")}
            icon={<Icon name="StarIcon" />}
            label={t("story_common_alerts")}
            badge="3"
          />
          <TabBar.Item
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
            icon={<Icon name="SquareIcon" />}
            label={t("story_common_profile")}
          />
        </TabBar>
      </div>
    );
  },
};

export const WithoutLabels: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = React.useState("home");
    return (
      <div
        style={{ height: "100vh", background: "#f4f4f5", position: "relative" }}
      >
        <TabBar {...args} style={{}}>
          <TabBar.Item
            active={activeTab === "home"}
            onClick={() => setActiveTab("home")}
            icon={<Icon name="CircleIcon" />}
            aria-label="Home"
          />
          <TabBar.Item
            active={activeTab === "grid"}
            onClick={() => setActiveTab("grid")}
            icon={<Icon name="MaximizeIcon" />}
            aria-label="Grid"
          />
          <TabBar.Item
            active={activeTab === "search"}
            onClick={() => setActiveTab("search")}
            icon={<Icon name="SearchIcon" />}
            aria-label="Search"
          />
        </TabBar>
      </div>
    );
  },
};

export const Fixed: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [activeTab, setActiveTab] = React.useState("home");
    return (
      <div style={{ background: "#f4f4f5", minHeight: "100vh" }}>
        <div style={{ padding: "20px", paddingBottom: "100px" }}>
          <h2>{t("story_tabbar_fixed_title")}</h2>
          <p>{t("story_tabbar_fixed_desc")}</p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>
              {t("story_tabbar_line")} {i + 1} {t("story_tabbar_long_content")}
            </p>
          ))}
        </div>
        <TabBar {...args} fixed>
          <TabBar.Item
            active={activeTab === "home"}
            onClick={() => setActiveTab("home")}
            icon={<Icon name="HomeIcon" />}
            label={t("story_common_home")}
          />
          <TabBar.Item
            active={activeTab === "search"}
            onClick={() => setActiveTab("search")}
            icon={<Icon name="SearchIcon" />}
            label={t("story_common_search")}
          />
          <TabBar.Item
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
            icon={<Icon name="UserIcon" />}
            label={t("story_common_profile")}
          />
        </TabBar>
      </div>
    );
  },
};
