import type { Meta, StoryObj } from "@storybook/react";
import { Fab } from "./Fab";

const meta: Meta<typeof Fab> = {
    title: "Component/Actions/Fab",
    component: Fab,
    parameters: {
        layout: "centered",
    },
    tags: [],
    argTypes: {
        priority: {
            control: "radio",
            options: ["primary", "secondary", "tertiary"],
        },
        role: {
            control: "radio",
            options: ["default", "destructive", "positive"],
        },
        size: {
            control: "radio",
            options: ["small", "medium", "large"],
        },
        position: {
            control: "select",
            options: ["bottom-right", "bottom-left", "top-right", "top-left", "static"],
        },
        iconName: {
            control: "select",
            options: ["CircleIcon", "SquareIcon", "LoadingIcon", "ExternalLinkIcon"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Fab>;

export const Primary: Story = {
    args: {
        priority: "primary",
        iconName: "CircleIcon",
        label: "",
        position: "static",
    },
};

export const Secondary: Story = {
    args: {
        priority: "secondary",
        iconName: "SquareIcon",
        label: "",
        position: "static",
    },
};

export const Tertiary: Story = {
    args: {
        priority: "tertiary",
        iconName: "ExternalLinkIcon",
        label: "",
        position: "static",
    },
};

export const Extended: Story = {
    args: {
        priority: "primary",
        iconName: "CircleIcon",
        label: "送信する",
        position: "static",
    },
};

export const Destructive: Story = {
    args: {
        priority: "primary",
        role: "destructive",
        iconName: "SquareIcon",
        label: "削除",
        position: "static",
    },
};

export const Positive: Story = {
    args: {
        priority: "primary",
        role: "positive",
        iconName: "CircleIcon",
        label: "完了",
        position: "static",
    },
};

export const FixedPosition: Story = {
    parameters: {
        layout: "fullscreen",
    },
    args: {
        priority: "primary",
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
