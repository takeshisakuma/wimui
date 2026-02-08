import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
    title: "Data Entry/NumberInput",
    component: NumberInput,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
    args: {
        placeholder: "数値を入力",
    },
};
