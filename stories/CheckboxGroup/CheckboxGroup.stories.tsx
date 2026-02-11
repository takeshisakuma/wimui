import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxGroup } from "./CheckboxGroup";
import { useState } from "react";

const meta: Meta<typeof CheckboxGroup> = {
    title: "Component/Selection Controls/CheckboxGroup",
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


