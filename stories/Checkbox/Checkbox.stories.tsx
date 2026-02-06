import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
    title: "Component/Forms/Checkbox",
    component: Checkbox,
    // tags: ["autodocs"],
    argTypes: {
        checked: { control: "boolean" },
        disabled: { control: "boolean" },
        indeterminate: { control: "boolean" },
        label: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: "Accept terms and conditions",
    },
};

export const Checked: Story = {
    args: {
        label: "Subscribe to newsletter",
        checked: true,
        onChange: () => { }, // Supress warning
    },
};

export const Disabled: Story = {
    args: {
        label: "Disabled option",
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: "Disabled and checked",
        disabled: true,
        checked: true,
        onChange: () => { },
    },
};

export const Indeterminate: Story = {
    args: {
        label: "Indeterminate",
        indeterminate: true,
        checked: true, // Usually indeterminate implies partially selected
        onChange: () => { },
    },
};

export const Controlled = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Checkbox
            label={`Controlled Checkbox: ${checked ? "On" : "Off"}`}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    );
};
