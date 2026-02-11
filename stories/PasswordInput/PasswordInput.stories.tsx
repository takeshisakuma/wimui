import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordInput } from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
    title: "Component/Form Inputs/PasswordInput",
    component: PasswordInput,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
    args: {
        placeholder: "パスワードを入力してください",
    },
};


