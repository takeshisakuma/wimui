import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "@/components/Container/Container";
import { Box } from "@/components/Box/Box";

const meta: Meta<typeof Container> = {
    title: "Component/Layout/Container",
    component: Container,
    tags: [],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
    args: {
        children: (
            <Box bg="#f0f0f0" p={20} style={{ border: "1px solid #ccc" }}>
                Container content
            </Box>
        ),
        bg: "#f9f9f9",
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                <Container key={size} size={size} bg="#f8fafc" p={10}>
                    <Box
                        bg="#eff6ff"
                        p={10}
                        style={{ textAlign: "center", border: "1px dashed #3b82f6" }}
                    >
                        Size: {size}
                    </Box>
                </Container>
            ))}
        </div>
    ),
};

export const Fluid: Story = {
    args: {
        fluid: true,
        bg: "#f8fafc",
        children: (
            <Box bg="#eff6ff" p={20} style={{ textAlign: "center", border: "1px dashed #3b82f6" }}>
                Fluid Container (100% width)
            </Box>
        ),
    },
};
