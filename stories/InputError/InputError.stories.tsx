import type { Meta, StoryObj } from "@storybook/react";
import { InputError } from "./InputError";

const meta: Meta<typeof InputError> = {
    title: "Component/Forms/InputError",
    component: InputError,
    argTypes: {
        content: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof InputError>;

export const Default: Story = {
    args: {
        content: "入力内容に誤りがあります。",
    },
};

export const ShortMessage: Story = {
    args: {
        content: "必須項目です。",
    },
};
