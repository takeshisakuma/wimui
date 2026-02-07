import type { Meta, StoryObj } from "@storybook/react";
import { FieldError } from "./FieldError";

const meta: Meta<typeof FieldError> = {
    title: "Component/Data Entry/FieldError",
    component: FieldError,
    argTypes: {
        content: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof FieldError>;

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
