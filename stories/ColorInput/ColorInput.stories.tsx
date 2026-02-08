import type { Meta, StoryObj } from "@storybook/react";
import { ColorInput } from "./ColorInput";

const meta: Meta<typeof ColorInput> = {
    title: "Component/Data Entry/ColorInput",
    component: ColorInput,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ColorInput>;

export const Default: Story = {
    args: {
        defaultValue: "#0052cc",
    },
};
