import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "@/components/IconButton/IconButton";

const meta: Meta<typeof IconButton> = {
    title: "Components/Buttons/IconButton",
    component: IconButton,
    tags: [],
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


