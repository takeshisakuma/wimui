import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cascader, CascaderOption } from "../../src/components/Cascader/Cascader";

const meta: Meta<typeof Cascader> = {
    title: "Components/Advanced Inputs/Cascader",
    component: Cascader,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Cascader>;

const options: CascaderOption[] = [
    {
        label: "Zhejiang",
        value: "zhejiang",
        children: [
            {
                label: "Hangzhou",
                value: "hangzhou",
                children: [
                    {
                        label: "West Lake",
                        value: "west_lake",
                    },
                ],
            },
        ],
    },
    {
        label: "Jiangsu",
        value: "jiangsu",
        children: [
            {
                label: "Nanjing",
                value: "nanjing",
                children: [
                    {
                        label: "Zhonghua Gate",
                        value: "zhonghua_gate",
                    },
                ],
            },
        ],
    },
];

export const Default: Story = {
    args: {
        options,
        placeholder: "Please select",
    },
};

export const WithLabel: Story = {
    args: {
        options,
        label: "Address",
        placeholder: "Select address",
    },
};

export const HoverExpand: Story = {
    args: {
        options,
        expandTrigger: "hover",
        placeholder: "Hover to expand",
    },
};

export const Disabled: Story = {
    args: {
        options,
        disabled: true,
        placeholder: "Disabled",
    },
};

export const CustomSeparator: Story = {
    args: {
        options,
        separator: " > ",
        defaultValue: ["zhejiang", "hangzhou", "west_lake"],
    },
};
