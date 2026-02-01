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
    },
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
