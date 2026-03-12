import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppShell } from "@/components/AppShell/AppShell";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import TabBar from "@/components/TabBar/TabBar";
import { Icon } from "@/components/Icon/Icon";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof AppShell> = {
  title: "Components/Application Shell/AppShell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
  },
  tags: [],
  argTypes: {
    padding: {
      control: "boolean",
      description: "Add padding to the main content",
    },
    centered: {
      control: "boolean",
      description: "Center the main content horizontally",
    },
    maxWidth: {
      control: "text",
      description: "Specify the maximum width when centered",
    },
    header: { table: { disable: true } },
    sidebar: { table: { disable: true } },
    footer: { table: { disable: true } },
    navbar: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <AppShell
        {...args}
        header={
          <Header bordered>
            <Header.Section align="start">
              <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                WIM UI
              </div>
            </Header.Section>
            <Header.Section align="end" style={{ gap: "8px" }}>
              <Button priority="tertiary" size="small">
                {t("story_appshell_docs")}
              </Button>
              <Button priority="primary" size="small">
                {t("story_appshell_signin")}
              </Button>
            </Header.Section>
          </Header>
        }
      >
        <div>
          <h2>{t("story_appshell_welcome")}</h2>
          <p>{t("story_appshell_main_content")}</p>
          <p>{t("story_appshell_flexible_layout")}</p>
        </div>
      </AppShell>
    );
  },
};

export const ModernApp: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <AppShell
        {...args}
        header={
          <Header bordered>
            <Header.Section align="start">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "#0066ff",
                    borderRadius: 4,
                  }}
                />
                <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  WimStore
                </div>
              </div>
            </Header.Section>
            <Header.Section align="center">
              <div style={{ width: "100%", maxWidth: 400 }}>
                <Input
                  placeholder={t("story_appshell_search_placeholder")}
                  leftIcon="SearchIcon"
                  fullWidth
                />
              </div>
            </Header.Section>
            <Header.Section align="end" style={{ gap: "12px" }}>
              <Icon name="BellIcon" style={{ cursor: "pointer" }} />
              <Icon name="StarIcon" style={{ cursor: "pointer" }} />
              <Button priority="primary" size="small">
                {t("story_appshell_checkout")}
              </Button>
            </Header.Section>
          </Header>
        }
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  background: "#f5f5f5",
                  borderRadius: 4,
                  marginBottom: 8,
                }}
              />
              <div style={{ fontWeight: "bold" }}>
                {t("story_appshell_product")} {i}
              </div>
              <div style={{ color: "#666", fontSize: "0.9rem" }}>$99.00</div>
            </div>
          ))}
        </div>
      </AppShell>
    );
  },
};

export const WithSidebar: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
      <AppShell
        {...args}
        header={
          <Header bordered>
            <Header.Section
              align="start"
              style={{ gap: "10px", alignItems: "center", display: "flex" }}
            >
              <style>{`
                                .appshell-mobile-trigger {
                                    display: none;
                                    background: none;
                                    border: 1px solid var(--wim-color-border-subtle, #ccc);
                                    border-radius: 4px;
                                    cursor: pointer;
                                    padding: 4px 8px;
                                }
                                @media (max-width: 768px) {
                                    .appshell-mobile-trigger {
                                        display: block;
                                    }
                                }
                            `}</style>
              <button
                className="appshell-mobile-trigger"
                onClick={() => setMobileOpen(true)}
              >
                {t("story_common_menu", "Menu")}
              </button>
              <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {t("story_appshell_dashboard")}
              </div>
            </Header.Section>
            <Header.Section align="end">
              <Icon name="BellIcon" style={{ width: 24, height: 24 }} />
              <Icon name="UserIcon" style={{ width: 24, height: 24 }} />
            </Header.Section>
          </Header>
        }
        sidebar={
          <Sidebar
            bordered
            width={260}
            mobileOpen={mobileOpen}
            onOverlayClick={() => setMobileOpen(false)}
          >
            <Sidebar.Header>
              <div style={{ padding: "16px", fontWeight: "bold" }}>
                {t("story_appshell_navigation")}
              </div>
            </Sidebar.Header>
            <Sidebar.Content>
              <Sidebar.Item icon={<Icon name="HomeIcon" />} active>
                {t("story_appshell_dashboard")}
              </Sidebar.Item>
              <Sidebar.Item icon={<Icon name="UserIcon" />}>
                {t("story_appshell_users")}
              </Sidebar.Item>
              <Sidebar.Item icon={<Icon name="SettingsIcon" />}>
                {t("story_appshell_settings")}
              </Sidebar.Item>
              <Sidebar.Item icon={<Icon name="FilterIcon" />}>
                {t("story_appshell_documents")}
              </Sidebar.Item>
            </Sidebar.Content>
          </Sidebar>
        }
      >
        <div>
          <h2>{t("story_appshell_dashboard")}</h2>
          <p>{t("story_appshell_dashboard_desc")}</p>
        </div>
      </AppShell>
    );
  },
};

export const WithFooter: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <AppShell
        {...args}
        header={
          <Header bordered>
            <Header.Section align="start">
              <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                WIM UI
              </div>
            </Header.Section>
          </Header>
        }
        footer={
          <Footer bordered>
            <Footer.Section>
              <p style={{ margin: 0, textAlign: "center" }}>
                {t("story_appshell_rights")}
              </p>
            </Footer.Section>
          </Footer>
        }
      >
        <div>
          <h2>{t("story_appshell_footer_title")}</h2>
          <p>{t("story_appshell_footer_desc")}</p>
        </div>
      </AppShell>
    );
  },
};

export const WithNavbar: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <AppShell
        {...args}
        header={
          <Header bordered>
            <Header.Section align="start">
              <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {t("story_appshell_mobile_app")}
              </div>
            </Header.Section>
          </Header>
        }
        navbar={
          <TabBar>
            <TabBar.Item
              icon={<Icon name="HomeIcon" />}
              label={t("story_common_home")}
              active
            />
            <TabBar.Item
              icon={<Icon name="SearchIcon" />}
              label={t("story_common_search")}
            />
            <TabBar.Item
              icon={<Icon name="BellIcon" />}
              label={t("story_common_alerts")}
            />
            <TabBar.Item
              icon={<Icon name="UserIcon" />}
              label={t("story_common_profile")}
            />
          </TabBar>
        }
      >
        <div>
          <h2>{t("story_appshell_mobile_layout")}</h2>
          <p>{t("story_appshell_mobile_desc")}</p>
        </div>
      </AppShell>
    );
  },
};

export const Playground: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <AppShell
        {...args}
        header={
          <Header bordered>
            <Header.Section align="start">
              <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                WIM UI
              </div>
            </Header.Section>
          </Header>
        }
      >
        <div>
          <h2>{t("story_appshell_welcome")}</h2>
          <p>{t("story_appshell_main_content")}</p>
        </div>
      </AppShell>
    );
  },
  args: {
    padding: true,
    centered: false,
  },
};
