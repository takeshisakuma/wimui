import type { Meta, StoryObj } from "@storybook/react";
import { FloatButton } from "./FloatButton";
import React from "react";

const meta: Meta<typeof FloatButton> = {
    title: "Navigation/FloatButton",
    component: FloatButton,
    tags: [],
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof FloatButton>;

export const Basic: Story = {
    args: {
        iconName: "ExternalLinkIcon",
        variant: "default",
        shape: "circle",
        description: "Click me",
    },
    render: (args) => (
        <div style={{ height: "150vh", padding: "20px" }}>
            <p>Look at the bottom right of the screen.</p>
            <FloatButton {...args} />
        </div>
    ),
};

export const Primary: Story = {
    args: {
        iconName: "LoadingIcon",
        variant: "primary",
        shape: "circle",
    },
};

export const Square: Story = {
    args: {
        iconName: "SquareIcon",
        variant: "default",
        shape: "square",
    },
};

export const WithBadge: Story = {
    args: {
        iconName: "CircleIcon",
        badge: 3,
    },
};

export const BackTop: Story = {
    args: {
        backTop: true,
        visibilityHeight: 100,
    },
    render: (args) => (
        <div style={{ height: "200vh", padding: "20px" }}>
            <p>Scroll down to see the "Back to Top" button appear.</p>
            <FloatButton {...args} />
        </div>
    ),
};
