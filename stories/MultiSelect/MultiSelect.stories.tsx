import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "./MultiSelect";

const meta: Meta<typeof MultiSelect> = {
    title: "Component/Forms/MultiSelect",
    component: MultiSelect,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。",
            },
        },
    },
    tags: [],
    argTypes: {
        onChange: { action: "changed" },
    },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const options = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
    { label: "Grape", value: "grape" },
    { label: "Disabled Option", value: "disabled", disabled: true },
];

export const Default: Story = {
    args: {
        options: options,
        placeholder: "Select fruits...",
    },
};

export const WithLabel: Story = {
    args: {
        label: "Favorites",
        options: options,
        placeholder: "Select...",
    },
};

export const MultipleSelected: Story = {
    args: {
        options: options,
        defaultValue: ["apple", "orange"],
    },
};

export const Disabled: Story = {
    args: {
        options: options,
        disabled: true,
        defaultValue: ["banana"],
    },
};
