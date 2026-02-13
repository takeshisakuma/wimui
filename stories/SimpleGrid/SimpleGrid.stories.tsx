import type { Meta, StoryObj } from "@storybook/react-vite";
import { SimpleGrid } from "@/components/SimpleGrid/SimpleGrid";
import React from "react";

const meta: Meta<typeof SimpleGrid> = {
    title: "Component/Layout/SimpleGrid",
    component: SimpleGrid,
    tags: [],
    argTypes: {
        cols: { control: { type: "number", min: 1, max: 12 } },
        spacing: { control: "text" },
        minChildWidth: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
    <div
        style={{
            backgroundColor: "#10b981",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            fontWeight: "bold",
        }}
    >
        {children}
    </div>
);

export const FixedColumns: Story = {
    args: {
        cols: 3,
        spacing: "md",
        children: (
            <>
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
                <Box>4</Box>
                <Box>5</Box>
            </>
        ),
    },
};

export const Responsive: Story = {
    args: {
        minChildWidth: 200,
        spacing: 16,
        children: (
            <>
                <Box>Min 200px</Box>
                <Box>Min 200px</Box>
                <Box>Min 200px</Box>
                <Box>Min 200px</Box>
                <Box>Min 200px</Box>
            </>
        ),
    },
};
