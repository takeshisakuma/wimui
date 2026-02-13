import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputGroup, InputGroupText } from "@/components/InputGroup/InputGroup";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof InputGroup> = {
    title: "Component/Form Inputs/InputGroup",
    component: InputGroup,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Basic: Story = {
    render: (args) => (
        <InputGroup {...args}>
            <InputGroupText>@</InputGroupText>
            <Input placeholder="username" />
        </InputGroup>
    ),
};

export const WithButton: Story = {
    render: (args) => (
        <InputGroup {...args}>
            <Input placeholder="Search..." />
            <Button priority="primary" iconName="SearchIcon" label="Search" />
        </InputGroup>
    ),
};

export const Suffix: Story = {
    render: (args) => (
        <InputGroup {...args}>
            <Input placeholder="Recipient's username" />
            <InputGroupText>@example.com</InputGroupText>
        </InputGroup>
    ),
};

export const MultipleAddons: Story = {
    render: (args) => (
        <InputGroup {...args}>
            <InputGroupText>$</InputGroupText>
            <InputGroupText>0.00</InputGroupText>
            <Input placeholder="Price" />
            <InputGroupText>.00</InputGroupText>
        </InputGroup>
    ),
};

export const FullWidth: Story = {
    args: {
        fullWidth: true,
    },
    render: (args) => (
        <div style={{ width: "600px" }}>
            <InputGroup {...args}>
                <InputGroupText>Search</InputGroupText>
                <Input placeholder="Type something..." />
                <Button priority="primary" label="Go" />
            </InputGroup>
        </div>
    ),
};

