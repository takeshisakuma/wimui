import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";

const meta: Meta<typeof EmptyState> = {
    title: "Component/Data Display/EmptyState",
    component: EmptyState,
    tags: [],
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
    args: {
        title: "No data found",
        description: "We couldn't find any data matching your search. Please try again with different keywords.",
        icon: <Icon name="SearchIcon" size="large" />,
        action: <Button label="Clear search" />,
    },
};

export const Simple: Story = {
    args: {
        title: "No messages yet",
        description: "When you receive messages, they will appear here.",
        variant: "simple",
    },
};

export const WithoutDescription: Story = {
    args: {
        title: "List is empty",
        icon: <Icon name="CircleIcon" size="large" />,
    },
};

export const CustomAction: Story = {
    args: {
        title: "Ready to start?",
        description: "Create your first project to begin tracking your progress.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 5v14M5 12h14" />
            </svg>
        ),
        action: (
            <div style={{ display: "flex", gap: "8px" }}>
                <Button label="Browse templates" priority="secondary" />
                <Button label="Create project" priority="primary" />
            </div>
        ),
    },
};
