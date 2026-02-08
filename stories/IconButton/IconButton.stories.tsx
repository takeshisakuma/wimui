import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
    title: "Component/General/IconButton",
    component: IconButton,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
    args: {
        iconName: "SearchIcon",
        "aria-label": "検索",
    },
};

export const Close: Story = {
    args: {
        iconName: "CloseIcon",
        "aria-label": "閉じる",
        priority: "tertiary",
    },
};
