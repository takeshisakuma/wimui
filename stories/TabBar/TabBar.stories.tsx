import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import TabBar from "@/components/TabBar/TabBar";
import { Icon } from "@/components/Icon/Icon";

const meta: Meta<typeof TabBar> = {
    title: "Component/Application Shell/TabBar",
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
        const [activeTab, setActiveTab] = React.useState("home");
        return (
            <div style={{ height: "400px", background: "#f4f4f5", position: "relative" }}>
                <div style={{ padding: "20px" }}>
                    Content for {activeTab} tab
                </div>
                <TabBar {...args} style={{ position: "absolute" }}>
                    <TabBar.Item
                        active={activeTab === "home"}
                        onClick={() => setActiveTab("home")}
                        icon={<Icon name="CircleIcon" />}
                        label="Home"
                    />
                    <TabBar.Item
                        active={activeTab === "search"}
                        onClick={() => setActiveTab("search")}
                        icon={<Icon name="SearchIcon" />}
                        label="Search"
                    />
                    <TabBar.Item
                        active={activeTab === "notifications"}
                        onClick={() => setActiveTab("notifications")}
                        icon={<Icon name="StarIcon" />}
                        label="Alerts"
                        badge="3"
                    />
                    <TabBar.Item
                        active={activeTab === "profile"}
                        onClick={() => setActiveTab("profile")}
                        icon={<Icon name="SquareIcon" />}
                        label="Profile"
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
            <div style={{ height: "200px", background: "#f4f4f5", position: "relative" }}>
                <TabBar {...args} style={{ position: "absolute" }}>
                    <TabBar.Item
                        active={activeTab === "home"}
                        onClick={() => setActiveTab("home")}
                        icon={<Icon name="CircleIcon" />}
                    />
                    <TabBar.Item
                        active={activeTab === "grid"}
                        onClick={() => setActiveTab("grid")}
                        icon={<Icon name="MaximizeIcon" />}
                    />
                    <TabBar.Item
                        active={activeTab === "search"}
                        onClick={() => setActiveTab("search")}
                        icon={<Icon name="SearchIcon" />}
                    />
                </TabBar>
            </div>
        );
    },
};

