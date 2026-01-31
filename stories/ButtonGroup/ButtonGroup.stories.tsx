import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button/Button";

const meta: Meta<typeof ButtonGroup> = {
    title: "Component/Actions/ButtonGroup",
    component: ButtonGroup,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        gap: { control: "text" },
        joined: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const LargeGroup: Story = {
    render: (args) => (
        <ButtonGroup {...args}>
            <Button size="large" label="button_label" priority="primary" />
            <Button size="large" label="button_label" priority="secondary" />
            <Button size="large" label="button_label" priority="tertiary" />
        </ButtonGroup>
    ),
};

export const MediumGroup: Story = {
    render: (args) => (
        <ButtonGroup {...args}>
            <Button size="medium" label="button_label" priority="primary" />
            <Button size="medium" label="button_label" priority="secondary" />
            <Button size="medium" label="button_label" priority="tertiary" />
        </ButtonGroup>
    ),
};

export const SmallGroup: Story = {
    render: (args) => (
        <ButtonGroup {...args}>
            <Button size="small" label="button_label" priority="primary" />
            <Button size="small" label="button_label" priority="secondary" />
            <Button size="small" label="button_label" priority="tertiary" />
        </ButtonGroup>
    ),
};

export const JoinedGroup: Story = {
    args: {
        joined: true,
    },
    render: (args) => (
        <ButtonGroup {...args}>
            <Button size="medium" label="button_label" priority="secondary" />
            <Button size="medium" label="button_label" priority="secondary" />
            <Button size="medium" label="button_label" priority="secondary" />
        </ButtonGroup>
    ),
};
