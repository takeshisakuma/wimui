import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxGroup } from "@/components/CheckboxGroup/CheckboxGroup";
import { useState } from "react";

const meta: Meta<typeof CheckboxGroup> = {
    title: "Components/Selection Controls/CheckboxGroup",
    component: CheckboxGroup,
    // tags: ["autodocs"],
    argTypes: {
        direction: {
            control: "radio",
            options: ["vertical", "horizontal"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const options = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date (Disabled)", value: "date", disabled: true },
];

export const Default: Story = {
    args: {
        options: options,
        defaultValue: ["banana"],
    },
};

export const Horizontal: Story = {
    args: {
        options: options,
        direction: "horizontal",
        defaultValue: ["apple", "cherry"],
    },
};

export const Controlled = () => {
    const [value, setValue] = useState<string[]>(["apple"]);
    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>
                Selected: {value.join(", ")}
            </div>
            <CheckboxGroup
                options={options}
                value={value}
                onChange={setValue}
            />
        </div>
    );
};

export const LongLabel: Story = {
    args: {
        options: [
            { label: "This is a very long label that might wrap to multiple lines depending on the container width.", value: "long1" },
            { label: "Another long label that will wrap if the container is narrow enough to force it.", value: "long2" },
        ],
        defaultValue: ["long1"],
    },
};
