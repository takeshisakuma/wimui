import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof Tooltip> = {
    title: "Component/Overlays/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },

    argTypes: {
        delay: { control: "number" },
        isOpen: { control: "boolean" },
        placement: {
            control: "select",
            options: ["top", "bottom", "left", "right"],
        },
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
            <Tooltip {...args} placement="top">
                <TooltipTrigger asChild>
                    <Button label="Top" />
                </TooltipTrigger>
                <TooltipContent>
                    Tooltip on top
                </TooltipContent>
            </Tooltip>
        </div>
    ),
};

export const Bottom: Story = {
    render: (args) => (
        <div style={{ padding: "50px" }}>
            <Tooltip {...args} placement="bottom">
                <TooltipTrigger asChild>
                    <Button label="Bottom" />
                </TooltipTrigger>
                <TooltipContent>
                    Tooltip on bottom
                </TooltipContent>
            </Tooltip>
        </div>
    ),
};

export const Left: Story = {
    render: (args) => (
        <div style={{ padding: "50px" }}>
            <Tooltip {...args} placement="left">
                <TooltipTrigger asChild>
                    <Button label="Left" />
                </TooltipTrigger>
                <TooltipContent>
                    Tooltip on left
                </TooltipContent>
            </Tooltip>
        </div>
    ),
};

export const Right: Story = {
    render: (args) => (
        <div style={{ padding: "50px" }}>
            <Tooltip {...args} placement="right">
                <TooltipTrigger asChild>
                    <Button label="Right" />
                </TooltipTrigger>
                <TooltipContent>
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


