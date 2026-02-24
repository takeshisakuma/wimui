import type { Meta, StoryObj } from "@storybook/react-vite";
import { FloatButton, FloatButtonProps } from "@/components/FloatButton/FloatButton";
import React, { useState, useRef } from "react";

const meta: Meta<typeof FloatButton> = {
    title: "Components/Navigation Utilities/FloatButton",
    component: FloatButton,
    tags: [],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: "radio",
            options: ["small", "medium", "large"],
        },
        position: {
            control: "select",
            options: ["bottom-right", "bottom-left", "bottom-center", "top-right", "top-left", "static"],
        },
        variant: {
            control: "radio",
            options: ["default", "primary"],
        },
        shape: {
            control: "radio",
            options: ["circle", "square"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof FloatButton>;

export const Basic: Story = {
    args: {
        iconName: "CircleIcon",
        variant: "primary",
        shape: "circle",
        size: "medium",
        position: "static",
    },
};

export const Extended: Story = {
    args: {
        iconName: "CircleIcon",
        label: "送信する",
        variant: "primary",
        size: "medium",
        position: "static",
        shrink: false,
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <FloatButton iconName="CircleIcon" size="small" variant="primary" position="static" />
            <FloatButton iconName="CircleIcon" size="medium" variant="primary" position="static" />
            <FloatButton iconName="CircleIcon" size="large" variant="primary" position="static" />
        </div>
    ),
};

export const ExtendedSizes: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
            <FloatButton iconName="CircleIcon" label="Small" size="small" variant="primary" position="static" />
            <FloatButton iconName="CircleIcon" label="Medium" size="medium" variant="primary" position="static" />
            <FloatButton iconName="CircleIcon" label="Large" size="large" variant="primary" position="static" />
        </div>
    ),
};

export const AutoShrink: Story = {
    args: {
        iconName: "CircleIcon",
        label: "スクロールして縮小",
        variant: "primary",
        size: "medium",
        position: "static",
        shrink: false,
    },
    render: (args) => <AutoShrinkDemo {...args} />,
};

export const Primary: Story = {
    args: {
        iconName: "LoadingIcon",
        variant: "primary",
        shape: "circle",
        size: "medium",
        position: "static",
    },
};

export const Square: Story = {
    args: {
        iconName: "SquareIcon",
        variant: "default",
        shape: "square",
        size: "medium",
        position: "static",
    },
};

export const WithBadge: Story = {
    args: {
        iconName: "CircleIcon",
        badge: 3,
        variant: "primary",
        size: "medium",
        position: "static",
    },
};

export const FixedPosition: Story = {
    parameters: {
        layout: "fullscreen",
    },
    args: {
        iconName: "ChevronUpIcon",
        variant: "primary",
        shape: "circle",
        size: "medium",
        position: "bottom-right",
        description: "Click me",
    },
    render: (args) => (
        <div style={{ height: "150vh", padding: "20px" }}>
            <p>Look at the bottom right of the screen.</p>
            <FloatButton {...args} />
        </div>
    ),
};

export const BackTop: Story = {
    parameters: {
        layout: "fullscreen",
    },
    args: {
        backTop: true,
        visibilityHeight: 100,
        variant: "primary",
        size: "medium",
    },
    render: (args) => (
        <div style={{ height: "200vh", padding: "20px" }}>
            <p>Scroll down to see the &quot;Back to Top&quot; button appear.</p>
            <FloatButton {...args} />
        </div>
    ),
};

// Demo component for auto-shrink
const AutoShrinkDemo = (args: FloatButtonProps) => {
    const [isShrunk, setIsShrunk] = useState(false);
    const scrollTimer = useRef<number | null>(null);

    const handleScroll = () => {
        setIsShrunk(true);
        if (scrollTimer.current) {
            window.clearTimeout(scrollTimer.current);
        }
        scrollTimer.current = window.setTimeout(() => {
            setIsShrunk(false);
        }, 1000);
    };

    return (
        <div style={{
            height: "300px",
            width: "100%",
            maxWidth: "400px",
            overflow: "hidden",
            border: "1px solid #ccc",
            position: "relative",
            display: "flex",
            flexDirection: "column"
        }}>
            <div
                style={{ height: "100%", overflowY: "auto", padding: "20px" }}
                onScroll={handleScroll}
            >
                <div style={{ height: "1000px" }}>
                    <p>Please scroll inside this area</p>
                </div>
            </div>
            <FloatButton
                {...args}
                shrink={isShrunk}
                style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    ...args.style
                }}
            />
        </div>
    );
};


