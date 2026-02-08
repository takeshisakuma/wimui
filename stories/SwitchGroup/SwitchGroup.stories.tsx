import type { Meta, StoryObj } from "@storybook/react";
import { SwitchGroup } from "./SwitchGroup";

const meta: Meta<typeof SwitchGroup> = {
    title: "Component/Selection Controls/SwitchGroup",
    component: SwitchGroup,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        direction: {
            control: "radio",
            options: ["vertical", "horizontal"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof SwitchGroup>;

const options = [
    { label: "Wi-Fi", value: "wifi" },
    { label: "Bluetooth", value: "bluetooth" },
    { label: "Airplane Mode", value: "airplane" },
];

export const Default: Story = {
    args: {
        options: options,
        defaultValue: ["wifi"],
    },
};

export const Horizontal: Story = {
    args: {
        options: options,
        direction: "horizontal",
        defaultValue: ["wifi"],
    },
};

export const WithDisabledOption: Story = {
    args: {
        options: [
            ...options,
            { label: "Mobile Data (Disabled)", value: "mobile_data", disabled: true },
        ],
        defaultValue: ["wifi"],
    },
};
