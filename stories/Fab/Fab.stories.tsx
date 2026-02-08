import { useState, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Fab } from "./Fab";

const meta: Meta<typeof Fab> = {
    title: "Component/Buttons & Actions/Fab",
    component: Fab,
    parameters: {
        layout: "centered",
    },
    tags: [],
    argTypes: {
        size: {
            control: "radio",
            options: ["small", "medium", "large"],
        },
        position: {
            control: "select",
            options: ["bottom-right", "bottom-left", "bottom-center", "top-right", "top-left", "static"],
        },
        iconName: {
            control: "select",
            options: ["CircleIcon", "SquareIcon", "LoadingIcon", "ExternalLinkIcon"],
        },
        shrink: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Fab>;

export const Primary: Story = {
    args: {
        iconName: "CircleIcon",
        label: "",
        position: "static",
    },
};

export const Extended: Story = {
    args: {
        iconName: "CircleIcon",
        label: "送信する",
        position: "static",
        shrink: false,
    },
};

export const AutoShrink: Story = {
    args: {
        iconName: "CircleIcon",
        label: "スクロールして縮小",
        position: "static",
        shrink: false,
    },
    render: (args) => <AutoShrinkDemo {...args} />,
};

export const FixedPosition: Story = {
    parameters: {
        layout: "fullscreen",
    },
    args: {
        iconName: "CircleIcon",
        position: "bottom-right",
    },
    render: (args) => (
        <div style={{ height: "300px", width: "100%", position: "relative" }}>
            <p style={{ padding: "20px" }}>スクロール可能な背景の例...</p>
            <Fab {...args} />
        </div>
    ),
};

// Demo component moved to bottom to keep stories clean for indexer
const AutoShrinkDemo = (args: any) => {
    const [isShrunk, setIsShrunk] = useState(false);
    const scrollTimer = useRef<any>(null);

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
            width: "400px",
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
            <Fab
                {...args}
                shrink={isShrunk}
                style={{
                    position: "absolute",
                    zIndex: 10,
                    ...((args.position === "static" || !args.position) ? { bottom: "20px", right: "20px" } : {}),
                    ...args.style
                }}
            />
        </div>
    );
};
