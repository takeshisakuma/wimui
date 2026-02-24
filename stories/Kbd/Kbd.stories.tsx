import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd } from "@/components/Kbd/Kbd";

const meta: Meta<typeof Kbd> = {
    title: "Components/Typography & Icons/Kbd",
    component: Kbd,
    tags: [],
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Primary: Story = {
    args: {
        children: "⌘",
        size: "md",
    },
};

export const Small: Story = {
    args: {
        children: "K",
        size: "sm",
    },
};

export const Combined: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <Kbd>⌘</Kbd>
            <span>+</span>
            <Kbd>K</Kbd>
        </div>
    ),
};

export const KeyboardSymbols: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Kbd>Shift</Kbd>
            <Kbd>Ctrl</Kbd>
            <Kbd>Option</Kbd>
            <Kbd>Command</Kbd>
            <Kbd>Enter</Kbd>
            <Kbd>⌫</Kbd>
            <Kbd>⎋</Kbd>
        </div>
    ),
};


