import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@/components/Stack/Stack";
import { Box } from "@/components/Box/Box";

const meta: Meta<typeof Stack> = {
    title: "Component/Layout/Stack",
    component: Stack,
    tags: [],
    argTypes: {
        direction: {
            control: "radio",
            options: ["row", "column"],
        },
        gap: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", 10, 20, 40],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
    args: {
        direction: "column",
        gap: "md",
        children: [
            <Box key="1" bg="#eff6ff" p={20} radius={8} style={{ border: "1px solid #3b82f6" }}>Item 1</Box>,
            <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{ border: "1px solid #22c55e" }}>Item 2</Box>,
            <Box key="3" bg="#fff7ed" p={20} radius={8} style={{ border: "1px solid #f97316" }}>Item 3</Box>,
        ],
    },
};

export const Row: Story = {
    args: {
        direction: "row",
        gap: "lg",
        children: [
            <Box key="1" bg="#eff6ff" p={20} radius={8} style={{ border: "1px solid #3b82f6" }}>Item 1</Box>,
            <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{ border: "1px solid #22c55e" }}>Item 2</Box>,
            <Box key="3" bg="#fff7ed" p={20} radius={8} style={{ border: "1px solid #f97316" }}>Item 3</Box>,
        ],
    },
};

export const SpacingTokens: Story = {
    render: () => (
        <Stack gap="xl">
            <Box bg="#f8fafc" p={10}>Gap: xl</Box>
            <Stack direction="row" gap="xs">
                <Box bg="#eff6ff" p={10}>Gap: xs</Box>
                <Box bg="#eff6ff" p={10}>Gap: xs</Box>
                <Box bg="#eff6ff" p={10}>Gap: xs</Box>
            </Stack>
            <Stack direction="row" gap="lg">
                <Box bg="#f0fdf4" p={10}>Gap: lg</Box>
                <Box bg="#f0fdf4" p={10}>Gap: lg</Box>
                <Box bg="#f0fdf4" p={10}>Gap: lg</Box>
            </Stack>
        </Stack>
    ),
};
