import type { Meta, StoryObj } from "@storybook/react-vite";
import Sidebar, { SidebarProps } from "@/components/Sidebar/Sidebar";
import { Icon } from "@/components/Icon/Icon";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Sidebar> = {
  title: "Components/Application Shell/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const SidebarContent = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return (
    <>
      <Sidebar.Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            justifyContent: "inherit",
          }}
        >
          <Icon name="CircleIcon" color="primary" size="large" />
          <span
            className="wim-sidebar__hide-collapsed"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            {t("story_sidebar_wimui")}
          </span>
        </div>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Item active icon={<Icon name="HomeIcon" />}>
          {t("story_sidebar_dashboard")}
        </Sidebar.Item>
        <Sidebar.Item icon={<Icon name="ProjectIcon" />}>
          {t("story_sidebar_projects")}
        </Sidebar.Item>
        <Sidebar.Item icon={<Icon name="EmailIcon" />}>
          {t("story_sidebar_messages")}
        </Sidebar.Item>
        <Sidebar.Item icon={<Icon name="DocumentIcon" />}>
          {t("story_sidebar_documents")}
        </Sidebar.Item>
        <Sidebar.Item icon={<Icon name="ChartIcon" />}>
          {t("story_sidebar_analytics")}
        </Sidebar.Item>
        <Sidebar.Item icon={<Icon name="SettingsIcon" />}>
          {t("story_sidebar_settings")}
        </Sidebar.Item>
      </Sidebar.Content>
      <Sidebar.Footer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            justifyContent: "inherit",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#eee",
              flexShrink: 0,
            }}
          ></div>
          <div className="wim-sidebar__hide-collapsed">
            <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              {t("story_sidebar_user_name")}
            </div>
            <div style={{ fontSize: "0.7rem", color: "#666" }}>
              {t("story_sidebar_user_email")}
            </div>
          </div>
        </div>
      </Sidebar.Footer>
    </>
  );
};

export const Default: Story = {
  render: (args: SidebarProps) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          background: "#f4f4f5",
          overflow: "hidden",
        }}
      >
        <style>{`
                    .wim-sidebar-mobile-trigger-demo {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        z-index: 101;
                        padding: 5px 10px;
                        background: white;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    @media (min-width: 769px) { /* md breakpoint override */
                        .wim-sidebar-mobile-trigger-demo {
                            display: none;
                        }
                    }
                `}</style>
        <button
          className="wim-sidebar-mobile-trigger-demo"
          onClick={() => setMobileOpen(true)}
        >
          {t("story_sidebar_menu")}
        </button>
        <Sidebar
          {...args}
          mobileOpen={mobileOpen}
          onOverlayClick={() => setMobileOpen(false)}
        >
          <SidebarContent />
        </Sidebar>
        <main
          style={{
            flexGrow: 1,
            padding: "20px",
            marginLeft: "20px",
            marginTop: "40px",
          }}
        >
          <h1>{t("story_sidebar_content_area")}</h1>
          <p>{t("story_sidebar_select_item")}</p>
        </main>
      </div>
    );
  },
  args: {
    bordered: true,
  },
};

export const Collapsed: Story = {
  render: Default.render,
  args: {
    collapsed: true,
    bordered: true,
  },
};

export const CustomWidth: Story = {
  render: Default.render,
  args: {
    width: 300,
    bordered: true,
  },
};
