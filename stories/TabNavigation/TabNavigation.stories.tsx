import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TabNavigation from "./TabNavigation";
import { Icon } from "../Icon/Icon";

const meta: Meta<typeof TabNavigation> = {
    title: "Component/Navigation/TabNavigation",
    component: TabNavigation,
    parameters: {
        layout: "padded",
    },

    argTypes: {
        variant: { control: "select", options: ["underline", "pill", "contained"] },
        align: { control: "select", options: ["start", "center", "end", "justify"] },
        size: { control: "select", options: ["small", "medium", "large"] },
    },
};

export default meta;
type Story = StoryObj<typeof TabNavigation>;

export const Default: Story = {
    render: (args) => {
        const [active, setActive] = React.useState("overview");
        return (
            <TabNavigation {...args}>
                <TabNavigation.Item
                    active={active === "overview"}
                    onClick={() => setActive("overview")}
                    href="#"
                >
                    Overview
                </TabNavigation.Item>
                <TabNavigation.Item
                    active={active === "integrations"}
                    onClick={() => setActive("integrations")}
                    href="#"
                >
                    Integrations
                </TabNavigation.Item>
                <TabNavigation.Item
                    active={active === "activity"}
                    onClick={() => setActive("activity")}
                    href="#"
                >
                    Activity
                </TabNavigation.Item>
                <TabNavigation.Item
                    active={active === "settings"}
                    onClick={() => setActive("settings")}
                    href="#"
                >
                    Settings
                </TabNavigation.Item>
            </TabNavigation>
        );
    },
};

export const Pills: Story = {
    render: (args) => {
        const [active, setActive] = React.useState("all");
        return (
            <TabNavigation {...args} variant="pill">
                <TabNavigation.Item
                    active={active === "all"}
                    onClick={() => setActive("all")}
                >
                    All
                </TabNavigation.Item>
                <TabNavigation.Item
                    active={active === "unread"}
                    onClick={() => setActive("unread")}
                >
                    Unread
                </TabNavigation.Item>
                <TabNavigation.Item
                    active={active === "archived"}
                    onClick={() => setActive("archived")}
                >
                    Archived
                </TabNavigation.Item>
            </TabNavigation>
        );
    },
};

export const Contained: Story = {
    render: (args) => {
        const [active, setActive] = React.useState("daily");
        return (
            <TabNavigation {...args} variant="contained">
                <TabNavigation.Item
                    active={active === "daily"}
                    onClick={() => setActive("daily")}
                >
                    Daily
                </TabNavigation.Item>
                <TabNavigation.Item
                    active={active === "weekly"}
                    onClick={() => setActive("weekly")}
                >
                    Weekly
                </TabNavigation.Item>
                <TabNavigation.Item
                    active={active === "monthly"}
                    onClick={() => setActive("monthly")}
                >
                    Monthly
                </TabNavigation.Item>
            </TabNavigation>
        );
    },
};

export const WithIcons: Story = {
    render: (args) => {
        const [active, setActive] = React.useState("code");
        return (
            <TabNavigation {...args}>
                <TabNavigation.Item
                    active={active === "code"}
                    onClick={() => setActive("code")}
                    icon={<Icon name="ChevronRightIcon" />}
                >
                    Code
                </TabNavigation.Item>
                <TabNavigation.Item
                    active={active === "issues"}
                    onClick={() => setActive("issues")}
                    icon={<Icon name="CircleIcon" />}
                >
                    Issues
                </TabNavigation.Item>
                <TabNavigation.Item
                    active={active === "pulls"}
                    onClick={() => setActive("pulls")}
                    icon={<Icon name="CopyIcon" />}
                >
                    Pull Requests
                </TabNavigation.Item>
            </TabNavigation>
        );
    },
};

