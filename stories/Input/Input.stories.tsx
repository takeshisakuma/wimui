import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Label } from "../Label/Label";
import { FieldError } from "../FieldError/FieldError";

const meta: Meta<typeof Input> = {
    title: "Component/Forms/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        state: {
            control: "select",
            options: ["default", "error", "disabled"],
        },
        variant: {
            control: "select",
            options: ["outline", "ghost"],
        },
        type: {
            control: "select",
            options: ["text", "password", "email", "number", "tel", "url"],
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
        <Label label="Password">
            <Input {...args} />
        </Label>
    ),
    args: {
        type: "password",
        placeholder: "Password input",
    },
};

export const WithLabelAndError: StoryObj<typeof Input> = {
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
