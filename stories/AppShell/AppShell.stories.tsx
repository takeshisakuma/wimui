import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppShell } from "@/components/AppShell/AppShell";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import TabBar from "@/components/TabBar/TabBar";
import { Icon } from "@/components/Icon/Icon";

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
                <Header.Section align="end">
                    <button>Login</button>
                </Header.Section>
            </Header>
        ),
        children: (
            <div>
                <h1>Welcome to WIM UI</h1>
                <p>This is the main content area of your application.</p>
                <p>The AppShell component provides a flexible layout structure for building modern web applications.</p>
            </div>
        ),
    },
};

export const WithSidebar: Story = {
    args: {
        header: (
            <Header bordered>
                <Header.Section align="start">
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Dashboard</div>
                </Header.Section>
                <Header.Section align="end">
                    <Icon name="BellIcon" style={{ width: 24, height: 24 }} />
                    <Icon name="UserIcon" style={{ width: 24, height: 24 }} />
                </Header.Section>
            </Header>
        ),
        sidebar: (
            <Sidebar bordered width={260}>
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
        ),
        children: (
            <div>
                <h1>Dashboard</h1>
                <p>Main content area with sidebar navigation.</p>
            </div>
        ),
    },
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
                <h1>Page with Footer</h1>
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
                <h1>Mobile Layout</h1>
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
