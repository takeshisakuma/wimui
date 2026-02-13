import type { Meta, StoryObj } from "@storybook/react-vite";
import { Selectbox } from "@/components/Selectbox/Selectbox";

const meta: Meta<typeof Selectbox> = {
    title: "Component/Selection Controls/Selectbox",
    component: Selectbox,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "ユーザーが定義済みの選択肢から1つを選択するためのコンポーネント。",
            },
        },
    },
    tags: [],
    argTypes: {
        onChange: { action: "changed" },
    },
};

export default meta;
type Story = StoryObj<typeof Selectbox>;

const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
    { label: "Disabled Option", value: "opt4", disabled: true },
    { label: "Option 5", value: "opt5" },
];

export const Default: Story = {
    args: {
        options: options,
        placeholder: "Select an option...",
    },
};

export const WithLabel: Story = {
    args: {
        label: "Choose an item",
        options: options,
        placeholder: "Select...",
    },
};

export const Preselected: Story = {
    args: {
        options: options,
        defaultValue: "opt2",
    },
};

export const Disabled: Story = {
    args: {
        options: options,
        disabled: true,
        defaultValue: "opt1",
    },
};


