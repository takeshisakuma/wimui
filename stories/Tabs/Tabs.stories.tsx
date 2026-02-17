import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Tabs from "@/components/Tabs/Tabs";

const meta: Meta<typeof Tabs> = {
    title: "Component/Navigation Elements/Tabs",
    component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => {
        return (
            <Tabs defaultValue="1">
                <Tabs.List>
                    <Tabs.Trigger value="1">General Settings</Tabs.Trigger>
                    <Tabs.Trigger value="2">User Profile</Tabs.Trigger>
                    <Tabs.Trigger value="3">Notification Center</Tabs.Trigger>
                    <Tabs.Trigger value="4">Security & Privacy</Tabs.Trigger>
                    <Tabs.Trigger value="5">App Integrations</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="1">Manage your general application preferences and theme settings.</Tabs.Content>
                <Tabs.Content value="2">View and update your personal information and public profile details.</Tabs.Content>
                <Tabs.Content value="3">Configure how and when you receive alerts from the application.</Tabs.Content>
                <Tabs.Content value="4">Set up two-factor authentication and manage your data privacy settings.</Tabs.Content>
                <Tabs.Content value="5">Connect and manage third-party tools and services with your account.</Tabs.Content>
            </Tabs>
        );
    },
};

export const Vertical: Story = {
    render: () => {
        return (
            <Tabs defaultValue="1" orientation="vertical" style={{ minHeight: "200px" }}>
                <Tabs.List>
                    <Tabs.Trigger value="1">Dashboard Overview</Tabs.Trigger>
                    <Tabs.Trigger value="2">Analytics Reports</Tabs.Trigger>
                    <Tabs.Trigger value="3">System Logs</Tabs.Trigger>
                    <Tabs.Trigger value="4">Help & Documentation</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="1">
                    <h3 style={{ marginTop: 0 }}>Dashboard</h3>
                    <p>Welcome to your central management hub. Here you can see a summary of all active tasks.</p>
                </Tabs.Content>
                <Tabs.Content value="2">Detailed insights and performance metrics for your latest projects.</Tabs.Content>
                <Tabs.Content value="3">Real-time audit trail and developer debug information.</Tabs.Content>
                <Tabs.Content value="4">Need help? Browse our documentation or contact support.</Tabs.Content>
            </Tabs>
        );
    },
};

export const Scrolling: Story = {
    render: () => {
        return (
            <Tabs defaultValue="1" style={{ width: "800px" }}>
                <Tabs.List>
                    <Tabs.Trigger value="1">Very Long Label Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="2">Very Long Label Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="3">Very Long Label Tab 3</Tabs.Trigger>
                    <Tabs.Trigger value="4">Very Long Label Tab 4</Tabs.Trigger>
                    <Tabs.Trigger value="5">Very Long Label Tab 5</Tabs.Trigger>
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


