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

const meta: Meta<typeof AppShell> = {
    title: "Component/Application Shell/AppShell",
    component: AppShell,
    parameters: {
        layout: "fullscreen",
    },
    tags: [],
    argTypes: {
        padding: { control: "boolean", description: "メインコンテンツにパディングを追加します" },
        centered: { control: "boolean", description: "メインコンテンツを水平方向に中央揃えします" },
        maxWidth: { control: "text", description: "中央揃え時の最大幅を指定します" },
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
    args: {
        header: (
            <Header bordered>
                <Header.Section align="start">
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>WIM UI</div>
                </Header.Section>
                <Header.Section align="end" style={{ gap: "8px" }}>
                    <Button priority="tertiary" size="small">Docs</Button>
                    <Button priority="primary" size="small">Sign In</Button>
                </Header.Section>
            </Header>
        ),
        children: (
            <div>
                <h2>Welcome to WIM UI</h2>
                <p>This is the main content area of your application.</p>
                <p>The AppShell component provides a flexible layout structure for building modern web applications.</p>
            </div>
        ),
    },
};

export const ModernApp: Story = {
    args: {
        header: (
            <Header bordered>
                <Header.Section align="start">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ width: 32, height: 32, background: "#0066ff", borderRadius: 4 }} />
                        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>WimStore</div>
                    </div>
                </Header.Section>
                <Header.Section align="center">
                    <div style={{ width: "100%", maxWidth: 400 }}>
                        <Input
                            placeholder="Search products..."
                            leftIcon="SearchIcon"
                            fullWidth
                        />
                    </div>
                </Header.Section>
                <Header.Section align="end" style={{ gap: "12px" }}>
                    <Icon name="BellIcon" style={{ cursor: "pointer" }} />
                    <Icon name="StarIcon" style={{ cursor: "pointer" }} />
                    <Button priority="primary" size="small">Checkout</Button>
                </Header.Section>
            </Header>
        ),
        children: (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
                        <div style={{ width: "100%", aspectRatio: "1", background: "#f5f5f5", borderRadius: 4, marginBottom: 8 }} />
                        <div style={{ fontWeight: "bold" }}>Product {i}</div>
                        <div style={{ color: "#666", fontSize: "0.9rem" }}>$99.00</div>
                    </div>
                ))}
            </div>
        ),
    },
};

export const WithSidebar: Story = {
    render: (args) => {
        const [mobileOpen, setMobileOpen] = React.useState(false);

        return (
            <AppShell
                {...args}
                header={
                    <Header bordered>
                        <Header.Section align="start" style={{ gap: "10px", alignItems: "center", display: "flex" }}>
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
                                Menu
                            </button>
                            <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Dashboard</div>
                        </Header.Section>
                        <Header.Section align="end">
                            <Icon name="BellIcon" style={{ width: 24, height: 24 }} />
                            <Icon name="UserIcon" style={{ width: 24, height: 24 }} />
                        </Header.Section>
                    </Header>
                }
                sidebar={
                    <Sidebar bordered width={260} mobileOpen={mobileOpen} onOverlayClick={() => setMobileOpen(false)}>
                        <Sidebar.Header>
                            <div style={{ padding: "16px", fontWeight: "bold" }}>Navigation</div>
                        </Sidebar.Header>
                        <Sidebar.Content>
                            <Sidebar.Item icon={<Icon name="HomeIcon" />} active>Dashboard</Sidebar.Item>
                            <Sidebar.Item icon={<Icon name="UserIcon" />}>Users</Sidebar.Item>
                            <Sidebar.Item icon={<Icon name="SettingsIcon" />}>Settings</Sidebar.Item>
                            <Sidebar.Item icon={<Icon name="FilterIcon" />}>Documents</Sidebar.Item>
                        </Sidebar.Content>
                    </Sidebar>
                }
            >
                <div>
                    <h2>Dashboard</h2>
                    <p>Main content area with sidebar navigation.</p>
                </div>
            </AppShell>
        );
    }
};

export const WithFooter: Story = {
    args: {
        header: (
            <Header bordered>
                <Header.Section align="start">
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>WIM UI</div>
                </Header.Section>
            </Header>
        ),
        footer: (
            <Footer bordered>
                <Footer.Section>
                    <p style={{ margin: 0, textAlign: "center" }}>© 2024 WIM UI. All rights reserved.</p>
                </Footer.Section>
            </Footer>
        ),
        children: (
            <div>
                <h2>Page with Footer</h2>
                <p>This layout includes a footer at the bottom.</p>
            </div>
        ),
    },
};

export const WithNavbar: Story = {
    args: {
        header: (
            <Header bordered>
                <Header.Section align="start">
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Mobile App</div>
                </Header.Section>
            </Header>
        ),
        navbar: (
            <TabBar>
                <TabBar.Item icon={<Icon name="HomeIcon" />} label="Home" active />
                <TabBar.Item icon={<Icon name="SearchIcon" />} label="Search" />
                <TabBar.Item icon={<Icon name="BellIcon" />} label="Notifications" />
                <TabBar.Item icon={<Icon name="UserIcon" />} label="Profile" />
            </TabBar>
        ),
        children: (
            <div>
                <h2>Mobile Layout</h2>
                <p>This layout includes a bottom navigation bar, commonly used in mobile applications.</p>
            </div>
        ),
    },
};

export const Playground: Story = {
    args: {
        ...Default.args,
        padding: true,
        centered: false,
    },
};
