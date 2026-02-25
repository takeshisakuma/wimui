import type { Meta, StoryObj } from "@storybook/react-vite";
import Sidebar, { SidebarProps } from "@/components/Sidebar/Sidebar";
import { Icon } from "@/components/Icon/Icon";
import React from "react";

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

const SidebarContent = () => (
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
          WIM UI
        </span>
      </div>
    </Sidebar.Header>
    <Sidebar.Content>
      <Sidebar.Item active icon={<Icon name="HomeIcon" />}>
        Dashboard
      </Sidebar.Item>
      <Sidebar.Item icon={<Icon name="ProjectIcon" />}>Projects</Sidebar.Item>
      <Sidebar.Item icon={<Icon name="EmailIcon" />}>Messages</Sidebar.Item>
      <Sidebar.Item icon={<Icon name="DocumentIcon" />}>Documents</Sidebar.Item>
      <Sidebar.Item icon={<Icon name="ChartIcon" />}>Analytics</Sidebar.Item>
      <Sidebar.Item icon={<Icon name="SettingsIcon" />}>Settings</Sidebar.Item>
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
          <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>John Doe</div>
          <div style={{ fontSize: "0.7rem", color: "#666" }}>
            john@example.com
          </div>
        </div>
      </div>
    </Sidebar.Footer>
  </>
);

export const Default: Story = {
  render: (args: SidebarProps) => {
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
          Menu
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
          <h1>Content Area</h1>
          <p>Select a menu item from the sidebar.</p>
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
