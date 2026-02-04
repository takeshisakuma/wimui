import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
    title: "Component/Structure/Divider",
    component: Divider,
    tags: [],
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
    args: {
        orientation: "horizontal",
    },
};

export const Vertical: Story = {
    args: {
        orientation: "vertical",
    },
};
