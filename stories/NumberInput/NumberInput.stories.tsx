import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberInput } from "@/components/NumberInput/NumberInput";

const meta: Meta<typeof NumberInput> = {
    title: "Component/Basic Inputs/NumberInput",
    component: NumberInput,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
    args: {
        placeholder: "数値を入力",
    },
};


