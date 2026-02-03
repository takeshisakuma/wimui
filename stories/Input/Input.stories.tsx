import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Label } from "../Label/Label";
import { FieldError } from "../FieldError/FieldError";
import { Button } from "../Button/Button";

const meta: Meta<typeof Input> = {
    title: "Component/Forms/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        leftIcon: {
            control: "select",
            options: [undefined, "SearchIcon"],
        },
        rightIcon: {
            control: "select",
            options: [undefined, "ChevronDownIcon"],
        },
        leftIconColor: {
            control: "select",
            options: [undefined, "primary", "secondary", "tertiary", "destructive", "positive", "caution", "informative", "disabled"],
        },
        rightIconColor: {
            control: "select",
            options: [undefined, "primary", "secondary", "tertiary", "destructive", "positive", "caution", "informative", "disabled"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    render: (args) => (
        <Label label="Default Input">
            <Input {...args} />
        </Label>
    ),
    args: {
        placeholder: "Enter text...",
    },
};

export const SearchIndicator: Story = {
    render: (args) => (
        <Label label="Search Indicator">
            <Input {...args} leftIcon="SearchIcon" placeholder="Search..." />
        </Label>
    ),
    args: {},
};

export const SelectLike: Story = {
    render: (args) => {
        const handleClick = () => alert("Dropdown or Modal would open here!");
        return (
            <Label label="Select-like Input">
                <Input
                    {...args}
                    onClick={handleClick}
                    onRightIconClick={(e) => {
                        e.stopPropagation(); // Prevent duplicate alert
                        handleClick();
                    }}
                />
            </Label>
        );
    },
    args: {
        rightIcon: "ChevronDownIcon",
        placeholder: "Select an option...",
        readOnly: true,
        style: { cursor: "pointer" },
    },
};

export const Clearable: Story = {
    render: (args) => (
        <Label label="Auto-Clearable Input">
            <Input {...args} allowClear placeholder="Type to see clear button..." />
        </Label>
    ),
    args: {
        defaultValue: "Clear me!",
    },
};

export const Outline: Story = {
    render: (args) => (
        <Label label="Outline Input">
            <Input {...args} />
        </Label>
    ),
    args: {
        variant: "outline",
        placeholder: "Outline variant",
    },
};

export const Ghost: Story = {
    render: (args) => (
        <Label label="Ghost Input">
            <Input {...args} />
        </Label>
    ),
    args: {
        variant: "ghost",
        placeholder: "Ghost variant",
    },
};

export const Error: Story = {
    render: (args) => (
        <Label label="Error Input">
            <Input {...args} />
        </Label>
    ),
    args: {
        state: "error",
        defaultValue: "Invalid input",
    },
};

export const Disabled: Story = {
    render: (args) => (
        <Label label="Disabled Input">
            <Input {...args} />
        </Label>
    ),
    args: {
        state: "disabled",
        defaultValue: "Disabled input",
    },
};

export const FullWidth: Story = {
    render: (args) => (
        <Label label="Full Width Input" style={{ width: "100%" }}>
            <Input {...args} />
        </Label>
    ),
    args: {
        fullWidth: true,
        placeholder: "Full width input",
    },
    parameters: {
        layout: "padded",
    },
};

export const Password: Story = {
    render: (args) => (
        <Label label="Basic Password">
            <Input {...args} />
        </Label>
    ),
    args: {
        type: "password",
        placeholder: "Password input",
        defaultValue: "password123",
    },
};

export const PasswordToggle: Story = {
    render: (args) => (
        <Label label="Password with Toggle (Default)">
            <Input {...args} />
        </Label>
    ),
    args: {
        type: "password",
        placeholder: "Enter password...",
        defaultValue: "shhh-it-is-a-secret",
    },
};

export const PasswordNoToggle: Story = {
    render: (args) => (
        <Label label="Password without Toggle (Opt-out)">
            <Input {...args} />
        </Label>
    ),
    args: {
        type: "password",
        showPasswordToggle: false,
        placeholder: "No toggle here...",
    },
};

export const WithLabelAndError: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "320px" }}>
            <Label label="User Name" required>
                <Input {...args} placeholder="Enter your name" />
            </Label>
            {args.state === "error" && (
                <FieldError content="This field is required." />
            )}
        </div>
    ),
    args: {
        state: "default",
    },
};

export const FullSearchBar: Story = {
    render: (args) => (
        <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
            <Label label="Advanced Search" style={{ flex: 1 }}>
                <Input
                    {...args}
                    leftIcon="SearchIcon"
                    allowClear
                    placeholder="Search keywords..."
                />
            </Label>
            <Button priority="secondary" label="Search" iconName="SearchIcon" />
        </div>
    ),
    args: {},
};
