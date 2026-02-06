import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
    title: "Component/Forms/Radio",
    component: Radio,
    argTypes: {
        checked: { control: "boolean" },
        disabled: { control: "boolean" },
        label: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: {
        label: "Option 1",
        value: "option1",
    },
};

export const Checked: Story = {
    args: {
        label: "Checked Option",
        checked: true,
        value: "checked",
    },
};

export const Disabled: Story = {
    args: {
        label: "Disabled Option",
        disabled: true,
        value: "disabled",
    },
};

export const DisabledChecked: Story = {
    args: {
        label: "Disabled Checked Option",
        disabled: true,
        checked: true,
        value: "disabled-checked",
    },
};

export const LongLabel: Story = {
    args: {
        label: "This is a very long label that might wrap to multiple lines depending on the container width.",
        value: "long",
    },
};
