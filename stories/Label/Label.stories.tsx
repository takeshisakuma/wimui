import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./Label";
import { Input } from "../Input/Input";

const meta: Meta<typeof Label> = {
    title: "Component/Form Inputs/Label",
    component: Label,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        label: "Username",
        children: <Input placeholder="Enter your username" />,
    },
};

export const Required: Story = {
    args: {
        label: "Email Address",
        required: true,
        children: <Input type="email" placeholder="email@example.com" />,
    },
};

export const Optional: Story = {
    args: {
        label: "Phone Number",
        showOptional: true,
        children: <Input type="tel" placeholder="000-0000-0000" />,
    },
};

