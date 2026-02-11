import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Center } from "./Center";
import { Box } from "../Box/Box";

const meta: Meta<typeof Center> = {
    title: "Layout/Center",
    component: Center,
    tags: [],
    argTypes: {
        inline: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Center>;

export const Default: Story = {
    args: {
        children: <Box bg="#eff6ff" p={40} radius={8} style={{ border: "1px solid #3b82f6" }}>Centered Content</Box>,
        h: 200,
        bg: "#f8fafc",
    },
};

export const Inline: Story = {
    render: () => (
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
            Text before
            <Center inline bg="#fecaca" px={10} mx={5} radius={4}>
                Inline Center
            </Center>
            Text after
        </div>
    ),
};

export const Icons: Story = {
    render: () => (
        <Center w={40} h={40} bg="#3b82f6" color="white" radius="full">
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 5v14M5 12h14" />
            </svg>
        </Center>
    ),
};
