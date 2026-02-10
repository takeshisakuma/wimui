import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip, TooltipTrigger, TooltipContent } from "./Tooltip";
import { Button } from "../Button/Button"; // Assuming Button exists

const meta: Meta<typeof Tooltip> = {
    title: "Component/Overlays/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },

    argTypes: {
        delay: { control: "number" },
        isOpen: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    render: (args) => (
        <Tooltip {...args}>
            <TooltipTrigger asChild>
                <Button label="Hover me" />
            </TooltipTrigger>
            <TooltipContent>
                This is a tooltip
            </TooltipContent>
        </Tooltip>
    ),
};

export const Top: Story = {
    render: (args) => (
        <div style={{ padding: "50px" }}>
            <Tooltip {...args}>
                <TooltipTrigger asChild>
                    <Button label="Top" />
                </TooltipTrigger>
                <TooltipContent side="top">
                    Tooltip on top
                </TooltipContent>
            </Tooltip>
        </div>
    ),
};

export const Bottom: Story = {
    render: (args) => (
        <div style={{ padding: "50px" }}>
            <Tooltip {...args}>
                <TooltipTrigger asChild>
                    <Button label="Bottom" />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    Tooltip on bottom
                </TooltipContent>
            </Tooltip>
        </div>
    ),
};

export const Left: Story = {
    render: (args) => (
        <div style={{ padding: "50px" }}>
            <Tooltip {...args}>
                <TooltipTrigger asChild>
                    <Button label="Left" />
                </TooltipTrigger>
                <TooltipContent side="left">
                    Tooltip on left
                </TooltipContent>
            </Tooltip>
        </div>
    ),
};

export const Right: Story = {
    render: (args) => (
        <div style={{ padding: "50px" }}>
            <Tooltip {...args}>
                <TooltipTrigger asChild>
                    <Button label="Right" />
                </TooltipTrigger>
                <TooltipContent side="right">
                    Tooltip on right
                </TooltipContent>
            </Tooltip>
        </div>
    ),
};

export const WithDelay: Story = {
    args: {
        delay: 1000,
    },
    render: (args) => (
        <Tooltip {...args}>
            <TooltipTrigger asChild>
                <Button label="Hover for 1s" />
            </TooltipTrigger>
            <TooltipContent>
                Delayed tooltip
            </TooltipContent>
        </Tooltip>
    ),
};

