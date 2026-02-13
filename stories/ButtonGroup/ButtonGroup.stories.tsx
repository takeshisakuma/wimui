import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "@/components/ButtonGroup/ButtonGroup";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof ButtonGroup> = {
    title: "Component/Buttons & Actions/ButtonGroup",
    component: ButtonGroup,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        gap: { control: "text" },
        joined: { control: "boolean" },
        priority: {
            control: "select",
            options: ["primary", "secondary", "tertiary"],
        },
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

export const JoinedGroupPrimary: Story = {
    args: {
        joined: true,
        priority: "primary",
    },
    parameters: {
        docs: {
            description: {
                story: "【注意】UXの観点からは、プライマリボタンを複数並べることは推奨されません。技術的な統一機能のデモンストレーションとして参照してください。",
            },
        },
    },
    render: (args) => (
        <ButtonGroup {...args}>
            <Button size="medium" label="button_label" priority="secondary" />
            <Button size="medium" label="button_label" priority="secondary" />
            <Button size="medium" label="button_label" priority="secondary" />
        </ButtonGroup>
    ),
};

export const PriorityOverride: Story = {
    args: {
        priority: "tertiary",
        gap: "10px",
    },
    render: (args) => (
        <ButtonGroup {...args}>
            <Button size="medium" label="Primary Button" priority="primary" />
            <Button size="medium" label="Secondary Button" priority="secondary" />
            <Button size="medium" label="Tertiary Button" priority="tertiary" />
        </ButtonGroup>
    ),
};
