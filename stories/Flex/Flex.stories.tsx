import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from "@/components/Flex/Flex";
import React from "react";

const meta: Meta<typeof Flex> = {
    title: "Components/Layout/Flex",
    component: Flex,
    tags: [],
    argTypes: {
        direction: {
            control: "select",
            options: ["row", "row-reverse", "column", "column-reverse"],
        },
        align: {
            control: "select",
            options: ["start", "center", "end", "stretch", "baseline"],
        },
        justify: {
            control: "select",
            options: ["start", "center", "end", "between", "around", "evenly", "stretch"],
        },
        wrap: {
            control: "select",
            options: ["nowrap", "wrap", "wrap-reverse"],
        },
        gap: { control: "text" },
        inline: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children, color = "#3b82f6" }: { children: React.ReactNode; color?: string }) => (
    <div
        style={{
            backgroundColor: color,
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            minWidth: "60px",
        }}
    >
        {children}
    </div>
);

export const Basic: Story = {
    args: {
        direction: "row",
        gap: 16,
        children: (
            <>
                <Box>1</Box>
                <Box color="#10b981">2</Box>
                <Box color="#f59e0b">3</Box>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: "column",
        gap: "1rem",
        children: (
            <>
                <Box>Item 1</Box>
                <Box color="#10b981">Item 2</Box>
                <Box color="#ef4444">Item 3</Box>
            </>
        ),
    },
};

export const JustifyBetween: Story = {
    args: {
        justify: "between",
        gap: 16,
        style: { width: "100%", border: "1px solid #ddd", padding: "10px" },
        children: (
            <>
                <Box>Left</Box>
                <Box color="#8b5cf6">Middle</Box>
                <Box color="#ec4899">Right</Box>
            </>
        ),
    },
};

export const Wrapped: Story = {
    args: {
        wrap: "wrap",
        gap: 16,
        style: { width: "200px", padding: "10px", border: "1px solid #ccc" },
        children: (
            <>
                <Box>1</Box>
                <Box color="#10b981">2</Box>
                <Box color="#f59e0b">3</Box>
                <Box color="#ef4444">4</Box>
                <Box color="#8b5cf6">5</Box>
            </>
        ),
    },
};
