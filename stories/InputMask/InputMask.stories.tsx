import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputMask } from "@/components/InputMask/InputMask";
import { Label } from "@/components/Label/Label";

const meta: Meta<typeof InputMask> = {
    title: "Component/Form Inputs/InputMask",
    component: InputMask,
    argTypes: {
        mask: {
            control: "text",
            description: "マスクパターン ('9': 数字, 'a': 英字, '*': 英数字)",
        },
        maskChar: {
            control: "text",
            description: "未入力部分のプレースホルダー文字",
        },
    },
};

export default meta;
type Story = StoryObj<typeof InputMask>;

export const ZipCode: Story = {
    render: (args) => (
        <Label label="郵便番号">
            <InputMask {...args} />
        </Label>
    ),
    args: {
        mask: "999-9999",
        placeholder: "000-0000",
    },
};

export const Phone: Story = {
    render: (args) => (
        <Label label="電話番号">
            <InputMask {...args} />
        </Label>
    ),
    args: {
        mask: "(99) 9999-9999",
        placeholder: "(03) 1234-5678",
    },
};

export const CreditCard: Story = {
    render: (args) => (
        <Label label="クレジットカード番号">
            <InputMask {...args} />
        </Label>
    ),
    args: {
        mask: "9999-9999-9999-9999",
        placeholder: "0000-0000-0000-0000",
    },
};

export const CustomMask: Story = {
    render: (args) => (
        <Label label="カスタム（英4-数4-英数1）">
            <InputMask {...args} />
        </Label>
    ),
    args: {
        mask: "aaaa-9999-*",
        placeholder: "ABCD-1234-X",
    },
};


