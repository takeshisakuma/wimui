import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
    title: "Component/Selection Controls/Switch",
    component: Switch,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: "radio",
            options: ["small", "medium"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    args: {
        label: "Enable notifications",
    },
};

export const Checked: Story = {
    args: {
        label: "Wi-Fi",
        defaultChecked: true,
    },
};

export const Small: Story = {
    args: {
        label: "Airplane Mode",
        size: "small",
    },
};

export const Disabled: Story = {
    args: {
        label: "Bluetooth",
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: "Bluetooth",
        disabled: true,
        defaultChecked: true,
    },
};

export const NoLabel: Story = {
    args: {
    },
};

