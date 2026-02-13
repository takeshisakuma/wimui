import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "@/components/Grid/Grid";
import React from "react";

const meta: Meta<typeof Grid> = {
    title: "Component/Layout/Grid",
    component: Grid,
    tags: [],
    argTypes: {
        cols: { control: "text" },
        rows: { control: "text" },
        gap: { control: "text" },
        align: {
            control: "select",
            options: ["start", "center", "end", "stretch"],
        },
        justify: {
            control: "select",
            options: ["start", "center", "end", "between", "around", "stretch"],
        },
        flow: {
            control: "select",
            options: ["row", "column", "dense", "row dense", "column dense"],
        },
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
        }}
    >
        {children}
    </div>
);

export const Basic: Story = {
    args: {
        cols: 3,
        gap: 16,
        children: (
            <>
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
                <Box>4</Box>
                <Box>5</Box>
                <Box>6</Box>
            </>
        ),
    },
};

export const CustomColumns: Story = {
    args: {
        cols: "1fr 2fr 1fr",
        gap: "1rem",
        children: (
            <>
                <Box>1fr</Box>
                <Box>2fr</Box>
                <Box>1fr</Box>
            </>
        ),
    },
};
