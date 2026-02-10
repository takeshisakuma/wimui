import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorInput } from "./ColorInput";

const meta: Meta<typeof ColorInput> = {
    title: "Component/Pickers & Sliders/ColorInput",
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

